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
import './styles/ui.css'

// ── Modules ───────────────────────────────────────────────────────────────────
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import {
    params,
    set,
    setMany,
    subscribe,
    getSnapshot,
    resetToDefaults,
    undo,
    redo,
    listPresets,
    loadPreset,
    savePreset,
    deletePreset,
    RULE_SCHEMA_VERSION,
    RULE_DEBUG_FLAGS,
} from './engine/ParamStore.js'
import { initControlPanel } from './engine/ControlPanel.js'
import { ParticleSystem } from './engine/ParticleSystem.js'
import { initAudioPlayer } from './components/AudioPlayer.js'
import { initCanvasResizer } from './components/CanvasResizer.js'
import {
    buildProjectPayload,
    parseProjectFile,
    PROJECT_FILE_EXTENSION,
    PROJECT_PACKAGE_EXTENSION,
    buildProjectPackageBlob,
    triggerBlobDownload,
} from './engine/project/ProjectIO.js'
import { ExportManager } from './engine/project/ExportManager.js'
import { UI_TEXT } from './engine/ui/UiText.js'
import { AudioEngine, snapCqtDetailsPer10Octaves, snapFftSize } from './engine/audio/AudioEngine.js'
import { CameraController } from './engine/renderer/CameraController.js'
import resetIcon from './icons/reset.svg?raw'
import fitIcon from './icons/fit.svg?raw'
import clearIcon from './icons/clear.svg?raw'
import magnifierPlusIcon from './icons/magnifier-plus.svg?raw'
import magnifierMinusIcon from './icons/magnifier-minus.svg?raw'

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

const composer = new EffectComposer(renderer)

const scene = new THREE.Scene()
const ORIGIN_SIGN_SIZE = 250
const originAxes = new THREE.AxesHelper(ORIGIN_SIGN_SIZE)
let originSignEnabled = true
originAxes.userData.excludeFromPng = true
scene.add(originAxes)
function emitOriginSignState() {
    window.dispatchEvent(new CustomEvent('seesound:origin-sign-state', {
        detail: { enabled: originSignEnabled, size: ORIGIN_SIGN_SIZE },
    }))
}

window.addEventListener('seesound:origin-sign-toggle', (e) => {
    const requested = e?.detail?.enabled
    if (typeof requested === 'boolean') originSignEnabled = requested
    else originSignEnabled = !originSignEnabled
    originAxes.visible = originSignEnabled
    emitOriginSignState()
})
emitOriginSignState()
const MIN_CAMERA_CLIP_EXTENT = 10000
const MIN_CAMERA_CLIP_FAR = MIN_CAMERA_CLIP_EXTENT * 2
const cameraOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, MIN_CAMERA_CLIP_FAR)
const cameraPerspective = new THREE.PerspectiveCamera(55, 1, 0.001, MIN_CAMERA_CLIP_FAR)
let camera = cameraOrtho
const orbitTarget = new THREE.Vector3(0, 0, 0)
const DEFAULT_CAMERA_POS = new THREE.Vector3(0, 0, 420)
const DEFAULT_ORBIT_RADIUS = DEFAULT_CAMERA_POS.length()

const renderPass = new RenderPass(scene, camera)
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(1, 1),
    Number(params.bloomStrength ?? 1.15),
    Number(params.bloomRadius ?? 0.7),
    Number(params.bloomThreshold ?? 0.18),
)

composer.addPass(renderPass)
composer.addPass(bloomPass)

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
    renderPass.camera = camera
    syncOrbitFromCamera()
}

function syncCameraFromParams() {
    const px = Number(params.cameraPosX)
    const py = Number(params.cameraPosY)
    const pz = Number(params.cameraPosZ)
    const tx = Number(params.cameraTargetX)
    const ty = Number(params.cameraTargetY)
    const tz = Number(params.cameraTargetZ)

    if (Number.isFinite(px)) camera.position.x = px
    if (Number.isFinite(py)) camera.position.y = py
    if (Number.isFinite(pz)) camera.position.z = pz

    if (Number.isFinite(tx)) orbitTarget.x = tx
    if (Number.isFinite(ty)) orbitTarget.y = ty
    if (Number.isFinite(tz)) orbitTarget.z = tz

    const fov = Math.max(20, Math.min(120, Number(params.cameraAngleOfView ?? 55)))
    if (Number.isFinite(fov) && cameraPerspective.fov !== fov) {
        cameraPerspective.fov = fov
        cameraPerspective.updateProjectionMatrix()
    }

    camera.lookAt(orbitTarget)
    syncOrbitFromCamera()
}

function syncPostProcessingFromParams() {
    const postEnabled = Number(params.postProcessEnabled ?? 0) >= 0.5
    const bloomEnabled = Number(params.bloomEnabled ?? 1) >= 0.5

    bloomPass.enabled = postEnabled && bloomEnabled

    bloomPass.strength = Math.max(0, Number(params.bloomStrength ?? 1.15) || 0)
    bloomPass.radius = Math.max(0, Number(params.bloomRadius ?? 0.7) || 0)
    bloomPass.threshold = Math.max(0, Math.min(1, Number(params.bloomThreshold ?? 0.18) || 0))
}

