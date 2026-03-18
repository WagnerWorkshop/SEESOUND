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
import { params, setMany, subscribe, getSnapshot, RULE_SCHEMA_VERSION, RULE_DEBUG_FLAGS } from './engine/ParamStore.js'
import { initControlPanel } from './engine/ControlPanel.js'
import { ParticleSystem } from './engine/ParticleSystem.js'
import { initAudioPlayer } from './components/AudioPlayer.js'
import { initCanvasResizer } from './components/CanvasResizer.js'
import {
    blobToDataUrl,
    buildProjectPayload,
    dataUrlToFile,
    triggerProjectDownload,
} from './engine/project/ProjectIO.js'
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
// § 1  THREE.JS RENDERER + CAMERA
// ─────────────────────────────────────────────────────────────────────────────

const canvas = document.getElementById('three-canvas')
const wrapper = document.getElementById('canvas-wrapper')
const col = document.getElementById('canvas-col')

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 1)
renderer.autoClear = true

const scene = new THREE.Scene()
const originAxes = new THREE.AxesHelper(180)
originAxes.userData.excludeFromPng = true
scene.add(originAxes)
const cameraOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 5000)
const cameraPerspective = new THREE.PerspectiveCamera(55, 1, 0.001, 5000)
let camera = cameraOrtho
const orbitTarget = new THREE.Vector3(0, 0, 0)
const DEFAULT_CAMERA_POS = new THREE.Vector3(0, 0, 420)

for (const c of [cameraOrtho, cameraPerspective]) {
    c.position.copy(DEFAULT_CAMERA_POS)
    c.up.set(0, 1, 0)
    c.lookAt(orbitTarget)
}

function applyProjectionFromParams() {
    const wantPerspective = params.cameraProjection === 'perspective'
    const nextCamera = wantPerspective ? cameraPerspective : cameraOrtho
    if (nextCamera === camera) return

    nextCamera.position.copy(camera.position)
    nextCamera.quaternion.copy(camera.quaternion)
    nextCamera.up.copy(camera.up)
    nextCamera.zoom = camera.zoom
    nextCamera.lookAt(orbitTarget)
    nextCamera.updateProjectionMatrix()

    camera = nextCamera
    syncOrbitFromCamera()
}

// Mouse camera controls:
//  - Left drag: orbit around world origin
//  - Right drag: rotate view around camera center (in-place look)
//  - Wheel: dolly camera forward/backward
const orbitState = {
    radius: 420,
    azimuth: 0,
    elevation: 0,
}

function syncOrbitFromCamera() {
    const x = camera.position.x - orbitTarget.x
    const y = camera.position.y - orbitTarget.y
    const z = camera.position.z - orbitTarget.z
    const r = Math.max(0.001, Math.sqrt(x * x + y * y + z * z) || 1)
    orbitState.radius = r
    orbitState.azimuth = Math.atan2(x, z)
    orbitState.elevation = Math.asin(Math.max(-1, Math.min(1, y / r)))
}

function applyOrbitToCamera() {
    const ce = Math.cos(orbitState.elevation)
    camera.position.set(
        orbitTarget.x + orbitState.radius * ce * Math.sin(orbitState.azimuth),
        orbitTarget.y + orbitState.radius * Math.sin(orbitState.elevation),
        orbitTarget.z + orbitState.radius * ce * Math.cos(orbitState.azimuth),
    )
    camera.lookAt(orbitTarget)
}

function resetCameraPose() {
    orbitTarget.set(0, 0, 0)
    for (const c of [cameraOrtho, cameraPerspective]) {
        c.position.copy(DEFAULT_CAMERA_POS)
        c.up.set(0, 1, 0)
        c.rotation.set(0, 0, 0)
        c.zoom = 1
        c.lookAt(orbitTarget)
        c.updateProjectionMatrix()
    }
    applyProjectionFromParams()
    applyAxoPresetFromParams()
    syncOrbitFromCamera()
}

