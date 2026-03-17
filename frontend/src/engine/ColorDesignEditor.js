/**
 * SEESOUND — ColorDesignEditor.js
 * ════════════════════════════════════════════════════════════════════════════
 * Standalone popup — "Color Design" spreadsheet.
 *
 *   Column 1  │  Luma (0–255 target perceptual luminance) + mini slider
 *   Column 2  │  RGB Input   + colour picker + hex field
 *   Column 3  │  RGB Output  (computed live) + colour picker + hex field
 *
 * Each row recomputes Column 3 = matchLuminance(inputRGB, luma) instantly
 * whenever any Column 1 or Column 2 value changes — like an Excel formula.
 *
 * Self-contained: injects its own <style> tag on first open, no external
 * dependencies.
 *
 * Usage
 * ─────
 *   import { openColorDesignEditor } from './ColorDesignEditor.js'
 *   openColorDesignEditor()
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  CSS INJECTION
// ─────────────────────────────────────────────────────────────────────────────

const _CSS_ID = 'cde-styles'

function _injectStyles() {
    if (document.getElementById(_CSS_ID)) return
    const style = document.createElement('style')
    style.id = _CSS_ID
    style.textContent = `
/* ── Color Design Editor — overlay ───────────────────────────────────────── */
.cde-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(5, 10, 8, 0.82);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
}

.cde-popup {
    background: #0d1410;
    border: 1px solid #4f7562;
    border-radius: 10px;
    width: min(880px, 96vw);
    max-height: 88vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.72);
    overflow: hidden;
    color: #e2f0eb;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 0.78rem;
}

/* ── Header ── */
.cde-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 1rem;
    border-bottom: 1px solid #4f7562;
    flex-shrink: 0;
    background: #0b1410;
}

.cde-header-title {
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #b9a79b;
    flex: 1;
}

