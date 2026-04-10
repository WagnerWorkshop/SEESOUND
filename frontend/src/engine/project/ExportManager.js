import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter.js'

export class ExportManager {
    constructor({
        getCamera,
        renderer,
        canvas,
        scene,
        ps,
        params,
        platformConfig,
        emitToPlatform,
        ae,
        triggerBlobDownload,
        shouldUsePostProcessing,
        getCurrentAudioTitle,
        sanitizeFilePart,
    }) {
        this.getCamera = getCamera
        this.renderer = renderer
        this.canvas = canvas
        this.scene = scene
        this.ps = ps
        this.params = params
        this.platformConfig = platformConfig
        this.emitToPlatform = emitToPlatform
        this.ae = ae
        this.triggerBlobDownload = triggerBlobDownload
        this.shouldUsePostProcessing = shouldUsePostProcessing
        this.getCurrentAudioTitle = getCurrentAudioTitle
        this.sanitizeFilePart = sanitizeFilePart

        this._mediaRecorder = null
        this._recordingStream = null
        this._recordedChunks = []
        this._recordingAudioCleanup = null
        this._recordingEndedHandler = null
        this._recordingHiddenObjects = []
    }

    _shouldExcludeFromExport(obj) {
        return !!(obj?.userData?.excludeFromExport || obj?.userData?.excludeFromPng)
    }

    _hideExcludedObjects() {
        const hidden = []
        this.scene.traverse((obj) => {
            if (this._shouldExcludeFromExport(obj) && obj.visible) {
                hidden.push(obj)
                obj.visible = false
            }
        })
        return hidden
    }

    _restoreHiddenObjects(list) {
        for (const obj of Array.isArray(list) ? list : []) {
            if (obj) obj.visible = true
        }
    }

    isRecording() {
        return !!this._mediaRecorder
    }

    _emitRecordState(playerEl, running) {
        playerEl.dispatchEvent(new CustomEvent('player:recordvideo-state', {
            detail: { running }, bubbles: false,
        }))
    }

