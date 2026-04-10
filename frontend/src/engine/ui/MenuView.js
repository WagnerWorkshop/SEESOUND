export function buildViewMenu(body, syncRegistry, deps) {
    const {
        el, UI_TEXT, BUTTON_ICON_MAP, params, set, setMany, clamp, applyButtonIcon,
        hslToRgb, rgbToHex, hexToHsl, createSelectOptions, registerSync
    } = deps
    const panel = el('div', 'cp-menu-pane-inner')

    const canvasSection = el('section', 'cp-section')
    canvasSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.canvasSize }))

    const widthInput = el('input', 'cp-input-number', { type: 'number', min: 160, step: 1 })
    const heightInput = el('input', 'cp-input-number', { type: 'number', min: 120, step: 1 })
    const canvasRow = el('div', 'cp-inline-pair')
    canvasRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.width }),
        widthInput,
        el('label', 'cp-setting-label', { text: UI_TEXT.view.height }),
        heightInput,
    )
    canvasSection.appendChild(canvasRow)

    const zoomSlider = el('input', 'cp-input-range', { type: 'range', min: 5, max: 400, step: 1 })
    const zoomNumber = el('input', 'cp-input-number', { type: 'number', min: 5, max: 400, step: 1 })
    const zoomRow = el('div', 'cp-setting-row')
    const zoomLabelWrap = el('div', 'cp-setting-label-wrap')
    zoomLabelWrap.appendChild(el('label', 'cp-setting-label', { text: UI_TEXT.view.canvasZoom }))
    const zoomControls = el('div', 'cp-setting-controls')
    zoomControls.append(zoomSlider, zoomNumber)
    zoomRow.append(zoomLabelWrap, zoomControls)
    canvasSection.appendChild(zoomRow)

    const backgroundSection = el('section', 'cp-section')
    backgroundSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.backgroundColor }))
    const bgColorInput = el('input', 'cp-input-color', { type: 'color' })
    backgroundSection.appendChild(bgColorInput)

    const cameraSection = el('section', 'cp-section')
    cameraSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.cameraPosition }))
    const camPosX = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camPosY = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camPosZ = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const posRow = el('div', 'cp-inline-triplet')
    posRow.append(camPosX, camPosY, camPosZ)
    cameraSection.appendChild(posRow)

    cameraSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.cameraTarget }))
    const camTargetX = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camTargetY = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camTargetZ = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const targetRow = el('div', 'cp-inline-triplet')
    targetRow.append(camTargetX, camTargetY, camTargetZ)
    cameraSection.appendChild(targetRow)

    const cameraActions = el('div', 'cp-button-grid')
    const btnResetCamera = el('button', 'cp-btn', { text: UI_TEXT.view.cameraReset })
    const btnFitCamera = el('button', 'cp-btn', { text: UI_TEXT.view.cameraFit })
    const btnCleanCanvas = el('button', 'cp-btn', { text: UI_TEXT.view.cameraClean })
    applyButtonIcon(btnResetCamera, BUTTON_ICON_MAP.reset, UI_TEXT.view.cameraReset)
    applyButtonIcon(btnFitCamera, BUTTON_ICON_MAP.fit, UI_TEXT.view.cameraFit)
    applyButtonIcon(btnCleanCanvas, BUTTON_ICON_MAP.clean, UI_TEXT.view.cameraClean)
    cameraActions.append(btnResetCamera, btnFitCamera, btnCleanCanvas)
    cameraSection.appendChild(cameraActions)

    const projectionSection = el('section', 'cp-section')
    projectionSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.projection }))

    const projectionSelect = el('select', 'cp-input-select')
    projectionSelect.appendChild(createSelectOptions([
        { value: 'axonometric', label: UI_TEXT.view.projectionAxo },
        { value: 'perspective', label: UI_TEXT.view.projectionPerspective },
    ], params.cameraProjection))

    const axoSelect = el('select', 'cp-input-select')
    axoSelect.appendChild(createSelectOptions([
        { value: 'orthoXY', label: UI_TEXT.view.axoOrthoXY },
        { value: 'topXZ', label: UI_TEXT.view.axoOrthoXZ },
        { value: 'orthoYZ', label: UI_TEXT.view.axoOrthoYZ },
        { value: 'isometric', label: UI_TEXT.view.axoIsometric },
    ], params.cameraAxoPreset))

    projectionSection.append(projectionSelect, axoSelect)

    const fovSection = el('section', 'cp-section')
    fovSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.angleOfView }))
    const fovSlider = el('input', 'cp-input-range', { type: 'range', min: 20, max: 120, step: 1 })
    const fovNumber = el('input', 'cp-input-number', { type: 'number', min: 20, max: 120, step: 1 })
    const fovRow = el('div', 'cp-setting-controls')
    fovRow.append(fovSlider, fovNumber)
    fovSection.appendChild(fovRow)

    const renderModeSection = el('section', 'cp-section')
    const renderModeActions = el('div', 'cp-button-grid cp-view-mode-actions')
    const renderModeButton = el('button', 'cp-btn cp-btn-wide', { type: 'button' })
    const persistModeButton = el('button', 'cp-btn cp-btn-wide', { type: 'button' })
    renderModeActions.append(renderModeButton, persistModeButton)
    renderModeSection.append(renderModeActions)

    const blendingSection = el('section', 'cp-section')
    blendingSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.blending }))
    const blendSelect = el('select', 'cp-input-select')
    blendSelect.appendChild(createSelectOptions([
        { value: 'source-over', label: 'Normal' },
        { value: 'screen', label: 'Screen' },
        { value: 'alpha', label: 'Alpha' },
        { value: 'multiply', label: 'Multiply' },
    ], params.blendMode))
    blendingSection.appendChild(blendSelect)

    const postSection = el('section', 'cp-section')
    postSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.postProcessing }))

    const postEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const bloomEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })

    const postEnabledRow = el('label', 'cp-toggle-row')
    postEnabledRow.append(postEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.postProcessingEnabled }))
    const bloomEnabledRow = el('label', 'cp-toggle-row')
    bloomEnabledRow.append(bloomEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.bloomEnabled }))

    const bloomStrengthSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 4, step: 0.01 })
    const bloomStrengthNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 4, step: 0.01 })
    const bloomStrengthRow = el('div', 'cp-setting-row')
    bloomStrengthRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomStrength }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomStrengthSlider, bloomStrengthNumber)
            return controls
        })(),
    )

    const bloomRadiusSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 2, step: 0.01 })
    const bloomRadiusNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 2, step: 0.01 })
    const bloomRadiusRow = el('div', 'cp-setting-row')
    bloomRadiusRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomRadius }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomRadiusSlider, bloomRadiusNumber)
            return controls
        })(),
    )

    const bloomThresholdSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 1, step: 0.01 })
    const bloomThresholdNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 1, step: 0.01 })
    const bloomThresholdRow = el('div', 'cp-setting-row')
    bloomThresholdRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomThreshold }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomThresholdSlider, bloomThresholdNumber)
            return controls
        })(),
    )

    const fogEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const fogEnabledRow = el('label', 'cp-toggle-row')
    fogEnabledRow.append(fogEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.fogEnabled }))

    const fogDensitySlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 0.02, step: 0.0001 })
    const fogDensityNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 0.02, step: 0.0001 })
    const fogDensityRow = el('div', 'cp-setting-row')
    fogDensityRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.fogDensity }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(fogDensitySlider, fogDensityNumber)
            return controls
        })(),
    )


    postSection.append(
        postEnabledRow,
        bloomEnabledRow,
        bloomStrengthRow,
        bloomRadiusRow,
        bloomThresholdRow,
        fogEnabledRow,
        fogDensityRow,
    )

    const guideSection = el('section', 'cp-section')
    guideSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.guides }))
    const cameraHudToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const cameraHudRow = el('label', 'cp-inline-pair')
    cameraHudRow.append(cameraHudToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.cameraHud }))
    guideSection.append(cameraHudRow)

    widthInput.addEventListener('change', () => {
        const w = Math.max(160, Math.floor(Number(widthInput.value) || 160))
        set('canvasWidth', w)
    })
    heightInput.addEventListener('change', () => {
        const h = Math.max(120, Math.floor(Number(heightInput.value) || 120))
        set('canvasHeight', h)
    })

    const applyCanvasZoomFromSlider = (raw) => {
        const value = clamp(raw, 5, 400)
        set('canvasScale', Math.floor(value))
    }
    const applyCanvasZoomFromNumber = (raw) => {
        const value = Number(raw)
        if (!Number.isFinite(value)) return
        set('canvasScale', Math.floor(value))
    }
    zoomSlider.addEventListener('input', () => applyCanvasZoomFromSlider(Number(zoomSlider.value)))
    zoomNumber.addEventListener('change', () => applyCanvasZoomFromNumber(zoomNumber.value))

    bgColorInput.addEventListener('input', () => {
        const hsl = hexToHsl(bgColorInput.value)
        setMany({
            defaultBackgroundHue: Math.round(hsl.h),
            defaultBackgroundSaturation: Math.round(hsl.s),
            defaultBackgroundLightness: Math.round(hsl.l),
        })
    })

    const syncCameraNumbers = () => {
        camPosX.value = String(Number(params.cameraPosX ?? 0))
        camPosY.value = String(Number(params.cameraPosY ?? 0))
        camPosZ.value = String(Number(params.cameraPosZ ?? 420))
        camTargetX.value = String(Number(params.cameraTargetX ?? 0))
        camTargetY.value = String(Number(params.cameraTargetY ?? 0))
        camTargetZ.value = String(Number(params.cameraTargetZ ?? 0))
    }

    const applyCameraNumbers = () => {
        setMany({
            cameraPosX: Number(camPosX.value) || 0,
            cameraPosY: Number(camPosY.value) || 0,
            cameraPosZ: Number(camPosZ.value) || 0,
            cameraTargetX: Number(camTargetX.value) || 0,
            cameraTargetY: Number(camTargetY.value) || 0,
            cameraTargetZ: Number(camTargetZ.value) || 0,
        })
    }

    for (const input of [camPosX, camPosY, camPosZ, camTargetX, camTargetY, camTargetZ]) {
        input.addEventListener('change', applyCameraNumbers)
    }

    btnResetCamera.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-reset-camera'))
    })

    btnFitCamera.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-fit-camera'))
    })

    btnCleanCanvas.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-clean-canvas'))
    })

    projectionSelect.addEventListener('change', () => set('cameraProjection', projectionSelect.value))
    axoSelect.addEventListener('change', () => set('cameraAxoPreset', axoSelect.value))
    blendSelect.addEventListener('change', () => {
        setMany({
            blendEnabled: 1,
            blendMode: blendSelect.value,
        })
    })

    const applyRenderMode = (nextMode) => {
        const mode = String(nextMode || '')
        if (mode === 'luminous') {
            const nextBlendMode = String(params.blendMode || '') === 'source-over' ? 'screen' : String(params.blendMode || 'screen')
            setMany({
                blendEnabled: 1,
                blendMode: nextBlendMode,
            })
            return
        }

        setMany({
            blendEnabled: 0,
        })
    }

    renderModeButton.addEventListener('click', () => {
        const luminous = Number(params.blendEnabled ?? 0) >= 0.5
        applyRenderMode(luminous ? 'solid' : 'luminous')
    })

    persistModeButton.addEventListener('click', () => {
        const painting = Number(params.persistMode ?? 0) >= 0.5
        set('persistMode', painting ? 0 : 1)
    })

    postEnabled.addEventListener('change', () => set('postProcessEnabled', postEnabled.checked ? 1 : 0))
    bloomEnabled.addEventListener('change', () => set('bloomEnabled', bloomEnabled.checked ? 1 : 0))
    fogEnabled.addEventListener('change', () => set('fogEnabled', fogEnabled.checked ? 1 : 0))

    const bindSliderAndNumber = ({ slider, number, key, min, max }) => {
        const applyFromSlider = (raw) => {
            const value = clamp(raw, min, max)
            set(key, value)
        }
        const applyFromNumber = (raw) => {
            const value = Number(raw)
            if (!Number.isFinite(value)) return
            set(key, value)
        }
        slider.addEventListener('input', () => applyFromSlider(Number(slider.value)))
        number.addEventListener('change', () => applyFromNumber(number.value))
    }

    bindSliderAndNumber({ slider: bloomStrengthSlider, number: bloomStrengthNumber, key: 'bloomStrength', min: 0, max: 4 })
    bindSliderAndNumber({ slider: bloomRadiusSlider, number: bloomRadiusNumber, key: 'bloomRadius', min: 0, max: 2 })
    bindSliderAndNumber({ slider: bloomThresholdSlider, number: bloomThresholdNumber, key: 'bloomThreshold', min: 0, max: 1 })
    bindSliderAndNumber({ slider: fogDensitySlider, number: fogDensityNumber, key: 'fogDensity', min: 0, max: 0.02 })

    const applyFovFromSlider = (value) => {
        set('cameraAngleOfView', clamp(value, 20, 120))
    }

    const applyFovFromNumber = (value) => {
        const n = Number(value)
        if (!Number.isFinite(n)) return
        set('cameraAngleOfView', n)
    }

    fovSlider.addEventListener('input', () => applyFovFromSlider(Number(fovSlider.value)))
    fovNumber.addEventListener('change', () => applyFovFromNumber(fovNumber.value))

    cameraHudToggle.addEventListener('change', () => {
        window.dispatchEvent(new CustomEvent('seesound:camera-hud-toggle', {
            detail: { enabled: cameraHudToggle.checked },
        }))
    })

    window.addEventListener('seesound:camera-hud-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') cameraHudToggle.checked = enabled
    })

    const syncCanvasSize = () => {
        widthInput.value = String(Number(params.canvasWidth ?? 0) || 0)
        heightInput.value = String(Number(params.canvasHeight ?? 0) || 0)
    }

    const syncCanvasZoom = () => {
        const zoomPct = Math.max(5, Math.min(400, Math.floor(Number(params.canvasScale) || 100)))
        zoomSlider.value = String(zoomPct)
        zoomNumber.value = String(zoomPct)
    }

    const syncBackgroundColor = () => {
        const rgb = hslToRgb(
            Number(params.defaultBackgroundHue ?? 0),
            Number(params.defaultBackgroundSaturation ?? 0),
            Number(params.defaultBackgroundLightness ?? 0),
        )
        bgColorInput.value = rgbToHex(rgb.r, rgb.g, rgb.b)
    }

    const syncProjectionControls = () => {
        projectionSelect.value = String(params.cameraProjection || 'axonometric')
        axoSelect.value = String(params.cameraAxoPreset || 'orthoXY')
        const perspectiveActive = projectionSelect.value === 'perspective'
        fovSection.style.display = perspectiveActive ? '' : 'none'
    }

    const syncBlendMode = () => {
        blendSelect.value = String(params.blendMode || 'screen')
    }

    const syncRenderMode = () => {
        const luminous = Number(params.blendEnabled ?? 0) >= 0.5
        const renderModeLabel = luminous
            ? (UI_TEXT.view.renderModeLuminous || 'Luminous')
            : (UI_TEXT.view.renderModePhysical || UI_TEXT.view.renderModeSolid || 'Physical')
        renderModeButton.textContent = renderModeLabel
        renderModeButton.setAttribute('aria-pressed', luminous ? 'true' : 'false')

        blendingSection.style.display = luminous ? '' : 'none'
    }

    const syncPersistMode = () => {
        const painting = Number(params.persistMode ?? 0) >= 0.5
        const momentaryLabel = UI_TEXT.view.persistModeMomentary || 'Momentary'
        const paintingLabel = UI_TEXT.view.persistModePainting || 'Painting'
        const stateLabel = painting ? paintingLabel : momentaryLabel
        persistModeButton.textContent = stateLabel
        persistModeButton.setAttribute('aria-pressed', painting ? 'true' : 'false')
        persistModeButton.title = `${UI_TEXT.settings?.paramLabels?.persistMode || UI_TEXT.view.persistMode || 'Persistence'}: ${stateLabel}`
    }

    const syncFov = () => {
        const fov = Number(params.cameraAngleOfView ?? 55)
        fovSlider.value = String(fov)
        fovNumber.value = String(fov)
    }

    const syncPostEnabled = () => {
        postEnabled.checked = Number(params.postProcessEnabled ?? 0) >= 0.5
        bloomEnabled.checked = Number(params.bloomEnabled ?? 1) >= 0.5
        fogEnabled.checked = Number(params.fogEnabled ?? 1) >= 0.5
    }

    const syncBloomStrength = () => {
        const bloomStrength = Number(params.bloomStrength ?? 1.15)
        bloomStrengthSlider.value = String(bloomStrength)
        bloomStrengthNumber.value = String(bloomStrength)
    }

    const syncBloomRadius = () => {
        const bloomRadius = Number(params.bloomRadius ?? 0.7)
        bloomRadiusSlider.value = String(bloomRadius)
        bloomRadiusNumber.value = String(bloomRadius)
    }

    const syncBloomThreshold = () => {
        const bloomThreshold = Number(params.bloomThreshold ?? 0.18)
        bloomThresholdSlider.value = String(bloomThreshold)
        bloomThresholdNumber.value = String(bloomThreshold)
    }

    const syncFogDensity = () => {
        const fogDensity = Number(params.fogDensity ?? 0.002)
        fogDensitySlider.value = String(fogDensity)
        fogDensityNumber.value = String(fogDensity)
    }

    const syncCameraFields = () => {
        syncCameraNumbers()
    }

    registerSync(syncRegistry, syncCanvasSize, ['canvasWidth', 'canvasHeight'])
    registerSync(syncRegistry, syncCanvasZoom, ['canvasScale'])
    registerSync(syncRegistry, syncBackgroundColor, ['defaultBackgroundHue', 'defaultBackgroundSaturation', 'defaultBackgroundLightness'])
    registerSync(syncRegistry, syncProjectionControls, ['cameraProjection', 'cameraAxoPreset'])
    registerSync(syncRegistry, syncBlendMode, ['blendMode'])
    registerSync(syncRegistry, syncRenderMode, ['blendEnabled', 'blendMode'])
    registerSync(syncRegistry, syncPersistMode, ['persistMode'])
    registerSync(syncRegistry, syncFov, ['cameraAngleOfView'])
    registerSync(syncRegistry, syncPostEnabled, ['postProcessEnabled', 'bloomEnabled', 'fogEnabled'])
    registerSync(syncRegistry, syncBloomStrength, ['bloomStrength'])
    registerSync(syncRegistry, syncBloomRadius, ['bloomRadius'])
    registerSync(syncRegistry, syncBloomThreshold, ['bloomThreshold'])
    registerSync(syncRegistry, syncFogDensity, ['fogDensity'])
    registerSync(syncRegistry, syncCameraFields, ['cameraPosX', 'cameraPosY', 'cameraPosZ', 'cameraTargetX', 'cameraTargetY', 'cameraTargetZ'])

    window.addEventListener('seesound:camera-state', (event) => {
        const detail = event?.detail || {}
        const px = Number(detail.position?.x)
        const py = Number(detail.position?.y)
        const pz = Number(detail.position?.z)
        const tx = Number(detail.target?.x)
        const ty = Number(detail.target?.y)
        const tz = Number(detail.target?.z)
        const fov = Number(detail.fov)
        const projection = String(detail.projection || '')
        if (Number.isFinite(px)) camPosX.value = String(px)
        if (Number.isFinite(py)) camPosY.value = String(py)
        if (Number.isFinite(pz)) camPosZ.value = String(pz)
        if (Number.isFinite(tx)) camTargetX.value = String(tx)
        if (Number.isFinite(ty)) camTargetY.value = String(ty)
        if (Number.isFinite(tz)) camTargetZ.value = String(tz)
        if (Number.isFinite(fov)) {
            fovSlider.value = String(fov)
            fovNumber.value = String(fov)
        }
        if (projection === 'perspective' || projection === 'axonometric') {
            projectionSelect.value = projection
            fovSection.style.display = projection === 'perspective' ? '' : 'none'
        }
    })

    syncCanvasSize()
    syncCanvasZoom()
    syncBackgroundColor()
    syncProjectionControls()
    syncBlendMode()
    syncRenderMode()
    syncPersistMode()
    syncFov()
    syncPostEnabled()
    syncBloomStrength()
    syncBloomRadius()
    syncBloomThreshold()
    syncFogDensity()
    syncCameraFields()
    cameraHudToggle.checked = false

    panel.append(canvasSection, backgroundSection, cameraSection, projectionSection, fovSection, renderModeSection, blendingSection, postSection, guideSection)
    body.appendChild(panel)
}
