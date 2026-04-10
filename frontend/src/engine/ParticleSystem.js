import * as THREE from 'three'
import { compileRules } from './rules/RuleCompiler.js'
import { ParticleArchive } from './ParticleArchive.js'

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
    const unitHue = Math.abs(hue) > 1 ? hue / 360 : hue
    return ((unitHue % 1) + 1) % 1
}

function frequencyToMidi(frequencyHz) {
    const hz = Number(frequencyHz)
    if (!Number.isFinite(hz) || hz <= 0) return null
    return 69 + 12 * Math.log2(hz / 440)
}

function frequencyToPitchClass(frequencyHz) {
    const midi = frequencyToMidi(frequencyHz)
    if (!Number.isFinite(midi)) return 0
    const nearest = Math.round(midi)
    return ((nearest % 12) + 12) % 12
}

function frequencyToOctave(frequencyHz) {
    const midi = frequencyToMidi(frequencyHz)
    if (!Number.isFinite(midi)) return -1
    return Math.floor(Math.round(midi) / 12) - 1
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

function applyYellowModifier(r, g, b, yellow) {
    const y = Number(yellow)
    if (!Number.isFinite(y)) return { r: clamp01(r), g: clamp01(g), b: clamp01(b) }
    return {
        r: clamp01(r + y),
        g: clamp01(g + y),
        b: clamp01(b),
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
        this._insertIndex = 0
        this._visibleCount = 0
        this._paintCount = 0
        this._lineVisibleCount = 0

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
        this._archive = new ParticleArchive()
        this._archive.updateOffloadBatch(this._N)
    }

    _allocateBuffers(maxParticles) {
        this._capacity = Math.max(1, Math.floor(maxParticles))
        this._N = this._capacity
        this._maxActiveParticles = this._capacity
        this._insertIndex = 0
        if (this._archive) this._archive.updateOffloadBatch(this._N)
        this._pos = new Float32Array(this._N * 3)
        this._col = new Float32Array(this._N * 3)
        this._sz = new Float32Array(this._N)
        this._alpha = new Float32Array(this._N)
        this._shape = new Float32Array(this._N)
        this._pan = new Float32Array(this._N)
        this._binRms = new Float32Array(this._N)
        this._linePos = new Float32Array(this._N * 2 * 3)
        this._lineCol = new Float32Array(this._N * 2 * 3)
        this._lineThickness = new Float32Array(this._N)
        this._lineAlpha = new Float32Array(this._N)

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
            binRms: this._binRms
        }
        const { rehydrated, mode } = this._archive.rehydrateArchivedToActive(request, buffers, this._N)

        this._paintCount = rehydrated
        this._visibleCount = rehydrated
        this._insertIndex = rehydrated % this._getActiveParticleCapacity()
        this._geo.setDrawRange(0, rehydrated)
        this._lineVisibleCount = 0
        this._lineGeo.setDrawRange(0, 0)
        this._aPos.needsUpdate = true
        this._aCol.needsUpdate = true
        this._aSz.needsUpdate = true
        this._aAlpha.needsUpdate = true
        this._aShape.needsUpdate = true
        this._aLinePos.needsUpdate = true
        this._aLineCol.needsUpdate = true

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
        this._paintCount = this._visibleCount
        this._lineVisibleCount = Math.min(this._lineVisibleCount, clamped)
        this._insertIndex = this._visibleCount % clamped

        this._geo.setDrawRange(0, this._visibleCount)
        this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
    }

    clear() {
        this._paintCount = 0
        this._visibleCount = 0
        this._insertIndex = 0
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

    _buildRuleInputs(ae, extra = {}) {
        const frequencyHz = Number(extra.frequencyHz) || 0
        const notePitchClass = frequencyToPitchClass(frequencyHz)
        const octave = frequencyToOctave(frequencyHz)
        return {
            amplitude: Number.isFinite(extra.amplitude) ? Number(extra.amplitude) : (ae.amplitude ?? 0),
            bass: ae.bass ?? 0,
            mid: ae.mid ?? 0,
            high: ae.high ?? 0,
            peakFreq: ae.peakFreq ?? 0,
            pan: Number.isFinite(extra.pan) ? Number(extra.pan) : (ae.pan ?? 0),
            time: Number(extra.time) || 0,
            deltaTime: Number.isFinite(Number(extra.deltaTime)) && Number(extra.deltaTime) > 0 ? Number(extra.deltaTime) : (1 / 60),
            // Spawn path can override these with per-bin timbre values.
            globalRmsEnergy: Number.isFinite(extra.globalRmsEnergy) ? Number(extra.globalRmsEnergy) : (ae.amplitude ?? 0),
            spectralCentroid: Number.isFinite(extra.spectralCentroid) ? Number(extra.spectralCentroid) : (ae.spectralCentroid ?? 0),
            spectralFlux: Number.isFinite(extra.spectralFlux) ? Number(extra.spectralFlux) : (ae.spectralFlux ?? 0),
            spectralFlatness: Number.isFinite(extra.spectralFlatness) ? Number(extra.spectralFlatness) : (ae.spectralFlatness ?? 0),
            inharmonicity: Number.isFinite(extra.inharmonicity) ? Number(extra.inharmonicity) : (ae.inharmonicity ?? 0),
            peakAmplitude: Number.isFinite(extra.peakAmplitude) ? Number(extra.peakAmplitude) : (ae.peakAmplitude ?? 0),
            zeroCrossingRate: Number.isFinite(extra.zeroCrossingRate) ? Number(extra.zeroCrossingRate) : (ae.zeroCrossingRate ?? 0),
            spectralRolloff: Number.isFinite(extra.spectralRolloff) ? Number(extra.spectralRolloff) : (ae.spectralRolloff ?? 0),
            spectralSpread: Number.isFinite(extra.spectralSpread) ? Number(extra.spectralSpread) : (ae.spectralSpread ?? 0),
            spectralSkewness: Number.isFinite(extra.spectralSkewness) ? Number(extra.spectralSkewness) : (ae.spectralSkewness ?? 0),
            chromagram: Number.isFinite(extra.chromagram) ? Number(extra.chromagram) : (ae.chromagram ?? 0),
            binMagnitude: Number.isFinite(extra.binMagnitude) ? clamp01(extra.binMagnitude) : 0,
            binPhase: Number.isFinite(extra.binPhase) ? clamp01(extra.binPhase) : 0,
            binFlux: Number.isFinite(extra.binFlux) ? Number(extra.binFlux) : 0,
            binPhaseDeviation: Number.isFinite(extra.binPhaseDeviation) ? clamp01(extra.binPhaseDeviation) : 0,
            binAttackTime: Number.isFinite(extra.binAttackTime) ? clamp01(extra.binAttackTime) : 0,
            binEnvelope: Number.isFinite(extra.binEnvelope)
                ? Number(extra.binEnvelope)
                : (Number.isFinite(extra.binAttackTime) ? Number(extra.binAttackTime) : 0),
            binEnvelopeState: Number.isFinite(extra.binEnvelopeState)
                ? Number(extra.binEnvelopeState)
                : (Number.isFinite(extra.binEnvelope) ? Number(extra.binEnvelope) : 0),
            binRMSEnergy: Number.isFinite(extra.binRMSEnergy)
                ? clamp01(extra.binRMSEnergy)
                : (Number.isFinite(extra.globalRmsEnergy) ? clamp01(extra.globalRmsEnergy) : 0),
            canvasWidthPx: Number(extra.canvasWidthPx) || 0,
            canvasHeightPx: Number(extra.canvasHeightPx) || 0,
            canvasWidthUnits: Number(extra.canvasWidthUnits) || 0,
            canvasHeightUnits: Number(extra.canvasHeightUnits) || 0,
            // Backward-compatible aliases. Treat these as fixed pixel dimensions.
            canvasWidth: Number(extra.canvasWidthPx) || 0,
            canvasHeight: Number(extra.canvasHeightPx) || 0,
            audioLengthSec: Number(extra.audioLengthSec) || 0,
            frequencyHz,
            notePitchClass,
            octave,
            normFreq: Number(extra.normFreq) || 0,
        }
    }

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

        let touched = 0
        for (let i = start; i < end; i += stride) {
            if (touched >= maxTouches) break
            loopInputs.pan = Number.isFinite(this._pan[i]) ? this._pan[i] : 0
            loopInputs.binRMSEnergy = Number.isFinite(this._binRms[i]) ? this._binRms[i] : 0
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

            this._compiledRules.applyLivingRules(loopCtx, particle)

            this._pos[i * 3] = Number.isFinite(particle.x) ? particle.x : this._pos[i * 3]
            this._pos[i * 3 + 1] = Number.isFinite(particle.y) ? particle.y : this._pos[i * 3 + 1]
            this._pos[i * 3 + 2] = Number.isFinite(particle.z) ? particle.z : this._pos[i * 3 + 2]
            this._sz[i] = Number.isFinite(particle.size) ? Math.max(0, particle.size) : this._sz[i]
            let nextR = Number.isFinite(particle.red) ? clamp01(particle.red) : this._col[i * 3]
            let nextG = Number.isFinite(particle.green) ? clamp01(particle.green) : this._col[i * 3 + 1]
            let nextB = Number.isFinite(particle.blue) ? clamp01(particle.blue) : this._col[i * 3 + 2]
            if (this._compiledRules.usesParticleHsb) {
                const baseHsv = rgbToHsv(nextR, nextG, nextB)
                const hh = normalizeHue(particle.hue)
                const ss = Number.isFinite(particle.saturation) ? clamp01(particle.saturation) : baseHsv.s
                const vv = Number.isFinite(particle.brightness) ? clamp01(particle.brightness) : baseHsv.v
                const rgb = hsvToRgb(hh ?? baseHsv.h, ss, vv)
                nextR = rgb.r
                nextG = rgb.g
                nextB = rgb.b
            }
            const yellowRgb = applyYellowModifier(nextR, nextG, nextB, particle.yellow)
            nextR = yellowRgb.r
            nextG = yellowRgb.g
            nextB = yellowRgb.b
            this._col[i * 3] = nextR
            this._col[i * 3 + 1] = nextG
            this._col[i * 3 + 2] = nextB
            this._alpha[i] = Number.isFinite(particle.opacity) ? Math.max(0, Math.min(1, particle.opacity)) : this._alpha[i]
            this._shape[i] = shapeToValue(particle.shapeType)
            this._binRms[i] = Number.isFinite(loopInputs.binRMSEnergy) ? clamp01(loopInputs.binRMSEnergy) : this._binRms[i]
            touched++
        }
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
        const yellowRgb = applyYellowModifier(outR, outG, outB, state.yellow)
        outR = yellowRgb.r
        outG = yellowRgb.g
        outB = yellowRgb.b
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

        this._frameCounter++
        const now = performance.now()
        const deltaTime = Math.max(0, Math.min(1, (now - this._lastUpdateT) / 1000))
        this._lastUpdateT = now

        const freqData = ae.frequencyData
        const N = Math.min(freqData.length, this._N)
        const sampleRate = ae.ctx?.sampleRate ?? 44100
        const nyquist = sampleRate / 2
        const binToHz = (b) => (b / freqData.length) * nyquist

        const persistMode = params.persistMode ?? 0 // 0 = Momentary, 1 = Painting
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
        const bgHue = Number.isFinite(Number(params.defaultBackgroundHue)) ? Number(params.defaultBackgroundHue) : 0
        const bgSat = Number.isFinite(Number(params.defaultBackgroundSaturation)) ? Number(params.defaultBackgroundSaturation) : 0
        const bgLight = Number.isFinite(Number(params.defaultBackgroundLightness)) ? Number(params.defaultBackgroundLightness) : 0
        const hasStereoBins = !!(ae.analyserL && ae.analyserR && ae.getBinPan)
        const binMagArr = ae.getBinMagnitude?.() || null
        const binFluxArr = ae.getBinFlux?.() || null
        const binPhaseDevArr = ae.getBinPhaseDeviation?.() || null
        const binPhaseArr = ae.getBinPhase?.() || null
        const binEnvArr = ae.getBinEnvelope?.() || null
        const binAttackTimeArr = ae.getBinAttackTime?.() || null
        const requiredInputs = new Set(this._compiledRules?.requiredInputs || [])
        const needBinMagnitude = requiredInputs.has('binMagnitude')
        const needBinPhase = requiredInputs.has('binPhase')
        const needBinFlux = requiredInputs.has('binFlux')
        const needBinPhaseDev = requiredInputs.has('binPhaseDeviation')
        const needBinAttackTime = requiredInputs.has('binAttackTime')
        const needBinEnvelope = requiredInputs.has('binEnvelope') || requiredInputs.has('binEnvelopeState')
        const rulesEnabled = params.ruleEngineEnabled !== false
        const emitLightParticles = rulesEnabled && this._compiledRules.spawnRuleCount > 0
        const emitLines = rulesEnabled && this._compiledRules.lineRuleCount > 0

        // Adjust Three.js blending mode
        if (!blendEnabled) {
            if (this._mat.blending !== THREE.NormalBlending) {
                this._mat.blending = THREE.NormalBlending
                this._mat.needsUpdate = true
                this._lastBlending = THREE.NormalBlending
            }
            if (!this._mat.depthWrite) {
                this._mat.depthWrite = true
                this._mat.needsUpdate = true
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
            if (mat.depthWrite) {
                mat.depthWrite = false
                mat.needsUpdate = true
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

            if (mat.depthWrite) {
                mat.depthWrite = false
                needsUpdate = true
            }
            if (needsUpdate) mat.needsUpdate = true
        }

        if (this._lineMat.blending !== this._mat.blending) {
            this._lineMat.blending = this._mat.blending
            this._lineMat.needsUpdate = true
        }
        const wantsLineDepthWrite = !blendEnabled
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
            ? (this._insertIndex % activeParticleCapacity)
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

        const writeParticle = (bucket, alphaBoost = 1) => {
            if (!emitLightParticles) return
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

            if (emitLightParticles) {
                this.applySpawnRulesToParticle({
                    params,
                    inputs: this._buildRuleInputs(ae, {
                        frequencyHz: hz,
                        normFreq: freqNorm,
                        pan: binPan,
                        // Global timbre inputs should remain frame-level values.
                        // Per-bin variants are provided via dedicated bin* inputs.
                        spectralCentroid: frameBinInputs.spectralCentroid,
                        spectralFlux: frameBinInputs.spectralFlux,
                        spectralFlatness: frameBinInputs.spectralFlatness,
                        inharmonicity: frameBinInputs.inharmonicity,
                        peakAmplitude: frameBinInputs.peakAmplitude,
                        zeroCrossingRate: frameBinInputs.zeroCrossingRate,
                        spectralRolloff: frameBinInputs.spectralRolloff,
                        spectralSpread: frameBinInputs.spectralSpread,
                        spectralSkewness: frameBinInputs.spectralSkewness,
                        chromagram: frameBinInputs.chromagram,
                        binMagnitude,
                        binPhase: binPhaseMetric,
                        binFlux: binFluxMetric,
                        binPhaseDeviation: binPhaseDevMetric,
                        binAttackTime: binAttackTimeMetric,
                        binEnvelope: binEnvelopeMetric,
                        binEnvelopeState: binEnvelopeMetric,
                        binRMSEnergy: binRmsMetric,
                        globalRmsEnergy: frameBinInputs.globalRmsEnergy,
                        amplitude: frameBinInputs.amplitude,
                        time: currentTime,
                        deltaTime,
                        canvasWidthPx: canvasW,
                        canvasHeightPx: canvasH,
                        canvasWidthUnits: canvasUnitsW,
                        canvasHeightUnits: canvasUnitsH,
                        audioLengthSec,
                    }),
                    particle,
                })
            }

            // Rule output `particleCount` behaves as per-bin spawn probability.
            // 0 => never spawn, 1 => always spawn, 0..1 => probabilistic spawn.
            const spawnProb = Number.isFinite(particle.particleCount) ? clamp01(particle.particleCount) : 1
            if (spawnProb <= 0) return
            if (spawnProb < 1 && Math.random() > spawnProb) return

            this._pos[slotIndex * 3] = Number.isFinite(particle.x) ? particle.x : x
            this._pos[slotIndex * 3 + 1] = Number.isFinite(particle.y) ? particle.y : y
            this._pos[slotIndex * 3 + 2] = Number.isFinite(particle.z) ? particle.z : z
            const unscaledSize = Number.isFinite(particle.size) ? Math.max(0, particle.size) : Math.max(1.0, 0.5 + energy * 1.5)
            this._sz[slotIndex] = unscaledSize * sizeMultiplier
            let nextR = Number.isFinite(particle.red) ? clamp01(particle.red) : brightness
            let nextG = Number.isFinite(particle.green) ? clamp01(particle.green) : brightness
            let nextB = Number.isFinite(particle.blue) ? clamp01(particle.blue) : brightness
            if (this._compiledRules.usesParticleHsb) {
                const baseHsv = rgbToHsv(nextR, nextG, nextB)
                const hh = normalizeHue(particle.hue)
                const ss = Number.isFinite(particle.saturation) ? clamp01(particle.saturation) : baseHsv.s
                const vv = Number.isFinite(particle.brightness) ? clamp01(particle.brightness) : baseHsv.v
                const rgb = hsvToRgb(hh ?? baseHsv.h, ss, vv)
                nextR = rgb.r
                nextG = rgb.g
                nextB = rgb.b
            }
            const yellowRgb = applyYellowModifier(nextR, nextG, nextB, particle.yellow)
            nextR = yellowRgb.r
            nextG = yellowRgb.g
            nextB = yellowRgb.b
            this._col[slotIndex * 3] = nextR
            this._col[slotIndex * 3 + 1] = nextG
            this._col[slotIndex * 3 + 2] = nextB
            this._alpha[slotIndex] = Number.isFinite(particle.opacity) ? Math.max(0, Math.min(1, particle.opacity)) : Math.min(1, (0.08 + energy * 1.9) * alphaBoost)
            this._shape[slotIndex] = shapeToValue(particle.shapeType)
            this._pan[slotIndex] = Number.isFinite(binPan) ? Math.max(-1, Math.min(1, binPan)) : 0
            this._binRms[slotIndex] = Number.isFinite(binRmsMetric) ? clamp01(binRmsMetric) : 0
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

            if (emitLines) {
                this.applyLineRules({
                    params,
                    inputs: this._buildRuleInputs(ae, {
                        frequencyHz: hz,
                        normFreq: freqNorm,
                        pan: binPan,
                        spectralCentroid: frameBinInputs.spectralCentroid,
                        spectralFlux: frameBinInputs.spectralFlux,
                        spectralFlatness: frameBinInputs.spectralFlatness,
                        inharmonicity: frameBinInputs.inharmonicity,
                        peakAmplitude: frameBinInputs.peakAmplitude,
                        zeroCrossingRate: frameBinInputs.zeroCrossingRate,
                        spectralRolloff: frameBinInputs.spectralRolloff,
                        spectralSpread: frameBinInputs.spectralSpread,
                        spectralSkewness: frameBinInputs.spectralSkewness,
                        chromagram: frameBinInputs.chromagram,
                        binMagnitude,
                        binPhase: binPhaseMetric,
                        binFlux: binFluxMetric,
                        binPhaseDeviation: binPhaseDevMetric,
                        binAttackTime: binAttackTimeMetric,
                        binEnvelope: binEnvelopeMetric,
                        binEnvelopeState: binEnvelopeMetric,
                        binRMSEnergy: binRmsMetric,
                        globalRmsEnergy: frameBinInputs.globalRmsEnergy,
                        amplitude: frameBinInputs.amplitude,
                        time: currentTime,
                        deltaTime,
                        canvasWidthPx: canvasW,
                        canvasHeightPx: canvasH,
                        canvasWidthUnits: canvasUnitsW,
                        canvasHeightUnits: canvasUnitsH,
                        audioLengthSec,
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
            const yellowRgb = applyYellowModifier(nextR, nextG, nextB, line.yellow)
            nextR = yellowRgb.r
            nextG = yellowRgb.g
            nextB = yellowRgb.b

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

        let hzStart = freqNormMinHz
        for (let bucketIndex = 0; bucketIndex < logBucketCount; bucketIndex++) {
            const hzEnd = (bucketIndex === logBucketCount - 1)
                ? freqNormMaxHz
                : Math.min(freqNormMaxHz, hzStart * stepRatio)
            const hzCenter = Math.sqrt(Math.max(freqNormMinHz, hzStart) * Math.max(freqNormMinHz, hzEnd))

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
                const magNorm = (binMagArr && i < binMagArr.length)
                    ? normalizeByRange(binMagArr[i], binMagnitudeNormMin, binMagnitudeNormMax)
                    : (byte / 255)
                sumRawEnergy += magNorm
                if (needBinMagnitude) sumBinMagnitude += magNorm
                if (needBinPhase && binPhaseArr && i < binPhaseArr.length) {
                    sumBinPhase += normalizeByRange(binPhaseArr[i], -Math.PI, Math.PI)
                }
                if (needBinFlux && binFluxArr && i < binFluxArr.length) {
                    sumBinFlux += normalizeByRange(binFluxArr[i], binFluxNormMin, binFluxNormMax)
                }
                if (needBinPhaseDev && binPhaseDevArr && i < binPhaseDevArr.length) {
                    sumBinPhaseDev += normalizeByRange(binPhaseDevArr[i], binPhaseDeviationNormMin, binPhaseDeviationNormMax)
                }
                if (needBinAttackTime && binAttackTimeArr && i < binAttackTimeArr.length) {
                    sumBinAttackTime += normalizeByRange(binAttackTimeArr[i], binAttackTimeNormMin, binAttackTimeNormMax)
                }
                if (needBinEnvelope && binEnvArr && i < binEnvArr.length) {
                    sumBinEnvelope += normalizeByRange(binEnvArr[i] / 3, 0, 1)
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
            })
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
            })
            hzStart = hzEnd
            if (persistMode !== 1 && writeIndex >= activeParticleCapacity) break
        }

        if (persistMode === 1) {
            if (emitLightParticles) {
                this._insertIndex = writeIndex % activeParticleCapacity
                this._visibleCount = Math.min(activeParticleCapacity, this._visibleCount + wroteParticles)
                this._paintCount = this._visibleCount
            } else {
                this._insertIndex = 0
                this._paintCount = 0
                this._visibleCount = 0
            }
            this._geo.setDrawRange(0, this._visibleCount)

            this._lineVisibleCount = Math.min(activeParticleCapacity, lineWriteIndex)
            this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
            if (this._archive) this._archive.prune(params, currentTime)
        } else {
            this._insertIndex = 0
            this._paintCount = 0
            this._visibleCount = Math.min(activeParticleCapacity, writeIndex)
            this._geo.setDrawRange(0, this._visibleCount)
            this._lineVisibleCount = Math.min(activeParticleCapacity, lineWriteIndex)
            this._lineGeo.setDrawRange(0, this._lineVisibleCount * 2)
        }

        const livingRulesActive = params.ruleEngineEnabled !== false && this._compiledRules.livingRuleCount > 0 && this._visibleCount > 0
        if (livingRulesActive) {
            this.applyLivingRulesToRange({
                params,
                inputs: this._buildRuleInputs(ae, {
                    ...frameBinInputs,
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasUnitsW,
                    canvasHeightUnits: canvasUnitsH,
                    audioLengthSec,
                }),
            }, 0, this._visibleCount)
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.backgroundRuleCount > 0) {
            this.applyBackgroundRules({
                params,
                inputs: this._buildRuleInputs(ae, {
                    ...frameBinInputs,
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasUnitsW,
                    canvasHeightUnits: canvasUnitsH,
                    audioLengthSec,
                }),
            })
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.cameraRuleCount > 0) {
            this.applyCameraRules({
                params,
                inputs: this._buildRuleInputs(ae, {
                    ...frameBinInputs,
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasUnitsW,
                    canvasHeightUnits: canvasUnitsH,
                    audioLengthSec,
                }),
            }, params.cameraState || null)
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
        if (livingRulesActive && this._visibleCount > 0) {
            pointDirtyMin = Math.min(pointDirtyMin, 0)
            pointDirtyMax = Math.max(pointDirtyMax, this._visibleCount - 1)
        }

        if (Number.isFinite(pointDirtyMin) && Number.isFinite(pointDirtyMax) && pointDirtyMax >= pointDirtyMin) {
            this._markPointRangeDirty(pointDirtyMin, pointDirtyMax)
        }
        if (Number.isFinite(lineDirtyMin) && Number.isFinite(lineDirtyMax) && lineDirtyMax >= lineDirtyMin) {
            this._markLineRangeDirty(lineDirtyMin, lineDirtyMax)
        }
    }

    /** Set the Three.js blending mode on the material. */
    setBlendMode(blending) {
        this._mat.blending = blending
        this._mat.needsUpdate = true
        this._lineMat.blending = blending
        this._lineMat.needsUpdate = true
    }

    getVisibleCount() {
        return this._visibleCount
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