function applyAxoPresetFromParams() {
    if (params.cameraProjection === 'perspective') return
    const preset = String(params.cameraAxoPreset || 'orthoXY')
    const radius = Math.max(40, Number(orbitState.radius) || DEFAULT_CAMERA_POS.length())

    let azimuth = 0
    let elevation = 0
    if (preset === 'isometric') {
        azimuth = Math.PI / 4
        elevation = Math.asin(1 / Math.sqrt(3))
    } else if (preset === 'fortyFive') {
        azimuth = Math.PI / 4
        elevation = Math.PI / 4
    } else if (preset === 'topXZ') {
        azimuth = 0
        elevation = Math.PI / 2 - 0.001
    }

    orbitState.radius = radius
    orbitState.azimuth = azimuth
    orbitState.elevation = elevation
    applyOrbitToCamera()
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
    if (e.button !== 0 && e.button !== 1 && e.button !== 2) return
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
    } else if (pointerState.button === 1) {
        const viewH = Math.max(1, renderer.domElement.clientHeight || col.clientHeight || window.innerHeight)
        const right = new THREE.Vector3()
        const up = new THREE.Vector3()
        const delta = new THREE.Vector3()

        camera.updateMatrixWorld()
        const m = camera.matrixWorld.elements
        right.set(m[0], m[1], m[2]).normalize()
        up.set(m[4], m[5], m[6]).normalize()

        let unitsPerPixel = 0.01
        if (camera.isOrthographicCamera) {
            unitsPerPixel = (camera.top - camera.bottom) / (Math.max(0.01, camera.zoom) * viewH)
        } else {
            const dist = Math.max(0.001, camera.position.distanceTo(orbitTarget))
            const fovRad = THREE.MathUtils.degToRad(camera.fov)
            unitsPerPixel = (2 * Math.tan(fovRad * 0.5) * dist) / viewH
            unitsPerPixel /= Math.max(0.01, camera.zoom)
        }

        delta.copy(right).multiplyScalar(-dx * unitsPerPixel)
        delta.addScaledVector(up, dy * unitsPerPixel)
        camera.position.add(delta)
        orbitTarget.add(delta)
        syncOrbitFromCamera()
    } else if (pointerState.button === 2) {
        const yaw = -dx * 0.004
        const pitch = -dy * 0.004
        camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yaw)
        camera.rotateX(pitch)
    }
})

canvas.addEventListener('wheel', (e) => {
    e.preventDefault()
    if (camera.isPerspectiveCamera) {
        const dir = new THREE.Vector3()
        camera.getWorldDirection(dir)
        const speed = Math.max(2, orbitState.radius * 0.08)
        const step = (e.deltaY > 0 ? 1 : -1) * speed
        camera.position.addScaledVector(dir, step)
        syncOrbitFromCamera()
    } else {
        const factor = e.deltaY > 0 ? 0.92 : 1.08
        camera.zoom = Math.max(0.05, Math.min(64, camera.zoom * factor))
        camera.updateProjectionMatrix()
    }
}, { passive: false })

function applyRuleCameraOutput(output) {
    if (!output) return
    let posChanged = false
    if (Number.isFinite(output.x)) {
        camera.position.x = output.x
        posChanged = true
    }
    if (Number.isFinite(output.y)) {
        camera.position.y = output.y
        posChanged = true
    }
    if (Number.isFinite(output.z)) {
        camera.position.z = output.z
        posChanged = true
    }
    if (posChanged) {
        camera.lookAt(orbitTarget)
        syncOrbitFromCamera()
    }
    if (Number.isFinite(output.zoom)) {
        camera.zoom = Math.max(0.05, Math.min(64, output.zoom))
        camera.updateProjectionMatrix()
    }
}

