/**
 * SEESOUND v1.0 — ParticleSystem.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Self-contained Three.js point-cloud renderer.
 *
 * One particle per FFT bin. Each particle is drawn at the exact frequency
 * of its FFT bin — no musical note snapping. Positions follow two layout modes:
 *
 *   Linear (1): X = playback time (canvas px = audio seconds)
 *               Y = log₂(16 Hz … 20 000 Hz), bass at bottom, treble at top
 *
 *   Stereo (10): X = stereo pan (−1 … +1 mapped to canvas width)
 *                Y = same log₂ frequency scale as Linear
 *
 * Usage
 * ─────
 *   import { ParticleSystem } from './engine/ParticleSystem.js'
 *   const ps = new ParticleSystem(scene, { maxParticles: 1024 })
 *   // each animation frame:
 *   ps.update(audioEngine, params, canvasW, canvasH)
 */

import * as THREE from 'three'
import { compileRules } from './rules/RuleCompiler.js'

// Phase checklist workflow anchor:
// Keep Three.js Points path intact while rule-engine features are layered in by phase.

// ── Frequency axis constants (shared by both layout modes) ────────────────────
const FREQ_MIN_HZ = 16
const FREQ_MAX_HZ = 20000
const LOG_FREQ_MIN = Math.log2(FREQ_MIN_HZ)
const LOG_FREQ_MAX = Math.log2(FREQ_MAX_HZ)

/* TODO_RESUME (Phase 5):
 * - Apply spawnedOnly rules only at writeParticle spawn time.
 * - Add optional allLivingFrame pass over active particles with throttle knobs.
 * - Keep defaultParticleSize spawn-only semantics for historical particles.
 */

