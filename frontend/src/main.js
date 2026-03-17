/**
 * SEESOUND v1.0 — main.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Thin orchestrator. Wires together:
 *   AudioEngine  (analyser + stereo splitter)
 *   ParticleSystem (Three.js point cloud)
 *   BackendBridge  (WebSocket to Python backend)
 *   AudioPlayer    (transport controls UI)
 *   CanvasResizer  (drag-to-resize handles)
 *   ControlPanel   (parameter matrix UI)
 */

// ── CSS ──────────────────────────────────────────────────────────────────────
import './styles/main.css'
import './styles/player.css'
import './styles/settings.css'
import './styles/canvas.css'

// ── Modules ───────────────────────────────────────────────────────────────────
import * as THREE from 'three'
import { params, subscribe, RULE_SCHEMA_VERSION, RULE_DEBUG_FLAGS } from './engine/ParamStore.js'
import { initControlPanel } from './engine/ControlPanel.js'
import { ParticleSystem } from './engine/ParticleSystem.js'
import { initAudioPlayer } from './components/AudioPlayer.js'
import { initCanvasResizer } from './components/CanvasResizer.js'
import {
    computeSpectralCentroid,
    computeSpectralFlux,
    computeSpectralFlatness,
    computeInharmonicity,
    smoothFeature,
    normalizeCentroidHzToUnit,
} from './engine/audio/AudioFeatures.js'

// Phase checklist workflow anchor:
// Implement one task cluster at a time and verify before advancing to the next phase item.

