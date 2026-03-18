/**
 * SEESOUND — ControlPanel.js
 * ════════════════════════════════════════════════════════════════════════════
 * Pure vanilla-JS DOM builder for the Global Parameter Matrix UI.
 *
 * Port of the React ParameterPanel.jsx / Slider / ParamGroup components.
 * No framework dependency — attaches directly to the existing #control-panel
 * element in index.html.
 *
 * Features (matching the old React UI exactly)
 * ─────────────────────────────────────────────
 *  • Collapsible sidebar (« / » button)
 *  • ⓘ info tooltip per parameter (Escape / click-away to close)
 *  • ● / ○ bypass toggle per bypassable parameter
 *  • Continuous sliders with:
 *      – Filled gradient track (accent colour → border)
 *      – Editable live-value number input
 *      – Editable default number input (★ to save)
 *  • Dropdown selects (grouped or flat)
 *  • Segmented toggle buttons
 *  • Preset bar: load from server, save to server, delete, overwrite confirm
 *  • 12-note colour palette swatches (click to open a <input type=color>)
 *
 * All changes call ParamStore.set() immediately — the render loop in main.js
 * picks up the new value on the very next animation frame.
 *
 * Usage
 * ──────
 *   import { initControlPanel } from './engine/ControlPanel.js'
 *   initControlPanel(document.getElementById('control-panel'))
 */

import {
    PARAMS, PARAM_GROUPS,
    params, disabled,
    set, setMany, resetToDefaults, subscribe,
    saveUserDefault, toggleDisabled, getSnapshot,
    listPresets, savePreset, loadPreset, deletePreset,
} from './ParamStore.js'
import {
    getInputDictionary,
    getOutputDictionary,
    RULE_SCOPES,
    RULE_ACTION_OPERATORS,
    annotateRuleContradictions,
} from './rules/RuleDictionary.js'
import { parseProjectText } from './project/ProjectIO.js'

// Phase checklist workflow anchor:
// Extend UI incrementally (dictionary -> schema -> compiler status -> builder) and verify each cluster.

/* TODO_RESUME (Phase 8):
 * - Add Rule Builder section with add/remove/reorder rows.
 * - Add row controls for scope, condition, actions, strength, and invert.
 * - Surface compile badge/error mapping from compiler state.
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function el(tag, className, attrs = {}) {
    const e = document.createElement(tag)
    if (className) e.className = className
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'text') e.textContent = v
        else if (k === 'html') e.innerHTML = v
        else if (k === 'title') e.title = v
        else e.setAttribute(k, v)
    }
    return e
}

function fmt(p, v) {
    if (p.isDropdown || p.isToggle) return String(v)
    return Number.isInteger(p.step) ? String(v) : Number(v).toFixed(2)
}

// ─────────────────────────────────────────────────────────────────────────────
// § 2  INFO TOOLTIP
// ─────────────────────────────────────────────────────────────────────────────

let _activeTooltip = null

function buildInfoBtn(p) {
    const btn = el('button', 'cp-info-btn', { text: 'ⓘ', 'aria-label': `Info: ${p.label}` })

    // Range / options string
    let rangeStr
    if (p.isDropdown) {
        rangeStr = p.dropdownGroups
            ? p.dropdownGroups.flatMap(g => g.options.map(o => o.label)).join(', ')
            : (p.dropdownOptions ?? []).map(o => o.label).join(', ')
    } else if (p.isToggle) {
        rangeStr = (p.toggleLabels ?? ['Off', 'On']).join(' / ')
    } else {
        rangeStr = `${p.min}–${p.max}${p.unit ? ' ' + p.unit : ''}`
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        // Close any open tooltip
        if (_activeTooltip) { _activeTooltip.remove(); _activeTooltip = null }
        if (btn.classList.contains('active')) { btn.classList.remove('active'); return }

        const popup = el('div', 'cp-info-popup')
        popup.innerHTML = `
      <div class="cp-info-title">${p.label}</div>
      <div class="cp-info-desc">${p.desc}</div>
      <div class="cp-info-meta">
        ${p.isToggle ? 'Options' : 'Range'}: ${rangeStr}
        ${!p.isToggle && p.neutralValue !== undefined ? ` · Neutral: ${p.neutralValue}` : ''}
        ${!p.isToggle ? ` · Default: ${p.default}${p.unit ? ' ' + p.unit : ''}` : ''}
      </div>`

        const rect = btn.getBoundingClientRect()
        popup.style.top = `${rect.bottom + 6}px`
        popup.style.left = `${Math.min(rect.left, window.innerWidth - 280)}px`
        document.body.appendChild(popup)

        btn.classList.add('active')
        _activeTooltip = popup

        popup.addEventListener('click', e => e.stopPropagation())

        requestAnimationFrame(() => {
            const close = () => {
                popup.remove()
                btn.classList.remove('active')
                _activeTooltip = null
                document.removeEventListener('click', close)
                document.removeEventListener('keydown', onKey)
            }
            const onKey = (e) => { if (e.key === 'Escape') close() }
            document.addEventListener('click', close)
            document.addEventListener('keydown', onKey)
        })
    })
    return btn
}

// ─────────────────────────────────────────────────────────────────────────────
// § 3  BYPASS BUTTON
// ─────────────────────────────────────────────────────────────────────────────

function buildBypassBtn(p, row) {
    const btn = el('button', 'cp-bypass-btn')
    const update = () => {
        const off = disabled.has(p.key)
        btn.textContent = off ? '○' : '●'
        btn.title = off ? `${p.label} is bypassed — click to enable` : `Click to bypass ${p.label}`
        row.classList.toggle('cp-row-disabled', off)
    }
    update()
    btn.addEventListener('click', () => { toggleDisabled(p.key); update(); syncRow(p, row) })
    return btn
}

// ─────────────────────────────────────────────────────────────────────────────
// § 4  SLIDER ROW BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

/** Map of key → syncRow function so the panel can be refreshed externally. */
const _rowSyncMap = new Map()