function shouldUsePostProcessing() {
    const postEnabled = Number(params.postProcessEnabled ?? 0) >= 0.5
    if (!postEnabled) return false
    const bloomEnabled = Number(params.bloomEnabled ?? 1) >= 0.5
    return bloomEnabled
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
let cameraController = null

function syncOrbitFromCamera() {
    cameraController?.syncOrbitFromCamera()
}

function applyOrbitToCamera() {
    cameraController?.applyOrbitToCamera()
}

function _axoAnglesForPreset(presetName) {
    const preset = String(presetName || 'orthoXY')
    if (preset === 'isometric') {
        return {
            azimuth: Math.PI / 4,
            elevation: Math.asin(1 / Math.sqrt(3)),
        }
    }
    if (preset === 'fortyFive') {
        return {
            azimuth: Math.PI / 4,
            elevation: Math.PI / 4,
        }
    }
    if (preset === 'topXZ') {
        return {
            azimuth: 0,
            elevation: Math.PI / 2 - 0.001,
        }
    }
    if (preset === 'orthoYZ') {
        return {
            azimuth: Math.PI / 2,
            elevation: 0,
        }
    }
    return {
        azimuth: 0,
        elevation: 0,
    }
}

function resetCameraPose() {
    orbitTarget.set(0, 0, 0)
    const resetW = Math.max(1, renderer.domElement.clientWidth || col.clientWidth || window.innerWidth)
    const resetH = Math.max(1, renderer.domElement.clientHeight || col.clientHeight || window.innerHeight)
    resizeRenderer(resetW, resetH)
    for (const c of [cameraOrtho, cameraPerspective]) {
        c.position.copy(DEFAULT_CAMERA_POS)
        c.up.set(0, 1, 0)
        c.rotation.set(0, 0, 0)
        c.zoom = 1
        c.lookAt(orbitTarget)
        c.updateProjectionMatrix()
    }
    applyProjectionFromParams()
    applyAxoPresetFromParams(true)
    syncOrbitFromCamera()
}

function applyAxoPresetFromParams(forceDefaultRadius = false) {
    if (params.cameraProjection === 'perspective') return
    const preset = String(params.cameraAxoPreset || 'orthoXY')
    const radius = forceDefaultRadius
        ? DEFAULT_ORBIT_RADIUS
        : Math.max(40, Number(orbitState.radius) || DEFAULT_ORBIT_RADIUS)
    const { azimuth, elevation } = _axoAnglesForPreset(preset)

    orbitState.radius = radius
    orbitState.azimuth = azimuth
    orbitState.elevation = elevation
    applyOrbitToCamera()
    syncOrbitFromCamera()
}

const pointerState = {
    active: false,
    button: -1,
    lastX: 0,
    lastY: 0,
    pinchDistance: 0,
}

const wrapperState = {
    active: false,
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    lastX: 0,
    lastY: 0,
    pinchDistance: 0
}

function bumpCanvasScale(delta) {
    const current = Math.max(5, Math.min(2000, Math.floor(Number(params.canvasScale) || 100)))
    const next = Math.max(5, Math.min(2000, current + delta))
    if (next !== current) set('canvasScale', next)
}

function resetViewCamera() {
    resetCameraPose()
}

function fitViewToCanvas() {
    fitCameraToVisible()
}

function clearSceneElements() {
    ps.clear()
}

function getCanvasNavText(key, fallback = '') {
    const value = UI_TEXT?.canvasNav?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
}

function applyNavButtonIcon(button, svgMarkup, label) {
    if (!button || !svgMarkup) return
    const caption = String(label || '').trim()
    button.textContent = ''
    button.append(
        Object.assign(document.createElement('span'), { className: 'canvas-nav-actions__icon cp-btn-icon', innerHTML: svgMarkup }),
        Object.assign(document.createElement('span'), { className: 'canvas-nav-actions__label', textContent: caption }),
    )
    if (caption) button.setAttribute('aria-label', caption)
}

const navActions = document.createElement('div')
navActions.className = 'canvas-nav-actions'

const navResetBtn = document.createElement('button')
navResetBtn.type = 'button'
navResetBtn.className = 'canvas-nav-actions__btn cp-btn'
navResetBtn.title = getCanvasNavText('resetTooltip', 'Reset camera')
applyNavButtonIcon(navResetBtn, resetIcon, getCanvasNavText('reset', UI_TEXT?.view?.cameraReset || 'Reset Camera'))
navResetBtn.addEventListener('click', resetViewCamera)

const navFitBtn = document.createElement('button')
navFitBtn.type = 'button'
navFitBtn.className = 'canvas-nav-actions__btn cp-btn'
navFitBtn.title = getCanvasNavText('fitTooltip', 'Fit image to canvas bounds')
applyNavButtonIcon(navFitBtn, fitIcon, getCanvasNavText('fit', UI_TEXT?.view?.cameraFit || 'Fit'))
navFitBtn.addEventListener('click', fitViewToCanvas)

const navClearBtn = document.createElement('button')
navClearBtn.type = 'button'
navClearBtn.className = 'canvas-nav-actions__btn cp-btn'
navClearBtn.title = getCanvasNavText('clearTooltip', 'Clear particles and scene elements')
applyNavButtonIcon(navClearBtn, clearIcon, getCanvasNavText('clear', 'Clear'))
navClearBtn.addEventListener('click', clearSceneElements)

const navZoomInBtn = document.createElement('button')
navZoomInBtn.type = 'button'
navZoomInBtn.className = 'canvas-nav-actions__btn cp-btn'
navZoomInBtn.title = getCanvasNavText('zoomInTooltip', 'Increase canvas zoom')
applyNavButtonIcon(navZoomInBtn, magnifierPlusIcon, getCanvasNavText('zoomIn', 'Zoom In'))
navZoomInBtn.addEventListener('click', () => bumpCanvasScale(10))

const navZoomOutBtn = document.createElement('button')
navZoomOutBtn.type = 'button'
navZoomOutBtn.className = 'canvas-nav-actions__btn canvas-nav-actions__btn--conditional cp-btn'
navZoomOutBtn.title = getCanvasNavText('zoomOutTooltip', 'Decrease canvas zoom')
applyNavButtonIcon(navZoomOutBtn, magnifierMinusIcon, getCanvasNavText('zoomOut', 'Zoom Out'))
navZoomOutBtn.addEventListener('click', () => bumpCanvasScale(-10))

navActions.append(navResetBtn, navFitBtn, navClearBtn, navZoomInBtn, navZoomOutBtn)
const navHost = document.getElementById('app') || document.body
if (navHost) navHost.appendChild(navActions)

function updateZoomButtonsVisibility() {
    const ww = wrapper.clientWidth
    const wh = wrapper.clientHeight
    const cw = col.clientWidth
    const ch = col.clientHeight

    // Show Zoom Out only when the canvas is effectively maxed out in both axes.
    const isLarge = (ww >= cw * 0.95) && (wh >= ch * 0.95)
    navZoomOutBtn.classList.toggle('is-visible', isLarge)
    navZoomOutBtn.disabled = !isLarge
}
window.addEventListener('resize', updateZoomButtonsVisibility)
updateZoomButtonsVisibility()

function updateWrapperTransform() {
    wrapper.style.transform = `translate(${wrapperState.offsetX}px, ${wrapperState.offsetY}px) scale(${wrapperState.scale})`
}

cameraController = new CameraController({
    getCamera: () => camera,
    orbitTarget,
    orbitState,
    renderer,
    col,
    canvas,
    wrapper,
    pointerState,
    wrapperState,
    updateWrapperTransform,
    setCanvasScale: (value) => set('canvasScale', value),
})
cameraController.bindEvents()
syncOrbitFromCamera()

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

    const EPS = 1e-6
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
        const { azimuth, elevation } = _axoAnglesForPreset(params.cameraAxoPreset)
        orbitState.azimuth = azimuth
        orbitState.elevation = elevation
        orbitState.radius = Math.max(radius * 2.2, 60)
        applyOrbitToCamera()

        camera.updateMatrixWorld(true)
        const m = camera.matrixWorld.elements
        const right = new THREE.Vector3(m[0], m[1], m[2]).normalize()
        const up = new THREE.Vector3(m[4], m[5], m[6]).normalize()

        const corners = [
            new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.min.z),
            new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.max.z),
            new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.min.z),
            new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.max.z),
            new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.min.z),
            new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.max.z),
            new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.min.z),
            new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.max.z),
        ]

        let maxX = 0
        let maxY = 0
        const tmp = new THREE.Vector3()
        for (const c of corners) {
            tmp.copy(c).sub(center)
            maxX = Math.max(maxX, Math.abs(tmp.dot(right)))
            maxY = Math.max(maxY, Math.abs(tmp.dot(up)))
        }

        const halfW = Math.max(maxX, maxY * aspect, EPS)
        const halfH = Math.max(maxY, maxX / Math.max(EPS, aspect), EPS)
        cameraOrtho.left = -halfW
        cameraOrtho.right = halfW
        cameraOrtho.top = halfH
        cameraOrtho.bottom = -halfH
        cameraOrtho.zoom = 1
        cameraOrtho.near = -Math.max(MIN_CAMERA_CLIP_EXTENT, radius * 6)
        cameraOrtho.far = Math.max(MIN_CAMERA_CLIP_EXTENT, radius * 6)
        cameraOrtho.updateProjectionMatrix()
    } else {
        // Preserve current view direction and solve exact camera distance needed
        // so all bbox corners fit the frustum without extra margin.
        cameraPerspective.lookAt(center)
        syncOrbitFromCamera()

        cameraPerspective.updateMatrixWorld(true)
        const m = cameraPerspective.matrixWorld.elements
        const right = new THREE.Vector3(m[0], m[1], m[2]).normalize()
        const up = new THREE.Vector3(m[4], m[5], m[6]).normalize()
        const forward = new THREE.Vector3()
        cameraPerspective.getWorldDirection(forward)

        const corners = [
            new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.min.z),
            new THREE.Vector3(bounds.min.x, bounds.min.y, bounds.max.z),
            new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.min.z),
            new THREE.Vector3(bounds.min.x, bounds.max.y, bounds.max.z),
            new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.min.z),
            new THREE.Vector3(bounds.max.x, bounds.min.y, bounds.max.z),
            new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.min.z),
            new THREE.Vector3(bounds.max.x, bounds.max.y, bounds.max.z),
        ]

        const fovY = THREE.MathUtils.degToRad(cameraPerspective.fov)
        const tanY = Math.max(EPS, Math.tan(fovY * 0.5))
        const fovX = 2 * Math.atan(Math.tan(fovY * 0.5) * (cameraPerspective.aspect || aspect))
        const tanX = Math.max(EPS, Math.tan(fovX * 0.5))

        let requiredDistance = EPS
        let maxDepthTowardCamera = 0
        const offset = new THREE.Vector3()
        for (const c of corners) {
            offset.copy(c).sub(center)
            const xCam = Math.abs(offset.dot(right))
            const yCam = Math.abs(offset.dot(up))
            const zCam = offset.dot(forward)
            maxDepthTowardCamera = Math.max(maxDepthTowardCamera, zCam)
            const reqForCorner = zCam + Math.max(xCam / tanX, yCam / tanY)
            requiredDistance = Math.max(requiredDistance, reqForCorner)
        }

        orbitState.radius = Math.max(requiredDistance + EPS, maxDepthTowardCamera + EPS)
        applyOrbitToCamera()
        cameraPerspective.near = Math.max(0.001, orbitState.radius - radius * 3)
        cameraPerspective.far = Math.max(MIN_CAMERA_CLIP_FAR, cameraPerspective.near + 1, orbitState.radius + radius * 6)
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
    composer.setSize(w, h)
    bloomPass.setSize(w, h)
}

// Initial size
const initW = col.clientWidth || window.innerWidth
const initH = col.clientHeight || window.innerHeight
resizeRenderer(initW, initH)
applyProjectionFromParams()
applyAxoPresetFromParams()
syncCameraFromParams()
syncPostProcessingFromParams()

// ─────────────────────────────────────────────────────────────────────────────
// § 2  PARTICLE SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

const ps = new ParticleSystem(scene, { maxParticles: params.maxParticles ?? 262144 })
const _initialCompileState = ps.onRulesChanged(params.ruleBlocks ?? [])
window.dispatchEvent(new CustomEvent('seesound:rule-compile-state', { detail: _initialCompileState }))

function _collectUsedRuleInputs(requiredInputsByTarget = null) {
    return new Set([
        ...(Array.isArray(requiredInputsByTarget?.spawnedParticles) ? requiredInputsByTarget.spawnedParticles : []),
        ...(Array.isArray(requiredInputsByTarget?.allParticles) ? requiredInputsByTarget.allParticles : []),
        ...(Array.isArray(requiredInputsByTarget?.physicalParticles) ? requiredInputsByTarget.physicalParticles : []),
        ...(Array.isArray(requiredInputsByTarget?.background) ? requiredInputsByTarget.background : []),
        ...(Array.isArray(requiredInputsByTarget?.camera) ? requiredInputsByTarget.camera : []),
    ])
}

