import * as THREE from 'three'

export class CameraController {
    constructor({
        getCamera,
        orbitTarget,
        orbitState,
        renderer,
        col,
        canvas,
        wrapper,
        pointerState,
        wrapperState,
        updateWrapperTransform,
        setCanvasScale,
    }) {
        this.getCamera = getCamera
        this.orbitTarget = orbitTarget
        this.orbitState = orbitState
        this.renderer = renderer
        this.col = col
        this.canvas = canvas
        this.wrapper = wrapper
        this.pointerState = pointerState
        this.wrapperState = wrapperState
        this.updateWrapperTransform = updateWrapperTransform
        this.setCanvasScale = setCanvasScale

        this._disposers = []
    }

    _camera() {
        return this.getCamera?.()
    }

    syncOrbitFromCamera() {
        const camera = this._camera()
        if (!camera) return
        const x = camera.position.x - this.orbitTarget.x
        const y = camera.position.y - this.orbitTarget.y
        const z = camera.position.z - this.orbitTarget.z
        const r = Math.max(0.001, Math.sqrt(x * x + y * y + z * z) || 1)
        this.orbitState.radius = r
        this.orbitState.azimuth = Math.atan2(x, z)
        this.orbitState.elevation = Math.asin(Math.max(-1, Math.min(1, y / r)))
    }

    applyOrbitToCamera() {
        const camera = this._camera()
        if (!camera) return
        const ce = Math.cos(this.orbitState.elevation)
        camera.position.set(
            this.orbitTarget.x + this.orbitState.radius * ce * Math.sin(this.orbitState.azimuth),
            this.orbitTarget.y + this.orbitState.radius * Math.sin(this.orbitState.elevation),
            this.orbitTarget.z + this.orbitState.radius * ce * Math.cos(this.orbitState.azimuth),
        )
        camera.lookAt(this.orbitTarget)
    }