/* TODO_RESUME (Phase 4/8):
 * - Replace bootstrap compile status with RuleCompiler state.
 * - Surface compile timing/error mapping into UI status badge.
 * - Trigger deterministic recompile on ruleBlocks change.
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  THREE.JS RENDERER + ORTHOGRAPHIC CAMERA
// ─────────────────────────────────────────────────────────────────────────────

const canvas = document.getElementById('three-canvas')
const wrapper = document.getElementById('canvas-wrapper')
const col = document.getElementById('canvas-col')

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 1)
renderer.autoClear = true

const scene = new THREE.Scene()
// Orthographic camera: left/right/top/bottom match CSS pixel dimensions
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000)
camera.position.set(0, 0, 10)
camera.up.set(0, 1, 0)
camera.lookAt(0, 0, 0)

// Mouse camera controls:
//  - Left drag: orbit around world origin
//  - Right drag: rotate view around camera center (in-place look)
//  - Wheel: orthographic zoom
const orbitState = {
    radius: 10,
    azimuth: 0,
    elevation: 0,
}

function syncOrbitFromCamera() {
    const x = camera.position.x
    const y = camera.position.y
    const z = camera.position.z
    const r = Math.sqrt(x * x + y * y + z * z) || 1
    orbitState.radius = r
    orbitState.azimuth = Math.atan2(x, z)
    orbitState.elevation = Math.asin(Math.max(-1, Math.min(1, y / r)))
}

function applyOrbitToCamera() {
    const ce = Math.cos(orbitState.elevation)
    camera.position.set(
        orbitState.radius * ce * Math.sin(orbitState.azimuth),
        orbitState.radius * Math.sin(orbitState.elevation),
        orbitState.radius * ce * Math.cos(orbitState.azimuth),
    )
    camera.lookAt(0, 0, 0)
}

function resetCameraPose() {
    camera.position.set(0, 0, 10)
    camera.up.set(0, 1, 0)
    camera.rotation.set(0, 0, 0)
    camera.zoom = 1
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
    syncOrbitFromCamera()
}

syncOrbitFromCamera()

const pointerState = {
    active: false,
    button: -1,
    lastX: 0,
    lastY: 0,
}

canvas.addEventListener('contextmenu', (e) => e.preventDefault())

canvas.addEventListener('mousedown', (e) => {
    if (e.button !== 0 && e.button !== 2) return
    pointerState.active = true
    pointerState.button = e.button
    pointerState.lastX = e.clientX
    pointerState.lastY = e.clientY
    e.preventDefault()
})

window.addEventListener('mouseup', () => {
    pointerState.active = false
    pointerState.button = -1
})

window.addEventListener('mousemove', (e) => {
    if (!pointerState.active) return
    const dx = e.clientX - pointerState.lastX
    const dy = e.clientY - pointerState.lastY
    pointerState.lastX = e.clientX
    pointerState.lastY = e.clientY

    if (pointerState.button === 0) {
        orbitState.azimuth -= dx * 0.006
        orbitState.elevation = Math.max(
            -Math.PI * 0.49,
            Math.min(Math.PI * 0.49, orbitState.elevation - dy * 0.005),
        )
        applyOrbitToCamera()
    } else if (pointerState.button === 2) {
        const yaw = -dx * 0.004
        const pitch = -dy * 0.004
        camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yaw)
        camera.rotateX(pitch)
    }
})

canvas.addEventListener('wheel', (e) => {
    e.preventDefault()
    const factor = e.deltaY > 0 ? (1 / 1.1) : 1.1
    camera.zoom = Math.max(0.2, Math.min(12, camera.zoom * factor))
    camera.updateProjectionMatrix()
}, { passive: false })

function resizeRenderer(w, h) {
    camera.left = -w / 2
    camera.right = w / 2
    camera.top = h / 2
    camera.bottom = -h / 2
    camera.updateProjectionMatrix()
    renderer.setSize(w, h, false)   // false → do NOT set canvas style size
}

// Initial size
const initW = col.clientWidth || window.innerWidth
const initH = col.clientHeight || window.innerHeight
resizeRenderer(initW, initH)

// ─────────────────────────────────────────────────────────────────────────────
// § 2  PARTICLE SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

const ps = new ParticleSystem(scene, { maxParticles: params.maxParticles ?? 262144 })
const _initialCompileState = ps.onRulesChanged(params.ruleBlocks ?? [])
window.dispatchEvent(new CustomEvent('seesound:rule-compile-state', { detail: _initialCompileState }))

// ─────────────────────────────────────────────────────────────────────────────
// § 3  AUDIO ENGINE
// ─────────────────────────────────────────────────────────────────────────────

class AudioEngine {
    constructor() {
        this.ctx = null; this.analyser = null; this.source = null
        this.streamSource = null; this.streamNode = null
        this.audioEl = null; this.splitter = null
        this.analyserL = null; this.analyserR = null

        this.FFT_SIZE = 2048
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._freqL = new Uint8Array(128)
        this._freqR = new Uint8Array(128)
        this._prevFrequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.featureSmoothingAlpha = 0.2

        this.bass = 0; this.mid = 0; this.high = 0
        this.amplitude = 0; this.peakFreq = 0; this.peakByte = 0; this.pan = 0
        this.spectralCentroid = 0
        this.spectralFlux = 0
        this.spectralFlatness = 0
        this.inharmonicity = 0
        this.ctxState = 'none'
    }

    init(el) {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)()
            this.analyser = this.ctx.createAnalyser()
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.connect(this.ctx.destination)
        }
        if (this.audioEl !== el || (!this.source && !this.streamSource)) {
            this.source?.disconnect()
            this.streamSource?.disconnect()
            this.splitter?.disconnect()
            this.analyserL?.disconnect()
            this.analyserR?.disconnect()
            this.audioEl = el
            this.source = null
            this.streamSource = null
            this.streamNode = null

            try {
                this.source = this.ctx.createMediaElementSource(el)
                this.source.connect(this.analyser)
            } catch {
                // Fallback path for environments where MediaElementSource creation
                // fails (e.g. stale node bindings after hot reload).
                const stream = (el.captureStream?.() || el.mozCaptureStream?.())
                if (stream) {
                    this.streamNode = stream
                    this.streamSource = this.ctx.createMediaStreamSource(stream)
                    this.streamSource.connect(this.analyser)
                }
            }
            // Stereo splitter for per-channel pan data
            try {
                this.splitter = this.ctx.createChannelSplitter(2)
                this.analyserL = this.ctx.createAnalyser()
                this.analyserR = this.ctx.createAnalyser()
                for (const a of [this.analyserL, this.analyserR])
                    a.fftSize = 256
                const srcNode = this.source || this.streamSource
                srcNode?.connect(this.splitter)
                this.splitter.connect(this.analyserL, 0)
                this.splitter.connect(this.analyserR, 1)
            } catch { /* mono */ }
        }
        if (this.ctx.state === 'suspended') this.ctx.resume()
        this.ctxState = this.ctx.state
    }

    update() {
        if (!this.analyser) return
        if (this.ctx?.state === 'suspended' && this.audioEl && !this.audioEl.paused) {
            this.ctx.resume()
        }
        this.ctxState = this.ctx?.state ?? 'none'
        this.analyser.getByteFrequencyData(this.frequencyData)
        this.analyser.getByteTimeDomainData(this.timeDomainData)

        const bc = this.frequencyData.length
        const sr = this.ctx?.sampleRate ?? 44100
        const nyq = sr / 2
        const hz = (b) => (b / bc) * nyq

        let bS = 0, bC = 0, mS = 0, mC = 0, hS = 0, hC = 0, peak = 0, pb = 0
        for (let i = 0; i < bc; i++) {
            const v = this.frequencyData[i], f = hz(i)
            if (f < 250) { bS += v; bC++ } else if (f < 4000) { mS += v; mC++ } else { hS += v; hC++ }
            if (v > peak) { peak = v; pb = i }
        }
        this.bass = bC ? bS / bC / 255 : 0
        this.mid = mC ? mS / mC / 255 : 0
        this.high = hC ? hS / hC / 255 : 0
        this.peakFreq = Math.round(hz(pb))
        this.peakByte = peak

        const centroidHz = computeSpectralCentroid(this.frequencyData, sr)
        const centroidNorm = normalizeCentroidHzToUnit(centroidHz, sr)
        const fluxNorm = computeSpectralFlux(this.frequencyData, this._prevFrequencyData)
        const flatnessNorm = computeSpectralFlatness(this.frequencyData)
        const inharmonicityNorm = computeInharmonicity(this.frequencyData, sr)

        this.spectralCentroid = smoothFeature(this.spectralCentroid, centroidNorm, this.featureSmoothingAlpha)
        this.spectralFlux = smoothFeature(this.spectralFlux, fluxNorm, this.featureSmoothingAlpha)
        this.spectralFlatness = smoothFeature(this.spectralFlatness, flatnessNorm, this.featureSmoothingAlpha)
        this.inharmonicity = smoothFeature(this.inharmonicity, inharmonicityNorm, this.featureSmoothingAlpha)

        this._prevFrequencyData.set(this.frequencyData)

        let sq = 0; for (const b of this.timeDomainData) sq += ((b - 128) / 128) ** 2
        this.amplitude = Math.sqrt(sq / this.timeDomainData.length)

        if (this.analyserL && this.analyserR) {
            this.analyserL.getByteFrequencyData(this._freqL)
            this.analyserR.getByteFrequencyData(this._freqR)
            let sL = 0, sR = 0
            for (let j = 0; j < this._freqL.length; j++) { sL += this._freqL[j]; sR += this._freqR[j] }
            this.pan = (sR - sL) / (sL + sR + 1)
        }
    }

    /** Per-bin stereo pan estimate from L/R FFT data */
    getBinPan(bin) {
        if (!this.analyserL || !this.analyserR) return this.pan
        const i = Math.min(bin, this._freqL.length - 1)
        const l = this._freqL[i], r = this._freqR[i]
        return (r - l) / (l + r + 1)
    }
}

