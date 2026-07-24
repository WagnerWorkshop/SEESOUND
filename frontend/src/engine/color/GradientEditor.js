/**
 * SEESOUND — GradientEditor.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Gradient colour rule editor. Replaces the old red/green/blue/hue system
 * with a single gradient that bakes to a 1×256 canvas texture for the GPU.
 *
 * Modes:
 *   - basic: two colours at the two ends (normalized 0–1)
 *   - detailed: a horizontal bar where users add/drag/colour-pick stops
 *   - preset: pick from predefined gradients
 *
 * Three.js integration: bakeGradientToCanvas() → THREE.CanvasTexture → shader uniform.
 */

const _CSS_ID = 'gradient-editor-styles'
const PRESETS_STORAGE_KEY = 'seesound_gradient_presets_v1'

function _buildInitialPresets() {
    return {
        'Color spectrum': [
            { position: 0.000, color: '#ff0000' },
            { position: 0.166, color: '#ffff00' },
            { position: 0.333, color: '#00ff00' },
            { position: 0.500, color: '#00ffff' },
            { position: 0.666, color: '#0000ff' },
            { position: 0.833, color: '#ff00ff' },
            { position: 1.000, color: '#ff0000' },
        ],
        'Scriabin colors': [
            { position: 0.000, color: '#ff4444' },
            { position: 0.083, color: '#ff88aa' },
            { position: 0.167, color: '#ffcc44' },
            { position: 0.250, color: '#ddcc88' },
            { position: 0.333, color: '#aaccff' },
            { position: 0.417, color: '#ccaadd' },
            { position: 0.500, color: '#ff6644' },
            { position: 0.583, color: '#ff8844' },
            { position: 0.667, color: '#cc88cc' },
            { position: 0.750, color: '#44cc44' },
            { position: 0.833, color: '#44aacc' },
            { position: 0.917, color: '#4488ff' },
            { position: 1.000, color: '#ff4444' },
        ],
        'Circle of fifths': [
            { position: 0.000, color: '#44aa44' },
            { position: 0.083, color: '#66bb44' },
            { position: 0.167, color: '#88cc44' },
            { position: 0.250, color: '#aacc44' },
            { position: 0.333, color: '#cccc44' },
            { position: 0.417, color: '#ccaa44' },
            { position: 0.500, color: '#cc8844' },
            { position: 0.583, color: '#cc6644' },
            { position: 0.667, color: '#cc4444' },
            { position: 0.750, color: '#cc4466' },
            { position: 0.833, color: '#cc4488' },
            { position: 0.917, color: '#cc44aa' },
            { position: 1.000, color: '#44aa44' },
        ],
        'Warm': [
            { position: 0.000, color: '#331100' },
            { position: 0.250, color: '#cc4400' },
            { position: 0.500, color: '#ff8800' },
            { position: 0.750, color: '#ffcc44' },
            { position: 1.000, color: '#ffffaa' },
        ],
        'Cold': [
            { position: 0.000, color: '#001133' },
            { position: 0.250, color: '#0044cc' },
            { position: 0.500, color: '#0088ff' },
            { position: 0.750, color: '#44ccff' },
            { position: 1.000, color: '#aaeeff' },
        ],
        'Nature': [
            { position: 0.000, color: '#1a3300' },
            { position: 0.200, color: '#336600' },
            { position: 0.400, color: '#669933' },
            { position: 0.600, color: '#88aa44' },
            { position: 0.800, color: '#44aa88' },
            { position: 1.000, color: '#aaddcc' },
        ],
        'Sundown': [
            { position: 0.000, color: '#1a0a2e' },
            { position: 0.200, color: '#4a1942' },
            { position: 0.400, color: '#cc3355' },
            { position: 0.600, color: '#ff6644' },
            { position: 0.800, color: '#ffaa33' },
            { position: 1.000, color: '#ffdd88' },
        ],
    }
}

/**
 * Load user-defined presets from localStorage, merged with built-ins.
 * Built-ins always exist; user additions are appended.
 */