    handlePointerMove(dx, dy, button) {
        const camera = this._camera()
        if (!camera) return

        if (button === 0) {
            this.orbitState.azimuth -= dx * 0.006
            this.orbitState.elevation = Math.max(
                -Math.PI * 0.49,
                Math.min(Math.PI * 0.49, this.orbitState.elevation - dy * 0.005),
            )
            this.applyOrbitToCamera()
        } else if (button === 1) {
            const viewH = Math.max(1, this.renderer.domElement.clientHeight || this.col.clientHeight || window.innerHeight)
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
                const dist = Math.max(0.001, camera.position.distanceTo(this.orbitTarget))
                const fovRad = THREE.MathUtils.degToRad(camera.fov)
                unitsPerPixel = (2 * Math.tan(fovRad * 0.5) * dist) / viewH
                unitsPerPixel /= Math.max(0.01, camera.zoom)
            }

            delta.copy(right).multiplyScalar(-dx * unitsPerPixel)
            delta.addScaledVector(up, dy * unitsPerPixel)
            camera.position.add(delta)
            this.orbitTarget.add(delta)
            this.syncOrbitFromCamera()
        } else if (button === 2) {
            const yaw = -dx * 0.004
            const pitch = -dy * 0.004
            camera.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yaw)
            camera.rotateX(pitch)
        }
    }

    handleZoom(deltaY) {
        const camera = this._camera()
        if (!camera) return

        if (camera.isPerspectiveCamera) {
            const dir = new THREE.Vector3()
            camera.getWorldDirection(dir)
            const speed = Math.max(2, this.orbitState.radius * 0.08)
            const step = (deltaY > 0 ? 1 : -1) * speed
            camera.position.addScaledVector(dir, step)
            this.syncOrbitFromCamera()
        } else {
            const factor = deltaY > 0 ? 0.92 : 1.08
            camera.zoom = Math.max(0.05, Math.min(64, camera.zoom * factor))
            camera.updateProjectionMatrix()
        }
    }

    _listen(target, eventName, handler, options) {
        target.addEventListener(eventName, handler, options)
        this._disposers.push(() => target.removeEventListener(eventName, handler, options))
    }

    bindEvents() {
        this.dispose()

        this._listen(this.canvas, 'contextmenu', (e) => e.preventDefault())

        this._listen(this.col, 'mousedown', (e) => {
            if (e.target === this.canvas || this.wrapper.contains(e.target) && e.target !== this.col) return
            if (e.button !== 0) return
            this.wrapperState.active = true
            this.wrapperState.lastX = e.clientX
            this.wrapperState.lastY = e.clientY
            e.preventDefault()
        })

        this._listen(this.col, 'touchstart', (e) => {
            if (e.target === this.canvas || this.wrapper.contains(e.target) && e.target !== this.col) return
            if (e.touches.length === 1) {
                this.wrapperState.active = true
                this.wrapperState.lastX = e.touches[0].clientX
                this.wrapperState.lastY = e.touches[0].clientY
            } else if (e.touches.length === 2) {
                this.wrapperState.active = true
                const dx = e.touches[0].clientX - e.touches[1].clientX
                const dy = e.touches[0].clientY - e.touches[1].clientY
                this.wrapperState.pinchDistance = Math.sqrt(dx * dx + dy * dy)
            }
        }, { passive: false })

        this._listen(this.canvas, 'mousedown', (e) => {
            if (e.button !== 0 && e.button !== 1 && e.button !== 2) return
            this.pointerState.active = true
            this.pointerState.button = e.button
            this.pointerState.lastX = e.clientX
            this.pointerState.lastY = e.clientY
            e.preventDefault()
        })

        this._listen(this.canvas, 'touchstart', (e) => {
            if (e.touches.length === 1) {
                this.pointerState.active = true
                this.pointerState.button = 0
                this.pointerState.lastX = e.touches[0].clientX
                this.pointerState.lastY = e.touches[0].clientY
            } else if (e.touches.length === 2) {
                this.pointerState.active = true
                this.pointerState.button = 1
                this.pointerState.lastX = (e.touches[0].clientX + e.touches[1].clientX) / 2
                this.pointerState.lastY = (e.touches[0].clientY + e.touches[1].clientY) / 2

                const dx = e.touches[0].clientX - e.touches[1].clientX
                const dy = e.touches[0].clientY - e.touches[1].clientY
                this.pointerState.pinchDistance = Math.sqrt(dx * dx + dy * dy)
            }
            if (e.cancelable) e.preventDefault()
        }, { passive: false })

        this._listen(window, 'mouseup', () => {
            this.pointerState.active = false
            this.pointerState.button = -1
            this.wrapperState.active = false
        })

        this._listen(window, 'touchend', (e) => {
            if (e.touches.length === 0) {
                this.pointerState.active = false
                this.pointerState.button = -1
                this.wrapperState.active = false
            } else if (e.touches.length === 1) {
                this.pointerState.button = 0
                this.pointerState.lastX = e.touches[0].clientX
                this.pointerState.lastY = e.touches[0].clientY
            }
        })

        this._listen(window, 'mousemove', (e) => {
            if (this.wrapperState.active) {
                const dx = e.clientX - this.wrapperState.lastX
                const dy = e.clientY - this.wrapperState.lastY
                this.wrapperState.lastX = e.clientX
                this.wrapperState.lastY = e.clientY
                this.wrapperState.offsetX += dx
                this.wrapperState.offsetY += dy
                this.updateWrapperTransform?.()
                return
            }

            if (!this.pointerState.active) return
            const dx = e.clientX - this.pointerState.lastX
            const dy = e.clientY - this.pointerState.lastY
            this.pointerState.lastX = e.clientX
            this.pointerState.lastY = e.clientY
            this.handlePointerMove(dx, dy, this.pointerState.button)
        })

        this._listen(window, 'touchmove', (e) => {
            if (this.wrapperState.active) {
                if (e.cancelable) e.preventDefault()

                if (e.touches.length === 1) {
                    const dx = e.touches[0].clientX - this.wrapperState.lastX
                    const dy = e.touches[0].clientY - this.wrapperState.lastY
                    this.wrapperState.lastX = e.touches[0].clientX
                    this.wrapperState.lastY = e.touches[0].clientY
                    this.wrapperState.offsetX += dx
                    this.wrapperState.offsetY += dy
                    this.updateWrapperTransform?.()
                } else if (e.touches.length === 2) {
                    const dx = e.touches[0].clientX - e.touches[1].clientX
                    const dy = e.touches[0].clientY - e.touches[1].clientY
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (this.wrapperState.pinchDistance > 0) {
                        const scaleDiff = (distance - this.wrapperState.pinchDistance) * 0.005
                        const newScale = Math.max(0.05, Math.min(20, this.wrapperState.scale + scaleDiff))
                        this.setCanvasScale?.(Math.round(newScale * 100))
                    }
                    this.wrapperState.pinchDistance = distance
                }
                return
            }

            if (!this.pointerState.active) return
            if (e.cancelable) e.preventDefault()

            if (e.touches.length === 1 && this.pointerState.button === 0) {
                const dx = e.touches[0].clientX - this.pointerState.lastX
                const dy = e.touches[0].clientY - this.pointerState.lastY
                this.pointerState.lastX = e.touches[0].clientX
                this.pointerState.lastY = e.touches[0].clientY
                this.handlePointerMove(dx, dy, 0)
            } else if (e.touches.length === 2 && this.pointerState.button === 1) {
                const currentX = (e.touches[0].clientX + e.touches[1].clientX) / 2
                const currentY = (e.touches[0].clientY + e.touches[1].clientY) / 2

                const dxPinch = e.touches[0].clientX - e.touches[1].clientX
                const dyPinch = e.touches[0].clientY - e.touches[1].clientY
                const currentPinch = Math.sqrt(dxPinch * dxPinch + dyPinch * dyPinch)

                const dxPan = currentX - this.pointerState.lastX
                const dyPan = currentY - this.pointerState.lastY
                this.handlePointerMove(dxPan, dyPan, 1)

                const pinchDelta = this.pointerState.pinchDistance - currentPinch
                if (Math.abs(pinchDelta) > 1) {
                    this.handleZoom(pinchDelta * 0.75)
                    this.pointerState.pinchDistance = currentPinch
                }

                this.pointerState.lastX = currentX
                this.pointerState.lastY = currentY
            }
        }, { passive: false })

        this._listen(this.canvas, 'wheel', (e) => {
            e.preventDefault()
            this.handleZoom(e.deltaY)
        }, { passive: false })

        this._listen(this.col, 'wheel', (e) => {
            if (e.target === this.canvas || this.wrapper.contains(e.target) && e.target !== this.col) return
            e.preventDefault()
            const scaleSpeed = 0.001
            const delta = -e.deltaY * scaleSpeed
            const newScale = Math.max(0.05, Math.min(20, this.wrapperState.scale + delta))
            this.setCanvasScale?.(Math.round(newScale * 100))
        }, { passive: false })
    }

    dispose() {
        for (const off of this._disposers.splice(0)) {
            try { off() } catch { }
        }
    }
}