function syncRow(p, row) {
    _rowSyncMap.get(p.key)?.(params[p.key])
}
// ── 4a  Standard slider (range input + value + default fields) ────────────

function buildSliderRow(p) {
    const row = el('div', 'cp-row')
    row.classList.toggle('cp-row-disabled', disabled.has(p.key))

    if (p.canDisable) row.appendChild(buildBypassBtn(p, row))

    const lbl = el('label', 'cp-label', { text: p.label, title: p.desc })
    lbl.setAttribute('for', `cp-${p.key}`)
    row.appendChild(lbl)

    const wrap = el('div', 'cp-slider-wrap')

    // Range input
    const slider = el('input', 'cp-slider', {
        id: `cp-${p.key}`, type: 'range',
        min: p.min, max: p.max, step: p.step, value: params[p.key],
    })

    // Value display input (editable, no min/max clamp — allows typed out-of-range)
    const valInput = el('input', 'cp-val-input', {
        type: 'number', step: p.step, value: fmt(p, params[p.key]),
        title: `Current value${p.unit ? ' (' + p.unit + ')' : ''}`,
    })

    // Default display input (editable via typing then Enter)
    const savedDefaults = (() => { try { return JSON.parse(localStorage.getItem('seesound_user_defaults_v3') || '{}') } catch { return {} } })()
    const defInput = el('input', 'cp-def-input', {
        type: 'number', step: p.step,
        value: fmt(p, savedDefaults[p.key] ?? p.default),
        title: 'Saved default — press Enter to save',
    })

    const saveStar = el('button', 'cp-star-btn', { text: '★', title: 'Save current value as session default' })
    slider.addEventListener('input', () => {
        const v = parseFloat(slider.value)
        set(p.key, v)
        valInput.value = fmt(p, v)
        updateTrack(v)
    })

    valInput.addEventListener('change', () => {
        const v = parseFloat(valInput.value)
        if (!isNaN(v)) {
            set(p.key, v)
            slider.value = String(Math.min(p.max, Math.max(p.min, v)))
            updateTrack(v)
        }
    })
    valInput.addEventListener('keydown', e => { if (e.key === 'Escape') valInput.value = fmt(p, params[p.key]) })

    defInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const v = parseFloat(defInput.value)
            if (!isNaN(v)) saveUserDefault(p.key, v)
            defInput.blur()
        }
        if (e.key === 'Escape') defInput.blur()
    })
    defInput.addEventListener('blur', () => { defInput.value = fmt(p, parseFloat(defInput.value) || (savedDefaults[p.key] ?? p.default)) })

    saveStar.addEventListener('click', () => {
        saveUserDefault(p.key, params[p.key])
        defInput.value = fmt(p, params[p.key])
    })

    // Expose sync for external preset load
    _rowSyncMap.set(p.key, (v) => {
        slider.value = String(Math.min(p.max, Math.max(p.min, v)))
        valInput.value = fmt(p, v)
        updateTrack(v)
        row.classList.toggle('cp-row-disabled', disabled.has(p.key))
    })

    wrap.append(slider, valInput, defInput, saveStar, buildInfoBtn(p))
    row.appendChild(wrap)
    return row
}

// ── 4b  Dropdown row ──────────────────────────────────────────────────────

function buildDropdownRow(p) {
    const row = el('div', 'cp-row cp-toggle-row')
    row.classList.toggle('cp-row-disabled', disabled.has(p.key))

    if (p.canDisable) row.appendChild(buildBypassBtn(p, row))

    const lbl = el('label', 'cp-label', { text: p.label })
    lbl.setAttribute('for', `cp-${p.key}`)
    row.appendChild(lbl)

    const sel = el('select', 'cp-dropdown', { id: `cp-${p.key}` })

    if (p.dropdownGroups) {
        for (const g of p.dropdownGroups) {
            const grp = el('optgroup', '', { label: g.label })
            for (const o of g.options) {
                const opt = el('option', '', { value: o.value, text: o.label })
                if (String(o.value) === String(params[p.key])) opt.selected = true
                grp.appendChild(opt)
            }
            sel.appendChild(grp)
        }
    } else {
        for (const o of (p.dropdownOptions ?? [])) {
            const opt = el('option', '', { value: o.value, text: o.label })
            if (String(o.value) === String(params[p.key])) opt.selected = true
            sel.appendChild(opt)
        }
    }

    sel.addEventListener('change', () => {
        const raw = sel.value
        const n = Number(raw)
        set(p.key, raw !== '' && !isNaN(n) ? n : raw)
    })

    const star = el('button', 'cp-star-btn', { text: '★', title: 'Save as default' })
    star.addEventListener('click', () => saveUserDefault(p.key, params[p.key]))

    _rowSyncMap.set(p.key, (v) => {
        sel.value = String(v)
        row.classList.toggle('cp-row-disabled', disabled.has(p.key))
    })

    row.append(sel, star, buildInfoBtn(p))
    return row
}

