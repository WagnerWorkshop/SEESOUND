/**
 * SEESOUND — ColorDesignEditor.js
 * Palette Manager + Luma design spreadsheet.
 */

import { params, set, subscribe } from './ParamStore.js'
import { matchLuminanceRgb255 } from './color/ColorMath.js'

const _CSS_ID = 'cde-styles-v2'
const _NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

function _injectStyles() {
    if (document.getElementById(_CSS_ID)) return
    const style = document.createElement('style')
    style.id = _CSS_ID
    style.textContent = `
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
    width: min(1200px, 97vw);
    max-height: 92vh;
    border: 1px solid #4f7562;
    border-radius: 10px;
    background: #0d1410;
    box-shadow: 0 8px 48px rgba(0, 0, 0, 0.72);
    color: #e2f0eb;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 12px;
}

.cde-header {
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #4f7562;
    padding: 8px 12px;
    background: #0b1410;
}

.cde-header-title {
    flex: 1;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    color: #b9a79b;
}

.cde-btn,
.cde-input,
.cde-select {
    background: #111a16;
    border: 1px solid #4f7562;
    color: #e2f0eb;
    border-radius: 4px;
    font-size: 12px;
}

.cde-btn {
    cursor: pointer;
    padding: 4px 8px;
}

.cde-btn:hover {
    border-color: #b9a79b;
}

.cde-btn-primary {
    color: #d2910a;
    border-color: rgba(210, 145, 10, 0.4);
    background: rgba(210, 145, 10, 0.12);
}

.cde-btn-danger {
    color: #e67a7a;
    border-color: rgba(212, 85, 6, 0.45);
    background: rgba(212, 85, 6, 0.12);
}

.cde-input,
.cde-select {
    padding: 4px 6px;
    outline: none;
}

.cde-input:focus,
.cde-select:focus {
    border-color: #d2910a;
    box-shadow: 0 0 0 2px rgba(210, 145, 10, 0.15);
}

.cde-main {
    display: grid;
    grid-template-columns: 290px 1fr;
    min-height: 0;
    flex: 1;
}

.cde-sidebar {
    border-right: 1px solid #4f7562;
    padding: 10px;
    overflow: auto;
}

.cde-editor {
    padding: 10px;
    display: flex;
    flex-direction: column;
    min-height: 0;
}

.cde-section-title {
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 10px;
    color: #b9a79b;
    margin-bottom: 6px;
}

.cde-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-bottom: 6px;
}

.cde-row > .cde-input,
.cde-row > .cde-select {
    flex: 1;
    min-width: 0;
}

.cde-list {
    display: grid;
    gap: 4px;
    max-height: 200px;
    overflow: auto;
    margin-bottom: 8px;
}

.cde-list-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 6px;
    border: 1px solid rgba(79, 117, 98, 0.35);
    border-radius: 4px;
    cursor: pointer;
    background: rgba(17, 26, 22, 0.7);
}

.cde-list-item:hover {
    border-color: #b9a79b;
}

.cde-list-item.active {
    border-color: #d2910a;
    background: rgba(210, 145, 10, 0.12);
}

.cde-color-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    flex-shrink: 0;
}

.cde-preview {
    height: 18px;
    border: 1px solid rgba(79, 117, 98, 0.45);
    border-radius: 4px;
    margin-bottom: 10px;
}

.cde-table-wrap {
    overflow: auto;
    border: 1px solid rgba(79, 117, 98, 0.35);
    border-radius: 6px;
    min-height: 0;
    flex: 1;
}

.cde-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 780px;
}

.cde-table th,
.cde-table td {
    border-bottom: 1px solid rgba(79, 117, 98, 0.25);
    padding: 5px 6px;
    text-align: center;
}

.cde-table th {
    position: sticky;
    top: 0;
    background: #0b1410;
    z-index: 1;
    font-size: 10px;
    text-transform: uppercase;
    color: #b9a79b;
    letter-spacing: 0.05em;
}

.cde-table tbody tr:hover {
    background: rgba(79, 117, 98, 0.06);
}

.cde-rgb {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.cde-num {
    width: 52px;
}

.cde-note {
    color: #7a8a83;
    font-size: 11px;
}

.cde-swatch {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    position: relative;
    overflow: hidden;
}

.cde-swatch input[type=color] {
    position: absolute;
    inset: -4px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    opacity: 0;
    border: none;
    cursor: pointer;
}

.cde-footer {
    border-top: 1px solid #4f7562;
    background: #0b1410;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cde-footer .cde-note {
    margin-left: auto;
}

@media (max-width: 960px) {
    .cde-main {
        grid-template-columns: 1fr;
    }
    .cde-sidebar {
        border-right: none;
        border-bottom: 1px solid #4f7562;
    }
}
`
    document.head.appendChild(style)
}