function _loadPresets() {
    const builtins = _buildInitialPresets()
    try {
        const raw = localStorage.getItem(PRESETS_STORAGE_KEY)
        if (raw) {
            const user = JSON.parse(raw)
            if (user && typeof user === 'object') {
                // Add user presets on top of built-ins (built-ins take priority for same name)
                for (const [key, stops] of Object.entries(user)) {
                    if (!builtins[key] && Array.isArray(stops) && stops.length >= 2) {
                        builtins[key] = stops
                    }
                }
                // Remove presets that user deleted
                if (Array.isArray(user._deleted)) {
                    for (const name of user._deleted) {
                        delete builtins[name]
                    }
                }
            }
        }
    } catch { /* noop */ }
    return builtins
}

/**
 * Save user customizations to localStorage.
 */
function _savePresets(presets) {
    try {
        const builtinKeys = new Set(Object.keys(_buildInitialPresets()))
        const user = { _deleted: [] }
        for (const [key, stops] of Object.entries(presets)) {
            if (!builtinKeys.has(key)) {
                user[key] = stops
            }
        }
        // Track which builtins were deleted
        for (const key of builtinKeys) {
            if (!presets[key]) user._deleted.push(key)
        }
        localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(user))
    } catch { /* noop */ }
}

/** Mutable preset dictionary — loaded from localStorage + builtins. */
let PREDEFINED_GRADIENTS = _loadPresets()

/**
 * Default gradient for a new layer.
 */
function getDefaultGradient() {
    return {
        mode: 'basic',
        preset: null,
        stops: [
            { position: 0.0, color: '#ff4444' },
            { position: 1.0, color: '#4444ff' },
        ],
    }
}

/**
 * Deep-clone a gradient definition.
 */
function cloneGradient(grad) {
    if (!grad || typeof grad !== 'object') return getDefaultGradient()
    return {
        mode: grad.mode || 'basic',
        preset: grad.preset || null,
        stops: Array.isArray(grad.stops) ? grad.stops.map(s => ({ position: s.position, color: s.color })) : [
            { position: 0.0, color: '#ff4444' },
            { position: 1.0, color: '#4444ff' },
        ],
    }
}

/**
 * Parse a hex colour string to {r,g,b} 0–255.
 */
function hexToRgb(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
    if (!m) return { r: 255, g: 255, b: 255 }
    return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
}

/**
 * Convert {r,g,b} 0–255 to hex string.
 */
function rgbToHex(r, g, b) {
    const toHex = (c) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Interpolate between two colours at a given t (0–1).
 */
function lerpColor(c1, c2, t) {
    const a = hexToRgb(c1)
    const b = hexToRgb(c2)
    const tt = Math.max(0, Math.min(1, t))
    return rgbToHex(
        a.r + (b.r - a.r) * tt,
        a.g + (b.g - a.g) * tt,
        a.b + (b.b - a.b) * tt,
    )
}

/**
 * Bake a gradient definition onto a 1×width canvas.
 * @param {object} gradientDef
 * @param {number} [width=256]
 * @returns {HTMLCanvasElement}
 */
function bakeGradientToCanvas(gradientDef, width = 256) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = 1
    const ctx = canvas.getContext('2d')

    const stops = getEffectiveStops(gradientDef)

    const grd = ctx.createLinearGradient(0, 0, width, 0)
    for (const stop of stops) {
        grd.addColorStop(stop.position, stop.color)
    }
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, width, 1)

    return canvas
}

/**
 * Get the effective stops for a gradient definition, resolving presets.
 */
function getEffectiveStops(gradientDef) {
    PREDEFINED_GRADIENTS = _loadPresets()
    if (gradientDef.preset && PREDEFINED_GRADIENTS[gradientDef.preset]) {
        return PREDEFINED_GRADIENTS[gradientDef.preset]
    }
    if (Array.isArray(gradientDef.stops) && gradientDef.stops.length > 0) {
        return gradientDef.stops
    }
    return [{ position: 0, color: '#ffffff' }, { position: 1, color: '#ffffff' }]
}

/**
 * Inject the gradient editor CSS once.
 */