// ── 4c  Toggle (segmented buttons) row ───────────────────────────────────

function buildToggleRow(p) {
    const row = el('div', 'cp-row cp-toggle-row')
    row.classList.toggle('cp-row-disabled', disabled.has(p.key))

    if (p.canDisable) row.appendChild(buildBypassBtn(p, row))

    const lbl = el('label', 'cp-label', { text: p.label, title: p.desc })
    row.appendChild(lbl)

    const labels = p.toggleLabels ?? ['Off', 'On']
    const segGroup = el('div', 'cp-seg-group')

    const btns = labels.map((txt, idx) => {
        const b = el('button', 'cp-seg-btn', { text: txt })
        if (params[p.key] === idx) b.classList.add('active')
        b.addEventListener('click', () => {
            if (disabled.has(p.key)) return
            set(p.key, idx)
            btns.forEach((bb, i) => bb.classList.toggle('active', i === idx))
        })
        return b
    })
    segGroup.append(...btns)

    const star = el('button', 'cp-star-btn', { text: '★', title: 'Save as default' })
    star.addEventListener('click', () => saveUserDefault(p.key, params[p.key]))

    _rowSyncMap.set(p.key, (v) => {
        btns.forEach((b, i) => b.classList.toggle('active', i === v))
        row.classList.toggle('cp-row-disabled', disabled.has(p.key))
    })

    row.append(segGroup, star, buildInfoBtn(p))
    return row
}

// ─────────────────────────────────────────────────────────────────────────────
// § 5  PRESET BAR
// ─────────────────────────────────────────────────────────────────────────────

function buildPresetBar() {
    const bar = el('div', 'cp-preset-bar')

    // ── Row 0: project save/load
    const row0 = el('div', 'cp-preset-row')
    const projectLabel = el('span', 'cp-preset-label', { text: 'PROJECT' })
    const btnProjectSave = el('button', 'cp-preset-btn cp-preset-save', { text: '🖫', title: 'Save project' })
    const btnProjectLoad = el('button', 'cp-preset-btn', { text: '🗁', title: 'Load project' })
    const projectInput = el('input', '', { type: 'file', accept: '.json,.seesound-project,.seesound-project.json' })
    projectInput.style.display = 'none'
    row0.append(projectLabel, btnProjectSave, btnProjectLoad)

    // ── Row 1: select + Load + Delete
    const row1 = el('div', 'cp-preset-row')
    const lbl = el('span', 'cp-preset-label', { text: 'Preset' })
    const sel = el('select', 'cp-preset-sel')
    const btnLoad = el('button', 'cp-preset-btn', { text: '🗁', title: 'Load selected rule preset' })
    const btnDel = el('button', 'cp-preset-btn cp-preset-del', { text: '🗙', title: 'Delete selected rule preset' })

    row1.append(lbl, sel, btnLoad, btnDel)

    // ── Row 2: name input + Save
    const row2 = el('div', 'cp-preset-row')
    const nameInput = el('input', 'cp-preset-name', { type: 'text', placeholder: 'preset_title' })
    const btnSave = el('button', 'cp-preset-btn cp-preset-save', { text: '🖫', title: 'Save current rule preset' })
    row2.append(nameInput, btnSave)

    bar.append(row0, row1, row2, projectInput)

    let presets = []

    async function refresh() {
        presets = await listPresets()
        const prev = sel.value
        sel.innerHTML = '<option value="">select</option>'
        for (const n of presets) {
            const o = el('option', '', { value: n, text: n })
            sel.appendChild(o)
        }
        if (prev && presets.includes(prev)) sel.value = prev
    }

    sel.addEventListener('change', () => {
        if (sel.value) nameInput.value = sel.value
    })

    btnLoad.addEventListener('click', async () => {
        if (!sel.value) return
        const data = await loadPreset(sel.value)
        if (data?.params) {
            setMany(data.params)
            for (const p of PARAMS) _rowSyncMap.get(p.key)?.(params[p.key])
            _ruleBuilderApi?.replaceFromRuleBlocks(Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
        }
    })

    btnDel.addEventListener('click', async () => {
        if (!sel.value) return
        // eslint-disable-next-line no-restricted-globals
        if (!confirm(`Delete preset "${sel.value}"?`)) return
        await deletePreset(sel.value)
        await refresh()
        nameInput.value = ''
    })

    btnSave.addEventListener('click', async () => {
        const name = nameInput.value.trim()
        if (!name) return
        if (presets.includes(name) && !confirm(`Overwrite preset "${name}"?`)) return
        const latestRules = _ruleBuilderApi?.serialize?.() ?? (Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
        set('ruleBlocks', latestRules)
        const snapshot = getSnapshot()
        snapshot.ruleBlocks = latestRules
        await savePreset(name, snapshot)
        await refresh()
        sel.value = name
    })

    btnProjectSave.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-save-request'))
    })

    btnProjectLoad.addEventListener('click', () => {
        projectInput.click()
    })

    projectInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            const text = await file.text()
            const payload = parseProjectText(text)
            window.dispatchEvent(new CustomEvent('seesound:project-load-request', {
                detail: { payload, fileName: file.name },
            }))
        } catch (err) {
            console.warn('[Project] load parse failed:', err)
            alert('Failed to load project file.')
        } finally {
            projectInput.value = ''
        }
    })

    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') btnSave.click() })

    // Update save button style when name matches an existing preset
    nameInput.addEventListener('input', () => {
        btnSave.textContent = presets.includes(nameInput.value.trim()) ? 'OVERWRITE' : '🖫'
        btnSave.classList.toggle('cp-preset-overwrite', presets.includes(nameInput.value.trim()))
    })

    refresh()
    return bar
}