function _clamp(v, lo, hi) {
    return Math.min(hi, Math.max(lo, v))
}

function _toByte(v) {
    const n = Number(v)
    if (!Number.isFinite(n)) return 0
    return Math.round(_clamp(n, 0, 255))
}

function _rgbToHex(r, g, b) {
    const h = (n) => _toByte(n).toString(16).padStart(2, '0')
    return `#${h(r)}${h(g)}${h(b)}`
}

function _hexToRgb(hex) {
    const raw = String(hex || '').trim()
    const m = /^#?([0-9a-f]{6})$/i.exec(raw)
    if (!m) return [128, 128, 128]
    const full = m[1]
    return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)]
}

function _toSlug(text, fallback = 'palette') {
    const cleaned = String(text || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    return cleaned || fallback
}

function _interpolateRgb(c0, c1, t) {
    return [
        _toByte(c0[0] + (c1[0] - c0[0]) * t),
        _toByte(c0[1] + (c1[1] - c0[1]) * t),
        _toByte(c0[2] + (c1[2] - c0[2]) * t),
    ]
}

function _resampleContinuous(colors, sampleCount = 48) {
    const src = Array.isArray(colors) ? colors : []
    if (src.length <= 1) return src.slice(0, 1)
    const count = Math.max(2, Math.floor(sampleCount))
    const out = []
    for (let i = 0; i < count; i++) {
        const t = i / (count - 1)
        const scaled = t * (src.length - 1)
        const left = Math.floor(scaled)
        const right = Math.min(src.length - 1, left + 1)
        const frac = scaled - left
        out.push(_interpolateRgb(src[left], src[right], frac))
    }
    return out
}

function _clonePalette(palette, index = 0) {
    const safe = palette && typeof palette === 'object' ? palette : {}
    const name = (typeof safe.name === 'string' && safe.name.trim()) ? safe.name.trim() : `Palette ${index + 1}`
    const id = (typeof safe.id === 'string' && safe.id.trim()) ? safe.id.trim() : _toSlug(name, `palette-${index + 1}`)
    const type = safe.type === 'continuous' ? 'continuous' : 'discrete'
    const colors = Array.isArray(safe.colors) ? safe.colors.map((c) => {
        if (Array.isArray(c) && c.length >= 3) return [_toByte(c[0]), _toByte(c[1]), _toByte(c[2])]
        if (typeof c === 'string') return _hexToRgb(c)
        if (c && typeof c === 'object') {
            if (Array.isArray(c.rgb) && c.rgb.length >= 3) return [_toByte(c.rgb[0]), _toByte(c.rgb[1]), _toByte(c.rgb[2])]
            if (Number.isFinite(c.r) || Number.isFinite(c.g) || Number.isFinite(c.b)) return [_toByte(c.r), _toByte(c.g), _toByte(c.b)]
        }
        return [128, 128, 128]
    }) : []
    return {
        id,
        name,
        type,
        colors,
    }
}

function _toRowsFromPalette(palette) {
    const colors = Array.isArray(palette?.colors) ? palette.colors : []
    if (colors.length === 0) {
        return [
            { note: 0, luma: 64, input: [220, 60, 40] },
            { note: 1, luma: 128, input: [220, 60, 40] },
            { note: 2, luma: 192, input: [220, 60, 40] },
        ]
    }

    return colors.map((rgb, i) => {
        const r = _toByte(rgb?.[0])
        const g = _toByte(rgb?.[1])
        const b = _toByte(rgb?.[2])
        const luma = Math.round(0.299 * r + 0.587 * g + 0.114 * b)
        return {
            note: i,
            luma,
            input: [r, g, b],
        }
    })
}

function _rowsToPaletteColors(rows) {
    return rows.map((row) => {
        const luma = _toByte(row.luma)
        const [r, g, b] = row.input
        return matchLuminanceRgb255(_toByte(r), _toByte(g), _toByte(b), luma)
    })
}

function _serializePaletteCsv(palette, rows) {
    const header = ['index', 'note', 'luma', 'input_r', 'input_g', 'input_b', 'output_r', 'output_g', 'output_b']
    const lines = [header.join(',')]
    const out = _rowsToPaletteColors(rows)
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i]
        const rgbOut = out[i]
        lines.push([
            i,
            _NOTE_NAMES[i % 12],
            _toByte(row.luma),
            _toByte(row.input[0]),
            _toByte(row.input[1]),
            _toByte(row.input[2]),
            _toByte(rgbOut[0]),
            _toByte(rgbOut[1]),
            _toByte(rgbOut[2]),
        ].join(','))
    }
    return lines.join('\n')
}