function _deriveAudioUsage(requiredInputsByTarget = null) {
    const used = _collectUsedRuleInputs(requiredInputsByTarget)
    const alwaysCalculated = new Set([
        'amplitude',
        'bass',
        'mid',
        'high',
        'peakFreq',
        'pan',
        'time',
        'deltaTime',
        'frequencyHz',
        'normFreq',
        'canvasWidthPx',
        'canvasHeightPx',
        'canvasWidthUnits',
        'canvasHeightUnits',
        'audioLengthSec',
        'binEnergy',
    ])

    const needMagnitude = used.has('binMagnitude') || used.has('binEnergy') || used.has('binFlux') || used.has('binEnvelope') || used.has('binEnvelopeState')
    const needFlux = used.has('binFlux') || used.has('binEnvelope') || used.has('binEnvelopeState') || used.has('binAttackTime')
    const needPhaseDeviation = used.has('binPhaseDeviation') || used.has('binPhasedeviation')
    const needEnvelope = used.has('binEnvelope') || used.has('binEnvelopeState')
    const needPhase = used.has('binPhase')
    const needAttackTime = used.has('binAttackTime')
    const needRms = used.has('globalRmsEnergy') || used.has('binRMSEnergy') || used.has('amplitude')
    const needCentroid = used.has('spectralCentroid')
    const needGlobalFlux = used.has('spectralFlux')
    const needFlatness = used.has('spectralFlatness')
    const needInharmonicity = used.has('inharmonicity')
    const needPeakAmplitude = used.has('peakAmplitude')
    const needZeroCrossingRate = used.has('zeroCrossingRate')
    const needSpectralRolloff = used.has('spectralRolloff')
    const needSpectralSpread = used.has('spectralSpread')
    const needSpectralSkewness = used.has('spectralSkewness')
    const needChromagram = used.has('chromagram')

    const calculatedInputs = new Set(alwaysCalculated)
    if (needRms) calculatedInputs.add('globalRmsEnergy')
    if (needCentroid) calculatedInputs.add('spectralCentroid')
    if (needGlobalFlux) calculatedInputs.add('spectralFlux')
    if (needFlatness) calculatedInputs.add('spectralFlatness')
    if (needInharmonicity) calculatedInputs.add('inharmonicity')
    if (needPeakAmplitude) calculatedInputs.add('peakAmplitude')
    if (needZeroCrossingRate) calculatedInputs.add('zeroCrossingRate')
    if (needSpectralRolloff) calculatedInputs.add('spectralRolloff')
    if (needSpectralSpread) calculatedInputs.add('spectralSpread')
    if (needSpectralSkewness) calculatedInputs.add('spectralSkewness')
    if (needChromagram) calculatedInputs.add('chromagram')
    if (needMagnitude) calculatedInputs.add('binMagnitude')
    if (needFlux) calculatedInputs.add('binFlux')
    if (needPhaseDeviation) calculatedInputs.add('binPhaseDeviation')
    if (needPhase) calculatedInputs.add('binPhase')
    if (needEnvelope) calculatedInputs.add('binEnvelope')
    if (needEnvelope) calculatedInputs.add('binEnvelopeState')
    if (needAttackTime) calculatedInputs.add('binAttackTime')
    if (needRms) calculatedInputs.add('binRMSEnergy')
    if (used.has('binFreq')) calculatedInputs.add('binFreq')

    return {
        used,
        calculatedInputs,
        worklet: {
            enabled: needMagnitude || needFlux || needPhaseDeviation || needEnvelope || needAttackTime || needPhase,
            needMagnitude,
            needFlux,
            needPhaseDeviation,
            needPhase,
            needEnvelope,
            needAttackTime,
        },
        engine: {
            needRms,
            needSpectralCentroid: needCentroid,
            needGlobalSpectralFlux: needGlobalFlux,
            needSpectralFlatness: needFlatness,
            needInharmonicity,
            needPeakAmplitude,
            needZeroCrossingRate,
            needSpectralRolloff,
            needSpectralSpread,
            needSpectralSkewness,
            needChromagram,
        },
        backend: {
            calc_fft: true,
            calc_magnitude: needMagnitude || needFlux || needCentroid || needFlatness || needGlobalFlux,
            calc_magnitude_dbfs: needMagnitude || needRms,
            calc_phase: needPhaseDeviation || needPhase,
            calc_phase_deviation: needPhaseDeviation,
            calc_local_spectral_flux: needFlux || needEnvelope,
            calc_envelope_state: needEnvelope,
            calc_rms_energy: needRms,
            calc_peak_amplitude: needPeakAmplitude,
            calc_zero_crossing_rate: needZeroCrossingRate,
            calc_spectral_centroid: needCentroid,
            calc_global_spectral_flux: needGlobalFlux,
            calc_spectral_flatness: needFlatness,
            calc_spectral_rolloff: needSpectralRolloff,
            calc_spectral_spread: needSpectralSpread,
            calc_spectral_skewness: needSpectralSkewness,
            calc_spectral_kurtosis: used.has('spectralKurtosis'),
            calc_mfcc: used.has('mfcc'),
            calc_chromagram: needChromagram,
        },
    }
}

function _normBoundsFromParams(snapshot = {}) {
    const dbToAmp = (db) => Math.pow(10, Number(db) / 20)
    return {
        scalar: {
            center_frequency_hz: {
                min_value: Number(snapshot.freqNormMin ?? 40),
                max_value: Number(snapshot.freqNormMax ?? 12000),
            },
            magnitude_dbfs: {
                min_value: Number(snapshot.binMagnitudeNormMin ?? -70),
                max_value: Number(snapshot.binMagnitudeNormMax ?? 0),
            },
            magnitude_linear: {
                min_value: dbToAmp(Number(snapshot.binMagnitudeNormMin ?? -70)),
                max_value: dbToAmp(Number(snapshot.binMagnitudeNormMax ?? 0)),
            },
            phase_deviation: {
                min_value: Number(snapshot.binPhaseDeviationNormMin ?? 0),
                max_value: Number(snapshot.binPhaseDeviationNormMax ?? Math.PI),
            },
            spectral_flux: {
                min_value: Number(snapshot.binFluxNormMin ?? 0),
                max_value: Number(snapshot.binFluxNormMax ?? 0.5),
            },
            rms_energy: {
                min_value: dbToAmp(Number(snapshot.globalRmsNormMin ?? -60)),
                max_value: dbToAmp(Number(snapshot.globalRmsNormMax ?? 0)),
            },
            spectral_centroid_hz: {
                min_value: Number(snapshot.spectralCentroidNormMin ?? 150),
                max_value: Number(snapshot.spectralCentroidNormMax ?? 8000),
            },
            global_spectral_flux: {
                min_value: Number(snapshot.globalSpectralFluxNormMin ?? 0),
                max_value: Number(snapshot.globalSpectralFluxNormMax ?? 100),
            },
            spectral_flatness: {
                min_value: Number(snapshot.spectralFlatnessNormMin ?? 0),
                max_value: Number(snapshot.spectralFlatnessNormMax ?? 1),
            },
        },
        vector: {},
    }
}

function _normalizeByRange(value, minValue, maxValue) {
    const lo = Number(minValue)
    const hi = Number(maxValue)
    const v = Number(value)
    if (!Number.isFinite(v) || !Number.isFinite(lo) || !Number.isFinite(hi) || hi <= lo) return 0
    return Math.max(0, Math.min(1, (v - lo) / (hi - lo)))
}

function _buildBackendAudioAnalysisConfig(snapshot = {}, requiredInputsByTarget = null) {
    const usage = _deriveAudioUsage(requiredInputsByTarget)
    const fftSize = snapFftSize(snapshot.fftSize)
    const cqtDetails = snapCqtDetailsPer10Octaves(snapshot.cqtDetailsPer10Octaves)
    return {
        sample_rate: 44100,
        fft_size: fftSize,
        hop_size: Math.max(64, Math.floor(fftSize / 4)),
        analysis_mode: 'cqt-multirate-goertzel',
        cqt_details_per_10_octaves: cqtDetails,
        rolloff_percent: 0.85,
        n_mfcc: 13,
        ...usage.backend,
        normalize_features: true,
        normalization_bounds: _normBoundsFromParams(snapshot),
    }
}

function _emitCalculatedRuleInputs(requiredInputsByTarget = null) {
    const usage = _deriveAudioUsage(requiredInputsByTarget)
    window.dispatchEvent(new CustomEvent('seesound:calculated-rule-inputs', {
        detail: {
            calculatedInputs: [...usage.calculatedInputs],
        },
    }))
}

_emitCalculatedRuleInputs(_initialCompileState?.requiredInputsByTarget)

window.addEventListener('seesound:particle-size-apply-all', (e) => {
    const oldDefaultSize = Number(e?.detail?.oldDefaultSize)
    const newDefaultSize = Number(e?.detail?.newDefaultSize)
    if (!Number.isFinite(oldDefaultSize) || !Number.isFinite(newDefaultSize) || oldDefaultSize <= 0 || newDefaultSize <= 0) return
    ps.scaleAllParticleSizes(newDefaultSize / oldDefaultSize)
})

// ─────────────────────────────────────────────────────────────────────────────
// § 3  AUDIO ENGINE
// ─────────────────────────────────────────────────────────────────────────────
const ae = new AudioEngine({
    initialFftSize: params.fftSize,
    initialCqtDetailsPer10Octaves: params.cqtDetailsPer10Octaves,
    snapFftSizeFn: snapFftSize,
    deriveAudioUsage: _deriveAudioUsage,
})
ae.setRuleInputUsage(_initialCompileState?.requiredInputsByTarget)
ae.setFluxWindowFrames(params.fluxWindowFrames)
ae.setCqtDetailsPer10Octaves(params.cqtDetailsPer10Octaves)

