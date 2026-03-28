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
    RULE_TARGETS,
    RULE_ACTION_OPERATORS,
    annotateRuleContradictions,
} from './rules/RuleDictionary.js'
import { openColorDesignEditor } from './ColorDesignEditor.js'
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
    const savedDefaults = (() => { try { return JSON.parse(localStorage.getItem('seesound_user_defaults_v4') || '{}') } catch { return {} } })()
    const defInput = el('input', 'cp-def-input', {
        type: 'number', step: p.step,
        value: fmt(p, savedDefaults[p.key] ?? p.default),
        title: 'Saved default — press Enter to save',
    })

    const saveStar = el('button', 'cp-star-btn', { text: '★', title: 'Save current value as session default' })
    let previousValue = Number(params[p.key])
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

    let applyAllBtn = null
    if (p.key === 'defaultParticleSize') {
        applyAllBtn = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Apply All', title: 'Scale all current particles by new/old default size' })
        applyAllBtn.addEventListener('click', () => {
            const nextValue = Number(params[p.key])
            const oldValue = Number(previousValue)
            if (!Number.isFinite(nextValue) || !Number.isFinite(oldValue) || oldValue <= 0 || nextValue <= 0) return
            window.dispatchEvent(new CustomEvent('seesound:particle-size-apply-all', {
                detail: {
                    oldDefaultSize: oldValue,
                    newDefaultSize: nextValue,
                },
            }))
            previousValue = nextValue
        })
    }

    // Expose sync for external preset load
    _rowSyncMap.set(p.key, (v) => {
        slider.value = String(Math.min(p.max, Math.max(p.min, v)))
        valInput.value = fmt(p, v)
        updateTrack(v)
        previousValue = Number(v)
        row.classList.toggle('cp-row-disabled', disabled.has(p.key))
    })

    wrap.append(slider, valInput, defInput, saveStar, ...(applyAllBtn ? [applyAllBtn] : []), buildInfoBtn(p))
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

    const currentValue = Number(params[p.key])
    const btns = labels.map((txt, idx) => {
        const b = el('button', 'cp-seg-btn', { text: txt })
        if (currentValue === idx) b.classList.add('active')
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
        const next = Number(v)
        btns.forEach((b, i) => b.classList.toggle('active', i === next))
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
    const RULE_PRESET_PREFIX = 'rule__'

    function _commitPendingPanelEdits() {
        const active = document.activeElement
        if (active instanceof HTMLElement && active.closest('.cp-body')) active.blur()
    }

    // ── Row 0: project save/load
    const row0 = el('div', 'cp-preset-row')
    const projectLabel = el('span', 'cp-preset-label', { text: 'PROJECT' })
    const btnProjectSave = el('button', 'cp-preset-btn cp-preset-save', { text: '🖫', title: 'Save project (Ctrl+S / Ctrl+Shift+S)' })
    const btnProjectLoad = el('button', 'cp-preset-btn', { text: '🗁', title: 'Load project' })
    const btnPaletteMgr = el('button', 'cp-preset-btn', { text: '🎨', title: 'Open Palette Manager' })
    const projectInput = el('input', '', { type: 'file', accept: '.json,.seesound-project,.seesound-project.json' })
    projectInput.style.display = 'none'
    row0.append(projectLabel, btnProjectSave, btnProjectLoad, btnPaletteMgr)

    // ── Row 1: select + Load + Delete
    const row1 = el('div', 'cp-preset-row')
    const lbl = el('span', 'cp-preset-label', { text: 'Preset' })
    const sel = el('select', 'cp-preset-sel')
    const btnLoad = el('button', 'cp-preset-btn', { text: '🗁', title: 'Load selected rule preset' })
    const btnDel = el('button', 'cp-preset-btn cp-preset-del', { text: '🗙', title: 'Delete selected rule preset' })

    row1.append(sel, btnLoad, btnDel)

    // ── Row 2: name input + Save
    const row2 = el('div', 'cp-preset-row')
    const nameInput = el('input', 'cp-preset-name', { type: 'text', placeholder: 'preset_title' })
    const btnSave = el('button', 'cp-preset-btn cp-preset-save', { text: '🖫', title: 'Save current rule preset (Ctrl+P)' })
    row2.append(nameInput, btnSave)

    bar.append(row0, row1, row2, projectInput)

    let presets = []

    async function saveRulePreset() {
        _commitPendingPanelEdits()
        const typed = nameInput.value.trim()
        const selected = String(sel.value || '').trim()
        const name = typed || selected
        if (!name) {
            alert('Enter or select a preset name first.')
            nameInput.focus()
            return false
        }

        if (!typed && selected) nameInput.value = selected

        if (presets.includes(name) && !confirm(`Overwrite preset "${name}"?`)) return false

        const latestRules = _ruleBuilderApi?.serialize?.() ?? (Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
        const snapshot = getSnapshot()
        snapshot.ruleBlocks = latestRules
        await savePreset(name, snapshot)
        await refresh()
        sel.value = name
        return true
    }

    async function refresh() {
        const all = await listPresets()
        presets = all.filter((name) => !String(name || '').startsWith(RULE_PRESET_PREFIX))
        const prev = sel.value
        sel.innerHTML = '<option value="">select preset</option>'
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
        await saveRulePreset()
    })

    btnProjectSave.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:project-save-request'))
    })

    btnProjectLoad.addEventListener('click', () => {
        projectInput.click()
    })

    btnPaletteMgr.addEventListener('click', () => {
        openColorDesignEditor()
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

    const shortcutAbortPrev = window.__seesoundShortcutAbort
    if (shortcutAbortPrev && typeof shortcutAbortPrev.abort === 'function') shortcutAbortPrev.abort()
    const shortcutAbort = new AbortController()
    window.__seesoundShortcutAbort = shortcutAbort

    document.addEventListener('keydown', async (e) => {
        if (e.defaultPrevented) return
        if (e.altKey) return
        if (!(e.ctrlKey || e.metaKey)) return

        const key = String(e.key || '').toLowerCase()
        if (key === 's') {
            e.preventDefault()
            e.stopPropagation()
            window.dispatchEvent(new CustomEvent('seesound:project-save-request'))
            return
        }

        if (key === 'p' && !e.shiftKey) {
            e.preventDefault()
            e.stopPropagation()
            await saveRulePreset()
        }
    }, { signal: shortcutAbort.signal })

    refresh()
    return bar
}

function buildCanvasSizeBar() {
    const bar = el('div', 'cp-canvas-size')
    const title = el('div', 'cp-canvas-size-title', { text: 'Canvas Size' })
    const row = el('div', 'cp-canvas-size-row')
    const bgRow = el('div', 'cp-canvas-size-row')

    const wLabel = el('label', 'cp-canvas-size-label', { text: '↔' })
    const wInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '160', value: String(Math.max(160, Number(params.canvasWidth ?? 0) || 160)) })
    const hLabel = el('label', 'cp-canvas-size-label', { text: '↕' })
    const hInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '120', value: String(Math.max(120, Number(params.canvasHeight ?? 0) || 120)) })
    const sLabel = el('label', 'cp-canvas-size-label', { text: '%' })
    const sInput = el('input', 'cp-canvas-size-input', { type: 'number', step: '1', min: '5', max: '400', value: String(Math.max(5, Math.min(400, Math.floor(Number(params.canvasScale ?? 100) || 100)))) })
    const applyBtn = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Apply' })

    const bgLabel = el('div', 'cp-canvas-size-label', { text: 'BG HSL' })
    const bgHInput = el('input', 'cp-canvas-size-input', {
        type: 'number', step: '1', min: '0', max: '360',
        value: String(Math.max(0, Math.min(360, Math.floor(Number(params.defaultBackgroundHue ?? 0) || 0)))),
    })
    const bgSInput = el('input', 'cp-canvas-size-input', {
        type: 'number', step: '1', min: '0', max: '100',
        value: String(Math.max(0, Math.min(100, Math.floor(Number(params.defaultBackgroundSaturation ?? 0) || 0)))),
    })
    const bgLInput = el('input', 'cp-canvas-size-input', {
        type: 'number', step: '1', min: '0', max: '100',
        value: String(Math.max(0, Math.min(100, Math.floor(Number(params.defaultBackgroundLightness ?? 0) || 0)))),
    })

    const live = { w: 0, h: 0, s: 100 }

    function clampInt(v, min, max, fallback) {
        const n = Number(v)
        if (!Number.isFinite(n)) return fallback
        return Math.max(min, Math.min(max, Math.floor(n)))
    }

    function render() {
        const paramW = Number(params.canvasWidth)
        const paramH = Number(params.canvasHeight)
        const paramS = Number(params.canvasScale)
        const displayW = Number.isFinite(paramW) && paramW > 0 ? paramW : live.w
        const displayH = Number.isFinite(paramH) && paramH > 0 ? paramH : live.h
        const displayS = Number.isFinite(paramS) && paramS > 0 ? paramS : live.s
        if (document.activeElement !== wInput) {
            wInput.value = String(Math.max(160, Math.floor(displayW || 160)))
        }
        if (document.activeElement !== hInput) {
            hInput.value = String(Math.max(120, Math.floor(displayH || 120)))
        }
        if (document.activeElement !== sInput) {
            sInput.value = String(Math.max(5, Math.min(400, Math.floor(displayS || 100))))
        }
        if (document.activeElement !== bgHInput) {
            bgHInput.value = String(clampInt(params.defaultBackgroundHue, 0, 360, 0))
        }
        if (document.activeElement !== bgSInput) {
            bgSInput.value = String(clampInt(params.defaultBackgroundSaturation, 0, 100, 0))
        }
        if (document.activeElement !== bgLInput) {
            bgLInput.value = String(clampInt(params.defaultBackgroundLightness, 0, 100, 0))
        }
    }

    function applySize() {
        const w = Math.max(160, Math.floor(Number(wInput.value) || 160))
        const h = Math.max(120, Math.floor(Number(hInput.value) || 120))
        const s = Math.max(5, Math.min(400, Math.floor(Number(sInput.value) || 100)))
        set('canvasWidth', w)
        set('canvasHeight', h)
        set('canvasScale', s)
    }

    function applyBackground() {
        set('defaultBackgroundHue', clampInt(bgHInput.value, 0, 360, 0))
        set('defaultBackgroundSaturation', clampInt(bgSInput.value, 0, 100, 0))
        set('defaultBackgroundLightness', clampInt(bgLInput.value, 0, 100, 0))
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
    sInput.addEventListener('change', applySize)
    sInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applySize()
            sInput.blur()
        }
    })
    bgHInput.addEventListener('change', applyBackground)
    bgSInput.addEventListener('change', applyBackground)
    bgLInput.addEventListener('change', applyBackground)
    bgHInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applyBackground()
            bgHInput.blur()
        }
    })
    bgSInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applyBackground()
            bgSInput.blur()
        }
    })
    bgLInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            applyBackground()
            bgLInput.blur()
        }
    })
    applyBtn.addEventListener('click', applySize)

    _rowSyncMap.set('canvasWidth', () => render())
    _rowSyncMap.set('canvasHeight', () => render())
    _rowSyncMap.set('canvasScale', () => render())
    _rowSyncMap.set('defaultBackgroundHue', () => render())
    _rowSyncMap.set('defaultBackgroundSaturation', () => render())
    _rowSyncMap.set('defaultBackgroundLightness', () => render())

    subscribe((_, key) => {
        if (
            key === 'canvasWidth' ||
            key === 'canvasHeight' ||
            key === 'canvasScale' ||
            key === 'defaultBackgroundHue' ||
            key === 'defaultBackgroundSaturation' ||
            key === 'defaultBackgroundLightness'
        ) render()
    })
    window.addEventListener('seesound:canvas-size', (e) => {
        live.w = Number(e?.detail?.w) || live.w
        live.h = Number(e?.detail?.h) || live.h
        live.s = Number(e?.detail?.s) || live.s
        render()
    })

    row.append(wLabel, wInput, hLabel, hInput, sLabel, sInput, applyBtn)
    bgRow.append(bgLabel, bgHInput, bgSInput, bgLInput)
    bar.append(title, row, bgRow)
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

