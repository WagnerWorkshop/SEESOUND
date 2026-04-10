export function buildRulesMenu(body, syncRegistry, deps) {
    const {
        el, UI_TEXT, params, set, registerSync, NONE_VAR, RULE_OPERATORS, FIXED_RULE_ROWS, RULE_VARIABLE_ID_SET,
        RULE_SLOT_MARKER_REGEX, BUTTON_ICON_MAP, getRuleText, getRuleSectionLabel, getRuleSubgroupLabel, getRuleRowLabel,
        getRuleVariableById, createRuleConditionInputSelect, createSelectOptions, applyIconOnlyButton, applyButtonIcon,
        renderTokenEditor, readExpressionFromEditor, normalizeExpressionSlotGaps, replaceExpressionVariableAliases,
        parseExpressionToTokens, findRuleVariableSuggestions, captureEditorSelectionRange, restoreEditorSelectionRange,
        insertVariablePillAtCursor, insertFunctionTemplateAtCursor, removeTrailingQueryAtCursor, getAutocompleteQueryAtCursor,
        createRuleTokenValueSelect, createRuleFunctionSelect,
        createRuleExpressionPill, normalizeToken,
        readExpressionToCursor, getRuleFunctionParamSlots,
        getRuleFunctionName, getRuleFunctionSlotLabel
    } = deps
    const panel = el('div', 'cp-menu-pane-inner')
    const wrapper = el('div', 'cp-rules-wrapper')
    panel.appendChild(wrapper)

    const baseRowsByKey = new Map()
    const orderedRows = []
    const sectionToggleByName = new Map()
    const sectionByName = new Map()
    const sectionBodyByName = new Map()
    const sectionRows = new Map()
    let duplicateSequence = 0

    function rowKey(target, output) {
        return `${target}:${output}`
    }

    function createInstanceId(definition, isDuplicate = false) {
        const base = `${definition.target}-${definition.output}`
        if (!isDuplicate) return `${base}-base`
        duplicateSequence += 1
        return `${base}-dup-${duplicateSequence}`
    }

    function createRowState(definition, isDuplicate = false) {
        return {
            definition,
            instanceId: createInstanceId(definition, isDuplicate),
            isDuplicate,
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
            activePill: null,
            draggingPill: null,
            dropMarker: null,
            editorEventsBound: false,
            suppressNextBlurRerender: false,
            pillContextMenu: null,
            pillContextMenuTarget: null,
            pillContextMenuEventsBound: false,
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

    function syncColorMode(target, changedOutput = '', changedRow = null) {
        const byOutput = (outputId) => orderedRows.filter((row) => row.definition.target === target && row.definition.output === outputId)
        const rgbRows = [
            ...byOutput('red'),
            ...byOutput('green'),
            ...byOutput('blue'),
        ]
        const hueRows = byOutput('hue')
        const hueRow = hueRows[0] || null
        if (!hueRow || rgbRows.length === 0) return

        if (changedOutput === 'red' || changedOutput === 'green' || changedOutput === 'blue') {
            const changed = changedRow || byOutput(changedOutput)[0]
            if (changed) {
                for (const row of rgbRows) row.enabled = !!changed.enabled
                if (changed.enabled && String(changed.expression || '').trim()) hueRow.enabled = false
            }
        }

        if (changedOutput === 'hue') {
            if (hueRow.enabled && String(hueRow.expression || '').trim()) {
                for (const row of rgbRows) row.enabled = false
            }
        }

        const rgbActive = rgbRows.some((row) => row.enabled && String(row.expression || '').trim())
        const hueActive = hueRow.enabled && String(hueRow.expression || '').trim()
        if (rgbActive && hueActive) {
            if (changedOutput === 'hue') {
                for (const row of rgbRows) row.enabled = false
            } else {
                hueRow.enabled = false
            }
        }

        for (const row of rgbRows) {
            if (row.toggle) row.toggle.checked = row.enabled
            refreshRowCardState(row)
        }
        if (hueRow.toggle) hueRow.toggle.checked = hueRow.enabled
        refreshRowCardState(hueRow)
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
    let skipNextRuleBlocksApply = false
    const sectionEnabledState = new Map()

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

        // Local edits already updated rowState in-place; skip one immediate
        // apply-from-store pass so transient UI state on other rows is preserved.
        skipNextRuleBlocksApply = true
        set('ruleBlocks', nextBlocks)
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
            for (const rule of safeBlocks) {
                const target = String(rule?.target || '')
                const action = Array.isArray(rule?.actions) ? rule.actions[0] : null
                const output = String(action?.output || '')
                const key = rowKey(target, output)
                const baseRow = baseRowsByKey.get(key)
                if (!baseRow) continue

                const seenCount = seenKeyCount.get(key) || 0
                let rowState = baseRow
                if (seenCount > 0) {
                    const id = String(rule?.id || '')
                    const explicitDuplicate = /-dup-\d+$/i.test(id)
                    if (!explicitDuplicate) continue
                    rowState = createRowState(baseRow.definition, true)
                    rowState.instanceId = id || createInstanceId(baseRow.definition, true)
                    attachRowCard(rowState, baseRow.card)
                }
                seenKeyCount.set(key, 1)

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
                } else if (inputMeta?.group === 'overall') {
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

            syncColorMode('spawnedParticles')
            syncColorMode('lines')
            syncColorMode('background')

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
        const duplicateSuffix = getRuleText('duplicateSuffix', 'Duplicate')
        const titleSuffix = rowState.isDuplicate ? ` (${duplicateSuffix})` : ''
        const title = el('div', 'cp-rule-card-title', { text: `${getRuleRowLabel(definition)}${titleSuffix}` })
        header.append(toggle, title, headerTools)

        const conditionRow = el('div', 'cp-rule-card-condition-builder')
        const conditionSentence = el('div', 'cp-rule-condition-sentence')
        const whenLabel = el('span', 'cp-rule-condition-when', { text: UI_TEXT.rules.when })
        const conditionInputSelect = createRuleConditionInputSelect(NONE_VAR)
        const conditionOperatorSelect = el('select', 'cp-input-select cp-rule-condition-operator')
        conditionOperatorSelect.appendChild(createSelectOptions(
            RULE_OPERATORS.filter((value) => value !== 'always').map((value) => ({ value, label: value })),
            '>',
        ))
        const conditionValueInput = el('input', 'cp-input-number', { type: 'number', step: 0.001, value: '0' })
        const conditionValueInputSelect = createRuleConditionInputSelect(NONE_VAR)
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
            valueActionSelect = createRuleTokenValueSelect('')
            const functionSelect = createRuleFunctionSelect('')
            const autocompleteHint = el('div', 'cp-rule-autocomplete-hint')
            autocompleteHint.hidden = true
            const parameterHint = el('div', 'cp-rule-parameter-hint')
            parameterHint.hidden = true

            expressionInput = el('div', 'cp-rule-token-editor cp-rule-expression-input', {
                contenteditable: 'true',
                role: 'textbox',
                'aria-multiline': 'false',
                tabindex: '0',
                'data-placeholder': UI_TEXT.rules.tokenEditorPlaceholder,
            })
            tokenEditor = expressionInput

            tokenRow.append(valueActionSelect, functionSelect)
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
                const hasCaretInEditor = !!(selection && selection.rangeCount > 0 && expressionInput.contains(selection.anchorNode))
                if (!hasCaretInEditor) {
                    parameterHint.hidden = true
                    parameterHint.innerHTML = ''
                    return
                }

                const beforeCaret = readExpressionToCursor(expressionInput)
                const context = getActiveParameterContext(beforeCaret)
                if (!context) {
                    parameterHint.hidden = true
                    parameterHint.innerHTML = ''
                    return
                }

                const functionId = String(context.functionName || '').trim()
                const slotIds = getRuleFunctionParamSlots(functionId)
                if (!slotIds.length) {
                    parameterHint.hidden = true
                    parameterHint.innerHTML = ''
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
                parameterHint.hidden = false

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
                const suggestions = findRuleVariableSuggestions(query, 4)
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
                    .map((entry) => `${entry.label || entry.id} (${entry.id})`)
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

        card.append(header, conditionRow, expressionRow)
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
        rowState.conditionRow = conditionRow
        rowState.tokenEditor = tokenEditor
        rowState.expressionInput = expressionInput
        rowState.enumSelect = enumSelect
        rowState.valueActionSelect = definition.type !== 'enum' ? valueActionSelect : null
        rowState.actionSelect = null

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
            const idx = orderedRows.indexOf(rowState)
            if (idx >= 0) orderedRows.splice(idx, 1)
            const rows = sectionRows.get(definition.section) || []
            const rowIdx = rows.indexOf(rowState)
            if (rowIdx >= 0) rows.splice(rowIdx, 1)
            rowState.card?.remove()
            rowState.pillContextMenu?.remove()
            rowState.pillContextMenu = null
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
                else if (meta?.group === 'overall') rowState.conditionOverall = selected
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
    }

    for (const definition of FIXED_RULE_ROWS) {
        if (definition.section !== currentSection) {
            currentSection = definition.section
            const sectionName = currentSection
            const sectionLabel = getRuleSectionLabel(definition)
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

        if (definition.subgroup !== currentSubgroup) {
            currentSubgroup = definition.subgroup
            currentSectionBody.appendChild(el('h4', 'cp-rule-subgroup-title', { text: getRuleSubgroupLabel(definition) }))
        }

        const rowState = createRowState(definition, false)
        baseRowsByKey.set(rowKey(definition.target, definition.output), rowState)
        attachRowCard(rowState)
    }

    const applyRowsFromParams = () => {
        if (skipNextRuleBlocksApply) {
            skipNextRuleBlocksApply = false
            return
        }
        applyRowsFromRuleBlocks(Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
    }

    registerSync(syncRegistry, applyRowsFromParams, ['ruleBlocks'])
    applyRowsFromParams()
    body.appendChild(panel)
}
