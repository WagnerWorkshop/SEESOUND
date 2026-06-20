import * as THREE from 'three'
import { compileRules } from './rules/RuleCompiler.js'
import { ParticleArchive } from './ParticleArchive.js'
import { createIso226CompensationLut, sampleIso226CompensationDb } from './audio/Iso226Lut.js'

// ── Frequency axis constants (shared by both layout modes) ────────────────────
const FREQ_MIN_HZ = 16
const FREQ_MAX_HZ = 20000
const LOG_FREQ_MIN = Math.log2(FREQ_MIN_HZ)
const LOG_FREQ_MAX = Math.log2(FREQ_MAX_HZ)
const MIN_PARTICLES_BY_FRAME = 100
const MAX_PARTICLES_BY_FRAME = 5000

/** Normalise any Hz value to [0, 1] on a log₂ axis (16 Hz → 0, 20 kHz → 1) */
function freqToLogNorm(hz) {
    return Math.min(1, Math.max(0,
        (Math.log2(Math.max(hz, FREQ_MIN_HZ)) - LOG_FREQ_MIN) /
        (LOG_FREQ_MAX - LOG_FREQ_MIN)
    ))
}

function sampleLogCqtArrayAtHz(arrayLike, hz) {
    if (!arrayLike || !Number.isFinite(arrayLike.length) || arrayLike.length <= 0) return null
    if (arrayLike.length === 1) {
        const only = Number(arrayLike[0])
        return Number.isFinite(only) ? only : null
    }

    const safeHz = Math.max(FREQ_MIN_HZ, Math.min(FREQ_MAX_HZ, Number(hz) || FREQ_MIN_HZ))
    const logNorm = (Math.log2(safeHz) - LOG_FREQ_MIN) / (LOG_FREQ_MAX - LOG_FREQ_MIN)
    const t = Math.max(0, Math.min(1, logNorm))
    const pos = t * (arrayLike.length - 1)
    const i0 = Math.max(0, Math.min(arrayLike.length - 1, Math.floor(pos)))
    const i1 = Math.max(0, Math.min(arrayLike.length - 1, i0 + 1))
    const frac = pos - i0

    const v0 = Number(arrayLike[i0])
    const v1 = Number(arrayLike[i1])
    if (!Number.isFinite(v0) && !Number.isFinite(v1)) return null
    if (!Number.isFinite(v0)) return v1
    if (!Number.isFinite(v1)) return v0
    return v0 + (v1 - v0) * frac
}

function normalizeByRange(value, minValue, maxValue) {
    const lo = Number(minValue)
    const hi = Number(maxValue)
    const x = Number(value)
    if (!Number.isFinite(x)) return 0
    if (!Number.isFinite(lo) || !Number.isFinite(hi) || hi <= lo) return clamp01(x)
    return clamp01((x - lo) / (hi - lo))
}

function shapeToValue(shapeType) {
    if (shapeType === 'circle') return 1
    if (shapeType === 'square') return 0
    if (Number.isFinite(shapeType)) return shapeType > 0.5 ? 1 : 0
    return 0
}

function clamp01(value) {
    return Math.max(0, Math.min(1, value))
}

function normalizeHue(hue) {
    if (!Number.isFinite(hue)) return null
    // Values > 360 are in degrees (e.g. 720° = two full rotations).
    // Values ≤ 360 are treated as unit-space [0,1) and just wrap mod 1.
    const unitHue = Math.abs(hue) > 360 ? hue / 360 : hue
    return ((unitHue % 1) + 1) % 1
}

// ── Frequency-to-note helpers ──
function frequencyToMidi(freqHz) {
    const hz = Math.max(1, Number(freqHz) || 0)
    if (hz <= 0) return 0
    return 12 * Math.log2(hz / 440) + 69
}
function midiToOctave(midi) { return Math.max(-2, Math.min(12, Math.floor((Number(midi) || 0) / 12) - 1)) }
function midiToPitchClass(midi) {
    // Continuous fractional pitch class (0-12), not discretised to semitones.
    // A4=440Hz → MIDI 69.0 → pitch class 9.0.  C4=261.6Hz → MIDI 60.0 → 0.0.
    const m = Number(midi) || 0
    return ((m % 12) + 12) % 12
}

/**
 * Compute band-level texture features by scanning a frequency window
 * around hzCenter spanning bandOctaves (in octaves).
 * @param {number} hzCenter - Centre frequency of the band
 * @param {number} bandOctaves - Bandwidth in octaves
 * @param {Float32Array|null} binMagArr - Per-bin magnitude array (normalised 0-1)
 * @param {Float32Array|null} binFluxArr - Per-bin flux array
 * @param {Float32Array|null} binPhaseDevArr - Per-bin phase deviation array
 * @param {Uint8Array} freqData - Raw frequency data
 * @param {number} binMin - Minimum bin index for the bucket
 * @param {number} binMax - Maximum bin index for the bucket
 * @param {Function} binToHzFn - Function to convert bin index to Hz
 * @param {Function} hzToBinFn - Function to convert Hz to bin index
 * @returns {{ flatness: number, centroid: number, flux: number, instability: number, bandEnergy: number }}
 */
function computeBandFeatures(hzCenter, bandOctaves, binMagArr, binFluxArr, binPhaseDevArr, freqData, binMin, binMax, binToHzFn, hzToBinFn) {
    if (!bandOctaves || bandOctaves <= 0) {
        return { flatness: 0, centroid: 0, flux: 0, instability: 0, bandEnergy: 0 }
    }
    const halfOct = bandOctaves / 2
    const hzLow = Math.max(FREQ_MIN_HZ, hzCenter / Math.pow(2, halfOct))
    const hzHigh = Math.min(FREQ_MAX_HZ, hzCenter * Math.pow(2, halfOct))
    const loBin = Math.max(binMin, hzToBinFn(hzLow))
    const hiBin = Math.min(binMax, hzToBinFn(hzHigh))
    const n = Math.max(1, hiBin - loBin + 1)

    let sumMag = 0
    let sumLog = 0
    let sumCentroid = 0
    let sumFlux = 0
    let sumInstability = 0
    let weightedFreq = 0
    let fluxCount = 0
    let instCount = 0

    for (let i = loBin; i <= hiBin; i++) {
        const byte = freqData[i]
        const hzAtI = binToHzFn(i)
        // CQT arrays are log-spaced — MUST sample by Hz, not by bin index
        const cqtMag = sampleLogCqtArrayAtHz(binMagArr, hzAtI)
        const mag = Number.isFinite(cqtMag) ? cqtMag : (byte / 255)
        sumMag += mag
        if (mag > 1e-9) sumLog += Math.log(Math.max(1e-12, mag))
        sumCentroid += hzAtI * mag
        weightedFreq += mag

        // CQT arrays: sample by Hz
        const cqtFlux = sampleLogCqtArrayAtHz(binFluxArr, hzAtI)
        if (Number.isFinite(cqtFlux)) { sumFlux += cqtFlux; fluxCount++ }
        const cqtInstability = sampleLogCqtArrayAtHz(binPhaseDevArr, hzAtI)
        if (Number.isFinite(cqtInstability)) { sumInstability += cqtInstability; instCount++ }
    }

    // Flatness = geometric mean / arithmetic mean (Wiener entropy)
    const arithMean = sumMag / n
    const flatness = arithMean > 1e-12 ? Math.exp(sumLog / n) / arithMean : 0

    // Centroid = weighted frequency centre
    const centroid = weightedFreq > 1e-9 ? sumCentroid / weightedFreq : 0

    // Flux = average per-bin flux in the band
    const flux = fluxCount > 0 ? sumFlux / fluxCount : 0

    // Instability = average phase deviation
    const instability = instCount > 0 ? sumInstability / instCount : 0

    // Band energy = total magnitude
    const bandEnergy = sumMag / n

    return { flatness, centroid, flux, instability, bandEnergy }
}

// ── Blend: when both HSB and RGB are set, blend them so neither is lost ──
// Brightness (HSV value V) works as follows:
//   - brightness=0 → black
//   - brightness=1 → full colour intensity
//   - brightness>1 → overbright, blends toward white
// When brightness is set alongside RGB, it scales the final RGB toward white.
function blendHsbRgb(hue, sat, bri, r, g, b) {
    const hasHue = Number.isFinite(hue)
    const hasSat = Number.isFinite(sat)
    const hasBri = Number.isFinite(bri)
    const hasRgb = Number.isFinite(r) || Number.isFinite(g) || Number.isFinite(b)
    const hasHsb = hasHue || hasSat || hasBri

    // No colour rules at all → return null, caller keeps existing buffer colour (grayscale default)
    if (!hasHsb && !hasRgb) return null

    // Brightness-only (no hue, no sat, no RGB): grayscale from black to white
    if (hasBri && !hasHue && !hasSat && !hasRgb) {
        const v = Math.max(0, bri)
        return { r: Math.min(1, v), g: Math.min(1, v), b: Math.min(1, v) }
    }

    // Compute base RGB from whatever is set
    let baseR = 0, baseG = 0, baseB = 0

    if (hasHsb) {
        // Build HSB colour
        const hh = hasHue ? normalizeHue(hue) ?? 0 : 0
        const ss = hasSat ? clamp01(sat) : 0
        // Value: 0=black, 1=full colour, >1=overbright (white blend)
        const vv = hasBri ? Math.max(0, bri) : 1
        const hsvRgb = hsvToRgb(hh, ss, Math.min(1, vv))
        baseR = hsvRgb.r
        baseG = hsvRgb.g
        baseB = hsvRgb.b
        // Overbright: blend toward white
        if (vv > 1) {
            const over = vv - 1
            const maxOver = Math.min(over, 2)
            const t = maxOver / 2
            baseR = baseR * (1 - t) + t
            baseG = baseG * (1 - t) + t
            baseB = baseB * (1 - t) + t
        }
    }

    if (hasRgb) {
        const wr = Number.isFinite(r) ? clamp01(r) : 0
        const wg = Number.isFinite(g) ? clamp01(g) : 0
        const wb = Number.isFinite(b) ? clamp01(b) : 0
        if (hasHsb) {
            // Both HSB and RGB: HSB is primary (chroma from hue/saturation/brightness).
            // RGB provides a subtle secondary tint so explicit rgb() outputs aren't lost,
            // but does NOT dilute HSB's chroma (which was the old 50/50 bug).
            const tint = 0.15
            baseR = baseR * (1 - tint) + wr * tint
            baseG = baseG * (1 - tint) + wg * tint
            baseB = baseB * (1 - tint) + wb * tint
        } else {
            // RGB only
            baseR = wr
            baseG = wg
            baseB = wb
            // If brightness is set alongside RGB, scale the result
            if (hasBri) {
                const v = Math.max(0, bri)
                if (v <= 1) {
                    baseR *= v
                    baseG *= v
                    baseB *= v
                } else {
                    // Overbright: blend toward white
                    const t = Math.min(1, (v - 1) / 2)
                    baseR = baseR * (1 - t) + t
                    baseG = baseG * (1 - t) + t
                    baseB = baseB * (1 - t) + t
                }
            }
        }
    }

    return { r: clamp01(baseR), g: clamp01(baseG), b: clamp01(baseB) }
}