const ae = new AudioEngine()

// ─────────────────────────────────────────────────────────────────────────────
// § 4  WEBSOCKET BRIDGE
// ─────────────────────────────────────────────────────────────────────────────

const statusDot = document.getElementById('status-dot')
const statusText = document.getElementById('status-text')

function setStatus(state, text) {
    if (statusDot) statusDot.className = state
    if (statusText) statusText.textContent = text
}

function connectWS() {
    const ws = new WebSocket(`ws://${location.hostname}:8000/ws`)
    ws.onopen = () => setStatus('open', 'Backend connected')
    ws.onclose = () => { setStatus('closed', 'Backend offline'); setTimeout(connectWS, 3000) }
    ws.onerror = () => setStatus('closed', 'WS error')
    ws.onmessage = () => { }  // future: handle server-pushed rules
    subscribe(snapshot => {
        if (ws.readyState === WebSocket.OPEN)
            ws.send(JSON.stringify({ type: 'params_update', payload: snapshot }))
    })
}
connectWS()

// ─────────────────────────────────────────────────────────────────────────────
// § 5  HUD
// ─────────────────────────────────────────────────────────────────────────────

const cameraHud = document.createElement('div')
cameraHud.id = 'camera-hud'
cameraHud.style.position = 'fixed'
cameraHud.style.left = '8px'
cameraHud.style.bottom = '8px'
cameraHud.style.zIndex = '220'
cameraHud.style.display = 'flex'
cameraHud.style.alignItems = 'center'
cameraHud.style.gap = '6px'

const resetCameraBtn = document.createElement('button')
resetCameraBtn.type = 'button'
resetCameraBtn.title = 'Reset camera'
resetCameraBtn.textContent = '↺'
resetCameraBtn.style.width = '22px'
resetCameraBtn.style.height = '22px'
resetCameraBtn.style.border = '1px solid var(--color-border, #444)'
resetCameraBtn.style.borderRadius = '6px'
resetCameraBtn.style.background = 'rgba(0,0,0,0.55)'
resetCameraBtn.style.color = 'var(--color-text-muted, #bbb)'
resetCameraBtn.style.cursor = 'pointer'
resetCameraBtn.addEventListener('click', resetCameraPose)

