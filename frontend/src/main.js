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
    parseProjectText,
    PROJECT_FILE_EXTENSION,
    triggerProjectDownload,
} from './engine/project/ProjectIO.js'
import {
    computeSpectralCentroid,
    computeSpectralFlux,
    computeSpectralFlatness,
    computeInharmonicity,
    computePeakAmplitude,
    computeZeroCrossingRate,
    computeSpectralRolloff,
    computeSpectralSpread,
    computeSpectralSkewness,
    computeChromagram,
    normalizeCentroidHzToUnit,
} from './engine/audio/AudioFeatures.js'
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
const cameraOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, 5000)
const cameraPerspective = new THREE.PerspectiveCamera(55, 1, 0.001, 5000)
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

syncOrbitFromCamera()

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
navResetBtn.title = 'Reset camera'
applyNavButtonIcon(navResetBtn, resetIcon, 'Reset Camera')
navResetBtn.addEventListener('click', resetViewCamera)

const navFitBtn = document.createElement('button')
navFitBtn.type = 'button'
navFitBtn.className = 'canvas-nav-actions__btn cp-btn'
navFitBtn.title = 'Fit image to canvas bounds'
applyNavButtonIcon(navFitBtn, fitIcon, 'Fit')
navFitBtn.addEventListener('click', fitViewToCanvas)

const navClearBtn = document.createElement('button')
navClearBtn.type = 'button'
navClearBtn.className = 'canvas-nav-actions__btn cp-btn'
navClearBtn.title = 'Clear particles and scene elements'
applyNavButtonIcon(navClearBtn, clearIcon, 'Clear')
navClearBtn.addEventListener('click', clearSceneElements)

const navZoomInBtn = document.createElement('button')
navZoomInBtn.type = 'button'
navZoomInBtn.className = 'canvas-nav-actions__btn cp-btn'
navZoomInBtn.title = 'Increase canvas zoom'
applyNavButtonIcon(navZoomInBtn, magnifierPlusIcon, 'Zoom In')
navZoomInBtn.addEventListener('click', () => bumpCanvasScale(10))

const navZoomOutBtn = document.createElement('button')
navZoomOutBtn.type = 'button'
navZoomOutBtn.className = 'canvas-nav-actions__btn canvas-nav-actions__btn--conditional cp-btn'
navZoomOutBtn.title = 'Decrease canvas zoom'
applyNavButtonIcon(navZoomOutBtn, magnifierMinusIcon, 'Zoom Out')
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

canvas.addEventListener('contextmenu', (e) => e.preventDefault())

function handlePointerMove(dx, dy, button) {
    if (button === 0) {
        orbitState.azimuth -= dx * 0.006
        orbitState.elevation = Math.max(
            -Math.PI * 0.49,
            Math.min(Math.PI * 0.49, orbitState.elevation - dy * 0.005),
        )
        applyOrbitToCamera()
    } else if (button === 1) {
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
    } else if (button === 2) {
        const yaw = -dx * 0.004
        const pitch = -dy * 0.004
        camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yaw)
        camera.rotateX(pitch)
    }
}

function handleZoom(deltaY) {
    if (camera.isPerspectiveCamera) {
        const dir = new THREE.Vector3()
        camera.getWorldDirection(dir)
        const speed = Math.max(2, orbitState.radius * 0.08)
        const step = (deltaY > 0 ? 1 : -1) * speed
        camera.position.addScaledVector(dir, step)
        syncOrbitFromCamera()
    } else {
        const factor = deltaY > 0 ? 0.92 : 1.08
        camera.zoom = Math.max(0.05, Math.min(64, camera.zoom * factor))
        camera.updateProjectionMatrix()
    }
}

col.addEventListener('mousedown', (e) => {
    if (e.target === canvas || wrapper.contains(e.target) && e.target !== col) return
    if (e.button !== 0) return
    wrapperState.active = true
    wrapperState.lastX = e.clientX
    wrapperState.lastY = e.clientY
    e.preventDefault()
})

col.addEventListener('touchstart', (e) => {
    if (e.target === canvas || wrapper.contains(e.target) && e.target !== col) return
    if (e.touches.length === 1) {
        wrapperState.active = true
        wrapperState.lastX = e.touches[0].clientX
        wrapperState.lastY = e.touches[0].clientY
    } else if (e.touches.length === 2) {
        wrapperState.active = true
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        wrapperState.pinchDistance = Math.sqrt(dx * dx + dy * dy)
    }
}, { passive: false })