function buildCanvasSizeBar() {
    const bar = el('div', 'cp-canvas-size')
    const title = el('div', 'cp-canvas-size-title', { text: 'Canvas Size' })
    const row = el('div', 'cp-canvas-size-row')

    const wLabel = el('label', 'cp-canvas-size-label', { text: '↔' })
    const wInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '160', value: String(Math.max(160, Number(params.canvasWidth ?? 0) || 160)) })
    const hLabel = el('label', 'cp-canvas-size-label', { text: '↕' })
    const hInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '120', value: String(Math.max(120, Number(params.canvasHeight ?? 0) || 120)) })
    const applyBtn = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Apply' })

    const live = { w: 0, h: 0 }

    function render() {
        if (document.activeElement !== wInput) {
            wInput.value = String(Math.max(160, Math.floor(live.w || Number(params.canvasWidth) || 160)))
        }
        if (document.activeElement !== hInput) {
            hInput.value = String(Math.max(120, Math.floor(live.h || Number(params.canvasHeight) || 120)))
        }
    }

    function applySize() {
        const w = Math.max(160, Math.floor(Number(wInput.value) || 160))
        const h = Math.max(120, Math.floor(Number(hInput.value) || 120))
        set('canvasWidth', w)
        set('canvasHeight', h)
    }

    wInput.addEventListener('change', applySize)
    hInput.addEventListener('change', applySize)
    wInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applySize()
            wInput.blur()
        }
    })
    hInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applySize()
            hInput.blur()
        }
    })
    applyBtn.addEventListener('click', applySize)

    _rowSyncMap.set('canvasWidth', () => render())
    _rowSyncMap.set('canvasHeight', () => render())

    subscribe((_, key) => {
        if (key === 'canvasWidth' || key === 'canvasHeight') render()
    })
    window.addEventListener('seesound:canvas-size', (e) => {
        live.w = Number(e?.detail?.w) || live.w
        live.h = Number(e?.detail?.h) || live.h
        render()
    })

    row.append(wLabel, wInput, hLabel, hInput, applyBtn)
    bar.append(title, row)
    render()
    return bar
}

// ─────────────────────────────────────────────────────────────────────────────
// § 6  COLLAPSIBLE GROUP
// ─────────────────────────────────────────────────────────────────────────────

function buildGroup(groupDef, groupParams, startOpen) {
    const wrap = el('div', `cp-group${startOpen ? ' cp-open' : ''}`)
    const hdr = el('button', 'cp-group-header')
    hdr.innerHTML =
        `<span class="cp-group-chevron">${startOpen ? '▾' : '▸'}</span>` +
        `<span>${groupDef.label}</span>` +
        `<span class="cp-group-count">${groupParams.length}</span>`

    const body = el('div', 'cp-group-body')
    body.style.display = startOpen ? '' : 'none'

    for (const p of groupParams) {
        if (p.isDropdown) body.appendChild(buildDropdownRow(p))
        else if (p.isToggle) body.appendChild(buildToggleRow(p))
        else body.appendChild(buildSliderRow(p))
    }

    let open = startOpen
    hdr.setAttribute('aria-expanded', String(open))
    hdr.addEventListener('click', () => {
        open = !open
        wrap.classList.toggle('cp-open', open)
        body.style.display = open ? '' : 'none'
        hdr.setAttribute('aria-expanded', String(open))
        const chevron = hdr.querySelector('.cp-group-chevron')
        if (chevron) chevron.textContent = open ? '▾' : '▸'
    })

    wrap.append(hdr, body)
    return wrap
}

// ─────────────────────────────────────────────────────────────────────────────
// § 7  RULE BUILDER
// ─────────────────────────────────────────────────────────────────────────────

const _inputIds = getInputDictionary().entries.map((e) => e.id)
const _outputMeta = getOutputDictionary().entries
const _outputIds = _outputMeta.map((e) => e.id)
const _conditionOps = ['always', '>', '>=', '<', '<=', '==', '!=']
const _ruleScopes = [...RULE_SCOPES]
const _actionOps = [...RULE_ACTION_OPERATORS]