const _allInputEntries = getInputDictionary().entries
const _allInputIds = _allInputEntries.filter((e) => !e.hidden).map((e) => e.id)
let _inputIds = [..._allInputIds]
const _outputMeta = getOutputDictionary().entries
const _outputIds = _outputMeta.map((e) => e.id)
const _outputMetaById = new Map(_outputMeta.map((e) => [e.id, e]))
const _conditionOps = ['always', '>', '>=', '<', '<=', '==', '!=']
const _ruleTargets = [...RULE_TARGETS]
const _actionOps = [...RULE_ACTION_OPERATORS]

const _targetLabels = {
    spawnedParticles: 'spawned particles',
    allParticles: 'all particles',
    background: 'background',
    camera: 'camera',
}

let _ruleBuilderApi = null

function _setCalculatedRuleInputs(calculatedInputs) {
    const allowed = new Set(_allInputIds)
    const calculated = Array.isArray(calculatedInputs)
        ? [...new Set(calculatedInputs)].filter((id) => allowed.has(id))
        : []

    // Keep all valid inputs selectable to avoid a rule-creation deadlock.
    // Calculated inputs are listed first to reflect current active usage.
    _inputIds = [...new Set([...calculated, ..._allInputIds])]
}

function _defaultRuleName(index = 0) {
    return `rule-${Math.max(1, Math.floor(index) + 1)}`
}