const clearCanvasBtn = document.createElement('button')
clearCanvasBtn.type = 'button'
clearCanvasBtn.title = 'Clear canvas'
clearCanvasBtn.textContent = 'Clean'
clearCanvasBtn.style.height = '22px'
clearCanvasBtn.style.padding = '0 8px'
clearCanvasBtn.style.border = '1px solid var(--color-border, #444)'
clearCanvasBtn.style.borderRadius = '6px'
clearCanvasBtn.style.background = 'rgba(0,0,0,0.55)'
clearCanvasBtn.style.color = 'var(--color-text-muted, #bbb)'
clearCanvasBtn.style.cursor = 'pointer'
clearCanvasBtn.addEventListener('click', () => ps.clear())

const cameraReadout = document.createElement('div')
cameraReadout.id = 'camera-readout'
cameraReadout.style.fontFamily = 'var(--font-mono, monospace)'
cameraReadout.style.fontSize = '10px'
cameraReadout.style.color = 'var(--color-text-muted, #bbb)'
cameraReadout.style.background = 'rgba(0,0,0,0.35)'
cameraReadout.style.padding = '4px 6px'
cameraReadout.style.borderRadius = '4px'
cameraReadout.style.pointerEvents = 'none'
cameraReadout.textContent = 'cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 ctx none cap 262144'

cameraHud.append(resetCameraBtn, clearCanvasBtn, cameraReadout)
document.body.appendChild(cameraHud)

// ─────────────────────────────────────────────────────────────────────────────
// § 6  ANIMATION LOOP
// ─────────────────────────────────────────────────────────────────────────────

let isPlaying = false
let frameN = 0

function animate() {
    requestAnimationFrame(animate)
    frameN++

    ae.update()
    const isActuallyPlaying = !!(ae.audioEl && !ae.audioEl.paused && !ae.audioEl.ended)
    if (isActuallyPlaying !== isPlaying) isPlaying = isActuallyPlaying
    if (isActuallyPlaying && !ae.analyser && ae.audioEl) ae.init(ae.audioEl)
    if (isActuallyPlaying) {
        const w = renderer.domElement.width / window.devicePixelRatio
        const h = renderer.domElement.height / window.devicePixelRatio
        ps.update(ae, params, w, h)
    }

    renderer.render(scene, camera)

    // HUD update ~10 fps
    if (frameN % 6 === 0) {
        const rx = (camera.rotation.x * 180 / Math.PI).toFixed(2)
        const ry = (camera.rotation.y * 180 / Math.PI).toFixed(2)
        const rz = (camera.rotation.z * 180 / Math.PI).toFixed(2)
        const px = camera.position.x.toFixed(2)
        const py = camera.position.y.toFixed(2)
        const pz = camera.position.z.toFixed(2)
        cameraReadout.textContent = `cam p(${px},${py},${pz}) r(${rx},${ry},${rz}) pts ${ps.getVisibleCount()} fft ${ae.peakByte} amp ${ae.amplitude.toFixed(3)} sc ${ae.spectralCentroid.toFixed(3)} sf ${ae.spectralFlux.toFixed(3)} sfl ${ae.spectralFlatness.toFixed(3)} inh ${ae.inharmonicity.toFixed(3)} ctx ${ae.ctxState} cap ${params.maxParticles}`
    }
}
animate()

// ─────────────────────────────────────────────────────────────────────────────
// § 7  MODULE WIRING
// ─────────────────────────────────────────────────────────────────────────────

// ── 7a  Audio Player (bottom overlay) ────────────────────────────────────────
{
    const playerEl = document.getElementById('audio-player')
    const { audioEl } = initAudioPlayer(playerEl)
    ae.audioEl = audioEl   // give AudioEngine ref (used for currentTime/duration)

    // Keep render state aligned with true media playback state.
    audioEl.addEventListener('play', async () => {
        isPlaying = true
        ae.init(audioEl)
        if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    })
    audioEl.addEventListener('pause', () => { isPlaying = false })
    audioEl.addEventListener('ended', () => { isPlaying = false })

    playerEl.addEventListener('player:playpause', async () => {
        ae.init(audioEl)
        if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    })
    playerEl.addEventListener('player:play', () => { isPlaying = true })
    playerEl.addEventListener('player:pause', () => { isPlaying = false })
    playerEl.addEventListener('player:stop', () => { isPlaying = false })

    // Linear mode: auto-size canvas width to audio duration (1px = 1s)
    playerEl.addEventListener('player:metadata', (e) => {
        if (params.layoutMode === 1 && e.detail.duration > 0 && _resizer) applyLinearAutoSize()
    })
}

