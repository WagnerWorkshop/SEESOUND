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

    function updateTrack(v) {
        const pct = ((v - p.min) / (p.max - p.min)) * 100
        if (!disabled.has(p.key)) {
            slider.style.background =
                `linear-gradient(90deg, var(--cp-accent) ${pct}%, var(--cp-border) ${pct}%)`
        } else {
            slider.style.background = 'var(--cp-border)'
        }
    }
    updateTrack(params[p.key])

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

    // ── Row 1: select + Load + Delete
    const row1 = el('div', 'cp-preset-row')
    const lbl = el('span', 'cp-preset-label', { text: 'Preset' })
    const sel = el('select', 'cp-preset-sel')
    const btnLoad = el('button', 'cp-preset-btn', { text: 'Load', title: 'Load selected preset' })
    const btnDel = el('button', 'cp-preset-btn cp-preset-del', { text: '✕', title: 'Delete selected preset' })

    row1.append(lbl, sel, btnLoad, btnDel)

    // ── Row 2: name input + Save
    const row2 = el('div', 'cp-preset-row')
    const nameInput = el('input', 'cp-preset-name', { type: 'text', placeholder: 'Name…' })
    const btnSave = el('button', 'cp-preset-btn cp-preset-save', { text: 'Save' })
    row2.append(nameInput, btnSave)

    bar.append(row1, row2)

    let presets = []

    async function refresh() {
        presets = await listPresets()
        const prev = sel.value
        sel.innerHTML = '<option value="">— select —</option>'
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
            // Sync all rows visually
            for (const p of PARAMS) _rowSyncMap.get(p.key)?.(params[p.key])
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
        await savePreset(name, getSnapshot())
        await refresh()
        sel.value = name
    })

    nameInput.addEventListener('keydown', e => { if (e.key === 'Enter') btnSave.click() })

    // Update save button style when name matches an existing preset
    nameInput.addEventListener('input', () => {
        btnSave.textContent = presets.includes(nameInput.value.trim()) ? '↺ Overwrite' : 'Save'
        btnSave.classList.toggle('cp-preset-overwrite', presets.includes(nameInput.value.trim()))
    })

    refresh()
    return bar
}

function buildCanvasSizeBar() {
    const bar = el('div', 'cp-canvas-size')
    const title = el('div', 'cp-canvas-size-title', { text: 'Canvas Size' })
    const mode = el('div', 'cp-canvas-size-mode')
    const row = el('div', 'cp-canvas-size-row')

    const wLabel = el('label', 'cp-canvas-size-label', { text: 'W' })
    const wInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '0', value: String(Math.max(0, Number(params.canvasWidth ?? 0))) })
    const hLabel = el('label', 'cp-canvas-size-label', { text: 'H' })
    const hInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '0', value: String(Math.max(0, Number(params.canvasHeight ?? 0))) })

    const applyBtn = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Apply' })
    const autoBtn = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Auto' })
    const live = { w: 0, h: 0 }

    function render() {
        const autoW = (Number(params.canvasWidth) || 0) <= 0
        const autoH = (Number(params.canvasHeight) || 0) <= 0

        if (document.activeElement !== wInput) {
            wInput.value = String(autoW ? Math.max(0, Math.floor(live.w || 0)) : Math.max(0, Math.floor(Number(params.canvasWidth) || 0)))
        }
        if (document.activeElement !== hInput) {
            hInput.value = String(autoH ? Math.max(0, Math.floor(live.h || 0)) : Math.max(0, Math.floor(Number(params.canvasHeight) || 0)))
        }

        mode.textContent = `Mode: ${autoW || autoH ? 'Auto (live)' : 'Manual'}${live.w > 0 && live.h > 0 ? ` — current ${Math.floor(live.w)}×${Math.floor(live.h)}` : ''}`
    }

    function applySize() {
        const w = Math.max(0, Math.floor(Number(wInput.value) || 0))
        const h = Math.max(0, Math.floor(Number(hInput.value) || 0))
        setMany({ canvasWidth: w, canvasHeight: h })
    }

    applyBtn.addEventListener('click', applySize)
    wInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applySize() })
    hInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applySize() })
    autoBtn.addEventListener('click', () => {
        setMany({ canvasWidth: 0, canvasHeight: 0 })
        render()
    })

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

    row.append(wLabel, wInput, hLabel, hInput, applyBtn, autoBtn)
    bar.append(title, mode, row)
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

function _newRuleId() {
    return `rule-${Date.now().toString(36)}-${Math.floor(Math.random() * 9999).toString(36)}`
}