canvas.addEventListener('mousedown', (e) => {
    if (e.button !== 0 && e.button !== 1 && e.button !== 2) return
    pointerState.active = true
    pointerState.button = e.button
    pointerState.lastX = e.clientX
    pointerState.lastY = e.clientY
    e.preventDefault()
})

canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
        pointerState.active = true
        pointerState.button = 0 // Orbit
        pointerState.lastX = e.touches[0].clientX
        pointerState.lastY = e.touches[0].clientY
    } else if (e.touches.length === 2) {
        pointerState.active = true
        pointerState.button = 1 // Pan + Zoom
        pointerState.lastX = (e.touches[0].clientX + e.touches[1].clientX) / 2
        pointerState.lastY = (e.touches[0].clientY + e.touches[1].clientY) / 2

        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        pointerState.pinchDistance = Math.sqrt(dx * dx + dy * dy)
    }
    if (e.cancelable) e.preventDefault()
}, { passive: false })

window.addEventListener('mouseup', () => {
    pointerState.active = false
    pointerState.button = -1
    wrapperState.active = false
})

window.addEventListener('touchend', (e) => {
    if (e.touches.length === 0) {
        pointerState.active = false
        pointerState.button = -1
        wrapperState.active = false
    } else if (e.touches.length === 1) {
        pointerState.button = 0
        pointerState.lastX = e.touches[0].clientX
        pointerState.lastY = e.touches[0].clientY
    }
})

window.addEventListener('mousemove', (e) => {
    if (wrapperState.active) {
        const dx = e.clientX - wrapperState.lastX
        const dy = e.clientY - wrapperState.lastY
        wrapperState.lastX = e.clientX
        wrapperState.lastY = e.clientY
        wrapperState.offsetX += dx
        wrapperState.offsetY += dy
        updateWrapperTransform()
        return
    }

    if (!pointerState.active) return
    const dx = e.clientX - pointerState.lastX
    const dy = e.clientY - pointerState.lastY
    pointerState.lastX = e.clientX
    pointerState.lastY = e.clientY
    handlePointerMove(dx, dy, pointerState.button)
})

window.addEventListener('touchmove', (e) => {
    if (wrapperState.active) {
        if (e.cancelable) e.preventDefault()

        if (e.touches.length === 1) {
            const dx = e.touches[0].clientX - wrapperState.lastX
            const dy = e.touches[0].clientY - wrapperState.lastY
            wrapperState.lastX = e.touches[0].clientX
            wrapperState.lastY = e.touches[0].clientY
            wrapperState.offsetX += dx
            wrapperState.offsetY += dy
            updateWrapperTransform()
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX
            const dy = e.touches[0].clientY - e.touches[1].clientY
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (wrapperState.pinchDistance > 0) {
                const scaleDiff = (distance - wrapperState.pinchDistance) * 0.005
                const newScale = Math.max(0.05, Math.min(20, wrapperState.scale + scaleDiff))
                set('canvasScale', Math.round(newScale * 100))
            }
            wrapperState.pinchDistance = distance
        }
        return
    }

    if (!pointerState.active) return
    if (e.cancelable) e.preventDefault()

    if (e.touches.length === 1 && pointerState.button === 0) {
        const dx = e.touches[0].clientX - pointerState.lastX
        const dy = e.touches[0].clientY - pointerState.lastY
        pointerState.lastX = e.touches[0].clientX
        pointerState.lastY = e.touches[0].clientY
        handlePointerMove(dx, dy, 0)
    } else if (e.touches.length === 2 && pointerState.button === 1) {
        const currentX = (e.touches[0].clientX + e.touches[1].clientX) / 2
        const currentY = (e.touches[0].clientY + e.touches[1].clientY) / 2

        const dxPinch = e.touches[0].clientX - e.touches[1].clientX
        const dyPinch = e.touches[0].clientY - e.touches[1].clientY
        const currentPinch = Math.sqrt(dxPinch * dxPinch + dyPinch * dyPinch)

        const dxPan = currentX - pointerState.lastX
        const dyPan = currentY - pointerState.lastY
        handlePointerMove(dxPan, dyPan, 1)

        const pinchDelta = pointerState.pinchDistance - currentPinch
        if (Math.abs(pinchDelta) > 1) {
            handleZoom(pinchDelta * 0.75) // Apply zoom step mapped from pinch
            pointerState.pinchDistance = currentPinch
        }

        pointerState.lastX = currentX
        pointerState.lastY = currentY
    }
}, { passive: false })