.cde-close-btn {
    background: none;
    border: 1px solid #4f7562;
    color: #b9a79b;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0;
    line-height: 1;
    transition: color 0.15s, border-color 0.15s;
}
.cde-close-btn:hover { color: #e2f0eb; border-color: #b9a79b; }

/* ── Scrollable table area ── */
.cde-table-wrap {
    overflow-y: auto;
    flex: 1;
    padding: 0.4rem 0.6rem 0.6rem;
}
.cde-table-wrap::-webkit-scrollbar { width: 5px; }
.cde-table-wrap::-webkit-scrollbar-track { background: transparent; }
.cde-table-wrap::-webkit-scrollbar-thumb { background: #4f7562; border-radius: 3px; }

/* ── Table ── */
.cde-table {
    width: 100%;
    border-collapse: collapse;
}

.cde-table thead th {
    padding: 0.3rem 0.5rem 0.45rem;
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #b9a79b;
    border-bottom: 1px solid #4f7562;
    text-align: center;
    white-space: nowrap;
}

.cde-table thead .cde-th-luma   { width: 110px; }
.cde-table thead .cde-th-rgb    { min-width: 280px; }
.cde-table thead .cde-th-del    { width: 28px; }

.cde-table tbody tr {
    border-bottom: 1px solid rgba(79, 117, 98, 0.22);
    transition: background 0.1s;
}
.cde-table tbody tr:last-child { border-bottom: none; }
.cde-table tbody tr:hover { background: rgba(79, 117, 98, 0.06); }

.cde-table tbody td {
    padding: 0.4rem 0.45rem;
    vertical-align: middle;
}

/* ── Luma column ── */
.cde-td-luma { text-align: center; }

.cde-luma-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.cde-luma-input {
    width: 66px;
    background: #111a16;
    border: 1px solid #4f7562;
    border-radius: 4px;
    color: #e2f0eb;
    font-size: 0.82rem;
    text-align: center;
    padding: 3px 4px;
    outline: none;
}
.cde-luma-input:focus { border-color: #d2910a; box-shadow: 0 0 0 2px rgba(210,145,10,0.15); }

.cde-luma-slider {
    width: 66px;
    accent-color: #d2910a;
    cursor: pointer;
    height: 14px;
}

/* ── RGB input / output cells ── */
.cde-td-rgb { vertical-align: middle; }

.cde-rgb-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
}

/* Swatch (coloured square acting as color-picker trigger) */
.cde-swatch {
    width: 32px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid #4f7562;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.15s;
}
.cde-swatch:hover { border-color: #b9a79b; }

.cde-swatch input[type=color] {
    position: absolute;
    inset: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    opacity: 0;
    cursor: pointer;
    border: none;
    padding: 0;
}

/* R / G / B number inputs */
.cde-rgb-nums {
    display: flex;
    gap: 3px;
}

.cde-num-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
}

.cde-rgb-label {
    font-size: 0.58rem;
    color: #7a8a83;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.cde-rgb-num {
    width: 44px;
    background: #111a16;
    border: 1px solid #4f7562;
    border-radius: 4px;
    color: #e2f0eb;
    font-size: 0.76rem;
    text-align: center;
    padding: 3px 2px;
    outline: none;
}
.cde-rgb-num:focus { border-color: #d2910a; box-shadow: 0 0 0 2px rgba(210,145,10,0.15); }
.cde-rgb-num[readonly] {
    color: #7dd3fc;
    background: #0d1b24;
    border-color: #1e3a4f;
    cursor: default;
}

/* Hex text input */
.cde-hex-input {
    width: 72px;
    background: #111a16;
    border: 1px solid #4f7562;
    border-radius: 4px;
    color: #e2f0eb;
    font-size: 0.73rem;
    padding: 4px 5px;
    outline: none;
    font-family: 'Consolas', monospace;
    letter-spacing: 0.04em;
}
.cde-hex-input:focus { border-color: #d2910a; box-shadow: 0 0 0 2px rgba(210,145,10,0.15); }
.cde-hex-input[readonly] {
    color: #7dd3fc;
    background: #0d1b24;
    border-color: #1e3a4f;
    cursor: copy;
    title: 'Click to copy';
}
.cde-hex-input[readonly]:hover { border-color: #4a88a8; }

/* ── Delete button ── */
.cde-td-del { text-align: center; }

.cde-rm-btn {
    background: none;
    border: 1px solid rgba(212, 85, 6, 0.3);
    color: rgba(212, 85, 6, 0.55);
    border-radius: 4px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    font-size: 0.72rem;
    padding: 0;
    line-height: 1;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
}
.cde-rm-btn:hover { color: #e2f0eb; border-color: #d45506; background: rgba(212, 85, 6, 0.18); }

/* ── Footer ── */
.cde-footer {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0.75rem;
    border-top: 1px solid #4f7562;
    flex-shrink: 0;
    background: #0b1410;
}

.cde-add-btn {
    background: rgba(210, 145, 10, 0.1);
    border: 1px solid rgba(210, 145, 10, 0.35);
    color: #d2910a;
    border-radius: 5px;
    padding: 4px 14px;
    font-size: 0.72rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
}
.cde-add-btn:hover { background: rgba(210, 145, 10, 0.22); border-color: #d2910a; }

.cde-footer-note {
    font-size: 0.64rem;
    color: #7a8a83;
    margin-left: auto;
    white-space: nowrap;
}

/* ── Arrow between columns ── */
.cde-td-arrow {
    text-align: center;
    color: #4f7562;
    font-size: 1rem;
    padding: 0 2px;
    width: 20px;
}
`
    document.head.appendChild(style)
}

// ─────────────────────────────────────────────────────────────────────────────
// § 2  COLOUR MATH
// ─────────────────────────────────────────────────────────────────────────────

function _clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)) }

function _rgbToHex(r, g, b) {
    const h = (n) => Math.round(_clamp(n, 0, 255)).toString(16).padStart(2, '0')
    return '#' + h(r) + h(g) + h(b)
}

function _hexToRgb(hex) {
    hex = hex.trim()
    if (!hex.startsWith('#')) hex = '#' + hex
    const m = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex)
    return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [128, 128, 128]
}

/**
 * Recolour [r, g, b] to match targetLuma using BT.601 perceptual luminance.
 * Preserves hue; desaturates toward target grey if clamping would be needed.
 *
 * @param  {number} r           0–255
 * @param  {number} g           0–255
 * @param  {number} b           0–255
 * @param  {number} targetLuma  0–255
 * @returns {[number, number, number]}
 */
function _matchLuminance(r, g, b, targetLuma) {
    const currentLuma = 0.299 * r + 0.587 * g + 0.114 * b
    if (currentLuma === 0) {
        const v = Math.round(targetLuma)
        return [v, v, v]
    }
    const ratio = targetLuma / currentLuma
    let rS = r * ratio, gS = g * ratio, bS = b * ratio
    const maxCh = Math.max(rS, gS, bS)
    if (maxCh > 255) {
        const cr = (255 - targetLuma) / (maxCh - targetLuma)
        rS = targetLuma + cr * (rS - targetLuma)
        gS = targetLuma + cr * (gS - targetLuma)
        bS = targetLuma + cr * (bS - targetLuma)
    }
    return [
        Math.max(0, Math.round(rS)),
        Math.max(0, Math.round(gS)),
        Math.max(0, Math.round(bS)),
    ]
}

// ─────────────────────────────────────────────────────────────────────────────
// § 3  ROW STATE
// ─────────────────────────────────────────────────────────────────────────────

let _rowCounter = 0

function _makeRowData(luma = 128, r = 200, g = 100, b = 50) {
    return { id: ++_rowCounter, luma, r, g, b }
}

// ─────────────────────────────────────────────────────────────────────────────
// § 4  DOM HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Create a colour-picker swatch button that wraps a native <input type=color>. */
function _makeSwatch(hexColor, onPick) {
    const div = document.createElement('div')
    div.className = 'cde-swatch'
    div.style.background = hexColor

    const picker = document.createElement('input')
    picker.type = 'color'
    picker.value = hexColor

    picker.addEventListener('input', () => {
        div.style.background = picker.value
        onPick(picker.value)
    })

    div.appendChild(picker)
    return { swatch: div, picker }
}

/** Create a number input for an RGB channel. */
function _makeNumInput(value, readOnly, onChange) {
    const inp = document.createElement('input')
    inp.type = 'number'
    inp.className = 'cde-rgb-num'
    inp.min = 0; inp.max = 255; inp.step = 1
    inp.value = Math.round(value)
    if (readOnly) {
        inp.readOnly = true
    } else if (onChange) {
        inp.addEventListener('input', onChange)
    }
    return inp
}

/** Wrap a label string + input element into a column flex container. */
function _labeledCol(label, input) {
    const col = document.createElement('div')
    col.className = 'cde-num-col'
    const lbl = document.createElement('div')
    lbl.className = 'cde-rgb-label'
    lbl.textContent = label
    col.append(lbl, input)
    return col
}

// ─────────────────────────────────────────────────────────────────────────────
// § 5  TABLE ROW BUILDER
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build one <tr> for the spreadsheet.
 *
 * @param {object}   rowData  { id, luma, r, g, b }
 * @param {Function} onDelete Called with rowData.id when the ✕ button is clicked
 */
function _buildTableRow(rowData, onDelete) {
    const tr = document.createElement('tr')
    tr.dataset.rowId = rowData.id

    // ── Live recompute — called whenever anything in the row changes ─────────
    function recompute() {
        const luma = _clamp(parseFloat(lumaNum.value) || 0, 0, 255)
        const r = _clamp(parseInt(rIn.value) || 0, 0, 255)
        const g = _clamp(parseInt(gIn.value) || 0, 0, 255)
        const b = _clamp(parseInt(bIn.value) || 0, 0, 255)

        // Sync slider ↔ luma number
        lumaSlider.value = luma

        // Recolour input swatch & hex
        const hexIn = _rgbToHex(r, g, b)
        inSwatch.swatch.style.background = hexIn
        inSwatch.picker.value = hexIn
        hexIn_.value = hexIn

        // Compute output
        const [ro, go, bo] = _matchLuminance(r, g, b, luma)
        const hexOut = _rgbToHex(ro, go, bo)

        rOut.value = ro; gOut.value = go; bOut.value = bo
        outSwatch.swatch.style.background = hexOut
        outSwatch.picker.value = hexOut
        hexOut_.value = hexOut

        // Persist in rowData
        rowData.luma = luma
        rowData.r = r; rowData.g = g; rowData.b = b
    }

    // ─── Column 1 : Luma ─────────────────────────────────────────────────────
    const tdLuma = document.createElement('td')
    tdLuma.className = 'cde-td-luma'

    const lumaWrap = document.createElement('div')
    lumaWrap.className = 'cde-luma-wrap'

    const lumaNum = document.createElement('input')
    lumaNum.type = 'number'
    lumaNum.className = 'cde-luma-input'
    lumaNum.min = 0; lumaNum.max = 255; lumaNum.step = 1
    lumaNum.value = rowData.luma
    lumaNum.title = 'Target luminance (BT.601) — 0 = black, 255 = white'

    const lumaSlider = document.createElement('input')
    lumaSlider.type = 'range'
    lumaSlider.className = 'cde-luma-slider'
    lumaSlider.min = 0; lumaSlider.max = 255; lumaSlider.step = 1
    lumaSlider.value = rowData.luma

    lumaNum.addEventListener('input', () => { lumaSlider.value = lumaNum.value; recompute() })
    lumaSlider.addEventListener('input', () => { lumaNum.value = lumaSlider.value; recompute() })

    lumaWrap.append(lumaNum, lumaSlider)
    tdLuma.appendChild(lumaWrap)

    // ─── Column 2 : RGB Input ─────────────────────────────────────────────────
    const tdIn = document.createElement('td')
    tdIn.className = 'cde-td-rgb'

    const initHexIn = _rgbToHex(rowData.r, rowData.g, rowData.b)
    const inSwatch = _makeSwatch(initHexIn, (hex) => {
        const [r, g, b] = _hexToRgb(hex)
        rIn.value = r; gIn.value = g; bIn.value = b
        hexIn_.value = hex
        recompute()
    })

    const rIn = _makeNumInput(rowData.r, false, recompute)
    const gIn = _makeNumInput(rowData.g, false, recompute)
    const bIn = _makeNumInput(rowData.b, false, recompute)

    const numsIn = document.createElement('div')
    numsIn.className = 'cde-rgb-nums'
    numsIn.append(_labeledCol('R', rIn), _labeledCol('G', gIn), _labeledCol('B', bIn))

    const hexIn_ = document.createElement('input')
    hexIn_.type = 'text'
    hexIn_.className = 'cde-hex-input'
    hexIn_.value = initHexIn
    hexIn_.placeholder = '#rrggbb'
    hexIn_.addEventListener('change', () => {
        const raw = hexIn_.value.trim()
        const m = /^#?([0-9a-f]{6})$/i.exec(raw)
        if (m) {
            const hex = '#' + m[1].toLowerCase()
            const [r, g, b] = _hexToRgb(hex)
            rIn.value = r; gIn.value = g; bIn.value = b
            inSwatch.swatch.style.background = hex
            inSwatch.picker.value = hex
            hexIn_.value = hex
            recompute()
        } else {
            hexIn_.value = _rgbToHex(
                _clamp(parseInt(rIn.value) || 0, 0, 255),
                _clamp(parseInt(gIn.value) || 0, 0, 255),
                _clamp(parseInt(bIn.value) || 0, 0, 255)
            )
        }
    })

    const wrapIn = document.createElement('div')
    wrapIn.className = 'cde-rgb-wrap'
    wrapIn.append(inSwatch.swatch, numsIn, hexIn_)
    tdIn.appendChild(wrapIn)

    // ─── Arrow ────────────────────────────────────────────────────────────────
    const tdArrow = document.createElement('td')
    tdArrow.className = 'cde-td-arrow'
    tdArrow.textContent = '→'

    // ─── Column 3 : RGB Output (computed, read-only) ──────────────────────────
    const tdOut = document.createElement('td')
    tdOut.className = 'cde-td-rgb'

    const [initRo, initGo, initBo] = _matchLuminance(rowData.r, rowData.g, rowData.b, rowData.luma)
    const initHexOut = _rgbToHex(initRo, initGo, initBo)

    const outSwatch = _makeSwatch(initHexOut, () => { })
    // Output swatch is display-only — disable the hidden picker's interaction
    outSwatch.picker.tabIndex = -1
    outSwatch.picker.style.pointerEvents = 'none'
    outSwatch.swatch.style.cursor = 'default'
    outSwatch.swatch.title = 'Computed output colour (read-only)'

    const rOut = _makeNumInput(initRo, true)
    const gOut = _makeNumInput(initGo, true)
    const bOut = _makeNumInput(initBo, true)

    const numsOut = document.createElement('div')
    numsOut.className = 'cde-rgb-nums'
    numsOut.append(_labeledCol('R', rOut), _labeledCol('G', gOut), _labeledCol('B', bOut))

    const hexOut_ = document.createElement('input')
    hexOut_.type = 'text'
    hexOut_.className = 'cde-hex-input'
    hexOut_.readOnly = true
    hexOut_.value = initHexOut
    hexOut_.title = 'Click to copy hex value'
    hexOut_.addEventListener('click', () => {
        navigator.clipboard?.writeText(hexOut_.value).then(() => {
            const prev = hexOut_.style.background
            hexOut_.style.background = 'rgba(125, 211, 252, 0.15)'
            setTimeout(() => { hexOut_.style.background = prev }, 350)
        }).catch(() => { })
    })

    const wrapOut = document.createElement('div')
    wrapOut.className = 'cde-rgb-wrap'
    wrapOut.append(outSwatch.swatch, numsOut, hexOut_)
    tdOut.appendChild(wrapOut)

    // ─── Delete button ────────────────────────────────────────────────────────
    const tdDel = document.createElement('td')
    tdDel.className = 'cde-td-del'
    const rmBtn = document.createElement('button')
    rmBtn.className = 'cde-rm-btn'
    rmBtn.textContent = '✕'
    rmBtn.title = 'Remove row'
    rmBtn.addEventListener('click', () => { tr.remove(); onDelete?.(rowData.id) })
    tdDel.appendChild(rmBtn)

    tr.append(tdLuma, tdIn, tdArrow, tdOut, tdDel)
    return tr
}

// ─────────────────────────────────────────────────────────────────────────────
// § 6  PUBLIC — open the popup
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Open the Color Design popup.
 * Calling a second time while it is already open is a no-op.
 */
export function openColorDesignEditor() {
    _injectStyles()
    if (document.querySelector('.cde-overlay')) return   // already open

    // Initial rows: three representative luminance levels
    const rows = [
        _makeRowData(51, 200, 100, 50),
        _makeRowData(128, 200, 100, 50),
        _makeRowData(204, 200, 100, 50),
    ]

    // ── Overlay backdrop ─────────────────────────────────────────────────────
    const overlay = document.createElement('div')
    overlay.className = 'cde-overlay'
    overlay.addEventListener('pointerdown', (e) => {
        if (e.target === overlay) close()
    })

    // ── Popup shell ──────────────────────────────────────────────────────────
    const popup = document.createElement('div')
    popup.className = 'cde-popup'

    // ── Header ───────────────────────────────────────────────────────────────
    const header = document.createElement('div')
    header.className = 'cde-header'
    const title = document.createElement('span')
    title.className = 'cde-header-title'
    title.textContent = '⬛ Color Design — Luma Mapper'
    const closeBtn = document.createElement('button')
    closeBtn.className = 'cde-close-btn'
    closeBtn.textContent = '✕'
    closeBtn.title = 'Close (Esc)'
    closeBtn.addEventListener('click', close)
    header.append(title, closeBtn)

    // ── Table ────────────────────────────────────────────────────────────────
    const tableWrap = document.createElement('div')
    tableWrap.className = 'cde-table-wrap'

    const table = document.createElement('table')
    table.className = 'cde-table'

    const thead = document.createElement('thead')
    const headRow = document.createElement('tr')
    const thLuma = document.createElement('th')
    thLuma.className = 'cde-th-luma'
    thLuma.textContent = 'Luma  (0–255)'
    const thIn = document.createElement('th')
    thIn.className = 'cde-th-rgb'
    thIn.textContent = 'RGB Input'
    const thArrow = document.createElement('th')
    thArrow.style.width = '20px'
    const thOut = document.createElement('th')
    thOut.className = 'cde-th-rgb'
    thOut.textContent = 'RGB Output'
    const thDel = document.createElement('th')
    thDel.className = 'cde-th-del'
    headRow.append(thLuma, thIn, thArrow, thOut, thDel)
    thead.appendChild(headRow)
    table.appendChild(thead)

    const tbody = document.createElement('tbody')

    function addRow(rowData) {
        const tr = _buildTableRow(rowData, (id) => {
            const idx = rows.findIndex(r => r.id === id)
            if (idx >= 0) rows.splice(idx, 1)
        })
        tbody.appendChild(tr)
    }

    for (const r of rows) addRow(r)
    table.appendChild(tbody)
    tableWrap.appendChild(table)

    // ── Footer ───────────────────────────────────────────────────────────────
    const footer = document.createElement('div')
    footer.className = 'cde-footer'

    const addBtn = document.createElement('button')
    addBtn.className = 'cde-add-btn'
    addBtn.textContent = '+ Add Row'
    addBtn.addEventListener('click', () => {
        const last = rows[rows.length - 1]
        const newLuma = last ? Math.min(255, Math.round(last.luma + 32)) : 128
        const newRow = _makeRowData(newLuma, last?.r ?? 200, last?.g ?? 100, last?.b ?? 50)
        rows.push(newRow)
        addRow(newRow)
        // Scroll to bottom
        requestAnimationFrame(() => { tableWrap.scrollTop = tableWrap.scrollHeight })
    })

    const note = document.createElement('span')
    note.className = 'cde-footer-note'
    note.textContent = 'Output = Input recoloured to target luma (BT.601).  Click output hex to copy.'

    footer.append(addBtn, note)

    popup.append(header, tableWrap, footer)
    overlay.appendChild(popup)
    document.body.appendChild(overlay)

    // ── Keyboard close ───────────────────────────────────────────────────────
    function close() {
        overlay.remove()
        document.removeEventListener('keydown', onKey)
    }

    function onKey(e) {
        if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
}