function _defaultRule(index = 0) {
    return {
        id: _newRuleId(),
        enabled: true,
        scope: 'spawnedOnly',
        condition: { operator: '>', input: 'amplitude', value: 0.5 },
        actions: [{ operator: 'set', output: 'a', value: 1.0 }],
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
    const action = Array.isArray(rule.actions) && rule.actions[0] ? rule.actions[0] : { operator: 'set', output: 'a', value: 1 }
    const isShape = _isShapeOutput(action.output)
    const hasExpr = typeof action.expression === 'string' && action.expression.trim().length > 0
    const hasInput = typeof action.input === 'string' && action.input.trim().length > 0
    return {
        id: rule.id || _newRuleId(),
        enabled: rule.enabled !== false,
        scope: _ruleScopes.includes(rule.scope) ? rule.scope : 'spawnedOnly',
        conditionOp: rule.condition?.operator || 'always',
        conditionInput: _inputIds.includes(rule.condition?.input) ? rule.condition.input : 'amplitude',
        conditionRhsMode: rule.condition?.valueInput ? 'input' : 'literal',
        conditionRhsInput: _inputIds.includes(rule.condition?.valueInput) ? rule.condition.valueInput : 'amplitude',
        conditionRhsLiteral: Number.isFinite(Number(rule.condition?.value)) ? Number(rule.condition.value) : 0.5,
        actionOutput: _outputIds.includes(action.output) ? action.output : 'a',
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
        row.actionOutput = 'a'
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

    const hint = el('div', 'cp-rule-hint', { text: 'Use quick presets first. Example: click "Louder -> Bigger", then tune threshold/strength.' })
    const quick = el('div', 'cp-rule-quick')
    const quickBig = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Louder -> Bigger' })
    const quickBright = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Louder -> Brighter' })
    const quickCircle = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Loud -> Circle' })
    quick.append(quickBig, quickBright, quickCircle)
    const error = el('div', 'cp-rule-error')

    const rowsWrap = el('div', 'cp-rule-rows')
    const actions = el('div', 'cp-rule-actions')
    const addBtn = el('button', 'cp-preset-btn cp-rule-add', { text: '+ Add Rule' })
    actions.appendChild(addBtn)

    section.append(header, hint, quick, error, rowsWrap, actions)
    container.appendChild(section)

    let rows = (Array.isArray(params.ruleBlocks) ? params.ruleBlocks : []).map(_ruleToRow)
    if (rows.length === 0) rows = [_ruleToRow(_defaultRule(0), 0)]

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
        set('ruleBlocks', annotated.rules)
        renderCompile({ compileStatus: 'stale', compileError: null })
        drawRows()
    }

    function wireChange(handler) {
        return (evt) => {
            handler(evt)
            pushRules()
        }
    }

    function drawRows() {
        rowsWrap.innerHTML = ''
        rows.forEach((row, i) => {
            const card = el('div', `cp-rule-row${row.uiState === 'red' ? ' cp-rule-row-red' : ''}`)

            const top = el('div', 'cp-rule-row-top')
            const idx = el('span', 'cp-rule-index', { text: `#${i + 1}` })
            const enable = el('input', 'cp-rule-toggle', { type: 'checkbox' })
            enable.checked = !!row.enabled
            enable.addEventListener('change', wireChange(() => { row.enabled = enable.checked }))
            const scope = _createSelect(_ruleScopes.map(v => ({ value: v, label: v })), row.scope)
            scope.addEventListener('change', wireChange(() => { row.scope = scope.value }))
            const up = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Move Up' })
            const down = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Move Down' })
            const del = el('button', 'cp-preset-btn cp-rule-mini cp-preset-del', { text: 'Delete' })
            up.addEventListener('click', () => { if (i <= 0) return;[rows[i - 1], rows[i]] = [rows[i], rows[i - 1]]; pushRules() })
            down.addEventListener('click', () => { if (i >= rows.length - 1) return;[rows[i + 1], rows[i]] = [rows[i], rows[i + 1]]; pushRules() })
            del.addEventListener('click', () => { rows.splice(i, 1); if (!rows.length) rows.push(_ruleToRow(_defaultRule(0), 0)); pushRules() })
            top.append(idx, enable, scope, up, down, del)

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
            condOp.addEventListener('change', wireChange(() => { row.conditionOp = condOp.value; refreshCond() }))
            condInput.addEventListener('change', wireChange(() => { row.conditionInput = condInput.value }))
            condMode.addEventListener('change', wireChange(() => { row.conditionRhsMode = condMode.value; refreshCond() }))
            condLit.addEventListener('input', wireChange(() => { row.conditionRhsLiteral = Number(condLit.value) }))
            condInp.addEventListener('change', wireChange(() => { row.conditionRhsInput = condInp.value }))
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
            invWrap.append(inv, el('span', '', { text: 'invert' }))

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

            out.addEventListener('change', wireChange(() => { row.actionOutput = out.value; refreshAct() }))
            op.addEventListener('change', wireChange(() => { row.actionOp = op.value }))
            mode.addEventListener('change', wireChange(() => { row.actionValueMode = mode.value; refreshAct() }))
            valNum.addEventListener('input', wireChange(() => { row.actionLiteral = Number(valNum.value) }))
            valInp.addEventListener('change', wireChange(() => { row.actionInput = valInp.value }))
            valExpr.addEventListener('input', wireChange(() => { row.actionExpression = valExpr.value }))
            valShape.addEventListener('change', wireChange(() => { row.actionLiteralShape = valShape.value }))
            st.addEventListener('input', wireChange(() => { row.strength = Number(st.value) }))
            inv.addEventListener('change', wireChange(() => { row.invert = inv.checked }))

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
        renderCompileStatus: renderCompile,
    }

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
    const collapseBtn = el('button', 'cp-collapse-btn', { text: '>', title: 'Collapse panel' })
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
        collapseBtn.textContent = collapsed ? '»' : '«'
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