// ── 7b  Canvas Resizer ────────────────────────────────────────────────────────
let _resizer = null
_resizer = initCanvasResizer({
    wrapper, column: col,
    onResize(w, h, sx, sy) {
        resizeRenderer(w, h)
        ps.rescale(sx, sy)
        emitCanvasSize(w, h)
    },
})

function emitCanvasSize(w, h) {
    window.dispatchEvent(new CustomEvent('seesound:canvas-size', {
        detail: {
            w,
            h,
            autoWidth: (Number(params.canvasWidth) || 0) <= 0,
            autoHeight: (Number(params.canvasHeight) || 0) <= 0,
        },
    }))
}

function getSafeCanvasSize() {
    const s = _resizer?.getSize?.() || {}
    const w = Math.max(160, Math.floor(s.w || wrapper.clientWidth || col.clientWidth || window.innerWidth))
    const h = Math.max(120, Math.floor(s.h || wrapper.clientHeight || col.clientHeight || Math.round(window.innerHeight * 0.7)))
    return { w, h }
}

function applyCanvasSizeFromParams() {
    if (!_resizer) return
    const current = getSafeCanvasSize()
    const explicitW = Math.max(0, Math.floor(Number(params.canvasWidth) || 0))
    const explicitH = Math.max(0, Math.floor(Number(params.canvasHeight) || 0))

    if (explicitW > 0 || explicitH > 0) {
        _resizer.setSize(explicitW > 0 ? explicitW : current.w, explicitH > 0 ? explicitH : current.h)
    } else {
        emitCanvasSize(current.w, current.h)
    }
}

function applyLinearAutoSize() {
    if (!_resizer || params.layoutMode !== 1) return
    if ((params.linearAutoWidthEnabled ?? 1) === 0) return
    if ((Number(params.canvasWidth) || 0) > 0 || (Number(params.canvasHeight) || 0) > 0) return
    const dur = ae.audioEl?.duration
    if (!(dur > 0)) return
    const current = getSafeCanvasSize()
    const pxPerSec = Math.max(0.1, Number(params.linearPixelsPerSecond ?? 1))
    const targetW = Math.max(current.w, Math.round(dur * pxPerSec))
    _resizer.setSize(targetW, current.h)
}

applyCanvasSizeFromParams()
{
    const s = getSafeCanvasSize()
    emitCanvasSize(s.w, s.h)
}
// After linear mode switch: resize canvas to song duration
subscribe((_, key) => {
    if (key === 'layoutMode' && params.layoutMode === 1) {
        applyLinearAutoSize()
    }
    if (key === 'linearAutoWidthEnabled' || key === 'linearPixelsPerSecond') applyLinearAutoSize()
    if (key === 'canvasWidth' || key === 'canvasHeight') applyCanvasSizeFromParams()
    if (key === 'maxParticles') {
        const nextCap = Math.max(4096, Math.floor(params.maxParticles || 4096))
        if (params.maxParticles !== nextCap) params.maxParticles = nextCap
        ps.setMaxParticles(nextCap)
    }
    if (key === 'ruleBlocks') {
        const state = ps.onRulesChanged(params.ruleBlocks ?? [])
        window.dispatchEvent(new CustomEvent('seesound:rule-compile-state', { detail: state }))
        if (RULE_DEBUG_FLAGS.logCompilerStatus) {
            console.info('[RuleEngine] recompilation', {
                status: state.compileStatus,
                compileTimeMs: state.compileTimeMs,
                error: state.compileError,
                rules: Array.isArray(params.ruleBlocks) ? params.ruleBlocks.length : 0,
            })
        }
    }
})

// ── 7c  Control Panel (right panel) ──────────────────────────────────────────
initControlPanel(document.getElementById('control-panel'))

const startupRuleCount = Array.isArray(params.ruleBlocks) ? params.ruleBlocks.length : 0
const startupCompile = ps.getRuleCompileState()
const startupCompileStatus = startupCompile?.compileStatus ?? 'bootstrap-pending'
console.info(
    `[RuleEngine] schema=v${RULE_SCHEMA_VERSION} compile=${startupCompileStatus} rules=${startupRuleCount}`,
    {
        schemaVersion: RULE_SCHEMA_VERSION,
        compileStatus: startupCompileStatus,
        compileTimeMs: startupCompile?.compileTimeMs ?? 0,
        compileError: startupCompile?.compileError ?? null,
        ruleCount: startupRuleCount,
        debug: RULE_DEBUG_FLAGS,
    }
)

console.log('%c SEESOUND v1.0 ready ', 'background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold')