let _ruleBuilderApi = null

function _defaultRuleName(index = 0) {
    return `rule-${Math.max(1, Math.floor(index) + 1)}`
}

function _defaultRule(index = 0) {
    return {
        id: _defaultRuleName(index),
        enabled: true,
        scope: 'spawnedOnly',
        condition: { operator: 'always' },
        actions: [{ operator: 'set', output: 'opacity', value: 1.0 }],
        strength: 1,
        invert: false,
        order: index,
    }
}

function _isShapeOutput(outputId) {
    return outputId === 'shapeType'
}

function _rowToRule(row, order) {
    const condition = { operator: row.conditionOp }
    if (row.conditionOp !== 'always') {
        condition.input = row.conditionInput
        if (row.conditionRhsMode === 'input') condition.valueInput = row.conditionRhsInput
        else condition.value = Number(row.conditionRhsLiteral)
    }

    const action = {
        operator: row.actionOp,
        output: row.actionOutput,
    }

    const strength = Number.isFinite(Number(row.strength)) ? Number(row.strength) : 1
    const sign = row.invert ? -1 : 1

    if (_isShapeOutput(row.actionOutput)) {
        action.value = row.actionLiteralShape === 'circle' ? 'circle' : 'square'
    } else if (row.actionValueMode === 'expression') {
        action.expression = row.actionExpression || '0'
    } else if (row.actionValueMode === 'input') {
        const source = row.actionInput || 'amplitude'
        if (strength === 1 && sign === 1 && row.actionOp === 'set') action.input = source
        else action.expression = `(${source}) * ${strength * sign}`
    } else {
        const value = Number(row.actionLiteral)
        if (Number.isFinite(value)) {
            action.value = value * strength * sign
        } else {
            action.value = 0
        }
    }

    return {
        id: row.id,
        enabled: !!row.enabled,
        scope: row.scope,
        condition,
        actions: [action],
        strength,
        invert: !!row.invert,
        order,
    }
}

function _ruleToRow(rule, index) {
    const action = Array.isArray(rule.actions) && rule.actions[0] ? rule.actions[0] : { operator: 'set', output: 'opacity', value: 1 }
    const isShape = _isShapeOutput(action.output)
    const hasExpr = typeof action.expression === 'string' && action.expression.trim().length > 0
    const hasInput = typeof action.input === 'string' && action.input.trim().length > 0
    return {
        id: (typeof rule.id === 'string' && rule.id.trim()) ? rule.id.trim() : _defaultRuleName(index),
        enabled: rule.enabled !== false,
        scope: _ruleScopes.includes(rule.scope) ? rule.scope : 'spawnedOnly',
        conditionOp: rule.condition?.operator || 'always',
        conditionInput: _inputIds.includes(rule.condition?.input) ? rule.condition.input : 'amplitude',
        conditionRhsMode: rule.condition?.valueInput ? 'input' : 'literal',
        conditionRhsInput: _inputIds.includes(rule.condition?.valueInput) ? rule.condition.valueInput : 'amplitude',
        conditionRhsLiteral: Number.isFinite(Number(rule.condition?.value)) ? Number(rule.condition.value) : 0.5,
        actionOutput: _outputIds.includes(action.output) ? action.output : 'opacity',
        actionOp: _actionOps.includes(action.operator) ? action.operator : 'set',
        actionValueMode: isShape ? 'shape' : (hasExpr ? 'expression' : (hasInput ? 'input' : 'literal')),
        actionInput: _inputIds.includes(action.input) ? action.input : 'amplitude',
        actionLiteral: Number.isFinite(Number(action.value)) ? Number(action.value) : 1,
        actionLiteralShape: action.value === 'circle' ? 'circle' : 'square',
        actionExpression: hasExpr ? action.expression : '',
        strength: Number.isFinite(Number(rule.strength)) ? Number(rule.strength) : 1,
        invert: !!rule.invert,
        uiState: rule.uiState || 'normal',
        order: Number.isFinite(rule.order) ? Number(rule.order) : index,
    }
}

function _makeSimpleRow(kind, index) {
    const row = _ruleToRow(_defaultRule(index), index)
    if (kind === 'louder-bigger') {
        row.conditionOp = '>'
        row.conditionInput = 'amplitude'
        row.conditionRhsMode = 'literal'
        row.conditionRhsLiteral = 0.05
        row.actionOutput = 'size'
        row.actionOp = 'set'
        row.actionValueMode = 'input'
        row.actionInput = 'amplitude'
        row.strength = 24
        row.invert = false
    } else if (kind === 'louder-brighter') {
        row.conditionOp = 'always'
        row.actionOutput = 'opacity'
        row.actionOp = 'set'
        row.actionValueMode = 'input'
        row.actionInput = 'amplitude'
        row.strength = 1
        row.invert = false
    } else if (kind === 'loud-circle') {
        row.conditionOp = '>'
        row.conditionInput = 'amplitude'
        row.conditionRhsMode = 'literal'
        row.conditionRhsLiteral = 0.5
        row.actionOutput = 'shapeType'
        row.actionOp = 'set'
        row.actionValueMode = 'shape'
        row.actionLiteralShape = 'circle'
    }
    return row
}