function _newRuleUid() {
    return `rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function _defaultRule(index = 0) {
    return {
        id: _defaultRuleName(index),
        group: '',
        subgroup: '',
        enabled: true,
        target: 'spawnedParticles',
        condition: { operator: 'always' },
        actions: [{ operator: 'set', output: 'opacity', value: 1.0 }],
        order: index,
    }
}

function _isShapeOutput(outputId) {
    return outputId === 'shapeType'
}

function _normalizeTarget(rule) {
    const context = String(rule?.context || '').toLowerCase()
    if (context.includes('background')) return 'background'
    if (context.includes('camera')) return 'camera'
    if (context.includes('particle')) return 'spawnedParticles'

    const rawTarget = typeof rule?.target === 'string' ? rule.target : ''
    if (_ruleTargets.includes(rawTarget)) return rawTarget
    if (rule?.scope === 'allLivingFrame') return 'allParticles'
    return 'spawnedParticles'
}

function _outputIdsForTarget(target) {
    return _outputMeta
        .filter((entry) => !Array.isArray(entry.targets) || entry.targets.includes(target))
        .map((entry) => entry.id)
}

function _isNormalizedScalarOutput(meta) {
    if (!meta || meta.type !== 'number') return false
    const min = Number(meta?.range?.[0])
    const max = Number(meta?.range?.[1])
    return Number.isFinite(min) && Number.isFinite(max) && min === 0 && max === 1
}

function _outputLabel(outputId) {
    if (outputId === 'rgb' || outputId === 'hsv') return outputId
    const meta = _outputMetaById.get(outputId)
    if (_isNormalizedScalarOutput(meta)) return `${outputId} (norm)`
    return outputId
}

function _ensureValidOutputForTarget(row) {
    const allowed = _outputIdsForTarget(row.target)
    if (allowed.length === 0) {
        row.actionOutput = 'opacity'
        return
    }
    if (!allowed.includes(row.actionOutput)) row.actionOutput = allowed[0]
}

function _parseInputScaleExpression(expr) {
    const raw = typeof expr === 'string' ? expr.trim() : ''
    if (!raw) return null

    // Canonical generated form: (inputId) * scalar
    const scaled = raw.match(/^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\*\s*(-?\d+(?:\.\d+)?)$/)
    if (scaled) {
        const input = scaled[1]
        const scale = Number(scaled[2])
        if (_inputIds.includes(input) && Number.isFinite(scale)) {
            return {
                input,
                strength: Math.abs(scale),
                invert: scale < 0,
            }
        }
    }

    // Canonical reciprocal form: strength / max(1e-6, (inputId))
    const reciprocal = raw.match(/^\(?\s*(-?\d+(?:\.\d+)?)\s*\)?\s*\/\s*max\(\s*1e-6\s*,\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\)$/)
    if (reciprocal) {
        const strength = Number(reciprocal[1])
        const input = reciprocal[2]
        if (_inputIds.includes(input) && Number.isFinite(strength)) {
            return {
                input,
                strength: Math.abs(strength),
                invert: true,
            }
        }
    }

    // Also accept direct input reference: inputId or (inputId)
    const direct = raw.match(/^\(?\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)?$/)
    if (direct) {
        const input = direct[1]
        if (_inputIds.includes(input)) {
            return {
                input,
                strength: 1,
                invert: false,
            }
        }
    }

    return null
}

function _normalizeExpressionSyntax(expr) {
    if (typeof expr !== 'string') return ''
    let out = expr.trim()
    if (!out) return ''
    out = out.replace(/×/g, '*').replace(/÷/g, '/')
    out = out.replace(/\band\b/gi, '&&')
    out = out.replace(/\bor\b/gi, '||')
    out = out.replace(/\bnot\b/gi, '!')
    return out
}

function _safeEvalExpression(expr, inputs) {
    const text = _normalizeExpressionSyntax(expr)
    if (!text) return 0
    if (!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(text)) return 0

    const scope = {
        clamp: (x, lo, hi) => Math.max(lo, Math.min(hi, x)),
        lerp: (a, b, t) => a + (b - a) * t,
        smoothstep: (e0, e1, x) => {
            const t = Math.max(0, Math.min(1, (x - e0) / Math.max(1e-9, e1 - e0)))
            return t * t * (3 - 2 * t)
        },
        pow: Math.pow,
        min: Math.min,
        max: Math.max,
        abs: Math.abs,
        PI: Math.PI,
        E: Math.E,
    }
    for (const id of _allInputIds) scope[id] = Number(inputs?.[id]) || 0

    try {
        const keys = Object.keys(scope)
        const vals = keys.map((k) => scope[k])
        const fn = new Function(...keys, `return (${text});`)
        const out = fn(...vals)
        if (typeof out === 'boolean') return out ? 1 : 0
        const n = Number(out)
        return Number.isFinite(n) ? n : 0
    } catch {
        return 0
    }
}

function _defaultOutputProbeValue(outputId) {
    const meta = _outputMetaById.get(outputId)
    if (!meta) return 0
    if (meta.type === 'enum') {
        if (outputId === 'shapeType') return 'square'
        return Array.isArray(meta.values) && meta.values.length > 0 ? meta.values[0] : 0
    }

    const rawMin = Number(meta?.range?.[0])
    const rawMax = Number(meta?.range?.[1])
    const minFinite = Number.isFinite(rawMin)
    const maxFinite = Number.isFinite(rawMax)
    if (minFinite && maxFinite) return (rawMin + rawMax) * 0.5
    if (minFinite && !maxFinite) return rawMin === 0 ? 1 : rawMin
    if (!minFinite && maxFinite) return rawMax === 0 ? -1 : rawMax
    return 1
}

function _evaluateConditionRow(row, inputs) {
    if (!row?.conditionEnabled || row?.conditionOp === 'always') return true
    const lhs = Number(inputs?.[row.conditionInput]) || 0
    const rhs = row.conditionRhsMode === 'input'
        ? (Number(inputs?.[row.conditionRhsInput]) || 0)
        : (Number(row.conditionRhsLiteral) || 0)

    switch (row.conditionOp) {
        case '>': return lhs > rhs
        case '>=': return lhs >= rhs
        case '<': return lhs < rhs
        case '<=': return lhs <= rhs
        case '==': return lhs === rhs
        case '!=': return lhs !== rhs
        default: return true
    }
}

function _evaluateRuleRhs(row, inputs) {
    const source = String(row?.actionValueText || '').trim()
    if (!source) return 0
    if (_inputIds.includes(source)) return Number(inputs?.[source]) || 0
    if (_isShapeOutput(row?.actionOutput)) return source === 'circle' ? 'circle' : 'square'

    const n = Number(source)
    if (Number.isFinite(n)) return n
    return _safeEvalExpression(source, inputs)
}

function _computeRuleProbeStates(rows, inputs) {
    const byTarget = new Map()
    const probes = new Map()

    const ensureTargetState = (target) => {
        if (!byTarget.has(target)) byTarget.set(target, Object.create(null))
        return byTarget.get(target)
    }

    for (const row of rows) {
        const target = _normalizeTarget(row)
        const state = ensureTargetState(target)
        const key = row.actionOutput

        if (!(key in state)) state[key] = _defaultOutputProbeValue(key)
        const inValue = state[key]
        let outValue = inValue

        if (row.enabled !== false && _evaluateConditionRow(row, inputs)) {
            const rhs = _evaluateRuleRhs(row, inputs)
            if (_isShapeOutput(key)) {
                outValue = String(rhs) === 'circle' ? 'circle' : 'square'
            } else {
                const lhsNum = Number(inValue)
                const rhsNum = Number(rhs)
                const base = Number.isFinite(lhsNum) ? lhsNum : 0
                const arg = Number.isFinite(rhsNum) ? rhsNum : 0
                switch (row.actionOp) {
                    case 'set': outValue = arg; break
                    case 'add': outValue = base + arg; break
                    case 'subtract': outValue = base - arg; break
                    case 'multiply': outValue = base * arg; break
                    case 'divide': outValue = Math.abs(arg) > 1e-6 ? (base / arg) : base; break
                    case 'clamp': outValue = Math.max(-Math.abs(arg), Math.min(Math.abs(arg), base)); break
                    default: outValue = base; break
                }
            }
            state[key] = outValue
        }

        probes.set(row._uid, {
            inKey: key,
            outKey: key,
            inValue,
            outValue,
        })
    }

    return probes
}

function _refreshSelectOptions(select, options, selectedValue) {
    select.innerHTML = ''
    for (const optionDef of options) {
        const option = el('option', '', { value: optionDef.value, text: optionDef.label })
        if (String(optionDef.value) === String(selectedValue)) option.selected = true
        select.appendChild(option)
    }
    if (typeof select._autoSize === 'function') select._autoSize()
}

function _rowToRule(row, order) {
    const condition = { operator: row.conditionEnabled ? row.conditionOp : 'always' }
    if (row.conditionEnabled && row.conditionOp !== 'always') {
        condition.input = row.conditionInput
        if (row.conditionRhsMode === 'input') condition.valueInput = row.conditionRhsInput
        else condition.value = Number(row.conditionRhsLiteral)
    }

    const action = {
        operator: row.actionOp,
        output: row.actionOutput,
    }

    const rawValueText = String(row.actionValueText ?? '').trim()
    if (_isShapeOutput(row.actionOutput)) {
        action.value = rawValueText === 'circle' ? 'circle' : 'square'
    } else {
        const numericValue = Number(rawValueText)
        if (rawValueText && Number.isFinite(numericValue)) action.value = numericValue
        else if (_inputIds.includes(rawValueText)) action.input = rawValueText
        else action.expression = rawValueText
    }

    return {
        id: row.id,
        group: row.group,
        subgroup: row.subgroup,
        enabled: !!row.enabled,
        target: row.target,
        condition,
        actions: [action],
        order,
    }
}

function _ruleToRow(rule, index) {
    const action = Array.isArray(rule.actions) && rule.actions[0] ? rule.actions[0] : { operator: 'set', output: 'opacity', value: 1 }
    const conditionOp = rule.condition?.operator || 'always'
    const hasCondition = conditionOp !== 'always'
    const actionValueText = (() => {
        if (typeof action.expression === 'string') return action.expression
        if (typeof action.input === 'string' && action.input.trim()) return action.input.trim()
        if (action.value === 'circle' || action.value === 'square') return action.value
        if (Number.isFinite(Number(action.value))) return String(Number(action.value))
        return '1'
    })()
    return {
        _uid: typeof rule._uid === 'string' && rule._uid ? rule._uid : _newRuleUid(),
        id: (typeof rule.id === 'string' && rule.id.trim()) ? rule.id.trim() : _defaultRuleName(index),
        group: typeof rule.group === 'string' ? rule.group : '',
        subgroup: typeof rule.subgroup === 'string' ? rule.subgroup : '',
        enabled: rule.enabled !== false,
        target: _normalizeTarget(rule),
        conditionEnabled: hasCondition,
        conditionOp,
        conditionInput: _inputIds.includes(rule.condition?.input) ? rule.condition.input : 'amplitude',
        conditionRhsMode: rule.condition?.valueInput ? 'input' : 'literal',
        conditionRhsInput: _inputIds.includes(rule.condition?.valueInput) ? rule.condition.valueInput : 'amplitude',
        conditionRhsLiteral: Number.isFinite(Number(rule.condition?.value)) ? Number(rule.condition.value) : 0.5,
        actionOutput: _outputIds.includes(action.output) ? action.output : 'opacity',
        actionOp: _actionOps.includes(action.operator) ? action.operator : 'set',
        actionValueText,
        uiState: rule.uiState || 'normal',
        order: Number.isFinite(rule.order) ? Number(rule.order) : index,
    }
}

function _formatProbeNumber(value) {
    if (typeof value === 'string') return value
    const n = Number(value)
    if (!Number.isFinite(n)) return '0.000'
    return n.toFixed(3)
}

function _ruleSummary(row) {
    const cond = !row.conditionEnabled || row.conditionOp === 'always'
        ? 'always'
        : `${row.conditionInput} ${row.conditionOp} ${row.conditionRhsMode === 'input' ? row.conditionRhsInput : Number(row.conditionRhsLiteral).toFixed(2)}`
    return `When ${cond}, ${row.actionOp} ${row.actionOutput} using ${String(row.actionValueText || '0')}`
}

function _templateOptionsForOutput(outputId) {
    const paletteIds = (() => {
        const raw = Array.isArray(params?.palettes) ? params.palettes : []
        const out = []
        for (const palette of raw) {
            const id = String(palette?.id || '').trim()
            if (!id || out.includes(id)) continue
            out.push(id)
        }
        return out
    })()

    const paletteTemplates = paletteIds.flatMap((id) => {
        const escapedId = id.replace(/'/g, "\\'")
        return [
            { value: `expr:palette('${escapedId}', notePitchClass)`, label: `Discrete palette by notePitchClass (${id})` },
            { value: `expr:gradient('${escapedId}', normFreq)`, label: `Gradient palette by normFreq (${id})` },
        ]
    })

    if (outputId === 'rgb') {
        return [
            { value: '', label: 'rgb templates...' },
            { value: 'expr:rgb(amplitude*255, bass*255, treble*255)', label: 'RGB from amp/bass/treble' },
            ...paletteTemplates,
            { value: 'expr:matchLuma(220,60,40, amplitude*255)', label: 'Luma-matched tone' },
            ...(paletteTemplates.length === 0 ? [{ value: '', label: 'save a palette to unlock palette templates' }] : []),
        ]
    }

    if (outputId === 'hsv') {
        return [
            { value: '', label: 'hsv templates...' },
            { value: 'expr:hsv(normFreq*360, 85, 60 + amplitude*40)', label: 'HSV musical ramp' },
            { value: 'expr:hsv((notePitchClass/12)*360, 90, 65)', label: 'HSV by pitch class' },
            { value: 'expr:hsv((octave+1)*30, 80, 70)', label: 'HSV by octave' },
            ...paletteTemplates,
            ...(paletteTemplates.length === 0 ? [{ value: '', label: 'save a palette to unlock palette templates' }] : []),
        ]
    }

    return [{ value: '', label: 'template...' }]
}

function _createSelect(opts, value, className = 'cp-rule-input') {
    const s = el('select', className)
    for (const o of opts) {
        const option = el('option', '', { value: o.value, text: o.label })
        if (String(o.value) === String(value)) option.selected = true
        s.appendChild(option)
    }
    const autoSize = () => {
        const selected = s.options[s.selectedIndex]
        const label = selected ? String(selected.textContent || selected.value || '') : ''
        const font = getComputedStyle(s).font || '10px sans-serif'
        if (!_createSelect._canvas) {
            _createSelect._canvas = document.createElement('canvas')
            _createSelect._ctx = _createSelect._canvas.getContext('2d')
        }
        const ctx = _createSelect._ctx
        if (!ctx) return
        ctx.font = font
        const measured = Math.ceil(ctx.measureText(label).width)
        const width = Math.max(74, Math.min(280, measured + 28))
        s.style.width = `${width}px`
    }
    s._autoSize = autoSize
    s.addEventListener('change', autoSize)
    s.addEventListener('focus', autoSize)
    requestAnimationFrame(autoSize)
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

    const error = el('div', 'cp-rule-error')

    const rowsWrap = el('div', 'cp-rule-rows')
    const rulePresetBar = el('div', 'cp-rule-preset')
    const rulePresetSel = el('select', 'cp-preset-sel')
    const rulePresetName = el('input', 'cp-preset-name', { type: 'text', placeholder: 'single_rule_preset' })
    const rulePresetSave = el('button', 'cp-preset-btn cp-preset-save', { text: '🖫', title: 'Save selected rule as preset' })
    const rulePresetLoad = el('button', 'cp-preset-btn', { text: '🗁', title: 'Load selected rule preset (append)' })
    const rulePresetDel = el('button', 'cp-preset-btn cp-preset-del', { text: '🗙', title: 'Delete selected rule preset' })
    rulePresetBar.append(rulePresetSel, rulePresetLoad, rulePresetDel, rulePresetName, rulePresetSave)
    const actions = el('div', 'cp-rule-actions')
    const addBtn = el('button', 'cp-preset-btn cp-rule-add', { text: '+' })
    actions.appendChild(addBtn)

    section.append(header, error, rulePresetBar, rowsWrap, actions)
    container.appendChild(section)

    let rows = (Array.isArray(params.ruleBlocks) ? params.ruleBlocks : []).map(_ruleToRow)
    let _syncingFromBuilder = false
    let _dragRowIndex = -1
    let _dragSelectionUids = []
    let _dragGroupName = ''
    let _lastSelectedIndex = -1
    const _manualGroups = new Map()
    const _groupOrder = []
    const _collapsedGroups = new Set()
    const _collapsedSubgroups = new Set()
    const _collapsedRuleUids = new Set()
    const _selectedRuleUids = new Set()
    let _selectedGroupName = ''
    let _selectedSubgroup = null
    let _selectedContextGroup = 'spawnedParticles'
    const RULE_PRESET_PREFIX = 'rule__'
    let _rulePresetNames = []
    let _lastProbeInputs = Object.create(null)

    function _commitPendingRuleEdits() {
        const active = document.activeElement
        if (active instanceof HTMLElement && active.closest('.cp-rule-section')) active.blur()
    }

    function _nextUniqueRuleId(seed) {
        const used = new Set(rows.map((r) => String(r.id || '').trim()).filter(Boolean))
        const base = String(seed || '').trim() || _defaultRuleName(rows.length)
        if (!used.has(base)) return base
        let n = 2
        while (used.has(`${base}-${n}`)) n++
        return `${base}-${n}`
    }

    function _duplicateRowAt(index) {
        if (index < 0 || index >= rows.length) return
        const source = rows[index]
        const copy = {
            ...source,
            _uid: _newRuleUid(),
            id: _nextUniqueRuleId(source.id || _defaultRuleName(rows.length)),
            uiState: 'normal',
        }
        rows.splice(index + 1, 0, copy)
        pushRules()
    }

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
        const uidSet = new Set(rows.map((r) => r._uid))
        for (const uid of [..._selectedRuleUids]) if (!uidSet.has(uid)) _selectedRuleUids.delete(uid)
        for (const uid of [..._collapsedRuleUids]) if (!uidSet.has(uid)) _collapsedRuleUids.delete(uid)

        for (const row of rows) _ensureValidOutputForTarget(row)
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

    function _norm(value) {
        return String(value || '').trim()
    }

    function _subgroupKey(groupName, subgroupName) {
        return `${_norm(groupName)}::${_norm(subgroupName)}`
    }

    function _ensureManualGroup(groupName, subgroupName = '') {
        const g = _norm(groupName)
        if (!g) return
        if (!_manualGroups.has(g)) _manualGroups.set(g, new Set())
        if (subgroupName !== undefined) _manualGroups.get(g).add(_norm(subgroupName))
    }

    function _syncManualGroupsFromRows() {
        for (const row of rows) {
            const g = _norm(row.group)
            if (!g) continue
            _ensureManualGroup(g, _norm(row.subgroup))
            if (!_groupOrder.includes(g)) _groupOrder.push(g)
        }
    }

    function _isInteractiveTarget(target) {
        const node = target instanceof Element ? target : null
        if (!node) return false
        return !!node.closest('input,select,button,textarea,label,.cp-rule-slot-add')
    }

    function _setSingleSelection(index) {
        if (index < 0 || index >= rows.length) return
        _selectedRuleUids.clear()
        _selectedRuleUids.add(rows[index]._uid)
        _lastSelectedIndex = index
        _selectedGroupName = ''
        _selectedSubgroup = null
    }

    function _selectRangeTo(index) {
        if (index < 0 || index >= rows.length) return
        if (_lastSelectedIndex < 0 || _lastSelectedIndex >= rows.length) {
            _setSingleSelection(index)
            return
        }
        const lo = Math.min(_lastSelectedIndex, index)
        const hi = Math.max(_lastSelectedIndex, index)
        _selectedRuleUids.clear()
        for (let i = lo; i <= hi; i++) _selectedRuleUids.add(rows[i]._uid)
        _selectedGroupName = ''
        _selectedSubgroup = null
    }

    function _toggleSelection(index) {
        if (index < 0 || index >= rows.length) return
        const uid = rows[index]._uid
        if (_selectedRuleUids.has(uid)) _selectedRuleUids.delete(uid)
        else _selectedRuleUids.add(uid)
        _lastSelectedIndex = index
        _selectedGroupName = ''
        _selectedSubgroup = null
    }

    function _handleRuleSelect(index, evt) {
        if (index < 0 || index >= rows.length) return
        const withCtrl = !!(evt.ctrlKey || evt.metaKey)
        if (evt.shiftKey) _selectRangeTo(index)
        else if (withCtrl) _toggleSelection(index)
        else _setSingleSelection(index)
        drawRows()
    }

    function _selectIndices(indices, evt) {
        const unique = [...new Set((indices || []).filter((idx) => idx >= 0 && idx < rows.length))].sort((a, b) => a - b)
        if (unique.length === 0) return
        const withCtrl = !!(evt?.ctrlKey || evt?.metaKey)

        if (evt?.shiftKey && _lastSelectedIndex >= 0 && _lastSelectedIndex < rows.length) {
            const target = unique[unique.length - 1]
            const lo = Math.min(_lastSelectedIndex, target)
            const hi = Math.max(_lastSelectedIndex, target)
            _selectedRuleUids.clear()
            for (let i = lo; i <= hi; i++) _selectedRuleUids.add(rows[i]._uid)
            drawRows()
            return
        }

        if (withCtrl) {
            for (const idx of unique) {
                const uid = rows[idx]._uid
                if (_selectedRuleUids.has(uid)) _selectedRuleUids.delete(uid)
                else _selectedRuleUids.add(uid)
            }
        } else {
            _selectedRuleUids.clear()
            for (const idx of unique) _selectedRuleUids.add(rows[idx]._uid)
        }

        _lastSelectedIndex = unique[unique.length - 1]
        drawRows()
    }

    function _isTypingTarget(node) {
        const elNode = node instanceof Element ? node : null
        if (!elNode) return false
        return !!elNode.closest('input,textarea,select,[contenteditable="true"]')
    }

    function _removeRowsByIndices(indices) {
        const unique = [...new Set((indices || []).filter((idx) => idx >= 0 && idx < rows.length))].sort((a, b) => a - b)
        if (unique.length === 0) return false
        for (let k = unique.length - 1; k >= 0; k--) rows.splice(unique[k], 1)
        _selectedRuleUids.clear()
        _selectedGroupName = ''
        _selectedSubgroup = null
        return true
    }

    function _deleteSelected() {
        const selected = _selectedIndices()
        const board = el('div', 'cp-rule-context-board')
        const contextGroups = [
            { key: 'spawnedParticles', label: 'Particles', includes: new Set(['spawnedParticles', 'allParticles']) },
            { key: 'background', label: 'Background', includes: new Set(['background']) },
            { key: 'camera', label: 'Camera', includes: new Set(['camera']) },
        ]
        if (!contextGroups.some((g) => g.key === _selectedContextGroup)) _selectedContextGroup = 'spawnedParticles'

        for (const group of contextGroups) {
            const indices = []
            for (let i = 0; i < rows.length; i++) {
                const t = _normalizeTarget(rows[i])
                if (group.includes.has(t)) indices.push(i)
            }
            _removeRowsByIndices(selected)
            const gWrap = el('div', 'cp-group cp-rule-context-group')
        }
        if (_selectedContextGroup === group.key) gHeader.classList.add('cp-rule-group-header-selected')
        gHeader.addEventListener('click', () => {
            _selectedContextGroup = group.key
            drawRows()
        })
        _collapsedSubgroups.delete(key)
        _selectedSubgroup = null
        _selectedGroupName = ''

        if (removedRules) pushRules()
        const gBody = el('div', 'cp-group-body cp-rule-group-body')
        gBody.appendChild(_buildLane(indices, group.key, ''))
        _wireAreaDrop(gBody, group.key, '')
        if (_selectedGroupName) {
            const g = _selectedGroupName
            const groupIndices = []
            for (let i = 0; i < rows.length; i++) {
                if (_norm(rows[i].group) === g) groupIndices.push(i)
            }

            const removedRules = _removeRowsByIndices(groupIndices)
            _insertNewRuleAt(rows.length, _selectedContextGroup, '')
            if (orderIdx >= 0) _groupOrder.splice(orderIdx, 1)
            _collapsedGroups.delete(g)
            for (const key of [..._collapsedSubgroups]) {
                if (key.startsWith(`${g}::`)) _collapsedSubgroups.delete(key)
            }
            _selectedGroupName = ''
            _selectedSubgroup = null

            if (removedRules) pushRules()
            else drawRows()
            return true
        }

        return false
    }

    function _selectedIndices() {
        const out = []
        for (let i = 0; i < rows.length; i++) {
            if (_selectedRuleUids.has(rows[i]._uid)) out.push(i)
        }
        return out
    }

    function _rulePresetShortName(fullName) {
        return fullName.startsWith(RULE_PRESET_PREFIX) ? fullName.slice(RULE_PRESET_PREFIX.length) : fullName
    }

    async function _refreshRulePresets() {
        const all = await listPresets()
        _rulePresetNames = all.filter((name) => String(name || '').startsWith(RULE_PRESET_PREFIX))
        const prev = String(rulePresetSel.value || '')
        rulePresetSel.innerHTML = '<option value="">rule presets</option>'
        for (const full of _rulePresetNames) {
            const opt = el('option', '', { value: full, text: _rulePresetShortName(full) })
            rulePresetSel.appendChild(opt)
        }
        if (prev && _rulePresetNames.includes(prev)) rulePresetSel.value = prev
    }

    async function _saveSelectedRulePreset() {
        _commitPendingRuleEdits()
        const selected = _selectedIndices()
        if (selected.length < 1) {
            alert('Select one or more rules to save as a rule preset.')
            return
        }
        const baseName = String(rulePresetName.value || _rulePresetShortName(String(rulePresetSel.value || ''))).trim()
        if (!baseName) {
            alert('Enter a single-rule preset name first.')
            rulePresetName.focus()
            return
        }
        const fullName = `${RULE_PRESET_PREFIX}${baseName}`
        if (_rulePresetNames.includes(fullName) && !confirm(`Overwrite single-rule preset "${baseName}"?`)) return

        const selectedRules = selected.map((idx, order) => _rowToRule(rows[idx], order))
        const snapshot = getSnapshot()
        snapshot.ruleBlocks = selectedRules
        await savePreset(fullName, snapshot)
        await _refreshRulePresets()
        rulePresetSel.value = fullName
        rulePresetName.value = baseName
    }

    async function _loadSingleRulePreset(fullName) {
        if (!fullName) return
        const data = await loadPreset(fullName)
        const incoming = Array.isArray(data?.params?.ruleBlocks) ? data.params.ruleBlocks : []
        if (incoming.length === 0) {
            alert('Selected rule preset has no rule block.')
            return
        }
        for (const rule of incoming) rows.push(_ruleToRow(rule, rows.length))
        pushRules()
    }

    function _moveSelectionTo(targetIndex, nextGroup = '', nextSubgroup = '') {
        let indices = _dragSelectionUids
            .map((uid) => rows.findIndex((r) => r._uid === uid))
            .filter((idx) => idx >= 0)
            .sort((a, b) => a - b)

        if (indices.length === 0) {
            indices = _selectedIndices()
        }
        if (indices.length === 0 && _dragRowIndex >= 0 && _dragRowIndex < rows.length) {
            indices = [_dragRowIndex]
        }
        if (indices.length === 0) return

        const selected = new Set(indices)
        if (targetIndex >= 0 && targetIndex <= rows.length) {
            const prev = targetIndex - 1
            if (selected.has(targetIndex) || (prev >= 0 && selected.has(prev))) {
                _dragRowIndex = -1
                _dragSelectionUids = []
                return
            }
        }

        const moved = indices.map((idx) => rows[idx])
        for (let k = indices.length - 1; k >= 0; k--) rows.splice(indices[k], 1)

        let to = Math.max(0, Math.min(rows.length, targetIndex))
        for (const idx of indices) if (idx < to) to--

        const g = _norm(nextGroup)
        const s = _norm(nextSubgroup)
        for (const row of moved) {
            if (_ruleTargets.includes(g)) {
                row.target = g
                row.group = ''
                row.subgroup = ''
            } else {
                row.group = g
                row.subgroup = s
            }
        }

        rows.splice(to, 0, ...moved)
        _ensureManualGroup(g, s)
        _selectedRuleUids.clear()
        for (const row of moved) _selectedRuleUids.add(row._uid)
        _lastSelectedIndex = rows.findIndex((r) => r._uid === moved[moved.length - 1]._uid)
        _dragRowIndex = -1
        _dragSelectionUids = []
        pushRules()
    }

    function _syncGroupOrder(grouping) {
        const names = [...grouping.keys()]
        for (const name of names) {
            if (!_groupOrder.includes(name)) _groupOrder.push(name)
        }
        for (let i = _groupOrder.length - 1; i >= 0; i--) {
            if (!names.includes(_groupOrder[i])) _groupOrder.splice(i, 1)
        }
    }

    function _applyGroupOrderToRows() {
        const rank = new Map(_groupOrder.map((name, idx) => [name, idx + 1]))
        rows = rows
            .map((row, idx) => ({ row, idx }))
            .sort((a, b) => {
                const ra = rank.get(_norm(a.row.group)) ?? 0
                const rb = rank.get(_norm(b.row.group)) ?? 0
                if (ra !== rb) return ra - rb
                return a.idx - b.idx
            })
            .map((entry) => entry.row)
    }

    function _moveGroupBefore(fromGroup, toGroup) {
        const from = _norm(fromGroup)
        const to = _norm(toGroup)
        if (!from || !to || from === to) return
        const fromIdx = _groupOrder.indexOf(from)
        const toIdx = _groupOrder.indexOf(to)
        if (fromIdx < 0 || toIdx < 0) return
        _groupOrder.splice(fromIdx, 1)
        const nextTo = _groupOrder.indexOf(to)
        _groupOrder.splice(nextTo < 0 ? _groupOrder.length : nextTo, 0, from)
        _applyGroupOrderToRows()
        pushRules()
    }

    function _moveDraggedTo(targetIndex, nextGroup = '', nextSubgroup = '') {
        _moveSelectionTo(targetIndex, nextGroup, nextSubgroup)
    }

    function _insertNewRuleAt(targetIndex, nextGroup = '', nextSubgroup = '') {
        const row = _ruleToRow(_defaultRule(rows.length), rows.length)
        const g = _norm(nextGroup)
        if (_ruleTargets.includes(g)) {
            row.target = g
            row.group = ''
            row.subgroup = ''
        } else {
            row.group = g
            row.subgroup = _norm(nextSubgroup)
        }
        const to = Math.max(0, Math.min(rows.length, targetIndex))
        rows.splice(to, 0, row)
        _ensureManualGroup(row.group, row.subgroup)
        pushRules()
    }

    function _moveWithinGroup(index, direction) {
        if (index < 0 || index >= rows.length) return
        const baseGroup = _norm(rows[index].group)
        const sameGroup = []
        for (let i = 0; i < rows.length; i++) {
            if (_norm(rows[i].group) === baseGroup) sameGroup.push(i)
        }
        const localIdx = sameGroup.indexOf(index)
        if (localIdx < 0) return
        const swapLocalIdx = localIdx + direction
        if (swapLocalIdx < 0 || swapLocalIdx >= sameGroup.length) return
        const swapWith = sameGroup[swapLocalIdx]
            ;[rows[index], rows[swapWith]] = [rows[swapWith], rows[index]]
        pushRules()
    }

    function _buildRuleCard(row, i, probeStates) {
        const selected = _selectedRuleUids.has(row._uid)
        const card = el('div', `cp-rule-row${row.uiState === 'red' ? ' cp-rule-row-red' : ''}${selected ? ' cp-rule-row-selected' : ''}`)
        card.draggable = true
        card.dataset.ruleIndex = String(i)
        card.dataset.ruleUid = row._uid
        card.addEventListener('click', (evt) => {
            if (_isInteractiveTarget(evt.target)) return
            const node = evt.target instanceof Element ? evt.target : null
            if (!node) return
            const onSurface =
                node === card ||
                node.classList.contains('cp-rule-row-top') ||
                node.classList.contains('cp-rule-body') ||
                node.classList.contains('cp-rule-line')
            if (!onSurface) return
            _handleRuleSelect(i, evt)
        })
        card.addEventListener('dragstart', (evt) => {
            if (_isInteractiveTarget(evt.target)) {
                evt.preventDefault()
                return
            }
            if (!_selectedRuleUids.has(row._uid)) _setSingleSelection(i)
            _dragSelectionUids = _selectedIndices().map((idx) => rows[idx]._uid)
            _dragRowIndex = i
            if (evt.dataTransfer) {
                evt.dataTransfer.effectAllowed = 'move'
                evt.dataTransfer.setData('text/plain', row._uid)
            }
            card.classList.add('cp-rule-row-dragging')
        })
        card.addEventListener('dragend', () => {
            _dragRowIndex = -1
            _dragSelectionUids = []
            card.classList.remove('cp-rule-row-dragging')
        })

        const top = el('div', 'cp-rule-row-top')
        const collapsed = _collapsedRuleUids.has(row._uid)
        const fold = el('button', 'cp-preset-btn cp-rule-mini cp-rule-fold-btn', { type: 'button', text: collapsed ? '▸' : '▾', title: collapsed ? 'Expand rule' : 'Collapse rule' })
        fold.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            if (_collapsedRuleUids.has(row._uid)) _collapsedRuleUids.delete(row._uid)
            else _collapsedRuleUids.add(row._uid)
            drawRows()
        })
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
        const up = el('button', 'cp-preset-btn cp-rule-mini', { text: 'Move Up' })
        const down = el('button', 'cp-preset-btn cp-rule-mini', { text: '↓' })
        const dup = el('button', 'cp-preset-btn cp-rule-mini', { text: '⧉' })
        dup.title = 'Duplicate rule'
        const del = el('button', 'cp-preset-btn cp-rule-mini cp-preset-del', { text: '🗙' })
        up.textContent = '↑'
        up.addEventListener('click', () => _moveWithinGroup(i, -1))
        down.addEventListener('click', () => _moveWithinGroup(i, +1))
        dup.addEventListener('click', () => _duplicateRowAt(i))
        del.addEventListener('click', () => {
            const indices = _selectedIndices()
            if (indices.length > 1 && _selectedRuleUids.has(row._uid)) {
                for (let k = indices.length - 1; k >= 0; k--) rows.splice(indices[k], 1)
                _selectedRuleUids.clear()
                pushRules()
                return
            }
            rows.splice(i, 1)
            _selectedRuleUids.delete(row._uid)
            _collapsedRuleUids.delete(row._uid)
            pushRules()
        })
        top.append(fold, idx, name, enable, up, down, dup, del)

        const cond = el('div', 'cp-rule-line')
        cond.appendChild(el('span', 'cp-rule-k', { text: 'Condition' }))
        const addConditionBtn = el('button', 'cp-preset-btn cp-rule-mini', { type: 'button', text: '+ Condition' })
        const removeConditionBtn = el('button', 'cp-preset-btn cp-rule-mini cp-preset-del', { type: 'button', text: 'Remove' })
        const condOp = _createSelect(_conditionOps.map(v => ({ value: v, label: v })), row.conditionOp)
        const condInput = _createSelect(_inputIds.map(v => ({ value: v, label: v })), row.conditionInput)
        const condMode = _createSelect([{ value: 'literal', label: 'literal' }, { value: 'input', label: 'input' }], row.conditionRhsMode)
        const condLit = _createInputNumber(row.conditionRhsLiteral)
        const condInp = _createSelect(_inputIds.map(v => ({ value: v, label: v })), row.conditionRhsInput)
        const refreshCond = () => {
            const enabled = !!row.conditionEnabled
            addConditionBtn.style.display = enabled ? 'none' : ''
            removeConditionBtn.style.display = enabled ? '' : 'none'
            condOp.style.display = enabled ? '' : 'none'
            const always = condOp.value === 'always'
            condInput.style.display = (enabled && !always) ? '' : 'none'
            condMode.style.display = (enabled && !always) ? '' : 'none'
            condLit.style.display = (enabled && !always && condMode.value === 'literal') ? '' : 'none'
            condInp.style.display = (enabled && !always && condMode.value === 'input') ? '' : 'none'
            if (!enabled) row.conditionOp = 'always'
        }
        addConditionBtn.addEventListener('click', wireChange(() => {
            row.conditionEnabled = true
            if (!row.conditionOp || row.conditionOp === 'always') row.conditionOp = '>'
            condOp.value = row.conditionOp
            refreshCond()
            return true
        }))
        removeConditionBtn.addEventListener('click', wireChange(() => {
            row.conditionEnabled = false
            row.conditionOp = 'always'
            condOp.value = 'always'
            refreshCond()
            return true
        }))
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
        cond.append(addConditionBtn, removeConditionBtn, condOp, condInput, condMode, condLit, condInp)
        refreshCond()

        const act = el('div', 'cp-rule-line')
        act.appendChild(el('span', 'cp-rule-k', { text: 'Action' }))
        _ensureValidOutputForTarget(row)
        const out = _createSelect(_outputIdsForTarget(row.target).map((v) => ({ value: v, label: _outputLabel(v) })), row.actionOutput)
        const op = _createSelect(_actionOps.map(v => ({ value: v, label: v })), row.actionOp)
        const valExprWrap = el('div', 'cp-rule-expr-wrap')
        const valExpr = el('textarea', 'cp-rule-input cp-rule-expr', { placeholder: 'value / formula / input id (e.g. bass*0.5 + 0.2)' })
        valExpr.value = row.actionValueText || ''
        const exprControls = el('div', 'cp-rule-expr-controls')
        const templatePicker = _createSelect([], '', 'cp-rule-input cp-rule-tag')
        const inputPicker = _createSelect([], '', 'cp-rule-input cp-rule-tag')
        const mathPicker = _createSelect([], '', 'cp-rule-input cp-rule-tag')
        const clearExprBtn = el('button', 'cp-preset-btn cp-rule-mini', { type: 'button', text: 'Clear', title: 'Clear expression' })
        const valExprSuggest = el('div', 'cp-rule-expr-suggest')
        exprControls.append(templatePicker, inputPicker, mathPicker, clearExprBtn)
        valExprWrap.append(valExpr, exprControls, valExprSuggest)

        const _mathTokens = ['+', '-', '*', '/', '(', ')', 'clamp(', 'min(', 'max(', 'abs(', 'pow(', 'PI', 'E', 'and', 'or', 'not']
        const _shapeTokens = ['square', 'circle']

        const refreshAct = () => {
            _ensureValidOutputForTarget(row)
            const allowedOutputs = _outputIdsForTarget(row.target).map((v) => ({ value: v, label: _outputLabel(v) }))
            _refreshSelectOptions(out, allowedOutputs, row.actionOutput)
            const showTemplatePicker = (out.value === 'rgb' || out.value === 'hsv')
            if (showTemplatePicker) {
                _refreshSelectOptions(templatePicker, _templateOptionsForOutput(out.value), '')
            }
            templatePicker.style.display = showTemplatePicker ? '' : 'none'
            const shape = out.value === 'shapeType'
            _refreshSelectOptions(
                inputPicker,
                shape
                    ? [{ value: '', label: 'insert shape...' }, ..._shapeTokens.map((v) => ({ value: v, label: v }))]
                    : [{ value: '', label: 'insert input...' }, ..._inputIds.map((v) => ({ value: v, label: v }))],
                '',
            )
            _refreshSelectOptions(mathPicker, [{ value: '', label: 'insert math...' }, ..._mathTokens.map((v) => ({ value: v, label: v }))], '')
            mathPicker.style.display = shape ? 'none' : ''
            if (!shape) {
                if (valExpr.placeholder !== 'value / formula / input id (e.g. bass*0.5 + 0.2)') {
                    valExpr.placeholder = 'value / formula / input id (e.g. bass*0.5 + 0.2)'
                }
            } else if (valExpr.placeholder !== 'shape: square or circle') {
                valExpr.placeholder = 'shape: square or circle'
            }
            if (shape) {
                valExprSuggest.style.display = 'none'
                valExprSuggest.innerHTML = ''
            }
        }

        const _exprInputSymbols = () => [...new Set(_inputIds)]
        let _exprCaretStart = 0
        let _exprCaretEnd = 0
        let _exprSuggestMatches = []
        let _exprSuggestIndex = -1

        function _rememberExprCaret() {
            const text = String(valExpr.value || '')
            const start = Number.isFinite(valExpr.selectionStart) ? valExpr.selectionStart : text.length
            const end = Number.isFinite(valExpr.selectionEnd) ? valExpr.selectionEnd : start
            _exprCaretStart = Math.max(0, Math.min(text.length, start))
            _exprCaretEnd = Math.max(_exprCaretStart, Math.min(text.length, end))
        }

        function _highlightExprSuggestion(index) {
            const buttons = Array.from(valExprSuggest.querySelectorAll('.cp-rule-expr-suggest-btn'))
            if (buttons.length === 0) {
                _exprSuggestIndex = -1
                return
            }
            const clamped = Math.max(0, Math.min(buttons.length - 1, index))
            _exprSuggestIndex = clamped
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.toggle('is-active', i === clamped)
            }
        }

        function _exprActiveToken() {
            const text = String(valExpr.value || '')
            const caret = Number.isFinite(valExpr.selectionStart) ? valExpr.selectionStart : text.length
            const left = text.slice(0, caret)
            const m = left.match(/([A-Za-z_][A-Za-z0-9_]*)$/)
            return {
                token: m ? m[1] : '',
                start: m ? caret - m[1].length : caret,
                end: caret,
            }
        }

        function _insertExprSuggestion(symbol) {
            _rememberExprCaret()
            const text = String(valExpr.value || '')
            const tok = _exprActiveToken()
            const next = `${text.slice(0, tok.start)}${symbol}${text.slice(tok.end)}`
            valExpr.value = next
            row.actionValueText = next
            const caret = tok.start + symbol.length
            valExpr.focus()
            valExpr.setSelectionRange(caret, caret)
            _rememberExprCaret()
            _autoSizeExprField()
            _renderExprSuggestions(true)
        }

        function _insertTokenAtCursor(symbol) {
            const text = String(valExpr.value || '')
            const hasLiveCaret = document.activeElement === valExpr && Number.isFinite(valExpr.selectionStart)
            const start = hasLiveCaret ? valExpr.selectionStart : _exprCaretStart
            const end = hasLiveCaret ? valExpr.selectionEnd : _exprCaretEnd
            const next = `${text.slice(0, start)}${symbol}${text.slice(end)}`
            valExpr.value = next
            row.actionValueText = next
            const caret = start + symbol.length
            valExpr.focus()
            valExpr.setSelectionRange(caret, caret)
            _rememberExprCaret()
            _autoSizeExprField()
            _renderExprSuggestions(true)
        }

        function _renderExprSuggestions(showAllWhenEmpty = false) {
            if (out.value === 'shapeType') {
                valExprSuggest.style.display = 'none'
                valExprSuggest.innerHTML = ''
                return
            }

            const tok = _exprActiveToken()
            const needle = String(tok.token || '').toLowerCase()
            if (!needle && !showAllWhenEmpty) {
                valExprSuggest.style.display = 'none'
                valExprSuggest.innerHTML = ''
                return
            }

            const allInputs = _exprInputSymbols()
            const matches = needle
                ? allInputs.filter((s) => s.toLowerCase().includes(needle) && s.toLowerCase() !== needle).slice(0, 12)
                : allInputs.slice(0, 12)
            _exprSuggestMatches = matches

            if (matches.length === 0) {
                _exprSuggestIndex = -1
                valExprSuggest.style.display = 'none'
                valExprSuggest.innerHTML = ''
                return
            }

            valExprSuggest.innerHTML = ''
            for (const sym of matches) {
                const b = el('button', 'cp-rule-expr-suggest-btn', { type: 'button', text: sym })
                b.addEventListener('mousedown', (e) => {
                    e.preventDefault()
                })
                b.addEventListener('click', (e) => {
                    e.preventDefault()
                    _insertExprSuggestion(sym)
                })
                valExprSuggest.appendChild(b)
            }
            valExprSuggest.style.display = 'flex'
            _highlightExprSuggestion(0)
        }

        function _autoSizeExprField() {
            // Keep height tightly fitted to content for better scanability.
            valExpr.style.height = 'auto'
            valExpr.style.height = `${Math.max(24, valExpr.scrollHeight)}px`
        }

        // Allow text selection/editing in expression without triggering row drag.
        valExpr.addEventListener('pointerdown', () => {
            card.draggable = false
        })
        valExpr.addEventListener('pointerup', () => {
            card.draggable = true
        })
        valExpr.addEventListener('dragstart', (e) => {
            e.preventDefault()
        })

        out.addEventListener('change', wireChange(() => {
            row.actionOutput = out.value
            refreshAct()
            return true
        }))
        op.addEventListener('change', wireChange(() => {
            row.actionOp = op.value
            return true
        }))
        valExpr.addEventListener('input', () => {
            _rememberExprCaret()
            row.actionValueText = valExpr.value
            _autoSizeExprField()
            _renderExprSuggestions(true)
        })
        inputPicker.addEventListener('change', wireChange(() => {
            const token = inputPicker.value
            if (!token) return false
            _insertTokenAtCursor(token)
            inputPicker.value = ''
            return true
        }))
        templatePicker.addEventListener('change', wireChange(() => {
            const choice = String(templatePicker.value || '')
            if (!choice) return false

            const parts = choice.split(':')
            const payload = String(parts.length > 1 ? parts.slice(1).join(':') : parts[0]).trim()
            if (!payload) {
                templatePicker.value = ''
                return false
            }

            valExpr.value = payload
            row.actionValueText = payload
            _autoSizeExprField()
            _renderExprSuggestions(true)
            valExpr.focus()
            const caret = payload.length
            valExpr.setSelectionRange(caret, caret)
            _rememberExprCaret()
            templatePicker.value = ''
            return true
        }))
        mathPicker.addEventListener('change', wireChange(() => {
            const token = mathPicker.value
            if (!token) return false
            _insertTokenAtCursor(token)
            mathPicker.value = ''
            return true
        }))
        clearExprBtn.addEventListener('click', wireChange(() => {
            if (!valExpr.value) return false
            valExpr.value = ''
            row.actionValueText = ''
            _autoSizeExprField()
            _renderExprSuggestions()
            valExpr.focus()
            return true
        }))
        valExpr.addEventListener('click', () => _renderExprSuggestions(true))
        valExpr.addEventListener('focus', () => {
            _rememberExprCaret()
            _autoSizeExprField()
            _renderExprSuggestions(true)
        })
        valExpr.addEventListener('keyup', () => {
            _rememberExprCaret()
            _renderExprSuggestions(true)
        })
        valExpr.addEventListener('select', _rememberExprCaret)
        valExpr.addEventListener('keydown', wireChange((e) => {
            const hasSuggestions = valExprSuggest.style.display !== 'none' && _exprSuggestMatches.length > 0
            if (hasSuggestions && e.key === 'ArrowDown') {
                e.preventDefault()
                _highlightExprSuggestion((_exprSuggestIndex + 1) % _exprSuggestMatches.length)
                return false
            }
            if (hasSuggestions && e.key === 'ArrowUp') {
                e.preventDefault()
                const prev = _exprSuggestIndex <= 0 ? (_exprSuggestMatches.length - 1) : (_exprSuggestIndex - 1)
                _highlightExprSuggestion(prev)
                return false
            }
            if (hasSuggestions && e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
                e.preventDefault()
                const idx = _exprSuggestIndex >= 0 ? _exprSuggestIndex : 0
                const picked = _exprSuggestMatches[idx]
                if (!picked) return false
                _insertExprSuggestion(picked)
                return true
            }
            if (!(e.key === 'Enter' && (e.ctrlKey || e.metaKey))) return false
            e.preventDefault()
            row.actionValueText = valExpr.value
            valExpr.blur()
            return true
        }))
        valExpr.addEventListener('blur', () => {
            row.actionValueText = valExpr.value
            _rememberExprCaret()
            card.draggable = true
            _exprSuggestMatches = []
            _exprSuggestIndex = -1
            setTimeout(() => {
                valExprSuggest.style.display = 'none'
            }, 120)
            pushRules()
        })

        act.append(out, op, valExprWrap)
        refreshAct()
        _autoSizeExprField()

        const summary = el('div', 'cp-rule-summary', { text: _ruleSummary(row) })
        const live = el('div', 'cp-rule-live')
        const inChip = el('span', 'cp-rule-live-chip cp-rule-live-chip-in')
        const inKey = el('span', 'cp-rule-live-key')
        inKey.dataset.ruleUid = row._uid
        inKey.dataset.probeKind = 'in'
        inKey.dataset.probeField = 'key'
        const inVal = el('span', 'cp-rule-live-value')
        inVal.dataset.ruleUid = row._uid
        inVal.dataset.probeKind = 'in'
        inVal.dataset.probeField = 'value'
        inChip.append(inKey, inVal)

        const outChip = el('span', 'cp-rule-live-chip cp-rule-live-chip-out')
        const outKey = el('span', 'cp-rule-live-key')
        outKey.dataset.ruleUid = row._uid
        outKey.dataset.probeKind = 'out'
        outKey.dataset.probeField = 'key'
        const outVal = el('span', 'cp-rule-live-value')
        outVal.dataset.ruleUid = row._uid
        outVal.dataset.probeKind = 'out'
        outVal.dataset.probeField = 'value'
        outChip.append(outKey, outVal)

        live.append(inChip, outChip)
        const probeVals = probeStates?.get(row._uid)
        const inProbeKey = probeVals?.inKey || row.actionOutput
        const outProbeKey = probeVals?.outKey || row.actionOutput
        inKey.textContent = `${inProbeKey} in`
        outKey.textContent = `${outProbeKey} out`
        inVal.textContent = _formatProbeNumber(probeVals?.inValue)
        outVal.textContent = _formatProbeNumber(probeVals?.outValue)

        const body = el('div', 'cp-rule-body')
        body.append(cond, act, live, summary)
        if (collapsed) body.style.display = 'none'
        card.append(top, body)
        return card
    }

    function _buildDropSlot(targetIndex, groupName = '', subgroupName = '') {
        const slot = el('div', 'cp-rule-slot')
        const plus = el('button', 'cp-rule-slot-add', { type: 'button', text: '+' })
        plus.title = 'Add rule here'
        plus.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            _insertNewRuleAt(targetIndex, groupName, subgroupName)
        })
        slot.addEventListener('dragover', (e) => {
            e.preventDefault()
            slot.classList.add('cp-rule-slot-active')
        })
        slot.addEventListener('dragleave', () => {
            slot.classList.remove('cp-rule-slot-active')
        })
        slot.addEventListener('drop', (e) => {
            e.preventDefault()
            e.stopPropagation()
            slot.classList.remove('cp-rule-slot-active')
            _moveDraggedTo(targetIndex, groupName, subgroupName)
        })
        slot.appendChild(plus)
        return slot
    }

    function _buildLane(indices, groupName = '', subgroupName = '') {
        const lane = el('div', 'cp-rule-lane')
        const probeStates = _computeRuleProbeStates(rows, _lastProbeInputs)
        if (indices.length === 0) {
            lane.appendChild(_buildDropSlot(rows.length, groupName, subgroupName))
            return lane
        }

        lane.appendChild(_buildDropSlot(indices[0], groupName, subgroupName))
        for (const idx of indices) {
            lane.appendChild(_buildRuleCard(rows[idx], idx, probeStates))
            lane.appendChild(_buildDropSlot(idx + 1, groupName, subgroupName))
        }
        return lane
    }

    function _wireAreaDrop(node, groupName = '', subgroupName = '') {
        node.addEventListener('dragover', (e) => {
            e.preventDefault()
            node.classList.add('cp-rule-dropzone-active')
        })
        node.addEventListener('dragleave', () => {
            node.classList.remove('cp-rule-dropzone-active')
        })
        node.addEventListener('drop', (e) => {
            e.preventDefault()
            e.stopPropagation()
            node.classList.remove('cp-rule-dropzone-active')
            _moveDraggedTo(rows.length, groupName, subgroupName)
        })
    }

    function drawRows() {
        rowsWrap.innerHTML = ''
        const board = el('div', 'cp-rule-context-groups')
        const contextGroups = [
            { key: 'spawnedParticles', label: 'Particles', includes: new Set(['spawnedParticles', 'allParticles']) },
            { key: 'background', label: 'Background' },
            { key: 'camera', label: 'Camera' },
        ]

        if (!contextGroups.some((g) => g.key === _selectedContextGroup)) {
            _selectedContextGroup = 'spawnedParticles'
        }

        for (const group of contextGroups) {
            const indices = []
            for (let i = 0; i < rows.length; i++) {
                const t = _normalizeTarget(rows[i])
                if (group.includes ? group.includes.has(t) : t === group.key) {
                    indices.push(i)
                }
            }

            const gWrap = el('div', `cp-group cp-open cp-rule-context-group${_selectedContextGroup === group.key ? ' cp-rule-group-selected' : ''}`)
            const gHeader = el('div', 'cp-group-header')
            gHeader.addEventListener('click', () => {
                _selectedContextGroup = group.key
                drawRows()
            })
            gHeader.append(
                el('span', 'cp-group-chevron', { text: '▾' }),
                el('span', '', { text: group.label }),
                el('span', 'cp-group-count', { text: String(indices.length) }),
            )
            const gBody = el('div', 'cp-group-body cp-rule-group-body')
            gBody.appendChild(_buildLane(indices, group.key, ''))
            _wireAreaDrop(gBody, group.key, '')
            gWrap.append(gHeader, gBody)
            board.appendChild(gWrap)
        }

        rowsWrap.appendChild(board)
    }

    addBtn.addEventListener('click', () => {
        _insertNewRuleAt(rows.length, _selectedContextGroup, '')
    })

    rulePresetSel.addEventListener('change', () => {
        const full = String(rulePresetSel.value || '')
        if (!full) return
        rulePresetName.value = _rulePresetShortName(full)
    })
    rulePresetSave.addEventListener('click', async () => {
        await _saveSelectedRulePreset()
    })
    rulePresetLoad.addEventListener('click', async () => {
        await _loadSingleRulePreset(String(rulePresetSel.value || ''))
    })
    rulePresetDel.addEventListener('click', async () => {
        const full = String(rulePresetSel.value || '')
        if (!full) return
        const short = _rulePresetShortName(full)
        if (!confirm(`Delete single-rule preset "${short}"?`)) return
        await deletePreset(full)
        await _refreshRulePresets()
        rulePresetName.value = ''
    })

    const deleteAbortPrev = window.__seesoundRuleDeleteAbort
    if (deleteAbortPrev && typeof deleteAbortPrev.abort === 'function') deleteAbortPrev.abort()
    const deleteAbort = new AbortController()
    window.__seesoundRuleDeleteAbort = deleteAbort
    document.addEventListener('keydown', (e) => {
        if (e.defaultPrevented) return
        if (!(e.key === 'Delete' || e.key === 'Backspace')) return
        if (_isTypingTarget(e.target)) return
        if (!_deleteSelected()) return
        e.preventDefault()
        e.stopPropagation()
    }, { signal: deleteAbort.signal })

    _ruleBuilderApi = {
        serialize: () => rows.map((r, i) => _rowToRule(r, i)),
        addRow: (initialRule) => {
            rows.push(_ruleToRow(initialRule || _defaultRule(rows.length), rows.length))
            pushRules()
        },
        replaceFromRuleBlocks: (blocks) => {
            rows = (Array.isArray(blocks) ? blocks : []).map(_ruleToRow)
            _manualGroups.clear()
            _groupOrder.length = 0
            _collapsedGroups.clear()
            _collapsedSubgroups.clear()
            _collapsedRuleUids.clear()
            _selectedRuleUids.clear()
            _selectedGroupName = ''
            _selectedSubgroup = null
            _lastSelectedIndex = -1
            _dragRowIndex = -1
            _dragSelectionUids = []
            _dragGroupName = ''
            _syncManualGroupsFromRows()
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
    window.addEventListener('seesound:calculated-rule-inputs', (e) => {
        _setCalculatedRuleInputs(e?.detail?.calculatedInputs)
        _ruleBuilderApi?.replaceFromRuleBlocks(Array.isArray(params.ruleBlocks) ? params.ruleBlocks : [])
    })
    window.addEventListener('seesound:rule-probe', (e) => {
        _lastProbeInputs = e?.detail?.inputs || Object.create(null)
        const probeStates = _computeRuleProbeStates(rows, _lastProbeInputs)
        const probes = rowsWrap.querySelectorAll('[data-rule-uid][data-probe-field]')
        for (const node of probes) {
            const uid = node.getAttribute('data-rule-uid')
            const kind = node.getAttribute('data-probe-kind')
            const field = node.getAttribute('data-probe-field')
            const vals = probeStates.get(uid)
            if (!vals) continue
            if (field === 'key') {
                node.textContent = kind === 'out' ? `${vals.outKey} out` : `${vals.inKey} in`
                continue
            }
            node.textContent = kind === 'out'
                ? _formatProbeNumber(vals.outValue)
                : _formatProbeNumber(vals.inValue)
        }
    })
    _refreshRulePresets()
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

    const PANEL_WIDTH_KEY = 'seesound_settings_panel_width_v1'

    function clampPanelWidth(px) {
        const minW = 220
        const maxW = Math.max(minW, Math.floor(window.innerWidth * 0.7))
        return Math.max(minW, Math.min(maxW, Math.floor(Number(px) || minW)))
    }

    let expandedWidth = (() => {
        try {
            const saved = Number(localStorage.getItem(PANEL_WIDTH_KEY))
            if (Number.isFinite(saved) && saved > 0) return clampPanelWidth(saved)
        } catch { /* no-op */ }
        return clampPanelWidth(container.getBoundingClientRect().width || 280)
    })()

    function _applyPanelWidth(widthPx, isCollapsed = false) {
        const safe = clampPanelWidth(widthPx)
        const effective = isCollapsed ? 28 : safe
        document.documentElement.style.setProperty('--panel-width', `${effective}px`)
        window.dispatchEvent(new CustomEvent('seesound:panel-width', {
            detail: {
                width: effective,
                expandedWidth: safe,
                collapsed: !!isCollapsed,
            },
        }))
    }

    container.style.width = `${expandedWidth}px`
    _applyPanelWidth(expandedWidth, false)

    // ── Sidebar header (title + collapse + reset)
    const header = el('div', 'cp-header')
    const resizeHandle = el('div', 'cp-resize-handle', { title: 'Drag to resize settings' })
    const collapseBtn = el('button', 'cp-collapse-btn', { text: '»', title: 'Collapse panel' })
    const title = el('span', 'cp-title', { text: 'Parameters' })
    const resetBtn = el('button', 'cp-reset-btn', { text: '↺', title: 'Reset all to factory defaults' })
    header.append(title, resetBtn, collapseBtn)

    // ── Scrollable body
    const body = el('div', 'cp-body')
    body.appendChild(buildPresetBar())
    body.appendChild(buildCanvasSizeBar())

    for (let i = 0; i < PARAM_GROUPS.length; i++) {
        const g = PARAM_GROUPS[i]
        const groupParams = PARAMS.filter(
            p => p.group === g.id &&
                p.key !== 'canvasWidth' &&
                p.key !== 'canvasHeight' &&
                p.key !== 'canvasScale' &&
                p.key !== 'defaultBackgroundHue' &&
                p.key !== 'defaultBackgroundSaturation' &&
                p.key !== 'defaultBackgroundLightness'
        )
        if (groupParams.length === 0) continue
        body.appendChild(buildGroup(g, groupParams, i < 3))
    }

    initRuleBuilder(body)

    container.append(resizeHandle, header, body)

    // ── Collapse / expand sidebar
    let collapsed = false
    collapseBtn.addEventListener('click', () => {
        collapsed = !collapsed
        container.classList.toggle('cp-collapsed', collapsed)
        if (collapsed) {
            expandedWidth = clampPanelWidth(container.getBoundingClientRect().width || expandedWidth)
            container.style.width = '28px'
            _applyPanelWidth(expandedWidth, true)
        } else {
            container.style.width = `${expandedWidth}px`
            _applyPanelWidth(expandedWidth, false)
        }
        collapseBtn.textContent = collapsed ? '«' : '»'
        title.style.display = collapsed ? 'none' : ''
        resetBtn.style.display = collapsed ? 'none' : ''
        body.style.display = collapsed ? 'none' : ''
    })

    const resizeAbortPrev = window.__seesoundPanelResizeAbort
    if (resizeAbortPrev && typeof resizeAbortPrev.abort === 'function') resizeAbortPrev.abort()
    const resizeAbort = new AbortController()
    window.__seesoundPanelResizeAbort = resizeAbort

    let dragState = null
    resizeHandle.addEventListener('mousedown', (e) => {
        if (collapsed) return
        dragState = {
            startX: e.clientX,
            startWidth: container.getBoundingClientRect().width,
        }
        e.preventDefault()
    }, { signal: resizeAbort.signal })

    window.addEventListener('mousemove', (e) => {
        if (!dragState || collapsed) return
        const dx = dragState.startX - e.clientX
        const nextW = clampPanelWidth(dragState.startWidth + dx)
        expandedWidth = nextW
        container.style.width = `${nextW}px`
        _applyPanelWidth(nextW, false)
    }, { signal: resizeAbort.signal })

    window.addEventListener('mouseup', () => {
        if (!dragState) return
        dragState = null
        try { localStorage.setItem(PANEL_WIDTH_KEY, String(expandedWidth)) } catch { /* no-op */ }
    }, { signal: resizeAbort.signal })

    window.addEventListener('resize', () => {
        if (collapsed) return
        expandedWidth = clampPanelWidth(expandedWidth)
        container.style.width = `${expandedWidth}px`
        _applyPanelWidth(expandedWidth, false)
    }, { signal: resizeAbort.signal })

    // ── Reset all params
    resetBtn.addEventListener('click', () => {
        if (!confirm('Reset all parameters to factory defaults?')) return
        resetToDefaults()
        for (const p of PARAMS) _rowSyncMap.get(p.key)?.(params[p.key])
    })

    // Keep controls in sync when params are changed outside direct row handlers
    // (preset load, project load, runtime normalization).
    subscribe((_, key) => {
        if (key === 'ruleBlocks') return
        if (key === '*' || key === 'disabled') {
            for (const p of PARAMS) _rowSyncMap.get(p.key)?.(params[p.key])
            return
        }
        _rowSyncMap.get(key)?.(params[key])
    })
}