// ─────────────────────────────────────────────────────────────────────────────
// § 4  STATUS (BROWSER-ONLY MODE)
// ─────────────────────────────────────────────────────────────────────────────

const statusDot = document.getElementById('status-dot')
const statusText = document.getElementById('status-text')

function setStatus(state, text) {
    if (statusDot) statusDot.className = state
    if (statusText) statusText.textContent = text
}
setStatus('open', 'Browser mode')

// ─────────────────────────────────────────────────────────────────────────────
// § 5  HUD
// ─────────────────────────────────────────────────────────────────────────────

const cameraHud = document.createElement('div')
cameraHud.id = 'camera-hud'
cameraHud.style.position = 'fixed'
cameraHud.style.top = '8px'
cameraHud.style.left = '50%'
cameraHud.style.transform = 'translateX(-50%)'
cameraHud.style.zIndex = '220'
cameraHud.style.display = 'none'
cameraHud.style.alignItems = 'center'
cameraHud.style.gap = '6px'

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

let cameraHudEnabled = false

function emitCameraHudState() {
    window.dispatchEvent(new CustomEvent('seesound:camera-hud-state', {
        detail: { enabled: cameraHudEnabled },
    }))
}

function setCameraHudEnabled(nextEnabled) {
    cameraHudEnabled = !!nextEnabled
    cameraHud.style.display = cameraHudEnabled ? 'flex' : 'none'
    emitCameraHudState()
}

window.addEventListener('seesound:camera-hud-toggle', (e) => {
    const requested = e?.detail?.enabled
    if (typeof requested === 'boolean') {
        setCameraHudEnabled(requested)
    } else {
        setCameraHudEnabled(!cameraHudEnabled)
    }
})

cameraHud.append(cameraReadout)
const hudHost = document.getElementById('app') || document.body
if (hudHost) hudHost.appendChild(cameraHud)
setCameraHudEnabled(false)

// ─────────────────────────────────────────────────────────────────────────────
// § 6  ANIMATION LOOP
// ─────────────────────────────────────────────────────────────────────────────

let isPlaying = false
let frameN = 0
let monitorMuted = false
let _currentAudioFileName = ''
let _lastPerformanceDropSignalTs = 0

const platformConfig = {
    tier: 'free',
    maxExportResolution: Number.POSITIVE_INFINITY,
    canExportObj: true,
    canCloudRender: false,
}

function _emitToPlatform(type, payload = {}) {
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({
                source: 'seesound-engine',
                type,
                payload,
            }, '*')
        }
    } catch {
        // ignore cross-window messaging failures
    }
}

function _applyPlatformConfig(raw) {
    const cfg = (raw && typeof raw === 'object') ? raw : {}
    platformConfig.tier = String(cfg.tier || platformConfig.tier) === 'pro' ? 'pro' : 'free'
    const maxRes = Number(cfg.maxExportResolution)
    platformConfig.maxExportResolution = Number.isFinite(maxRes) && maxRes > 0
        ? Math.floor(maxRes)
        : Number.POSITIVE_INFINITY
    if (typeof cfg.canExportObj === 'boolean') {
        platformConfig.canExportObj = cfg.canExportObj
    }
    platformConfig.canCloudRender = !!cfg.canCloudRender
}

window.addEventListener('message', (event) => {
    const data = event?.data
    if (!data || typeof data !== 'object') return
    if (data.source !== 'seesound-platform' || data.type !== 'platform:config') return
    _applyPlatformConfig(data.payload)
})
_emitToPlatform('engine:ready')

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

const exportManager = new ExportManager({
    getCamera: () => camera,
    renderer,
    canvas,
    scene,
    ps,
    params,
    platformConfig,
    emitToPlatform: _emitToPlatform,
    ae,
    triggerBlobDownload,
    shouldUsePostProcessing,
    getCurrentAudioTitle: _currentAudioTitle,
    getCurrentPresetTitle: _currentPresetTitle,
    sanitizeFilePart: _sanitizeFilePart,
})

function _defaultProjectName() {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return `seesound-project-${stamp}${PROJECT_FILE_EXTENSION}`
}

function _defaultProjectPackageName() {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return `seesound-project-package-${stamp}${PROJECT_PACKAGE_EXTENSION}`
}

function getDefaultProjectDefinition() {
    return {
        fileName: 'New Project.ssp',
        presetName: 'default',
        params: getSnapshot(),
        presetLibrary: [],
    }
}

async function saveCanvasPng({ transparent = false } = {}) {
    return exportManager.saveCanvasPng({ transparent })
}

async function saveSceneObj() {
    return exportManager.saveSceneObj()
}

function emitMuteState(playerEl, muted) {
    playerEl.dispatchEvent(new CustomEvent('player:mute-state', {
        detail: { muted: !!muted }, bubbles: false,
    }))
}

function emitRecordState(playerEl, running) {
    playerEl.dispatchEvent(new CustomEvent('player:recordvideo-state', {
        detail: { running }, bubbles: false,
    }))
}

async function startVideoRecording(playerEl, audioEl) {
    return exportManager.startVideoRecording(playerEl, audioEl)
}

function stopVideoRecording(playerEl) {
    exportManager.stopVideoRecording(playerEl)
}

function getCameraCanvasUnits() {
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

    const halfW = canvW * 0.5
    const halfH = canvH * 0.5
    return {
        w: canvW,
        h: canvH,
        left: orbitTarget.x - halfW,
        right: orbitTarget.x + halfW,
        top: orbitTarget.y + halfH,
        bottom: orbitTarget.y - halfH,
    }
}