function _ruleSummary(row) {
    const cond = row.conditionOp === 'always'
        ? 'always'
        : `${row.conditionInput} ${row.conditionOp} ${row.conditionRhsMode === 'input' ? row.conditionRhsInput : Number(row.conditionRhsLiteral).toFixed(2)}`

    let rhs
    if (row.actionOutput === 'shapeType') {
        rhs = row.actionLiteralShape
    } else if (row.actionValueMode === 'expression') {
        rhs = row.actionExpression || '0'
    } else if (row.actionValueMode === 'input') {
        const sign = row.invert ? '-' : ''
        rhs = `${sign}${row.actionInput} × ${Number(row.strength).toFixed(2)}`
    } else {
        rhs = `${Number(row.actionLiteral).toFixed(2)} × ${Number(row.invert ? -row.strength : row.strength).toFixed(2)}`
    }

    return `When ${cond}, ${row.actionOp} ${row.actionOutput} using ${rhs}`
}

function _createSelect(opts, value, className = 'cp-rule-input') {
    const s = el('select', className)
    for (const o of opts) {
        const option = el('option', '', { value: o.value, text: o.label })
        if (String(o.value) === String(value)) option.selected = true
        s.appendChild(option)
    }
    return s
}

function _createInputNumber(value, step = '0.01', className = 'cp-rule-input cp-rule-num') {
    return el('input', className, { type: 'number', value: String(value), step })
}

export function renderCompileStatus(state) {
    _ruleBuilderApi?.renderCompileStatus(state)
}

export function serializeRuleRows() {
    return _ruleBuilderApi ? _ruleBuilderApi.serialize() : []
}

export function addRuleRow(initialRule) {
    _ruleBuilderApi?.addRow(initialRule)
}

