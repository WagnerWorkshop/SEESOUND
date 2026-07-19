import * as THREE from 'three'
import { compileRules } from './rules/RuleCompiler.js'
import { ParticleArchive } from './ParticleArchive.js'
import { createIso226CompensationLut, sampleIso226CompensationDb } from './audio/Iso226Lut.js'
import { ComponentTracker } from './audio/ComponentTracker.js'
import { HarmonicPercussiveSplitter } from './audio/HarmonicPercussiveSplitter.js'

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

// ── Blend: pipeline color processing ──────────────────────────────────────
// Pipeline order: RGB → Hue (50-50 blend with RGB hue) → Saturation → Brightness
// Brightness uses the lstar (perceptive luminosity) formula natively:
//   lstar = sqrt(0.299 * R^2 + 0.587 * G^2 + 0.114 * B^2)
function blendHsbRgb(hue, sat, bri, r, g, b) {
    const hasHue = Number.isFinite(hue)
    const hasSat = Number.isFinite(sat)
    const hasBri = Number.isFinite(bri)
    const hasRgb = Number.isFinite(r) || Number.isFinite(g) || Number.isFinite(b)
    const hasHsb = hasHue || hasSat || hasBri

    // No colour rules at all → return null, caller keeps existing buffer colour (grayscale default)
    if (!hasHsb && !hasRgb) return null

    // Lstar perceptive luminosity: sqrt(0.299*R^2 + 0.587*G^2 + 0.114*B^2)
    function lstar(rr, gg, bb) {
        return Math.sqrt(0.299 * rr * rr + 0.587 * gg * gg + 0.114 * bb * bb)
    }

    // Brightness-only (no hue, no sat, no RGB): grayscale at brightness level
    if (hasBri && !hasHue && !hasSat && !hasRgb) {
        const v = Math.max(0, Math.min(1, bri))
        return { r: v, g: v, b: v }
    }

    // Phase 1: Start from RGB if set
    let baseR = Number.isFinite(r) ? clamp01(r) : 0
    let baseG = Number.isFinite(g) ? clamp01(g) : 0
    let baseB = Number.isFinite(b) ? clamp01(b) : 0
    const hasBaseRgb = hasRgb

    // Phase 2: Apply Hue (50-50 blend with RGB hue if both present)
    if (hasHue) {
        const hh = normalizeHue(hue) ?? 0
        let hueToUse = hh
        if (hasBaseRgb) {
            // 50-50 blend: blend the rule hue with the hue derived from the current RGB
            const rgbHsv = rgbToHsv(baseR, baseG, baseB)
            hueToUse = (hh + rgbHsv.h) / 2
        }
        // Apply the blended hue to the current color
        const curSat = hasSat ? clamp01(sat) : (hasBaseRgb ? rgbToHsv(baseR, baseG, baseB).s : 0)
        const hsvRgb = hsvToRgb(hueToUse, 1, 1)
        if (hasBaseRgb) {
            // Blend half-way toward the new hue color to preserve some original RGB character
            baseR = (baseR + hsvRgb.r) / 2
            baseG = (baseG + hsvRgb.g) / 2
            baseB = (baseB + hsvRgb.b) / 2
        } else {
            baseR = hsvRgb.r
            baseG = hsvRgb.g
            baseB = hsvRgb.b
        }
    }

    // Phase 3: Apply Saturation (modify saturation of current color)
    if (hasSat) {
        const hsv = rgbToHsv(baseR, baseG, baseB)
        const ss = Math.max(0, Math.min(1, sat))
        const rgb = hsvToRgb(hsv.h, ss, hsv.v)
        baseR = rgb.r
        baseG = rgb.g
        baseB = rgb.b
    }

    // Phase 4: Apply Brightness (use lstar perceptive luminosity)
    if (hasBri) {
        const targetLstar = Math.max(0, Math.min(1, bri))
        const currentLstar = lstar(baseR, baseG, baseB)
        if (currentLstar < 1e-6) {
            // Near black: set uniform gray at target brightness
            baseR = targetLstar
            baseG = targetLstar
            baseB = targetLstar
        } else {
            const scale = targetLstar / currentLstar
            baseR = clamp01(baseR * scale)
            baseG = clamp01(baseG * scale)
            baseB = clamp01(baseB * scale)
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

        // Modifier mode: no particle spawning, only living rules on proxy particles
        this._isModifier = opts.isModifier === true
        this._modifierSeeded = false

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
        // ── Per-Component Analysis (ComponentTracker) ──
        /** @type {ComponentTracker} */
        this._componentTracker = new ComponentTracker({ maxComponents: 12 })
        /** @type {number} Cached component distinctness */
        this._lastDistinctness = -1

        // ── Harmonic-Percussive Source Separation (HPSS) ──
        /** @type {HarmonicPercussiveSplitter} */
        this._hpss = new HarmonicPercussiveSplitter({ frameRate: 60 })
        /** @type {Float64Array|null} Current HPSS harmonic data (per-bin) */
        this.harmonicEnergy = null
        /** @type {Float64Array|null} Current HPSS percussive data (per-bin) */
        this.percussiveEnergy = null

        // ── Particle age buffer (frames since spawn) ──
        this._particleAge = new Float32Array(this._N)
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
        this._particleAge = copy(oldIsFund, this._N) // reuse copy helper for age buffer
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
        const n = Math.max(0, this._visible_count)
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
            // Aura outputs create offsets from the layer centroid (average of
            // all fundamental isFundamental=1 particles). This ensures harmonics
            // distribute around the cloud centre, not around world origin (0,0,0).
            const cloudScale = Number.isFinite(particle.cloudSize) ? Math.max(0.01, particle.cloudSize) : 1
            const ec = this._layerCentroid || { x: 0, y: 0, z: 0 }
            if (Number.isFinite(particle.auraDistance)) {
                const dist = particle.auraDistance * Math.max(hw, hh) * 0.5 * cloudScale
                const angle = Number.isFinite(particle.auraAngle)
                    ? particle.auraAngle * Math.PI * 2
                    : 0
                if (Number.isFinite(particle.auraLatitude)) {
                    // Spherical: offset from layer centroid
                    const lat = (particle.auraLatitude - 0.5) * Math.PI
                    particle.x = ec.x + dist * Math.cos(lat) * Math.cos(angle)
                    particle.y = ec.y + dist * Math.sin(lat)
                    particle.z = ec.z + dist * Math.cos(lat) * Math.sin(angle)
                } else {
                    // Cylindrical: offset from layer centroid
                    const elev = Number.isFinite(particle.auraElevation)
                        ? (particle.auraElevation - 0.5) * Math.max(hw, hh) * cloudScale * 0.5
                        : 0
                    particle.x = ec.x + dist * Math.cos(angle)
                    particle.y = ec.y + elev
                    particle.z = ec.z + dist * Math.sin(angle)
                }
            } else if (Number.isFinite(particle.cloudSize)) {
                // Random cloud: scatter around layer centroid
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
            // Increment particle age
            this._particleAge[i] = (this._particleAge[i] || 0) + 1
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
            // Use the same blendHsbRgb pipeline (lstar brightness, 50-50 hue blend)
            const blended = blendHsbRgb(state.hue, state.saturation, state.brightness,
                state.red, state.green, state.blue)
            if (blended) {
                outR = blended.r
                outG = blended.g
                outB = blended.b
            }
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

        this._harmonicData = null

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
        const rulesEnabled = params.ruleEngineEnabled !== false
        const emitLightParticles = rulesEnabled && this._compiledRules.spawnRuleCount > 0
        const emitLines = rulesEnabled && this._compiledRules.lineRuleCount > 0

        // ── ISO 226 Equal-Loudness Compensation ──────────────────────────
        // Sync hearing amount to AudioEngine (for spectral feature correction)
        // and build per-bin LUT for bucket computation.
        const hearingAmount = Number(params.adjustForHumanHearing ?? 0)
        if (typeof ae.setHearingCompensation === 'function') {
            ae.setHearingCompensation(hearingAmount)
        }
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

        // ── Per-Component Analysis ─────────────────────────────────────
        // Run ComponentTracker each frame to decompose the spectrogram into
        // tracked sound components with extracted timbre metrics.
        const componentDistinctness = Number(params.componentDistinctness ?? 0.5)
        if (Math.abs(componentDistinctness - this._lastDistinctness) > 0.01) {
            this._componentTracker.setDistinctness(componentDistinctness)
            this._lastDistinctness = componentDistinctness
        }
        // Reset tracker when FFT size or audio context changes
        const currentFftForTracker = ae.FFT_SIZE || 16384
        if (this._trackerLastFftSize !== currentFftForTracker) {
            if (this._trackerLastFftSize !== undefined) {
                this._componentTracker.reset()
                this._hpss.reset()
            }
            this._trackerLastFftSize = currentFftForTracker
        }
        // Notify tracker of play-state changes to prevent transient hallucination
        // on pause→resume transitions where silence→signal would look like an onset.
        const audioPlaying = ae.audioEl ? !ae.audioEl.paused : false
        this._componentTracker.notePlayStateChange(audioPlaying)
        this._componentTracker.processFrame({
            freqData,
            binMagArr,
            fftSize: currentFftForTracker,
            sampleRate,
            gainMult,
        })

        // ── Harmonic-Percussive Source Separation ─────────────────────
        // Build a log-frequency frame (240 CQT bins) from the raw data
        // and run HPSS median filtering on it.
        // The HPSS outputs (harmonicEnergy, percussiveEnergy) are Float64Arrays
        // of length CQT_BINS (240) that can be sampled at arbitrary Hz.
        {
            const CQT_BINS = 240;
            const LOG_FREQ_MIN_HPSS = Math.log2(40);
            const LOG_FREQ_MAX_HPSS = Math.log2(16000);
            const hpssFrame = new Float64Array(CQT_BINS);
            const nyquist = sampleRate / 2;
            for (let b = 0; b < CQT_BINS; b++) {
                const t = b / (CQT_BINS - 1);
                const hz = Math.pow(2, LOG_FREQ_MIN_HPSS + t * (LOG_FREQ_MAX_HPSS - LOG_FREQ_MIN_HPSS));
                let mag = 0;
                if (binMagArr && binMagArr.length > 0) {
                    // Sample from worklet CQT data
                    mag = sampleLogCqtArrayAtHz(binMagArr, hz) ?? 0;
                } else if (freqData && freqData.length > 0) {
                    const binIdx = (hz / nyquist) * (currentFftForTracker / 2);
                    const i0 = Math.max(0, Math.min(freqData.length - 1, Math.floor(binIdx)));
                    const i1 = Math.max(0, Math.min(freqData.length - 1, i0 + 1));
                    const frac = binIdx - i0;
                    const v0 = freqData[i0] / 255;
                    const v1 = freqData[i1] / 255;
                    mag = v0 + (v1 - v0) * frac;
                }
                hpssFrame[b] = Math.max(0, mag * gainMult);
            }
            const hpssOut = this._hpss.processFrame(hpssFrame);
            this.harmonicEnergy = hpssOut.harmonic;
            this.percussiveEnergy = hpssOut.percussive;
        }

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
            globalTransient: ae.globalTransient ?? 0,
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

        // ── Component metric lookup helpers ──
        /** Get metrics for a specific component (used for per-component particle emission). */
        const _getCompMetricsByIndex = (compIdx) => {
            const _comps = this._componentTracker.components
            if (compIdx < 0 || compIdx >= _comps.length) {
                return { compId: -1, compCentroid: 0, compFlatness: 0, compFlux: 0, compOnset: 0, compCount: Math.max(0, this._componentTracker.componentCount) }
            }
            const comp = _comps[compIdx]
            return {
                compId: comp.streamId,
                // Pass raw centroid in Hz — users can normalize in their rules
                compCentroid: comp.centroid || 0,
                compFlatness: clamp01(comp.flatness),
                compFlux: clamp01(comp.flux),
                compOnset: clamp01(comp.onset),
                compCount: Math.max(0, this._componentTracker.componentCount),
            }
        }
        /**
         * Check if a component has non-zero template energy at or near a given Hz.
         * Uses a small 3-bin neighborhood to handle CQT/FFT bin boundary misalignment.
         */
        const _componentHasEnergyAtHz = (compIdx, hz) => {
            const _comps = this._componentTracker.components
            if (compIdx < 0 || compIdx >= _comps.length) return false
            const comp = _comps[compIdx]
            if (!comp.template || comp.template.length === 0) return false
            const clampedHz = Math.max(40, Math.min(16000, hz))
            const logMin = Math.log2(40), logMax = Math.log2(16000)
            const norm = (Math.log2(clampedHz) - logMin) / (logMax - logMin)
            const bin = Math.round(norm * (comp.template.length - 1))
            // Check a 3-bin window around the target to handle frequency alignment
            // Check 5-bin neighborhood — use a low enough threshold that
            // normalized unit templates (average bin ~0.065) always pass.
            const lo = Math.max(0, bin - 2)
            const hi = Math.min(comp.template.length - 1, bin + 2)
            let maxInWindow = 0
            for (let b = lo; b <= hi; b++) {
                const v = comp.template[b] || 0
                if (v > maxInWindow) maxInWindow = v
            }
            return maxInWindow > 1e-6
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
            // Per-component metrics (passed through bucket from outer loop)
            const compId = Number.isFinite(bucket.compId) ? bucket.compId : -1
            const compCentroid = Number.isFinite(bucket.compCentroid) ? bucket.compCentroid : undefined
            const compFlatness = Number.isFinite(bucket.compFlatness) ? bucket.compFlatness : undefined
            const compFlux = Number.isFinite(bucket.compFlux) ? bucket.compFlux : undefined
            const compOnset = Number.isFinite(bucket.compOnset) ? bucket.compOnset : undefined
            const compCount = Number.isFinite(bucket.compCount) ? bucket.compCount : undefined
            const compBinEnergy = Number.isFinite(bucket.compBinEnergy) ? bucket.compBinEnergy : undefined
            const harmonicEnergy = Number.isFinite(bucket.harmonicEnergy) ? bucket.harmonicEnergy : undefined
            const percussiveEnergy = Number.isFinite(bucket.percussiveEnergy) ? bucket.percussiveEnergy : undefined

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
                    inputs: Object.assign({}, _frameRuleBase, (() => {
                        const o = {
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
                            harmonicEnergy,
                            percussiveEnergy,
                            notePitchClass: midiToPitchClass(frequencyToMidi(hz)),
                            octave: midiToOctave(frequencyToMidi(hz)),
                            age: 0,
                        }
                        if (compId >= 0) o.componentId = compId
                        if (Number.isFinite(compCentroid)) o.componentCentroid = compCentroid
                        if (Number.isFinite(compFlatness)) o.componentFlatness = compFlatness
                        if (Number.isFinite(compFlux)) o.componentFlux = compFlux
                        if (Number.isFinite(compOnset)) o.componentOnset = compOnset
                        if (compCount > 0) o.componentCount = compCount
                        if (Number.isFinite(compBinEnergy)) o.componentBinEnergy = compBinEnergy
                        return o
                    })()),
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

            // Dedup: skip if a particle with the same position AND component was already written this frame.
            // When rules use only global inputs (e.g. spectralCentroid for x/y/z), every
            // bucket spawns a particle at the same location — one is enough.
            // In painting mode (persistMode=1) all buckets are kept to accumulate trails.
            // Component ID is included to allow overlapping components at the same frequency.
            if (_particleDedup) {
                const posKey = `${px.toFixed(2)},${py.toFixed(2)},${pz.toFixed(2)}|c${compId}`
                if (_particleDedup.has(posKey)) { dedupedCount++; return }
                _particleDedup.set(posKey, true)
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
            // Reset age for newly spawned particle
            this._particleAge[slotIndex] = 0
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
            // Per-component metrics (passed through bucket from outer loop)
            const compId = Number.isFinite(bucket.compId) ? bucket.compId : -1
            const compCentroid = Number.isFinite(bucket.compCentroid) ? bucket.compCentroid : undefined
            const compFlatness = Number.isFinite(bucket.compFlatness) ? bucket.compFlatness : undefined
            const compFlux = Number.isFinite(bucket.compFlux) ? bucket.compFlux : undefined
            const compOnset = Number.isFinite(bucket.compOnset) ? bucket.compOnset : undefined
            const compCount = Number.isFinite(bucket.compCount) ? bucket.compCount : undefined
            // Per-component bin energy — from component's own spectrum
            const compBinEnergy = Number.isFinite(bucket.compBinEnergy) ? bucket.compBinEnergy : undefined
            // HPSS variables
            const harmonicEnergy = Number.isFinite(bucket.harmonicEnergy) ? bucket.harmonicEnergy : undefined
            const percussiveEnergy = Number.isFinite(bucket.percussiveEnergy) ? bucket.percussiveEnergy : undefined

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
                    inputs: Object.assign({}, _frameRuleBase, (() => {
                        const o = {
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
                            harmonicEnergy,
                            percussiveEnergy,
                            notePitchClass: midiToPitchClass(frequencyToMidi(hz)),
                            octave: midiToOctave(frequencyToMidi(hz)),
                            age: 0,
                        }
                        if (compId >= 0) o.componentId = compId
                        if (Number.isFinite(compCentroid)) o.componentCentroid = compCentroid
                        if (Number.isFinite(compFlatness)) o.componentFlatness = compFlatness
                        if (Number.isFinite(compFlux)) o.componentFlux = compFlux
                        if (Number.isFinite(compOnset)) o.componentOnset = compOnset
                        if (compCount > 0) o.componentCount = compCount
                        if (Number.isFinite(compBinEnergy)) o.componentBinEnergy = compBinEnergy
                        return o
                    })()),
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
            const axisRaw = typeof line.direction === 'string' ? line.direction.trim().toLowerCase() : ''
            const axis = (axisRaw === 'x' || axisRaw === 'y' || axisRaw === 'z') ? axisRaw : 'y'

            // Line dedup: skip lines with identical center + direction + length + component
            if (_lineDedup) {
                const lineKey = `${centerX.toFixed(2)},${centerY.toFixed(2)},${centerZ.toFixed(2)},${axis},${lineLength.toFixed(1)},c${compId}`
                if (_lineDedup.has(lineKey)) { dedupedLineCount++; return }
                _lineDedup.set(lineKey, true)
            }

            const halfLength = lineLength * 0.5

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
        // Expose globalTransient and age in frame rule base
        _frameRuleBase.globalTransient = frameBinInputs.globalTransient
        _frameRuleBase.age = 0
        // Fundamental from PitchFirstClassifier (log-norm 0=40Hz, 1=16000Hz)
        _frameRuleBase.fundamentalNormHz = ae._detectedFundamentalHz > 0
            ? Math.min(1, (Math.log2(Math.max(40, ae._detectedFundamentalHz)) - Math.log2(40)) / (Math.log2(16000) - Math.log2(40)))
            : (typeof _n === 'function' ? _n(ae.peakFreq ?? 0, 0, 22050) : 0)
        // Shape activations from PitchFirstClassifier (global 10-shape vector)
        const gsa = ae.getGlobalShapeActivations?.()
        if (gsa) {
            _frameRuleBase.shapeSine = gsa[0] || 0
            _frameRuleBase.shapeTriangle = gsa[1] || 0
            _frameRuleBase.shapeSawtooth = gsa[2] || 0
            _frameRuleBase.shapeSquare = gsa[3] || 0
            _frameRuleBase.shapeNoise = gsa[4] || 0
            _frameRuleBase.shapePinkNoise = gsa[5] || 0
            _frameRuleBase.shapeTransient = gsa[6] || 0
            _frameRuleBase.shapePad = gsa[7] || 0
            _frameRuleBase.shapeBuzzy = gsa[8] || 0
            _frameRuleBase.shapeBass = gsa[9] || 0
            // Dominant shape
            let maxS = 0, maxV = 0
            for (let s = 0; s < 10; s++) {
                if (gsa[s] > maxV) { maxV = gsa[s]; maxS = s }
            }
            const shapeNames = ['Sine', 'Triangle', 'Sawtooth', 'Square', 'Noise', 'PinkNoise', 'Transient', 'Pad', 'Buzzy', 'Bass']
            _frameRuleBase.shapeDominant = shapeNames[maxS] || 'Sine'
            _frameRuleBase.shapeDominantValue = maxV
        } else {
            _frameRuleBase.shapeSine = 0; _frameRuleBase.shapeTriangle = 0; _frameRuleBase.shapeSawtooth = 0
            _frameRuleBase.shapeSquare = 0; _frameRuleBase.shapeNoise = 0; _frameRuleBase.shapePinkNoise = 0
            _frameRuleBase.shapeTransient = 0; _frameRuleBase.shapePad = 0; _frameRuleBase.shapeBuzzy = 0
            _frameRuleBase.shapeBass = 0; _frameRuleBase.shapeDominant = 'Sine'; _frameRuleBase.shapeDominantValue = 0
        }
        // Expose componentCount as overall variable
        _frameRuleBase.componentCount = Math.max(0, this._componentTracker.componentCount)
        // Expose per-component timbre metrics as frame‑level variables
        // (taken from the first active component for use in living rules)
        {
            const comps = this._componentTracker.components || []
            if (comps.length > 0 && this._componentTracker.componentCount > 0) {
                const first = comps[0]
                _frameRuleBase.componentId = first.streamId || 0
                _frameRuleBase.componentCentroid = first.centroid || 0
                _frameRuleBase.componentFlatness = first.flatness || 0
                _frameRuleBase.componentFlux = first.flux || 0
                _frameRuleBase.componentOnset = first.onset || 0
                _frameRuleBase.componentBinEnergy = first.energy || 0
            } else {
                _frameRuleBase.componentId = 0
                _frameRuleBase.componentCentroid = 0
                _frameRuleBase.componentFlatness = 0
                _frameRuleBase.componentFlux = 0
                _frameRuleBase.componentOnset = 0
                _frameRuleBase.componentBinEnergy = 0
            }
        }

        // ── Smart bucket count ───────────────────────────────────────────
        // If spawn/line rules don't reference any per-bin variable, every
        // bucket produces identical particles. One bucket is enough.
        const PER_BIN_VARS = new Set([
            'frequencyHz', 'normFreq',
            'notePitchClass', 'octave',
            'binMagnitude', 'binPhase', 'binFlux', 'binPhaseDeviation',
            'binAttackTime', 'binEnvelope', 'binEnvelopeState', 'binRMSEnergy',
            'pan',
            'bandFlatness', 'bandTransient', 'bandCentroid', 'bandFlux', 'bandInstability',
            'isFundamental',
            // Per-component variables
            'componentId', 'componentCentroid', 'componentFlatness', 'componentFlux',
            'componentOnset', 'componentCount', 'componentBinEnergy',
            // HPSS variables
            'harmonicEnergy', 'percussiveEnergy',
        ])
        const spawnInputs = this._compiledRules?.requiredInputsByTarget?.spawnedParticles ?? []
        const lineInputs = this._compiledRules?.requiredInputsByTarget?.lines ?? []
        const spawnNeedsBins = spawnInputs.some((id) => PER_BIN_VARS.has(id))
        const lineNeedsBins = lineInputs.some((id) => PER_BIN_VARS.has(id))
        const needsFullBucketLoop = (emitLightParticles && spawnNeedsBins) || (emitLines && lineNeedsBins)
        let effectiveBucketCount = needsFullBucketLoop ? logBucketCount : 1
        // In painting mode always use full buckets to accumulate trails
        if (persistMode === 1) effectiveBucketCount = logBucketCount

        // One-particle dedup: skip particles at the same position
        const _particleDedup = persistMode !== 1 ? new Map() : null
        const _lineDedup = persistMode !== 1 ? new Map() : null
        let dedupedCount = 0
        let dedupedLineCount = 0

        // ── Modifier mode: skip bucket loop, seed proxy particles once ──
        if (this._isModifier) {
            this._insert_index = 0
            this._paint_count = 0
            // Seed proxy particles on first frame (a small grid of overlay particles)
            if (!this._modifierSeeded) {
                this._modifierSeeded = true
                const count = 5
                const spread = Math.min(hw, hh) * 0.3
                const proxyColors = [
                    [1, 1, 1], [1, 0.5, 0.5], [0.5, 1, 0.5], [0.5, 0.5, 1], [1, 1, 0.5]
                ]
                for (let i = 0; i < count && i < activeParticleCapacity; i++) {
                    const angle = (i / count) * Math.PI * 2
                    const radius = spread * (0.3 + 0.7 * (i / count))
                    const px = Math.cos(angle) * radius
                    const py = Math.sin(angle) * radius
                    const pz = 0
                    this._pos[i * 3] = px
                    this._pos[i * 3 + 1] = py
                    this._pos[i * 3 + 2] = pz
                    this._sz[i] = 4
                    const [cr, cg, cb] = proxyColors[i % proxyColors.length]
                    this._col[i * 3] = cr
                    this._col[i * 3 + 1] = cg
                    this._col[i * 3 + 2] = cb
                    this._alpha[i] = 0.6
                    this._shape[i] = 1
                    this._pan[i] = 0
                    this._binRms[i] = 0
                    this._isFundamental[i] = 1
                    this._particleAge[i] = 0
                    pointDirtyMin = Math.min(pointDirtyMin, i)
                    pointDirtyMax = Math.max(pointDirtyMax, i)
                }
                this._visible_count = count
                this._geo.setDrawRange(0, count)
            }
            // Skip bucket loop — modifier layers don't spawn particles from audio
        } else {
            // ── Entity spawning: one particle per detected fundamental ──
            const shapeEntities = ae._shapeEntities || []
            const entityShapeIds = ['shapeSine', 'shapeTriangle', 'shapeSawtooth', 'shapeSquare',
                'shapeNoise', 'shapePinkNoise', 'shapeTransient', 'shapePad', 'shapeBuzzy', 'shapeBass']
            for (const entity of shapeEntities) {
                if (writeIndex >= activeParticleCapacity) break
                const fHz = entity.fundamentalHz || 0
                if (fHz <= 0) continue
                const f0Norm = Math.min(1, (Math.log2(Math.max(40, fHz)) - Math.log2(40)) / (Math.log2(16000) - Math.log2(40)))

                // Build per-entity rule inputs with shape activations
                const entityInputs = Object.assign({}, _frameRuleBase, {
                    frequencyHz: fHz,
                    normFreq: f0Norm,
                    fundamentalNormHz: f0Norm,
                    notePitchClass: midiToPitchClass(frequencyToMidi(fHz)),
                    octave: midiToOctave(frequencyToMidi(fHz)),
                })
                // Inject per-entity shape activations
                const sa = entity.shapeActivations
                if (sa) {
                    for (let s = 0; s < 10; s++) entityInputs[entityShapeIds[s]] = sa[s] || 0
                }
                entityInputs.shapeDominant = entity.dominantShape?.replace('shape', '') || 'Sine'
                entityInputs.shapeDominantValue = entity.dominantShapeValue || 0

                const entityParticle = {
                    x: 0, y: 0, z: 0,
                    size: 3,
                    red: 1, green: 1, blue: 1,
                    opacity: 0.8,
                    particleCount: 1,
                    shapeType: 'circle',
                }
                hydrateColorState(entityParticle, entityParticle.red, entityParticle.green, entityParticle.blue)

                if (emitLightParticles) {
                    this.applySpawnRulesToParticle({
                        params,
                        inputs: entityInputs,
                        particle: entityParticle,
                    })
                }
                if (Number.isFinite(entityParticle.particleCount) && entityParticle.particleCount <= 0) continue

                const epx = Number.isFinite(entityParticle.x) ? entityParticle.x : 0
                const epy = Number.isFinite(entityParticle.y) ? entityParticle.y : 0
                const epz = Number.isFinite(entityParticle.z) ? entityParticle.z : 0
                const eSize = Number.isFinite(entityParticle.size) ? Math.max(0, entityParticle.size) : 3
                const blended = blendHsbRgb(entityParticle.hue, entityParticle.saturation, entityParticle.brightness,
                    entityParticle.red, entityParticle.green, entityParticle.blue)
                const eR = blended ? clamp01(blended.r) : 1
                const eG = blended ? clamp01(blended.g) : 1
                const eB = blended ? clamp01(blended.b) : 1
                const eAlpha = Number.isFinite(entityParticle.opacity) ? Math.max(0, Math.min(1, entityParticle.opacity)) : 0.8

                this._pos[writeIndex * 3] = epx
                this._pos[writeIndex * 3 + 1] = epy
                this._pos[writeIndex * 3 + 2] = epz
                this._sz[writeIndex] = eSize * sizeMultiplier
                this._col[writeIndex * 3] = eR
                this._col[writeIndex * 3 + 1] = eG
                this._col[writeIndex * 3 + 2] = eB
                this._alpha[writeIndex] = eAlpha
                this._shape[writeIndex] = (entityParticle.shapeType === 'circle') ? 1 : 0
                this._pan[writeIndex] = entityInputs.pan ?? 0
                this._binRms[writeIndex] = entityInputs.binRMSEnergy ?? 0
                this._isFundamental[writeIndex] = 1
                this._particleAge[writeIndex] = 0
                markPointDirty(writeIndex)
                writeIndex++
                wroteParticles++
            }

            // ── Normal generator: bucket loop ──
            let hzStart = freqNormMinHz
            for (let bucketIndex = 0; bucketIndex < effectiveBucketCount; bucketIndex++) {
                const isSingleBucket = effectiveBucketCount === 1 && logBucketCount > 1
                const hzEnd = isSingleBucket
                    ? freqNormMaxHz
                    : (bucketIndex === logBucketCount - 1)
                        ? freqNormMaxHz
                        : Math.min(freqNormMaxHz, hzStart * stepRatio)
                const hzCenter = isSingleBucket
                    ? Math.sqrt(freqNormMinHz * freqNormMaxHz)
                    : Math.sqrt(Math.max(freqNormMinHz, hzStart) * Math.max(freqNormMinHz, hzEnd))

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

                // ── Per-component particle emission ──────────────────────
                // For each bucket frequency, iterate over all tracked components.
                // Components with significant energy at this frequency each get
                // their own particle + line, carrying their componentId and
                // per-component timbre metrics (centroid, flatness, flux, onset).
                // This ensures overlapping harmonics from different instruments
                // produce distinct particles even at the same frequency.
                const activeComps = this._componentTracker.components || []
                // Sample HPSS data at this bucket's frequency
                const hpssHarmonic = this.harmonicEnergy ? (sampleLogCqtArrayAtHz(this.harmonicEnergy, hzCenter) ?? 0) : 0;
                const hpssPercussive = this.percussiveEnergy ? (sampleLogCqtArrayAtHz(this.percussiveEnergy, hzCenter) ?? 0) : 0;
                const bucketBase = {
                    hz: hzCenter,
                    byte: peakByteBucket,
                    energy: bucketEnergy,
                    harmonicEnergy: clamp01(hpssHarmonic),
                    percussiveEnergy: clamp01(hpssPercussive),
                    binPan: sumPanWeight > 0 ? (sumPan / sumPanWeight) : 0,
                    binRMSEnergy: clamp01(avgRaw),
                    binMagnitude: needBinMagnitude ? (sumBinMagnitude / count) : undefined,
                    binPhase: needBinPhase ? (sumBinPhase / count) : undefined,
                    binFlux: needBinFlux ? (sumBinFlux / count) : undefined,
                    binPhaseDeviation: needBinPhaseDev ? (sumBinPhaseDev / count) : undefined,
                    binAttackTime: needBinAttackTime ? (sumBinAttackTime / count) : undefined,
                    binEnvelope: needBinEnvelope ? (sumBinEnvelope / count) : undefined,
                }

                // Determine whether the per-component loop is needed.
                // Run whenever there are active tracked components — this ensures
                // every spawned particle carries its componentId and per-component
                // timbre metrics (centroid, flatness, flux, onset, binEnergy).
                // Even if no spawn/line rules are active, the component data is
                // stored on every particle for potential living-rule use.
                // Only run per-component emission when rules actually reference
                // component-level variables. This prevents spawning N particles
                // per bucket (where N = component count) when no rule uses them.
                const componentVarIds = new Set(['componentId', 'componentCentroid', 'componentFlatness', 'componentFlux', 'componentOnset', 'componentCount', 'componentBinEnergy'])
                const usesComponentVars = [...requiredInputs].some((id) => componentVarIds.has(id))
                const compsNeedEmission = activeComps.length > 0 && usesComponentVars

                if (compsNeedEmission) {
                    // Emit particles for up to MAX_COMP_PER_BUCKET components at
                    // this bucket frequency. Every component emits regardless of
                    // template energy — this guarantees component variables are
                    // always populated in the rule inputs.
                    // Cap at 3 to bound particle count when many components exist.
                    const MAX_COMP_PER_BUCKET = 3
                    const compCount = Math.max(0, this._componentTracker.componentCount)
                    const emitCount = Math.min(activeComps.length, MAX_COMP_PER_BUCKET)
                    for (let ci = 0; ci < emitCount; ci++) {
                        const cm = _getCompMetricsByIndex(ci)

                        // Per-component bin energy: sample the component's
                        // normalised template at the bucket's Hz centre.
                        const compTemplate = activeComps[ci].template
                        let compBinEnergy = 0
                        if (compTemplate && compTemplate.length > 1) {
                            const hzForComp = Math.max(40, Math.min(16000, hzCenter))
                            const logMin = Math.log2(40), logMax = Math.log2(16000)
                            const norm = (Math.log2(hzForComp) - logMin) / (logMax - logMin)
                            const pos = norm * (compTemplate.length - 1)
                            const i0 = Math.max(0, Math.min(compTemplate.length - 1, Math.floor(pos)))
                            const i1 = Math.max(0, Math.min(compTemplate.length - 1, i0 + 1))
                            const frac = pos - i0
                            const v0 = Number(compTemplate[i0]) || 0
                            const v1 = Number(compTemplate[i1]) || 0
                            compBinEnergy = clamp01(v0 + (v1 - v0) * frac)
                        } else {
                            // No template — use bucket energy as proxy
                            compBinEnergy = clamp01(bucketBase.energy)
                        }

                        const particleBucket = {
                            ...bucketBase,
                            compId: cm.compId,
                            compCentroid: cm.compCentroid,
                            compFlatness: cm.compFlatness,
                            compFlux: cm.compFlux,
                            compOnset: cm.compOnset,
                            compCount: compCount,
                            compBinEnergy,
                        }
                        writeParticle(particleBucket, 1, isFund)
                        writeLine(particleBucket)
                        if (persistMode !== 1 && writeIndex >= activeParticleCapacity) break
                    }
                } else {
                    // Emit default particle with component 0 data attached.
                    // Always attach component data so component variables are
                    // never undefined in living rules or other dynamic paths.
                    const compCount = Math.max(0, this._componentTracker.componentCount)
                    if (activeComps.length > 0 && compCount > 0) {
                        const cm = _getCompMetricsByIndex(0)
                        const compTemplate = activeComps[0]?.template
                        let compBinEnergy = 0
                        if (compTemplate && compTemplate.length > 1) {
                            const hzForComp = Math.max(40, Math.min(16000, hzCenter))
                            const logMin = Math.log2(40), logMax = Math.log2(16000)
                            const norm = (Math.log2(hzForComp) - logMin) / (logMax - logMin)
                            const pos = norm * (compTemplate.length - 1)
                            const i0 = Math.max(0, Math.min(compTemplate.length - 1, Math.floor(pos)))
                            const i1 = Math.max(0, Math.min(compTemplate.length - 1, i0 + 1))
                            const frac = pos - i0
                            const v0 = Number(compTemplate[i0]) || 0
                            const v1 = Number(compTemplate[i1]) || 0
                            compBinEnergy = clamp01(v0 + (v1 - v0) * frac)
                        } else {
                            // No template — use bucket energy
                            compBinEnergy = clamp01(bucketBase.energy)
                        }
                        const attachedBucket = {
                            ...bucketBase,
                            compId: cm.compId,
                            compCentroid: cm.compCentroid,
                            compFlatness: cm.compFlatness,
                            compFlux: cm.compFlux,
                            compOnset: cm.compOnset,
                            compCount: compCount,
                            compBinEnergy,
                        }
                        writeParticle(attachedBucket, 1, isFund)
                        writeLine(attachedBucket)
                    } else {
                        // No components — bare particle
                        writeParticle(bucketBase, 1, isFund)
                        writeLine(bucketBase)
                    }
                }
                hzStart = hzEnd
                if (persistMode !== 1 && writeIndex >= activeParticleCapacity) break
            }
        } // end else (generator bucket loop)

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
            // Compute layer centroid from all fundamental isFundamental=1 particles
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
            this._layerCentroid = nFund > 0 ? { x: cx / nFund, y: cy / nFund, z: cz / nFund } : null
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