function animate() {
    requestAnimationFrame(animate)
    frameN++

    if ((frameN % 120) === 0) {
        const fps = Number(ps?.getApproxFps?.() || 0)
        if (fps > 0 && fps < 24) {
            const now = performance.now()
            if ((now - _lastPerformanceDropSignalTs) > 15000) {
                _lastPerformanceDropSignalTs = now
                _emitToPlatform('engine:performance-drop', {
                    fps,
                    canCloudRender: !!platformConfig.canCloudRender,
                })
            }
        }
    }

    ae.update()
    const isActuallyPlaying = !!(ae.audioEl && !ae.audioEl.paused && !ae.audioEl.ended)
    if (isActuallyPlaying !== isPlaying) isPlaying = isActuallyPlaying
    if (isActuallyPlaying && !ae.analyser && ae.audioEl) ae.init(ae.audioEl)
    if (isActuallyPlaying) {
        const w = renderer.domElement.width / window.devicePixelRatio
        const h = renderer.domElement.height / window.devicePixelRatio
        const cameraUnits = getCameraCanvasUnits()
        const updateParams = {
            ...params,
            cameraState: {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z,
                zoom: camera.zoom,
            },
            cameraCanvasWidthUnits: cameraUnits.w,
            cameraCanvasHeightUnits: cameraUnits.h,
        }
        ps.update(ae, updateParams, w, h)
        applyRuleCameraOutput(ps.getCameraOutput())
        const binMagnitudeArr = ae.getBinMagnitude?.() || null
        const binFluxArr = ae.getBinFlux?.() || null
        const binPhaseDeviationArr = ae.getBinPhaseDeviation?.() || null
        const binPhaseArr = ae.getBinPhase?.() || null
        const binAttackTimeArr = ae.getBinAttackTime?.() || null
        const binEnvelopeArr = ae.getBinEnvelope?.() || null
        const peakFreqHz = ae.peakFreq ?? 0
        const nyquist = ae.ctx?.sampleRate ? ae.ctx.sampleRate * 0.5 : 22050
        const normGlobalRms = _normalizeByRange(ae.rmsDbfs, params.globalRmsNormMin ?? -60, params.globalRmsNormMax ?? 0)
        const normSpectralCentroid = _normalizeByRange(ae.spectralCentroidHz, params.spectralCentroidNormMin ?? 150, params.spectralCentroidNormMax ?? 8000)
        const normSpectralFlux = _normalizeByRange(ae.spectralFluxAU, params.globalSpectralFluxNormMin ?? 0, params.globalSpectralFluxNormMax ?? 100)
        const normSpectralFlatness = _normalizeByRange(ae.spectralFlatnessRatio, params.spectralFlatnessNormMin ?? 0, params.spectralFlatnessNormMax ?? 1)
        const _averageNormalized = (arr, mapFn) => {
            if (!arr || !arr.length) return 0
            let sum = 0
            for (let i = 0; i < arr.length; i++) sum += mapFn(arr[i])
            return sum / arr.length
        }
        const normBinMagnitude = _averageNormalized(
            binMagnitudeArr,
            (v) => _normalizeByRange(v, params.binMagnitudeNormMin ?? -70, params.binMagnitudeNormMax ?? 0)
        )
        const normBinFlux = _averageNormalized(
            binFluxArr,
            (v) => _normalizeByRange(v, params.binFluxNormMin ?? 0, params.binFluxNormMax ?? 0.5)
        )
        const normBinPhaseDeviation = _averageNormalized(
            binPhaseDeviationArr,
            (v) => _normalizeByRange(v, params.binPhaseDeviationNormMin ?? 0, params.binPhaseDeviationNormMax ?? Math.PI)
        )
        const normBinPhase = _averageNormalized(binPhaseArr, (v) => _normalizeByRange(v, -Math.PI, Math.PI))
        const normBinAttackTime = _averageNormalized(
            binAttackTimeArr,
            (v) => _normalizeByRange(v, params.binAttackTimeNormMin ?? 5, params.binAttackTimeNormMax ?? 500)
        )
        const normBinEnvelope = _averageNormalized(binEnvelopeArr, (v) => _normalizeByRange(v, 0, 3))
        window.dispatchEvent(new CustomEvent('seesound:rule-probe', {
            detail: {
                inputs: {
                    amplitude: normGlobalRms,
                    globalRmsEnergy: normGlobalRms,
                    binEnergy: normBinMagnitude,
                    frequencyHz: peakFreqHz,
                    normFreq: Math.max(0, Math.min(1, peakFreqHz / Math.max(1e-6, nyquist))),
                    bass: ae.bass ?? 0,
                    mid: ae.mid ?? 0,
                    high: ae.high ?? 0,
                    peakFreq: peakFreqHz,
                    pan: ae.pan ?? 0,
                    spectralCentroid: normSpectralCentroid,
                    spectralFlux: normSpectralFlux,
                    spectralFlatness: normSpectralFlatness,
                    inharmonicity: ae.inharmonicity ?? 0,
                    peakAmplitude: ae.peakAmplitude ?? 0,
                    zeroCrossingRate: ae.zeroCrossingRate ?? 0,
                    spectralRolloff: ae.spectralRolloff ?? 0,
                    spectralSpread: ae.spectralSpread ?? 0,
                    spectralSkewness: ae.spectralSkewness ?? 0,
                    chromagram: ae.chromagram ?? 0,
                    binMagnitude: normBinMagnitude,
                    binFreq: peakFreqHz,
                    binPhase: normBinPhase,
                    binFlux: normBinFlux,
                    binPhaseDeviation: normBinPhaseDeviation,
                    binAttackTime: normBinAttackTime,
                    binEnvelope: normBinEnvelope,
                    binEnvelopeState: normBinEnvelope,
                    binRMSEnergy: normGlobalRms,
                    time: ae.audioEl?.currentTime ?? 0,
                    deltaTime: 1 / 60,
                    canvasWidthPx: w,
                    canvasHeightPx: h,
                    canvasWidthUnits: cameraUnits.w,
                    canvasHeightUnits: cameraUnits.h,
                    audioLengthSec: ae.audioEl?.duration ?? 0,
                },
            },
        }))
    }

    const bg = ps.getBackgroundColor()
    renderer.setClearColor(bg, 1)
    ps.setViewportHeight(renderer.domElement.height)

    if (shouldUsePostProcessing()) {
        composer.render()
    } else {
        renderer.render(scene, camera)
    }

    // HUD update ~10 fps
    if (cameraHudEnabled && frameN % 6 === 0) {
        const rx = (camera.rotation.x * 180 / Math.PI).toFixed(2)
        const ry = (camera.rotation.y * 180 / Math.PI).toFixed(2)
        const rz = (camera.rotation.z * 180 / Math.PI).toFixed(2)
        const px = camera.position.x.toFixed(2)
        const py = camera.position.y.toFixed(2)
        const pz = camera.position.z.toFixed(2)
        const lineCount = Math.max(0, Number(ps.getLineVisibleCount?.() ?? 0))
        const lineSegment = lineCount > 0 ? ` lines ${lineCount}` : ''
        const cameraUnits = getCameraCanvasUnits()
        const canvW = cameraUnits.w
        const canvH = cameraUnits.h
        cameraReadout.textContent = `cam p(${px},${py},${pz}) r(${rx},${ry},${rz}) pts ${ps.getVisibleCount()}${lineSegment} fft ${ae.peakByte} amp ${ae.amplitude.toFixed(3)} sc ${ae.spectralCentroid.toFixed(3)} sf ${ae.spectralFlux.toFixed(3)} sfl ${ae.spectralFlatness.toFixed(3)} inh ${ae.inharmonicity.toFixed(3)} canv ${canvW.toFixed(2)} × ${canvH.toFixed(2)} origin ${ORIGIN_SIGN_SIZE}u ${originSignEnabled ? 'on' : 'off'}`
    }
}
animate()

// ─────────────────────────────────────────────────────────────────────────────
// § 7  MODULE WIRING
// ─────────────────────────────────────────────────────────────────────────────