function fitCameraToVisible() {
    const bounds = ps.getVisibleBounds()
    if (bounds.empty) {
        resetCameraPose()
        return
    }

    const pad = 1.18
    const dpr = Math.max(1, Number(window.devicePixelRatio) || 1)
    const canvasPxW = renderer.domElement.width / dpr
    const canvasPxH = renderer.domElement.height / dpr
    const w = Math.max(1, canvasPxW || Number(params.canvasWidth) || renderer.domElement.clientWidth || col.clientWidth || window.innerWidth)
    const h = Math.max(1, canvasPxH || Number(params.canvasHeight) || renderer.domElement.clientHeight || col.clientHeight || window.innerHeight)
    const aspect = w / h
    const size = bounds.size
    const center = bounds.center
    const radius = Math.max(1, Math.sqrt(size.x * size.x + size.y * size.y + size.z * size.z) * 0.5)

    orbitTarget.copy(center)

    if (camera.isOrthographicCamera) {
        const halfW = Math.max(size.x * 0.5, size.y * 0.5 * aspect, radius * 0.65)
        const halfH = Math.max(size.y * 0.5, size.x * 0.5 / Math.max(0.001, aspect), radius * 0.65)
        cameraOrtho.left = -halfW * pad
        cameraOrtho.right = halfW * pad
        cameraOrtho.top = halfH * pad
        cameraOrtho.bottom = -halfH * pad
        cameraOrtho.zoom = 1
        cameraOrtho.updateProjectionMatrix()
        orbitState.radius = Math.max(radius * 2.2, 60)
        applyOrbitToCamera()
    } else {
        const fovY = THREE.MathUtils.degToRad(cameraPerspective.fov)
        const fovX = 2 * Math.atan(Math.tan(fovY * 0.5) * cameraPerspective.aspect)
        const distY = (size.y * 0.5 * pad) / Math.max(0.001, Math.tan(fovY * 0.5))
        const distX = (size.x * 0.5 * pad) / Math.max(0.001, Math.tan(fovX * 0.5))
        orbitState.radius = Math.max(radius * 1.35, distX, distY, 40)
        applyOrbitToCamera()
        cameraPerspective.updateProjectionMatrix()
    }

    syncOrbitFromCamera()
}

function resizeRenderer(w, h) {
    cameraOrtho.left = -w / 2
    cameraOrtho.right = w / 2
    cameraOrtho.top = h / 2
    cameraOrtho.bottom = -h / 2
    cameraOrtho.updateProjectionMatrix()

    cameraPerspective.aspect = w / Math.max(1, h)
    cameraPerspective.updateProjectionMatrix()
    renderer.setSize(w, h, false)   // false → do NOT set canvas style size
}

// Initial size
const initW = col.clientWidth || window.innerWidth
const initH = col.clientHeight || window.innerHeight
resizeRenderer(initW, initH)
applyProjectionFromParams()
applyAxoPresetFromParams()

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

const fitCameraBtn = document.createElement('button')
fitCameraBtn.type = 'button'
fitCameraBtn.title = 'Fit to visible particles'
fitCameraBtn.textContent = 'Fit'
fitCameraBtn.style.height = '22px'
fitCameraBtn.style.padding = '0 8px'
fitCameraBtn.style.border = '1px solid var(--color-border, #444)'
fitCameraBtn.style.borderRadius = '6px'
fitCameraBtn.style.background = 'rgba(0,0,0,0.55)'
fitCameraBtn.style.color = 'var(--color-text-muted, #bbb)'
fitCameraBtn.style.cursor = 'pointer'
fitCameraBtn.addEventListener('click', fitCameraToVisible)

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
cameraReadout.textContent = 'cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0'

cameraHud.append(resetCameraBtn, fitCameraBtn, clearCanvasBtn, cameraReadout)
document.body.appendChild(cameraHud)

// ─────────────────────────────────────────────────────────────────────────────
// § 6  ANIMATION LOOP
// ─────────────────────────────────────────────────────────────────────────────

let isPlaying = false
let frameN = 0
let paintAllRunId = 0
let _currentAudioFileName = ''