export function initRuleBuilder(container) {
    if (!container) return null
    const section = el('div', 'cp-rule-section')
    const header = el('div', 'cp-rule-header')
    const title = el('span', 'cp-rule-title', { text: 'Rule Builder' })
    const badge = el('span', 'cp-rule-status cp-rule-status-stale', { text: 'stale' })
    header.append(title, badge)

    const hint = el('div', 'cp-rule-hint', { text: 'Quick start: add a rule, then tune threshold and strength.' })
    const quick = el('div', 'cp-rule-quick')
    const quickBig = el('button', 'cp-preset-btn cp-rule-mini', { text: '[A->S] louder->bigger' })
    const quickBright = el('button', 'cp-preset-btn cp-rule-mini', { text: '[A->A] louder->brighter' })
    const quickCircle = el('button', 'cp-preset-btn cp-rule-mini', { text: '[A->Shape] loud->circle' })
    quick.append(quickBig, quickBright, quickCircle)
    const error = el('div', 'cp-rule-error')

    const rowsWrap = el('div', 'cp-rule-rows')
    const actions = el('div', 'cp-rule-actions')
    const addBtn = el('button', 'cp-preset-btn cp-rule-add', { text: '+' })
    actions.appendChild(addBtn)

    section.append(header, hint, quick, error, rowsWrap, actions)
    container.appendChild(section)

    let rows = (Array.isArray(params.ruleBlocks) ? params.ruleBlocks : []).map(_ruleToRow)
    let _syncingFromBuilder = false

    function renderCompile(state) {
        const status = state?.compileStatus || 'stale'
        badge.textContent = status
        badge.className = `cp-rule-status cp-rule-status-${status.replace(/[^a-z0-9-]/gi, '-')}`
        error.textContent = state?.compileError
            ? `Compile error: ${state.compileError}${state.compileLine ? ` (line ${state.compileLine})` : ''}`
            : (Array.isArray(state?.rejected) && state.rejected.length > 0
                ? `Rejected rules: ${state.rejected.map(r => r.id).join(', ')}`
                : '')
    }

    function pushRules() {
        const serialized = rows.map((r, i) => _rowToRule(r, i))
        const annotated = annotateRuleContradictions(serialized)
        const red = new Set(annotated.redRuleIds)
        rows = rows.map((r) => ({ ...r, uiState: red.has(r.id) ? 'red' : 'normal' }))
        _syncingFromBuilder = true
        set('ruleBlocks', annotated.rules)
        _syncingFromBuilder = false
        renderCompile({ compileStatus: 'stale', compileError: null })
        drawRows()
    }

    function wireChange(handler) {
        return (evt) => {
            const changed = handler(evt)
            if (changed === false) return
            pushRules()
        }
    }

    function drawRows() {
        rowsWrap.innerHTML = ''
        if (rows.length === 0) {
            rowsWrap.appendChild(el('div', 'cp-rule-empty', { text: 'No custom rules in this preset.' }))
            return
        }
        rows.forEach((row, i) => {
            const card = el('div', `cp-rule-row${row.uiState === 'red' ? ' cp-rule-row-red' : ''}`)

            const top = el('div', 'cp-rule-row-top')
            const idx = el('span', 'cp-rule-index', { text: `#${i + 1}` })
            const name = el('input', 'cp-rule-input cp-rule-name', { type: 'text', value: row.id, placeholder: 'rule name' })
            const enable = el('input', 'cp-rule-toggle', { type: 'checkbox' })
            enable.checked = !!row.enabled
            enable.addEventListener('change', wireChange(() => {
                row.enabled = enable.checked
                return true
            }))
            name.addEventListener('keydown', wireChange((e) => {
                if (e.key !== 'Enter') return false
                e.preventDefault()
                const next = String(name.value || '').trim()
                row.id = next || _defaultRuleName(i)
                name.value = row.id
                name.blur()
                return true
            }))
            const scope = _createSelect(_ruleScopes.map(v => ({ value: v, label: v })), row.scope)
            scope.addEventListener('change', wireChange(() => {
                row.scope = scope.value
                return true
            }))
            const up = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Move Up' })
            const down = el('button', 'cp-preset-btn cp-rule-mini', { text: '↓' })
            const del = el('button', 'cp-preset-btn cp-rule-mini cp-preset-del', { text: '🗙' })
            up.textContent = '↑'
            up.addEventListener('click', () => { if (i <= 0) return;[rows[i - 1], rows[i]] = [rows[i], rows[i - 1]]; pushRules() })
            down.addEventListener('click', () => { if (i >= rows.length - 1) return;[rows[i + 1], rows[i]] = [rows[i], rows[i + 1]]; pushRules() })
            del.addEventListener('click', () => { rows.splice(i, 1); pushRules() })
            top.append(idx, name, enable, scope, up, down, del)

            const cond = el('div', 'cp-rule-line')
            cond.appendChild(el('span', 'cp-rule-k', { text: 'Condition' }))
            const condOp = _createSelect(_conditionOps.map(v => ({ value: v, label: v })), row.conditionOp)
            const condInput = _createSelect(_inputIds.map(v => ({ value: v, label: v })), row.conditionInput)
            const condMode = _createSelect([{ value: 'literal', label: 'literal' }, { value: 'input', label: 'input' }], row.conditionRhsMode)
            const condLit = _createInputNumber(row.conditionRhsLiteral)
            const condInp = _createSelect(_inputIds.map(v => ({ value: v, label: v })), row.conditionRhsInput)
            const refreshCond = () => {
                const always = condOp.value === 'always'
                condInput.style.display = always ? 'none' : ''
                condMode.style.display = always ? 'none' : ''
                condLit.style.display = (!always && condMode.value === 'literal') ? '' : 'none'
                condInp.style.display = (!always && condMode.value === 'input') ? '' : 'none'
            }
            condOp.addEventListener('change', wireChange(() => {
                row.conditionOp = condOp.value
                refreshCond()
                return true
            }))
            condInput.addEventListener('change', wireChange(() => {
                row.conditionInput = condInput.value
                return true
            }))
            condMode.addEventListener('change', wireChange(() => {
                row.conditionRhsMode = condMode.value
                refreshCond()
                return true
            }))
            condLit.addEventListener('keydown', wireChange((e) => {
                if (e.key !== 'Enter') return false
                e.preventDefault()
                row.conditionRhsLiteral = Number(condLit.value)
                condLit.blur()
                return true
            }))
            condInp.addEventListener('change', wireChange(() => {
                row.conditionRhsInput = condInp.value
                return true
            }))
            cond.append(condOp, condInput, condMode, condLit, condInp)
            refreshCond()

            const act = el('div', 'cp-rule-line')
            act.appendChild(el('span', 'cp-rule-k', { text: 'Action' }))
            const out = _createSelect(_outputIds.map(v => ({ value: v, label: v })), row.actionOutput)
            const op = _createSelect(_actionOps.map(v => ({ value: v, label: v })), row.actionOp)
            const mode = _createSelect([
                { value: 'literal', label: 'literal' },
                { value: 'input', label: 'input' },
                { value: 'expression', label: 'expression' },
                { value: 'shape', label: 'shape type' },
            ], row.actionValueMode)
            const valNum = _createInputNumber(row.actionLiteral)
            const valInp = _createSelect(_inputIds.map(v => ({ value: v, label: v })), row.actionInput)
            const valExpr = el('input', 'cp-rule-input cp-rule-expr', { type: 'text', value: row.actionExpression, placeholder: 'amplitude * 0.8' })
            const valShape = _createSelect([{ value: 'square', label: 'square' }, { value: 'circle', label: 'circle' }], row.actionLiteralShape)

            const st = _createInputNumber(row.strength, '0.1')
            const invWrap = el('label', 'cp-rule-invert')
            const inv = el('input', '', { type: 'checkbox' })
            inv.checked = !!row.invert
            invWrap.append(inv, el('span', '', { text: '⇄ invert' }))

            const refreshAct = () => {
                const shape = out.value === 'shapeType'
                if (shape) mode.value = 'shape'
                mode.style.display = shape ? 'none' : ''
                valNum.style.display = (!shape && mode.value === 'literal') ? '' : 'none'
                valInp.style.display = (!shape && mode.value === 'input') ? '' : 'none'
                valExpr.style.display = (!shape && mode.value === 'expression') ? '' : 'none'
                valShape.style.display = shape ? '' : 'none'
                st.style.display = shape ? 'none' : ''
                invWrap.style.display = shape ? 'none' : ''
            }

            out.addEventListener('change', wireChange(() => {
                row.actionOutput = out.value
                refreshAct()
                return true
            }))
            op.addEventListener('change', wireChange(() => {
                row.actionOp = op.value
                return true
            }))
            mode.addEventListener('change', wireChange(() => {
                row.actionValueMode = mode.value
                refreshAct()
                return true
            }))
            valNum.addEventListener('keydown', wireChange((e) => {
                if (e.key !== 'Enter') return false
                e.preventDefault()
                row.actionLiteral = Number(valNum.value)
                valNum.blur()
                return true
            }))
            valInp.addEventListener('change', wireChange(() => {
                row.actionInput = valInp.value
                return true
            }))
            valExpr.addEventListener('keydown', wireChange((e) => {
                if (e.key !== 'Enter') return false
                e.preventDefault()
                row.actionExpression = valExpr.value
                valExpr.blur()
                return true
            }))
            valShape.addEventListener('change', wireChange(() => {
                row.actionLiteralShape = valShape.value
                return true
            }))
            st.addEventListener('keydown', wireChange((e) => {
                if (e.key !== 'Enter') return false
                e.preventDefault()
                row.strength = Number(st.value)
                st.blur()
                return true
            }))
            inv.addEventListener('change', wireChange(() => {
                row.invert = inv.checked
                return true
            }))

            act.append(out, op, mode, valNum, valInp, valExpr, valShape, st, invWrap)
            refreshAct()

            const summary = el('div', 'cp-rule-summary', { text: _ruleSummary(row) })

            card.append(top, cond, act, summary)
            rowsWrap.appendChild(card)
        })
    }

    addBtn.addEventListener('click', () => {
        rows.push(_ruleToRow(_defaultRule(rows.length), rows.length))
        pushRules()
    })

    quickBig.addEventListener('click', () => {
        rows.push(_makeSimpleRow('louder-bigger', rows.length))
        pushRules()
    })
    quickBright.addEventListener('click', () => {
        rows.push(_makeSimpleRow('louder-brighter', rows.length))
        pushRules()
    })
    quickCircle.addEventListener('click', () => {
        rows.push(_makeSimpleRow('loud-circle', rows.length))
        pushRules()
    })

    _ruleBuilderApi = {
        serialize: () => rows.map((r, i) => _rowToRule(r, i)),
        addRow: (initialRule) => {
            rows.push(_ruleToRow(initialRule || _defaultRule(rows.length), rows.length))
            pushRules()
        },
        replaceFromRuleBlocks: (blocks) => {
            rows = (Array.isArray(blocks) ? blocks : []).map(_ruleToRow)
            drawRows()
            renderCompile({ compileStatus: 'stale', compileError: null })
        },
        renderCompileStatus: renderCompile,
    }

    subscribe((_, key) => {
        if (key !== 'ruleBlocks' || _syncingFromBuilder) return
        _ruleBuilderApi?.replaceFromRuleBlocks(Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
    })

    drawRows()
    pushRules()
    window.addEventListener('seesound:rule-compile-state', (e) => renderCompile(e.detail || {}))
    return _ruleBuilderApi
}

// ─────────────────────────────────────────────────────────────────────────────
// § 8  PUBLIC INIT
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build the full control panel UI inside `container`.
 * Attach it to `document.getElementById('control-panel')`.
 *
 * @param {HTMLElement} container
 */
export function initControlPanel(container) {
    if (!container) { console.warn('[ControlPanel] No container element found.'); return }

    // ── Sidebar header (title + collapse + reset)
    const header = el('div', 'cp-header')
    const collapseBtn = el('button', 'cp-collapse-btn', { text: '»', title: 'Collapse panel' })
    const title = el('span', 'cp-title', { text: 'Parameters' })
    const resetBtn = el('button', 'cp-reset-btn', { text: '↺', title: 'Reset all to factory defaults' })
    header.append(collapseBtn, title, resetBtn)

    // ── Scrollable body
    const body = el('div', 'cp-body')
    body.appendChild(buildPresetBar())
    body.appendChild(buildCanvasSizeBar())

    for (let i = 0; i < PARAM_GROUPS.length; i++) {
        const g = PARAM_GROUPS[i]
        const groupParams = PARAMS.filter(p => p.group === g.id && p.key !== 'canvasWidth' && p.key !== 'canvasHeight')
        if (groupParams.length === 0) continue
        body.appendChild(buildGroup(g, groupParams, i < 3))
    }

    initRuleBuilder(body)

    container.append(header, body)

    // ── Collapse / expand sidebar
    let collapsed = false
    collapseBtn.addEventListener('click', () => {
        collapsed = !collapsed
        container.classList.toggle('cp-collapsed', collapsed)
        collapseBtn.textContent = collapsed ? '«' : '»'
        title.style.display = collapsed ? 'none' : ''
        resetBtn.style.display = collapsed ? 'none' : ''
        body.style.display = collapsed ? 'none' : ''
    })

    // ── Reset all params
    resetBtn.addEventListener('click', () => {
        if (!confirm('Reset all parameters to factory defaults?')) return
        resetToDefaults()
        for (const p of PARAMS) _rowSyncMap.get(p.key)?.(params[p.key])
    })
}