// ── 7a  Audio Player (bottom overlay) ────────────────────────────────────────
{
    const playerEl = document.getElementById('audio-player')
    const { audioEl, loadFile } = initAudioPlayer(playerEl)
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
        ae.init(audioEl)
        ae.setMonitorMuted(monitorMuted)
        if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    })
    playerEl.addEventListener('player:play', () => { isPlaying = true })
    playerEl.addEventListener('player:pause', () => { isPlaying = false })
    playerEl.addEventListener('player:stop', () => { isPlaying = false })
    playerEl.addEventListener('player:savepng', async () => {
        await saveCanvasPng()
    })
    playerEl.addEventListener('player:mute-toggle', async () => {
        monitorMuted = !monitorMuted
        ae.setMonitorMuted(monitorMuted)
        emitMuteState(playerEl, monitorMuted)
        if (!audioEl.paused) {
            ae.init(audioEl)
            if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
        }
    })
    playerEl.addEventListener('player:recordvideo-toggle', async () => {
        if (exportManager.isRecording()) {
            stopVideoRecording(playerEl)
            return
        }
        try {
            await startVideoRecording(playerEl, audioEl)
        } catch (err) {
            console.warn('[Recorder] start failed:', err)
            alert('Failed to start recording.')
            emitRecordState(playerEl, false)
        }
    })
    playerEl.addEventListener('player:playbackrate', (e) => {
        const next = Number(e?.detail?.rate)
        if (!Number.isFinite(next)) return
        audioEl.playbackRate = Math.max(0.25, Math.min(4, next))
    })
    playerEl.addEventListener('player:fileloaded', (e) => {
        const file = e?.detail?.file
        loadedAudioFile = file instanceof File ? file : null
        _currentAudioFileName = loadedAudioFile?.name || ''
        if (loadedAudioFile) {
            void _saveAudioFileToDb(loadedAudioFile)
        }
        _scheduleLocalProjectDraftSave()
    })
    emitMuteState(playerEl, monitorMuted)

    let projectFileHandle = null
    let projectFileName = ''
    let projectAutoSaveTimer = null
    let projectLoadInProgress = false
    let projectLocalSaveTimer = null
    let pendingRecoveryDraft = null

    const LOCAL_PROJECT_DRAFT_KEY = 'seesound_project_draft_v1'
    const AUDIO_DB_NAME = 'seesound_local_audio_v1'
    const AUDIO_DB_STORE = 'files'
    const AUDIO_DB_KEY = 'last-audio'

    const _openAudioDb = () => new Promise((resolve, reject) => {
        try {
            const req = indexedDB.open(AUDIO_DB_NAME, 1)
            req.onupgradeneeded = () => {
                const db = req.result
                if (!db.objectStoreNames.contains(AUDIO_DB_STORE)) db.createObjectStore(AUDIO_DB_STORE)
            }
            req.onsuccess = () => resolve(req.result)
            req.onerror = () => reject(req.error)
        } catch (err) {
            reject(err)
        }
    })

    const _saveAudioFileToDb = async (file) => {
        if (!(file instanceof File)) return
        const db = await _openAudioDb()
        await new Promise((resolve, reject) => {
            const tx = db.transaction(AUDIO_DB_STORE, 'readwrite')
            const store = tx.objectStore(AUDIO_DB_STORE)
            store.put({
                blob: file,
                name: file.name,
                type: file.type || 'audio/*',
                updatedAt: Date.now(),
            }, AUDIO_DB_KEY)
            tx.oncomplete = () => resolve()
            tx.onerror = () => reject(tx.error)
        })
        db.close()
    }

    const _loadAudioFileFromDb = async () => {
        const db = await _openAudioDb()
        const value = await new Promise((resolve, reject) => {
            const tx = db.transaction(AUDIO_DB_STORE, 'readonly')
            const store = tx.objectStore(AUDIO_DB_STORE)
            const req = store.get(AUDIO_DB_KEY)
            req.onsuccess = () => resolve(req.result || null)
            req.onerror = () => reject(req.error)
        })
        db.close()
        if (!value || !(value.blob instanceof Blob)) return null
        return new File([value.blob], String(value.name || 'restored-audio.wav'), {
            type: String(value.type || 'audio/*'),
            lastModified: Number(value.updatedAt || Date.now()),
        })
    }

    const _buildDefaultProjectPayload = () => {
        const defaults = getDefaultProjectDefinition()
        return buildProjectPayload({
            params: defaults.params,
            presetName: defaults.presetName,
            presetLibrary: defaults.presetLibrary,
            projectName: _nameWithoutExt(defaults.fileName),
        })
    }

    const emitProjectFileState = () => {
        window.dispatchEvent(new CustomEvent('seesound:project-file-state', {
            detail: { fileName: String(projectFileName || '').trim() },
        }))
    }

    const _collectPresetLibrary = async () => {
        const names = await listPresets()
        const out = []
        for (const name of names) {
            const data = await loadPreset(name)
            if (!data?.params || typeof data.params !== 'object') continue
            out.push({ name: String(name || ''), params: data.params })
        }
        return out
    }

    const _ensureAtLeastOnePreset = async () => {
        const names = await listPresets()
        const normal = names.filter((name) => !String(name || '').startsWith('rule__'))
        if (normal.length > 0) return
        const defaults = getDefaultProjectDefinition()
        if (defaults.presetLibrary.length > 0) {
            await _restorePresetLibrary(defaults.presetLibrary)
            return
        }
        await savePreset('default', getSnapshot())
        window.dispatchEvent(new CustomEvent('seesound:preset-library-changed'))
    }

    const _restorePresetLibrary = async (presetLibrary) => {
        if (!Array.isArray(presetLibrary)) return
        for (const entry of presetLibrary) {
            const name = String(entry?.name || '').trim()
            const presetParams = entry?.params
            if (!name || !presetParams || typeof presetParams !== 'object') continue
            await savePreset(name, presetParams)
        }
        window.dispatchEvent(new CustomEvent('seesound:preset-library-changed'))
    }

    const _replacePresetLibrary = async (presetLibrary) => {
        // Keep factory presets visible; import project presets additively.
        await _restorePresetLibrary(presetLibrary)
    }

    const _writeProjectToHandle = async (handle, payload) => {
        const handleName = String(handle?.name || projectFileName || '').trim().toLowerCase()
        const includeAudio = handleName.endsWith(PROJECT_PACKAGE_EXTENSION)
        const thumbnailBlob = await _captureProjectThumbnailBlob()
        const projectBlob = await buildProjectPackageBlob({
            payload,
            projectName: _nameWithoutExt(projectFileName || _defaultProjectName()),
            audioFile: includeAudio && loadedAudioFile instanceof File ? loadedAudioFile : null,
            thumbnailBlob,
        })
        const writable = await handle.createWritable()
        await writable.write(projectBlob)
        await writable.close()
    }

    const _buildCurrentProjectPayload = async () => {
        const snapshot = getSnapshot()
        const presetLibrary = await _collectPresetLibrary()
        const title = _currentPresetTitle()
        return buildProjectPayload({
            params: snapshot,
            presetName: title,
            presetLibrary,
            projectName: _nameWithoutExt(projectFileName || _defaultProjectName()),
        })
    }

    const _captureProjectThumbnailBlob = async () => {
        const sourceCanvas = renderer?.domElement
        if (!(sourceCanvas instanceof HTMLCanvasElement)) return null
        if (typeof sourceCanvas.toBlob !== 'function') return null
        return new Promise((resolve) => {
            sourceCanvas.toBlob((blob) => resolve(blob || null), 'image/png')
        })
    }

    const _downloadProjectBundle = async ({ payload, fileName, includeAudio = false } = {}) => {
        const safePayload = payload && typeof payload === 'object'
            ? payload
            : await _buildCurrentProjectPayload()
        const thumbnailBlob = await _captureProjectThumbnailBlob()
        const packageBlob = await buildProjectPackageBlob({
            payload: safePayload,
            projectName: _nameWithoutExt(projectFileName || fileName),
            audioFile: includeAudio && loadedAudioFile instanceof File ? loadedAudioFile : null,
            thumbnailBlob,
        })
        triggerBlobDownload(packageBlob, String(fileName || _defaultProjectName()))
    }

    const _createDemoToneFile = () => {
        const sampleRate = 22050
        const durationSec = 7
        const frameCount = Math.max(1, Math.floor(sampleRate * durationSec))
        const dataBytes = frameCount * 2
        const buffer = new ArrayBuffer(44 + dataBytes)
        const view = new DataView(buffer)

        const writeString = (offset, text) => {
            for (let i = 0; i < text.length; i += 1) {
                view.setUint8(offset + i, text.charCodeAt(i))
            }
        }

        writeString(0, 'RIFF')
        view.setUint32(4, 36 + dataBytes, true)
        writeString(8, 'WAVE')
        writeString(12, 'fmt ')
        view.setUint32(16, 16, true)
        view.setUint16(20, 1, true)
        view.setUint16(22, 1, true)
        view.setUint32(24, sampleRate, true)
        view.setUint32(28, sampleRate * 2, true)
        view.setUint16(32, 2, true)
        view.setUint16(34, 16, true)
        writeString(36, 'data')
        view.setUint32(40, dataBytes, true)

        const fadeLength = Math.floor(sampleRate * 0.12)
        for (let i = 0; i < frameCount; i += 1) {
            const t = i / sampleRate
            const freqA = 164.81
            const freqB = 246.94
            const blend = 0.5 + 0.5 * Math.sin(2 * Math.PI * 0.22 * t)
            const wave = ((1 - blend) * Math.sin(2 * Math.PI * freqA * t)) + (blend * Math.sin(2 * Math.PI * freqB * t))
            const attack = i < fadeLength ? (i / Math.max(1, fadeLength)) : 1
            const release = i > frameCount - fadeLength ? ((frameCount - i) / Math.max(1, fadeLength)) : 1
            const sample = Math.max(-1, Math.min(1, wave * 0.28 * attack * release))
            view.setInt16(44 + (i * 2), Math.round(sample * 32767), true)
        }

        return new File([buffer], 'seesound-template-demo.wav', {
            type: 'audio/wav',
            lastModified: Date.now(),
        })
    }

    const _ensureTemplateAudioFallback = async (detail = {}) => {
        if (loadedAudioFile instanceof File) return

        const demoAudioPath = String(detail?.demoAudioPath || '').trim()
        if (demoAudioPath) {
            try {
                const response = await fetch(demoAudioPath, { cache: 'no-store' })
                if (response.ok) {
                    const blob = await response.blob()
                    const fileName = demoAudioPath.split('/').pop() || 'template-demo-audio.wav'
                    const audioFile = new File([blob], fileName, {
                        type: blob.type || 'audio/*',
                        lastModified: Date.now(),
                    })
                    if (loadFile(audioFile, audioFile.name)) return
                }
            } catch {
                // fallback to generated tone below
            }
        }

        const fallbackTone = _createDemoToneFile()
        loadFile(fallbackTone, fallbackTone.name)
    }

    const _loadFactoryTemplateFromDetail = async (detail = {}) => {
        const template = (detail && typeof detail === 'object') ? detail : {}
        const templateTitle = String(template.title || template.id || template.presetName || UI_TEXT?.file?.projectNew || 'New Project').trim()

        try {
            if (template.projectPath) {
                const response = await fetch(String(template.projectPath), { cache: 'no-store' })
                if (!response.ok) return false
                const blob = await response.blob()
                const sourceName = String(template.projectPath).split('/').pop() || `${templateTitle}${PROJECT_FILE_EXTENSION}`
                const sourceFile = new File([blob], sourceName, {
                    type: blob.type || 'application/octet-stream',
                    lastModified: Date.now(),
                })
                const parsed = await parseProjectFile(sourceFile)

                projectFileHandle = null
                projectFileName = String(sourceFile.name || `${_sanitizeFilePart(templateTitle, 'Template')}${PROJECT_FILE_EXTENSION}`).trim()
                await loadProjectFromPayload(parsed.payload)
                emitProjectFileState()

                if (!(loadedAudioFile instanceof File) && parsed.audioFile instanceof File) {
                    loadFile(parsed.audioFile, parsed.audioFile.name)
                } else {
                    await _ensureTemplateAudioFallback(template)
                }

                return true
            }

            const presetPath = String(template.presetPath || '').trim()
            if (presetPath) {
                const response = await fetch(presetPath, { cache: 'no-store' })
                if (!response.ok) return false

                const parsed = await response.json()
                const presetParams = (parsed?.params && typeof parsed.params === 'object')
                    ? parsed.params
                    : ((parsed && typeof parsed === 'object') ? parsed : null)
                if (!presetParams) return false

                // Apply template params/rules as one patch so a single Undo restores previous state.
                setMany(presetParams)
                await _ensureTemplateAudioFallback(template)
                return true
            }

            const presetName = String(template.presetName || '').trim()
            if (!presetName) return false
            const preset = await loadPreset(presetName)
            if (!preset?.params || typeof preset.params !== 'object') return false

            const payload = buildProjectPayload({
                params: preset.params,
                presetName,
                presetLibrary: [],
                projectName: templateTitle,
            })

            projectFileHandle = null
            projectFileName = `${_sanitizeFilePart(templateTitle, 'Template')}${PROJECT_FILE_EXTENSION}`
            await loadProjectFromPayload(payload)
            emitProjectFileState()
            await _ensureTemplateAudioFallback(template)
            return true
        } catch (err) {
            console.warn('[Template] load failed:', err)
            return false
        }
    }

    const _saveLocalProjectDraft = async () => {
        if (projectLoadInProgress) return
        try {
            const payload = await _buildCurrentProjectPayload()
            const draft = {
                payload,
                fileName: String(projectFileName || '').trim(),
                hasBoundFile: !!projectFileHandle,
                updatedAt: Date.now(),
                hasAudio: loadedAudioFile instanceof File,
            }
            localStorage.setItem(LOCAL_PROJECT_DRAFT_KEY, JSON.stringify(draft))
        } catch (err) {
            console.warn('[Project] local draft save failed:', err)
        }
    }

    const _scheduleLocalProjectDraftSave = () => {
        if (projectLoadInProgress) return
        if (projectLocalSaveTimer) clearTimeout(projectLocalSaveTimer)
        projectLocalSaveTimer = setTimeout(async () => {
            projectLocalSaveTimer = null
            await _saveLocalProjectDraft()
        }, 500)
    }

    const _readLocalProjectDraftIfAny = () => {
        try {
            const raw = localStorage.getItem(LOCAL_PROJECT_DRAFT_KEY)
            if (!raw) return null
            const parsed = JSON.parse(raw)
            const payload = parsed?.payload
            if (!payload || typeof payload !== 'object') return null
            return parsed
        } catch (err) {
            console.warn('[Project] local draft read failed:', err)
            return null
        }
    }

    const _applyRecoveredLocalDraft = async (draft) => {
        const parsed = (draft && typeof draft === 'object') ? draft : null
        if (!parsed?.payload || typeof parsed.payload !== 'object') return false
        try {
            projectFileHandle = null
            projectFileName = String(parsed?.fileName || getDefaultProjectDefinition().fileName || '').trim()
            emitProjectFileState()
            await loadProjectFromPayload(parsed.payload)

            if (parsed?.hasAudio) {
                const restoredAudio = await _loadAudioFileFromDb()
                if (restoredAudio) {
                    loadFile(restoredAudio, restoredAudio.name)
                }
            }

            pendingRecoveryDraft = null
            window.dispatchEvent(new CustomEvent('seesound:project-recovery-resolved'))
            return true
        } catch (err) {
            console.warn('[Project] local draft restore failed:', err)
            return false
        }
    }

    const saveProject = async () => {
        if (!projectFileHandle) return false
        try {
            const payload = await _buildCurrentProjectPayload()
            await _writeProjectToHandle(projectFileHandle, payload)
            window.dispatchEvent(new CustomEvent('seesound:project-autosaved', {
                detail: { fileName: projectFileName || _defaultProjectName() },
            }))
            emitProjectFileState()
            _scheduleLocalProjectDraftSave()
            return true
        } catch (err) {
            console.warn('[Project] save failed:', err)
            return false
        }
    }

    const _pickProjectFileWithInput = async () => {
        if (typeof document === 'undefined') return null
        return new Promise((resolve) => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = `${PROJECT_FILE_EXTENSION},${PROJECT_PACKAGE_EXTENSION},.json,application/json,application/zip`
            input.style.display = 'none'
            document.body.appendChild(input)

            let settled = false
            const cleanup = () => {
                input.removeEventListener('change', onChange)
                window.removeEventListener('focus', onFocus, true)
                if (input.parentNode) input.parentNode.removeChild(input)
            }
            const finish = (file) => {
                if (settled) return
                settled = true
                cleanup()
                resolve(file || null)
            }
            const onChange = () => {
                const picked = input.files?.[0] || null
                finish(picked)
            }
            const onFocus = () => {
                setTimeout(() => {
                    if (!settled && !(input.files && input.files.length)) finish(null)
                }, 300)
            }

            input.addEventListener('change', onChange, { once: true })
            window.addEventListener('focus', onFocus, true)
            input.click()
        })
    }

    const exportSettingsJson = async () => {
        const snapshot = getSnapshot()
        const presetName = String(_currentPresetTitle() || '').trim() || 'settings'
        const safeName = _sanitizeFilePart(presetName, 'settings')
        const payload = {
            exportedAt: new Date().toISOString(),
            presetName,
            params: snapshot,
        }
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
        triggerBlobDownload(blob, `${safeName}.json`)
        return true
    }

    const exportProjectAs = async (format = 'project-package') => {
        const target = String(format || 'project-package')
        const payload = await _buildCurrentProjectPayload()

        if (target === 'png') {
            await saveCanvasPng({ transparent: false })
            return true
        }

        if (target === 'png-transparent') {
            await saveCanvasPng({ transparent: true })
            return true
        }

        if (target === 'obj') {
            await saveSceneObj()
            return true
        }

        if (target === 'settings-json') {
            return exportSettingsJson()
        }

        if (target === 'project-file') {
            const suggestedName = String(projectFileName || '').toLowerCase().endsWith(PROJECT_FILE_EXTENSION)
                ? projectFileName
                : _defaultProjectName()
            await _downloadProjectBundle({
                payload,
                fileName: suggestedName,
                includeAudio: false,
            })
            _scheduleLocalProjectDraftSave()
            return true
        }

        if (target === 'project-package') {
            const suggestedName = String(projectFileName || '').toLowerCase().endsWith(PROJECT_PACKAGE_EXTENSION)
                ? projectFileName
                : _defaultProjectPackageName()
            await _downloadProjectBundle({
                payload,
                fileName: suggestedName,
                includeAudio: true,
            })
            _scheduleLocalProjectDraftSave()
            return true
        }

        const suggestedName = String(projectFileName || '').toLowerCase().endsWith(PROJECT_FILE_EXTENSION)
            ? projectFileName
            : _defaultProjectName()
        await _downloadProjectBundle({
            payload,
            fileName: suggestedName,
            includeAudio: false,
        })
        _scheduleLocalProjectDraftSave()
        return true
    }

    const scheduleProjectAutosave = () => {
        if (!projectFileHandle || projectLoadInProgress) return
        if (projectAutoSaveTimer) clearTimeout(projectAutoSaveTimer)
        projectAutoSaveTimer = setTimeout(async () => {
            projectAutoSaveTimer = null
            await saveProject()
        }, 450)
    }

    const loadProjectFromPayload = async (payload) => {
        try {
            projectLoadInProgress = true
            if (payload.params && typeof payload.params === 'object') {
                setMany(payload.params)
            }
            if (Array.isArray(payload.presetLibrary)) {
                await _replacePresetLibrary(payload.presetLibrary)
            }
            await _ensureAtLeastOnePreset()
            window.dispatchEvent(new CustomEvent('seesound:project-loaded', {
                detail: {
                    fileName: projectFileName,
                    presetName: String(payload?.presetName || ''),
                },
            }))
        } catch (err) {
            console.warn('[Project] load failed:', err)
        } finally {
            projectLoadInProgress = false
            _scheduleLocalProjectDraftSave()
        }
    }

    const openProjectWithPicker = async () => {
        try {
            let handle = null
            let file = null
            if (typeof window.showOpenFilePicker === 'function') {
                const picked = await window.showOpenFilePicker({
                    multiple: false,
                    excludeAcceptAllOption: false,
                    types: [{
                        description: 'SEESOUND Project',
                        accept: {
                            'application/json': [PROJECT_FILE_EXTENSION, '.json'],
                            'application/zip': [PROJECT_PACKAGE_EXTENSION],
                        },
                    }],
                })
                handle = picked?.[0] || null
                if (!handle) return false
                file = await handle.getFile()
            } else {
                file = await _pickProjectFileWithInput()
                if (!(file instanceof File)) return false
            }

            const parsed = await parseProjectFile(file)
            projectFileHandle = handle
            projectFileName = String(file.name || '').trim()
            await loadProjectFromPayload(parsed.payload)
            emitProjectFileState()

            if (parsed.audioFile instanceof File) {
                loadFile(parsed.audioFile, parsed.audioFile.name)
            }

            return true
        } catch (err) {
            if (err?.name === 'AbortError') return false
            console.warn('[Project] open failed:', err)
            alert('Failed to open project file.')
            return false
        }
    }

    const createNewProjectWithPicker = async (suggested = '', resetState = true) => {
        if (typeof window.showSaveFilePicker !== 'function') {
            if (resetState) {
                const defaults = getDefaultProjectDefinition()
                setMany(defaults.params)
                await _replacePresetLibrary(defaults.presetLibrary)
            }
            projectFileHandle = null
            projectFileName = String(suggested || getDefaultProjectDefinition().fileName || '').trim() || _defaultProjectName()
            emitProjectFileState()
            _scheduleLocalProjectDraftSave()
            return true
        }
        try {
            const suggestedName = String(suggested || '').trim() || _defaultProjectName()
            const handle = await window.showSaveFilePicker({
                suggestedName,
                types: [{
                    description: 'SEESOUND Project',
                    accept: { 'application/json': [PROJECT_FILE_EXTENSION] },
                }],
            })
            if (!handle) return false

            if (resetState) {
                const defaults = getDefaultProjectDefinition()
                setMany(defaults.params)
                await _replacePresetLibrary(defaults.presetLibrary)
            }

            projectFileHandle = handle
            projectFileName = String(handle.name || suggestedName).trim()
            await saveProject()
            emitProjectFileState()
            _scheduleLocalProjectDraftSave()
            return true
        } catch {
            return false
        }
    }

    const saveProjectAsWithPicker = async (suggested = '') => {
        if (typeof window.showSaveFilePicker !== 'function') return false
        try {
            const suggestedName = String(suggested || '').trim() || _defaultProjectName()
            const handle = await window.showSaveFilePicker({
                suggestedName,
                types: [{
                    description: 'SEESOUND Project',
                    accept: { 'application/json': [PROJECT_FILE_EXTENSION] },
                }],
            })
            if (!handle) return false
            projectFileHandle = handle
            projectFileName = String(handle.name || suggestedName).trim()
            await saveProject()
            emitProjectFileState()
            return true
        } catch {
            return false
        }
    }

    playerEl.addEventListener('player:saveproject', async () => {
        if (projectFileHandle) {
            await saveProject()
            return
        }
        alert('Use Save As first to choose where this project should be saved.')
    })
    playerEl.addEventListener('player:loadproject', async (e) => {
        await loadProjectFromPayload(e?.detail?.payload || {})
    })

    window.addEventListener('seesound:project-save-request', async () => {
        if (projectFileHandle) {
            await saveProject()
            return
        }
        alert('Use Save As first to choose where this project should be saved.')
    })
    window.addEventListener('seesound:project-save-as-request', async () => {
        const suggested = String(projectFileName || '').trim() || _defaultProjectName()
        await saveProjectAsWithPicker(suggested)
    })
    window.addEventListener('seesound:project-export-request', async (e) => {
        const format = String(e?.detail?.format || 'project-package')
        await exportProjectAs(format)
    })
    window.addEventListener('seesound:project-load-request', async (e) => {
        const detail = e?.detail || {}
        const incomingName = String(detail.fileName || '').trim()
        if (incomingName) {
            projectFileName = incomingName
            emitProjectFileState()
        }
        await loadProjectFromPayload(detail.payload || {})
        if (!projectFileHandle && typeof window.showSaveFilePicker === 'function') {
            const shouldAttach = window.confirm('Attach this project to an autosave file now?')
            if (shouldAttach) {
                await createNewProjectWithPicker(String(detail.fileName || _defaultProjectName()), false)
            }
        }
    })
    window.addEventListener('seesound:project-open-request', async () => {
        await openProjectWithPicker()
    })
    window.addEventListener('seesound:project-new-request', async () => {
        projectLoadInProgress = true
        try {
            resetToDefaults()
            await _ensureAtLeastOnePreset()
            projectFileHandle = null
            projectFileName = String(getDefaultProjectDefinition().fileName || `New Project${PROJECT_FILE_EXTENSION}`).trim()
            pendingRecoveryDraft = null
            try { localStorage.removeItem(LOCAL_PROJECT_DRAFT_KEY) } catch { }
            emitProjectFileState()
            window.dispatchEvent(new CustomEvent('seesound:project-loaded', {
                detail: {
                    fileName: projectFileName,
                    presetName: 'default',
                },
            }))
            window.dispatchEvent(new CustomEvent('seesound:project-recovery-resolved'))
        } finally {
            projectLoadInProgress = false
            _scheduleLocalProjectDraftSave()
        }
    })
    window.addEventListener('seesound:factory-template-load-request', async (e) => {
        await _loadFactoryTemplateFromDetail(e?.detail || {})
    })
    window.addEventListener('seesound:project-recovery-restore', async () => {
        if (!pendingRecoveryDraft) return
        await _applyRecoveredLocalDraft(pendingRecoveryDraft)
    })
    window.addEventListener('seesound:project-recovery-dismiss', () => {
        pendingRecoveryDraft = null
        try { localStorage.removeItem(LOCAL_PROJECT_DRAFT_KEY) } catch { }
        window.dispatchEvent(new CustomEvent('seesound:project-recovery-resolved'))
    })
    window.addEventListener('seesound:preset-library-changed', () => {
        scheduleProjectAutosave()
        _scheduleLocalProjectDraftSave()
    })

    subscribe((_, key) => {
        if (!key || key === '*' || projectLoadInProgress) return
        scheduleProjectAutosave()
        _scheduleLocalProjectDraftSave()
    })

    const bootstrapDefaultProject = async () => {
        const maybeDraft = _readLocalProjectDraftIfAny()
        if (maybeDraft?.payload && typeof maybeDraft.payload === 'object') {
            pendingRecoveryDraft = maybeDraft
            window.dispatchEvent(new CustomEvent('seesound:project-recovery-available', {
                detail: {
                    fileName: String(maybeDraft.fileName || ''),
                    projectName: String(maybeDraft?.payload?.projectName || ''),
                    updatedAt: Number(maybeDraft.updatedAt || Date.now()),
                },
            }))
        }
        const defaults = getDefaultProjectDefinition()
        projectFileName = defaults.fileName
        emitProjectFileState()
        await loadProjectFromPayload(_buildDefaultProjectPayload())
    }

    emitProjectFileState()
    void bootstrapDefaultProject()

}