canvas.addEventListener('wheel', (e) => {
    e.preventDefault()
    handleZoom(e.deltaY)
}, { passive: false })

col.addEventListener('wheel', (e) => {
    if (e.target === canvas || wrapper.contains(e.target) && e.target !== col) return
    e.preventDefault()
    const scaleSpeed = 0.001
    const delta = -e.deltaY * scaleSpeed
    const newScale = Math.max(0.05, Math.min(20, wrapperState.scale + delta))
    set('canvasScale', Math.round(newScale * 100))
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
        cameraOrtho.near = -Math.max(5000, radius * 6)
        cameraOrtho.far = Math.max(5000, radius * 6)
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
        cameraPerspective.far = Math.max(cameraPerspective.near + 1, orbitState.radius + radius * 6)
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

const _ALLOWED_FFT_SIZES = Object.freeze([1024, 2048, 4096, 8192, 16384])

function _snapFftSize(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return 2048
    let best = _ALLOWED_FFT_SIZES[0]
    let bestDist = Math.abs(n - best)
    for (let i = 1; i < _ALLOWED_FFT_SIZES.length; i++) {
        const candidate = _ALLOWED_FFT_SIZES[i]
        const dist = Math.abs(n - candidate)
        if (dist < bestDist) {
            best = candidate
            bestDist = dist
        }
    }
    return best
}

function _buildBackendAudioAnalysisConfig(snapshot = {}, requiredInputsByTarget = null) {
    const usage = _deriveAudioUsage(requiredInputsByTarget)
    const fftSize = _snapFftSize(snapshot.fftSize)
    return {
        sample_rate: 44100,
        fft_size: fftSize,
        hop_size: Math.max(64, Math.floor(fftSize / 4)),
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

class AudioEngine {
    constructor() {
        this.ctx = null; this.analyser = null; this.source = null
        this.outputGain = null
        this.streamSource = null; this.streamNode = null
        this.audioEl = null; this.splitter = null
        this.analyserL = null; this.analyserR = null
        this.binAnalysisNode = null
        this._workletConnected = false
        this._workletReady = false
        this._workletLoadPromise = null
        this._workletConfig = {
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            attackThreshold: 0.0005,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
        }
        this._calcUsage = {
            needRms: true,
            needSpectralCentroid: false,
            needGlobalSpectralFlux: false,
            needSpectralFlatness: false,
            needInharmonicity: false,
            needPeakAmplitude: false,
            needZeroCrossingRate: false,
            needSpectralRolloff: false,
            needSpectralSpread: false,
            needSpectralSkewness: false,
            needChromagram: false,
        }

        this.FFT_SIZE = _snapFftSize(params.fftSize)
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._freqL = new Uint8Array(128)
        this._freqR = new Uint8Array(128)
        this._prevFrequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)
        this._binMagnitude = null
        this._binFlux = null
        this._binPhaseDeviation = null
        this._binPhase = null
        this._binEnvelope = null
        this._binAttackTime = null
        this.featureSmoothingAlpha = 0.2

        this.bass = 0; this.mid = 0; this.high = 0
        this.amplitude = 0; this.peakFreq = 0; this.peakByte = 0; this.pan = 0
        this.rmsDbfs = -96
        this.spectralCentroidHz = 0
        this.spectralFluxAU = 0
        this.spectralFlatnessRatio = 0
        this.spectralCentroid = 0
        this.spectralFlux = 0
        this.spectralFlatness = 0
        this.inharmonicity = 0
        this.peakAmplitude = 0
        this.zeroCrossingRate = 0
        this.spectralRolloff = 0
        this.spectralSpread = 0
        this.spectralSkewness = 0
        this.chromagram = 0
        this.ctxState = 'none'
        this.monitorMuted = false
    }

    _createBinAnalysisNode() {
        if (!this.ctx) return null
        const node = new AudioWorkletNode(this.ctx, 'bin-analysis-processor', {
            numberOfInputs: 1,
            numberOfOutputs: 0,
            processorOptions: {
                fftSize: this.FFT_SIZE,
                hopSize: Math.floor(this.FFT_SIZE / 4),
            },
        })
        node.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type !== 'binMetrics') return
            if (msg.magnitude) this._binMagnitude = new Float32Array(msg.magnitude)
            if (msg.flux) this._binFlux = new Float32Array(msg.flux)
            if (msg.phaseDeviation) this._binPhaseDeviation = new Float32Array(msg.phaseDeviation)
            if (msg.phase) this._binPhase = new Float32Array(msg.phase)
            if (msg.envelope) this._binEnvelope = new Float32Array(msg.envelope)
            if (msg.attackTime) this._binAttackTime = new Float32Array(msg.attackTime)
        }
        return node
    }

    _ensureWorkletLoaded() {
        if (!this.ctx || this._workletReady) return
        if (!this._workletLoadPromise) {
            const moduleUrl = new URL('./engine/audio/BinAnalysisWorklet.js', import.meta.url)
            this._workletLoadPromise = this.ctx.audioWorklet.addModule(moduleUrl)
                .then(() => {
                    this.binAnalysisNode = this._createBinAnalysisNode()
                    this._workletReady = true
                    this._connectSourceToWorklet()
                    this._postWorkletConfig()
                })
                .catch((err) => {
                    console.warn('[AudioWorklet] Failed to load bin analysis worklet:', err)
                })
        }
    }

    _postWorkletConfig() {
        if (!this.binAnalysisNode) return
        this.binAnalysisNode.port.postMessage({
            type: 'config',
            config: this._workletConfig,
        })
    }

    _connectSourceToWorklet() {
        if (!this.binAnalysisNode) return false
        const srcNode = this.source || this.streamSource
        if (!srcNode) return false
        if (this._workletConnected) return true
        try {
            srcNode.connect(this.binAnalysisNode)
            this._workletConnected = true
            return true
        } catch {
            return false
        }
    }

    setRuleInputUsage(requiredInputsByTarget = null) {
        const usage = _deriveAudioUsage(requiredInputsByTarget)
        this._workletConfig.enabled = usage.worklet.enabled
        this._workletConfig.needMagnitude = usage.worklet.needMagnitude
        this._workletConfig.needFlux = usage.worklet.needFlux
        this._workletConfig.needPhaseDeviation = usage.worklet.needPhaseDeviation
        this._workletConfig.needPhase = usage.worklet.needPhase
        this._workletConfig.needEnvelope = usage.worklet.needEnvelope
        this._workletConfig.needAttackTime = usage.worklet.needAttackTime
        this._calcUsage = usage.engine
        this._postWorkletConfig()
    }

    setFftSize(nextValue) {
        const nextSize = _snapFftSize(nextValue)
        if (nextSize === this.FFT_SIZE) return
        this.FFT_SIZE = nextSize
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._prevFrequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)
        this._binMagnitude = null
        this._binFlux = null
        this._binPhaseDeviation = null
        this._binPhase = null
        this._binEnvelope = null
        this._binAttackTime = null

        if (this.analyser) {
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.minDecibels = -140
        }

        if (this.binAnalysisNode) {
            try {
                this.source?.disconnect(this.binAnalysisNode)
            } catch { }
            try {
                this.streamSource?.disconnect(this.binAnalysisNode)
            } catch { }
            try {
                this.binAnalysisNode.disconnect()
            } catch { }
            this.binAnalysisNode = null
            this._workletConnected = false
        }

        if (this.ctx && this._workletReady) {
            this.binAnalysisNode = this._createBinAnalysisNode()
            this._connectSourceToWorklet()
            this._postWorkletConfig()
        }
    }

    init(el) {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)()
            this.analyser = this.ctx.createAnalyser()
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.minDecibels = -140
            this.outputGain = this.ctx.createGain()
            this.outputGain.gain.value = this.monitorMuted ? 0 : 1
            this.analyser.connect(this.outputGain)
            this.outputGain.connect(this.ctx.destination)
            this._ensureWorkletLoaded()
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
            this._workletConnected = false

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
                for (const a of [this.analyserL, this.analyserR]) {
                    a.fftSize = 256
                    a.minDecibels = -140
                }
                const srcNode = this.source || this.streamSource
                srcNode?.connect(this.splitter)
                this.splitter.connect(this.analyserL, 0)
                this.splitter.connect(this.analyserR, 1)
                this._connectSourceToWorklet()
            } catch { /* mono */ }

            // Ensure worklet receives source even if splitter setup fails.
            this._connectSourceToWorklet()
        }
        if (this.ctx.state === 'suspended') this.ctx.resume()
        this.ctxState = this.ctx.state
    }

    setMonitorMuted(muted) {
        this.monitorMuted = !!muted
        if (!this.outputGain) return
        const next = this.monitorMuted ? 0 : 1
        try {
            this.outputGain.gain.setValueAtTime(next, this.ctx?.currentTime ?? 0)
        } catch {
            this.outputGain.gain.value = next
        }
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

        const alpha = Math.max(0, Math.min(1, this.featureSmoothingAlpha))
        if (this._calcUsage.needSpectralCentroid) {
            const centroidHz = computeSpectralCentroid(this.frequencyData, sr)
            this.spectralCentroidHz += (centroidHz - this.spectralCentroidHz) * alpha
            this.spectralCentroid = normalizeCentroidHzToUnit(this.spectralCentroidHz, sr)
        } else {
            this.spectralCentroidHz = 0
            this.spectralCentroid = 0
        }

        if (this._calcUsage.needGlobalSpectralFlux) {
            const fluxNorm = computeSpectralFlux(this.frequencyData, this._prevFrequencyDataBins)
            const fluxAu = fluxNorm * 100
            this.spectralFluxAU += (fluxAu - this.spectralFluxAU) * alpha
            this.spectralFlux = Math.max(0, Math.min(1, this.spectralFluxAU / 100))
        } else {
            this.spectralFluxAU = 0
            this.spectralFlux = 0
        }

        if (this._calcUsage.needSpectralFlatness) {
            const flatnessNorm = computeSpectralFlatness(this.frequencyData)
            this.spectralFlatnessRatio += (flatnessNorm - this.spectralFlatnessRatio) * alpha
            this.spectralFlatness = Math.max(0, Math.min(1, this.spectralFlatnessRatio))
        } else {
            this.spectralFlatnessRatio = 0
            this.spectralFlatness = 0
        }

        if (this._calcUsage.needInharmonicity) {
            const inharmonicityNorm = computeInharmonicity(this.frequencyData, sr)
            this.inharmonicity += (inharmonicityNorm - this.inharmonicity) * alpha
        } else {
            this.inharmonicity = 0
        }

        if (this._calcUsage.needPeakAmplitude) {
            this.peakAmplitude += (computePeakAmplitude(this.frequencyData) - this.peakAmplitude) * alpha
        } else {
            this.peakAmplitude = 0
        }

        if (this._calcUsage.needZeroCrossingRate) {
            this.zeroCrossingRate += (computeZeroCrossingRate(this.timeDomainData) - this.zeroCrossingRate) * alpha
        } else {
            this.zeroCrossingRate = 0
        }

        if (this._calcUsage.needSpectralRolloff) {
            this.spectralRolloff += (computeSpectralRolloff(this.frequencyData, sr, 0.85) - this.spectralRolloff) * alpha
        } else {
            this.spectralRolloff = 0
        }

        if (this._calcUsage.needSpectralSpread || this._calcUsage.needSpectralSkewness) {
            const spread = computeSpectralSpread(this.frequencyData, sr, this.spectralCentroidHz)
            if (this._calcUsage.needSpectralSpread) this.spectralSpread += (spread - this.spectralSpread) * alpha
            else this.spectralSpread = 0
            if (this._calcUsage.needSpectralSkewness) {
                const skew = computeSpectralSkewness(this.frequencyData, sr, this.spectralCentroidHz, spread)
                this.spectralSkewness += (skew - this.spectralSkewness) * alpha
            } else {
                this.spectralSkewness = 0
            }
        } else {
            this.spectralSpread = 0
            this.spectralSkewness = 0
        }

        if (this._calcUsage.needChromagram) {
            this.chromagram += (computeChromagram(this.frequencyData, sr) - this.chromagram) * alpha
        } else {
            this.chromagram = 0
        }

        // Keep an isolated copy of the current FFT frame for next-frame deltas.
        this._prevFrequencyDataBins.set(this.frequencyData)
        this._prevFrequencyData.set(this.frequencyData)

        let sq = 0; for (const b of this.timeDomainData) sq += ((b - 128) / 128) ** 2
        this.amplitude = Math.sqrt(sq / this.timeDomainData.length)
        this.rmsDbfs = 20 * Math.log10(Math.max(1e-6, this.amplitude))

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

    /** Previous-frame FFT magnitudes for bin-local delta features (read-only). */
    getPrevFrequencyData() {
        return this._prevFrequencyDataBins
    }

    getBinMagnitude() {
        return this._binMagnitude
    }

    getBinFlux() {
        return this._binFlux
    }

    getBinPhaseDeviation() {
        return this._binPhaseDeviation
    }

    getBinPhase() {
        return this._binPhase
    }

    getBinEnvelope() {
        return this._binEnvelope
    }

    getBinAttackTime() {
        return this._binAttackTime
    }
}