function _parsePaletteCsv(text) {
    const source = String(text || '').replace(/\r/g, '\n')
    const lines = source.split('\n').map((l) => l.trim()).filter(Boolean)
    if (lines.length === 0) return []

    const delimiter = (() => {
        const head = lines[0]
        const commas = (head.match(/,/g) || []).length
        const semis = (head.match(/;/g) || []).length
        const tabs = (head.match(/\t/g) || []).length
        if (tabs >= commas && tabs >= semis) return '\t'
        if (semis > commas) return ';'
        return ','
    })()

    const splitLine = (line) => line.split(delimiter).map((v) => v.trim())
    const headCols = splitLine(lines[0]).map((c) => c.toLowerCase())
    const hasHeader = headCols.some((c) => /luma|input_r|output_r|r|red/.test(c))

    const idx = {
        luma: headCols.indexOf('luma'),
        inR: headCols.indexOf('input_r'),
        inG: headCols.indexOf('input_g'),
        inB: headCols.indexOf('input_b'),
        outR: headCols.indexOf('output_r'),
        outG: headCols.indexOf('output_g'),
        outB: headCols.indexOf('output_b'),
        r: headCols.indexOf('r'),
        g: headCols.indexOf('g'),
        b: headCols.indexOf('b'),
    }

    const start = hasHeader ? 1 : 0
    const rows = []
    for (let i = start; i < lines.length; i++) {
        const cols = splitLine(lines[i])
        const nums = cols.map((v) => Number(v))

        let luma = 128
        let r = null
        let g = null
        let b = null

        if (hasHeader) {
            if (idx.luma >= 0 && Number.isFinite(nums[idx.luma])) luma = nums[idx.luma]
            if (idx.inR >= 0 && Number.isFinite(nums[idx.inR])) r = nums[idx.inR]
            if (idx.inG >= 0 && Number.isFinite(nums[idx.inG])) g = nums[idx.inG]
            if (idx.inB >= 0 && Number.isFinite(nums[idx.inB])) b = nums[idx.inB]

            if ((r === null || g === null || b === null) && idx.r >= 0 && idx.g >= 0 && idx.b >= 0) {
                if (Number.isFinite(nums[idx.r]) && Number.isFinite(nums[idx.g]) && Number.isFinite(nums[idx.b])) {
                    r = nums[idx.r]
                    g = nums[idx.g]
                    b = nums[idx.b]
                }
            }
            if ((r === null || g === null || b === null) && idx.outR >= 0 && idx.outG >= 0 && idx.outB >= 0) {
                if (Number.isFinite(nums[idx.outR]) && Number.isFinite(nums[idx.outG]) && Number.isFinite(nums[idx.outB])) {
                    r = nums[idx.outR]
                    g = nums[idx.outG]
                    b = nums[idx.outB]
                }
            }
        } else {
            const finite = nums.filter((n) => Number.isFinite(n))
            if (finite.length >= 4) {
                luma = finite[0]
                r = finite[1]
                g = finite[2]
                b = finite[3]
            } else if (finite.length >= 3) {
                r = finite[0]
                g = finite[1]
                b = finite[2]
                luma = Math.round(0.299 * r + 0.587 * g + 0.114 * b)
            }
        }

        if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) continue
        rows.push({
            note: rows.length,
            luma: _toByte(luma),
            input: [_toByte(r), _toByte(g), _toByte(b)],
        })
    }

    return rows
}