function rgbToHsv(r, g, b) {
    const rr = clamp01(r)
    const gg = clamp01(g)
    const bb = clamp01(b)
    const max = Math.max(rr, gg, bb)
    const min = Math.min(rr, gg, bb)
    const delta = max - min
    let h = 0
    if (delta > 1e-6) {
        if (max === rr) h = ((gg - bb) / delta) % 6
        else if (max === gg) h = ((bb - rr) / delta) + 2
        else h = ((rr - gg) / delta) + 4
        h /= 6
        if (h < 0) h += 1
    }
    const s = max <= 1e-6 ? 0 : delta / max
    const v = max
    return { h, s, v }
}

function hydrateColorState(state, r, g, b) {
    if (!state || typeof state !== 'object') return
    const base = rgbToHsv(r, g, b)
    if (!Number.isFinite(state.hue)) state.hue = base.h
    if (!Number.isFinite(state.saturation)) state.saturation = base.s
    // Do NOT auto-set brightness from RGB — the user controls brightness independently
    // via the brightness rule output. If unset, it stays undefined so blendHsbRgb
    // can determine the correct behaviour.
}

function hsvToRgb(h, s, v) {
    const hh = normalizeHue(h) ?? 0
    const ss = clamp01(s)
    const vv = clamp01(v)
    const i = Math.floor(hh * 6)
    const f = hh * 6 - i
    const p = vv * (1 - ss)
    const q = vv * (1 - f * ss)
    const t = vv * (1 - (1 - f) * ss)
    switch (i % 6) {
        case 0: return { r: vv, g: t, b: p }
        case 1: return { r: q, g: vv, b: p }
        case 2: return { r: p, g: vv, b: t }
        case 3: return { r: p, g: q, b: vv }
        case 4: return { r: t, g: p, b: vv }
        default: return { r: vv, g: p, b: q }
    }
}

const POINT_VERTEX_SHADER = `
attribute float psize;
attribute vec3 color;
attribute float valpha;
attribute float shapeType;
uniform float uViewportHeight;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;
varying float vFogDepth;

void main() {
    vColor = color;
    vAlpha = valpha;
    vShapeType = shapeType;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 clipPos = projectionMatrix * mvPosition;
    float clipW = max(1e-6, abs(clipPos.w));
    float pxPerWorld = 0.5 * uViewportHeight * projectionMatrix[1][1] / clipW;
    gl_PointSize = max(1.0, psize * pxPerWorld);
    vFogDepth = -mvPosition.z;
    gl_Position = clipPos;
}
`

const POINT_FRAGMENT_SHADER = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;
varying float vFogDepth;
uniform float uFogEnabled;
uniform float uFogDensity;
uniform vec3 uFogColor;