const ae = new AudioEngine()
ae.setRuleInputUsage(_initialCompileState?.requiredInputsByTarget)

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
let _mediaRecorder = null
let _recordingStream = null
let _recordedChunks = []
let _recordingAudioCleanup = null
let _recordingEndedHandler = null
let _lastPerformanceDropSignalTs = 0

const platformConfig = {
    tier: 'free',
    maxExportResolution: Number.POSITIVE_INFINITY,
    canExportObj: false,
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
    platformConfig.canExportObj = !!cfg.canExportObj
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

function _defaultProjectName() {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
    return `seesound-project-${stamp}${PROJECT_FILE_EXTENSION}`
}

function getDefaultProjectDefinition() {
    return {
        fileName: 'New Project.ssp.json',
        presetName: 'default',
        params: getSnapshot(),
        presetLibrary: [],
    }
}

async function saveCanvasPng() {
    const audioTitle = _sanitizeFilePart(_currentAudioTitle(), 'audio')
    const presetTitle = _sanitizeFilePart(_currentPresetTitle(), 'preset')
    const defaultPngName = `${audioTitle} - ${presetTitle}.png`
    const rawRequestedW = Math.max(1, Math.floor(Number(params.canvasWidth) || (renderer.domElement.width / Math.max(1, window.devicePixelRatio))))
    const rawRequestedH = Math.max(1, Math.floor(Number(params.canvasHeight) || (renderer.domElement.height / Math.max(1, window.devicePixelRatio))))
    const entitlementMaxRes = Number(platformConfig.maxExportResolution)
    const requestedMaxEdge = Math.max(rawRequestedW, rawRequestedH)
    const entitlementScale = Number.isFinite(entitlementMaxRes) && entitlementMaxRes > 0 && requestedMaxEdge > entitlementMaxRes
        ? entitlementMaxRes / requestedMaxEdge
        : 1
    const requestedW = Math.max(1, Math.floor(rawRequestedW * entitlementScale))
    const requestedH = Math.max(1, Math.floor(rawRequestedH * entitlementScale))

    if (entitlementScale < 1) {
        _emitToPlatform('engine:export-blocked', {
            reason: 'resolution_limit',
            requestedWidth: rawRequestedW,
            requestedHeight: rawRequestedH,
            allowedMaxRes: entitlementMaxRes,
        })
    }

    const exportCanvas = document.createElement('canvas')
    const exportRenderer = new THREE.WebGLRenderer({
        canvas: exportCanvas,
        antialias: true,
        preserveDrawingBuffer: true,
    })
    let exportComposer = null

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
        ps.setViewportHeight(exportRenderer.domElement.height)
        if (shouldUsePostProcessing()) {
            const exportRenderPass = new RenderPass(scene, exportCamera)
            const exportBloomPass = new UnrealBloomPass(
                new THREE.Vector2(1, 1),
                Math.max(0, Number(params.bloomStrength ?? 1.15) || 0),
                Math.max(0, Number(params.bloomRadius ?? 0.7) || 0),
                Math.max(0, Math.min(1, Number(params.bloomThreshold ?? 0.18) || 0)),
            )
            exportComposer = new EffectComposer(exportRenderer)
            exportComposer.addPass(exportRenderPass)
            exportComposer.addPass(exportBloomPass)
            exportComposer.setPixelRatio(exportDpr)
            exportComposer.setSize(logicalW, logicalH)
            exportComposer.render()
        } else {
            exportRenderer.render(scene, exportCamera)
        }

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
        ps.setViewportHeight(renderer.domElement.height)
        try { exportComposer?.dispose?.() } catch { }
        exportRenderer.dispose()
    }
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

async function _buildRecordingAudioTrack(audioEl) {
    if (!audioEl) return { track: null, cleanup: null }
    try {
        if (typeof audioEl.captureStream === 'function') {
            const stream = audioEl.captureStream()
            const track = stream.getAudioTracks()[0] || null
            if (track) return { track, cleanup: null }
        }
    } catch {
        // Fallback below.
    }

    ae.init(audioEl)
    if (ae.ctx?.state === 'suspended') await ae.ctx.resume()
    const srcNode = ae.source || ae.streamSource
    if (!srcNode || !ae.ctx) return { track: null, cleanup: null }

    const dest = ae.ctx.createMediaStreamDestination()
    srcNode.connect(dest)
    const track = dest.stream.getAudioTracks()[0] || null
    const cleanup = () => {
        try { srcNode.disconnect(dest) } catch { }
        try { dest.disconnect() } catch { }
    }
    return { track, cleanup }
}

async function startVideoRecording(playerEl, audioEl) {
    if (_mediaRecorder) return
    if (!audioEl?.src) return
    if (typeof MediaRecorder === 'undefined' || typeof canvas.captureStream !== 'function') {
        alert('Video recording is not supported in this browser.')
        return
    }

    const currentW = Math.max(1, Math.floor(renderer.domElement.width / Math.max(1, window.devicePixelRatio)))
    const currentH = Math.max(1, Math.floor(renderer.domElement.height / Math.max(1, window.devicePixelRatio)))
    const entitlementMaxRes = Number(platformConfig.maxExportResolution)
    if (Number.isFinite(entitlementMaxRes) && entitlementMaxRes > 0 && Math.max(currentW, currentH) > entitlementMaxRes) {
        _emitToPlatform('engine:export-blocked', {
            reason: 'resolution_limit',
            requestedWidth: currentW,
            requestedHeight: currentH,
            allowedMaxRes: entitlementMaxRes,
        })
        alert(`Free plan export limit is ${Math.floor(entitlementMaxRes)}p. Reduce canvas size or upgrade to Pro.`)
        return
    }

    // Capture the renderer output surface so recorded video includes post-processing passes.
    const captureSourceCanvas = renderer?.domElement || canvas
    const canvasStream = captureSourceCanvas.captureStream(60)
    const outputStream = new MediaStream()
    for (const track of canvasStream.getVideoTracks()) outputStream.addTrack(track)

    const { track: audioTrack, cleanup: audioCleanup } = await _buildRecordingAudioTrack(audioEl)
    _recordingAudioCleanup = audioCleanup
    if (audioTrack) outputStream.addTrack(audioTrack)

    const mimeCandidates = [
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm',
    ]
    const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported?.(m)) || ''
    const recorder = new MediaRecorder(outputStream, mimeType ? { mimeType } : undefined)
    _recordedChunks = []
    _recordingStream = outputStream
    _mediaRecorder = recorder

    recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) _recordedChunks.push(e.data)
    }
    recorder.onstop = () => {
        const chunks = _recordedChunks
        _recordedChunks = []
        const blob = new Blob(chunks, { type: recorder.mimeType || 'video/webm' })
        if (blob.size > 0) {
            const audioTitle = _sanitizeFilePart(_currentAudioTitle(), 'audio')
            const presetTitle = _sanitizeFilePart(_currentPresetTitle(), 'preset')
            const a = document.createElement('a')
            a.href = URL.createObjectURL(blob)
            a.download = `${audioTitle} - ${presetTitle}.webm`
            document.body.appendChild(a)
            a.click()
            a.remove()
            URL.revokeObjectURL(a.href)
        }

        if (_recordingStream) {
            for (const t of _recordingStream.getTracks()) {
                try { t.stop() } catch { }
            }
        }
        _recordingStream = null
        if (typeof _recordingAudioCleanup === 'function') {
            try { _recordingAudioCleanup() } catch { }
        }
        _recordingAudioCleanup = null
        if (_recordingEndedHandler) {
            audioEl.removeEventListener('ended', _recordingEndedHandler)
            _recordingEndedHandler = null
        }
        _mediaRecorder = null
        emitRecordState(playerEl, false)
    }

    if (audioEl.paused) {
        try { await audioEl.play() } catch { }
    }

    _recordingEndedHandler = () => {
        if (_mediaRecorder && _mediaRecorder.state !== 'inactive') _mediaRecorder.stop()
    }
    audioEl.addEventListener('ended', _recordingEndedHandler, { once: true })

    recorder.start(200)
    emitRecordState(playerEl, true)
}