function _injectStyles() {
    if (document.getElementById(_CSS_ID)) return
    const style = document.createElement('style')
    style.id = _CSS_ID
    style.textContent = `
.ge-overlay {
    position: fixed; inset: 0; z-index: 9998;
    background: rgba(5, 10, 8, 0.75);
    backdrop-filter: blur(3px);
    display: flex; align-items: center; justify-content: center;
}
.ge-popup {
    width: min(540px, 94vw);
    border: 1px solid var(--color-border-strong, #4f7562);
    border-radius: 10px;
    background: var(--color-bg-solid, #0d1410);
    box-shadow: 0 8px 48px rgba(0,0,0,0.72);
    color: var(--color-text, #e2f0eb);
    font-family: var(--font-ui, 'Segoe UI', system-ui, sans-serif);
    font-size: 12px;
    display: flex; flex-direction: column; overflow: hidden;
}
.ge-header {
    display: flex; align-items: center; gap: 8px;
    border-bottom: 1px solid var(--color-border-strong, #4f7562);
    padding: 8px 12px;
    background: var(--color-bg-raised, #0b1410);
}
.ge-title {
    flex: 1; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 700;
    color: var(--color-text-muted, #b9a79b);
}
.ge-btn {
    background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px);
    font-size: 11px; cursor: pointer; padding: 4px 10px;
}
.ge-btn:hover { border-color: var(--color-text-muted, #b9a79b); }
.ge-btn-primary {
    color: var(--color-accent, #d2910a);
    border-color: rgba(210,145,10,0.4);
    background: rgba(210,145,10,0.12);
}
.ge-btn-danger {
    color: var(--color-danger, #e67a7a);
    border-color: rgba(212,85,6,0.4);
    background: rgba(212,85,6,0.08);
}
.ge-body {
    padding: 16px; display: flex; flex-direction: column; gap: 14px;
}
.ge-section-label {
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--color-text-dim, #7a8c82); margin-bottom: -8px;
}
.ge-mode-row {
    display: flex; gap: 8px;
}
.ge-mode-btn {
    flex: 1; padding: 6px; border-radius: var(--radius-s, 4px);
    border: 1px solid var(--color-border, #4f7562);
    background: var(--color-bg, #111a16);
    color: var(--color-text-dim, #8a9c92);
    font-size: 11px; cursor: pointer; text-align: center;
}
.ge-mode-btn.active {
    border-color: var(--color-accent, #d2910a);
    color: var(--color-accent, #d2910a);
    background: rgba(210,145,10,0.1);
}
/* ── Gradient preview bar (thicker) ── */
.ge-bar-wrap {
    position: relative; height: 52px; border-radius: 6px;
    border: 1px solid var(--color-border-strong, #4f7562);
    overflow: visible; cursor: crosshair; margin: 4px 0;
    background: var(--color-bg, #111a16);
}
.ge-bar-canvas {
    width: 100%; height: 100%; border-radius: 5px;
}
/* ── Handles (pin below bar, stem points UP into the bar) ── */
.ge-handle {
    position: absolute; top: 0; width: 18px; height: 68px;
    margin-left: -9px; cursor: grab; z-index: 3; pointer-events: auto;
}
.ge-handle-pin {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid var(--color-text, #e2f0eb);
    box-shadow: 0 1px 4px rgba(0,0,0,0.6);
    position: absolute; bottom: 8px; left: 1px;
    box-sizing: border-box; transition: transform 0.1s;
}
.ge-handle:hover .ge-handle-pin,
.ge-handle.active .ge-handle-pin {
    transform: scale(1.3); border-color: var(--color-accent, #d2910a);
}
.ge-handle.active .ge-handle-pin { border-width: 3px; }
.ge-handle-stem {
    position: absolute; bottom: 24px; left: 8px;
    width: 2px; height: 36px;
    background: var(--color-text, #e2f0eb);
}
/* ── Colour input row ── */
.ge-color-row {
    display: flex; align-items: center; gap: 8px;
}
.ge-color-picker {
    width: 32px; height: 28px; border: 1px solid var(--color-border, #4f7562);
    border-radius: var(--radius-s, 4px); cursor: pointer; padding: 0;
    background: transparent;
}
.ge-color-hex {
    flex: 1; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 8px;
    font-size: 12px; font-family: var(--font-mono, monospace); outline: none;
}
.ge-color-hex:focus { border-color: var(--color-accent, #d2910a); }
.ge-pos-input {
    width: 56px; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 6px;
    font-size: 12px; font-family: var(--font-mono, monospace);
    outline: none; text-align: center;
}
.ge-pos-input:focus { border-color: var(--color-accent, #d2910a); }
.ge-delete-stop-btn {
    background: none; border: 1px solid rgba(212,85,6,0.4);
    color: var(--color-danger, #e67a7a);
    border-radius: var(--radius-s, 4px); cursor: pointer;
    padding: 4px 8px; font-size: 11px;
}
.ge-delete-stop-btn:hover { background: rgba(212,85,6,0.15); }
.ge-delete-stop-btn:disabled { opacity: 0.3; cursor: default; }
/* ── Preset list ── */
.ge-presets-list {
    display: flex; flex-direction: column; gap: 4px;
    max-height: 200px; overflow-y: auto;
}
.ge-preset-item {
    display: flex; align-items: center; gap: 8px;
    padding: 5px 8px; border-radius: var(--radius-s, 4px);
    cursor: pointer; border: 1px solid transparent; font-size: 11px;
    position: relative;
}
.ge-preset-item:hover {
    border-color: var(--color-border, #4f7562);
    background: var(--color-bg, rgba(255,255,255,0.04));
}
.ge-preset-item.active {
    border-color: var(--color-accent, #d2910a);
    background: rgba(210,145,10,0.08);
}
.ge-preset-swatch {
    width: 48px; height: 14px; border-radius: 3px;
    border: 1px solid var(--color-border, #4f7562); flex-shrink: 0;
}
.ge-preset-name { flex: 1; }
.ge-preset-remove-btn {
    position: absolute; right: 4px; top: 50%; transform: translateY(-50%);
    width: 18px; height: 18px; border-radius: 50%; border: 1px solid rgba(212,85,6,0.4);
    background: rgba(212,85,6,0.12); color: var(--color-danger, #e67a7a);
    font-size: 10px; cursor: pointer; display: none;
    align-items: center; justify-content: center; padding: 0; line-height: 1;
}
.ge-preset-item:hover .ge-preset-remove-btn { display: flex; }
.ge-preset-remove-btn:hover { background: rgba(212,85,6,0.25); }
/* ── Add preset row ── */
.ge-add-preset-row {
    display: flex; gap: 6px; margin-top: 4px;
}
.ge-add-preset-input {
    flex: 1; background: var(--color-bg, #111a16);
    border: 1px solid var(--color-border, #4f7562);
    color: var(--color-text, #e2f0eb);
    border-radius: var(--radius-s, 4px); padding: 4px 8px;
    font-size: 11px; outline: none;
}
.ge-add-preset-input:focus { border-color: var(--color-accent, #d2910a); }
.ge-footer {
    border-top: 1px solid var(--color-border-strong, #4f7562);
    padding: 10px 12px; display: flex; justify-content: flex-end;
    gap: 8px; background: var(--color-bg-raised, #0b1410);
}
`

    document.head.appendChild(style)
}