function _sanitizeFilePart(value, fallback = 'untitled') {
    const text = String(value || '').trim()
    const cleaned = text
        .replace(/[\\/:*?"<>|]/g, '-')
        .replace(/\s+/g, ' ')
        .replace(/\.+$/g, '')
        .trim()
    return cleaned || fallback
}

function _nameWithoutExt(fileName) {
    const name = String(fileName || '').trim()
    return name.replace(/\.[^./\\]+$/g, '')
}

function _currentPresetTitle() {
    const sel = document.querySelector('.cp-preset-bar .cp-preset-sel')
    const typed = document.querySelector('.cp-preset-bar .cp-preset-name')
    const selected = String(sel?.value || '').trim()
    const typedName = String(typed?.value || '').trim()
    return typedName || selected || 'preset'
}

function _currentAudioTitle() {
    if (_currentAudioFileName) return _nameWithoutExt(_currentAudioFileName)
    const src = String(ae?.audioEl?.currentSrc || ae?.audioEl?.src || '').trim()
    if (!src) return 'audio'
    try {
        const url = new URL(src, window.location.href)
        const leaf = decodeURIComponent((url.pathname.split('/').pop() || '').trim())
        if (leaf) return _nameWithoutExt(leaf)
    } catch {
        // ignore parse failures and use fallback below
    }
    return 'audio'
}

async function _audioBlobFromElement(audioEl) {
    const src = audioEl?.src
    if (!src) return null
    const res = await fetch(src)
    if (!res.ok) return null
    return res.blob()
}

function _defaultProjectName() {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return `seesound-project-${stamp}.json`
}

async function saveCanvasPng() {
    const audioTitle = _sanitizeFilePart(_currentAudioTitle(), 'audio')
    const presetTitle = _sanitizeFilePart(_currentPresetTitle(), 'preset')
    const defaultPngName = `${audioTitle} - ${presetTitle}.png`
    const requestedW = Math.max(1, Math.floor(Number(params.canvasWidth) || (renderer.domElement.width / Math.max(1, window.devicePixelRatio))))
    const requestedH = Math.max(1, Math.floor(Number(params.canvasHeight) || (renderer.domElement.height / Math.max(1, window.devicePixelRatio))))

    const exportCanvas = document.createElement('canvas')
    const exportRenderer = new THREE.WebGLRenderer({
        canvas: exportCanvas,
        antialias: true,
        preserveDrawingBuffer: true,
    })

    try {
        const maxTex = exportRenderer.capabilities.maxTextureSize || 8192
        const exportW = Math.min(requestedW, maxTex)
        const exportH = Math.min(requestedH, maxTex)
        const exportDpr = Math.max(1, Number(renderer.getPixelRatio?.() || window.devicePixelRatio || 1))
        const logicalW = Math.max(1, Math.floor(exportW / exportDpr))
        const logicalH = Math.max(1, Math.floor(exportH / exportDpr))

        // Match live point-size perception: use same DPR model as live renderer.
        exportRenderer.setPixelRatio(exportDpr)
        exportRenderer.setSize(logicalW, logicalH, false)

        let exportCamera = camera.clone()
        if (camera === cameraOrtho || exportCamera.isOrthographicCamera) {
            // Preserve current ortho frustum/zoom so export matches live framing.
            exportCamera = camera.clone()
            exportCamera.updateProjectionMatrix()
        } else if (exportCamera.isPerspectiveCamera) {
            // Keep perspective framing behavior while adapting aspect to export target.
            exportCamera.aspect = exportW / Math.max(1, exportH)
            exportCamera.updateProjectionMatrix()
        }

        const hiddenForExport = []
        scene.traverse((obj) => {
            if (obj?.userData?.excludeFromPng && obj.visible) {
                hiddenForExport.push(obj)
                obj.visible = false
            }
        })

        exportRenderer.setClearColor(ps.getBackgroundColor(), 1)
        exportRenderer.render(scene, exportCamera)

        for (const obj of hiddenForExport) obj.visible = true

        const blob = await new Promise((resolve) => exportCanvas.toBlob(resolve, 'image/png'))
        if (!blob) throw new Error('PNG export failed (empty blob).')

        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = defaultPngName
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(a.href)

        if (exportW !== requestedW || exportH !== requestedH) {
            console.warn('[PNG] Export size clamped by GPU limits.', {
                requested: { w: requestedW, h: requestedH },
                exported: { w: exportW, h: exportH },
                maxTextureSize: maxTex,
            })
        }
    } finally {
        exportRenderer.dispose()
    }
}

function emitPaintAllState(playerEl, running) {
    playerEl.dispatchEvent(new CustomEvent('player:paintall-state', {
        detail: { running }, bubbles: false,
    }))
}

async function runPaintAll(playerEl, audioEl) {
    if (!(audioEl?.duration > 0)) return

    const runId = ++paintAllRunId
    const srcBlob = await _audioBlobFromElement(audioEl)
    const srcUrl = srcBlob ? URL.createObjectURL(srcBlob) : (audioEl.currentSrc || audioEl.src)
    if (!srcUrl) return

    const paintAudio = new Audio()
    paintAudio.crossOrigin = 'anonymous'
    paintAudio.src = srcUrl
    paintAudio.preload = 'auto'
    paintAudio.currentTime = 0
    paintAudio.muted = true
    paintAudio.volume = 0
    if (typeof paintAudio.preservesPitch === 'boolean') paintAudio.preservesPitch = false
    paintAudio.playbackRate = 16
    paintAudio.style.display = 'none'
    document.body.appendChild(paintAudio)

    const paintAe = new AudioEngine()

    emitPaintAllState(playerEl, true)

    try {
        ps.clear()

        await new Promise((resolve, reject) => {
            const done = () => {
                cleanup()
                resolve()
            }
            const fail = () => {
                cleanup()
                reject(new Error('Paint-all audio metadata failed to load.'))
            }
            const cleanup = () => {
                paintAudio.removeEventListener('loadedmetadata', done)
                paintAudio.removeEventListener('canplay', done)
                paintAudio.removeEventListener('error', fail)
            }
            paintAudio.addEventListener('loadedmetadata', done, { once: true })
            paintAudio.addEventListener('canplay', done, { once: true })
            paintAudio.addEventListener('error', fail, { once: true })
            paintAudio.load()
        })

        paintAe.init(paintAudio)
        if (paintAe.ctx?.state === 'suspended') await paintAe.ctx.resume()

        await paintAudio.play()

        let lastTime = -1
        let stalledFrames = 0
        while (runId === paintAllRunId && !paintAudio.ended) {
            await new Promise((resolve) => requestAnimationFrame(resolve))

            paintAe.update()

            const w = renderer.domElement.width / window.devicePixelRatio
            const h = renderer.domElement.height / window.devicePixelRatio
            const paintParams = {
                ...params,
                // Paint-all must accumulate by design, regardless of current live mode.
                persistMode: 1,
                cameraState: {
                    x: camera.position.x,
                    y: camera.position.y,
                    z: camera.position.z,
                    zoom: camera.zoom,
                },
            }
            ps.update(paintAe, paintParams, w, h)
            applyRuleCameraOutput(ps.getCameraOutput())

            const nowTime = Number(paintAudio.currentTime) || 0
            if (nowTime > lastTime + 1e-4) {
                lastTime = nowTime
                stalledFrames = 0
            } else {
                stalledFrames++
            }

            if (paintAudio.paused && !paintAudio.ended) {
                try { await paintAudio.play() } catch { break }
            }

            // If playback gets stuck near the end, force completion.
            if (stalledFrames > 120 && nowTime >= Math.max(0, (paintAudio.duration || 0) - 0.25)) {
                paintAudio.currentTime = paintAudio.duration || nowTime
                break
            }
        }
    } finally {
        paintAudio.pause()
        paintAudio.src = ''
        paintAudio.remove()
        if (srcBlob) URL.revokeObjectURL(srcUrl)
        try { paintAe.source?.disconnect() } catch { }
        try { paintAe.streamSource?.disconnect() } catch { }
        try { paintAe.splitter?.disconnect() } catch { }
        try { paintAe.analyserL?.disconnect() } catch { }
        try { paintAe.analyserR?.disconnect() } catch { }
        try { paintAe.analyser?.disconnect() } catch { }
        try { await paintAe.ctx?.close() } catch { }
        emitPaintAllState(playerEl, false)
    }
}

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
        const updateParams = {
            ...params,
            cameraState: {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z,
                zoom: camera.zoom,
            },
        }
        ps.update(ae, updateParams, w, h)
        applyRuleCameraOutput(ps.getCameraOutput())
    }

    const bg = ps.getBackgroundColor()
    renderer.setClearColor(bg, 1)

    renderer.render(scene, camera)

    // HUD update ~10 fps
    if (frameN % 6 === 0) {
        const rx = (camera.rotation.x * 180 / Math.PI).toFixed(2)
        const ry = (camera.rotation.y * 180 / Math.PI).toFixed(2)
        const rz = (camera.rotation.z * 180 / Math.PI).toFixed(2)
        const px = camera.position.x.toFixed(2)
        const py = camera.position.y.toFixed(2)
        const pz = camera.position.z.toFixed(2)
        let canvW = 0
        let canvH = 0
        if (camera.isOrthographicCamera) {
            canvW = Math.abs((camera.right - camera.left) / Math.max(0.01, camera.zoom))
            canvH = Math.abs((camera.top - camera.bottom) / Math.max(0.01, camera.zoom))
        } else {
            const dist = Math.max(0.001, camera.position.distanceTo(orbitTarget))
            const fovRad = THREE.MathUtils.degToRad(camera.fov)
            canvH = (2 * Math.tan(fovRad * 0.5) * dist) / Math.max(0.01, camera.zoom)
            canvW = canvH * camera.aspect
        }
        cameraReadout.textContent = `cam p(${px},${py},${pz}) r(${rx},${ry},${rz}) pts ${ps.getVisibleCount()} fft ${ae.peakByte} amp ${ae.amplitude.toFixed(3)} sc ${ae.spectralCentroid.toFixed(3)} sf ${ae.spectralFlux.toFixed(3)} sfl ${ae.spectralFlatness.toFixed(3)} inh ${ae.inharmonicity.toFixed(3)} canv ${canvW.toFixed(2)} × ${canvH.toFixed(2)}`
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
    let loadedAudioFile = null

    // Keep render state aligned with true media playback state.
    audioEl.addEventListener('play', async () => {
        isPlaying = true
        ae.init(audioEl)
        if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    })
    audioEl.addEventListener('pause', () => { isPlaying = false })
    audioEl.addEventListener('ended', () => { isPlaying = false })

    playerEl.addEventListener('player:playpause', async () => {
        paintAllRunId++
        ae.init(audioEl)
        if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    })
    playerEl.addEventListener('player:play', () => { paintAllRunId++; isPlaying = true })
    playerEl.addEventListener('player:pause', () => { paintAllRunId++; isPlaying = false })
    playerEl.addEventListener('player:stop', () => { paintAllRunId++; isPlaying = false })
    playerEl.addEventListener('player:savepng', async () => {
        await saveCanvasPng()
    })
    playerEl.addEventListener('player:paintall', async () => {
        await runPaintAll(playerEl, audioEl)
    })
    playerEl.addEventListener('player:playbackrate', (e) => {
        const next = Number(e?.detail?.rate)
        if (!Number.isFinite(next)) return
        audioEl.playbackRate = Math.max(0.1, Math.min(16, next))
    })
    playerEl.addEventListener('player:fileloaded', (e) => {
        const file = e?.detail?.file
        loadedAudioFile = file instanceof File ? file : null
        _currentAudioFileName = loadedAudioFile?.name || ''
    })

    const saveProject = async () => {
        try {
            const snapshot = getSnapshot()
            const audioBlob = loadedAudioFile || await _audioBlobFromElement(audioEl)
            const audioDataUrl = audioBlob ? await blobToDataUrl(audioBlob) : ''
            const payload = buildProjectPayload({
                params: snapshot,
                presetName: '',
                audioDataUrl,
                audioFileName: loadedAudioFile?.name || 'project-audio.wav',
            })
            triggerProjectDownload(payload, _defaultProjectName())
        } catch (err) {
            console.warn('[Project] save failed:', err)
        }
    }

    const loadProjectFromPayload = async (payload) => {
        try {
            if (payload.params && typeof payload.params === 'object') {
                setMany(payload.params)
            }

            const dataUrl = payload?.audio?.dataUrl
            if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) {
                const fileName = payload?.audio?.fileName || 'project-audio.wav'
                const file = dataUrlToFile(dataUrl, fileName)
                loadedAudioFile = file
                _currentAudioFileName = file?.name || ''
                if (audioEl.src?.startsWith('blob:')) URL.revokeObjectURL(audioEl.src)
                audioEl.src = URL.createObjectURL(file)
                audioEl.load()
                ae.audioEl = audioEl
            }
        } catch (err) {
            console.warn('[Project] load failed:', err)
        }
    }

    playerEl.addEventListener('player:saveproject', saveProject)
    playerEl.addEventListener('player:loadproject', async (e) => {
        await loadProjectFromPayload(e?.detail?.payload || {})
    })

    window.addEventListener('seesound:project-save-request', saveProject)
    window.addEventListener('seesound:project-load-request', async (e) => {
        await loadProjectFromPayload(e?.detail?.payload || {})
    })

}