void main() {
    if (vShapeType > 0.5) {
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
    }

    float alpha = clamp(vAlpha, 0.0, 1.0);
    if (alpha <= 0.001) discard;
    vec3 color = vColor;
    if (uFogEnabled > 0.5 && uFogDensity > 0.0) {
        float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
        fogFactor = clamp(fogFactor, 0.0, 1.0);
        color = mix(color, uFogColor, fogFactor);
    }
    gl_FragColor = vec4(color, alpha);
}
`

// ─────────────────────────────────────────────────────────────────────────────

export class ParticleSystem {
    /**
     * @param {THREE.Scene} scene
     * @param {{ maxParticles?: number }} opts
     */
    constructor(scene, opts = {}) {
        this._scene = scene
        this._N = Math.max(1, Math.floor(opts.maxParticles ?? 1024))
        this._capacity = this._N
        this._maxActiveParticles = this._N
        this._visibleCount = 0
        this._visible_count = 0
        this._paintCount = 0
        this._lineVisibleCount = 0
        this._insertIndex = 0
        this._insert_index = 0

        const geo = new THREE.BufferGeometry()
        const lineGeo = new THREE.BufferGeometry()
        this._geo = geo
        this._lineGeo = lineGeo
        this._allocateBuffers(this._N)

        const mat = new THREE.ShaderMaterial({
            vertexShader: POINT_VERTEX_SHADER,
            fragmentShader: POINT_FRAGMENT_SHADER,
            uniforms: {
                uViewportHeight: { value: 1 },
                uFogEnabled: { value: 0 },
                uFogDensity: { value: 0 },
                uFogColor: { value: new THREE.Color(0, 0, 0) },
            },
            transparent: true,
            depthWrite: true,
            blending: THREE.AdditiveBlending,
        })

        this._mesh = new THREE.Points(geo, mat)
        this._mesh.frustumCulled = false
        const lineMat = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            depthWrite: true,
        })
        this._lineMesh = new THREE.LineSegments(lineGeo, lineMat)
        this._lineMesh.frustumCulled = false
        scene.add(this._mesh)
        scene.add(this._lineMesh)
        this._mat = mat
        this._lineMat = lineMat
        this._lastBlending = mat.blending
        this._background = new THREE.Color(0, 0, 0)
        this._cameraOutput = {
            x: null,
            y: null,
            z: null,
            zoom: null,
            targetX: null,
            targetY: null,
            targetZ: null,
            angleOfView: null,
        }
        this._compiledRules = compileRules([])
        this._ruleCompileState = this._compiledRules
        this._frameCounter = 0
        this._lastUpdateT = performance.now()
        this._lastPersistMode = 0
        this._archive = new ParticleArchive()
        this._archive.updateOffloadBatch(this._N)
        // ── Band texture analysis: previous-frame storage ──
        /** @type {Float64Array|number[]} Bucket-band total energy from previous frame */
        this._bandPrevEnergy = []
        /** @type {Float64Array|number[]} Bucket-band per-bin magnitude array from previous frame (for bandFlux) */
        this._bandPrevMag = []
        /** @type {number} Frame counter for band data refresh */
        this._bandFrameN = -1
        // ── ISO 226 equal-loudness compensation LUT ──
        /** @type {object|null} */
        this._iso226Lut = null
        /** @type {number} Tracks last known FFT size to rebuild LUT when it changes */
        this._iso226FftSize = 0
        /** @type {number} Caches last hearing phon value to detect slider change */
        this._lastHearingPhon = -1
        /** @type {number} Hearing blend amount (0..1), cached from params each frame */
        this._hearingAmount = 0
    }

    _allocateBuffers(maxParticles) {
        const oldPos = this._pos
        const oldCol = this._col
        const oldSz = this._sz
        const oldAlpha = this._alpha
        const oldShape = this._shape
        const oldPan = this._pan
        const oldBinRms = this._binRms
        const oldIsFund = this._isFundamental
        const oldLinePos = this._linePos
        const oldLineCol = this._lineCol
        const oldLineThick = this._lineThickness
        const oldLineAlpha = this._lineAlpha

        this._capacity = Math.max(1, Math.floor(maxParticles))
        this._N = this._capacity
        this._maxActiveParticles = this._capacity
        // Preserve current visible count — don't reset to 0 on resize
        const prevVisible = this._visible_count || this._visibleCount || 0
        this._insertIndex = prevVisible
        if (this._archive) this._archive.updateOffloadBatch(this._N)

        const copy = (old, newLen) => {
            const arr = new Float32Array(newLen)
            if (old) {
                const copyLen = Math.min(old.length, newLen)
                for (let i = 0; i < copyLen; i++) arr[i] = old[i]
            }
            return arr
        }
        this._pos = copy(oldPos, this._N * 3)
        this._col = copy(oldCol, this._N * 3)
        this._sz = copy(oldSz, this._N)
        this._alpha = copy(oldAlpha, this._N)
        this._shape = copy(oldShape, this._N)
        this._pan = copy(oldPan, this._N)
        this._binRms = copy(oldBinRms, this._N)
        this._isFundamental = copy(oldIsFund, this._N)
        this._linePos = copy(oldLinePos, this._N * 2 * 3)
        this._lineCol = copy(oldLineCol, this._N * 2 * 3)
        this._lineThickness = copy(oldLineThick, this._N)
        this._lineAlpha = copy(oldLineAlpha, this._N)

        this._aPos = new THREE.BufferAttribute(this._pos, 3)
        this._aCol = new THREE.BufferAttribute(this._col, 3)
        this._aSz = new THREE.BufferAttribute(this._sz, 1)
        this._aAlpha = new THREE.BufferAttribute(this._alpha, 1)
        this._aShape = new THREE.BufferAttribute(this._shape, 1)
        this._aLinePos = new THREE.BufferAttribute(this._linePos, 3)
        this._aLineCol = new THREE.BufferAttribute(this._lineCol, 3)

        for (const a of [this._aPos, this._aCol, this._aSz, this._aAlpha, this._aShape, this._aLinePos, this._aLineCol]) a.setUsage(THREE.DynamicDrawUsage)

        this._geo.setAttribute('position', this._aPos)
        this._geo.setAttribute('color', this._aCol)
        this._geo.setAttribute('vcolor', this._aCol)
        this._geo.setAttribute('psize', this._aSz)
        this._geo.setAttribute('valpha', this._aAlpha)
        this._geo.setAttribute('shapeType', this._aShape)
        this._lineGeo.setAttribute('position', this._aLinePos)
        this._lineGeo.setAttribute('color', this._aLineCol)

        this.clear()
    }

    _getActiveParticleCapacity() {
        return Math.max(1, Math.min(this._capacity || this._N, this._maxActiveParticles || this._N))
    }

    _markAttributeRange(attribute, offset, count) {
        if (!attribute || count <= 0) return
        const safeOffset = Math.max(0, Math.floor(offset))
        const safeCount = Math.max(0, Math.floor(count))
        if (safeCount <= 0) return

        if (typeof attribute.addUpdateRange === 'function') {
            attribute.addUpdateRange(safeOffset, safeCount)
            attribute.needsUpdate = true
            return
        }

        if (attribute.updateRange) {
            const current = attribute.updateRange
            if (!Number.isFinite(current.count) || current.count < 0) {
                current.offset = safeOffset
                current.count = safeCount
            } else {
                const start = Math.min(current.offset, safeOffset)
                const end = Math.max(current.offset + current.count, safeOffset + safeCount)
                current.offset = start
                current.count = end - start
            }
            attribute.needsUpdate = true
            return
        }

        attribute.needsUpdate = true
    }

    _markPointRangeDirty(minIndex, maxIndex) {
        if (!Number.isFinite(minIndex) || !Number.isFinite(maxIndex) || maxIndex < minIndex) return
        const min = Math.max(0, Math.floor(minIndex))
        const max = Math.max(min, Math.floor(maxIndex))
        const span = (max - min + 1)
        this._markAttributeRange(this._aPos, min * 3, span * 3)
        this._markAttributeRange(this._aCol, min * 3, span * 3)
        this._markAttributeRange(this._aSz, min, span)
        this._markAttributeRange(this._aAlpha, min, span)
        this._markAttributeRange(this._aShape, min, span)
    }

    _markLineRangeDirty(minIndex, maxIndex) {
        if (!Number.isFinite(minIndex) || !Number.isFinite(maxIndex) || maxIndex < minIndex) return
        const min = Math.max(0, Math.floor(minIndex))
        const max = Math.max(min, Math.floor(maxIndex))
        const span = (max - min + 1)
        this._markAttributeRange(this._aLinePos, min * 6, span * 6)
        this._markAttributeRange(this._aLineCol, min * 6, span * 6)
    }

    rehydrateArchivedToActive(request = {}) {
        const buffers = {
            pos: this._pos,
            col: this._col,
            sz: this._sz,
            alpha: this._alpha,
            shape: this._shape,
            pan: this._pan,
            binRms: this._binRms,
            isFundamental: this._isFundamental
        }
        const { rehydrated, mode } = this._archive.rehydrateArchivedToActive(request, buffers, this._N)

        this._paintCount = rehydrated
        this._visibleCount = rehydrated
        this._insertIndex = rehydrated % this._getActiveParticleCapacity()
        this._geo.setDrawRange(0, rehydrated)
        this._lineVisibleCount = 0
        this._lineGeo.setDrawRange(0, 0)

        // Use update ranges instead of full-buffer needsUpdate
        if (rehydrated > 0) {
            this._markPointRangeDirty(0, rehydrated - 1)
        }

        return { rehydrated, mode }
    }

    getArchiveStats() {
        return {
            activePoints: this._visibleCount,
            archivedPoints: this._archive.pointCount,
            archivedChunks: this._archive.chunks.length,
        }
    }

    setMaxParticles(nextMax) {
        const wanted = Math.max(1, Math.floor(nextMax || 1))

        // Allow increasing capacity at runtime; otherwise startup capacity becomes a hidden hard ceiling.
        if (wanted > this._capacity) {
            this._allocateBuffers(wanted)
        }

        const clamped = Math.max(1, Math.min(this._capacity, wanted))
        if (clamped === this._maxActiveParticles) return

        this._maxActiveParticles = clamped
        this._visibleCount = Math.min(this._visibleCount, clamped)
        this._visible_count = this._visibleCount
        this._paintCount = this._visibleCount
        this._paint_count = this._visibleCount
        this._lineVisibleCount = Math.min(this._lineVisibleCount, clamped)
        this._insertIndex = this._visibleCount % clamped
        this._insert_index = this._insertIndex

        this._geo.setDrawRange(0, this._visibleCount)
        this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
    }

    clear() {
        this._paintCount = 0
        this._visibleCount = 0
        this._visible_count = 0
        this._paint_count = 0
        this._insertIndex = 0
        this._insert_index = 0
        this._lineVisibleCount = 0
        if (this._archive) this._archive.clear()
        this._geo.setDrawRange(0, 0)
        this._lineGeo.setDrawRange(0, 0)
        this._aPos.needsUpdate = true
        this._aCol.needsUpdate = true
        this._aSz.needsUpdate = true
        this._aAlpha.needsUpdate = true
        this._aShape.needsUpdate = true
        this._aLinePos.needsUpdate = true
        this._aLineCol.needsUpdate = true
    }

    clearCanvas() {
        this.clear()
    }

    scaleAllParticleSizes(ratio) {
        const r = Number(ratio)
        if (!Number.isFinite(r) || r <= 0) return

        for (let i = 0; i < this._visibleCount; i++) {
            this._sz[i] = Math.max(0, this._sz[i] * r)
        }

        if (this._archive) this._archive.scaleAllParticleSizes(ratio)

        this._aSz.needsUpdate = true
    }

    setViewportHeight(pxHeight) {
        const h = Math.max(1, Number(pxHeight) || 1)
        if (this._mat?.uniforms?.uViewportHeight) {
            this._mat.uniforms.uViewportHeight.value = h
        }
    }

    setFogState({ enabled = false, density = 0, color = null } = {}) {
        const fogEnabled = !!enabled
        const fogDensity = Math.max(0, Number(density) || 0)
        if (this._mat?.uniforms?.uFogEnabled) this._mat.uniforms.uFogEnabled.value = fogEnabled ? 1 : 0
        if (this._mat?.uniforms?.uFogDensity) this._mat.uniforms.uFogDensity.value = fogDensity
        if (this._mat?.uniforms?.uFogColor && color?.isColor) this._mat.uniforms.uFogColor.value.copy(color)

        if (this._lineMat && this._lineMat.fog !== fogEnabled) {
            this._lineMat.fog = fogEnabled
            this._lineMat.needsUpdate = true
        }
    }

    onRulesChanged(newRules) {
        const compiled = compileRules(newRules)
        this._compiledRules = compiled
        this._ruleCompileState = compiled
        return compiled
    }

    getRuleCompileState() {
        return this._ruleCompileState
    }

    getBackgroundColor() {
        return this._background
    }

    getCameraOutput() {
        return this._cameraOutput
    }

    // NOTE: _buildRuleInputs (and helpers frequencyToPitchClass, frequencyToOctave)
    // were removed in v2.0. All call sites replaced with _frameRuleBase + Object.assign.

    getVisibleBounds() {
        const n = Math.max(0, this._visibleCount)
        if (n === 0) {
            return {
                empty: true,
                min: new THREE.Vector3(),
                max: new THREE.Vector3(),
                center: new THREE.Vector3(),
                size: new THREE.Vector3(),
            }
        }

        const min = new THREE.Vector3(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
        const max = new THREE.Vector3(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY)
        for (let i = 0; i < n; i++) {
            const x = this._pos[i * 3]
            const y = this._pos[i * 3 + 1]
            const z = this._pos[i * 3 + 2]
            if (x < min.x) min.x = x
            if (y < min.y) min.y = y
            if (z < min.z) min.z = z
            if (x > max.x) max.x = x
            if (y > max.y) max.y = y
            if (z > max.z) max.z = z
        }

        const center = min.clone().add(max).multiplyScalar(0.5)
        const size = max.clone().sub(min)
        return { empty: false, min, max, center, size }
    }

    applySpawnRulesToParticle(ctx) {
        this._compiledRules.applySpawnRules(ctx)
    }

    applyLivingRulesToRange(ctx, start, end) {
        const maxTouches = Math.max(0, end - start)
        const stride = 1
        const loopCtx = ctx || {}
        const loopInputs = loopCtx.inputs || (loopCtx.inputs = {})

        // Accumulators for cloud network modifiers (aggregated across all particles)
        let netRep = 0, netCg = 0, netTen = 0
        let netCount = 0
        const hw = this._canvasHW || 500
        const hh = this._canvasHH || 500

        let touched = 0
        for (let i = start; i < end; i += stride) {
            if (touched >= maxTouches) break
            loopInputs.pan = Number.isFinite(this._pan[i]) ? this._pan[i] : 0
            loopInputs.binRMSEnergy = Number.isFinite(this._binRms[i]) ? this._binRms[i] : 0
            loopInputs.isFundamental = Number.isFinite(this._isFundamental[i]) ? this._isFundamental[i] : 0
            const particle = {
                x: this._pos[i * 3],
                y: this._pos[i * 3 + 1],
                z: this._pos[i * 3 + 2],
                size: this._sz[i],
                red: this._col[i * 3],
                green: this._col[i * 3 + 1],
                blue: this._col[i * 3 + 2],
                opacity: this._alpha[i],
                shapeType: this._shape[i] > 0.5 ? 'circle' : 'square',
            }
            hydrateColorState(particle, particle.red, particle.green, particle.blue)

            this._compiledRules.applyLivingRules(loopCtx, particle)

            // ── Aura → XYZ conversion ──
            // Aura outputs create offsets from the entity centroid (average of
            // all fundamental isFundamental=1 particles). This ensures harmonics
            // distribute around the cloud centre, not around world origin (0,0,0).
            const cloudScale = Number.isFinite(particle.cloudSize) ? Math.max(0.01, particle.cloudSize) : 1
            const ec = this._entityCentroid || { x: 0, y: 0, z: 0 }
            if (Number.isFinite(particle.auraDistance)) {
                const dist = particle.auraDistance * Math.max(hw, hh) * 0.5 * cloudScale
                const angle = Number.isFinite(particle.auraAngle)
                    ? particle.auraAngle * Math.PI * 2
                    : 0
                if (Number.isFinite(particle.auraLatitude)) {
                    // Spherical: offset from entity centroid
                    const lat = (particle.auraLatitude - 0.5) * Math.PI
                    particle.x = ec.x + dist * Math.cos(lat) * Math.cos(angle)
                    particle.y = ec.y + dist * Math.sin(lat)
                    particle.z = ec.z + dist * Math.cos(lat) * Math.sin(angle)
                } else {
                    // Cylindrical: offset from entity centroid
                    const elev = Number.isFinite(particle.auraElevation)
                        ? (particle.auraElevation - 0.5) * Math.max(hw, hh) * cloudScale * 0.5
                        : 0
                    particle.x = ec.x + dist * Math.cos(angle)
                    particle.y = ec.y + elev
                    particle.z = ec.z + dist * Math.sin(angle)
                }
            } else if (Number.isFinite(particle.cloudSize)) {
                // Random cloud: scatter around entity centroid
                const radius = particle.cloudSize * Math.max(hw, hh) * 0.4
                const theta = Math.random() * Math.PI * 2
                const phi = Math.acos(2 * Math.random() - 1)
                particle.x = ec.x + radius * Math.sin(phi) * Math.cos(theta)
                particle.y = ec.y + radius * Math.sin(phi) * Math.sin(theta)
                particle.z = ec.z + radius * Math.cos(phi)
            }

            // ── Network modifier collection (aggregate across all particles) ──
            if (Number.isFinite(particle.repulsion)) { netRep += particle.repulsion; netCount++ }
            if (Number.isFinite(particle.centerGravity)) { netCg += particle.centerGravity; netCount++ }
            if (Number.isFinite(particle.tension)) { netTen += particle.tension; netCount++ }

            this._pos[i * 3] = Number.isFinite(particle.x) ? particle.x : this._pos[i * 3]
            this._pos[i * 3 + 1] = Number.isFinite(particle.y) ? particle.y : this._pos[i * 3 + 1]
            this._pos[i * 3 + 2] = Number.isFinite(particle.z) ? particle.z : this._pos[i * 3 + 2]
            this._sz[i] = Number.isFinite(particle.size) ? Math.max(0, particle.size) : this._sz[i]
            // Blend HSB + RGB together (no gating). The blend function handles
            // cases where only one system is active.
            const blended = blendHsbRgb(particle.hue, particle.saturation, particle.brightness,
                particle.red, particle.green, particle.blue)
            let nextR = blended ? (Number.isFinite(blended.r) ? clamp01(blended.r) : this._col[i * 3]) : this._col[i * 3]
            let nextG = blended ? (Number.isFinite(blended.g) ? clamp01(blended.g) : this._col[i * 3 + 1]) : this._col[i * 3 + 1]
            let nextB = blended ? (Number.isFinite(blended.b) ? clamp01(blended.b) : this._col[i * 3 + 2]) : this._col[i * 3 + 2]
            this._col[i * 3] = nextR
            this._col[i * 3 + 1] = nextG
            this._col[i * 3 + 2] = nextB
            this._alpha[i] = Number.isFinite(particle.opacity) ? Math.max(0, Math.min(1, particle.opacity)) : this._alpha[i]
            this._shape[i] = shapeToValue(particle.shapeType)
            this._binRms[i] = Number.isFinite(loopInputs.binRMSEnergy) ? clamp01(loopInputs.binRMSEnergy) : this._binRms[i]
            touched++
        }

        // Store aggregated network modifiers for the engine
        this.cloudNetworkModifiers = netCount > 0 ? {
            repulsion: netRep / netCount,
            centerGravity: netCg / netCount,
            tension: netTen / netCount,
        } : null

        return touched
    }

    applyBackgroundRules(ctx) {
        const bg = this._background
        const hsv = rgbToHsv(bg.r, bg.g, bg.b)
        const state = {
            red: bg.r,
            green: bg.g,
            blue: bg.b,
            hue: hsv.h,
            saturation: hsv.s,
            brightness: hsv.v,
        }
        this._compiledRules.applyBackgroundRules(ctx, state)

        let outR = Number.isFinite(state.red) ? clamp01(state.red) : bg.r
        let outG = Number.isFinite(state.green) ? clamp01(state.green) : bg.g
        let outB = Number.isFinite(state.blue) ? clamp01(state.blue) : bg.b
        if (this._compiledRules.usesBackgroundHsb) {
            const base = rgbToHsv(outR, outG, outB)
            const hh = normalizeHue(state.hue)
            const ss = Number.isFinite(state.saturation) ? clamp01(state.saturation) : base.s
            const vv = Number.isFinite(state.brightness) ? clamp01(state.brightness) : base.v
            const rgb = hsvToRgb(hh ?? base.h, ss, vv)
            outR = rgb.r
            outG = rgb.g
            outB = rgb.b
        }
        bg.setRGB(outR, outG, outB)
    }

    applyLineRules(ctx, lineState) {
        this._compiledRules.applyLineRules(ctx, lineState)
    }

    applyCameraRules(ctx, currentCamera) {
        const state = {
            x: currentCamera?.x ?? 0,
            y: currentCamera?.y ?? 0,
            z: currentCamera?.z ?? 0,
            zoom: currentCamera?.zoom ?? 1,
            targetX: currentCamera?.targetX ?? 0,
            targetY: currentCamera?.targetY ?? 0,
            targetZ: currentCamera?.targetZ ?? 0,
            angleOfView: currentCamera?.angleOfView ?? 55,
        }
        this._compiledRules.applyCameraRules(ctx, state)
        this._cameraOutput = {
            x: Number.isFinite(state.x) ? state.x : null,
            y: Number.isFinite(state.y) ? state.y : null,
            z: Number.isFinite(state.z) ? state.z : null,
            zoom: Number.isFinite(state.zoom) ? state.zoom : null,
            targetX: Number.isFinite(state.targetX) ? state.targetX : null,
            targetY: Number.isFinite(state.targetY) ? state.targetY : null,
            targetZ: Number.isFinite(state.targetZ) ? state.targetZ : null,
            angleOfView: Number.isFinite(state.angleOfView) ? state.angleOfView : null,
        }
    }

    /**
     * Called once per animation frame.
     *
     * @param {object}  ae          AudioEngine instance
     * @param {object}  params      Live param snapshot (from ParamStore)
     * @param {number}  canvasW     Renderer width in CSS pixels
     * @param {number}  canvasH     Renderer height in CSS pixels
     */
    update(ae, params, canvasW, canvasH) {
        if (!ae.analyser) return   // AudioContext not yet initialised
        if (!(canvasW > 0) || !(canvasH > 0)) return

        // ── Build harmonic object lookup for cloud mode ──
        // Maps fundamental frequency bins → streamId, and stores per-stream positions.
        const harmonicObjects = ae.getHarmonicObjects?.() ?? null
        this._harmonicData = null
        if (Array.isArray(harmonicObjects) && harmonicObjects.length > 0) {
            const fundHzSet = new Set()      // set of fundamental Hz values
            const fundStreamMap = new Map()   // streamId → fundamentalHz
            const streamPositions = new Map() // streamId → {x, y, z} (to be filled during bucket loop)
            for (const obj of harmonicObjects) {
                const hz = obj.fundamentalHz || 0
                if (hz > 0) {
                    fundHzSet.add(hz)
                    fundStreamMap.set(obj.streamId || 0, hz)
                    streamPositions.set(obj.streamId || 0, { x: 0, y: 0, z: 0 })
                }
            }
            this._harmonicData = {
                fundHzSet,
                fundStreamMap,
                streamPositions,
                objects: harmonicObjects,
            }
        }

        this._frameCounter++
        const now = performance.now()
        const deltaTime = Math.max(0, Math.min(1, (now - this._lastUpdateT) / 1000))
        this._lastUpdateT = now

        const freqData = ae.frequencyData
        const N = Math.min(freqData.length, this._N)
        const sampleRate = ae.ctx?.sampleRate ?? 44100
        const nyquist = sampleRate / 2
        const binToHz = (b) => (b / freqData.length) * nyquist

        const persistMode = Number(params.persistMode ?? 0) >= 0.5 ? 1 : 0 // 0 = Momentary, 1 = Painting
        const persistModeChanged = persistMode !== this._lastPersistMode
        if (persistModeChanged) {
            // Treat mode switches as a hard boundary so transient buffers do not leak
            // into the first painted frame (or vice versa).
            this._insertIndex = 0
            this._paintCount = 0
            this._visibleCount = 0
            this._lineVisibleCount = 0
            this._geo.setDrawRange(0, 0)
            this._lineGeo.setDrawRange(0, 0)
        }
        const gainMult = params.inputGain ?? 1
        const sizeMultiplierRaw = Number(params.defaultParticleSize)
        const sizeMultiplier = Number.isFinite(sizeMultiplierRaw) ? Math.max(0, sizeMultiplierRaw) : 1
        const freqNormMinHz = Math.max(FREQ_MIN_HZ, Math.min(FREQ_MAX_HZ, Number(params.freqNormMin ?? 40)))
        const freqNormMaxHz = Math.max(freqNormMinHz + 1, Math.min(FREQ_MAX_HZ, Number(params.freqNormMax ?? 12000)))
        const logNormMin = freqToLogNorm(freqNormMinHz)
        const logNormMax = freqToLogNorm(freqNormMaxHz)
        const binMagnitudeNormMin = Number(params.binMagnitudeNormMin ?? -70)
        const binMagnitudeNormMax = Number(params.binMagnitudeNormMax ?? 0)
        const binFluxNormMin = Number(params.binFluxNormMin ?? 0)
        const binFluxNormMax = Number(params.binFluxNormMax ?? 0.5)
        const binPhaseDeviationNormMin = Number(params.binPhaseDeviationNormMin ?? 0)
        const binPhaseDeviationNormMax = Number(params.binPhaseDeviationNormMax ?? Math.PI)
        const binAttackTimeNormMin = Number(params.binAttackTimeNormMin ?? 5)
        const binAttackTimeNormMax = Number(params.binAttackTimeNormMax ?? 500)
        const globalRmsNormMin = Number(params.globalRmsNormMin ?? -60)
        const globalRmsNormMax = Number(params.globalRmsNormMax ?? 0)
        const spectralCentroidNormMin = Number(params.spectralCentroidNormMin ?? 150)
        const spectralCentroidNormMax = Number(params.spectralCentroidNormMax ?? 8000)
        const globalSpectralFluxNormMin = Number(params.globalSpectralFluxNormMin ?? 0)
        const globalSpectralFluxNormMax = Number(params.globalSpectralFluxNormMax ?? 100)
        const spectralFlatnessNormMin = Number(params.spectralFlatnessNormMin ?? 0)
        const spectralFlatnessNormMax = Number(params.spectralFlatnessNormMax ?? 1)
        const particlesByFrameRaw = Number(params.particlesByFrame)
        const particlesByFrame = Number.isFinite(particlesByFrameRaw)
            ? Math.max(MIN_PARTICLES_BY_FRAME, Math.min(MAX_PARTICLES_BY_FRAME, Math.round(particlesByFrameRaw)))
            : 1000
        const logBucketCount = Math.max(1, particlesByFrame)
        const stepRatioRaw = Math.pow(freqNormMaxHz / Math.max(freqNormMinHz, 1e-6), 1 / logBucketCount)
        const stepRatio = Number.isFinite(stepRatioRaw) && stepRatioRaw > 1 ? stepRatioRaw : 1
        const blendStr = params.blendMode ?? 'screen'
        const blendEnabled = Number(params.blendEnabled ?? 0) >= 0.5
        const luminousMode = blendEnabled
        const bgHue = Number.isFinite(Number(params.defaultBackgroundHue)) ? Number(params.defaultBackgroundHue) : 0
        const bgSat = Number.isFinite(Number(params.defaultBackgroundSaturation)) ? Number(params.defaultBackgroundSaturation) : 0
        const bgLight = Number.isFinite(Number(params.defaultBackgroundLightness)) ? Number(params.defaultBackgroundLightness) : 0
        const hasStereoBins = !!(ae.analyserL && ae.analyserR && ae.getBinPan)
        const binMagArr = ae.getBinMagnitude?.() || null
        const binPhaseArr = ae.getBinPhase?.() || null
        const requiredInputs = new Set(this._compiledRules?.requiredInputs || [])
        const needBinMagnitude = requiredInputs.has('binMagnitude')
        const needBinPhase = requiredInputs.has('binPhase')
        const needBinFlux = requiredInputs.has('binFlux')
        const needBinPhaseDev = requiredInputs.has('binPhaseDeviation')
        const needBinAttackTime = requiredInputs.has('binAttackTime')
        const needBinEnvelope = requiredInputs.has('binEnvelope') || requiredInputs.has('binEnvelopeState')

        // ── Brain-routed bin arrays ──
        // Frequency brain (high FFT worklet): magnitude, phase
        // Rhythm brain (low FFT main-thread): flux, phaseDev, attackTime, envelope
        const needRhythmBrain = needBinFlux || needBinPhaseDev || needBinAttackTime || needBinEnvelope
        const binFluxArr = needRhythmBrain ? (ae.getRhythmBinFlux?.() || null) : (ae.getBinFlux?.() || null)
        const binPhaseDevArr = needRhythmBrain ? (ae.getRhythmBinPhaseDeviation?.() || null) : (ae.getBinPhaseDeviation?.() || null)
        const binAttackTimeArr = needRhythmBrain ? (ae.getRhythmBinAttackTime?.() || null) : (ae.getBinAttackTime?.() || null)
        const binEnvArr = needRhythmBrain ? (ae.getRhythmBinEnvelope?.() || null) : (ae.getBinEnvelope?.() || null)
        // Band (local texture) variables
        const needBandFlatness = requiredInputs.has('bandFlatness')
        const needBandTransient = requiredInputs.has('bandTransient')
        const needBandCentroid = requiredInputs.has('bandCentroid')
        const needBandFlux = requiredInputs.has('bandFlux')
        const needBandInstability = requiredInputs.has('bandInstability')
        const needAnyBand = needBandFlatness || needBandTransient || needBandCentroid || needBandFlux || needBandInstability
        // Bandwidth in octaves
        const bandFlatnessOct = Number(params.bandFlatnessOctaves ?? 0.33)
        const bandTransientOct = Number(params.bandTransientOctaves ?? 0.33)
        const bandCentroidOct = Number(params.bandCentroidOctaves ?? 0.33)
        const bandFluxOct = Number(params.bandFluxOctaves ?? 0.33)
        const bandInstabilityOct = Number(params.bandInstabilityOctaves ?? 0.33)
        const bandOctaves = [bandFlatnessOct, bandTransientOct, bandCentroidOct, bandFluxOct, bandInstabilityOct]
        // Reset band previous-frame storage on first frame / bucket count change
        if (this._bandFrameN < 0 || this._bandPrevEnergy.length !== logBucketCount) {
            this._bandPrevEnergy = new Float64Array(logBucketCount)
            this._bandPrevMag = new Array(logBucketCount)
            this._bandFrameN = 0
        }
        const rulesEnabled = params.ruleEngineEnabled !== false
        const emitLightParticles = rulesEnabled && this._compiledRules.spawnRuleCount > 0
        const emitLines = rulesEnabled && this._compiledRules.lineRuleCount > 0

        // ── ISO 226 Equal-Loudness Compensation LUT ───────────────────────
        const hearingAmount = Number(params.adjustForHumanHearing ?? 0)
        const hearingEnabled = hearingAmount > 0.001
        if (hearingEnabled) {
            const currentFftSize = ae.FFT_SIZE || 16384
            // Build LUT once at full 60 phon compensation
            if (!this._iso226Lut || this._iso226FftSize !== currentFftSize) {
                this._iso226Lut = createIso226CompensationLut({
                    size: Math.max(100, Math.floor(currentFftSize / 2)),
                    phon: 60,
                    minHz: FREQ_MIN_HZ,
                    maxHz: FREQ_MAX_HZ,
                    referenceHz: 1000,
                })
                this._iso226FftSize = currentFftSize
            }
        } else {
            this._iso226Lut = null
        }
        this._hearingAmount = hearingAmount

        // Adjust Three.js blending mode
        if (!luminousMode) {
            if (this._mat.blending !== THREE.NormalBlending) {
                this._mat.blending = THREE.NormalBlending
                this._mat.needsUpdate = true
                this._lastBlending = THREE.NormalBlending
            }
        } else if (blendStr === 'alpha') {
            const mat = this._mat
            const needsUpdate = (
                mat.blending !== THREE.CustomBlending ||
                mat.blendSrc !== THREE.SrcAlphaFactor ||
                mat.blendDst !== THREE.OneMinusSrcAlphaFactor ||
                mat.blendEquation !== THREE.AddEquation
            )
            if (needsUpdate) {
                mat.blending = THREE.CustomBlending
                mat.blendSrc = THREE.SrcAlphaFactor
                mat.blendDst = THREE.OneMinusSrcAlphaFactor
                mat.blendEquation = THREE.AddEquation
                mat.needsUpdate = true
                this._lastBlending = mat.blending
            }
        } else {
            const mat = this._mat
            let needsUpdate = false

            if (blendStr === 'screen' || blendStr === 'lighter') {
                const should = (
                    mat.blending !== THREE.CustomBlending ||
                    mat.blendSrc !== THREE.OneFactor ||
                    mat.blendDst !== THREE.OneMinusSrcColorFactor ||
                    mat.blendEquation !== THREE.AddEquation
                )
                if (should) {
                    mat.blending = THREE.CustomBlending
                    mat.blendSrc = THREE.OneFactor
                    mat.blendDst = THREE.OneMinusSrcColorFactor
                    mat.blendEquation = THREE.AddEquation
                    this._lastBlending = mat.blending
                    needsUpdate = true
                }
            } else if (blendStr === 'multiply') {
                const should = (
                    mat.blending !== THREE.CustomBlending ||
                    mat.blendSrc !== THREE.DstColorFactor ||
                    mat.blendDst !== THREE.ZeroFactor ||
                    mat.blendEquation !== THREE.AddEquation
                )
                if (should) {
                    mat.blending = THREE.CustomBlending
                    mat.blendSrc = THREE.DstColorFactor
                    mat.blendDst = THREE.ZeroFactor
                    mat.blendEquation = THREE.AddEquation
                    this._lastBlending = mat.blending
                    needsUpdate = true
                }
            } else {
                if (mat.blending !== THREE.NormalBlending) {
                    mat.blending = THREE.NormalBlending
                    this._lastBlending = mat.blending
                    needsUpdate = true
                }
            }

            if (needsUpdate) mat.needsUpdate = true
        }

        const wantsPointDepthWrite = !luminousMode
        if (this._mat.depthWrite !== wantsPointDepthWrite) {
            this._mat.depthWrite = wantsPointDepthWrite
            this._mat.needsUpdate = true
        }

        if (this._lineMat.blending !== this._mat.blending) {
            this._lineMat.blending = this._mat.blending
            this._lineMat.needsUpdate = true
        }
        const wantsLineDepthWrite = !luminousMode
        if (this._lineMat.depthWrite !== wantsLineDepthWrite) {
            this._lineMat.depthWrite = wantsLineDepthWrite
            this._lineMat.needsUpdate = true
        }

        const canvasWidthUnitsRaw = Number(params.cameraCanvasWidthUnits)
        const canvasHeightUnitsRaw = Number(params.cameraCanvasHeightUnits)
        const canvasUnitsW = Number.isFinite(canvasWidthUnitsRaw) && canvasWidthUnitsRaw > 0 ? canvasWidthUnitsRaw : canvasW
        const canvasUnitsH = Number.isFinite(canvasHeightUnitsRaw) && canvasHeightUnitsRaw > 0 ? canvasHeightUnitsRaw : canvasH
        const normalizedHue = ((bgHue % 360) + 360) % 360
        this._background.setHSL(
            normalizedHue / 360,
            clamp01(bgSat / 100),
            clamp01(bgLight / 100),
        )
        const hw = canvasUnitsW / 2
        const hh = canvasUnitsH / 2
        // Store for aura→xyz conversion in living rules
        this._canvasHW = hw
        this._canvasHH = hh
        const currentTime = ae.audioEl?.currentTime ?? 0
        const audioLengthSec = ae.audioEl?.duration ?? 0
        const frameBinInputs = {
            binMagnitude: 0,
            binPhase: 0,
            binFlux: 0,
            binPhaseDeviation: 0,
            binAttackTime: 0,
            binEnvelope: 0,
            binEnvelopeState: 0,
            globalRmsEnergy: normalizeByRange(ae.rmsDbfs, globalRmsNormMin, globalRmsNormMax),
            binRMSEnergy: normalizeByRange(ae.rmsDbfs, globalRmsNormMin, globalRmsNormMax),
            spectralCentroid: normalizeByRange(ae.spectralCentroidHz, spectralCentroidNormMin, spectralCentroidNormMax),
            spectralFlux: normalizeByRange(ae.spectralFluxAU, globalSpectralFluxNormMin, globalSpectralFluxNormMax),
            spectralFlatness: normalizeByRange(ae.spectralFlatnessRatio, spectralFlatnessNormMin, spectralFlatnessNormMax),
            inharmonicity: clamp01(ae.inharmonicity),
            peakAmplitude: clamp01(ae.peakAmplitude),
            zeroCrossingRate: clamp01(ae.zeroCrossingRate),
            spectralRolloff: clamp01(ae.spectralRolloff),
            spectralSpread: clamp01(ae.spectralSpread),
            spectralSkewness: clamp01(ae.spectralSkewness),
            chromagram: clamp01(ae.chromagram),
        }
        frameBinInputs.amplitude = frameBinInputs.globalRmsEnergy
        const frameBinScanLength = Math.max(
            needBinMagnitude && binMagArr ? binMagArr.length : 0,
            needBinFlux && binFluxArr ? binFluxArr.length : 0,
            needBinPhaseDev && binPhaseDevArr ? binPhaseDevArr.length : 0,
            needBinAttackTime && binAttackTimeArr ? binAttackTimeArr.length : 0,
            needBinEnvelope && binEnvArr ? binEnvArr.length : 0,
            needBinPhase && binPhaseArr ? binPhaseArr.length : 0,
        )
        if (frameBinScanLength > 0) {
            let sumMagnitude = 0
            let countMagnitude = 0
            let sumFlux = 0
            let countFlux = 0
            let sumPhaseDev = 0
            let countPhaseDev = 0
            let sumAttackTime = 0
            let countAttackTime = 0
            let sumEnvelope = 0
            let countEnvelope = 0
            let sumPhase = 0
            let countPhase = 0

            for (let i = 0; i < frameBinScanLength; i++) {
                if (needBinMagnitude && binMagArr && i < binMagArr.length) {
                    sumMagnitude += normalizeByRange(binMagArr[i], binMagnitudeNormMin, binMagnitudeNormMax)
                    countMagnitude++
                }
                if (needBinFlux && binFluxArr && i < binFluxArr.length) {
                    sumFlux += normalizeByRange(binFluxArr[i], binFluxNormMin, binFluxNormMax)
                    countFlux++
                }
                if (needBinPhaseDev && binPhaseDevArr && i < binPhaseDevArr.length) {
                    sumPhaseDev += normalizeByRange(binPhaseDevArr[i], binPhaseDeviationNormMin, binPhaseDeviationNormMax)
                    countPhaseDev++
                }
                if (needBinAttackTime && binAttackTimeArr && i < binAttackTimeArr.length) {
                    sumAttackTime += normalizeByRange(binAttackTimeArr[i], binAttackTimeNormMin, binAttackTimeNormMax)
                    countAttackTime++
                }
                if (needBinEnvelope && binEnvArr && i < binEnvArr.length) {
                    sumEnvelope += binEnvArr[i]
                    countEnvelope++
                }
                if (needBinPhase && binPhaseArr && i < binPhaseArr.length) {
                    sumPhase += normalizeByRange(binPhaseArr[i], -Math.PI, Math.PI)
                    countPhase++
                }
            }

            if (countMagnitude > 0) frameBinInputs.binMagnitude = sumMagnitude / countMagnitude
            if (countFlux > 0) frameBinInputs.binFlux = sumFlux / countFlux
            if (countPhaseDev > 0) frameBinInputs.binPhaseDeviation = sumPhaseDev / countPhaseDev
            if (countAttackTime > 0) frameBinInputs.binAttackTime = sumAttackTime / countAttackTime
            if (countEnvelope > 0) {
                frameBinInputs.binEnvelope = sumEnvelope / countEnvelope
                frameBinInputs.binEnvelopeState = frameBinInputs.binEnvelope
            }
            if (countPhase > 0) frameBinInputs.binPhase = sumPhase / countPhase
        }

        const activeParticleCapacity = this._getActiveParticleCapacity()
        let writeIndex = (persistMode === 1 && emitLightParticles)
            ? ((this._insert_index ?? this._insertIndex ?? 0) % activeParticleCapacity)
            : 0
        let lineWriteIndex = (persistMode === 1 && emitLines) ? Math.min(this._lineVisibleCount, activeParticleCapacity) : 0
        let wroteParticles = 0

        let pointDirtyMin = Number.POSITIVE_INFINITY
        let pointDirtyMax = Number.NEGATIVE_INFINITY
        const markPointDirty = (index) => {
            if (!Number.isFinite(index)) return
            pointDirtyMin = Math.min(pointDirtyMin, index)
            pointDirtyMax = Math.max(pointDirtyMax, index)
        }

        let lineDirtyMin = Number.POSITIVE_INFINITY
        let lineDirtyMax = Number.NEGATIVE_INFINITY
        const markLineDirty = (index) => {
            if (!Number.isFinite(index)) return
            lineDirtyMin = Math.min(lineDirtyMin, index)
            lineDirtyMax = Math.max(lineDirtyMax, index)
        }

        const writeParticle = (bucket, alphaBoost = 1, isFundamentalFlag = 1) => {
            if (activeParticleCapacity <= 0) return
            if (persistMode !== 1 && writeIndex >= activeParticleCapacity) return

            const slotIndex = writeIndex
            const hz = bucket.hz
            const rawNorm = freqToLogNorm(hz)
            const freqNorm = normalizeByRange(rawNorm, logNormMin, logNormMax)
            const binPan = Number.isFinite(bucket.binPan) ? bucket.binPan : (ae.pan ?? 0)
            const byte = Number.isFinite(bucket.byte) ? bucket.byte : 0
            const energy = Number.isFinite(bucket.energy) ? bucket.energy : 0
            const binMagnitude = Number.isFinite(bucket.binMagnitude) ? bucket.binMagnitude : undefined
            const binPhaseMetric = Number.isFinite(bucket.binPhase) ? bucket.binPhase : undefined
            const binFluxMetric = Number.isFinite(bucket.binFlux) ? bucket.binFlux : undefined
            const binPhaseDevMetric = Number.isFinite(bucket.binPhaseDeviation) ? bucket.binPhaseDeviation : undefined
            const binAttackTimeMetric = Number.isFinite(bucket.binAttackTime) ? bucket.binAttackTime : undefined
            const binEnvelopeMetric = Number.isFinite(bucket.binEnvelope) ? bucket.binEnvelope : undefined
            const binRmsMetric = Number.isFinite(bucket.binRMSEnergy) ? bucket.binRMSEnergy : undefined
            // Band texture metrics (from writeParticle)
            const bandFlatnessMetric = Number.isFinite(bucket.bandFlatness) ? bucket.bandFlatness : undefined
            const bandTransientMetric = Number.isFinite(bucket.bandTransient) ? bucket.bandTransient : undefined
            const bandCentroidMetric = Number.isFinite(bucket.bandCentroid) ? bucket.bandCentroid : undefined
            const bandFluxMetric = Number.isFinite(bucket.bandFlux) ? bucket.bandFlux : undefined
            const bandInstabilityMetric = Number.isFinite(bucket.bandInstability) ? bucket.bandInstability : undefined
            const y = (freqNorm * 2 - 1) * hh

            const x = 0

            const z = 0
            const brightness = clamp01(energy)

            const particle = {
                x,
                y,
                z,
                size: Math.max(1.0, 0.5 + energy * 1.5),
                red: brightness,
                green: brightness,
                blue: brightness,
                opacity: Math.min(1, (0.08 + energy * 1.9) * alphaBoost),
                particleCount: 1,
                shapeType: 'square',
            }
            hydrateColorState(particle, particle.red, particle.green, particle.blue)

            if (emitLightParticles) {
                this.applySpawnRulesToParticle({
                    params,
                    // Use cached frame-level inputs + override per-bin values
                    inputs: Object.assign({}, _frameRuleBase, {
                        frequencyHz: hz,
                        normFreq: freqNorm,
                        pan: binPan,
                        binMagnitude,
                        binPhase: binPhaseMetric,
                        binFlux: binFluxMetric,
                        binPhaseDeviation: binPhaseDevMetric,
                        binAttackTime: binAttackTimeMetric,
                        binEnvelope: binEnvelopeMetric,
                        binEnvelopeState: binEnvelopeMetric,
                        binRMSEnergy: binRmsMetric,
                        // Band (local texture) variables
                        bandFlatness: bandFlatnessMetric,
                        bandTransient: bandTransientMetric,
                        bandCentroid: bandCentroidMetric,
                        bandFlux: bandFluxMetric,
                        bandInstability: bandInstabilityMetric,
                        // Per-bin music theory
                        notePitchClass: midiToPitchClass(frequencyToMidi(hz)),
                        octave: midiToOctave(frequencyToMidi(hz)),
                    }),
                    particle,
                })
            }

            // Rule output `particleCount` behaves as per-bin spawn probability.
            // 0 => never spawn, 1 => always spawn, 0..1 => probabilistic spawn.
            const spawnProb = Number.isFinite(particle.particleCount) ? clamp01(particle.particleCount) : 1
            if (spawnProb <= 0) return
            if (spawnProb < 1 && Math.random() > spawnProb) return

            // Resolve final particle attributes (pre-dedup / pre-buffer)
            const px = Number.isFinite(particle.x) ? particle.x : x
            const py = Number.isFinite(particle.y) ? particle.y : y
            const pz = Number.isFinite(particle.z) ? particle.z : z
            const outSize = Number.isFinite(particle.size) ? Math.max(0, particle.size) : Math.max(1.0, 0.5 + energy * 1.5)
            // Blend HSB + RGB — both work together, no gating
            const blended = blendHsbRgb(particle.hue, particle.saturation, particle.brightness,
                particle.red, particle.green, particle.blue)
            let outR = blended ? (Number.isFinite(blended.r) ? clamp01(blended.r) : brightness) : brightness
            let outG = blended ? (Number.isFinite(blended.g) ? clamp01(blended.g) : brightness) : brightness
            let outB = blended ? (Number.isFinite(blended.b) ? clamp01(blended.b) : brightness) : brightness
            const outAlpha = Number.isFinite(particle.opacity) ? Math.max(0, Math.min(1, particle.opacity)) : Math.min(1, (0.08 + energy * 1.9) * alphaBoost)

            // Dedup: skip if identical particle already written this frame
            // (only active in momentary mode — painting mode accumulates trails)
            if (_particleDedup) {
                const hkey = `${px.toFixed(2)},${py.toFixed(2)},${pz.toFixed(2)},${outR.toFixed(4)},${outG.toFixed(4)},${outB.toFixed(4)},${outSize.toFixed(1)},${outAlpha.toFixed(4)}`
                if (_particleDedup.has(hkey)) { dedupedCount++; return }
                _particleDedup.set(hkey, true)
            }

            // Write to GPU buffers
            this._pos[slotIndex * 3] = px
            this._pos[slotIndex * 3 + 1] = py
            this._pos[slotIndex * 3 + 2] = pz
            this._sz[slotIndex] = outSize * sizeMultiplier
            this._col[slotIndex * 3] = outR
            this._col[slotIndex * 3 + 1] = outG
            this._col[slotIndex * 3 + 2] = outB
            this._alpha[slotIndex] = outAlpha
            this._shape[slotIndex] = shapeToValue(particle.shapeType)
            this._pan[slotIndex] = Number.isFinite(binPan) ? Math.max(-1, Math.min(1, binPan)) : 0
            this._binRms[slotIndex] = Number.isFinite(binRmsMetric) ? clamp01(binRmsMetric) : 0
            // Set isFundamental based on harmonic object classification
            // 1 = fundamental node, 0 = harmonic overtone
            this._isFundamental[slotIndex] = isFundamentalFlag
            markPointDirty(slotIndex)
            wroteParticles++

            if (persistMode === 1) writeIndex = (slotIndex + 1) % activeParticleCapacity
            else writeIndex = slotIndex + 1
        }

        const writeLine = (bucket, alphaBoost = 1) => {
            if (!emitLines) return
            if (lineWriteIndex >= activeParticleCapacity) return
            const hz = bucket.hz
            const rawNorm = freqToLogNorm(hz)
            const freqNorm = normalizeByRange(rawNorm, logNormMin, logNormMax)
            const binPan = Number.isFinite(bucket.binPan) ? bucket.binPan : (ae.pan ?? 0)
            const energy = Number.isFinite(bucket.energy) ? bucket.energy : 0
            const binMagnitude = Number.isFinite(bucket.binMagnitude) ? bucket.binMagnitude : undefined
            const binPhaseMetric = Number.isFinite(bucket.binPhase) ? bucket.binPhase : undefined
            const binFluxMetric = Number.isFinite(bucket.binFlux) ? bucket.binFlux : undefined
            const binPhaseDevMetric = Number.isFinite(bucket.binPhaseDeviation) ? bucket.binPhaseDeviation : undefined
            const binAttackTimeMetric = Number.isFinite(bucket.binAttackTime) ? bucket.binAttackTime : undefined
            const binEnvelopeMetric = Number.isFinite(bucket.binEnvelope) ? bucket.binEnvelope : undefined
            const binRmsMetric = Number.isFinite(bucket.binRMSEnergy) ? bucket.binRMSEnergy : undefined
            // Band texture metrics (from writeLine)
            const bandFlatnessMetric = Number.isFinite(bucket.bandFlatness) ? bucket.bandFlatness : undefined
            const bandTransientMetric = Number.isFinite(bucket.bandTransient) ? bucket.bandTransient : undefined
            const bandCentroidMetric = Number.isFinite(bucket.bandCentroid) ? bucket.bandCentroid : undefined
            const bandFluxMetric = Number.isFinite(bucket.bandFlux) ? bucket.bandFlux : undefined
            const bandInstabilityMetric = Number.isFinite(bucket.bandInstability) ? bucket.bandInstability : undefined

            const y = (freqNorm * 2 - 1) * hh
            const x = 0
            const z = 0
            const brightness = clamp01(energy)

            const line = {
                x,
                y,
                z,
                length: Math.max(1, hh * 0.12 * energy),
                direction: 'y',
                thickness: 1,
                // Default to visible when line rules are active.
                // lineCount remains available as an explicit spawn/probability override.
                lineCount: 1,
                red: brightness,
                green: brightness,
                blue: brightness,
                opacity: Math.min(1, (0.08 + energy * 1.4) * alphaBoost),
            }
            hydrateColorState(line, line.red, line.green, line.blue)

            if (emitLines) {
                this.applyLineRules({
                    params,
                    // Use cached frame-level inputs + per-bin overrides
                    inputs: Object.assign({}, _frameRuleBase, {
                        frequencyHz: hz,
                        normFreq: freqNorm,
                        pan: binPan,
                        binMagnitude,
                        binPhase: binPhaseMetric,
                        binFlux: binFluxMetric,
                        binPhaseDeviation: binPhaseDevMetric,
                        binAttackTime: binAttackTimeMetric,
                        binEnvelope: binEnvelopeMetric,
                        binEnvelopeState: binEnvelopeMetric,
                        binRMSEnergy: binRmsMetric,
                        // Band (local texture) variables
                        bandFlatness: bandFlatnessMetric,
                        bandTransient: bandTransientMetric,
                        bandCentroid: bandCentroidMetric,
                        bandFlux: bandFluxMetric,
                        bandInstability: bandInstabilityMetric,
                    }),
                }, line)
            }

            const spawnProb = Number.isFinite(line.lineCount) ? clamp01(line.lineCount) : 1
            if (spawnProb <= 0) return
            if (spawnProb < 1 && Math.random() > spawnProb) return

            let nextR = Number.isFinite(line.red) ? clamp01(line.red) : brightness
            let nextG = Number.isFinite(line.green) ? clamp01(line.green) : brightness
            let nextB = Number.isFinite(line.blue) ? clamp01(line.blue) : brightness
            if (this._compiledRules.usesLineHsb) {
                const baseHsv = rgbToHsv(nextR, nextG, nextB)
                const hhv = normalizeHue(line.hue)
                const ss = Number.isFinite(line.saturation) ? clamp01(line.saturation) : baseHsv.s
                const vv = Number.isFinite(line.brightness) ? clamp01(line.brightness) : baseHsv.v
                const rgb = hsvToRgb(hhv ?? baseHsv.h, ss, vv)
                nextR = rgb.r
                nextG = rgb.g
                nextB = rgb.b
            }

            const opacity = Number.isFinite(line.opacity) ? Math.max(0, Math.min(1, line.opacity)) : 0.4
            const outR = nextR * opacity
            const outG = nextG * opacity
            const outB = nextB * opacity

            const centerX = Number.isFinite(line.x) ? line.x : x
            const centerY = Number.isFinite(line.y) ? line.y : y
            const centerZ = Number.isFinite(line.z) ? line.z : z
            const lineLength = Number.isFinite(line.length) ? Math.max(0, line.length) : Math.max(1, hh * 0.12 * energy)
            const halfLength = lineLength * 0.5
            const axisRaw = typeof line.direction === 'string' ? line.direction.trim().toLowerCase() : ''
            const axis = (axisRaw === 'x' || axisRaw === 'y' || axisRaw === 'z') ? axisRaw : 'y'

            let xStart = centerX
            let yStart = centerY
            let zStart = centerZ
            let xEnd = centerX
            let yEnd = centerY
            let zEnd = centerZ
            if (axis === 'x') {
                xStart = centerX - halfLength
                xEnd = centerX + halfLength
            } else if (axis === 'z') {
                zStart = centerZ - halfLength
                zEnd = centerZ + halfLength
            } else {
                yStart = centerY - halfLength
                yEnd = centerY + halfLength
            }

            const lineSlotIndex = lineWriteIndex
            const base = lineSlotIndex * 6
            this._linePos[base] = xStart
            this._linePos[base + 1] = yStart
            this._linePos[base + 2] = zStart
            this._linePos[base + 3] = xEnd
            this._linePos[base + 4] = yEnd
            this._linePos[base + 5] = zEnd

            this._lineCol[base] = outR
            this._lineCol[base + 1] = outG
            this._lineCol[base + 2] = outB
            this._lineCol[base + 3] = outR
            this._lineCol[base + 4] = outG
            this._lineCol[base + 5] = outB

            this._lineThickness[lineSlotIndex] = Number.isFinite(line.thickness) ? Math.max(0, line.thickness) : 1
            this._lineAlpha[lineSlotIndex] = opacity
            markLineDirty(lineSlotIndex)
            lineWriteIndex = lineSlotIndex + 1
        }

        const fftBinsPerHz = freqData.length / Math.max(1e-6, nyquist)
        // Log-frequency spacing from user range:
        // k = (freqMax/freqMin)^(1/N), where N = particlesByFrame.
        const _hzToBin = (hz) => {
            const idx = Math.floor(hz * fftBinsPerHz)
            return Math.max(0, Math.min(N - 1, idx))
        }

        // ── Cache frame-level rule inputs once (not per-bucket) ───────────
        const midi = frequencyToMidi(ae.peakFreq ?? 0)
        // Apply input gain (Sensitivity) to key amplitude-based rule inputs.
        // frameBinInputs goes FIRST so the explicit gain-scaled fields override it.
        const _applyGain = (v) => v * gainMult
        const _frameRuleBase = {
            ...frameBinInputs,
            amplitude: _applyGain(Number.isFinite(frameBinInputs.globalRmsEnergy) ? Number(frameBinInputs.globalRmsEnergy) : (ae.amplitude ?? 0)),
            globalRmsEnergy: _applyGain(frameBinInputs.globalRmsEnergy),
            binRMSEnergy: _applyGain(frameBinInputs.binRMSEnergy),
            bass: _applyGain(ae.bass ?? 0),
            mid: _applyGain(ae.mid ?? 0),
            high: _applyGain(ae.high ?? 0),
            peakFreq: ae.peakFreq ?? 0,
            pan: ae.pan ?? 0,
            time: currentTime,
            deltaTime,
            canvasWidthPx: canvasW,
            canvasHeightPx: canvasH,
            canvasWidthUnits: canvasUnitsW,
            canvasHeightUnits: canvasUnitsH,
            // canvasWidth/canvasHeight alias — use fixed px values from View menu
            canvasWidth: Number(params.canvasWidth ?? canvasUnitsW),
            canvasHeight: Number(params.canvasHeight ?? canvasUnitsH),
            audioLengthSec,
            frequencyHz: 0,
            normFreq: 0,
            // Music theory helpers — overridden per-bin in writeParticle/writeLine
        }
        // Dedup table: skip writing particles identical to one already written this frame
        const _particleDedup = persistMode !== 1 ? new Map() : null
        let dedupedCount = 0

        let hzStart = freqNormMinHz
        for (let bucketIndex = 0; bucketIndex < logBucketCount; bucketIndex++) {
            const hzEnd = (bucketIndex === logBucketCount - 1)
                ? freqNormMaxHz
                : Math.min(freqNormMaxHz, hzStart * stepRatio)
            const hzCenter = Math.sqrt(Math.max(freqNormMinHz, hzStart) * Math.max(freqNormMinHz, hzEnd))

            // Determine if this bucket is a fundamental, harmonic, or neither
            let isFund = 1 // default: treat as fundamental
            let closestStreamId = -1
            if (this._harmonicData) {
                const { fundHzSet, streamPositions } = this._harmonicData
                // Check if the bucket's frequency matches a detected fundamental (within 3%)
                let matchFound = false
                let minDist = Infinity
                for (const fundHz of fundHzSet) {
                    const ratio = hzCenter / Math.max(1, fundHz)
                    const dist = Math.abs(ratio - 1)
                    if (dist < minDist) minDist = dist
                    // Exact fundamental match (±3%) → isFundamental = 1
                    if (dist < 0.03) {
                        isFund = 1
                        matchFound = true
                        break
                    }
                    // Harmonic multiple (integer ratio) → isFundamental = 0, track which stream
                    const nearestInt = Math.round(ratio)
                    if (nearestInt >= 2 && nearestInt <= 20 && Math.abs(ratio - nearestInt) < 0.03) {
                        isFund = 0
                        matchFound = true
                        break
                    }
                }
                if (!matchFound) {
                    // Unclassified — nearest fundamental determines grouping
                    isFund = 0
                }
            }

            const binStart = _hzToBin(hzStart)
            const binEnd = _hzToBin(hzEnd)
            if (binEnd < binStart) {
                hzStart = hzEnd
                continue
            }

            let count = 0
            let peakByteBucket = 0
            let sumRawEnergy = 0
            let sumPan = 0
            let sumPanWeight = 0
            let sumBinMagnitude = 0
            let sumBinPhase = 0
            let sumBinFlux = 0
            let sumBinPhaseDev = 0
            let sumBinAttackTime = 0
            let sumBinEnvelope = 0

            for (let i = binStart; i <= binEnd; i++) {
                const byte = freqData[i]
                const hzAtBin = binToHz(i)
                const sampledMagnitude = sampleLogCqtArrayAtHz(binMagArr, hzAtBin)
                let magNorm = Number.isFinite(sampledMagnitude)
                    ? normalizeByRange(sampledMagnitude, binMagnitudeNormMin, binMagnitudeNormMax)
                    : (byte / 255)
                // ISO 226 human hearing compensation: blend between original and compensated
                // using the hearingAmount slider (0 = off, 1 = full 60-phon compensation).
                if (this._iso226Lut) {
                    const dbOffset = sampleIso226CompensationDb(this._iso226Lut, hzAtBin)
                    if (dbOffset < 0 && this._hearingAmount > 0.001) {
                        // Negative offset = quieter → reduce magnitude
                        const linearFactor = Math.pow(10, (dbOffset * this._hearingAmount) / 20)
                        magNorm *= Math.max(0, Math.min(1, linearFactor))
                    }
                }
                sumRawEnergy += magNorm
                if (needBinMagnitude) sumBinMagnitude += magNorm
                if (needBinPhase && binPhaseArr) {
                    const sampledPhase = sampleLogCqtArrayAtHz(binPhaseArr, hzAtBin)
                    if (Number.isFinite(sampledPhase)) {
                        sumBinPhase += normalizeByRange(sampledPhase, -Math.PI, Math.PI)
                    }
                }
                if (needBinFlux && binFluxArr) {
                    const sampledFlux = sampleLogCqtArrayAtHz(binFluxArr, hzAtBin)
                    if (Number.isFinite(sampledFlux)) {
                        sumBinFlux += normalizeByRange(sampledFlux, binFluxNormMin, binFluxNormMax)
                    }
                }
                if (needBinPhaseDev && binPhaseDevArr) {
                    const sampledPhaseDev = sampleLogCqtArrayAtHz(binPhaseDevArr, hzAtBin)
                    if (Number.isFinite(sampledPhaseDev)) {
                        sumBinPhaseDev += normalizeByRange(sampledPhaseDev, binPhaseDeviationNormMin, binPhaseDeviationNormMax)
                    }
                }
                if (needBinAttackTime && binAttackTimeArr) {
                    const sampledAttackTime = sampleLogCqtArrayAtHz(binAttackTimeArr, hzAtBin)
                    if (Number.isFinite(sampledAttackTime)) {
                        sumBinAttackTime += normalizeByRange(sampledAttackTime, binAttackTimeNormMin, binAttackTimeNormMax)
                    }
                }
                if (needBinEnvelope && binEnvArr) {
                    const sampledEnvelope = sampleLogCqtArrayAtHz(binEnvArr, hzAtBin)
                    if (Number.isFinite(sampledEnvelope)) {
                        sumBinEnvelope += normalizeByRange(sampledEnvelope / 3, 0, 1)
                    }
                }
                const panValue = hasStereoBins ? ae.getBinPan(i) : (ae.pan ?? 0)
                const panWeight = Math.max(1, byte)
                sumPan += panValue * panWeight
                sumPanWeight += panWeight
                if (byte > peakByteBucket) peakByteBucket = byte
                count++
            }

            if (count <= 0 || peakByteBucket <= 1) continue

            const avgRaw = sumRawEnergy / count
            const bucketEnergy = avgRaw * gainMult

            // ── Band (local texture) feature calculation ─────────────────
            // Each feature uses its OWN bandwidth setting and is normalized
            // within the frequency range of that bandwidth (not globally),
            // so narrow windows produce usable [0,1] values.
            let bandFlatnessVal, bandTransientVal, bandCentroidVal, bandFluxVal, bandInstabilityVal
            if (needAnyBand) {
                // Helper: count FFT bins in a given octave window around hzCenter
                const _binCountInOctWindow = (oct) => {
                    const half = oct / 2
                    return Math.max(1, _hzToBin(hzCenter * Math.pow(2, half)) - _hzToBin(hzCenter / Math.pow(2, half)))
                }
                // Local Spectral Flatness (Band Noisiness) — uses bandFlatnessOct
                // Wiener entropy compresses toward 1.0 with few bins. The "noise floor"
                // (minimum expected flatness for a pure tone) rises as bins decrease.
                // Aggressively remap so the narrow-window case still produces usable [0,1].
                if (needBandFlatness) {
                    const r = computeBandFeatures(hzCenter, bandFlatnessOct, binMagArr, null, null, freqData, binStart, binEnd, binToHz, _hzToBin)
                    const binCt = _binCountInOctWindow(bandFlatnessOct)
                    // With ~3 FFT bins even a pure tone gives flatness ~0.82-0.88;
                    // with ~24 bins a pure tone gives ~0.35-0.50.
                    // noiseFloor approximates the minimum flatness for a strong tone at this bandwidth.
                    const noiseFloor = clamp01(1 - Math.sqrt(binCt) * 0.08)
                    bandFlatnessVal = clamp01((r.flatness - noiseFloor) / Math.max(0.05, 1 - noiseFloor))
                }
                // Local Spectral Centroid (Band Tilt) — uses bandCentroidOct
                // Normalize within the actual band's frequency bounds, not globally.
                if (needBandCentroid) {
                    const r = computeBandFeatures(hzCenter, bandCentroidOct, binMagArr, null, null, freqData, binStart, binEnd, binToHz, _hzToBin)
                    const bandMinHz = Math.max(FREQ_MIN_HZ, hzCenter / Math.pow(2, bandCentroidOct / 2))
                    const bandMaxHz = Math.min(FREQ_MAX_HZ, hzCenter * Math.pow(2, bandCentroidOct / 2))
                    bandCentroidVal = normalizeByRange(r.centroid, bandMinHz, bandMaxHz)
                }
                // Local Spectral Flux (Band Activity) — uses bandFluxOct
                // Flux is the average per-bin spectral change. With few bins the chance
                // of any single bin showing flux is low — scale up aggressively.
                if (needBandFlux) {
                    const r = computeBandFeatures(hzCenter, bandFluxOct, null, binFluxArr, null, freqData, binStart, binEnd, binToHz, _hzToBin)
                    const binCt = _binCountInOctWindow(bandFluxOct)
                    // Amplify by total bin count so a single active bin fills the range
                    bandFluxVal = clamp01(r.flux * Math.max(8, binCt * 3))
                }
                // Local Phase Deviation (Band Instability) — uses bandInstabilityOct
                if (needBandInstability) {
                    const r = computeBandFeatures(hzCenter, bandInstabilityOct, null, null, binPhaseDevArr, freqData, binStart, binEnd, binToHz, _hzToBin)
                    const binCt = _binCountInOctWindow(bandInstabilityOct)
                    bandInstabilityVal = clamp01(r.instability * Math.max(8, binCt * 3))
                }
                // Band transient: frame-over-frame energy rise across the bandwidth window
                // Uses rhythm brain data (envelope) when available, otherwise high-FFT magnitude.
                if (needBandTransient) {
                    const transMagArr = (needRhythmBrain && binEnvArr) ? binEnvArr : binMagArr
                    const r = computeBandFeatures(hzCenter, bandTransientOct, transMagArr, null, null, freqData, binStart, binEnd, binToHz, _hzToBin)
                    const bandEnergy = r.bandEnergy
                    const prevEnergy = this._bandPrevEnergy[bucketIndex] ?? 0
                    const energyRise = bandEnergy - prevEnergy
                    bandTransientVal = clamp01(Math.max(0, energyRise) * 5)
                    this._bandPrevEnergy[bucketIndex] = bandEnergy
                }
            }

            writeParticle({
                hz: hzCenter,
                byte: peakByteBucket,
                energy: bucketEnergy,
                binPan: sumPanWeight > 0 ? (sumPan / sumPanWeight) : 0,
                binRMSEnergy: clamp01(avgRaw),
                binMagnitude: needBinMagnitude ? (sumBinMagnitude / count) : undefined,
                binPhase: needBinPhase ? (sumBinPhase / count) : undefined,
                binFlux: needBinFlux ? (sumBinFlux / count) : undefined,
                binPhaseDeviation: needBinPhaseDev ? (sumBinPhaseDev / count) : undefined,
                binAttackTime: needBinAttackTime ? (sumBinAttackTime / count) : undefined,
                binEnvelope: needBinEnvelope ? (sumBinEnvelope / count) : undefined,
                // Band texture variables
                bandFlatness: bandFlatnessVal,
                bandTransient: bandTransientVal,
                bandCentroid: bandCentroidVal,
                bandFlux: bandFluxVal,
                bandInstability: bandInstabilityVal,
            }, 1, isFund)
            writeLine({
                hz: hzCenter,
                byte: peakByteBucket,
                energy: bucketEnergy,
                binPan: sumPanWeight > 0 ? (sumPan / sumPanWeight) : 0,
                binRMSEnergy: clamp01(avgRaw),
                binMagnitude: needBinMagnitude ? (sumBinMagnitude / count) : undefined,
                binPhase: needBinPhase ? (sumBinPhase / count) : undefined,
                binFlux: needBinFlux ? (sumBinFlux / count) : undefined,
                binPhaseDeviation: needBinPhaseDev ? (sumBinPhaseDev / count) : undefined,
                binAttackTime: needBinAttackTime ? (sumBinAttackTime / count) : undefined,
                binEnvelope: needBinEnvelope ? (sumBinEnvelope / count) : undefined,
                // Band texture variables
                bandFlatness: bandFlatnessVal,
                bandTransient: bandTransientVal,
                bandCentroid: bandCentroidVal,
                bandFlux: bandFluxVal,
                bandInstability: bandInstabilityVal,
            })
            hzStart = hzEnd
            if (persistMode !== 1 && writeIndex >= activeParticleCapacity) break
        }

        if (persistMode === 1) {
            if (emitLightParticles || wroteParticles > 0) {
                this._insert_index = writeIndex % activeParticleCapacity
                this._visible_count = Math.min(activeParticleCapacity, this._visible_count + wroteParticles)
                this._paint_count = this._visible_count
            } else {
                this._insert_index = 0
                this._paint_count = 0
                this._visible_count = 0
            }
            this._geo.setDrawRange(0, this._visible_count)

            this._lineVisibleCount = Math.min(activeParticleCapacity, lineWriteIndex)
            this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
            if (this._archive) this._archive.prune(params, currentTime)
        } else {
            this._insert_index = 0
            this._paint_count = 0
            this._visible_count = Math.min(activeParticleCapacity, writeIndex)
            this._geo.setDrawRange(0, this._visible_count)
            this._lineVisibleCount = Math.min(activeParticleCapacity, lineWriteIndex)
            this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
        }

        const livingRulesActive = params.ruleEngineEnabled !== false && this._compiledRules.livingRuleCount > 0 && this._visible_count > 0
        if (livingRulesActive) {
            // Compute entity centroid from all fundamental isFundamental=1 particles
            let cx = 0, cy = 0, cz = 0, nFund = 0
            const n = Math.min(this._visible_count, this._pos.length / 3)
            for (let i = 0; i < n; i++) {
                if (this._isFundamental[i] > 0.5) {
                    cx += this._pos[i * 3]
                    cy += this._pos[i * 3 + 1]
                    cz += this._pos[i * 3 + 2]
                    nFund++
                }
            }
            this._entityCentroid = nFund > 0 ? { x: cx / nFund, y: cy / nFund, z: cz / nFund } : null
            this.applyLivingRulesToRange({ params, inputs: _frameRuleBase }, 0, this._visible_count)
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.backgroundRuleCount > 0) {
            this.applyBackgroundRules({ params, inputs: _frameRuleBase })
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.cameraRuleCount > 0) {
            this.applyCameraRules({ params, inputs: _frameRuleBase }, params.cameraState || null)
        } else {
            this._cameraOutput = {
                x: null,
                y: null,
                z: null,
                zoom: null,
                targetX: null,
                targetY: null,
                targetZ: null,
                angleOfView: null,
            }
        }
        // Always mark the living-rule range dirty on every frame when living rules are active
        // This ensures GPU buffers always reflect the latest compiled rule values
        if (livingRulesActive && this._visible_count > 0) {
            pointDirtyMin = Math.min(pointDirtyMin, 0)
            pointDirtyMax = Math.max(pointDirtyMax, this._visible_count - 1)
        }

        if (Number.isFinite(pointDirtyMin) && Number.isFinite(pointDirtyMax) && pointDirtyMax >= pointDirtyMin) {
            this._markPointRangeDirty(pointDirtyMin, pointDirtyMax)
        }
        if (Number.isFinite(lineDirtyMin) && Number.isFinite(lineDirtyMax) && lineDirtyMax >= lineDirtyMin) {
            this._markLineRangeDirty(lineDirtyMin, lineDirtyMax)
        }

        this._lastPersistMode = persistMode
    }

    /** Set the Three.js blending mode on the material. */
    setBlendMode(blending) {
        this._mat.blending = blending
        this._mat.needsUpdate = true
        this._lineMat.blending = blending
        this._lineMat.needsUpdate = true
    }

    getVisibleCount() {
        return this._visible_count
    }

    getLineVisibleCount() {
        return this._lineVisibleCount
    }

    /** Rescale all particle positions proportionally when the canvas is resized. */
    rescale(scaleX, scaleY) {
        for (let i = 0; i < this._N; i++) {
            this._pos[i * 3] *= scaleX
            this._pos[i * 3 + 1] *= scaleY
        }
        for (let i = 0; i < this._N; i++) {
            const base = i * 6
            this._linePos[base] *= scaleX
            this._linePos[base + 1] *= scaleY
            this._linePos[base + 3] *= scaleX
            this._linePos[base + 4] *= scaleY
        }
        this._aPos.needsUpdate = true
        this._aLinePos.needsUpdate = true
    }

    dispose() {
        this._mesh.geometry.dispose()
        this._mat.dispose()
        this._lineMesh.geometry.dispose()
        this._lineMat.dispose()
    }
}