    async saveCanvasPng({ transparent = false } = {}) {
        const camera = this.getCamera?.()
        if (!camera) return false

        const audioTitle = this.sanitizeFilePart(this.getCurrentAudioTitle?.(), 'audio')
        const defaultPngName = transparent
            ? `${audioTitle} - transparent.png`
            : `${audioTitle}.png`
        const rawRequestedW = Math.max(1, Math.floor(Number(this.params.canvasWidth) || (this.renderer.domElement.width / Math.max(1, window.devicePixelRatio))))
        const rawRequestedH = Math.max(1, Math.floor(Number(this.params.canvasHeight) || (this.renderer.domElement.height / Math.max(1, window.devicePixelRatio))))
        const entitlementMaxRes = Number(this.platformConfig.maxExportResolution)
        const requestedMaxEdge = Math.max(rawRequestedW, rawRequestedH)
        const entitlementScale = Number.isFinite(entitlementMaxRes) && entitlementMaxRes > 0 && requestedMaxEdge > entitlementMaxRes
            ? entitlementMaxRes / requestedMaxEdge
            : 1
        const requestedW = Math.max(1, Math.floor(rawRequestedW * entitlementScale))
        const requestedH = Math.max(1, Math.floor(rawRequestedH * entitlementScale))

        if (entitlementScale < 1) {
            this.emitToPlatform?.('engine:export-blocked', {
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
            alpha: true,
            preserveDrawingBuffer: true,
        })
        let exportComposer = null

        try {
            const maxTex = exportRenderer.capabilities.maxTextureSize || 8192
            const exportW = Math.min(requestedW, maxTex)
            const exportH = Math.min(requestedH, maxTex)
            const exportDpr = Math.max(1, Number(this.renderer.getPixelRatio?.() || window.devicePixelRatio || 1))
            const logicalW = Math.max(1, Math.floor(exportW / exportDpr))
            const logicalH = Math.max(1, Math.floor(exportH / exportDpr))

            exportRenderer.setPixelRatio(exportDpr)
            exportRenderer.setSize(logicalW, logicalH, false)

            let exportCamera = camera.clone()
            if (exportCamera.isOrthographicCamera) {
                exportCamera = camera.clone()
                exportCamera.updateProjectionMatrix()
            } else if (exportCamera.isPerspectiveCamera) {
                exportCamera.aspect = exportW / Math.max(1, exportH)
                exportCamera.updateProjectionMatrix()
            }

            const hiddenForExport = this._hideExcludedObjects()

            exportRenderer.setClearColor(this.ps.getBackgroundColor(), transparent ? 0 : 1)
            this.ps.setViewportHeight(exportRenderer.domElement.height)
            try {
                if (!transparent && this.shouldUsePostProcessing?.()) {
                    const exportRenderPass = new RenderPass(this.scene, exportCamera)
                    const exportBloomPass = new UnrealBloomPass(
                        new THREE.Vector2(1, 1),
                        Math.max(0, Number(this.params.bloomStrength ?? 1.15) || 0),
                        Math.max(0, Number(this.params.bloomRadius ?? 0.7) || 0),
                        Math.max(0, Math.min(1, Number(this.params.bloomThreshold ?? 0.18) || 0)),
                    )
                    exportComposer = new EffectComposer(exportRenderer)
                    exportComposer.addPass(exportRenderPass)
                    exportComposer.addPass(exportBloomPass)
                    exportComposer.setPixelRatio(exportDpr)
                    exportComposer.setSize(logicalW, logicalH)
                    exportComposer.render()
                } else {
                    exportRenderer.render(this.scene, exportCamera)
                }
            } finally {
                this._restoreHiddenObjects(hiddenForExport)
            }

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
            return true
        } finally {
            this.ps.setViewportHeight(this.renderer.domElement.height)
            try { exportComposer?.dispose?.() } catch { }
            exportRenderer.dispose()
        }
    }

    async saveScenePly() {
        if (!this.platformConfig.canExportObj) {
            this.emitToPlatform?.('engine:export-blocked', { reason: 'ply_export_unavailable' })
            alert('PLY export is not available in this environment.')
            return false
        }

        const exporter = new PLYExporter()
        const exportRoot = new THREE.Group()
        for (const child of this.scene.children) {
            if (!child?.visible) continue
            if (this._shouldExcludeFromExport(child)) continue
            exportRoot.add(child.clone(true))
        }

        const plyText = await new Promise((resolve, reject) => {
            try {
                exporter.parse(exportRoot, (result) => resolve(result), { binary: false })
            } catch (error) {
                reject(error)
            }
        })
        if (!plyText || !String(plyText).trim()) {
            alert('PLY export failed.')
            return false
        }

        const blob = new Blob([plyText], { type: 'text/plain;charset=utf-8' })
        const audioTitle = this.sanitizeFilePart(this.getCurrentAudioTitle?.(), 'audio')
        this.triggerBlobDownload(blob, `${audioTitle}.ply`)
        return true
    }

    async _buildRecordingAudioTrack(audioEl) {
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

        this.ae.init(audioEl)
        if (this.ae.ctx?.state === 'suspended') await this.ae.ctx.resume()
        const srcNode = this.ae.source || this.ae.streamSource
        if (!srcNode || !this.ae.ctx) return { track: null, cleanup: null }

        const dest = this.ae.ctx.createMediaStreamDestination()
        srcNode.connect(dest)
        const track = dest.stream.getAudioTracks()[0] || null
        const cleanup = () => {
            try { srcNode.disconnect(dest) } catch { }
            try { dest.disconnect() } catch { }
        }
        return { track, cleanup }
    }

    async startVideoRecording(playerEl, audioEl) {
        if (this._mediaRecorder) return
        if (!audioEl?.src) return
        if (typeof MediaRecorder === 'undefined' || typeof this.canvas.captureStream !== 'function') {
            alert('Video recording is not supported in this browser.')
            return
        }

        const currentW = Math.max(1, Math.floor(this.renderer.domElement.width / Math.max(1, window.devicePixelRatio)))
        const currentH = Math.max(1, Math.floor(this.renderer.domElement.height / Math.max(1, window.devicePixelRatio)))
        const entitlementMaxRes = Number(this.platformConfig.maxExportResolution)
        if (Number.isFinite(entitlementMaxRes) && entitlementMaxRes > 0 && Math.max(currentW, currentH) > entitlementMaxRes) {
            this.emitToPlatform?.('engine:export-blocked', {
                reason: 'resolution_limit',
                requestedWidth: currentW,
                requestedHeight: currentH,
                allowedMaxRes: entitlementMaxRes,
            })
            alert(`Free plan export limit is ${Math.floor(entitlementMaxRes)}p. Reduce canvas size or upgrade to Pro.`)
            return
        }

        const captureSourceCanvas = this.renderer?.domElement || this.canvas
        this._recordingHiddenObjects = this._hideExcludedObjects()
        const canvasStream = captureSourceCanvas.captureStream(60)
        const outputStream = new MediaStream()
        for (const track of canvasStream.getVideoTracks()) outputStream.addTrack(track)

        const { track: audioTrack, cleanup: audioCleanup } = await this._buildRecordingAudioTrack(audioEl)
        this._recordingAudioCleanup = audioCleanup
        if (audioTrack) outputStream.addTrack(audioTrack)

        const mimeCandidates = [
            'video/webm;codecs=vp9,opus',
            'video/webm;codecs=vp8,opus',
            'video/webm',
        ]
        const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported?.(m)) || ''
        const recorder = new MediaRecorder(outputStream, mimeType ? { mimeType } : undefined)
        this._recordedChunks = []
        this._recordingStream = outputStream
        this._mediaRecorder = recorder

        recorder.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) this._recordedChunks.push(e.data)
        }
        recorder.onstop = () => {
            const chunks = this._recordedChunks
            this._recordedChunks = []
            const blob = new Blob(chunks, { type: recorder.mimeType || 'video/webm' })
            if (blob.size > 0) {
                const audioTitle = this.sanitizeFilePart(this.getCurrentAudioTitle?.(), 'audio')
                const a = document.createElement('a')
                a.href = URL.createObjectURL(blob)
                a.download = `${audioTitle}.webm`
                document.body.appendChild(a)
                a.click()
                a.remove()
                URL.revokeObjectURL(a.href)
            }

            if (this._recordingStream) {
                for (const t of this._recordingStream.getTracks()) {
                    try { t.stop() } catch { }
                }
            }
            this._recordingStream = null
            if (typeof this._recordingAudioCleanup === 'function') {
                try { this._recordingAudioCleanup() } catch { }
            }
            this._recordingAudioCleanup = null
            if (this._recordingEndedHandler) {
                audioEl.removeEventListener('ended', this._recordingEndedHandler)
                this._recordingEndedHandler = null
            }
            this._restoreHiddenObjects(this._recordingHiddenObjects)
            this._recordingHiddenObjects = []
            this._mediaRecorder = null
            this._emitRecordState(playerEl, false)
        }

        if (audioEl.paused) {
            try { await audioEl.play() } catch { }
        }

        this._recordingEndedHandler = () => {
            if (this._mediaRecorder && this._mediaRecorder.state !== 'inactive') this._mediaRecorder.stop()
        }
        audioEl.addEventListener('ended', this._recordingEndedHandler, { once: true })

        recorder.start(200)
        this._emitRecordState(playerEl, true)
    }

    stopVideoRecording(playerEl) {
        if (!this._mediaRecorder) return
        try {
            if (this._mediaRecorder.state !== 'inactive') this._mediaRecorder.stop()
        } catch {
            this._restoreHiddenObjects(this._recordingHiddenObjects)
            this._recordingHiddenObjects = []
            this._mediaRecorder = null
            this._emitRecordState(playerEl, false)
        }
    }
}
