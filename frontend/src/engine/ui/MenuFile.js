export function buildFileMenu(body, deps) {
    const { el, UI_TEXT, BUTTON_ICON_MAP, applyButtonIcon, applySelectedOptionTooltip } = deps
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
        if (/\.sspp$/i.test(fileName)) return fileName.replace(/\.sspp$/i, '')
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
            {
                value: 'project-package',
                label: labels.exportProjectPackageOption || 'Project package (.sspp)',
                hint: labels.exportHintProjectPackage || 'All settings, rules and audio',
            },
            {
                value: 'settings-json',
                label: labels.exportSettingsJson || 'Settings (.json)',
                hint: labels.exportHintSettingsJson || 'Current parameter and rule settings',
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

    const projectNameFromFile = (rawName = '') => {
        const fileName = String(rawName || '').trim()
        if (!fileName) return ''
        if (/\.sspp$/i.test(fileName)) return fileName.replace(/\.sspp$/i, '')
        if (/\.ssp$/i.test(fileName)) return fileName.replace(/\.ssp$/i, '')
        return fileName.replace(/\.[^./\\]+$/g, '')
    }

    const projectSection = el('section', 'cp-section')
    const projectTitleRow = el('div', 'cp-section-title-row')
    const projectTitle = el('h3', 'cp-section-title', { text: UI_TEXT.file.myProject || UI_TEXT.file.project })
    const projectNameLabel = el('span', 'cp-project-name')
    const defaultProjectLabel = UI_TEXT.file.projectNew || 'New Project'
    const updateProjectTitle = (detail = {}) => {
        const rawProjectName = String(detail?.projectName || '').trim()
        const rawFileName = String(detail?.fileName || '').trim()
        const shownName = rawProjectName || shortNameFromFile(rawFileName) || defaultProjectLabel
        projectNameLabel.textContent = shownName
        projectNameLabel.title = shownName
    }
    updateProjectTitle()
    projectTitleRow.append(projectTitle, projectNameLabel)
    projectSection.appendChild(projectTitleRow)
    const projectActions = el('div', 'cp-button-grid cp-start-project-actions')
    const btnNewProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectNew })
    const btnLoadProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectOpen || UI_TEXT.file.projectLoad })
    const btnSaveProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectSave })
    const btnSaveAsProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectSaveAs })
    applyButtonIcon(btnNewProject, BUTTON_ICON_MAP.add, UI_TEXT.file.projectNew)
    applyButtonIcon(btnLoadProject, BUTTON_ICON_MAP.load, UI_TEXT.file.projectOpen || UI_TEXT.file.projectLoad)
    applyButtonIcon(btnSaveProject, BUTTON_ICON_MAP.save, UI_TEXT.file.projectSave)
    applyButtonIcon(btnSaveAsProject, BUTTON_ICON_MAP.saveAs, UI_TEXT.file.projectSaveAs)
    projectActions.append(btnNewProject, btnLoadProject, btnSaveProject, btnSaveAsProject)
    projectSection.appendChild(projectActions)

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
    projectSection.appendChild(exportRow)

    btnNewProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-new-request')))
    btnLoadProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-open-request')))
    btnSaveProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-save-request')))
    btnSaveAsProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-save-as-request')))
    btnExportAs.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-export-request', {
            detail: { format: String(exportSelect.value || 'project-package') },
        }))
    })

    window.addEventListener('seesound:project-file-state', (e) => {
        updateProjectTitle(e?.detail || {})
    })
    window.addEventListener('seesound:project-loaded', (e) => {
        updateProjectTitle(e?.detail || {})
    })
    window.addEventListener('seesound:project-autosaved', (e) => {
        updateProjectTitle(e?.detail || {})
    })

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

    panel.append(projectSection, templatesSection, recoveryToast)
    body.appendChild(panel)

    void loadFactoryTemplates()
}
