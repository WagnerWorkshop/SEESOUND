export function buildFileMenu(body, syncRegistry, deps) {
    const { el, UI_TEXT, BUTTON_ICON_MAP, applyButtonIcon, applySelectedOptionTooltip, params, set, registerSync } = deps
    const panel = el('div', 'cp-menu-pane-inner')
    const TEMPLATE_MANIFEST_URL = '/templates/factory-templates.json'
    const FALLBACK_FACTORY_TEMPLATES = Object.freeze([
        { id: 'linear-basic', title: 'Linear Basic', presetName: 'linear basic', presetPath: '/templates/presets/linear-basic.json', thumbnail: '/templates/thumbnails/linear-basic.svg' },
        { id: 'linear-colors', title: 'Linear Colors', presetName: 'linear colors', presetPath: '/templates/presets/linear-colors.json', thumbnail: '/templates/thumbnails/linear-colors.svg' },
        { id: 'linear-spectrogram-particles', title: 'Linear Spectrogram Particles', presetName: 'linear spectrogram particles', presetPath: '/templates/presets/linear-spectrogram-particles.json', thumbnail: '/templates/thumbnails/linear-colors.svg' },
        { id: 'linear-timbre-colors', title: 'Linear Timbre Colors', presetName: 'linear timbre colors', presetPath: '/templates/presets/linear-timbre-colors.json', thumbnail: '/templates/thumbnails/linear-timbre-colors.svg' },
        { id: 'linear-textured', title: 'Linear Textured', presetName: 'linear textured', presetPath: '/templates/presets/linear-textured.json', thumbnail: '/templates/thumbnails/linear-textured.svg' },
        { id: 'holistic-3d', title: 'Holistic 3D', presetName: 'holistic 3d', presetPath: '/templates/presets/holistic-3d.json', thumbnail: '/templates/thumbnails/holistic-3d.svg' },
    ])

    const shortNameFromFile = (rawName = '') => {
        const fileName = String(rawName || '').trim()
        if (!fileName) return ''
        if (/\.ssp$/i.test(fileName)) return fileName.replace(/\.ssp$/i, '')
        return fileName.replace(/\.[^./\\]+$/g, '')
    }

    const buildExportOptions = () => {
        const labels = UI_TEXT?.file || {}
        return [
            {
                value: 'png',
                label: labels.exportImageOption || 'Image (.png)',
                hint: labels.exportHintPng || 'Current frame with background',
            },
            {
                value: 'png-transparent',
                label: labels.exportImageNoBgOption || 'Transparent image (.png)',
                hint: labels.exportHintPngTransparent || 'Current frame without background',
            },
            {
                value: 'ply',
                label: labels.exportObjOption || '3D mesh (.ply)',
                hint: labels.exportHintObj || 'Scene geometry',
            },
        ]
    }

    const hashString = (input) => {
        const text = String(input || '')
        let out = 0
        for (let i = 0; i < text.length; i += 1) out = ((out << 5) - out) + text.charCodeAt(i)
        return Math.abs(out)
    }

    const createTemplateThumb = (template, title) => {
        const thumb = el('div', 'cp-template-thumb')
        const imageUrl = String(template?.thumbnail || '').trim()
        if (imageUrl) {
            const img = el('img', 'cp-template-thumb-image', { src: imageUrl, alt: title, loading: 'lazy' })
            img.addEventListener('error', () => {
                img.remove()
                thumb.classList.add('is-generated')
                const hue = hashString(title) % 360
                thumb.style.setProperty('--template-hue', String(hue))
                thumb.textContent = String(title || '?').trim().slice(0, 2).toUpperCase()
            }, { once: true })
            thumb.appendChild(img)
            return thumb
        }
        const hue = hashString(title) % 360
        thumb.classList.add('is-generated')
        thumb.style.setProperty('--template-hue', String(hue))
        thumb.textContent = String(title || '?').trim().slice(0, 2).toUpperCase()
        return thumb
    }

    const getRecoveryMessage = (detail = {}) => {
        const template = String(UI_TEXT?.file?.recoveryMessage || 'Recover previous session draft from {time}?').trim()
        const fallbackTime = new Date().toLocaleString()
        const updatedAt = Number(detail?.updatedAt)
        const formattedTime = Number.isFinite(updatedAt)
            ? new Date(updatedAt).toLocaleString()
            : fallbackTime
        const projectName = String(detail?.projectName || detail?.fileName || '').trim()
        return template
            .replaceAll('{time}', formattedTime)
            .replaceAll('{project}', projectName || (UI_TEXT?.file?.projectNew || 'New Project'))
    }

    // ═══════════════════════════════════════════════════════════════════
    // Projects section (merged project + presets)
    // ═══════════════════════════════════════════════════════════════════
    const projectsSection = el('section', 'cp-section')
    const projectsTitleRow = el('div', 'cp-section-title-row')
    const projectsTitle = el('h3', 'cp-section-title', { text: 'Projects' })
    const projectsNameLabel = el('span', 'cp-project-name')
    const defaultProjectLabel = 'New Project'
    let currentProjectName = ''

    const updateProjectsTitle = (name) => {
        const shown = String(name || '').trim() || defaultProjectLabel
        currentProjectName = shown !== defaultProjectLabel ? shown : ''
        projectsNameLabel.textContent = shown
        projectsNameLabel.title = shown
    }
    updateProjectsTitle()
    projectsTitleRow.append(projectsTitle, projectsNameLabel)
    projectsSection.appendChild(projectsTitleRow)

    // Action buttons: New, Open, Save
    const projectsActions = el('div', 'cp-button-grid cp-start-project-actions')
    projectsActions.style.gridTemplateColumns = 'repeat(3, 1fr)'
    const btnNewProject = el('button', 'cp-btn', { text: 'New' })
    const btnOpenProject = el('button', 'cp-btn', { text: 'Open' })
    const btnSaveProject = el('button', 'cp-btn', { text: 'Save' })
    applyButtonIcon(btnNewProject, BUTTON_ICON_MAP.add, 'New')
    applyButtonIcon(btnOpenProject, BUTTON_ICON_MAP.load, 'Open')
    applyButtonIcon(btnSaveProject, BUTTON_ICON_MAP.save, 'Save')
    projectsActions.append(btnNewProject, btnOpenProject, btnSaveProject)
    projectsSection.appendChild(projectsActions)

    // Export As row (only image + 3D options)
    const exportRow = el('div', 'cp-start-export-row')
    const exportSelect = el('select', 'cp-input-select')
    for (const entry of buildExportOptions()) {
        const option = el('option', '', { value: entry.value, text: entry.label })
        if (entry.hint) option.title = String(entry.hint)
        exportSelect.appendChild(option)
    }
    applySelectedOptionTooltip(exportSelect)
    exportSelect.addEventListener('change', () => applySelectedOptionTooltip(exportSelect))
    const btnExportAs = el('button', 'cp-btn', { text: UI_TEXT.file.exportAsAction || UI_TEXT.file.export })
    applyButtonIcon(btnExportAs, BUTTON_ICON_MAP.export, UI_TEXT.file.exportAsAction || UI_TEXT.file.export)
    exportRow.append(exportSelect, btnExportAs)
    projectsSection.appendChild(exportRow)

    // Project grid (list of saved projects/presets)
    const projectGrid = el('div', 'cp-template-grid')

    const formatPresetThumbnail = (data) => {
        if (!data?.thumbnail) return null
        const thumbUrl = String(data.thumbnail).trim()
        if (!thumbUrl) return null
        const img = el('img', 'cp-template-thumb-image', { src: thumbUrl, alt: data.name || '', loading: 'lazy' })
        img.addEventListener('error', () => {
            img.replaceWith(el('div', 'cp-template-thumb is-generated', { text: String(data.name || '?').slice(0, 2).toUpperCase() }))
        }, { once: true })
        return img
    }

    const renderProjects = () => {
        import('../ParamStore.js').then(({ listPresets, loadPreset, savePreset, deletePreset }) => {
            listPresets().then(names => {
                projectGrid.innerHTML = ''

                for (const name of names) {
                    const card = el('button', 'cp-template-card', { type: 'button', 'data-preset-name': name })
                    const thumb = el('div', 'cp-template-thumb is-generated', { text: name.slice(0, 2).toUpperCase() })
                    const title = el('span', 'cp-template-card-title', { text: name })
                    card.append(thumb, title)

                    // Load thumbnail if exists
                    loadPreset(name).then(data => {
                        if (data?.params?.presetThumbnail) {
                            const img = formatPresetThumbnail({ thumbnail: data.params.presetThumbnail, name })
                            if (img) { thumb.replaceWith(img) }
                        }
                    })

                    // Right-click context menu
                    card.addEventListener('contextmenu', (e) => {
                        e.preventDefault()
                        const menu = el('div', 'cp-preset-context-menu')
                        menu.style.left = `${e.clientX}px`
                        menu.style.top = `${e.clientY}px`

                        const renameItem = el('button', 'cp-preset-context-item', { type: 'button', text: 'Rename' })
                        const saveItem = el('button', 'cp-preset-context-item', { type: 'button', text: 'Save to File' })
                        const duplicateItem = el('button', 'cp-preset-context-item', { type: 'button', text: 'Duplicate' })
                        const thumbnailItem = el('button', 'cp-preset-context-item', { type: 'button', text: 'Set Thumbnail' })
                        const clearThumbItem = el('button', 'cp-preset-context-item', { type: 'button', text: 'Clear Thumbnail' })
                        const deleteItem = el('button', 'cp-preset-context-item cp-preset-context-item--danger', { type: 'button', text: 'Delete' })

                        renameItem.addEventListener('click', () => {
                            menu.remove()
                            const newName = prompt('Rename project:', name)
                            if (newName && newName.trim() && newName.trim() !== name) {
                                loadPreset(name).then(data => {
                                    if (data) { savePreset(newName.trim(), { ...data.params, presetThumbnail: data.params?.presetThumbnail || '' }); deletePreset(name); renderProjects() }
                                })
                            }
                        })

                        saveItem.addEventListener('click', () => {
                            menu.remove()
                            window.dispatchEvent(new CustomEvent('seesound:project-save-to-file', { detail: { presetName: name } }))
                        })

                        duplicateItem.addEventListener('click', () => {
                            menu.remove()
                            const dupName = prompt('Duplicate as:', `${name} (copy)`)
                            if (dupName && dupName.trim()) {
                                loadPreset(name).then(data => {
                                    if (data) {
                                        savePreset(dupName.trim(), { ...data.params, presetThumbnail: data.params?.presetThumbnail || '' })
                                        renderProjects()
                                    }
                                })
                            }
                        })

                        thumbnailItem.addEventListener('click', () => {
                            menu.remove()
                            const input = el('input', '', { type: 'file', accept: 'image/*', style: 'display:none' })
                            document.body.appendChild(input)
                            input.addEventListener('change', () => {
                                const file = input.files?.[0]
                                if (!file) { input.remove(); return }
                                const reader = new FileReader()
                                reader.onload = () => {
                                    const base64 = String(reader.result || '')
                                    loadPreset(name).then(data => {
                                        if (data) {
                                            savePreset(name, { ...data.params, presetThumbnail: base64 })
                                            renderProjects()
                                        }
                                    })
                                    input.remove()
                                }
                                reader.readAsDataURL(file)
                            })
                            input.click()
                        })

                        clearThumbItem.addEventListener('click', () => {
                            menu.remove()
                            loadPreset(name).then(data => {
                                if (data) {
                                    const { presetThumbnail, ...rest } = data.params
                                    savePreset(name, rest)
                                    renderProjects()
                                }
                            })
                        })

                        deleteItem.addEventListener('click', () => {
                            menu.remove()
                            if (confirm(`Delete project "${name}"?`)) {
                                deletePreset(name)
                                renderProjects()
                            }
                        })

                        menu.append(renameItem, saveItem, duplicateItem, thumbnailItem, clearThumbItem, deleteItem)
                        document.body.appendChild(menu)

                        const closeMenu = (ev) => {
                            if (!menu.contains(ev.target)) { menu.remove(); document.removeEventListener('pointerdown', closeMenu) }
                        }
                        setTimeout(() => document.addEventListener('pointerdown', closeMenu), 0)
                    })

                    // Left-click: load
                    card.addEventListener('click', () => {
                        window.dispatchEvent(new CustomEvent('seesound:project-load-request', { detail: { presetName: name } }))
                    })
                    projectGrid.appendChild(card)
                }
            })
        })
    }

    // New: save current to browser memory, then reset to blank
    btnNewProject.addEventListener('click', () => {
        import('../ParamStore.js').then(async ({ savePreset, resetToDefaults }) => {
            // Save current state if there's a current project name
            if (currentProjectName) {
                await savePreset(currentProjectName, params)
            }
            resetToDefaults()
            updateProjectsTitle('')
            window.dispatchEvent(new CustomEvent('seesound:project-library-changed'))
            window.dispatchEvent(new CustomEvent('seesound:project-loaded', {
                detail: { projectName: '', presetName: '' },
            }))
        })
    })

    // Open: file picker for .ssp or .json
    btnOpenProject.addEventListener('click', () => {
        const input = document.createElement('input')
        input.type = 'file'; input.accept = '.ssp,.json'; input.style.display = 'none'
        input.addEventListener('change', () => {
            const file = input.files?.[0]
            if (!file) { input.remove(); return }
            window.dispatchEvent(new CustomEvent('seesound:project-file-opened', { detail: { file } }))
            input.remove()
        })
        document.body.appendChild(input); input.click()
    })

    // Save: opens file save picker (SSP)
    btnSaveProject.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-save-to-file', { detail: { presetName: currentProjectName || '' } }))
    })

    // Export As
    btnExportAs.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-export-request', {
            detail: { format: String(exportSelect.value || 'png') },
        }))
    })

    window.addEventListener('seesound:project-loaded', (e) => {
        const presetName = String(e?.detail?.presetName || e?.detail?.projectName || '').trim()
        if (presetName) updateProjectsTitle(presetName)
    })

    window.addEventListener('seesound:factory-template-load-request', (e) => {
        const title = String(e?.detail?.title || e?.detail?.presetName || '').trim()
        if (title) updateProjectsTitle(title)
    })

    projectsSection.appendChild(projectGrid)
    renderProjects()
    window.addEventListener('seesound:project-library-changed', renderProjects)

    // ═══════════════════════════════════════════════════════════════════
    // Tuners section
    // ═══════════════════════════════════════════════════════════════════
    const tunerSection = el('section', 'cp-section cp-tuner-section')
    const tunerTitleRow = el('div', 'cp-section-title-row')
    const tunerTitle = el('h3', 'cp-section-title', { text: 'Tuners' })
    tunerTitleRow.appendChild(tunerTitle)
    tunerSection.appendChild(tunerTitleRow)
    const tunerGrid = el('div', 'cp-tuner-grid')
    tunerSection.appendChild(tunerGrid)
    let tunerDisposeFns = []

    const buildTunerUI = () => {
        for (const fn of tunerDisposeFns) fn()
        tunerDisposeFns = []
        tunerGrid.innerHTML = ''

        const tuners = Array.isArray(params.tuners) ? params.tuners : []
        if (!tuners.length) {
            tunerSection.style.display = 'none'
            return
        }
        tunerSection.style.display = ''

        for (const tuner of tuners) {
            const row = el('div', 'cp-tuner-row')

            const tunerName = String(tuner.label || tuner.id || 'Tuner')
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (s) => s.toUpperCase())
                .trim()
            const label = el('span', 'cp-tuner-label', { text: tunerName })
            label.title = `ID: ${tuner.id}`

            const slider = el('input', 'cp-input-range', {
                type: 'range',
                min: tuner.min ?? 0,
                max: tuner.max ?? 1,
                step: tuner.step ?? 0.01,
                value: String(tuner.value ?? tuner.defaultValue ?? 0),
            })

            const valueDisplay = el('input', 'cp-input-number cp-tuner-value', {
                type: 'number',
                step: tuner.step ?? 0.01,
                value: String(tuner.value ?? tuner.defaultValue ?? 0),
            })

            const syncFromSlider = () => {
                const val = parseFloat(slider.value)
                if (Number.isFinite(val)) {
                    valueDisplay.value = String(val)
                    tuner.value = val
                }
            }
            const syncFromNumber = () => {
                const val = parseFloat(valueDisplay.value)
                if (Number.isFinite(val)) {
                    const clamped = Math.max(tuner.min ?? 0, Math.min(tuner.max ?? 1, val))
                    slider.value = String(clamped)
                    valueDisplay.value = String(clamped)
                    tuner.value = clamped
                }
            }

            slider.addEventListener('input', syncFromSlider)
            valueDisplay.addEventListener('change', syncFromNumber)

            row.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                const menu = el('div', 'cp-preset-context-menu')
                menu.style.left = `${e.clientX}px`
                menu.style.top = `${e.clientY}px`
                const showOrig = el('button', 'cp-preset-context-item', { type: 'button', text: 'Show Original in Rule Builder' })
                showOrig.addEventListener('click', () => {
                    menu.remove()
                    const sliderId = tuner.sliderId || tuner.id
                    if (sliderId) {
                        window.dispatchEvent(new CustomEvent('seesound:show-rule-slider', { detail: { sliderId } }))
                    }
                })
                menu.appendChild(showOrig)
                document.body.appendChild(menu)
                const closeMenu = (ev) => {
                    if (!menu.contains(ev.target)) { menu.remove(); document.removeEventListener('pointerdown', closeMenu) }
                }
                setTimeout(() => document.addEventListener('pointerdown', closeMenu), 0)
            })

            tunerDisposeFns.push(() => {
                const currentTuners = Array.isArray(params.tuners) ? [...params.tuners] : []
                const idx = currentTuners.findIndex(t => (t.id === tuner.id || t.sliderId === tuner.sliderId))
                if (idx >= 0) {
                    currentTuners[idx] = { ...currentTuners[idx], value: tuner.value }
                }
            })

            row.append(label, slider, valueDisplay)
            tunerGrid.appendChild(row)
        }
    }

    buildTunerUI()

    const tunerCleanup = () => {
        const currentTuners = Array.isArray(params.tuners) ? [...params.tuners] : []
        tunerGrid.querySelectorAll('.cp-tuner-row').forEach((row, idx) => {
            const valInput = row.querySelector('.cp-tuner-value')
            if (valInput && currentTuners[idx]) {
                currentTuners[idx].value = parseFloat(valInput.value) || currentTuners[idx].defaultValue || 0
            }
        })
    }
    window.addEventListener('seesound:before-menu-close', tunerCleanup)
    tunerDisposeFns.push(() => window.removeEventListener('seesound:before-menu-close', tunerCleanup))

    const tunerSync = () => {
        const currentTuners = Array.isArray(params.tuners) ? params.tuners : []
        const hasTuners = currentTuners.length > 0
        tunerSection.style.display = hasTuners ? '' : 'none'
        if (hasTuners) buildTunerUI()
    }
    registerSync(syncRegistry, tunerSync, ['tuners'])
    tunerSync()

    // ═══════════════════════════════════════════════════════════════════
    // Templates section
    // ═══════════════════════════════════════════════════════════════════
    const templatesSection = el('section', 'cp-section')
    templatesSection.appendChild(el('h3', 'cp-section-title', {
        text: UI_TEXT.file.factoryTemplates || UI_TEXT.file.presets,
    }))
    const templateStatus = el('div', 'cp-template-status', {
        text: UI_TEXT.file.templatesLoading || 'Loading templates...',
    })
    const templateGrid = el('div', 'cp-template-grid')
    templatesSection.append(templateStatus, templateGrid)

    const renderTemplateList = (templates) => {
        const list = Array.isArray(templates) ? templates : []
        templateGrid.innerHTML = ''
        if (!list.length) {
            templateStatus.textContent = UI_TEXT.file.templatesEmpty || 'No templates available.'
            return
        }
        templateStatus.textContent = ''
        for (const template of list) {
            const title = String(template?.title || template?.name || template?.presetName || '').trim() || 'Template'
            const button = el('button', 'cp-template-card', { type: 'button' })
            button.append(
                createTemplateThumb(template, title),
                el('span', 'cp-template-card-title', { text: title }),
            )
            const copyBtn = el('button', 'cp-template-copy-btn', { type: 'button', text: '+' })
            copyBtn.title = 'Add to My Projects'
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                const projectName = prompt('Save as project name:', title)
                if (projectName && projectName.trim()) {
                    window.dispatchEvent(new CustomEvent('seesound:factory-template-copy-request', {
                        detail: { presetPath: template.presetPath, presetName: projectName.trim() }
                    }))
                }
            })
            button.appendChild(copyBtn)
            button.addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('seesound:factory-template-load-request', {
                    detail: {
                        id: String(template?.id || title).trim(),
                        title,
                        presetName: String(template?.presetName || '').trim(),
                        presetPath: String(template?.presetPath || '').trim(),
                        projectPath: String(template?.projectPath || '').trim(),
                        demoAudioPath: String(template?.demoAudioPath || '').trim(),
                    },
                }))
            })
            templateGrid.appendChild(button)
        }
    }

    const loadFactoryTemplates = async () => {
        templateStatus.textContent = UI_TEXT.file.templatesLoading || 'Loading templates...'
        let templates = []
        try {
            const response = await fetch(TEMPLATE_MANIFEST_URL, { cache: 'no-store' })
            if (response.ok) {
                const parsed = await response.json()
                if (Array.isArray(parsed?.templates)) templates = parsed.templates
                else if (Array.isArray(parsed)) templates = parsed
            }
        } catch {
            templates = []
        }
        if (!templates.length) templates = FALLBACK_FACTORY_TEMPLATES
        renderTemplateList(templates)
    }

    // ═══════════════════════════════════════════════════════════════════
    // Recovery toast
    // ═══════════════════════════════════════════════════════════════════
    const recoveryToast = el('section', 'cp-recovery-toast is-hidden')
    const recoveryTitle = el('div', 'cp-recovery-toast__title', {
        text: UI_TEXT.file.recoveryTitle || 'Recover Project',
    })
    const recoveryText = el('div', 'cp-recovery-toast__text')
    const recoveryActions = el('div', 'cp-recovery-toast__actions')
    const btnRecoveryRestore = el('button', 'cp-btn', { text: UI_TEXT.file.recoveryRestore || 'Recover' })
    const btnRecoveryDismiss = el('button', 'cp-btn', { text: UI_TEXT.file.recoveryDismiss || 'Dismiss' })
    recoveryActions.append(btnRecoveryRestore, btnRecoveryDismiss)
    recoveryToast.append(recoveryTitle, recoveryText, recoveryActions)

    let pendingRecoveryDetail = null
    const hideRecoveryToast = () => {
        recoveryToast.classList.add('is-hidden')
        pendingRecoveryDetail = null
    }

    window.addEventListener('seesound:project-recovery-available', (e) => {
        pendingRecoveryDetail = e?.detail || {}
        recoveryText.textContent = getRecoveryMessage(pendingRecoveryDetail)
        recoveryToast.classList.remove('is-hidden')
    })

    window.addEventListener('seesound:project-recovery-resolved', hideRecoveryToast)

    btnRecoveryRestore.addEventListener('click', () => {
        if (!pendingRecoveryDetail) return
        window.dispatchEvent(new CustomEvent('seesound:project-recovery-restore'))
    })
    btnRecoveryDismiss.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-recovery-dismiss'))
    })

    panel.append(projectsSection, tunerSection, templatesSection, recoveryToast)
    body.appendChild(panel)

    void loadFactoryTemplates()
}