/** Normalise any Hz value to [0, 1] on a log₂ axis (16 Hz → 0, 20 kHz → 1) */
function freqToLogNorm(hz) {
    return Math.min(1, Math.max(0,
        (Math.log2(Math.max(hz, FREQ_MIN_HZ)) - LOG_FREQ_MIN) /
        (LOG_FREQ_MAX - LOG_FREQ_MIN)
    ))
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

const POINT_VERTEX_SHADER = `
attribute float psize;
attribute vec3 color;
attribute float valpha;
attribute float shapeType;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;

void main() {
    vColor = color;
    vAlpha = valpha;
    vShapeType = shapeType;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, psize);
    gl_Position = projectionMatrix * mvPosition;
}
`

const POINT_FRAGMENT_SHADER = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;

void main() {
    if (vShapeType > 0.5) {
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
    }

    float alpha = clamp(vAlpha, 0.0, 1.0);
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(vColor, alpha);
}
`

// ─────────────────────────────────────────────────────────────────────────────

export class ParticleSystem {
    /**
     * @param {THREE.Scene} scene
     * @param {{ maxParticles?: number }} opts
     */
    constructor(scene, opts = {}) {
        this._N = Math.max(1, Math.floor(opts.maxParticles ?? 1024))
        this._visibleCount = 0
        this._paintCount = 0

        const geo = new THREE.BufferGeometry()
        this._geo = geo
        this._allocateBuffers(this._N)

        const mat = new THREE.ShaderMaterial({
            vertexShader: POINT_VERTEX_SHADER,
            fragmentShader: POINT_FRAGMENT_SHADER,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })

        this._mesh = new THREE.Points(geo, mat)
        this._mesh.frustumCulled = false
        scene.add(this._mesh)
        this._mat = mat
        this._lastBlending = mat.blending
        this._background = new THREE.Color(0, 0, 0)
        this._cameraOutput = { x: null, y: null, z: null, zoom: null }
        this._compiledRules = compileRules([])
        this._ruleCompileState = this._compiledRules
        this._frameCounter = 0
        this._lastUpdateT = performance.now()
        this._archiveChunks = []
        this._archivePointCount = 0
        this._archiveOffloadBatch = Math.max(256, Math.floor(this._N * 0.1))
    }

    _allocateBuffers(maxParticles) {
        this._N = Math.max(1, Math.floor(maxParticles))
        this._archiveOffloadBatch = Math.max(256, Math.floor(this._N * 0.1))
        this._pos = new Float32Array(this._N * 3)
        this._col = new Float32Array(this._N * 3)
        this._sz = new Float32Array(this._N)
        this._alpha = new Float32Array(this._N)
        this._shape = new Float32Array(this._N)

        this._aPos = new THREE.BufferAttribute(this._pos, 3)
        this._aCol = new THREE.BufferAttribute(this._col, 3)
        this._aSz = new THREE.BufferAttribute(this._sz, 1)
        this._aAlpha = new THREE.BufferAttribute(this._alpha, 1)
        this._aShape = new THREE.BufferAttribute(this._shape, 1)

        for (const a of [this._aPos, this._aCol, this._aSz, this._aAlpha, this._aShape]) a.setUsage(THREE.DynamicDrawUsage)

        this._geo.setAttribute('position', this._aPos)
        this._geo.setAttribute('color', this._aCol)
        this._geo.setAttribute('vcolor', this._aCol)
        this._geo.setAttribute('psize', this._aSz)
        this._geo.setAttribute('valpha', this._aAlpha)
        this._geo.setAttribute('shapeType', this._aShape)
        this.clear()
    }

    _pruneArchive(params, nowSec) {
        const maxArchivedPoints = Math.max(0, Math.floor(params?.archiveMaxPoints ?? 1500000))
        const maxAgeSec = Math.max(0, Number(params?.archiveMaxAgeSec ?? 0))

        while (this._archivePointCount > maxArchivedPoints && this._archiveChunks.length > 0) {
            const drop = this._archiveChunks.shift()
            this._archivePointCount -= drop.count
        }

        if (maxAgeSec > 0) {
            while (this._archiveChunks.length > 0) {
                const age = nowSec - this._archiveChunks[0].timestampSec
                if (age <= maxAgeSec) break
                const drop = this._archiveChunks.shift()
                this._archivePointCount -= drop.count
            }
        }

        if (this._archivePointCount < 0) this._archivePointCount = 0
    }

    _archiveAndCompactOldest(removeCount, activeCount, params, nowSec) {
        const n = Math.max(0, Math.min(removeCount, activeCount))
        if (n <= 0) return 0

        const chunk = {
            count: n,
            timestampSec: nowSec,
            pos: this._pos.slice(0, n * 3),
            col: this._col.slice(0, n * 3),
            sz: this._sz.slice(0, n),
            alpha: this._alpha.slice(0, n),
            shape: this._shape.slice(0, n),
        }
        this._archiveChunks.push(chunk)
        this._archivePointCount += n
        this._pruneArchive(params, nowSec)

        const remain = activeCount - n
        for (let i = 0; i < remain; i++) {
            const src = i + n
            this._pos[i * 3] = this._pos[src * 3]
            this._pos[i * 3 + 1] = this._pos[src * 3 + 1]
            this._pos[i * 3 + 2] = this._pos[src * 3 + 2]
            this._col[i * 3] = this._col[src * 3]
            this._col[i * 3 + 1] = this._col[src * 3 + 1]
            this._col[i * 3 + 2] = this._col[src * 3 + 2]
            this._sz[i] = this._sz[src]
            this._alpha[i] = this._alpha[src]
            this._shape[i] = this._shape[src]
        }

        return n
    }

    rehydrateArchivedToActive(request = {}) {
        if (this._archiveChunks.length === 0) return { rehydrated: 0, mode: request.mode ?? 'latest' }

        const mode = request.mode === 'oldest' ? 'oldest' : 'latest'
        const target = Math.max(0, Math.min(this._N, Math.floor(request.maxPoints ?? this._N)))
        if (target <= 0) return { rehydrated: 0, mode }

        let cursor = 0
        if (mode === 'oldest') {
            for (let c = 0; c < this._archiveChunks.length && cursor < target; c++) {
                const chunk = this._archiveChunks[c]
                const take = Math.min(chunk.count, target - cursor)
                for (let i = 0; i < take; i++) {
                    this._pos[(cursor + i) * 3] = chunk.pos[i * 3]
                    this._pos[(cursor + i) * 3 + 1] = chunk.pos[i * 3 + 1]
                    this._pos[(cursor + i) * 3 + 2] = chunk.pos[i * 3 + 2]
                    this._col[(cursor + i) * 3] = chunk.col[i * 3]
                    this._col[(cursor + i) * 3 + 1] = chunk.col[i * 3 + 1]
                    this._col[(cursor + i) * 3 + 2] = chunk.col[i * 3 + 2]
                    this._sz[cursor + i] = chunk.sz[i]
                    this._alpha[cursor + i] = chunk.alpha[i]
                    this._shape[cursor + i] = chunk.shape[i]
                }
                cursor += take
            }
        } else {
            for (let c = this._archiveChunks.length - 1; c >= 0 && cursor < target; c--) {
                const chunk = this._archiveChunks[c]
                const take = Math.min(chunk.count, target - cursor)
                const start = chunk.count - take
                for (let i = 0; i < take; i++) {
                    const src = start + i
                    this._pos[(target - cursor - take + i) * 3] = chunk.pos[src * 3]
                    this._pos[(target - cursor - take + i) * 3 + 1] = chunk.pos[src * 3 + 1]
                    this._pos[(target - cursor - take + i) * 3 + 2] = chunk.pos[src * 3 + 2]
                    this._col[(target - cursor - take + i) * 3] = chunk.col[src * 3]
                    this._col[(target - cursor - take + i) * 3 + 1] = chunk.col[src * 3 + 1]
                    this._col[(target - cursor - take + i) * 3 + 2] = chunk.col[src * 3 + 2]
                    this._sz[target - cursor - take + i] = chunk.sz[src]
                    this._alpha[target - cursor - take + i] = chunk.alpha[src]
                    this._shape[target - cursor - take + i] = chunk.shape[src]
                }
                cursor += take
            }
        }

        this._paintCount = cursor
        this._visibleCount = cursor
        this._geo.setDrawRange(0, cursor)
        this._aPos.needsUpdate = true
        this._aCol.needsUpdate = true
        this._aSz.needsUpdate = true
        this._aAlpha.needsUpdate = true
        this._aShape.needsUpdate = true

        return { rehydrated: cursor, mode }
    }

    getArchiveStats() {
        return {
            activePoints: this._visibleCount,
            archivedPoints: this._archivePointCount,
            archivedChunks: this._archiveChunks.length,
        }
    }

    setMaxParticles(nextMax) {
        const wanted = Math.max(1, Math.floor(nextMax || 1))
        if (wanted === this._N) return
        this._allocateBuffers(wanted)
    }

    clear() {
        this._paintCount = 0
        this._visibleCount = 0
        this._archiveChunks = []
        this._archivePointCount = 0
        this._geo.setDrawRange(0, 0)
        this._aPos.needsUpdate = true
        this._aCol.needsUpdate = true
        this._aSz.needsUpdate = true
        this._aAlpha.needsUpdate = true
        this._aShape.needsUpdate = true
    }

    clearCanvas() {
        this.clear()
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
        return {
            amplitude: ae.amplitude ?? 0,
            bass: ae.bass ?? 0,
            mid: ae.mid ?? 0,
            high: ae.high ?? 0,
            peakFreq: ae.peakFreq ?? 0,
            pan: ae.pan ?? 0,
            time: Number(extra.time) || 0,
            deltaTime: Number(extra.deltaTime) || 0,
            spectralCentroid: ae.spectralCentroid ?? 0,
            spectralFlux: ae.spectralFlux ?? 0,
            spectralFlatness: ae.spectralFlatness ?? 0,
            inharmonicity: ae.inharmonicity ?? 0,
            canvasWidthPx: Number(extra.canvasWidthPx) || 0,
            canvasHeightPx: Number(extra.canvasHeightPx) || 0,
            canvasWidthUnits: Number(extra.canvasWidthUnits) || 0,
            canvasHeightUnits: Number(extra.canvasHeightUnits) || 0,
            canvasBoundaryLeft: Number(extra.canvasBoundaryLeft) || 0,
            canvasBoundaryRight: Number(extra.canvasBoundaryRight) || 0,
            canvasBoundaryTop: Number(extra.canvasBoundaryTop) || 0,
            canvasBoundaryBottom: Number(extra.canvasBoundaryBottom) || 0,
            audioLengthSec: Number(extra.audioLengthSec) || 0,
            binEnergy: Number(extra.binEnergy) || 0,
            frequencyHz: Number(extra.frequencyHz) || 0,
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

        let touched = 0
        for (let i = start; i < end; i += stride) {
            if (touched >= maxTouches) break
            const particle = {
                x: this._pos[i * 3],
                y: this._pos[i * 3 + 1],
                z: this._pos[i * 3 + 2],
                size: this._sz[i],
                red: this._col[i * 3],
                green: this._col[i * 3 + 1],
                blue: this._col[i * 3 + 2],
                opacity: this._alpha[i],
                // Legacy aliases for older rule payloads.
                r: this._col[i * 3],
                g: this._col[i * 3 + 1],
                b: this._col[i * 3 + 2],
                a: this._alpha[i],
                shapeType: this._shape[i] > 0.5 ? 'circle' : 'square',
            }

            this._compiledRules.applyLivingRules(ctx, particle)

            this._pos[i * 3] = Number.isFinite(particle.x) ? particle.x : this._pos[i * 3]
            this._pos[i * 3 + 1] = Number.isFinite(particle.y) ? particle.y : this._pos[i * 3 + 1]
            this._pos[i * 3 + 2] = Number.isFinite(particle.z) ? particle.z : this._pos[i * 3 + 2]
            this._sz[i] = Number.isFinite(particle.size) ? Math.max(0, particle.size) : this._sz[i]
            const pr = Number.isFinite(particle.red) ? particle.red : particle.r
            const pg = Number.isFinite(particle.green) ? particle.green : particle.g
            const pb = Number.isFinite(particle.blue) ? particle.blue : particle.b
            const pa = Number.isFinite(particle.opacity) ? particle.opacity : particle.a
            let nextR = Number.isFinite(pr) ? clamp01(pr) : this._col[i * 3]
            let nextG = Number.isFinite(pg) ? clamp01(pg) : this._col[i * 3 + 1]
            let nextB = Number.isFinite(pb) ? clamp01(pb) : this._col[i * 3 + 2]
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
            this._col[i * 3] = nextR
            this._col[i * 3 + 1] = nextG
            this._col[i * 3 + 2] = nextB
            this._alpha[i] = Number.isFinite(pa) ? Math.max(0, Math.min(1, pa)) : this._alpha[i]
            this._shape[i] = shapeToValue(particle.shapeType)
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
            backgroundRed: bg.r,
            backgroundGreen: bg.g,
            backgroundBlue: bg.b,
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

    applyCameraRules(ctx, currentCamera) {
        const state = {
            x: currentCamera?.x ?? 0,
            y: currentCamera?.y ?? 0,
            z: currentCamera?.z ?? 0,
            zoom: currentCamera?.zoom ?? 1,
        }
        this._compiledRules.applyCameraRules(ctx, state)
        this._cameraOutput = {
            x: Number.isFinite(state.x) ? state.x : null,
            y: Number.isFinite(state.y) ? state.y : null,
            z: Number.isFinite(state.z) ? state.z : null,
            zoom: Number.isFinite(state.zoom) ? state.zoom : null,
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
        const thresholdDb = params.amplitudeThreshold ?? -48
        const thresholdByte = Math.max(0, Math.min(255, Math.round(Math.pow(10, thresholdDb / 20) * 255)))
        const baseSize = params.defaultParticleSize ?? 6
        const freqDepth = (params.freqDepthEffect ?? 100) / 100
        const zDepth = (params.zDepth ?? 0) / 100
        const spreadGamma = Math.max(0.2, params.frequencySpread ?? 1)
        const lowCut = Math.max(FREQ_MIN_HZ, Math.min(FREQ_MAX_HZ, Number(params.lowFrequencyCutoff ?? FREQ_MIN_HZ)))
        const highCutRaw = Math.max(FREQ_MIN_HZ, Math.min(FREQ_MAX_HZ, Number(params.highFrequencyCutoff ?? FREQ_MAX_HZ)))
        const highCut = Math.max(lowCut, highCutRaw)
        const renderPctRaw = Number(params.particleRenderPercent)
        const renderPct = Number.isFinite(renderPctRaw) ? Math.max(1, Math.min(100, Math.floor(renderPctRaw))) : 100
        const brightFloor = Math.max(0, Math.min(1, params.brightnessFloor ?? 0.2))
        const ampToBright = Math.max(0, params.amplitudeToBrightness ?? 1.25)
        const blendStr = params.blendMode ?? 'screen'
        const hasStereoBins = !!(ae.analyserL && ae.analyserR && ae.getBinPan)
        const shouldRenderBin = renderPct >= 100
            ? (() => true)
            // Evenly distributed bin thinning: e.g., 70% keeps about 7 of every 10 bins.
            : ((binIndex) => (((binIndex * renderPct) % 100) < renderPct))

        // Adjust Three.js blending mode
        const blendMap = {
            'screen': THREE.AdditiveBlending,
            'lighter': THREE.AdditiveBlending,
            'source-over': THREE.NormalBlending,
            // Multiply on a black clear color can produce a fully black frame.
            'multiply': THREE.NormalBlending,
        }
        const nextBlending = blendMap[blendStr] ?? THREE.AdditiveBlending
        if (nextBlending !== this._lastBlending) {
            this._mat.blending = nextBlending
            this._mat.needsUpdate = true
            this._lastBlending = nextBlending
        }

        const hw = canvasW / 2
        const hh = canvasH / 2
        const boundaryLeft = -hw
        const boundaryRight = hw
        const boundaryTop = hh
        const boundaryBottom = -hh
        const currentTime = ae.audioEl?.currentTime ?? 0
        const audioLengthSec = ae.audioEl?.duration ?? 0
        const globalPan = ae.pan ?? 0
        let peakByte = 0
        for (let i = 0; i < N; i++) if (freqData[i] > peakByte) peakByte = freqData[i]
        const adaptiveCap = Math.max(1, Math.round(peakByte * 0.55))
        const effectiveThresholdByte = Math.min(thresholdByte, adaptiveCap)
        let writeIndex = persistMode === 1 ? this._paintCount : 0

        const writeParticle = (i, byte, energy, alphaBoost = 1) => {
            if (writeIndex >= this._N && persistMode === 1) {
                const dropCount = Math.max(1, Math.floor(params.archiveOffloadBatch ?? this._archiveOffloadBatch))
                const removed = this._archiveAndCompactOldest(dropCount, writeIndex, params, currentTime)
                writeIndex = Math.max(0, writeIndex - removed)
            }
            if (writeIndex >= this._N) return
            const hz = binToHz(i)
            const rawNorm = freqToLogNorm(hz)
            const freqNorm = Math.pow(rawNorm, spreadGamma)
            const y = (freqNorm * 2 - 1) * hh

            const x = 0

            const z = freqDepth > 0 ? -freqNorm * zDepth * 50 : 0
            const freqSizeMult = 1 + (1 - freqNorm) * freqDepth * 2
            const brightness = Math.min(1, brightFloor + energy * ampToBright)

            const particle = {
                x,
                y,
                z,
                size: Math.max(2.0, baseSize * freqSizeMult * (0.35 + energy * 1.35)),
                red: brightness,
                green: brightness,
                blue: brightness,
                opacity: Math.min(1, (0.08 + energy * 1.9) * alphaBoost),
                // Legacy aliases for older rule payloads.
                r: brightness,
                g: brightness,
                b: brightness,
                a: Math.min(1, (0.08 + energy * 1.9) * alphaBoost),
                particleCount: 1,
                shapeType: 'square',
            }

            if (params.ruleEngineEnabled !== false && this._compiledRules.spawnRuleCount > 0) {
                this.applySpawnRulesToParticle({
                    inputs: this._buildRuleInputs(ae, {
                        binEnergy: energy,
                        frequencyHz: hz,
                        normFreq: freqNorm,
                        time: currentTime,
                        deltaTime,
                        canvasWidthPx: canvasW,
                        canvasHeightPx: canvasH,
                        canvasWidthUnits: canvasW,
                        canvasHeightUnits: canvasH,
                        canvasBoundaryLeft: boundaryLeft,
                        canvasBoundaryRight: boundaryRight,
                        canvasBoundaryTop: boundaryTop,
                        canvasBoundaryBottom: boundaryBottom,
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

            this._pos[writeIndex * 3] = Number.isFinite(particle.x) ? particle.x : x
            this._pos[writeIndex * 3 + 1] = Number.isFinite(particle.y) ? particle.y : y
            this._pos[writeIndex * 3 + 2] = Number.isFinite(particle.z) ? particle.z : z
            this._sz[writeIndex] = Number.isFinite(particle.size) ? Math.max(0, particle.size) : Math.max(2.0, baseSize)
            const pr = Number.isFinite(particle.red) ? particle.red : particle.r
            const pg = Number.isFinite(particle.green) ? particle.green : particle.g
            const pb = Number.isFinite(particle.blue) ? particle.blue : particle.b
            const pa = Number.isFinite(particle.opacity) ? particle.opacity : particle.a
            let nextR = Number.isFinite(pr) ? clamp01(pr) : brightness
            let nextG = Number.isFinite(pg) ? clamp01(pg) : brightness
            let nextB = Number.isFinite(pb) ? clamp01(pb) : brightness
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
            this._col[writeIndex * 3] = nextR
            this._col[writeIndex * 3 + 1] = nextG
            this._col[writeIndex * 3 + 2] = nextB
            this._alpha[writeIndex] = Number.isFinite(pa) ? Math.max(0, Math.min(1, pa)) : Math.min(1, (0.08 + energy * 1.9) * alphaBoost)
            this._shape[writeIndex] = shapeToValue(particle.shapeType)
            writeIndex++
        }

        for (let i = 0; i < N; i++) {
            const hz = binToHz(i)
            if (hz < lowCut || hz > highCut) continue
            if (!shouldRenderBin(i)) continue

            const byte = freqData[i]
            const raw = byte / 255
            const energy = raw * gainMult

            if (byte <= effectiveThresholdByte) {
                continue
            }
            writeParticle(i, byte, energy)
            if (writeIndex >= this._N) break
        }

        // If gating produced nothing but audio exists, draw strongest bins so output
        // never appears fully blank while playing.
        if (writeIndex === 0 && peakByte > 0) {
            const indices = []
            for (let i = 0; i < N; i++) {
                const hz = binToHz(i)
                if (hz >= lowCut && hz <= highCut && freqData[i] > 0 && shouldRenderBin(i)) indices.push(i)
            }
            indices.sort((a, b) => freqData[b] - freqData[a])
            const fallbackCount = Math.min(96, indices.length)
            for (let k = 0; k < fallbackCount && writeIndex < this._N; k++) {
                const i = indices[k]
                const byte = freqData[i]
                const raw = byte / 255
                const energy = Math.max(0.08, raw * gainMult)
                writeParticle(i, byte, energy, 0.85)
            }
        }

        if (persistMode === 1) {
            this._paintCount = writeIndex
            this._visibleCount = this._paintCount
            this._geo.setDrawRange(0, this._paintCount)
            this._pruneArchive(params, currentTime)
        } else {
            this._paintCount = 0
            this._visibleCount = writeIndex
            this._geo.setDrawRange(0, writeIndex)
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.livingRuleCount > 0 && this._visibleCount > 0) {
            this.applyLivingRulesToRange({
                params,
                inputs: this._buildRuleInputs(ae, {
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasW,
                    canvasHeightUnits: canvasH,
                    canvasBoundaryLeft: boundaryLeft,
                    canvasBoundaryRight: boundaryRight,
                    canvasBoundaryTop: boundaryTop,
                    canvasBoundaryBottom: boundaryBottom,
                    audioLengthSec,
                }),
            }, 0, this._visibleCount)
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.backgroundRuleCount > 0) {
            this.applyBackgroundRules({
                params,
                inputs: this._buildRuleInputs(ae, {
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasW,
                    canvasHeightUnits: canvasH,
                    canvasBoundaryLeft: boundaryLeft,
                    canvasBoundaryRight: boundaryRight,
                    canvasBoundaryTop: boundaryTop,
                    canvasBoundaryBottom: boundaryBottom,
                    audioLengthSec,
                }),
            })
        }

        if (params.ruleEngineEnabled !== false && this._compiledRules.cameraRuleCount > 0) {
            this.applyCameraRules({
                params,
                inputs: this._buildRuleInputs(ae, {
                    time: currentTime,
                    deltaTime,
                    canvasWidthPx: canvasW,
                    canvasHeightPx: canvasH,
                    canvasWidthUnits: canvasW,
                    canvasHeightUnits: canvasH,
                    canvasBoundaryLeft: boundaryLeft,
                    canvasBoundaryRight: boundaryRight,
                    canvasBoundaryTop: boundaryTop,
                    canvasBoundaryBottom: boundaryBottom,
                    audioLengthSec,
                }),
            }, params.cameraState || null)
        } else {
            this._cameraOutput = { x: null, y: null, z: null, zoom: null }
        }
        this._aPos.needsUpdate = true
        this._aCol.needsUpdate = true
        this._aSz.needsUpdate = true
        this._aAlpha.needsUpdate = true
        this._aShape.needsUpdate = true
    }

    /** Set the Three.js blending mode on the material. */
    setBlendMode(blending) {
        this._mat.blending = blending
        this._mat.needsUpdate = true
    }

    getVisibleCount() {
        return this._visibleCount
    }

    /** Rescale all particle positions proportionally when the canvas is resized. */
    rescale(scaleX, scaleY) {
        for (let i = 0; i < this._N; i++) {
            this._pos[i * 3] *= scaleX
            this._pos[i * 3 + 1] *= scaleY
        }
        this._aPos.needsUpdate = true
    }

    dispose() {
        this._mesh.geometry.dispose()
        this._mat.dispose()
    }
}