function _downloadText(filename, mimeType, text) {
    const blob = new Blob([text], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
}

function _paletteSummarySwatch(palette) {
    const first = Array.isArray(palette?.colors) && palette.colors.length > 0 ? palette.colors[0] : [128, 128, 128]
    return _rgbToHex(first[0], first[1], first[2])
}

function _buildDefaultPalette(index = 0) {
    const name = `Palette ${index + 1}`
    const id = _toSlug(name, `palette-${index + 1}`)
    return {
        id,
        name,
        type: 'discrete',
        colors: [
            [255, 0, 0], [255, 120, 0], [255, 220, 0], [150, 255, 0], [0, 255, 80], [0, 255, 220],
            [0, 160, 255], [40, 80, 255], [120, 0, 255], [220, 0, 255], [255, 0, 150], [255, 0, 60],
        ],
    }
}

const _TEMPLATE_PALETTES = Object.freeze({
    spectrum: {
        id: 'spectrum',
        name: 'Spectrum',
        type: 'discrete',
        colors: [
            [255, 0, 0], [255, 96, 0], [255, 180, 0], [235, 255, 0], [140, 255, 0], [35, 255, 0],
            [0, 255, 120], [0, 255, 235], [0, 160, 255], [25, 80, 255], [120, 40, 255], [220, 0, 255],
        ],
    },
    scriabin: {
        id: 'scriabin',
        name: 'Scriabin',
        type: 'discrete',
        colors: [
            [220, 20, 40], [160, 0, 200], [245, 235, 70], [160, 180, 170], [50, 90, 220], [130, 0, 170],
            [35, 95, 210], [230, 90, 0], [200, 40, 120], [30, 150, 60], [140, 150, 175], [85, 30, 165],
        ],
    },
    circleOfFifths: {
        id: 'circle-of-fifths',
        name: 'Circle of Fifths',
        type: 'discrete',
        colors: [
            [225, 65, 65], [225, 135, 65], [225, 195, 65], [180, 225, 65], [110, 225, 65], [65, 225, 105],
            [65, 225, 185], [65, 190, 225], [65, 120, 225], [120, 90, 225], [185, 70, 225], [225, 65, 160],
        ],
    },
})

function _rowsFromColors(colors) {
    const source = Array.isArray(colors) ? colors : []
    if (source.length === 0) return _toRowsFromPalette({ colors: [] })
    return source.map((rgb, i) => {
        const r = _toByte(rgb?.[0])
        const g = _toByte(rgb?.[1])
        const b = _toByte(rgb?.[2])
        return {
            note: i,
            luma: Math.round(0.299 * r + 0.587 * g + 0.114 * b),
            input: [r, g, b],
        }
    })
}

function _nextUniquePaletteId(existingPalettes, seedId) {
    const used = new Set((Array.isArray(existingPalettes) ? existingPalettes : []).map((p) => String(p?.id || '').trim()).filter(Boolean))
    const base = _toSlug(seedId || 'palette', 'palette')
    if (!used.has(base)) return base
    let n = 2
    while (used.has(`${base}-${n}`)) n++
    return `${base}-${n}`
}

function _buildTemplatePalette(templateKey, existingPalettes) {
    const seed = _TEMPLATE_PALETTES[templateKey]
    if (!seed) return null
    const clone = _clonePalette(seed, (Array.isArray(existingPalettes) ? existingPalettes.length : 0))
    clone.id = _nextUniquePaletteId(existingPalettes, clone.id)
    if (clone.id !== seed.id) clone.name = `${seed.name} ${clone.id.split('-').slice(-1)[0]}`
    return clone
}

export function openColorDesignEditor() {
    _injectStyles()
    if (document.querySelector('.cde-overlay')) return

    const initialPalettes = (() => {
        const fromState = Array.isArray(params.palettes) ? params.palettes : []
        if (fromState.length > 0) return fromState.map((p, i) => _clonePalette(p, i))
        return [_buildDefaultPalette(0)]
    })()

    const state = {
        palettes: initialPalettes,
        selectedIndex: 0,
        rows: _toRowsFromPalette(initialPalettes[0]),
        dirty: false,
        unsubscribe: null,
    }

    const overlay = document.createElement('div')
    overlay.className = 'cde-overlay'

    const popup = document.createElement('div')
    popup.className = 'cde-popup'

    const header = document.createElement('div')
    header.className = 'cde-header'
    const title = document.createElement('div')
    title.className = 'cde-header-title'
    title.textContent = 'Color Design — Palette Manager'

    const btnSaveAll = document.createElement('button')
    btnSaveAll.className = 'cde-btn cde-btn-primary'
    btnSaveAll.textContent = 'Apply to Engine'

    const btnClose = document.createElement('button')
    btnClose.className = 'cde-btn'
    btnClose.textContent = 'Close'

    header.append(title, btnSaveAll, btnClose)

    const main = document.createElement('div')
    main.className = 'cde-main'

    const sidebar = document.createElement('div')
    sidebar.className = 'cde-sidebar'

    const editor = document.createElement('div')
    editor.className = 'cde-editor'

    const paletteListTitle = document.createElement('div')
    paletteListTitle.className = 'cde-section-title'
    paletteListTitle.textContent = 'Palettes'

    const paletteList = document.createElement('div')
    paletteList.className = 'cde-list'

    const rowPaletteActions = document.createElement('div')
    rowPaletteActions.className = 'cde-row'

    const btnNewPalette = document.createElement('button')
    btnNewPalette.className = 'cde-btn cde-btn-primary'
    btnNewPalette.textContent = '+ New'

    const btnDupPalette = document.createElement('button')
    btnDupPalette.className = 'cde-btn'
    btnDupPalette.textContent = 'Duplicate'

    const btnDelPalette = document.createElement('button')
    btnDelPalette.className = 'cde-btn cde-btn-danger'
    btnDelPalette.textContent = 'Delete'

    rowPaletteActions.append(btnNewPalette, btnDupPalette, btnDelPalette)

    const rowTemplateActions = document.createElement('div')
    rowTemplateActions.className = 'cde-row'

    const selectTemplate = document.createElement('select')
    selectTemplate.className = 'cde-select'
    selectTemplate.innerHTML = [
        '<option value="spectrum">Spectrum</option>',
        '<option value="scriabin">Scriabin</option>',
        '<option value="circleOfFifths">Circle of Fifths</option>',
    ].join('')

    const btnAddTemplate = document.createElement('button')
    btnAddTemplate.className = 'cde-btn'
    btnAddTemplate.textContent = 'Add Template'

    rowTemplateActions.append(selectTemplate, btnAddTemplate)

    const paletteMetaTitle = document.createElement('div')
    paletteMetaTitle.className = 'cde-section-title'
    paletteMetaTitle.textContent = 'Selected Palette'

    const rowName = document.createElement('div')
    rowName.className = 'cde-row'
    const inputName = document.createElement('input')
    inputName.className = 'cde-input'
    inputName.placeholder = 'Palette Name'
    rowName.appendChild(inputName)

    const rowType = document.createElement('div')
    rowType.className = 'cde-row'
    const selectType = document.createElement('select')
    selectType.className = 'cde-select'
    selectType.innerHTML = [
        '<option value="discrete">Discrete (step lookup)</option>',
        '<option value="continuous">Continuous (gradient)</option>',
    ].join('')
    rowType.appendChild(selectType)

    const preview = document.createElement('div')
    preview.className = 'cde-preview'

    const ioTitle = document.createElement('div')
    ioTitle.className = 'cde-section-title'
    ioTitle.textContent = 'Import / Export'

    const rowIoA = document.createElement('div')
    rowIoA.className = 'cde-row'
    const btnImport = document.createElement('button')
    btnImport.className = 'cde-btn'
    btnImport.textContent = 'Import CSV/JSON'
    const btnExportCsv = document.createElement('button')
    btnExportCsv.className = 'cde-btn'
    btnExportCsv.textContent = 'Export CSV'
    const btnExportJson = document.createElement('button')
    btnExportJson.className = 'cde-btn'
    btnExportJson.textContent = 'Export JSON'
    rowIoA.append(btnImport, btnExportCsv, btnExportJson)

    const importInput = document.createElement('input')
    importInput.type = 'file'
    importInput.accept = '.csv,.json,text/csv,application/json'
    importInput.style.display = 'none'

    sidebar.append(
        paletteListTitle,
        paletteList,
        rowPaletteActions,
        rowTemplateActions,
        paletteMetaTitle,
        rowName,
        rowType,
        preview,
        ioTitle,
        rowIoA,
        importInput,
    )

    const tableTitle = document.createElement('div')
    tableTitle.className = 'cde-section-title'
    tableTitle.textContent = 'Color Table Builder'

    const tableControls = document.createElement('div')
    tableControls.className = 'cde-row'

    const btnAddRow = document.createElement('button')
    btnAddRow.className = 'cde-btn cde-btn-primary'
    btnAddRow.textContent = '+ Add Row'

    const btnFill12 = document.createElement('button')
    btnFill12.className = 'cde-btn'
    btnFill12.textContent = 'Fill 12 Notes'

    const btnSortLuma = document.createElement('button')
    btnSortLuma.className = 'cde-btn'
    btnSortLuma.textContent = 'Sort by Luma'

    tableControls.append(btnAddRow, btnFill12, btnSortLuma)

    const tableWrap = document.createElement('div')
    tableWrap.className = 'cde-table-wrap'

    const table = document.createElement('table')
    table.className = 'cde-table'
    table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Note</th>
                <th>Luma</th>
                <th>Input RGB</th>
                <th>Output RGB</th>
                <th>Output Hex</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody></tbody>
    `
    tableWrap.appendChild(table)

    const footer = document.createElement('div')
    footer.className = 'cde-footer'

    const btnUseOutput = document.createElement('button')
    btnUseOutput.className = 'cde-btn cde-btn-primary'
    btnUseOutput.textContent = 'Use Output Colors'

    const btnUseInput = document.createElement('button')
    btnUseInput.className = 'cde-btn'
    btnUseInput.textContent = 'Use Input Colors'

    const footNote = document.createElement('div')
    footNote.className = 'cde-note'
    footNote.textContent = 'Palettes are saved in params.palettes and included in preset JSON save/load.'

    footer.append(btnUseOutput, btnUseInput, footNote)

    editor.append(tableTitle, tableControls, tableWrap, footer)
    main.append(sidebar, editor)
    popup.append(header, main)
    overlay.appendChild(popup)
    document.body.appendChild(overlay)

    function _currentPalette() {
        return state.palettes[state.selectedIndex] || null
    }

    function _syncRowsToPalette(useOutput = true) {
        const palette = _currentPalette()
        if (!palette) return
        const base = useOutput
            ? _rowsToPaletteColors(state.rows)
            : state.rows.map((row) => [_toByte(row.input[0]), _toByte(row.input[1]), _toByte(row.input[2])])

        if (palette.type === 'continuous') {
            const sampleCount = Math.max(24, base.length * 8)
            palette.colors = _resampleContinuous(base, sampleCount)
        } else {
            palette.colors = base
        }
        state.dirty = true
    }

    function _applyToStore() {
        const sanitized = state.palettes.map((p, i) => _clonePalette(p, i))
        set('palettes', sanitized)
        state.dirty = false
    }

    function _setSelected(index) {
        state.selectedIndex = Math.max(0, Math.min(state.palettes.length - 1, index))
        const palette = _currentPalette()
        state.rows = _toRowsFromPalette(palette)
        _renderAll()
    }

    function _convertRowsForMode(nextType) {
        const currentPalette = _currentPalette()
        const currentType = currentPalette?.type === 'continuous' ? 'continuous' : 'discrete'
        if (currentType === nextType) return

        const base = _rowsToPaletteColors(state.rows)
        if (nextType === 'continuous') {
            const sampleCount = Math.max(24, Math.min(96, Math.max(2, base.length) * 4))
            state.rows = _rowsFromColors(_resampleContinuous(base, sampleCount))
        } else {
            state.rows = _rowsFromColors(_resampleContinuous(base, 12))
        }
    }

    function _renderPaletteList() {
        paletteList.innerHTML = ''
        state.palettes.forEach((palette, i) => {
            const item = document.createElement('div')
            item.className = `cde-list-item${i === state.selectedIndex ? ' active' : ''}`
            const dot = document.createElement('div')
            dot.className = 'cde-color-dot'
            dot.style.background = _paletteSummarySwatch(palette)
            const txt = document.createElement('div')
            txt.style.flex = '1'
            txt.style.minWidth = '0'
            txt.innerHTML = `<div>${palette.name || palette.id}</div><div class="cde-note">${palette.id} · ${palette.type} · ${palette.colors.length} colors</div>`
            item.append(dot, txt)
            item.addEventListener('click', () => {
                _syncRowsToPalette(true)
                _setSelected(i)
            })
            paletteList.appendChild(item)
        })
    }

    function _renderPaletteMeta() {
        const palette = _currentPalette()
        if (!palette) return
        inputName.value = palette.name || ''
        selectType.value = palette.type || 'discrete'

        const colors = Array.isArray(palette.colors) ? palette.colors : []
        if (colors.length === 0) {
            preview.style.background = '#2a2a2a'
            return
        }

        if (palette.type === 'continuous') {
            const stops = colors
                .map((c, idx) => `${_rgbToHex(c[0], c[1], c[2])} ${(idx / Math.max(1, colors.length - 1)) * 100}%`)
                .join(', ')
            preview.style.background = `linear-gradient(90deg, ${stops})`
        } else {
            const step = 100 / colors.length
            const parts = []
            for (let i = 0; i < colors.length; i++) {
                const left = (i * step).toFixed(3)
                const right = ((i + 1) * step).toFixed(3)
                const hex = _rgbToHex(colors[i][0], colors[i][1], colors[i][2])
                parts.push(`${hex} ${left}%`, `${hex} ${right}%`)
            }
            preview.style.background = `linear-gradient(90deg, ${parts.join(', ')})`
        }
    }

    function _swatchPicker(rgb, onChange) {
        const sw = document.createElement('div')
        sw.className = 'cde-swatch'
        sw.style.background = _rgbToHex(rgb[0], rgb[1], rgb[2])
        const picker = document.createElement('input')
        picker.type = 'color'
        picker.value = _rgbToHex(rgb[0], rgb[1], rgb[2])
        picker.addEventListener('input', () => {
            const next = _hexToRgb(picker.value)
            sw.style.background = picker.value
            onChange(next)
        })
        sw.appendChild(picker)
        return sw
    }

    function _numberInput(value, onChange, min = 0, max = 255) {
        const inp = document.createElement('input')
        inp.className = 'cde-input cde-num'
        inp.type = 'number'
        inp.min = String(min)
        inp.max = String(max)
        inp.step = '1'
        inp.value = String(_toByte(value))
        inp.addEventListener('change', () => {
            onChange(_toByte(inp.value))
        })
        return inp
    }

    function _renderRows() {
        const tbody = table.querySelector('tbody')
        tbody.innerHTML = ''
        const outputRows = _rowsToPaletteColors(state.rows)

        state.rows.forEach((row, i) => {
            const tr = document.createElement('tr')
            const tdIndex = document.createElement('td')
            tdIndex.textContent = String(i + 1)

            const tdNote = document.createElement('td')
            tdNote.textContent = _NOTE_NAMES[i % 12]

            const tdLuma = document.createElement('td')
            const lumaInput = _numberInput(row.luma, (next) => {
                row.luma = next
                state.dirty = true
                _renderRows()
            })
            tdLuma.appendChild(lumaInput)

            const tdInput = document.createElement('td')
            const inputWrap = document.createElement('div')
            inputWrap.className = 'cde-rgb'
            const inSwatch = _swatchPicker(row.input, (next) => {
                row.input = [_toByte(next[0]), _toByte(next[1]), _toByte(next[2])]
                state.dirty = true
                _renderRows()
            })
            const inR = _numberInput(row.input[0], (v) => { row.input[0] = v; state.dirty = true; _renderRows() })
            const inG = _numberInput(row.input[1], (v) => { row.input[1] = v; state.dirty = true; _renderRows() })
            const inB = _numberInput(row.input[2], (v) => { row.input[2] = v; state.dirty = true; _renderRows() })
            inputWrap.append(inSwatch, inR, inG, inB)
            tdInput.appendChild(inputWrap)

            const out = outputRows[i]
            const tdOutput = document.createElement('td')
            const outWrap = document.createElement('div')
            outWrap.className = 'cde-rgb'
            const outSw = document.createElement('div')
            outSw.className = 'cde-swatch'
            outSw.style.background = _rgbToHex(out[0], out[1], out[2])
            const outR = _numberInput(out[0], () => { }, 0, 255)
            const outG = _numberInput(out[1], () => { }, 0, 255)
            const outB = _numberInput(out[2], () => { }, 0, 255)
            outR.readOnly = true
            outG.readOnly = true
            outB.readOnly = true
            outR.style.opacity = '0.8'
            outG.style.opacity = '0.8'
            outB.style.opacity = '0.8'
            outWrap.append(outSw, outR, outG, outB)
            tdOutput.appendChild(outWrap)

            const tdHex = document.createElement('td')
            const hex = _rgbToHex(out[0], out[1], out[2])
            const hexInput = document.createElement('input')
            hexInput.className = 'cde-input'
            hexInput.readOnly = true
            hexInput.value = hex
            hexInput.addEventListener('click', () => {
                navigator.clipboard?.writeText(hex).catch(() => { })
            })
            tdHex.appendChild(hexInput)

            const tdDel = document.createElement('td')
            const delBtn = document.createElement('button')
            delBtn.className = 'cde-btn cde-btn-danger'
            delBtn.textContent = '✕'
            delBtn.addEventListener('click', () => {
                state.rows.splice(i, 1)
                if (state.rows.length === 0) state.rows.push({ note: 0, luma: 128, input: [128, 128, 128] })
                state.dirty = true
                _renderRows()
            })
            tdDel.appendChild(delBtn)

            tr.append(tdIndex, tdNote, tdLuma, tdInput, tdOutput, tdHex, tdDel)
            tbody.appendChild(tr)
        })
    }

    function _renderAll() {
        _renderPaletteList()
        _renderPaletteMeta()
        _renderRows()
    }

    inputName.addEventListener('input', () => {
        const palette = _currentPalette()
        if (!palette) return
        const nextName = inputName.value.trim() || `Palette ${state.selectedIndex + 1}`
        palette.name = nextName
        palette.id = _toSlug(nextName, `palette-${state.selectedIndex + 1}`)
        state.dirty = true
        _renderAll()
    })

    selectType.addEventListener('change', () => {
        const palette = _currentPalette()
        if (!palette) return
        const nextType = selectType.value === 'continuous' ? 'continuous' : 'discrete'
        _convertRowsForMode(nextType)
        palette.type = nextType
        state.dirty = true
        _renderAll()
    })

    btnAddTemplate.addEventListener('click', () => {
        _syncRowsToPalette(true)
        const template = _buildTemplatePalette(selectTemplate.value, state.palettes)
        if (!template) return
        state.palettes.push(template)
        _setSelected(state.palettes.length - 1)
        state.dirty = true
    })

    btnNewPalette.addEventListener('click', () => {
        _syncRowsToPalette(true)
        const next = _buildDefaultPalette(state.palettes.length)
        state.palettes.push(next)
        _setSelected(state.palettes.length - 1)
        state.dirty = true
    })

    btnDupPalette.addEventListener('click', () => {
        const palette = _currentPalette()
        if (!palette) return
        _syncRowsToPalette(true)
        const copy = _clonePalette(palette, state.palettes.length)
        copy.id = `${copy.id}-copy`
        copy.name = `${copy.name} copy`
        state.palettes.push(copy)
        _setSelected(state.palettes.length - 1)
        state.dirty = true
    })

    btnDelPalette.addEventListener('click', () => {
        if (state.palettes.length <= 1) {
            alert('At least one palette must remain.')
            return
        }
        state.palettes.splice(state.selectedIndex, 1)
        _setSelected(Math.max(0, state.selectedIndex - 1))
        state.dirty = true
    })

    btnAddRow.addEventListener('click', () => {
        const last = state.rows[state.rows.length - 1]
        state.rows.push({
            note: state.rows.length,
            luma: last ? _toByte(last.luma) : 128,
            input: last ? [...last.input] : [200, 100, 50],
        })
        state.dirty = true
        _renderRows()
    })

    btnFill12.addEventListener('click', () => {
        const palette = _currentPalette()
        if (!palette) return
        const src = Array.isArray(palette.colors) && palette.colors.length > 0 ? palette.colors : _buildDefaultPalette(0).colors
        state.rows = []
        for (let i = 0; i < 12; i++) {
            const c = src[i % src.length]
            const luma = Math.round(0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2])
            state.rows.push({
                note: i,
                luma,
                input: [_toByte(c[0]), _toByte(c[1]), _toByte(c[2])],
            })
        }
        state.dirty = true
        _renderRows()
    })

    btnSortLuma.addEventListener('click', () => {
        state.rows.sort((a, b) => Number(a.luma) - Number(b.luma))
        state.dirty = true
        _renderRows()
    })

    btnUseOutput.addEventListener('click', () => {
        _syncRowsToPalette(true)
        _renderPaletteList()
    })

    btnUseInput.addEventListener('click', () => {
        _syncRowsToPalette(false)
        _renderPaletteList()
    })

    btnSaveAll.addEventListener('click', () => {
        _syncRowsToPalette(true)
        _applyToStore()
    })

    btnExportCsv.addEventListener('click', () => {
        const palette = _currentPalette()
        if (!palette) return
        const safeId = (palette.id || 'palette').replace(/[^A-Za-z0-9_-]/g, '_')
        const csv = _serializePaletteCsv(palette, state.rows)
        _downloadText(`${safeId}.csv`, 'text/csv;charset=utf-8', csv)
    })

    btnExportJson.addEventListener('click', () => {
        const palette = _currentPalette()
        if (!palette) return
        _syncRowsToPalette(true)
        const safeId = (palette.id || 'palette').replace(/[^A-Za-z0-9_-]/g, '_')
        const json = JSON.stringify(palette, null, 2)
        _downloadText(`${safeId}.json`, 'application/json;charset=utf-8', json)
    })

    btnImport.addEventListener('click', () => importInput.click())

    importInput.addEventListener('change', async (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        try {
            const text = await file.text()
            const lower = file.name.toLowerCase()
            if (lower.endsWith('.json')) {
                const parsed = JSON.parse(text)
                if (Array.isArray(parsed)) {
                    const incoming = parsed.map((p, i) => _clonePalette(p, i))
                    if (incoming.length > 0) {
                        _syncRowsToPalette(true)
                        state.palettes = incoming
                        _setSelected(0)
                        state.dirty = true
                    }
                } else {
                    const incoming = _clonePalette(parsed, state.palettes.length)
                    _syncRowsToPalette(true)
                    state.palettes.push(incoming)
                    _setSelected(state.palettes.length - 1)
                    state.dirty = true
                }
            } else {
                const rows = _parsePaletteCsv(text)
                if (rows.length === 0) {
                    alert('No valid palette rows found in CSV.')
                } else {
                    state.rows = rows
                    _syncRowsToPalette(true)
                    state.dirty = true
                    _renderAll()
                }
            }
        } catch (err) {
            console.warn('[ColorDesignEditor] import failed:', err)
            alert('Failed to import palette file.')
        } finally {
            importInput.value = ''
        }
    })

    function _close() {
        _syncRowsToPalette(true)
        if (state.dirty) _applyToStore()
        if (typeof state.unsubscribe === 'function') {
            try { state.unsubscribe() } catch { }
            state.unsubscribe = null
        }
        overlay.remove()
        document.removeEventListener('keydown', _onKey)
        window.removeEventListener('seesound:commit-pending-color-edits', _onCommitPendingColorEdits)
    }

    function _onKey(e) {
        if (e.key === 'Escape') _close()
    }

    function _onCommitPendingColorEdits() {
        _syncRowsToPalette(true)
        if (state.dirty) _applyToStore()
    }

    btnClose.addEventListener('click', _close)
    overlay.addEventListener('pointerdown', (e) => {
        if (e.target === overlay) _close()
    })
    document.addEventListener('keydown', _onKey)
    window.addEventListener('seesound:commit-pending-color-edits', _onCommitPendingColorEdits)

    state.unsubscribe = subscribe((snapshot, key) => {
        if (key !== 'palettes' && key !== '*') return
        const remote = Array.isArray(snapshot?.palettes) ? snapshot.palettes : []
        if (remote.length === 0) return
        const keepCurrentId = _currentPalette()?.id
        state.palettes = remote.map((p, i) => _clonePalette(p, i))
        const idx = keepCurrentId
            ? state.palettes.findIndex((p) => p.id === keepCurrentId)
            : 0
        state.selectedIndex = idx >= 0 ? idx : 0
        state.rows = _toRowsFromPalette(_currentPalette())
        _renderAll()
    })

    _renderAll()
}