/**
 * Render a gradient preview onto a canvas element (small swatch).
 */
function _renderGradientSwatch(gradientDef, canvas) {
    const stops = getEffectiveStops(gradientDef)
    const w = canvas.width
    canvas.height = 1
    const ctx = canvas.getContext('2d')
    const grd = ctx.createLinearGradient(0, 0, w, 0)
    for (const s of stops) grd.addColorStop(s.position, s.color)
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, w, 1)
}

/**
 * Create a small gradient preview canvas for preset items.
 */
function _createSwatchCanvas(gradientDef, width = 48) {
    const c = document.createElement('canvas')
    c.width = width
    _renderGradientSwatch(gradientDef, c)
    return c
}

/**
 * Open the gradient editor modal.
 *
 * @param {object} gradientDef - current gradient definition
 * @param {(newDef: object) => void} onSave - called with updated gradient when saved
 */
export function openGradientEditor(gradientDef, onSave) {
    _injectStyles()

    const grad = cloneGradient(gradientDef)
    let activeStopIndex = 0
    let selectedPreset = grad.preset || null

    // ── Build DOM ──
    const overlay = document.createElement('div')
    overlay.className = 'ge-overlay'

    const popup = document.createElement('div')
    popup.className = 'ge-popup'

    // Header
    const header = document.createElement('div')
    header.className = 'ge-header'
    const title = document.createElement('span')
    title.className = 'ge-title'
    title.textContent = 'Gradient Editor'
    header.appendChild(title)
    popup.appendChild(header)

    // Body
    const body = document.createElement('div')
    body.className = 'ge-body'

    // Mode toggle
    const modeLabel = document.createElement('div')
    modeLabel.className = 'ge-section-label'
    modeLabel.textContent = 'Mode'
    const modeRow = document.createElement('div')
    modeRow.className = 'ge-mode-row'

    const basicBtn = document.createElement('button')
    basicBtn.className = 'ge-mode-btn' + (grad.mode === 'basic' ? ' active' : '')
    basicBtn.textContent = 'Basic'
    const detailedBtn = document.createElement('button')
    detailedBtn.className = 'ge-mode-btn' + (grad.mode === 'detailed' ? ' active' : '')
    detailedBtn.textContent = 'Detailed'

    basicBtn.addEventListener('click', () => {
        grad.mode = 'basic'
        basicBtn.classList.add('active')
        detailedBtn.classList.remove('active')
        // Ensure exactly 2 stops for basic mode
        if (grad.stops.length !== 2) {
            grad.stops = [
                { position: 0.0, color: grad.stops[0]?.color || '#ff4444' },
                { position: 1.0, color: grad.stops[grad.stops.length - 1]?.color || '#4444ff' },
            ]
        }
        grad.preset = null
        selectedPreset = null
        activeStopIndex = 0
        rebuildBar()
        updateStopEditor()
    })
    detailedBtn.addEventListener('click', () => {
        grad.mode = 'detailed'
        detailedBtn.classList.add('active')
        basicBtn.classList.remove('active')
        grad.preset = null
        selectedPreset = null
        activeStopIndex = 0
        rebuildBar()
        updateStopEditor()
    })
    modeRow.append(basicBtn, detailedBtn)
    body.appendChild(modeLabel)
    body.appendChild(modeRow)

    // ── Gradient bar ──
    const barWrap = document.createElement('div')
    barWrap.className = 'ge-bar-wrap'
    const barCanvas = document.createElement('canvas')
    barCanvas.className = 'ge-bar-canvas'
    barWrap.appendChild(barCanvas)

    const handlesContainer = document.createElement('div')
    handlesContainer.style.cssText = 'position:absolute;inset:0;pointer-events:none;'
    barWrap.appendChild(handlesContainer)

    body.appendChild(barWrap)

    // ── Stop editor ──
    const stopSection = document.createElement('div')
    stopSection.className = 'ge-section-label'
    stopSection.textContent = 'Selected Stop'
    body.appendChild(stopSection)

    const colorRow = document.createElement('div')
    colorRow.className = 'ge-color-row'

    const colorPicker = document.createElement('input')
    colorPicker.type = 'color'
    colorPicker.className = 'ge-color-picker'

    const hexInput = document.createElement('input')
    hexInput.type = 'text'
    hexInput.className = 'ge-color-hex'
    hexInput.maxLength = 7

    const posInput = document.createElement('input')
    posInput.type = 'text'
    posInput.className = 'ge-pos-input'
    posInput.maxLength = 6

    const deleteStopBtn = document.createElement('button')
    deleteStopBtn.className = 'ge-delete-stop-btn'
    deleteStopBtn.textContent = '✕'
    deleteStopBtn.title = 'Remove stop'

    colorRow.append(colorPicker, hexInput, posInput, deleteStopBtn)
    body.appendChild(colorRow)

    // ── Presets (always expanded) ──
    const presetsSection = document.createElement('div')
    presetsSection.className = 'ge-section-label'
    presetsSection.textContent = 'Predefined Gradients'

    const presetsList = document.createElement('div')
    presetsList.className = 'ge-presets-list'
    presetsList.style.display = 'flex'  // always open

    // Add preset input row
    const addPresetRow = document.createElement('div')
    addPresetRow.className = 'ge-add-preset-row'
    const presetNameInput = document.createElement('input')
    presetNameInput.type = 'text'
    presetNameInput.className = 'ge-add-preset-input'
    presetNameInput.placeholder = 'New preset name...'
    presetNameInput.maxLength = 40
    const addPresetBtn = document.createElement('button')
    addPresetBtn.className = 'ge-btn ge-btn-sm'
    addPresetBtn.textContent = '+ Save Current'
    addPresetBtn.title = 'Save current gradient as a new preset'
    addPresetRow.append(presetNameInput, addPresetBtn)

    function _rebuildPresetList() {
        presetsList.innerHTML = ''
        PREDEFINED_GRADIENTS = _loadPresets()

        for (const [name, stops] of Object.entries(PREDEFINED_GRADIENTS)) {
            const item = document.createElement('div')
            item.className = 'ge-preset-item'
            if (selectedPreset === name) item.classList.add('active')

            const swatchCanvas = _createSwatchCanvas({ stops })
            swatchCanvas.className = 'ge-preset-swatch'
            item.appendChild(swatchCanvas)

            const nameSpan = document.createElement('span')
            nameSpan.className = 'ge-preset-name'
            nameSpan.textContent = name
            item.appendChild(nameSpan)

            // Remove button (only for user-added presets, not built-ins)
            const builtinKeys = Object.keys(_buildInitialPresets())
            if (!builtinKeys.includes(name)) {
                const removeBtn = document.createElement('button')
                removeBtn.className = 'ge-preset-remove-btn'
                removeBtn.textContent = '✕'
                removeBtn.title = 'Delete preset'
                removeBtn.addEventListener('click', (ev) => {
                    ev.stopPropagation()
                    delete PREDEFINED_GRADIENTS[name]
                    _savePresets(PREDEFINED_GRADIENTS)
                    if (selectedPreset === name) {
                        selectedPreset = null
                        grad.preset = null
                    }
                    _rebuildPresetList()
                })
                item.appendChild(removeBtn)
            }

            item.addEventListener('click', () => {
                selectedPreset = name
                grad.preset = name
                grad.stops = stops.map(s => ({ position: s.position, color: s.color }))
                grad.mode = 'detailed'
                detailedBtn.classList.add('active')
                basicBtn.classList.remove('active')
                activeStopIndex = 0
                _rebuildPresetList()
                rebuildBar()
                updateStopEditor()
            })
            presetsList.appendChild(item)
        }
    }

    _rebuildPresetList()

    addPresetBtn.addEventListener('click', () => {
        const name = presetNameInput.value.trim()
        if (!name || name.length < 2) return
        // Don't overwrite existing
        const existing = _buildInitialPresets()
        if (existing[name]) { presetNameInput.value = ''; return }
        PREDEFINED_GRADIENTS[name] = grad.stops.map(s => ({ position: s.position, color: s.color }))
        _savePresets(PREDEFINED_GRADIENTS)
        presetNameInput.value = ''
        selectedPreset = name
        grad.preset = name
        _rebuildPresetList()
        rebuildBar()
    })

    addPresetRow.style.display = 'flex'
    presetsList.style.display = 'flex'

    body.appendChild(presetsSection)
    body.appendChild(presetsList)
    body.appendChild(addPresetRow)

    popup.appendChild(body)

    // Footer
    const footer = document.createElement('div')
    footer.className = 'ge-footer'

    const cancelBtn = document.createElement('button')
    cancelBtn.className = 'ge-btn'
    cancelBtn.textContent = 'Cancel'
    const saveBtn = document.createElement('button')
    saveBtn.className = 'ge-btn ge-btn-primary'
    saveBtn.textContent = 'Apply'

    footer.append(cancelBtn, saveBtn)
    popup.appendChild(footer)

    overlay.appendChild(popup)
    document.body.appendChild(overlay)

    // ── Event handlers ──

    function close() {
        overlay.remove()
    }

    cancelBtn.addEventListener('click', close)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close()
    })

    saveBtn.addEventListener('click', () => {
        grad.stops.sort((a, b) => a.position - b.position)
        if (grad.stops.length > 0) grad.stops[0].position = 0
        if (grad.stops.length > 1) grad.stops[grad.stops.length - 1].position = 1
        onSave({
            mode: grad.mode,
            preset: grad.preset || null,
            stops: grad.stops.map(s => ({ position: s.position, color: s.color })),
        })
        close()
    })

    // ── Build handles (pin below bar, stem up into bar) ──
    function rebuildBar() {
        handlesContainer.querySelectorAll('.ge-handle').forEach(h => h.remove())
        _renderGradientBar()

        if (grad.mode === 'basic' || grad.preset) {
            const stops = grad.stops
            for (const idx of [0, stops.length - 1]) {
                createHandle(idx, stops[idx])
            }
        } else {
            for (let i = 0; i < grad.stops.length; i++) {
                createHandle(i, grad.stops[i])
            }
        }
    }

    function _renderGradientBar() {
        const rect = barWrap.getBoundingClientRect()
        const w = Math.max(1, Math.floor(rect.width))
        barCanvas.width = w
        barCanvas.height = barWrap.clientHeight || 52
        const stops = getEffectiveStops(grad)
        const ctx = barCanvas.getContext('2d')
        const grdCtx = ctx.createLinearGradient(0, 0, w, 0)
        for (const s of stops) grdCtx.addColorStop(s.position, s.color)
        ctx.fillStyle = grdCtx
        ctx.fillRect(0, 0, w, barCanvas.height)
    }

    function createHandle(index, stop) {
        const handle = document.createElement('div')
        handle.className = 'ge-handle'
        handle.style.left = `${stop.position * 100}%`
        handle.dataset.index = index
        handle.style.pointerEvents = 'auto'

        const pin = document.createElement('div')
        pin.className = 'ge-handle-pin'
        pin.style.backgroundColor = stop.color

        const stem = document.createElement('div')
        stem.className = 'ge-handle-stem'

        handle.append(stem, pin)  // stem first (below), then pin on top

        if (index === activeStopIndex) handle.classList.add('active')

        // Click to select this stop (separate from drag)
        handle.addEventListener('pointerdown', (e) => {
            e.preventDefault()
            e.stopPropagation()

            // Select this stop
            activeStopIndex = index
            handlesContainer.querySelectorAll('.ge-handle').forEach(h => h.classList.remove('active'))
            handle.classList.add('active')
            updateStopEditor()

            handle.setPointerCapture(e.pointerId)

            const onMove = (ev) => {
                ev.preventDefault()
                const rect = barWrap.getBoundingClientRect()
                let px = (ev.clientX - rect.left) / rect.width
                px = Math.max(0, Math.min(1, px))

                const stops = grad.stops
                if (grad.mode === 'basic' || grad.preset) {
                    if (index === 0) px = 0
                    else if (index === stops.length - 1) px = 1
                }

                // Don't cross other stops
                if (index > 0) px = Math.max(px, stops[index - 1].position + 0.001)
                if (index < stops.length - 1) px = Math.min(px, stops[index + 1].position - 0.001)

                stops[index].position = parseFloat(px.toFixed(4))
                handle.style.left = `${stops[index].position * 100}%`
                _renderGradientBar()
                updateStopEditor()
            }

            const onUp = () => {
                document.removeEventListener('pointermove', onMove)
                document.removeEventListener('pointerup', onUp)
                document.removeEventListener('pointercancel', onUp)
                _renderGradientBar()
            }

            document.addEventListener('pointermove', onMove)
            document.addEventListener('pointerup', onUp)
            document.addEventListener('pointercancel', onUp)
        })

        handlesContainer.appendChild(handle)
    }

    // ── Bar click → add stop (detailed mode only) ──
    barWrap.addEventListener('click', (e) => {
        if (grad.mode !== 'detailed' || grad.preset) return
        if (e.target.closest('.ge-handle')) return

        const rect = barWrap.getBoundingClientRect()
        let px = (e.clientX - rect.left) / rect.width
        px = parseFloat(Math.max(0, Math.min(1, px)).toFixed(4))

        for (const s of grad.stops) {
            if (Math.abs(s.position - px) < 0.015) return
        }

        const colorAt = _interpolateStopColor(grad.stops, px)

        grad.stops.push({ position: px, color: colorAt })
        grad.stops.sort((a, b) => a.position - b.position)
        activeStopIndex = grad.stops.findIndex(s => s.position === px)
        rebuildBar()
        updateStopEditor()
    })

    function _interpolateStopColor(stops, pos) {
        if (stops.length === 0) return '#ffffff'
        let left = stops[0], right = stops[stops.length - 1]
        for (const s of stops) {
            if (s.position <= pos) left = s
            if (s.position >= pos && s.position < right.position) right = s
        }
        if (left === right) return left.color
        const t = (pos - left.position) / (right.position - left.position || 0.001)
        return lerpColor(left.color, right.color, t)
    }

    // ── Stop editor ──
    function updateStopEditor() {
        const stop = grad.stops[activeStopIndex]
        if (!stop) return

        colorPicker.value = stop.color
        hexInput.value = stop.color
        posInput.value = stop.position.toFixed(3)

        const locked = grad.mode === 'basic' || !!grad.preset
        posInput.disabled = locked
        deleteStopBtn.disabled = locked || grad.stops.length <= 2
        posInput.style.opacity = locked ? '0.4' : '1'
        deleteStopBtn.style.opacity = (locked || grad.stops.length <= 2) ? '0.3' : '1'
    }

    colorPicker.addEventListener('input', () => {
        const stop = grad.stops[activeStopIndex]
        if (!stop) return
        stop.color = colorPicker.value
        hexInput.value = colorPicker.value
        const handle = handlesContainer.querySelector(`.ge-handle[data-index="${activeStopIndex}"]`)
        if (handle) handle.querySelector('.ge-handle-pin').style.backgroundColor = colorPicker.value
        _renderGradientBar()
    })

    hexInput.addEventListener('change', () => {
        const stop = grad.stops[activeStopIndex]
        if (!stop) return
        let val = hexInput.value.trim()
        if (!val.startsWith('#')) val = '#' + val
        if (/^#[0-9a-fA-F]{6}$/.test(val)) {
            stop.color = val
            colorPicker.value = val
            const handle = handlesContainer.querySelector(`.ge-handle[data-index="${activeStopIndex}"]`)
            if (handle) handle.querySelector('.ge-handle-pin').style.backgroundColor = val
            _renderGradientBar()
        }
    })

    posInput.addEventListener('change', () => {
        if (grad.mode === 'basic' || grad.preset) return
        const stop = grad.stops[activeStopIndex]
        if (!stop) return
        let val = parseFloat(posInput.value)
        if (!Number.isFinite(val)) return
        val = Math.max(0, Math.min(1, val))
        if (activeStopIndex > 0) val = Math.max(val, grad.stops[activeStopIndex - 1].position + 0.001)
        if (activeStopIndex < grad.stops.length - 1) val = Math.min(val, grad.stops[activeStopIndex + 1].position - 0.001)
        stop.position = parseFloat(val.toFixed(4))
        posInput.value = stop.position.toFixed(3)
        rebuildBar()
    })

    deleteStopBtn.addEventListener('click', () => {
        if (grad.mode === 'basic' || grad.preset) return
        if (grad.stops.length <= 2) return
        grad.stops.splice(activeStopIndex, 1)
        activeStopIndex = Math.min(activeStopIndex, grad.stops.length - 1)
        rebuildBar()
        updateStopEditor()
    })

    // ── Init ──
    requestAnimationFrame(() => {
        _renderGradientBar()
        rebuildBar()
        updateStopEditor()
    })

    const resizeObs = new ResizeObserver(() => {
        _renderGradientBar()
        rebuildBar()
    })
    resizeObs.observe(barWrap)

    const keyHandler = (e) => {
        if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', keyHandler)

    // Cleanup on close
    const doClose = () => {
        window.removeEventListener('keydown', keyHandler)
        resizeObs.disconnect()
        overlay.remove()
    }
    cancelBtn.onclick = doClose
    overlay.onclick = (e) => { if (e.target === overlay) doClose() }
    saveBtn.addEventListener('click', () => {
        window.removeEventListener('keydown', keyHandler)
        resizeObs.disconnect()
    })
}

export { getDefaultGradient, cloneGradient, bakeGradientToCanvas, getEffectiveStops, PREDEFINED_GRADIENTS }