function stopVideoRecording(playerEl) {
    if (!_mediaRecorder) return
    try {
        if (_mediaRecorder.state !== 'inactive') _mediaRecorder.stop()
    } catch {
        _mediaRecorder = null
        emitRecordState(playerEl, false)
    }
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
        if (_mediaRecorder) {
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
        const writable = await handle.createWritable()
        await writable.write(JSON.stringify(payload, null, 2))
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

    const _restoreLocalProjectDraftIfAny = async () => {
        try {
            const raw = localStorage.getItem(LOCAL_PROJECT_DRAFT_KEY)
            if (!raw) return false
            const parsed = JSON.parse(raw)
            const payload = parsed?.payload
            if (!payload || typeof payload !== 'object') return false

            projectFileHandle = null
            projectFileName = String(parsed?.fileName || getDefaultProjectDefinition().fileName || '').trim()
            emitProjectFileState()
            await loadProjectFromPayload(payload)

            if (parsed?.hasAudio) {
                const restoredAudio = await _loadAudioFileFromDb()
                if (restoredAudio) {
                    loadFile(restoredAudio, restoredAudio.name)
                    loadedAudioFile = restoredAudio
                    _currentAudioFileName = restoredAudio.name || ''
                }
            }

            return true
        } catch (err) {
            console.warn('[Project] local draft restore failed:', err)
            return false
        }
    }

    const saveProject = async ({ forceDownload = false } = {}) => {
        try {
            const payload = await _buildCurrentProjectPayload()
            if (!forceDownload && projectFileHandle) {
                await _writeProjectToHandle(projectFileHandle, payload)
                window.dispatchEvent(new CustomEvent('seesound:project-autosaved', {
                    detail: { fileName: projectFileName || _defaultProjectName() },
                }))
                emitProjectFileState()
                _scheduleLocalProjectDraftSave()
                return
            }
            triggerProjectDownload(payload, _defaultProjectName())
            _scheduleLocalProjectDraftSave()
        } catch (err) {
            console.warn('[Project] save failed:', err)
        }
    }

    const scheduleProjectAutosave = () => {
        if (!projectFileHandle || projectLoadInProgress) return
        if (projectAutoSaveTimer) clearTimeout(projectAutoSaveTimer)
        projectAutoSaveTimer = setTimeout(async () => {
            projectAutoSaveTimer = null
            await saveProject({ forceDownload: false })
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
        if (typeof window.showOpenFilePicker !== 'function') return false
        try {
            const [handle] = await window.showOpenFilePicker({
                multiple: false,
                excludeAcceptAllOption: false,
                types: [{
                    description: 'SEESOUND Project',
                    accept: { 'application/json': [PROJECT_FILE_EXTENSION, '.json'] },
                }],
            })
            if (!handle) return false
            const file = await handle.getFile()
            const text = await file.text()
            const payload = parseProjectText(text)
            projectFileHandle = handle
            projectFileName = String(file.name || '').trim()
            await loadProjectFromPayload(payload)
            emitProjectFileState()
            return true
        } catch {
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
                    accept: { 'application/json': [PROJECT_FILE_EXTENSION, '.json'] },
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
            await saveProject({ forceDownload: false })
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
                    accept: { 'application/json': [PROJECT_FILE_EXTENSION, '.json'] },
                }],
            })
            if (!handle) return false
            projectFileHandle = handle
            projectFileName = String(handle.name || suggestedName).trim()
            await saveProject({ forceDownload: false })
            emitProjectFileState()
            return true
        } catch {
            return false
        }
    }

    playerEl.addEventListener('player:saveproject', async () => {
        if (projectFileHandle) {
            await saveProject({ forceDownload: false })
            return
        }
        const ok = await saveProjectAsWithPicker(_defaultProjectName())
        if (!ok) await saveProject({ forceDownload: true })
    })
    playerEl.addEventListener('player:loadproject', async (e) => {
        await loadProjectFromPayload(e?.detail?.payload || {})
    })

    window.addEventListener('seesound:project-save-request', async () => {
        if (projectFileHandle) {
            await saveProject({ forceDownload: false })
            return
        }
        const ok = await saveProjectAsWithPicker(_defaultProjectName())
        if (!ok) await saveProject({ forceDownload: true })
    })
    window.addEventListener('seesound:project-save-as-request', async () => {
        const suggested = projectFileName
            ? `${projectFileName}${PROJECT_FILE_EXTENSION}`
            : _defaultProjectName()
        const ok = await saveProjectAsWithPicker(suggested)
        if (!ok) await saveProject({ forceDownload: true })
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
        await createNewProjectWithPicker(getDefaultProjectDefinition().fileName, true)
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
        const restored = await _restoreLocalProjectDraftIfAny()
        if (restored) return
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
    return !!elNode.closest('input,textarea,select,[contenteditable="true"]')
}

window.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return
    if (!(e.ctrlKey || e.metaKey)) return
    if (e.altKey) return
    if (_isTypingTarget(e.target)) return

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
        const snapped = _snapFftSize(params.fftSize)
        if (params.fftSize !== snapped) {
            set('fftSize', snapped)
            return
        }
        ae.setFftSize(snapped)
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


