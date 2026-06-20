export function buildRulesMenu(body, syncRegistry, deps) {
    const {
        el, UI_TEXT, params, set, registerSync, NONE_VAR, RULE_OPERATORS, FIXED_RULE_ROWS, RULE_VARIABLE_ID_SET,
        RULE_SLOT_MARKER_REGEX, BUTTON_ICON_MAP, getRuleText, getRuleSectionLabel, getRuleSubgroupLabel, getRuleRowLabel,
        getRuleVariableById, createRuleConditionInputSelect, createSelectOptions, applyIconOnlyButton, applyButtonIcon,
        renderTokenEditor, readExpressionFromEditor, normalizeExpressionSlotGaps, replaceExpressionVariableAliases,
        parseExpressionToTokens, findRuleVariableSuggestions, captureEditorSelectionRange, restoreEditorSelectionRange,
        insertVariablePillAtCursor, insertFunctionTemplateAtCursor, removeTrailingQueryAtCursor, getAutocompleteQueryAtCursor,
        createRuleTokenValueSelect, createRuleFunctionSelect,
        createRuleExpressionPill, createRuleInlineSlider, normalizeToken,
        readExpressionToCursor, getRuleFunctionParamSlots,
        getRuleFunctionName, getRuleFunctionSlotLabel,
        getOutputDictionary,
    } = deps
    const panel = el('div', 'cp-menu-pane-inner')
    const wrapper = el('div', 'cp-rules-wrapper')

    const stylesSection = el('section', 'cp-section cp-styles-section')
    stylesSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.menu?.styles || UI_TEXT.menu?.rules || 'Styles' }))

    const stylesActions = el('div', 'cp-button-grid cp-styles-actions')
    const backgroundBtn = el('button', 'cp-btn', { text: UI_TEXT.rules?.background || 'Background' })
    const cameraBtn = el('button', 'cp-btn', { text: UI_TEXT.rules?.camera || 'Camera' })
    applyButtonIcon(backgroundBtn, BUTTON_ICON_MAP.duplicate || BUTTON_ICON_MAP.add, backgroundBtn.textContent)
    applyButtonIcon(cameraBtn, BUTTON_ICON_MAP.fit || BUTTON_ICON_MAP.add, cameraBtn.textContent)
    stylesActions.append(backgroundBtn, cameraBtn)
    stylesSection.appendChild(stylesActions)

    const entitySection = el('section', 'cp-section cp-styles-entities')
    entitySection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.rules?.entities || 'Entities' }))
    const entityList = el('div', 'cp-styles-entity-list')
    const entityActions = el('div', 'cp-button-grid')
    const addEntityBtn = el('button', 'cp-btn', { text: UI_TEXT.rules?.addEntity || 'Add Element' })
    applyButtonIcon(addEntityBtn, BUTTON_ICON_MAP.add, addEntityBtn.textContent)
    entityActions.append(addEntityBtn)
    entitySection.append(entityList, entityActions)

    const popup = el('div', 'cp-rules-popup')
    const popupPanel = el('div', 'cp-rules-popup-panel')
    const popupHeader = el('div', 'cp-rules-popup-header')
    const popupTitle = el('div', 'cp-rules-popup-title', { text: UI_TEXT.menu?.rules || 'Styles' })
    const popupClose = el('button', 'cp-btn cp-btn-danger cp-rules-popup-close', { type: 'button' })
    applyIconOnlyButton(popupClose, BUTTON_ICON_MAP.close || BUTTON_ICON_MAP.clear, UI_TEXT.rules?.close || 'Close')
    popupHeader.append(popupTitle, popupClose)
    const popupBody = el('div', 'cp-rules-popup-body')
    const popupMeta = el('div', 'cp-rules-popup-meta')
    popupBody.append(popupMeta, wrapper)
    popupPanel.append(popupHeader, popupBody)
    popup.appendChild(popupPanel)

    panel.append(stylesSection, entitySection, popup)

    const baseRowsByKey = new Map()
    const orderedRows = []
    const sectionToggleByName = new Map()
    const sectionByName = new Map()
    const sectionBodyByName = new Map()
    const sectionRows = new Map()
    let duplicateSequence = 0
    let latestProbeInputs = null

    let activeOwner = { type: 'entity', id: null }
    let popupOpen = false
    let draggingEntityId = null
    let draggingDefinitionId = null

    const RULE_INPUT_IDS = [...RULE_VARIABLE_ID_SET]
    const RULE_INPUT_ENTRIES = RULE_INPUT_IDS
        .map((id) => getRuleVariableById(id))
        .filter(Boolean)
    const expressionEvalCache = new Map()
    function getRuleVariablesByGroupLocal(group) {
        return RULE_INPUT_ENTRIES.filter((entry) => entry.group === group)
    }

    function getActiveEntityShapeType() {
        if (activeOwner.type !== 'entity') return null
        const entity = getRuleEntities().find((entry) => entry.id === activeOwner.id)
        return entity?.entityShapeType || 'particle'
    }

    function getActiveEntitySpacingMode() {
        if (activeOwner.type !== 'entity') return 'coordinates'
        const entity = getRuleEntities().find((entry) => entry.id === activeOwner.id)
        if (entity?.entityShapeType !== 'cloud') return 'coordinates'
        return entity?.spacingMode || 'coordinates'
    }

    function getActiveEntityCloudShape() {
        if (activeOwner.type !== 'entity') return 'cylindrical'
        const entity = getRuleEntities().find((entry) => entry.id === activeOwner.id)
        if (entity?.entityShapeType !== 'cloud') return 'cylindrical'
        return entity?.cloudShape || 'cylindrical'
    }

    function getAllowedTargetsForOwner() {
        if (activeOwner.type === 'background') return new Set(['background'])
        if (activeOwner.type === 'camera') return new Set(['camera'])
        if (activeOwner.type !== 'entity') return new Set()
        const shape = getActiveEntityShapeType()
        if (shape === 'line') return new Set(['lines'])
        if (shape === 'cloud') return new Set(['spawnedParticles', 'allParticles'])
        return new Set(['spawnedParticles'])
    }

    function isDefinitionAllowed(definition) {
        const allowedTargets = getAllowedTargetsForOwner()
        if (!allowedTargets.has(definition?.target)) return false
        if (activeOwner.type !== 'entity') return true
        const shape = getActiveEntityShapeType()
        if (Array.isArray(definition?.entityShapes) && !definition.entityShapes.includes(shape)) return false
        if (Array.isArray(definition?.entityExclude) && definition.entityExclude.includes(shape)) return false
        // Spacing mode gating (only for cloud entities)
        if (shape === 'cloud' && Array.isArray(definition?.spacingModes)) {
            const spacing = getActiveEntitySpacingMode()
            if (!definition.spacingModes.includes(spacing)) return false
        }
        // Cloud shape gating (only for cloud aura rules)
        if (shape === 'cloud' && Array.isArray(definition?.cloudShapes)) {
            const cloudShape = getActiveEntityCloudShape()
            if (!definition.cloudShapes.includes(cloudShape)) return false
        }
        return true
    }

    function getAllowedRuleVariableGroups() {
        if (activeOwner.type === 'background' || activeOwner.type === 'camera') return ['overall']
        const groups = ['detail', 'overall']
        if (getActiveEntityShapeType() === 'cloud') groups.push('entity')
        return groups
    }

    function getAllowedRuleVariableIds() {
        const groups = getAllowedRuleVariableGroups()
        const ids = new Set()
        for (const group of groups) {
            for (const entry of getRuleVariablesByGroupLocal(group)) {
                if (entry?.id) ids.add(entry.id)
            }
        }
        // Mode-gate by current engine mode (params.objectMode).
        // Per-bin variables are particle-only; entity variables are cloud-only.
        const mode = String(params.objectMode || 'particle')
        const cloudOnly = new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote',
            'entityCentroid', 'entityFlatness', 'entityInharmonicity', 'entityVolume',
            'globalTransient', 'entityAge', 'streamId'])
        // Per-bin variables are available in ALL modes; only entity variables are cloud-only.
        if (mode === 'particle') {
            for (const id of ids) if (cloudOnly.has(id)) ids.delete(id)
        }
        // Cloud mode: all variables allowed (per-bin + entity + overall)
        return ids
    }
    const EVAL_HELPERS = Object.freeze({
        clamp: (x, lo, hi) => Math.max(lo, Math.min(hi, x)),
        lerp: (a, b, t) => a + (b - a) * t,
        smoothstep: (e0, e1, x) => {
            const span = Math.max(1e-9, e1 - e0)
            const t = Math.max(0, Math.min(1, (x - e0) / span))
            return t * t * (3 - 2 * t)
        },
        pow: Math.pow,
        mod: (value, max) => {
            const v = Number(value)
            const m = Number(max)
            if (!Number.isFinite(v) || !Number.isFinite(m) || Math.abs(m) < 1e-9) return 0
            return ((v % m) + m) % m
        },
        log: (x) => { const v = Number(x); return Number.isFinite(v) && v > 0 ? Math.log(v) : 0 },
        log2: (x) => { const v = Number(x); return Number.isFinite(v) && v > 0 ? Math.log2(v) : 0 },
        log10: (x) => { const v = Number(x); return Number.isFinite(v) && v > 0 ? Math.log10(v) : 0 },
        sin: Math.sin,
        cos: Math.cos,
        step: (edge, value) => (value < edge ? 0 : 1),
        iif: (condition, trueVal, falseVal) => (condition ? trueVal : falseVal),
        min: Math.min,
        max: Math.max,
        abs: Math.abs,
        avg: (...values) => {
            const nums = values.map((value) => Number(value)).filter((value) => Number.isFinite(value))
            if (nums.length === 0) return 0
            return nums.reduce((sum, value) => sum + value, 0) / nums.length
        },
        floor: Math.floor,
        ceil: Math.ceil,
        round: Math.round,
    })
    const EVAL_HELPER_NAMES = Object.keys(EVAL_HELPERS)
    const EVAL_HELPER_VALUES = EVAL_HELPER_NAMES.map((name) => EVAL_HELPERS[name])

    function getRuleEntities() {
        return Array.isArray(params.ruleEntities) ? params.ruleEntities : []
    }

    function setRuleEntities(next) {
        set('ruleEntities', Array.isArray(next) ? next : [])
    }

    function getRuleGlobals() {
        const globals = (params.ruleGlobalBlocks && typeof params.ruleGlobalBlocks === 'object') ? params.ruleGlobalBlocks : {}
        return {
            background: Array.isArray(globals.background) ? globals.background : [],
            camera: Array.isArray(globals.camera) ? globals.camera : [],
        }
    }

    function setRuleGlobals(next) {
        const source = (next && typeof next === 'object') ? next : {}
        set('ruleGlobalBlocks', {
            background: Array.isArray(source.background) ? source.background : [],
            camera: Array.isArray(source.camera) ? source.camera : [],
        })
    }

    function ensureActiveOwner() {
        const entities = getRuleEntities()
        if (!entities.length) {
            setRuleEntities([{ id: 'entity-all', name: 'All', enabled: true, order: 0, entityShapeType: 'particle', definitions: [], rules: [] }])
            activeOwner = { type: 'entity', id: 'entity-all' }
            return
        }
        if (activeOwner.type === 'entity') {
            const match = entities.find((entity) => entity.id === activeOwner.id)
            if (!match) activeOwner = { type: 'entity', id: entities[0].id }
        }
    }

    function getActiveRules() {
        ensureActiveOwner()
        if (activeOwner.type === 'background') return getRuleGlobals().background
        if (activeOwner.type === 'camera') return getRuleGlobals().camera
        const entity = getRuleEntities().find((entry) => entry.id === activeOwner.id)
        return Array.isArray(entity?.rules) ? entity.rules : []
    }

    function setActiveRules(nextRules) {
        ensureActiveOwner()
        const safeRules = Array.isArray(nextRules) ? nextRules : []
        if (activeOwner.type === 'background') {
            const globals = getRuleGlobals()
            globals.background = safeRules
            setRuleGlobals(globals)
            return
        }
        if (activeOwner.type === 'camera') {
            const globals = getRuleGlobals()
            globals.camera = safeRules
            setRuleGlobals(globals)
            return
        }
        const entities = getRuleEntities()
        const nextEntities = entities.map((entity) => {
            if (entity.id !== activeOwner.id) return entity
            return { ...entity, rules: safeRules }
        })
        setRuleEntities(nextEntities)
    }

    function openPopupForOwner(owner) {
        activeOwner = owner
        popupOpen = true
        popup.classList.remove('is-display-none')
        popup.classList.add('is-open')
        renderPopupMeta()
        updateOwnerSectionVisibility()
        applyRowsFromRuleBlocks(getActiveRules())
    }

    function closePopup() {
        popupOpen = false
        popup.classList.remove('is-open')
        popup.classList.add('is-display-none')
    }

    function renderEntityList() {
        const entities = [...getRuleEntities()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        entityList.innerHTML = ''
        entities.forEach((entity, index) => {
            const row = el('div', 'cp-styles-entity-row')
            row.draggable = true
            row.dataset.entityId = entity.id
            if (entity.enabled === false) row.classList.add('is-disabled')

            // Enable/disable toggle (checkbox styled as cp-input-toggle)
            const toggleCheck = el('input', 'cp-input-toggle', {
                type: 'checkbox',
                checked: entity.enabled !== false ? 'checked' : undefined,
                title: entity.enabled === false ? 'Enable element' : 'Disable element',
            })
            toggleCheck.checked = entity.enabled !== false
            toggleCheck.addEventListener('change', (e) => {
                e.stopPropagation()
                const nextEnabled = toggleCheck.checked
                const nextEntities = getRuleEntities().map((entry) =>
                    entry.id === entity.id ? { ...entry, enabled: nextEnabled } : entry
                )
                setRuleEntities(nextEntities)
                renderEntityList()
            })

            // Badge showing type + spacing
            const typeBadge = el('span', 'cp-styles-entity-badge')
            let badgeText = entity.entityShapeType || 'particle'
            if (entity.entityShapeType === 'cloud' && entity.spacingMode === 'network') {
                badgeText = 'cloud·net'
            } else if (entity.entityShapeType === 'cloud') {
                badgeText = `cloud·${entity.cloudShape || 'cyl'}`
            }
            typeBadge.textContent = badgeText

            const nameBtn = el('button', 'cp-btn cp-styles-entity-name', { text: entity.name || `Entity ${index + 1}` })
            const editBtn = el('button', 'cp-btn', { text: UI_TEXT.rules?.editEntity || 'Edit' })
            const removeBtn = el('button', 'cp-btn cp-btn-danger', { text: UI_TEXT.rules?.removeEntity || 'Remove' })
            nameBtn.addEventListener('click', () => openPopupForOwner({ type: 'entity', id: entity.id }))
            editBtn.addEventListener('click', () => openPopupForOwner({ type: 'entity', id: entity.id }))
            removeBtn.addEventListener('click', () => {
                const next = getRuleEntities().filter((entry) => entry.id !== entity.id)
                setRuleEntities(next)
                if (activeOwner.type === 'entity' && activeOwner.id === entity.id) {
                    activeOwner = { type: 'entity', id: next[0]?.id || null }
                    if (popupOpen) renderPopupMeta()
                }
            })

            row.addEventListener('dragstart', () => {
                draggingEntityId = entity.id
                row.classList.add('is-dragging')
            })
            row.addEventListener('dragend', () => {
                draggingEntityId = null
                row.classList.remove('is-dragging')
            })
            row.addEventListener('dragover', (event) => {
                event.preventDefault()
            })
            row.addEventListener('drop', (event) => {
                event.preventDefault()
                if (!draggingEntityId || draggingEntityId === entity.id) return
                const ordered = [...getRuleEntities()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                const fromIndex = ordered.findIndex((entry) => entry.id === draggingEntityId)
                const toIndex = ordered.findIndex((entry) => entry.id === entity.id)
                if (fromIndex < 0 || toIndex < 0) return
                const moved = ordered.splice(fromIndex, 1)[0]
                ordered.splice(toIndex, 0, moved)
                const normalized = ordered.map((entry, idx) => ({ ...entry, order: idx }))
                setRuleEntities(normalized)
            })

            row.append(toggleCheck, typeBadge, nameBtn, editBtn, removeBtn)
            entityList.appendChild(row)
        })
    }

    function renderPopupMeta() {
        popupMeta.innerHTML = ''
        if (!popupOpen) return

        if (activeOwner.type === 'background' || activeOwner.type === 'camera') {
            const label = activeOwner.type === 'background'
                ? (UI_TEXT.rules?.background || 'Background')
                : (UI_TEXT.rules?.camera || 'Camera')
            popupTitle.textContent = label
            popupMeta.appendChild(el('div', 'cp-styles-popup-note', { text: label }))
            return
        }

        const entity = getRuleEntities().find((entry) => entry.id === activeOwner.id)
        if (!entity) return
        popupTitle.textContent = entity.name || 'Entity'

        const header = el('div', 'cp-styles-popup-header')
        const nameInput = el('input', 'cp-input-text', { value: entity.name || '' })
        nameInput.addEventListener('change', () => {
            const nextName = String(nameInput.value || '').trim() || entity.name
            const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, name: nextName } : entry))
            setRuleEntities(nextEntities)
            popupTitle.textContent = nextName
            renderEntityList()
        })
        // Show a read-only badge for type/spacing
        const infoLine = el('div', 'cp-styles-entity-info')
        const shapeLabel = entity.entityShapeType || 'particle'
        let infoText = `Type: ${shapeLabel}`
        if (entity.entityShapeType === 'cloud') {
            infoText += ` · Spacing: ${entity.spacingMode || 'coordinates'} · Shape: ${entity.cloudShape || 'cylindrical'}`
        }
        infoLine.textContent = infoText

        header.append(
            el('label', 'cp-setting-label', { text: UI_TEXT.rules?.entityName || 'Entity Name' }),
            nameInput,
            infoLine,
        )
        popupMeta.appendChild(header)

        const definitionsSection = el('div', 'cp-styles-definitions')
        const definitionsHeader = el('div', 'cp-styles-definitions-header')
        definitionsHeader.appendChild(el('h4', 'cp-section-title', { text: UI_TEXT.rules?.definitions || 'Definitions' }))

        const definitionsList = el('div', 'cp-styles-definition-list')
        const definitions = Array.isArray(entity.definitions) ? entity.definitions : []
        definitions.forEach((def) => {
            const defRow = el('div', 'cp-styles-definition-row')
            defRow.draggable = true
            defRow.dataset.definitionId = def.id
            const defName = el('input', 'cp-input-text cp-styles-definition-name', { value: def.name || 'Filter' })
            const filterWrap = el('div', 'cp-styles-definition-filter')
            const filterPrefix = el('span', 'cp-styles-definition-filter-prefix', { text: `${UI_TEXT.rules?.filterIf || 'if'} (` })
            const filterInput = el('input', 'cp-input-text cp-styles-definition-filter-input', {
                value: String(def.expression || ''),
                placeholder: UI_TEXT.rules?.filterPlaceholder || 'amplitude > 0.2',
            })
            const filterSuffix = el('span', 'cp-styles-definition-filter-suffix', { text: ')' })
            filterWrap.append(filterPrefix, filterInput, filterSuffix)
            const defRemove = el('button', 'cp-btn cp-btn-danger', { text: UI_TEXT.rules?.removeDefinition || 'Remove' })
            defName.addEventListener('change', () => {
                const nextName = String(defName.value || '').trim() || def.name || 'Filter'
                const nextDefs = definitions.map((entry) => (entry.id === def.id ? { ...entry, name: nextName } : entry))
                const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, definitions: nextDefs } : entry))
                setRuleEntities(nextEntities)
            })
            filterInput.addEventListener('change', () => {
                const nextExpr = String(filterInput.value || '').trim()
                const nextDefs = definitions.map((entry) => (entry.id === def.id ? { ...entry, expression: nextExpr } : entry))
                const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, definitions: nextDefs } : entry))
                setRuleEntities(nextEntities)
            })
            defRemove.addEventListener('click', () => {
                const nextDefs = definitions.filter((entry) => entry.id !== def.id)
                const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, definitions: nextDefs } : entry))
                setRuleEntities(nextEntities)
                renderPopupMeta()
            })

            defRow.addEventListener('dragstart', () => {
                draggingDefinitionId = def.id
                defRow.classList.add('is-dragging')
            })
            defRow.addEventListener('dragend', () => {
                draggingDefinitionId = null
                defRow.classList.remove('is-dragging')
            })
            defRow.addEventListener('dragover', (event) => {
                event.preventDefault()
            })
            defRow.addEventListener('drop', (event) => {
                event.preventDefault()
                if (!draggingDefinitionId || draggingDefinitionId === def.id) return
                const ordered = [...definitions]
                const fromIndex = ordered.findIndex((entry) => entry.id === draggingDefinitionId)
                const toIndex = ordered.findIndex((entry) => entry.id === def.id)
                if (fromIndex < 0 || toIndex < 0) return
                const moved = ordered.splice(fromIndex, 1)[0]
                ordered.splice(toIndex, 0, moved)
                const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, definitions: ordered } : entry))
                setRuleEntities(nextEntities)
            })

            defRow.append(defName, filterWrap, defRemove)
            definitionsList.appendChild(defRow)
        })

        const addDefinitionBtn = el('button', 'cp-btn', { text: UI_TEXT.rules?.addDefinition || 'Add Filter' })
        applyButtonIcon(addDefinitionBtn, BUTTON_ICON_MAP.add, addDefinitionBtn.textContent)
        addDefinitionBtn.addEventListener('click', () => {
            const baseName = UI_TEXT.rules?.newDefinitionPrompt || 'Filter'
            const existingNames = new Set(definitions.map((entry) => String(entry?.name || '').trim()).filter(Boolean))
            let index = 1
            let nextName = `${baseName} ${index}`
            while (existingNames.has(nextName)) {
                index += 1
                nextName = `${baseName} ${index}`
            }
            const nextDefs = [...definitions, { id: `def-${Date.now()}`, name: nextName, expression: '' }]
            const nextEntities = getRuleEntities().map((entry) => (entry.id === entity.id ? { ...entry, definitions: nextDefs } : entry))
            setRuleEntities(nextEntities)
            renderPopupMeta()
        })

        definitionsSection.append(definitionsHeader, definitionsList, addDefinitionBtn)
        popupMeta.appendChild(definitionsSection)
    }

    function updateOwnerSectionVisibility() {
        wrapper.classList.toggle('is-entity-owner', activeOwner.type === 'entity')
        const targetSet = getAllowedTargetsForOwner()
        for (const rowState of orderedRows) {
            if (!rowState?.card) continue
            rowState.card.style.display = isDefinitionAllowed(rowState.definition) ? '' : 'none'
        }
        for (const [sectionName, sectionEl] of sectionByName.entries()) {
            const rows = sectionRows.get(sectionName) || []
            const hasTarget = rows.some((row) => isDefinitionAllowed(row.definition))
            sectionEl.style.display = hasTarget ? '' : 'none'
        }
    }

    backgroundBtn.addEventListener('click', () => openPopupForOwner({ type: 'background' }))
    cameraBtn.addEventListener('click', () => openPopupForOwner({ type: 'camera' }))
    popupClose.addEventListener('click', () => closePopup())
    popup.addEventListener('click', (event) => {
        if (event.target === popup) closePopup()
    })
    addEntityBtn.addEventListener('click', () => {
        openEntityCreationModal()
    })

    function openEntityCreationModal() {
        // Build a creation overlay
        const backdrop = el('div', 'cp-modal-backdrop')
        const panel = el('div', 'cp-entity-creation-panel')
        const title = el('div', 'cp-entity-creation-title', { text: UI_TEXT.rules?.newEntityPrompt || 'Create Element' })
        const closeBtn = el('button', 'cp-btn cp-btn-danger cp-entity-creation-close', { type: 'button' })
        applyIconOnlyButton(closeBtn, BUTTON_ICON_MAP.close, 'Close')
        closeBtn.addEventListener('click', () => backdrop.remove())

        // Name
        const nameRow = el('label', 'cp-setting-row')
        const nameLabel = el('span', 'cp-setting-label', { text: UI_TEXT.rules?.entityName || 'Name' })
        const nameInput = el('input', 'cp-input-text', {
            type: 'text',
            placeholder: 'My Element',
            value: '',
        })
        nameRow.append(nameLabel, nameInput)

        // Entity type
        const typeRow = el('label', 'cp-setting-row')
        const typeLabel = el('span', 'cp-setting-label', { text: UI_TEXT.rules?.shapeType || 'Type' })
        const typeSelect = el('select', 'cp-input-select')
        typeSelect.appendChild(createSelectOptions([
            { value: 'particle', label: UI_TEXT.rules?.shapeParticle || 'Particle' },
            { value: 'cloud', label: UI_TEXT.rules?.shapeCloud || 'Cloud' },
            { value: 'line', label: UI_TEXT.rules?.shapeLine || 'Line' },
        ], 'particle'))
        typeRow.append(typeLabel, typeSelect)

        // Spacing mode (cloud only)
        const spacingRow = el('label', 'cp-setting-row')
        spacingRow.style.display = 'none'
        const spacingLabel = el('span', 'cp-setting-label', { text: UI_TEXT.rules?.spacingMode || 'Spacing' })
        const spacingSelect = el('select', 'cp-input-select')
        spacingSelect.appendChild(createSelectOptions([
            { value: 'coordinates', label: UI_TEXT.rules?.spacingCoordinates || 'Coordinates' },
            { value: 'network', label: UI_TEXT.rules?.spacingNetwork || 'Network' },
        ], 'coordinates'))
        spacingRow.append(spacingLabel, spacingSelect)
        typeSelect.addEventListener('change', () => {
            spacingRow.style.display = typeSelect.value === 'cloud' ? '' : 'none'
            cloudShapeRow.style.display = typeSelect.value === 'cloud' ? '' : 'none'
        })

        // Cloud shape (cloud only)
        const cloudShapeRow = el('label', 'cp-setting-row')
        cloudShapeRow.style.display = 'none'
        const cloudShapeLabel = el('span', 'cp-setting-label', { text: UI_TEXT.rules?.cloudShape || 'Cloud Shape' })
        const cloudShapeSelect = el('select', 'cp-input-select')
        cloudShapeSelect.appendChild(createSelectOptions([
            { value: 'cylindrical', label: UI_TEXT.rules?.cloudCylindrical || 'Cylindrical' },
            { value: 'spherical', label: UI_TEXT.rules?.cloudSpherical || 'Spherical' },
            { value: 'random', label: UI_TEXT.rules?.cloudRandom || 'Random 3D' },
        ], 'cylindrical'))
        cloudShapeRow.append(cloudShapeLabel, cloudShapeSelect)

        const actions = el('div', 'cp-button-grid')
        const cancelBtn = el('button', 'cp-btn cp-btn-danger', { type: 'button', text: UI_TEXT.file?.projectNameCancel || 'Cancel' })
        cancelBtn.addEventListener('click', () => backdrop.remove())
        const createBtn = el('button', 'cp-btn', { type: 'button', text: UI_TEXT.rules?.createEntity || 'Create' })
        applyButtonIcon(createBtn, BUTTON_ICON_MAP.add, 'Create')
        createBtn.addEventListener('click', () => {
            const rawName = String(nameInput.value || '').trim()
            const nextName = rawName || `Element ${getRuleEntities().length + 1}`
            const nextType = typeSelect.value || 'particle'
            const nextSpacing = spacingSelect.value || 'coordinates'
            const nextCloudShape = cloudShapeSelect.value || 'cylindrical'
            const nextEntities = [...getRuleEntities(), {
                id: `entity-${Date.now()}`,
                name: nextName,
                enabled: true,
                order: getRuleEntities().length,
                entityShapeType: nextType,
                spacingMode: nextType === 'cloud' ? nextSpacing : 'coordinates',
                cloudShape: nextType === 'cloud' ? nextCloudShape : 'cylindrical',
                definitions: [],
                rules: [],
            }]
            setRuleEntities(nextEntities)
            renderEntityList()
            backdrop.remove()
        })
        actions.append(cancelBtn, createBtn)

        const body = el('div', 'cp-entity-creation-body')
        body.append(nameRow, typeRow, spacingRow, cloudShapeRow, actions)

        const header = el('div', 'cp-entity-creation-header')
        header.append(title, closeBtn)
        panel.append(header, body)
        backdrop.appendChild(panel)
        document.body.appendChild(backdrop)
        nameInput.focus()
    }

    function normalizeExpressionSyntax(expression) {
        let next = String(expression || '').trim()
        if (!next) return ''
        next = next.replace(/×/g, '*').replace(/÷/g, '/')
        next = next.replace(/\band\b/gi, '&&')
        next = next.replace(/\bor\b/gi, '||')
        next = next.replace(/\bnot\b/gi, '!')
        next = next.replace(/\bif\s*\(/gi, 'iif(')
        return next
    }

    function getInputValue(inputs, key) {
        const raw = inputs && Object.prototype.hasOwnProperty.call(inputs, key) ? inputs[key] : 0
        const numeric = Number(raw)
        return Number.isFinite(numeric) ? numeric : 0
    }

    function getExpressionEvaluator(expression) {
        const normalized = normalizeExpressionSyntax(expression)
        if (!normalized) return null
        if (expressionEvalCache.has(normalized)) return expressionEvalCache.get(normalized)

        try {
            const fn = new Function(...RULE_INPUT_IDS, ...EVAL_HELPER_NAMES, `return (${normalized});`)
            const evaluator = (inputs) => {
                const inputValues = RULE_INPUT_IDS.map((id) => getInputValue(inputs, id))
                return fn(...inputValues, ...EVAL_HELPER_VALUES)
            }
            expressionEvalCache.set(normalized, evaluator)
            return evaluator
        } catch {
            expressionEvalCache.set(normalized, null)
            return null
        }
    }

    function evaluateExpressionValue(expression, inputs) {
        const text = String(expression || '').trim()
        if (!text) return { value: null, error: false }

        const executable = text.replace(RULE_SLOT_MARKER_REGEX, '0')
        const numeric = Number(executable)
        if (Number.isFinite(numeric) && /^[-+]?\d+(\.\d+)?$/.test(executable)) {
            return { value: numeric, error: false }
        }

        if (RULE_VARIABLE_ID_SET.has(executable)) {
            return { value: getInputValue(inputs, executable), error: false }
        }

        const evaluator = getExpressionEvaluator(executable)
        if (!evaluator) return { value: null, error: true }
        try {
            return { value: evaluator(inputs), error: false }
        } catch {
            return { value: null, error: true }
        }
    }

    function evaluateRowCondition(rowState, inputs) {
        if (!rowState?.conditionEnabled || rowState.conditionOperator === 'always') return true

        const lhsInputId = rowState.conditionDetail !== NONE_VAR
            ? rowState.conditionDetail
            : (rowState.conditionOverall !== NONE_VAR ? rowState.conditionOverall : '')
        if (!lhsInputId) return true

        const lhs = getInputValue(inputs, lhsInputId)
        const rhs = rowState.conditionValueInput !== NONE_VAR
            ? getInputValue(inputs, rowState.conditionValueInput)
            : (Number(rowState.conditionValue) || 0)

        switch (rowState.conditionOperator) {
            case '>': return lhs > rhs
            case '>=': return lhs >= rhs
            case '<': return lhs < rhs
            case '<=': return lhs <= rhs
            case '==': return lhs === rhs
            case '!=': return lhs !== rhs
            default: return true
        }
    }

    function formatOutputValue(value) {
        if (Array.isArray(value)) {
            return `[${value.map((entry) => formatOutputValue(entry)).join(', ')}]`
        }
        if (typeof value === 'boolean') return value ? 'true' : 'false'
        if (typeof value === 'number') {
            if (!Number.isFinite(value)) return 'NaN'
            if (Math.abs(value) >= 1000 || Math.abs(value) < 0.0001) return value.toExponential(3)
            const rounded = Math.round(value * 10000) / 10000
            return String(rounded)
        }
        if (value === null || value === undefined) return '--'
        return String(value)
    }

    function rowKey(target, output, section = '') {
        return `${target}:${output}:${section || ''}`
    }

    function createInstanceId(definition, isDuplicate = false) {
        const base = `${definition.target}-${definition.output}-${definition.section || 'section'}`
        if (!isDuplicate) return `${base}-base`
        duplicateSequence += 1
        return `${base}-dup-${duplicateSequence}`
    }

    function createRowState(definition, isDuplicate = false) {
        return {
            definition,
            instanceId: createInstanceId(definition, isDuplicate),
            isDuplicate,
            instanceNumber: isDuplicate ? 2 : 1,
            enabled: false,
            collapsed: false,
            conditionEnabled: false,
            conditionOperator: 'always',
            conditionDetail: NONE_VAR,
            conditionOverall: NONE_VAR,
            conditionValue: 0,
            conditionValueInput: NONE_VAR,
            expression: '',
            tokens: [],
            insertContext: null,
            pendingInsertIndex: null,
            dragTokenIndex: null,
            enumValue: definition.options?.[0] || 'square',
            toggle: null,
            card: null,
            conditionRow: null,
            syncConditionUi: null,
            tokenEditor: null,
            expressionInput: null,
            onExpressionChanged: null,
            enumSelect: null,
            valueActionSelect: null,
            actionSelect: null,
            duplicateBtn: null,
            removeBtn: null,
            collapseBtn: null,
            collapseIcon: null,
            titleEl: null,
            activePill: null,
            draggingPill: null,
            dropMarker: null,
            editorEventsBound: false,
            suppressNextBlurRerender: false,
            pillContextMenu: null,
            pillContextMenuTarget: null,
            pillContextMenuEventsBound: false,
            outputPreviewEl: null,
        }
    }

    function resetRowState(rowState) {
        rowState.enabled = false
        rowState.collapsed = false
        rowState.conditionEnabled = false
        rowState.conditionOperator = 'always'
        rowState.conditionDetail = NONE_VAR
        rowState.conditionOverall = NONE_VAR
        rowState.conditionValue = 0
        rowState.conditionValueInput = NONE_VAR
        rowState.expression = ''
        rowState.tokens = []
        rowState.insertContext = null
        rowState.pendingInsertIndex = null
        rowState.enumValue = rowState.definition.options?.[0] || 'square'
        rowState.activePill = null
        rowState.draggingPill = null
        rowState.suppressNextBlurRerender = false
        rowState.pillContextMenuTarget = null
        rowState.dropMarker?.remove()
        rowState.dropMarker = null
    }

    function toActionFromState(rowState) {
        const output = rowState.definition.output
        if (rowState.definition.type === 'enum') {
            return {
                operator: 'set',
                output,
                value: rowState.enumValue || rowState.definition.options?.[0] || 'square',
            }
        }

        const text = String(rowState.expression || '').trim()
        rowState.expression = text
        if (!text) return null

        const executableText = text.replace(RULE_SLOT_MARKER_REGEX, '0')

        const numeric = Number(executableText)
        if (Number.isFinite(numeric) && /^[-+]?\d+(\.\d+)?$/.test(executableText)) {
            return {
                operator: 'set',
                output,
                value: numeric,
            }
        }

        if (RULE_VARIABLE_ID_SET.has(executableText)) {
            return {
                operator: 'set',
                output,
                input: executableText,
            }
        }

        return {
            operator: 'set',
            output,
            expression: executableText,
        }
    }

    function normalizeConditionSignature(rowState) {
        const condition = buildCondition(rowState)
        return JSON.stringify(condition || { operator: 'always' })
    }

    function refreshRowOutput(rowState) {
        if (!rowState?.outputPreviewEl) return

        const label = getRuleText('ruleOutputValue', 'Output')
        const preview = rowState.outputPreviewEl
        preview.classList.remove('is-live', 'is-error', 'is-inactive')

        const sectionActive = isSectionEnabled(rowState.definition.section)
        if (!latestProbeInputs) {
            preview.textContent = `${label}: --`
            preview.classList.add('is-inactive')
            return
        }

        if (!rowState.enabled || !sectionActive) {
            preview.textContent = `${label}: off`
            preview.classList.add('is-inactive')
            return
        }

        if (!evaluateRowCondition(rowState, latestProbeInputs)) {
            preview.textContent = `${label}: no match`
            preview.classList.add('is-inactive')
            return
        }

        if (rowState.definition.type === 'enum') {
            preview.textContent = `${label}: ${String(rowState.enumValue || rowState.definition.options?.[0] || '--')}`
            preview.classList.add('is-live')
            return
        }

        const evaluated = evaluateExpressionValue(rowState.expression, latestProbeInputs)
        if (evaluated.error) {
            preview.textContent = `${label}: err`
            preview.classList.add('is-error')
            return
        }

        preview.textContent = `${label}: ${formatOutputValue(evaluated.value)}`
        preview.classList.add('is-live')
    }

    function refreshAllRowOutputs() {
        for (const rowState of orderedRows) refreshRowOutput(rowState)
    }

    function getOutputDescription(outputId) {
        if (!outputId) return ''
        // Use outputDictionary for canonical range data
        const dict = getOutputDictionary?.() || null
        if (dict) {
            const entry = dict.entries.find((e) => e.id === outputId)
            if (entry) {
                const [lo, hi] = entry.range || []
                const loStr = Number.isFinite(lo) ? (lo === Number.NEGATIVE_INFINITY ? '−∞' : String(lo)) : ''
                const hiStr = Number.isFinite(hi) ? (hi === Number.POSITIVE_INFINITY ? '∞' : String(hi)) : ''
                if (loStr && hiStr && loStr !== hiStr) return `${loStr}–${hiStr}`
                if (entry.type === 'enum') return entry.values?.join(' | ') || ''
                if (entry.type === 'vector') return `${entry.size || 3}-component vector`
                return ''
            }
        }
        // Fallback descriptions for known IDs
        switch (String(outputId || '')) {
            case 'red':
            case 'green':
            case 'blue':
                return '0–1'
            case 'hue':
                return '0–1'
            case 'saturation':
            case 'brightness':
            case 'opacity':
                return '0–1'
            case 'x':
                return 'horizontal'
            case 'y':
                return 'vertical'
            case 'z':
                return 'depth'
            case 'size':
                return 'px'
            case 'zoom':
                return '0.05–32'
            case 'angleOfView':
                return '20°–120°'
            case 'auraDistance':
                return 'normalized 0–1'
            case 'auraAngle':
                return 'nrmlzd 0–1'
            case 'auraElevation':
                return 'nrmlzd 0–1'
            case 'auraLatitude':
                return 'nrmlzd 0–1'
            case 'cloudSize':
                return '0–1 scale'
            case 'repulsion':
                return '0–1 push'
            case 'centerGravity':
                return '0–1 attract'
            case 'tension':
                return '0–1 spring'
            default:
                return ''
        }
    }

    function updateContradictionState() {
        const seen = new Map()
        const conflictIds = new Set()
        for (const rowState of orderedRows) {
            if (!rowState?.enabled) continue
            const action = toActionFromState(rowState)
            if (!action) continue
            const signature = `${rowState.definition.target}|${rowState.definition.output}|${normalizeConditionSignature(rowState)}`
            const prior = seen.get(signature)
            if (prior) {
                conflictIds.add(prior.instanceId)
                conflictIds.add(rowState.instanceId)
                continue
            }
            seen.set(signature, rowState)
        }
        for (const rowState of orderedRows) {
            rowState.card?.classList.toggle('is-danger', conflictIds.has(rowState.instanceId))
        }
    }

    const isSectionEnabled = (sectionName) => !(sectionEnabledState.get(sectionName) === false)

    const refreshRowCardState = (row) => {
        if (!row?.card) return
        const activeSection = isSectionEnabled(row.definition.section)
        row.card.classList.toggle('is-disabled', !row.enabled || !activeSection)
        row.card.classList.toggle('is-collapsed', !!row.collapsed)
        if (row.removeBtn) row.removeBtn.style.display = row.isDuplicate ? '' : 'none'
        if (row.collapseIcon) row.collapseIcon.textContent = row.collapsed ? '▸' : '▾'
    }

    function updateRowTitle(rowState) {
        if (!rowState?.titleEl) return
        const baseTitle = getRuleRowLabel(rowState.definition)
        const number = Number(rowState.instanceNumber || 1)
        rowState.titleEl.textContent = number > 1 ? `${baseTitle} #${number}` : baseTitle
    }

    function renumberRuleInstancesForKey(key) {
        const familyRows = orderedRows.filter((rowState) => rowKey(rowState.definition.target, rowState.definition.output, rowState.definition.section) === key)
        for (let index = 0; index < familyRows.length; index += 1) {
            const rowState = familyRows[index]
            rowState.instanceNumber = index + 1
            rowState.isDuplicate = index > 0
            rowState.card?.classList.toggle('cp-rule-card--duplicate', rowState.isDuplicate)
            updateRowTitle(rowState)
            refreshRowCardState(rowState)
        }
    }

    function renumberAllRuleInstances() {
        const visited = new Set()
        for (const rowState of orderedRows) {
            const key = rowKey(rowState.definition.target, rowState.definition.output, rowState.definition.section)
            if (visited.has(key)) continue
            visited.add(key)
            renumberRuleInstancesForKey(key)
        }
    }

    function syncColorMode(target, changedOutput = '', changedRow = null) {
        // No-op — colour mode gating removed. HSB and RGB work independently.
        // Each rule toggles individually. When neither HSB nor RGB is set,
        // the default particle colour is grayscale (brightness-based).
        // Only refresh UI state for the affected rows.
        const byOutput = (outputId) => orderedRows.filter((row) => row.definition.target === target && row.definition.output === outputId)
        const allColorRows = [
            ...byOutput('red'),
            ...byOutput('green'),
            ...byOutput('blue'),
            ...byOutput('hue'),
            ...byOutput('saturation'),
            ...byOutput('brightness'),
        ]
        for (const row of allColorRows) {
            if (row.toggle) row.toggle.checked = row.enabled
            refreshRowCardState(row)
        }
    }

    function buildCondition(rowState) {
        if (!rowState.conditionEnabled || rowState.conditionOperator === 'always') return { operator: 'always' }
        const detail = String(rowState.conditionDetail || NONE_VAR)
        const overall = String(rowState.conditionOverall || NONE_VAR)
        const inputId = detail !== NONE_VAR ? detail : (overall !== NONE_VAR ? overall : '')
        if (!inputId) return { operator: 'always' }
        const valueInput = String(rowState.conditionValueInput || NONE_VAR)
        if (valueInput && valueInput !== NONE_VAR) {
            return {
                operator: rowState.conditionOperator,
                input: inputId,
                valueInput,
            }
        }
        return {
            operator: rowState.conditionOperator,
            input: inputId,
            value: Number(rowState.conditionValue) || 0,
        }
    }

    let syncingFromParamStore = false
    let pendingLocalRuleBlocksSignature = null
    const sectionEnabledState = new Map()

    function serializeRuleBlocksSignature(blocks) {
        try {
            return JSON.stringify(Array.isArray(blocks) ? blocks : [])
        } catch {
            return ''
        }
    }

    function commitRowIfReady(rowState, force = false) {
        if (!rowState) return
        if (!force && !rowState.enabled) return
        if (!force && rowState.conditionEnabled) {
            const hasConditionInput = rowState.conditionDetail !== NONE_VAR || rowState.conditionOverall !== NONE_VAR
            if (!hasConditionInput) return
        }
        const action = toActionFromState(rowState)
        if (!force && rowState.enabled && !action) return
        commitRuleBlocks()
    }

    function commitRuleBlocks() {
        if (syncingFromParamStore) return

        syncColorMode('spawnedParticles')
        syncColorMode('lines')
        syncColorMode('background')
        updateContradictionState()

        const nextBlocks = []
        for (let i = 0; i < orderedRows.length; i++) {
            const rowState = orderedRows[i]
            const action = toActionFromState(rowState)
            if (!action) continue

            nextBlocks.push({
                id: rowState.instanceId || `${rowState.definition.target}-${rowState.definition.output}`,
                group: `${rowState.definition.section}/${rowState.definition.subgroup}`,
                subgroup: '',
                enabled: !!rowState.enabled,
                sectionDisabled: !isSectionEnabled(rowState.definition.section),
                target: rowState.definition.target,
                condition: buildCondition(rowState),
                actions: [action],
                order: i,
            })
        }

        // Local edits already updated rowState in-place; ignore the immediate
        // echo notification only when it matches exactly what we just wrote.
        pendingLocalRuleBlocksSignature = serializeRuleBlocksSignature(nextBlocks)
        setActiveRules(nextBlocks)
        refreshAllRowOutputs()
    }

    function applyRowsFromRuleBlocks(blocks) {
        syncingFromParamStore = true
        try {
            for (const rowState of [...orderedRows]) {
                if (!rowState.isDuplicate) continue
                rowState.card?.remove()
                const idx = orderedRows.indexOf(rowState)
                if (idx >= 0) orderedRows.splice(idx, 1)
                const sectionRowsList = sectionRows.get(rowState.definition.section)
                if (sectionRowsList) {
                    const rowIdx = sectionRowsList.indexOf(rowState)
                    if (rowIdx >= 0) sectionRowsList.splice(rowIdx, 1)
                }
            }

            for (const rowState of orderedRows) {
                resetRowState(rowState)
            }

            sectionEnabledState.clear()
            for (const def of FIXED_RULE_ROWS) {
                if (!sectionEnabledState.has(def.section)) sectionEnabledState.set(def.section, true)
            }

            const safeBlocks = Array.isArray(blocks) ? [...blocks] : []
            safeBlocks.sort((a, b) => Number(a?.order ?? 0) - Number(b?.order ?? 0))
            const seenKeyCount = new Map()
            const lastRowByKey = new Map()
            const usedInstanceIds = new Set(orderedRows.map((rowState) => String(rowState.instanceId || '')).filter(Boolean))
            for (const rule of safeBlocks) {
                const target = String(rule?.target || '')
                const actions = Array.isArray(rule?.actions) ? rule.actions : []
                for (let actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                    const action = actions[actionIndex]
                    const output = String(action?.output || '')
                    const group = String(rule?.group || '')
                    const sectionFromGroup = group.split('/')[0] || ''
                    const key = rowKey(target, output, sectionFromGroup)
                    let baseRow = baseRowsByKey.get(key)
                    if (!baseRow) {
                        baseRow = orderedRows.find((row) => (
                            row.definition.target === target
                            && row.definition.output === output
                            && row.definition.section === sectionFromGroup
                            && !row.isDuplicate
                        ))
                    }
                    if (!baseRow) {
                        baseRow = orderedRows.find((row) => (
                            row.definition.target === target
                            && row.definition.output === output
                            && !row.isDuplicate
                        ))
                    }
                    if (!baseRow) continue

                    const sectionKey = baseRow.definition.section || sectionFromGroup
                    const scopedKey = rowKey(target, output, sectionKey)
                    const seenCount = seenKeyCount.get(scopedKey) || 0
                    let rowState = baseRow
                    let insertAfterCard = lastRowByKey.get(scopedKey)?.card || baseRow.card
                    if (seenCount > 0) {
                        rowState = createRowState(baseRow.definition, true)
                        const incomingId = String(rule?.id || '').trim()
                        let candidateId = incomingId
                        if (!candidateId) candidateId = createInstanceId(baseRow.definition, true)
                        while (candidateId && usedInstanceIds.has(candidateId)) {
                            candidateId = createInstanceId(baseRow.definition, true)
                        }
                        if (candidateId) {
                            rowState.instanceId = candidateId
                            usedInstanceIds.add(candidateId)
                        }
                        insertAfterCard = lastRowByKey.get(scopedKey)?.card || baseRow.card
                        attachRowCard(rowState, insertAfterCard)
                    }
                    lastRowByKey.set(scopedKey, rowState)
                    seenKeyCount.set(scopedKey, seenCount + 1)

                    if (rule?.sectionDisabled === true) {
                        sectionEnabledState.set(rowState.definition.section, false)
                    }

                    rowState.enabled = rule.enabled !== false
                    const operator = String(rule?.condition?.operator || 'always')
                    rowState.conditionOperator = RULE_OPERATORS.includes(operator) ? operator : 'always'
                    rowState.conditionValue = Number(rule?.condition?.value ?? 0)
                    const rhsInputId = String(rule?.condition?.valueInput || '')
                    rowState.conditionValueInput = RULE_VARIABLE_ID_SET.has(rhsInputId) ? rhsInputId : NONE_VAR

                    const condInput = String(rule?.condition?.input || '')
                    const inputMeta = getRuleVariableById(condInput)
                    if (inputMeta?.group === 'detail') {
                        rowState.conditionDetail = condInput
                        rowState.conditionOverall = NONE_VAR
                    } else if (inputMeta?.group === 'overall' || inputMeta?.group === 'entity') {
                        rowState.conditionOverall = condInput
                        rowState.conditionDetail = NONE_VAR
                    }
                    rowState.conditionEnabled = rowState.conditionOperator !== 'always' && !!condInput

                    if (rowState.definition.type === 'enum') {
                        rowState.enumValue = String(action?.value || rowState.enumValue)
                    } else if (typeof action?.expression === 'string') {
                        rowState.expression = action.expression
                    } else if (typeof action?.input === 'string') {
                        rowState.expression = action.input
                    } else if (action?.value !== undefined && action?.value !== null) {
                        rowState.expression = String(action.value)
                    }
                    rowState.tokens = parseExpressionToTokens(rowState.expression)
                }
            }

            syncColorMode('spawnedParticles')
            syncColorMode('lines')
            syncColorMode('background')
            renumberAllRuleInstances()

            for (const rowState of orderedRows) {
                if (rowState.toggle) rowState.toggle.checked = rowState.enabled
                refreshRowCardState(rowState)
                rowState.syncConditionUi?.()
                if (rowState.enumSelect) rowState.enumSelect.value = rowState.enumValue
                renderTokenEditor(rowState)
            }

            for (const [sectionName, toggle] of sectionToggleByName.entries()) {
                const enabled = isSectionEnabled(sectionName)
                toggle.checked = enabled
                const sectionEl = sectionByName.get(sectionName)
                if (sectionEl) sectionEl.classList.toggle('is-section-disabled', !enabled)
            }
            updateContradictionState()
            refreshAllRowOutputs()
        } finally {
            syncingFromParamStore = false
        }
    }

    let currentSection = ''
    let currentSubgroup = ''
    let currentSectionBody = null
    const sectionCollapseState = new Map()

    function cloneTokens(tokens) {
        return (Array.isArray(tokens) ? tokens : []).map((token) => normalizeToken(token)).filter(Boolean)
    }

    function attachRowCard(rowState, insertAfterCard = null) {
        const definition = rowState.definition
        const sectionBody = sectionBodyByName.get(definition.section)
        if (!sectionBody) return

        const card = el('article', `cp-rule-card${rowState.isDuplicate ? ' cp-rule-card--duplicate' : ''}`)
        const header = el('div', 'cp-rule-card-header')
        const headerTools = el('div', 'cp-rule-card-tools')
        const addConditionButton = el('button', 'cp-btn cp-rule-condition-add', {
            type: 'button',
            title: UI_TEXT.rules.addCondition,
            'aria-label': UI_TEXT.rules.addCondition,
        })
        applyIconOnlyButton(addConditionButton, BUTTON_ICON_MAP.condition || BUTTON_ICON_MAP.add, UI_TEXT.rules.addCondition)
        const clearTokensBtn = el('button', 'cp-btn cp-rule-card-clear', {
            type: 'button',
            title: UI_TEXT.rules.clearTokens,
            'aria-label': UI_TEXT.rules.clearTokens,
        })
        applyIconOnlyButton(clearTokensBtn, BUTTON_ICON_MAP.clear, UI_TEXT.rules.clearTokens)
        const duplicateLabel = getRuleText('duplicateRule', 'Duplicate rule')
        const removeDuplicateLabel = getRuleText('removeDuplicateRule', 'Remove duplicate rule')
        const collapseRuleLabel = getRuleText('collapseRule', 'Collapse rule')
        const duplicateBtn = el('button', 'cp-btn cp-rule-card-duplicate', {
            type: 'button',
            title: duplicateLabel,
            'aria-label': duplicateLabel,
        })
        applyIconOnlyButton(duplicateBtn, BUTTON_ICON_MAP.duplicate, duplicateLabel)
        const removeBtn = el('button', 'cp-btn cp-btn-danger cp-rule-card-remove', {
            type: 'button',
            title: removeDuplicateLabel,
            'aria-label': removeDuplicateLabel,
        })
        applyIconOnlyButton(removeBtn, BUTTON_ICON_MAP.remove, removeDuplicateLabel)
        removeBtn.style.display = rowState.isDuplicate ? '' : 'none'
        const collapseBtn = el('button', 'cp-btn cp-rule-card-collapse', {
            type: 'button',
            title: collapseRuleLabel,
            'aria-label': collapseRuleLabel,
        })
        const collapseIcon = el('span', 'cp-btn-icon', { text: rowState.collapsed ? '▸' : '▾' })
        collapseBtn.appendChild(collapseIcon)
        headerTools.append(addConditionButton, clearTokensBtn, duplicateBtn, removeBtn, collapseBtn)
        const toggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
        const title = el('div', 'cp-rule-card-title', { text: getRuleRowLabel(definition) })
        const outputDesc = el('div', 'cp-rule-output-desc', {
            text: getOutputDescription(definition.output),
        })
        const outputPreview = el('div', 'cp-rule-output-preview output-prev', {
            text: `${getRuleText('ruleOutputValue', 'Output')}: --`,
        })
        const outputRow = el('div', 'cp-rule-output-row')
        outputRow.append(outputDesc, outputPreview)
        header.append(toggle, title, headerTools)

        const conditionRow = el('div', 'cp-rule-card-condition-builder')
        const conditionSentence = el('div', 'cp-rule-condition-sentence')
        const whenLabel = el('span', 'cp-rule-condition-when', { text: UI_TEXT.rules.when })
        const allowedVariableIds = getAllowedRuleVariableIds()
        const conditionInputSelect = createRuleConditionInputSelect(NONE_VAR, allowedVariableIds)
        const conditionOperatorSelect = el('select', 'cp-input-select cp-rule-condition-operator')
        conditionOperatorSelect.appendChild(createSelectOptions(
            RULE_OPERATORS.filter((value) => value !== 'always').map((value) => ({ value, label: value })),
            '>',
        ))
        const conditionValueInput = el('input', 'cp-input-number', { type: 'number', step: 0.001, value: '0' })
        const conditionValueInputSelect = createRuleConditionInputSelect(NONE_VAR, allowedVariableIds)
        conditionValueInputSelect.classList.add('cp-rule-condition-value-input')
        const removeConditionButton = el('button', 'cp-btn cp-btn-danger cp-rule-condition-remove', { type: 'button', text: UI_TEXT.rules.removeCondition })
        applyButtonIcon(removeConditionButton, BUTTON_ICON_MAP.clear, UI_TEXT.rules.removeCondition)
        conditionSentence.append(whenLabel, conditionInputSelect, conditionOperatorSelect, conditionValueInput, removeConditionButton)
        conditionRow.append(conditionSentence)

        const expressionRow = el('div', 'cp-rule-card-expression')
        let enumSelect = null
        let tokenEditor = null
        let expressionInput = null
        let valueActionSelect = null

        if (definition.type === 'enum') {
            enumSelect = el('select', 'cp-input-select')
            enumSelect.appendChild(createSelectOptions(
                definition.options.map((option) => ({ value: option, label: option })),
                rowState.enumValue,
            ))
            expressionRow.appendChild(enumSelect)
            clearTokensBtn.style.display = 'none'
        } else {
            const tokenRow = el('div', 'cp-rule-token-row')
            valueActionSelect = createRuleTokenValueSelect('', allowedVariableIds)
            const functionSelect = createRuleFunctionSelect('')
            const autocompleteHint = el('div', 'cp-rule-autocomplete-hint')
            autocompleteHint.hidden = true
            const parameterHint = el('div', 'cp-rule-parameter-hint')
            parameterHint.hidden = true

            const setParameterHintVisible = (visible) => {
                const active = !!visible
                parameterHint.hidden = !active
                parameterHint.classList.toggle('is-active', active)
                card.classList.toggle('has-active-parameter-hint', active)
                if (!active) {
                    parameterHint.innerHTML = ''
                }
            }

            expressionInput = el('div', 'cp-rule-token-editor cp-rule-expression-input', {
                contenteditable: 'true',
                role: 'textbox',
                'aria-multiline': 'false',
                tabindex: '0',
                'data-placeholder': UI_TEXT.rules.tokenEditorPlaceholder,
            })
            tokenEditor = expressionInput

            const addSliderBtn = el('button', 'cp-btn cp-btn-icon', {
                type: 'button',
                title: 'Insert slider into expression',
            })
            applyIconOnlyButton(addSliderBtn, BUTTON_ICON_MAP.slider, 'Insert slider')
            addSliderBtn.addEventListener('click', () => {
                const sliderId = `slider-${Date.now()}`
                const vdef = getRuleVariableById('binMagnitude')
                const mn = (vdef && Array.isArray(vdef.range)) ? vdef.range[0] : 0
                const mx = (vdef && Array.isArray(vdef.range)) ? vdef.range[1] : 1
                const mid = mn + (mx - mn) * 0.5
                const labelHint = `${rowState.definition?.output || 'Value'} Slider`
                const slider = createRuleInlineSlider(sliderId, mn, mx, mid, labelHint)
                if (expressionInput && expressionInput.parentNode) {
                    expressionInput.appendChild(slider)
                    const spacer = document.createTextNode(' ')
                    slider.after(spacer)
                    rowState.onExpressionChanged?.()
                }
            })
            tokenRow.append(valueActionSelect, functionSelect, addSliderBtn)
            expressionRow.append(tokenRow, expressionInput, parameterHint, autocompleteHint)

            const captureCaretOffset = () => {
                const selection = window.getSelection?.()
                if (!selection || selection.rangeCount === 0) return null
                if (!expressionInput.contains(selection.anchorNode)) return null
                const activeRange = selection.getRangeAt(0)
                const probe = document.createRange()
                probe.selectNodeContents(expressionInput)
                probe.setEnd(activeRange.startContainer, activeRange.startOffset)
                return probe.toString().length
            }

            const restoreCaretOffset = (offset) => {
                if (!Number.isFinite(offset)) return
                const selection = window.getSelection?.()
                if (!selection) return

                let remaining = Math.max(0, Math.floor(offset))
                const walker = document.createTreeWalker(expressionInput, NodeFilter.SHOW_TEXT)
                let targetNode = null
                let targetOffset = 0

                while (walker.nextNode()) {
                    const node = walker.currentNode
                    const len = node.textContent?.length || 0
                    if (remaining <= len) {
                        targetNode = node
                        targetOffset = remaining
                        break
                    }
                    remaining -= len
                }

                const range = document.createRange()
                if (targetNode) {
                    range.setStart(targetNode, targetOffset)
                } else {
                    range.selectNodeContents(expressionInput)
                    range.collapse(false)
                }
                range.collapse(true)
                selection.removeAllRanges()
                selection.addRange(range)
            }

            const commitExpression = ({ rerender = false } = {}) => {
                const caretOffset = rerender ? captureCaretOffset() : null
                const rawExpression = readExpressionFromEditor(expressionInput)
                rowState.expression = replaceExpressionVariableAliases(rawExpression)
                rowState.tokens = parseExpressionToTokens(rowState.expression)

                if (rerender) {
                    renderTokenEditor(rowState)
                    restoreCaretOffset(caretOffset)
                }

                if (definition.output === 'red' || definition.output === 'green' || definition.output === 'blue') {
                    syncColorMode(definition.target, definition.output, rowState)
                }
                if (definition.output === 'hue') {
                    syncColorMode(definition.target, 'hue', rowState)
                }

                commitRowIfReady(rowState)
            }

            rowState.onExpressionChanged = commitExpression

            const syncExpressionSelection = () => {
                const captured = captureEditorSelectionRange(expressionInput)
                if (captured) rowState.savedSelectionRange = captured
            }

            const getActiveParameterContext = (expressionBeforeCaret) => {
                const source = String(expressionBeforeCaret || '')
                if (!source.trim()) return null

                let depth = 0
                for (let idx = source.length - 1; idx >= 0; idx -= 1) {
                    const char = source[idx]
                    if (char === ')') {
                        depth += 1
                        continue
                    }
                    if (char !== '(') continue

                    if (depth > 0) {
                        depth -= 1
                        continue
                    }

                    let cursor = idx - 1
                    while (cursor >= 0 && /\s/.test(source[cursor])) cursor -= 1
                    const end = cursor + 1
                    while (cursor >= 0 && /[A-Za-z0-9_]/.test(source[cursor])) cursor -= 1
                    const functionName = source.slice(cursor + 1, end).trim()
                    if (!functionName) continue

                    let paramIndex = 0
                    let nested = 0
                    for (let i = idx + 1; i < source.length; i += 1) {
                        const token = source[i]
                        if (token === '(') {
                            nested += 1
                            continue
                        }
                        if (token === ')' && nested > 0) {
                            nested -= 1
                            continue
                        }
                        if (token === ',' && nested === 0) paramIndex += 1
                    }

                    return {
                        functionName,
                        paramIndex,
                    }
                }

                return null
            }

            const updateParameterHint = () => {
                const selection = window.getSelection?.()
                const hasCaretInEditor = !!(
                    selection
                    && selection.rangeCount > 0
                    && expressionInput.contains(selection.anchorNode)
                    && document.activeElement === expressionInput
                )
                if (!hasCaretInEditor) {
                    setParameterHintVisible(false)
                    return
                }

                const beforeCaret = readExpressionToCursor(expressionInput)
                const context = getActiveParameterContext(beforeCaret)
                if (!context) {
                    setParameterHintVisible(false)
                    return
                }

                const functionId = String(context.functionName || '').trim()
                const slotIds = getRuleFunctionParamSlots(functionId)
                if (!slotIds.length) {
                    setParameterHintVisible(false)
                    return
                }

                const activeIndex = Math.max(0, Math.min(Number(context.paramIndex) || 0, slotIds.length - 1))
                parameterHint.innerHTML = ''

                const fnLabel = el('span', 'cp-rule-parameter-hint-name', {
                    text: getRuleFunctionName(functionId) || functionId,
                })
                parameterHint.appendChild(fnLabel)
                parameterHint.appendChild(document.createTextNode('('))

                slotIds.forEach((slotId, index) => {
                    if (index > 0) parameterHint.appendChild(document.createTextNode(', '))
                    const chip = el('span', 'cp-rule-parameter-hint-chip', {
                        text: getRuleFunctionSlotLabel(slotId),
                    })
                    chip.classList.toggle('is-active', index === activeIndex)
                    parameterHint.appendChild(chip)
                })

                parameterHint.appendChild(document.createTextNode(')'))
                setParameterHintVisible(true)

                const editorRect = expressionInput.getBoundingClientRect()
                const rowRect = expressionRow.getBoundingClientRect()
                let left = editorRect.left - rowRect.left + 8
                let top = editorRect.top - rowRect.top + expressionInput.offsetHeight + 6

                if (selection && selection.rangeCount > 0 && expressionInput.contains(selection.anchorNode)) {
                    const caretRange = selection.getRangeAt(0).cloneRange()
                    caretRange.collapse(false)
                    const rect = caretRange.getBoundingClientRect()
                    if (Number.isFinite(rect.left) && Number.isFinite(rect.bottom)) {
                        left = rect.left - rowRect.left
                        top = rect.bottom - rowRect.top + 8
                    }
                }

                const maxLeft = Math.max(6, expressionRow.clientWidth - parameterHint.offsetWidth - 6)
                parameterHint.style.left = `${Math.max(6, Math.min(left, maxLeft))}px`
                parameterHint.style.top = `${Math.max(0, top)}px`
            }

            const updateAutocompleteHint = () => {
                const query = getAutocompleteQueryAtCursor(expressionInput)
                const allowedIds = getAllowedRuleVariableIds()
                const suggestions = findRuleVariableSuggestions(query, 4)
                    .filter((entry) => allowedIds.has(entry.id))
                rowState.autocomplete = {
                    query,
                    suggestions,
                }
                if (!query || !suggestions.length) {
                    autocompleteHint.hidden = true
                    autocompleteHint.textContent = ''
                    return
                }

                const suggestionText = suggestions
                    .map((entry) => String(entry.label || entry.id || '').trim())
                    .filter(Boolean)
                    .join(', ')
                autocompleteHint.textContent = `${getRuleText('ruleSuggestionPrefix', 'Suggestion')}: ${suggestionText}`
                autocompleteHint.hidden = false
            }

            const refreshEditorHints = () => {
                updateAutocompleteHint()
                updateParameterHint()
            }

            valueActionSelect.addEventListener('pointerdown', syncExpressionSelection)
            valueActionSelect.addEventListener('focus', syncExpressionSelection)

            valueActionSelect.addEventListener('change', () => {
                const selected = String(valueActionSelect.value || '')
                valueActionSelect.value = ''
                if (!selected.startsWith('var:')) return
                const nextVariableId = selected.slice(4)
                const activePill = rowState.activePill
                restoreEditorSelectionRange(expressionInput, rowState.savedSelectionRange)
                if (activePill && expressionInput.contains(activePill)) {
                    activePill.replaceWith(createRuleExpressionPill(nextVariableId))
                    rowState.activePill = null
                } else {
                    insertVariablePillAtCursor(expressionInput, nextVariableId)
                }
                commitExpression({ rerender: false })
                syncExpressionSelection()
                refreshEditorHints()
            })

            functionSelect.addEventListener('change', () => {
                const selected = String(functionSelect.value || '')
                functionSelect.value = ''
                if (!selected) return
                insertFunctionTemplateAtCursor(expressionInput, selected)
                commitExpression()
                syncExpressionSelection()
                refreshEditorHints()
            })

            expressionInput.addEventListener('input', () => {
                commitExpression({ rerender: false })
                syncExpressionSelection()
                refreshEditorHints()
            })
            expressionInput.addEventListener('blur', () => {
                const shouldSuppress = !!rowState.suppressNextBlurRerender
                rowState.suppressNextBlurRerender = false
                void shouldSuppress
                commitExpression({ rerender: false })
                syncExpressionSelection()
                refreshEditorHints()
            })
            expressionInput.addEventListener('keydown', (event) => {
                const suggestion = rowState.autocomplete?.suggestions?.[0]
                const query = String(rowState.autocomplete?.query || '').trim()
                if (event.key === 'Tab' && suggestion && query) {
                    event.preventDefault()
                    removeTrailingQueryAtCursor(expressionInput, query)
                    insertVariablePillAtCursor(expressionInput, String(suggestion.id || ''))
                    commitExpression({ rerender: false })
                    syncExpressionSelection()
                    refreshEditorHints()
                    return
                }
                if (event.key === 'Enter') event.preventDefault()
            })
            expressionInput.addEventListener('click', (event) => {
                const clickedPill = event.target instanceof Element ? event.target.closest('.cp-rule-inline-pill') : null
                if (!clickedPill || !expressionInput.contains(clickedPill)) {
                    rowState.activePill = null
                }
                syncExpressionSelection()
                refreshEditorHints()
            })
            expressionInput.addEventListener('keyup', () => {
                syncExpressionSelection()
                refreshEditorHints()
            })
            expressionInput.addEventListener('mouseup', () => {
                syncExpressionSelection()
                refreshEditorHints()
            })

            clearTokensBtn.addEventListener('click', () => {
                expressionInput.innerHTML = ''
                rowState.expression = ''
                rowState.tokens = []
                rowState.insertContext = null
                rowState.pendingInsertIndex = null
                commitExpression()
                expressionInput.focus()
                syncExpressionSelection()
                refreshEditorHints()
            })

            rowState.autocompleteHint = autocompleteHint
            rowState.autocomplete = { query: '', suggestions: [] }
            rowState.parameterHint = parameterHint
        }

        card.append(header, outputRow, conditionRow, expressionRow)
        if (insertAfterCard?.parentNode === sectionBody) {
            insertAfterCard.after(card)
        } else {
            sectionBody.appendChild(card)
        }

        rowState.toggle = toggle
        rowState.card = card
        rowState.duplicateBtn = duplicateBtn
        rowState.removeBtn = removeBtn
        rowState.collapseBtn = collapseBtn
        rowState.collapseIcon = collapseIcon
        rowState.titleEl = title
        rowState.conditionRow = conditionRow
        rowState.tokenEditor = tokenEditor
        rowState.expressionInput = expressionInput
        rowState.enumSelect = enumSelect
        rowState.valueActionSelect = definition.type !== 'enum' ? valueActionSelect : null
        rowState.actionSelect = null
        rowState.outputPreviewEl = outputPreview

        rowState.syncConditionUi = () => {
            const showCondition = !!rowState.conditionEnabled
            addConditionButton.style.display = showCondition ? 'none' : ''
            conditionRow.style.display = showCondition ? '' : 'none'
            if (!showCondition) return
            conditionOperatorSelect.value = rowState.conditionOperator === 'always' ? '>' : rowState.conditionOperator
            const activeInput = rowState.conditionDetail !== NONE_VAR ? rowState.conditionDetail : rowState.conditionOverall
            conditionInputSelect.value = activeInput || NONE_VAR
            conditionValueInput.value = String(Number(rowState.conditionValue || 0))
            conditionValueInputSelect.value = rowState.conditionValueInput || NONE_VAR
        }
        rowState.syncConditionUi()

        const orderedInsertIdx = insertAfterCard
            ? Math.max(0, orderedRows.findIndex((entry) => entry.card === insertAfterCard) + 1)
            : orderedRows.length
        orderedRows.splice(orderedInsertIdx, 0, rowState)
        sectionRows.get(definition.section)?.push(rowState)
        renumberRuleInstancesForKey(rowKey(definition.target, definition.output, definition.section))

        duplicateBtn.addEventListener('click', () => {
            const duplicateState = createRowState(definition, true)
            duplicateState.enabled = rowState.enabled
            duplicateState.conditionEnabled = rowState.conditionEnabled
            duplicateState.conditionOperator = rowState.conditionOperator
            duplicateState.conditionDetail = rowState.conditionDetail
            duplicateState.conditionOverall = rowState.conditionOverall
            duplicateState.conditionValue = rowState.conditionValue
            duplicateState.conditionValueInput = rowState.conditionValueInput
            duplicateState.expression = rowState.expression
            duplicateState.tokens = cloneTokens(rowState.tokens)
            duplicateState.enumValue = rowState.enumValue
            attachRowCard(duplicateState, rowState.card)
            refreshRowCardState(duplicateState)
            duplicateState.syncConditionUi?.()
            if (duplicateState.enumSelect) duplicateState.enumSelect.value = duplicateState.enumValue
            if (duplicateState.definition.type !== 'enum') renderTokenEditor(duplicateState)
            commitRuleBlocks()
        })

        removeBtn.addEventListener('click', () => {
            if (!rowState.isDuplicate) return
            const key = rowKey(rowState.definition.target, rowState.definition.output, rowState.definition.section)
            const idx = orderedRows.indexOf(rowState)
            if (idx >= 0) orderedRows.splice(idx, 1)
            const rows = sectionRows.get(definition.section) || []
            const rowIdx = rows.indexOf(rowState)
            if (rowIdx >= 0) rows.splice(rowIdx, 1)
            rowState.card?.remove()
            rowState.pillContextMenu?.remove()
            rowState.pillContextMenu = null
            renumberRuleInstancesForKey(key)
            commitRuleBlocks()
        })

        collapseBtn.addEventListener('click', () => {
            rowState.collapsed = !rowState.collapsed
            refreshRowCardState(rowState)
        })

        toggle.addEventListener('change', () => {
            rowState.enabled = toggle.checked
            refreshRowCardState(rowState)
            if (definition.output === 'red' || definition.output === 'green' || definition.output === 'blue') {
                syncColorMode(definition.target, definition.output, rowState)
            }
            if (definition.output === 'hue') {
                syncColorMode(definition.target, 'hue', rowState)
            }
            if (!rowState.enabled) {
                commitRuleBlocks()
                return
            }
            commitRowIfReady(rowState)
        })

        addConditionButton.addEventListener('click', () => {
            rowState.conditionEnabled = true
            if (rowState.conditionOperator === 'always') rowState.conditionOperator = '>'
            rowState.syncConditionUi?.()
            commitRowIfReady(rowState)
        })

        conditionOperatorSelect.addEventListener('change', () => {
            rowState.conditionEnabled = true
            rowState.conditionOperator = conditionOperatorSelect.value
            commitRowIfReady(rowState)
        })

        conditionInputSelect.addEventListener('change', () => {
            const selected = String(conditionInputSelect.value || NONE_VAR)
            rowState.conditionEnabled = true
            rowState.conditionDetail = NONE_VAR
            rowState.conditionOverall = NONE_VAR
            if (selected !== NONE_VAR) {
                const meta = getRuleVariableById(selected)
                if (meta?.group === 'detail') rowState.conditionDetail = selected
                else if (meta?.group === 'overall' || meta?.group === 'entity') rowState.conditionOverall = selected
            }
            commitRowIfReady(rowState)
        })

        conditionValueInput.addEventListener('change', () => {
            rowState.conditionEnabled = true
            rowState.conditionValue = Number(conditionValueInput.value) || 0
            rowState.conditionValueInput = NONE_VAR
            commitRowIfReady(rowState)
        })

        conditionValueInputSelect.addEventListener('change', () => {
            rowState.conditionEnabled = true
            const selected = String(conditionValueInputSelect.value || NONE_VAR)
            rowState.conditionValueInput = selected !== NONE_VAR ? selected : NONE_VAR
            commitRowIfReady(rowState)
        })

        removeConditionButton.addEventListener('click', () => {
            rowState.conditionEnabled = false
            rowState.conditionOperator = 'always'
            rowState.conditionDetail = NONE_VAR
            rowState.conditionOverall = NONE_VAR
            rowState.conditionValue = 0
            rowState.conditionValueInput = NONE_VAR
            rowState.syncConditionUi?.()
            commitRowIfReady(rowState, true)
        })

        if (enumSelect) {
            enumSelect.addEventListener('change', () => {
                rowState.enumValue = enumSelect.value
                commitRowIfReady(rowState)
            })
        }

        if (definition.type !== 'enum') {
            renderTokenEditor(rowState)
        }

        if (rowState.toggle) rowState.toggle.checked = rowState.enabled
        refreshRowCardState(rowState)
        refreshRowOutput(rowState)
    }

    for (const definition of FIXED_RULE_ROWS) {
        if (definition.section !== currentSection) {
            currentSection = definition.section
            const sectionName = currentSection
            const sectionLabel = definition.sectionLabel || getRuleSectionLabel(definition)
            currentSubgroup = ''
            const section = el('section', 'cp-rule-section')
            const sectionHeader = el('div', 'cp-rule-section-header')
            const titleBtn = el('button', 'cp-btn cp-rule-section-title cp-rule-section-toggle', {
                type: 'button',
                'aria-expanded': 'true',
            })
            const titleIcon = el('span', 'cp-btn-icon cp-rule-section-toggle-icon', { text: '▾' })
            const titleLabel = el('span', 'cp-rule-section-toggle-label', { text: sectionLabel })
            titleBtn.append(titleIcon, titleLabel)
            const sectionEnable = el('input', 'cp-input-toggle cp-rule-section-enable', { type: 'checkbox' })
            sectionEnable.checked = true
            const sectionBody = el('div', 'cp-rule-section-body')

            sectionToggleByName.set(sectionName, sectionEnable)
            sectionByName.set(sectionName, section)
            sectionBodyByName.set(sectionName, sectionBody)
            sectionRows.set(sectionName, [])

            titleBtn.addEventListener('click', () => {
                const expanded = !(sectionCollapseState.get(sectionName) === false)
                const nextExpanded = !expanded
                sectionCollapseState.set(sectionName, nextExpanded)
                section.classList.toggle('is-collapsed', !nextExpanded)
                titleBtn.setAttribute('aria-expanded', nextExpanded ? 'true' : 'false')
                titleIcon.textContent = nextExpanded ? '▾' : '▸'
            })

            sectionEnable.addEventListener('change', () => {
                sectionEnabledState.set(sectionName, !!sectionEnable.checked)
                section.classList.toggle('is-section-disabled', !sectionEnable.checked)
                const rows = sectionRows.get(sectionName) || []
                for (const row of rows) refreshRowCardState(row)
                commitRuleBlocks()
            })

            sectionHeader.append(titleBtn, sectionEnable)
            section.append(sectionHeader, sectionBody)
            wrapper.appendChild(section)
            currentSectionBody = sectionBody
        }
        const rowState = createRowState(definition, false)
        baseRowsByKey.set(rowKey(definition.target, definition.output, definition.section), rowState)
        attachRowCard(rowState)
    }

    const applyRowsFromParams = () => {
        renderEntityList()
        ensureActiveOwner()
        updateOwnerSectionVisibility()
        const nextBlocks = getActiveRules()
        const incomingSignature = serializeRuleBlocksSignature(nextBlocks)
        if (pendingLocalRuleBlocksSignature !== null && incomingSignature === pendingLocalRuleBlocksSignature) {
            pendingLocalRuleBlocksSignature = null
            return
        }
        pendingLocalRuleBlocksSignature = null
        applyRowsFromRuleBlocks(nextBlocks)
        if (popupOpen) renderPopupMeta()
    }

    registerSync(syncRegistry, applyRowsFromParams, ['ruleBlocks', 'ruleEntities', 'ruleGlobalBlocks'])
    applyRowsFromParams()

    window.addEventListener('seesound:rule-probe', (event) => {
        const incoming = event?.detail?.inputs
        latestProbeInputs = (incoming && typeof incoming === 'object') ? incoming : null
        refreshAllRowOutputs()
    })

    refreshAllRowOutputs()
    body.appendChild(panel)
}