// ── 7b  Canvas Resizer ────────────────────────────────────────────────────────
let _resizer = null
let _syncingCanvasFromParams = false
_resizer = initCanvasResizer({
    wrapper, column: col,
    onResize(w, h) {
        resizeRenderer(w, h)
        emitCanvasSize(w, h)
        if (!_syncingCanvasFromParams) {
            const iw = Math.max(160, Math.floor(w || 160))
            const ih = Math.max(120, Math.floor(h || 120))
            if (Number(params.canvasWidth) !== iw || Number(params.canvasHeight) !== ih) {
                setMany({ canvasWidth: iw, canvasHeight: ih })
            }
        }
    },
})

function emitCanvasSize(w, h) {
    const s = Math.max(5, Math.min(400, Math.floor(Number(params.canvasScale) || 100)))
    window.dispatchEvent(new CustomEvent('seesound:canvas-size', {
        detail: {
            w,
            h,
            s,
        },
    }))
}

function applyCanvasScaleFromParams() {
    const scalePct = Math.max(5, Math.min(400, Math.floor(Number(params.canvasScale) || 100)))
    const scale = scalePct / 100
    wrapper.style.transformOrigin = 'center center'
    wrapper.style.transform = `scale(${scale})`
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
    const explicitW = Math.max(160, Math.floor(Number(params.canvasWidth) || current.w))
    const explicitH = Math.max(120, Math.floor(Number(params.canvasHeight) || current.h))

    if (explicitW === current.w && explicitH === current.h) {
        emitCanvasSize(current.w, current.h)
        return
    }
    _syncingCanvasFromParams = true
    _resizer.setSize(explicitW, explicitH)
    _syncingCanvasFromParams = false
}

applyCanvasSizeFromParams()
applyCanvasScaleFromParams()
{
    const s = getSafeCanvasSize()
    if (Number(params.canvasWidth) !== s.w || Number(params.canvasHeight) !== s.h) {
        setMany({ canvasWidth: s.w, canvasHeight: s.h })
    }
    emitCanvasSize(s.w, s.h)
}
subscribe((_, key) => {
    if (key === 'cameraProjection') applyProjectionFromParams()
    if (key === 'cameraProjection' || key === 'cameraAxoPreset') applyAxoPresetFromParams()
    if (key === 'canvasWidth' || key === 'canvasHeight') applyCanvasSizeFromParams()
    if (key === 'canvasScale') applyCanvasScaleFromParams()
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