// ── 7b  Canvas Resizer ────────────────────────────────────────────────────────
let _resizer = null
let _syncingCanvasFromParams = false
_resizer = initCanvasResizer({
    wrapper, column: col,
    onResize(w, h) {
        resizeRenderer(w, h)
        emitCanvasSize(w, h)
        updateZoomButtonsVisibility()
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

function _isTypingTarget(node) {
    const elNode = node instanceof Element ? node : null
    if (!elNode) return false
    if (elNode.closest('.cp-rule-expression-input')) return false
    return !!elNode.closest('input,textarea,select,[contenteditable="true"]')
}

window.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return
    if (!(e.ctrlKey || e.metaKey)) return
    if (e.altKey) return

    const key = String(e.key || '').toLowerCase()
    if (key === 'z' && !e.shiftKey) {
        if (!undo()) return
        e.preventDefault()
        e.stopPropagation()
        return
    }
    if (key === 'y' || (key === 'z' && e.shiftKey)) {
        if (!redo()) return
        e.preventDefault()
        e.stopPropagation()
    }
})

function applyCanvasScaleFromParams() {
    const scalePct = Math.max(5, Math.min(2000, Math.floor(Number(params.canvasScale) || 100)))
    const scale = scalePct / 100
    wrapperState.scale = scale
    wrapper.style.transformOrigin = 'center center'
    updateWrapperTransform()
    updateZoomButtonsVisibility()
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
        updateZoomButtonsVisibility()
        return
    }
    _syncingCanvasFromParams = true
    _resizer.setSize(explicitW, explicitH)
    _syncingCanvasFromParams = false
    updateZoomButtonsVisibility()
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
    if (
        key === 'cameraPosX' ||
        key === 'cameraPosY' ||
        key === 'cameraPosZ' ||
        key === 'cameraTargetX' ||
        key === 'cameraTargetY' ||
        key === 'cameraTargetZ' ||
        key === 'cameraAngleOfView'
    ) syncCameraFromParams()
    if (
        key === 'postProcessEnabled' ||
        key === 'bloomEnabled' ||
        key === 'bloomStrength' ||
        key === 'bloomRadius' ||
        key === 'bloomThreshold'
    ) syncPostProcessingFromParams()
    if (key === 'canvasWidth' || key === 'canvasHeight') applyCanvasSizeFromParams()
    if (key === 'canvasScale') applyCanvasScaleFromParams()
    if (key === 'maxParticles') {
        const nextCap = Math.max(4096, Math.floor(params.maxParticles || 4096))
        if (params.maxParticles !== nextCap) params.maxParticles = nextCap
        ps.setMaxParticles(nextCap)
    }
    if (key === 'fftSize') {
        const snapped = snapFftSize(params.fftSize)
        if (params.fftSize !== snapped) {
            set('fftSize', snapped)
            return
        }
        ae.setFftSize(snapped)
    }
    if (key === 'fluxWindowFrames') {
        const next = Math.max(1, Math.min(64, Math.floor(Number(params.fluxWindowFrames) || 10)))
        if (params.fluxWindowFrames !== next) {
            set('fluxWindowFrames', next)
            return
        }
        ae.setFluxWindowFrames(next)
    }
    if (key === 'cqtDetailsPer10Octaves') {
        const next = snapCqtDetailsPer10Octaves(params.cqtDetailsPer10Octaves)
        if (params.cqtDetailsPer10Octaves !== next) {
            set('cqtDetailsPer10Octaves', next)
            return
        }
        ae.setCqtDetailsPer10Octaves(next)
    }
    if (key === 'ruleBlocks') {
        const state = ps.onRulesChanged(params.ruleBlocks ?? [])
        ae.setRuleInputUsage(state?.requiredInputsByTarget)
        _emitCalculatedRuleInputs(state?.requiredInputsByTarget)
        window.dispatchEvent(new CustomEvent('seesound:rule-compile-state', { detail: state }))
        if (RULE_DEBUG_FLAGS.logCompilerStatus) {
            console.info('[RuleEngine] recompilation', {
                status: state.compileStatus,
                compileTimeMs: state.compileTimeMs,
                error: state.compileError,
                requiredInputsByTarget: state.requiredInputsByTarget,
                rules: Array.isArray(params.ruleBlocks) ? params.ruleBlocks.length : 0,
            })
        }
    }
})

window.addEventListener('seesound:view-reset-camera', resetViewCamera)
window.addEventListener('seesound:view-fit-camera', fitViewToCanvas)
window.addEventListener('seesound:view-clean-canvas', clearSceneElements)

// ── 7c  Control Panel (right panel) ──────────────────────────────────────────
initControlPanel(document.getElementById('control-panel'))
_emitCalculatedRuleInputs(ps.getRuleCompileState?.()?.requiredInputsByTarget)

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


