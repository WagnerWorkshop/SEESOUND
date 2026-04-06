import {
    params,
    set,
    setMany,
    subscribe,
    resetToDefaults,
    getSnapshot,
    listPresets,
    loadPreset,
    savePreset,
    deletePreset,
} from './ParamStore.js'
import {
    UI_TEXT,
    RULE_VARIABLES,
    getRuleVariablesByGroup,
    getRuleVariableById,
} from './ui/UiText.js'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
import menuFileIcon from '../icons/menu-file.svg?raw'
import menuViewIcon from '../icons/menu-view.svg?raw'
import menuSettingsIcon from '../icons/menu-settings.svg?raw'
import menuRulesIcon from '../icons/menu-rules.svg?raw'
import closeIcon from '../icons/close.svg?raw'
import loadIcon from '../icons/load.svg?raw'
import saveIcon from '../icons/save.svg?raw'
import savePresetIcon from '../icons/save-preset.svg?raw'
import saveAsIcon from '../icons/save-as.svg?raw'
import uploadIcon from '../icons/upload.svg?raw'
import deleteIcon from '../icons/delete.svg?raw'
import imageIcon from '../icons/image.svg?raw'
import imageEmptyIcon from '../icons/image-empty.svg?raw'
import videoIcon from '../icons/video.svg?raw'
import objIcon from '../icons/obj.svg?raw'
import refreshIcon from '../icons/refresh.svg?raw'
import addIcon from '../icons/add.svg?raw'
import clearIcon from '../icons/clear.svg?raw'
import resetIcon from '../icons/reset.svg?raw'
import fitIcon from '../icons/fit.svg?raw'


const NONE_VAR = '__none__'
const RULE_OPERATORS = Object.freeze(['always', '>', '>=', '<', '<=', '==', '!='])

const MENU_ITEMS = Object.freeze([
    { id: 'file', label: UI_TEXT.menu.file },
    { id: 'view', label: UI_TEXT.menu.view },
    { id: 'settings', label: UI_TEXT.menu.settings },
    { id: 'rules', label: UI_TEXT.menu.rules },
])

const FFT_OPTIONS = Object.freeze([512, 1024, 2048, 4096, 8192, 16384])

const SETTINGS_SLIDERS = Object.freeze([
    {
        key: 'inputGain',
        label: UI_TEXT.settings.sensitivity,
        min: 0,
        max: 3,
        step: 0.01,
        tooltip: 'Technical term: Input Gain. Scales all amplitude before analysis.',
    },
    {
        key: 'defaultParticleSize',
        label: UI_TEXT.settings.particleDefaultSize,
        min: 1,
        max: 40,
        step: 0.5,
        tooltip: 'Technical term: Particle Size. Base sprite diameter in pixels.',
    },
    {
        key: 'maxParticles',
        label: UI_TEXT.settings.particleCapacity,
        min: 100000,
        max: 5000000,
        step: 50000,
        tooltip: 'Technical term: Max Particle Capacity. Total GPU particle slots.',
    },
    {
        key: 'particlesByFrame',
        label: UI_TEXT.settings.spawnRate,
        min: 100,
        max: 5000,
        step: 1,
        tooltip: 'Technical term: Particles By Frame. Number of log-frequency spawn buckets per frame.',
    },
    {
        key: 'fluxWindowFrames',
        label: UI_TEXT.settings.activityInterval,
        min: 1,
        max: 64,
        step: 1,
        tooltip: 'Technical term: Flux Window Frames. Rolling frame window for activity averaging.',
    },
])

const SETTINGS_RANGES = Object.freeze([
    {
        id: 'frequencyRange',
        syncKeys: ['freqNormMin', 'freqNormMax'],
        label: UI_TEXT.settings.frequencyRange,
        min: 16,
        max: 20000,
        step: 1,
        unit: 'Hz',
        tooltip: 'Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.',
        get: () => ({ min: Number(params.freqNormMin ?? 40), max: Number(params.freqNormMax ?? 12000) }),
        set: (minValue, maxValue) => setMany({ freqNormMin: minValue, freqNormMax: maxValue }),
    },
    {
        id: 'volumeRange',
        syncKeys: ['binMagnitudeNormMin', 'binMagnitudeNormMax'],
        label: UI_TEXT.settings.volume,
        min: -120,
        max: 0,
        step: 1,
        unit: 'dBFS',
        tooltip: 'Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.',
        get: () => ({ min: Number(params.binMagnitudeNormMin ?? -70), max: Number(params.binMagnitudeNormMax ?? 0) }),
        set: (minValue, maxValue) => setMany({ binMagnitudeNormMin: minValue, binMagnitudeNormMax: maxValue }),
    },
    {
        id: 'instabilityRange',
        syncKeys: ['binPhaseDeviationNormMin', 'binPhaseDeviationNormMax'],
        label: UI_TEXT.settings.instability,
        min: 0,
        max: Math.PI,
        step: 0.001,
        unit: 'rad',
        tooltip: 'Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.',
        get: () => ({ min: Number(params.binPhaseDeviationNormMin ?? 0), max: Number(params.binPhaseDeviationNormMax ?? Math.PI) }),
        set: (minValue, maxValue) => setMany({ binPhaseDeviationNormMin: minValue, binPhaseDeviationNormMax: maxValue }),
    },
    {
        id: 'attackSharpnessRange',
        syncKeys: ['binAttackTimeNormMin', 'binAttackTimeNormMax'],
        label: UI_TEXT.settings.attackSharpness,
        min: 0,
        max: 2000,
        step: 1,
        unit: 'ms',
        tooltip: 'Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.',
        get: () => ({ min: Number(params.binAttackTimeNormMin ?? 5), max: Number(params.binAttackTimeNormMax ?? 500) }),
        set: (minValue, maxValue) => setMany({ binAttackTimeNormMin: minValue, binAttackTimeNormMax: maxValue }),
    },
    {
        id: 'energyRange',
        syncKeys: ['globalRmsNormMin', 'globalRmsNormMax'],
        label: UI_TEXT.settings.energy,
        min: -120,
        max: 0,
        step: 1,
        unit: 'dBFS',
        tooltip: 'Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.',
        get: () => ({ min: Number(params.globalRmsNormMin ?? -60), max: Number(params.globalRmsNormMax ?? 0) }),
        set: (minValue, maxValue) => setMany({ globalRmsNormMin: minValue, globalRmsNormMax: maxValue }),
    },
    {
        id: 'sharpnessRange',
        syncKeys: ['spectralCentroidNormMin', 'spectralCentroidNormMax'],
        label: UI_TEXT.settings.sharpness,
        min: 16,
        max: 22050,
        step: 1,
        unit: 'Hz',
        tooltip: 'Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.',
        get: () => ({ min: Number(params.spectralCentroidNormMin ?? 150), max: Number(params.spectralCentroidNormMax ?? 8000) }),
        set: (minValue, maxValue) => setMany({ spectralCentroidNormMin: minValue, spectralCentroidNormMax: maxValue }),
    },
    {
        id: 'activityRange',
        syncKeys: ['globalSpectralFluxNormMin', 'globalSpectralFluxNormMax', 'binFluxNormMin', 'binFluxNormMax'],
        label: UI_TEXT.settings.activity,
        min: 0,
        max: 200,
        step: 0.1,
        unit: 'AU',
        tooltip: 'Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.',
        get: () => ({
            min: Number(params.globalSpectralFluxNormMin ?? 0),
            max: Number(params.globalSpectralFluxNormMax ?? 100),
        }),
        set: (minValue, maxValue) => {
            setMany({
                globalSpectralFluxNormMin: minValue,
                globalSpectralFluxNormMax: maxValue,
                binFluxNormMin: minValue / 100,
                binFluxNormMax: maxValue / 100,
            })
        },
    },
    {
        id: 'noisinessRange',
        syncKeys: ['spectralFlatnessNormMin', 'spectralFlatnessNormMax'],
        label: UI_TEXT.settings.noisiness,
        min: 0,
        max: 1,
        step: 0.001,
        unit: 'ratio',
        tooltip: 'Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.',
        get: () => ({ min: Number(params.spectralFlatnessNormMin ?? 0), max: Number(params.spectralFlatnessNormMax ?? 1) }),
        set: (minValue, maxValue) => setMany({ spectralFlatnessNormMin: minValue, spectralFlatnessNormMax: maxValue }),
    },
])

const FIXED_RULE_ROWS = Object.freeze([
    // Particles
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Position', output: 'x', label: 'X' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Position', output: 'y', label: 'Y' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Position', output: 'z', label: 'Z' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'size', label: 'Size' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'shapeType', label: 'Shape', type: 'enum', options: ['circle', 'square'] },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'particleCount', label: 'Particle Count' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'red', label: 'Red' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'green', label: 'Green' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'blue', label: 'Blue' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'hue', label: 'Hue' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'saturation', label: 'Saturation' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'brightness', label: 'Brightness' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'luma', label: 'Luma' },
    { target: 'spawnedParticles', section: 'Particles', subgroup: 'Appearance', output: 'opacity', label: 'Opacity' },

    // Lines
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'xStart', label: 'X Start' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'xEnd', label: 'X End' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'yStart', label: 'Y Start' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'yEnd', label: 'Y End' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'zStart', label: 'Z Start' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'zEnd', label: 'Z End' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'thickness', label: 'Thickness' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'lineCount', label: 'Line Count' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'red', label: 'Red' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'green', label: 'Green' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'blue', label: 'Blue' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'hue', label: 'Hue' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'saturation', label: 'Saturation' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'brightness', label: 'Brightness' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'luma', label: 'Luma' },
    { target: 'lines', section: 'Lines', subgroup: 'Appearance', output: 'opacity', label: 'Opacity' },

    // Background
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'red', label: 'Red' },
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'green', label: 'Green' },
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'blue', label: 'Blue' },
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'hue', label: 'Hue' },
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'saturation', label: 'Saturation' },
    { target: 'background', section: 'Background', subgroup: 'Appearance', output: 'brightness', label: 'Brightness' },

    // Camera
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'x', label: 'Position X' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'y', label: 'Position Y' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'z', label: 'Position Z' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'targetX', label: 'Target X' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'targetY', label: 'Target Y' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'targetZ', label: 'Target Z' },
    { target: 'camera', section: 'Camera', subgroup: 'Position', output: 'angleOfView', label: 'Angle Of View' },
])

const RULE_VARIABLE_ID_SET = new Set(RULE_VARIABLES.map((entry) => entry.id))
const RULE_VARIABLE_REGEX = new RegExp(`\\b(${RULE_VARIABLES.map((entry) => entry.id.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')).sort((a, b) => b.length - a.length).join('|')})\\b`, 'g')

const MENU_ICON_MAP = Object.freeze({
    file: menuFileIcon,
    view: menuViewIcon,
    settings: menuSettingsIcon,
    rules: menuRulesIcon,
})

const BUTTON_ICON_MAP = Object.freeze({
    load: loadIcon,
    save: saveIcon,
    savePreset: savePresetIcon,
    saveAs: saveAsIcon,
    upload: uploadIcon,
    remove: deleteIcon,
    exportImage: imageIcon,
    exportImageNoBg: imageEmptyIcon,
    exportVideo: videoIcon,
    exportObj: objIcon,
    reset: resetIcon,
    fit: fitIcon,
    add: addIcon,
    clear: clearIcon,
    clean: clearIcon,
    close: closeIcon,
})

const MATH_ACTIONS = Object.freeze([
    { value: 'math:add', label: '+' },
    { value: 'math:subtract', label: '-' },
    { value: 'math:multiply', label: 'x' },
    { value: 'math:divide', label: '÷' },
    { value: 'math:openParen', label: '(' },
    { value: 'math:closeParen', label: ')' },
    { value: 'math:parentheses', label: '()' },
    { value: 'math:power', label: 'power' },
    { value: 'math:clamp', label: 'clamp' },
    { value: 'math:average', label: 'average' },
])

function createSyncRegistry() {
    return {
        all: [],
        byKey: new Map(),
    }
}

function registerSync(syncRegistry, callback, keys = null) {
    if (!syncRegistry || typeof callback !== 'function') return
    if (!Array.isArray(keys) || keys.length === 0) {
        syncRegistry.all.push(callback)
        return
    }
    for (const key of keys) {
        const normalized = String(key || '').trim()
        if (!normalized) continue
        if (!syncRegistry.byKey.has(normalized)) {
            syncRegistry.byKey.set(normalized, [])
        }
        syncRegistry.byKey.get(normalized).push(callback)
    }
}

function runSyncCallbacks(callbacks) {
    for (const callback of callbacks) {
        try {
            callback()
        } catch {
            // no-op
        }
    }
}

function collectSyncCallbacks(syncRegistry, keys = [], includeGlobal = false) {
    const queue = new Set(includeGlobal ? (syncRegistry?.all || []) : [])
    for (const key of Array.isArray(keys) ? keys : []) {
        const normalized = String(key || '').trim()
        if (!normalized) continue
        const keyed = syncRegistry?.byKey?.get(normalized)
        if (!keyed) continue
        for (const callback of keyed) queue.add(callback)
    }
    return [...queue]
}

function el(tag, className = '', attrs = {}) {
    const node = document.createElement(tag)
    if (className) node.className = className
    for (const [key, value] of Object.entries(attrs)) {
        if (key === 'text') node.textContent = value
        else if (key === 'html') node.innerHTML = value
        else if (value !== undefined && value !== null) node.setAttribute(key, String(value))
    }
    return node
}

function clamp(value, min, max) {
    const n = Number(value)
    if (!Number.isFinite(n)) return min
    return Math.max(min, Math.min(max, n))
}

function rgbToHex(r, g, b) {
    const rr = clamp(Math.round(r), 0, 255).toString(16).padStart(2, '0')
    const gg = clamp(Math.round(g), 0, 255).toString(16).padStart(2, '0')
    const bb = clamp(Math.round(b), 0, 255).toString(16).padStart(2, '0')
    return `#${rr}${gg}${bb}`
}

function hslToRgb(h, s, l) {
    const hh = ((Number(h) % 360) + 360) % 360
    const ss = clamp(Number(s) / 100, 0, 1)
    const ll = clamp(Number(l) / 100, 0, 1)

    const c = (1 - Math.abs((2 * ll) - 1)) * ss
    const x = c * (1 - Math.abs(((hh / 60) % 2) - 1))
    const m = ll - (c / 2)

    let r1 = 0
    let g1 = 0
    let b1 = 0

    if (hh < 60) { r1 = c; g1 = x; b1 = 0 }
    else if (hh < 120) { r1 = x; g1 = c; b1 = 0 }
    else if (hh < 180) { r1 = 0; g1 = c; b1 = x }
    else if (hh < 240) { r1 = 0; g1 = x; b1 = c }
    else if (hh < 300) { r1 = x; g1 = 0; b1 = c }
    else { r1 = c; g1 = 0; b1 = x }

    return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255),
    }
}

function hexToHsl(hex) {
    const normalized = String(hex || '').trim().replace(/^#/, '')
    if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
        return { h: 0, s: 0, l: 0 }
    }

    const r = parseInt(normalized.slice(0, 2), 16) / 255
    const g = parseInt(normalized.slice(2, 4), 16) / 255
    const b = parseInt(normalized.slice(4, 6), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    let h = 0
    if (delta > 0) {
        if (max === r) h = 60 * (((g - b) / delta) % 6)
        else if (max === g) h = 60 * (((b - r) / delta) + 2)
        else h = 60 * (((r - g) / delta) + 4)
    }
    if (h < 0) h += 360

    const l = (max + min) / 2
    const s = delta === 0 ? 0 : (delta / (1 - Math.abs((2 * l) - 1)))

    return {
        h,
        s: s * 100,
        l: l * 100,
    }
}

function applyButtonIcon(button, svgMarkup, label) {
    if (!button || !svgMarkup) return
    const caption = String(label || button.textContent || '').trim()
    button.textContent = ''
    button.append(
        el('span', 'cp-btn-icon', { html: svgMarkup }),
        el('span', 'cp-btn-label', { text: caption }),
    )
    button.setAttribute('aria-label', caption)
}

function createPillToken(variableId) {
    const id = String(variableId || '')
    const variable = getRuleVariableById(id)
    return {
        type: 'pill',
        label: variable?.label || id,
        code: id,
    }
}

function createNumberToken(value = 0) {
    const numeric = Number(value)
    return {
        type: 'number',
        value: Number.isFinite(numeric) ? numeric : 0,
    }
}

function createOpToken(code) {
    return {
        type: 'op',
        code: String(code || ''),
    }
}

function createSlotToken() {
    return {
        type: 'slot',
    }
}

function mathTemplateTokens(actionId) {
    if (actionId === 'math:add') return [createOpToken(' + ')]
    if (actionId === 'math:subtract') return [createOpToken(' - ')]
    if (actionId === 'math:multiply') return [createOpToken(' * ')]
    if (actionId === 'math:divide') return [createOpToken(' / ')]
    if (actionId === 'math:openParen') return [createOpToken('(')]
    if (actionId === 'math:closeParen') return [createOpToken(')')]
    if (actionId === 'math:parentheses') return [createOpToken('('), createSlotToken(), createOpToken(')')]
    if (actionId === 'math:power') return [createOpToken('pow('), createSlotToken(), createOpToken(', '), createSlotToken(), createOpToken(')')]
    if (actionId === 'math:clamp') return [createOpToken('clamp('), createSlotToken(), createOpToken(', '), createSlotToken(), createOpToken(', '), createSlotToken(), createOpToken(')')]
    if (actionId === 'math:average') return [createOpToken('avg('), createSlotToken(), createOpToken(', '), createSlotToken(), createOpToken(')')]
    return [createSlotToken()]
}

function normalizeToken(token) {
    if (!token || typeof token !== 'object') return null
    if (token.type === 'pill') return createPillToken(token.code)
    if (token.type === 'number') return createNumberToken(token.value)
    if (token.type === 'op') return createOpToken(token.code)
    if (token.type === 'slot') return createSlotToken()
    return null
}

function compileTokens(tokens) {
    const parts = []
    for (const token of Array.isArray(tokens) ? tokens : []) {
        if (!token || typeof token !== 'object') continue
        if (token.type === 'pill') {
            parts.push(String(token.code || ''))
            continue
        }
        if (token.type === 'number') {
            const numeric = Number(token.value)
            parts.push(Number.isFinite(numeric) ? String(numeric) : '0')
            continue
        }
        if (token.type === 'op') {
            parts.push(String(token.code || ''))
        }
    }
    return parts.join('')
}

function parseExpressionToTokens(expression) {
    const source = String(expression || '')
    if (!source.trim()) return []

    const variableSet = new Set(RULE_VARIABLES.map((entry) => entry.id))
    const lexer = /([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g
    const tokens = []
    let cursor = 0
    for (const match of source.matchAll(lexer)) {
        const index = Number(match.index)
        if (index > cursor) {
            const gap = source.slice(cursor, index)
            if (gap.trim()) tokens.push(createOpToken(gap))
        }
        const lexeme = String(match[0] || '')
        if (variableSet.has(lexeme)) tokens.push(createPillToken(lexeme))
        else if (/^\d+(?:\.\d+)?$/.test(lexeme)) tokens.push(createNumberToken(Number(lexeme)))
        else tokens.push(createOpToken(['+', '-', '*', '/'].includes(lexeme) ? ` ${lexeme} ` : lexeme))
        cursor = index + lexeme.length
    }
    if (cursor < source.length) {
        const tail = source.slice(cursor)
        if (tail.trim()) tokens.push(createOpToken(tail))
    }
    if (!tokens.length) tokens.push(createSlotToken())
    return tokens
}

function createTokenInsertSelect(selected = '') {
    const select = el('select', 'cp-input-select cp-rule-token-insert-select')
    select.appendChild(el('option', '', { value: '', text: UI_TEXT.rules.insertToken }))

    const valueGroup = document.createElement('optgroup')
    valueGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        valueGroup.appendChild(el('option', '', { value: `var:${entry.id}`, text: entry.label }))
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        overallGroup.appendChild(el('option', '', { value: `var:${entry.id}`, text: entry.label }))
    }

    const typeGroup = document.createElement('optgroup')
    typeGroup.label = UI_TEXT.rules.number
    typeGroup.appendChild(el('option', '', { value: 'number', text: UI_TEXT.rules.number }))

    const mathGroup = document.createElement('optgroup')
    mathGroup.label = UI_TEXT.rules.mathActions
    for (const action of MATH_ACTIONS) {
        mathGroup.appendChild(el('option', '', { value: action.value, text: action.label }))
    }

    select.append(valueGroup, overallGroup, typeGroup, mathGroup)
    if (selected) select.value = selected
    return select
}

function createRuleTokenValueSelect(selected = '') {
    const select = el('select', 'cp-input-select cp-rule-token-action-select cp-rule-token-value-select')
    select.appendChild(el('option', '', { value: '', text: UI_TEXT.rules.insertVariable }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        detailGroup.appendChild(el('option', '', { value: `var:${entry.id}`, text: entry.label }))
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        overallGroup.appendChild(el('option', '', { value: `var:${entry.id}`, text: entry.label }))
    }

    const numberGroup = document.createElement('optgroup')
    numberGroup.label = UI_TEXT.rules.number
    numberGroup.appendChild(el('option', '', { value: 'number', text: UI_TEXT.rules.number }))

    select.append(numberGroup, detailGroup, overallGroup)
    if (selected) select.value = selected
    return select
}

function createRuleTokenMathSelect(selected = '') {
    const select = el('select', 'cp-input-select cp-rule-token-action-select cp-rule-token-math-select')
    select.appendChild(el('option', '', { value: '', text: UI_TEXT.rules.mathActions }))
    for (const action of MATH_ACTIONS) {
        select.appendChild(el('option', '', { value: action.value, text: action.label }))
    }
    if (selected) select.value = selected
    return select
}

function tokensForInsertSelection(selection) {
    const selected = String(selection || '')
    if (!selected) return []
    if (selected.startsWith('var:')) return [createPillToken(selected.slice(4))]
    if (selected === 'number') return [createNumberToken(0)]
    if (selected.startsWith('math:')) return mathTemplateTokens(selected)
    return []
}

function hasUnresolvedSlots(tokens) {
    return (Array.isArray(tokens) ? tokens : []).some((token) => token?.type === 'slot')
}

function renderTokenEditor(rowState) {
    if (!rowState?.tokenEditor) return
    const editor = rowState.tokenEditor
    editor.innerHTML = ''

    const tokens = Array.isArray(rowState.tokens) ? rowState.tokens : []
    if (!Number.isInteger(rowState.pendingInsertIndex) || rowState.pendingInsertIndex < 0 || rowState.pendingInsertIndex > tokens.length) {
        rowState.pendingInsertIndex = null
    }

    const moveTokenToGap = (fromIndex, gapIndex) => {
        const from = Number(fromIndex)
        const toGap = Number(gapIndex)
        if (!Number.isInteger(from) || !Number.isInteger(toGap)) return
        if (from < 0 || from >= rowState.tokens.length) return
        if (toGap < 0 || toGap > rowState.tokens.length) return

        const [moved] = rowState.tokens.splice(from, 1)
        let target = toGap
        if (from < toGap) target -= 1
        rowState.tokens.splice(target, 0, moved)
        rowState.dragTokenIndex = null
        renderTokenEditor(rowState)
        rowState.onExpressionChanged?.()
    }

    const renderGap = (index) => {
        const gap = el('div', 'cp-rule-token-gap')
        const add = el('button', 'cp-rule-token-gap-btn', { type: 'button' })
        applyButtonIcon(add, BUTTON_ICON_MAP.add, UI_TEXT.rules.insertHere)
        add.classList.toggle('is-armed', rowState.pendingInsertIndex === index)
        add.addEventListener('click', () => {
            rowState.pendingInsertIndex = index
            renderTokenEditor(rowState)
        })

        gap.addEventListener('dragover', (event) => {
            if (!Number.isInteger(rowState.dragTokenIndex)) return
            event.preventDefault()
        })
        gap.addEventListener('drop', (event) => {
            if (!Number.isInteger(rowState.dragTokenIndex)) return
            event.preventDefault()
            moveTokenToGap(rowState.dragTokenIndex, index)
        })

        gap.appendChild(add)

        editor.appendChild(gap)
    }

    renderGap(0)
    if (tokens.length === 0) {
        editor.appendChild(el('span', 'cp-rule-token-placeholder', { text: UI_TEXT.rules.tokenEditorPlaceholder }))
    }

    for (let i = 0; i < tokens.length; i++) {
        const token = normalizeToken(tokens[i])
        if (!token) continue
        rowState.tokens[i] = token

        if (token.type === 'slot') {
            const slot = el('button', 'cp-rule-token-slot', { type: 'button', text: UI_TEXT.rules.selectValue })
            slot.draggable = true
            slot.addEventListener('dragstart', (event) => {
                rowState.dragTokenIndex = i
                event.dataTransfer?.setData('text/plain', String(i))
                if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
            })
            slot.addEventListener('dragend', () => {
                rowState.dragTokenIndex = null
            })
            slot.addEventListener('click', () => {
                rowState.insertContext = { mode: 'replace', index: i }
                renderTokenEditor(rowState)
            })
            editor.appendChild(slot)
            if (rowState.insertContext?.mode === 'replace' && rowState.insertContext?.index === i) {
                const picker = createTokenInsertSelect()
                picker.classList.add('cp-rule-token-picker')
                picker.addEventListener('change', () => {
                    const replaceTokens = tokensForInsertSelection(picker.value).map(normalizeToken).filter(Boolean)
                    if (!replaceTokens.length) return
                    rowState.tokens.splice(i, 1, ...replaceTokens)
                    rowState.insertContext = null
                    renderTokenEditor(rowState)
                    rowState.onExpressionChanged?.()
                })
                editor.appendChild(picker)
                requestAnimationFrame(() => picker.focus())
            }
            renderGap(i + 1)
            continue
        }

        if (token.type === 'pill') {
            const pill = el('button', 'cp-rule-token-pill', { type: 'button', title: token.code })
            pill.draggable = true
            pill.addEventListener('dragstart', (event) => {
                rowState.dragTokenIndex = i
                event.dataTransfer?.setData('text/plain', String(i))
                if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
            })
            pill.addEventListener('dragend', () => {
                rowState.dragTokenIndex = null
            })
            pill.append(
                el('span', 'cp-rule-token-pill-label', { text: token.label }),
                el('span', 'cp-rule-token-pill-remove', { html: closeIcon }),
            )
            pill.addEventListener('click', () => {
                rowState.tokens.splice(i, 1)
                renderTokenEditor(rowState)
                rowState.onExpressionChanged?.()
            })
            editor.appendChild(pill)
            renderGap(i + 1)
            continue
        }

        if (token.type === 'number') {
            const numberWrap = el('div', 'cp-rule-token-number-wrap')
            numberWrap.draggable = true
            numberWrap.addEventListener('dragstart', (event) => {
                rowState.dragTokenIndex = i
                event.dataTransfer?.setData('text/plain', String(i))
                if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
            })
            numberWrap.addEventListener('dragend', () => {
                rowState.dragTokenIndex = null
            })
            const number = el('input', 'cp-input-number cp-rule-token-number', {
                type: 'number',
                step: 0.001,
                value: String(token.value ?? 0),
            })
            number.addEventListener('change', () => {
                token.value = Number(number.value)
                rowState.onExpressionChanged?.()
            })
            const remove = el('button', 'cp-rule-token-number-remove', { type: 'button', title: 'Remove token' })
            remove.appendChild(el('span', 'cp-rule-token-pill-remove', { html: closeIcon }))
            remove.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
                rowState.tokens.splice(i, 1)
                renderTokenEditor(rowState)
                rowState.onExpressionChanged?.()
            })
            numberWrap.append(number, remove)
            editor.appendChild(numberWrap)
            renderGap(i + 1)
            continue
        }

        const op = el('button', 'cp-rule-token-math', { type: 'button', text: token.code.trim() || token.code })
        op.draggable = true
        op.addEventListener('dragstart', (event) => {
            rowState.dragTokenIndex = i
            event.dataTransfer?.setData('text/plain', String(i))
            if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
        })
        op.addEventListener('dragend', () => {
            rowState.dragTokenIndex = null
        })
        op.addEventListener('click', () => {
            rowState.tokens.splice(i, 1)
            renderTokenEditor(rowState)
            rowState.onExpressionChanged?.()
        })
        editor.appendChild(op)
        renderGap(i + 1)
    }
}

function createRuleInsertionSelect(selected = NONE_VAR) {
    const select = el('select', 'cp-input-select cp-rule-token-select')
    select.appendChild(el('option', '', { value: NONE_VAR, text: UI_TEXT.rules.insertVariable }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = `Previously: ${entry.legacyName}. ${entry.description}`
        detailGroup.appendChild(option)
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = `Previously: ${entry.legacyName}. ${entry.description}`
        overallGroup.appendChild(option)
    }

    select.append(detailGroup, overallGroup)
    if (selected && selected !== NONE_VAR) select.value = selected
    return select
}

function getMenuIconSvg(menuId) {
    return MENU_ICON_MAP[menuId] || MENU_ICON_MAP.rules
}

function createRangePairControl(definition, syncRegistry) {
    const row = el('div', 'cp-setting-row cp-setting-range')
    const labelWrap = el('div', 'cp-setting-label-wrap')
    const label = el('label', 'cp-setting-label', { text: definition.label, title: definition.tooltip })
    labelWrap.appendChild(label)

    const controls = el('div', 'cp-setting-range-controls')
    const rangeContainer = el('div', 'cp-range-container cp-range-slider')
    const minInput = el('input', 'cp-input-number', { type: 'number', step: definition.step })
    const maxInput = el('input', 'cp-input-number', { type: 'number', step: definition.step })

    noUiSlider.create(rangeContainer, {
        start: [definition.min, definition.max],
        connect: true,
        range: {
            min: definition.min,
            max: definition.max,
        },
        step: definition.step,
        behaviour: 'tap-drag',
    })

    const sliderApi = rangeContainer.noUiSlider
    // Keep initial noUiSlider update from writing min/max into ParamStore before we sync defaults.
    let suppressCommit = true

    const updateNumberInputs = (minValue, maxValue) => {
        minInput.value = String(minValue)
        maxInput.value = String(maxValue)
    }

    sliderApi.on('update', (values) => {
        const minValue = Number(values[0])
        const maxValue = Number(values[1])
        updateNumberInputs(minValue, maxValue)
        if (suppressCommit) return
        definition.set(minValue, maxValue)
    })

    const applyFromNumbers = () => {
        let minValue = Number(minInput.value)
        let maxValue = Number(maxInput.value)
        if (!Number.isFinite(minValue)) minValue = definition.min
        if (!Number.isFinite(maxValue)) maxValue = definition.max
        minValue = clamp(minValue, definition.min, definition.max)
        maxValue = clamp(maxValue, definition.min, definition.max)
        if (minValue > maxValue) {
            const temp = minValue
            minValue = maxValue
            maxValue = temp
        }
        suppressCommit = true
        sliderApi.set([minValue, maxValue])
        suppressCommit = false
        updateNumberInputs(minValue, maxValue)
        definition.set(minValue, maxValue)
    }

    minInput.addEventListener('input', applyFromNumbers)
    maxInput.addEventListener('input', applyFromNumbers)
    minInput.addEventListener('change', applyFromNumbers)
    maxInput.addEventListener('change', applyFromNumbers)

    const sync = () => {
        const current = definition.get()
        suppressCommit = true
        sliderApi.set([current.min, current.max])
        suppressCommit = false
        updateNumberInputs(current.min, current.max)
    }

    controls.append(rangeContainer, minInput, maxInput)
    row.append(labelWrap, controls)
    registerSync(syncRegistry, sync, definition.syncKeys)
    sync()
    suppressCommit = false
    return row
}

function createSliderControl(definition, syncRegistry) {
    const row = el('div', 'cp-setting-row')
    const labelWrap = el('div', 'cp-setting-label-wrap')
    const label = el('label', 'cp-setting-label', { text: definition.label, title: definition.tooltip })
    labelWrap.appendChild(label)

    const controls = el('div', 'cp-setting-controls')
    const slider = el('input', 'cp-input-range', {
        type: 'range',
        min: definition.min,
        max: definition.max,
        step: definition.step,
    })
    const number = el('input', 'cp-input-number', {
        type: 'number',
        step: definition.step,
        min: definition.min,
        max: definition.max,
    })

    const apply = (raw) => {
        const value = clamp(raw, definition.min, definition.max)
        set(definition.key, value)
    }

    slider.addEventListener('input', () => apply(Number(slider.value)))
    number.addEventListener('change', () => apply(Number(number.value)))

    const sync = () => {
        const value = Number(params[definition.key])
        slider.value = String(Number.isFinite(value) ? value : definition.min)
        number.value = String(Number.isFinite(value) ? value : definition.min)
    }

    controls.append(slider, number)
    row.append(labelWrap, controls)
    registerSync(syncRegistry, sync, [definition.key])
    sync()
    return row
}

function createSelectOptions(entries, selected) {
    const fragment = document.createDocumentFragment()
    for (const entry of entries) {
        const option = el('option', '', { value: entry.value, text: entry.label })
        if (entry.title) option.title = entry.title
        if (String(entry.value) === String(selected)) option.selected = true
        fragment.appendChild(option)
    }
    return fragment
}

function createRuleVariableSelect(group, selected = NONE_VAR) {
    const select = el('select', 'cp-input-select')
    const baseOptions = [{ value: NONE_VAR, label: UI_TEXT.rules.undefined }]
    const options = baseOptions.concat(
        getRuleVariablesByGroup(group).map((entry) => ({
            value: entry.id,
            label: entry.label,
            title: `Previously: ${entry.legacyName}. ${entry.description}`,
        }))
    )
    select.appendChild(createSelectOptions(options, selected))
    return select
}

function createRuleConditionInputSelect(selected = NONE_VAR) {
    const select = el('select', 'cp-input-select')
    select.appendChild(el('option', '', { value: NONE_VAR, text: UI_TEXT.rules.selectValue }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        detailGroup.appendChild(el('option', '', { value: entry.id, text: entry.label }))
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        overallGroup.appendChild(el('option', '', { value: entry.id, text: entry.label }))
    }

    select.append(detailGroup, overallGroup)
    if (selected && selected !== NONE_VAR) select.value = selected
    return select
}

function buildFileMenu(body) {
    const panel = el('div', 'cp-menu-pane-inner')
    const PRESET_FILE_EXTENSION = '.ssp-preset.json'

    const presetNameFromFile = (rawName = '') => {
        const fileName = String(rawName || '').trim()
        if (!fileName) return ''
        if (/\.ssp-preset\.json$/i.test(fileName)) return fileName.replace(/\.ssp-preset\.json$/i, '')
        return fileName.replace(/\.[^./\\]+$/g, '')
    }

    const buildPresetPayload = (name, presetParams) => ({
        schemaVersion: 1,
        name: String(name || '').trim(),
        params: (presetParams && typeof presetParams === 'object') ? presetParams : {},
        updatedAt: new Date().toISOString(),
    })

    const parsePresetText = (text, fileName = '') => {
        const payload = JSON.parse(String(text || '{}'))
        if (!payload || typeof payload !== 'object') {
            throw new Error('Preset file is invalid.')
        }
        const parsedName = String(payload?.name || '').trim() || presetNameFromFile(fileName)
        if (payload?.params && typeof payload.params === 'object') {
            return { name: parsedName, params: payload.params }
        }
        return { name: parsedName, params: payload }
    }

    const savePresetToLocalFile = async (name, presetParams) => {
        const trimmedName = String(name || '').trim()
        const fallbackName = `${trimmedName || 'seesound-preset'}${PRESET_FILE_EXTENSION}`
        const payload = buildPresetPayload(trimmedName, presetParams)
        if (typeof window.showSaveFilePicker === 'function') {
            try {
                const handle = await window.showSaveFilePicker({
                    suggestedName: fallbackName,
                    excludeAcceptAllOption: false,
                    types: [{
                        description: 'SEESOUND Preset',
                        accept: { 'application/json': [PRESET_FILE_EXTENSION, '.json'] },
                    }],
                })
                if (!handle) return false
                const writable = await handle.createWritable()
                await writable.write(JSON.stringify(payload, null, 2))
                await writable.close()
                return true
            } catch {
                return false
            }
        }

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = fallbackName
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
        URL.revokeObjectURL(url)
        return true
    }

    const openPresetFromLocalFile = async () => {
        if (typeof window.showOpenFilePicker === 'function') {
            try {
                const [handle] = await window.showOpenFilePicker({
                    multiple: false,
                    excludeAcceptAllOption: false,
                    types: [{
                        description: 'SEESOUND Preset',
                        accept: { 'application/json': [PRESET_FILE_EXTENSION, '.json'] },
                    }],
                })
                if (!handle) return null
                const file = await handle.getFile()
                const text = await file.text()
                return parsePresetText(text, file.name)
            } catch {
                return null
            }
        }

        return new Promise((resolve) => {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = `${PRESET_FILE_EXTENSION},.json`
            input.style.display = 'none'
            input.addEventListener('change', async () => {
                try {
                    const file = input.files?.[0]
                    if (!file) {
                        resolve(null)
                        return
                    }
                    const text = await file.text()
                    resolve(parsePresetText(text, file.name))
                } catch {
                    resolve(null)
                } finally {
                    input.remove()
                }
            }, { once: true })
            document.body.appendChild(input)
            input.click()
        })
    }

    const projectNameFromFile = (rawName = '') => {
        const fileName = String(rawName || '').trim()
        if (!fileName) return ''
        if (/\.ssp\.json$/i.test(fileName)) return fileName.replace(/\.ssp\.json$/i, '')
        return fileName.replace(/\.[^./\\]+$/g, '')
    }

    const projectSection = el('section', 'cp-section')
    const projectTitleRow = el('div', 'cp-section-title-row')
    const projectTitle = el('h3', 'cp-section-title', { text: UI_TEXT.file.project })
    const projectNameLabel = el('span', 'cp-project-name')
    const defaultProjectLabel = UI_TEXT.file.projectNew || 'New Project'
    const updateProjectTitle = (detail = {}) => {
        const rawProjectName = String(detail?.projectName || '').trim()
        const rawFileName = String(detail?.fileName || '').trim()
        const shownName = rawProjectName || projectNameFromFile(rawFileName) || defaultProjectLabel
        projectNameLabel.textContent = shownName
        projectNameLabel.title = shownName
    }
    updateProjectTitle()
    projectTitleRow.append(projectTitle, projectNameLabel)
    projectSection.appendChild(projectTitleRow)
    const projectActions = el('div', 'cp-button-grid')
    const btnLoadProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectLoad })
    const btnSaveProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectSave })
    const btnSaveAsProject = el('button', 'cp-btn', { text: UI_TEXT.file.projectSaveAs })
    applyButtonIcon(btnLoadProject, BUTTON_ICON_MAP.load, UI_TEXT.file.projectLoad)
    applyButtonIcon(btnSaveProject, BUTTON_ICON_MAP.save, UI_TEXT.file.projectSave)
    applyButtonIcon(btnSaveAsProject, BUTTON_ICON_MAP.saveAs, UI_TEXT.file.projectSaveAs)
    projectActions.append(btnLoadProject, btnSaveProject, btnSaveAsProject)
    projectSection.appendChild(projectActions)

    btnLoadProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-open-request')))
    btnSaveProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-save-request')))
    btnSaveAsProject.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:project-save-as-request')))

    window.addEventListener('seesound:project-file-state', (e) => {
        updateProjectTitle(e?.detail || {})
    })
    window.addEventListener('seesound:project-loaded', (e) => {
        updateProjectTitle(e?.detail || {})
    })
    window.addEventListener('seesound:project-autosaved', (e) => {
        updateProjectTitle(e?.detail || {})
    })

    const presetsSection = el('section', 'cp-section cp-preset-bar')
    presetsSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.file.presets }))
    const presetRow = el('div', 'cp-preset-row')
    const presetSelect = el('select', 'cp-input-select cp-preset-sel')
    const presetName = el('input', 'cp-input-text cp-preset-name', { type: 'text', placeholder: UI_TEXT.file.presetNamePlaceholder })
    const btnLoadPreset = el('button', 'cp-btn', { text: UI_TEXT.file.presetLoad })
    const btnUploadPreset = el('button', 'cp-btn', { text: UI_TEXT.file.presetUpload || 'Upload' })
    const btnSavePresetProject = el('button', 'cp-btn', { text: UI_TEXT.file.presetSaveProject || UI_TEXT.file.presetSave })
    const btnSavePresetLocal = el('button', 'cp-btn', { text: UI_TEXT.file.presetSaveLocal || 'Save Local' })
    const btnDeletePreset = el('button', 'cp-btn cp-btn-danger', { text: UI_TEXT.file.presetRemove })
    applyButtonIcon(btnLoadPreset, BUTTON_ICON_MAP.load, UI_TEXT.file.presetLoad)
    applyButtonIcon(btnUploadPreset, BUTTON_ICON_MAP.upload, UI_TEXT.file.presetUpload || 'Upload')
    applyButtonIcon(btnSavePresetProject, BUTTON_ICON_MAP.save, UI_TEXT.file.presetSaveProject || UI_TEXT.file.presetSave)
    applyButtonIcon(btnSavePresetLocal, BUTTON_ICON_MAP.saveAs, UI_TEXT.file.presetSaveLocal || 'Save Local')
    applyButtonIcon(btnDeletePreset, BUTTON_ICON_MAP.remove, UI_TEXT.file.presetRemove)
    presetRow.append(presetSelect, btnLoadPreset, btnUploadPreset, btnDeletePreset, presetName, btnSavePresetProject, btnSavePresetLocal)
    presetsSection.appendChild(presetRow)

    async function refreshPresets() {
        const names = await listPresets()
        const selected = String(presetSelect.value || '')
        presetSelect.innerHTML = ''
        presetSelect.appendChild(el('option', '', { value: '', text: UI_TEXT.file.presetSelectPlaceholder }))
        for (const name of names) {
            presetSelect.appendChild(el('option', '', { value: name, text: name }))
        }
        if (selected && names.includes(selected)) presetSelect.value = selected
    }

    presetSelect.addEventListener('change', () => {
        if (presetSelect.value) presetName.value = presetSelect.value
    })

    btnLoadPreset.addEventListener('click', async () => {
        const name = String(presetSelect.value || '').trim()
        if (!name) return
        const data = await loadPreset(name)
        if (data?.params) setMany(data.params)
    })

    btnUploadPreset.addEventListener('click', async () => {
        const loaded = await openPresetFromLocalFile()
        if (!loaded?.params || typeof loaded.params !== 'object') return
        const nextName = String(loaded.name || '').trim()
        setMany(loaded.params)
        if (nextName) {
            await savePreset(nextName, loaded.params)
            await refreshPresets()
            presetSelect.value = nextName
            presetName.value = nextName
            window.dispatchEvent(new CustomEvent('seesound:preset-library-changed'))
        }
    })

    btnSavePresetProject.addEventListener('click', async () => {
        const typed = String(presetName.value || '').trim()
        const selected = String(presetSelect.value || '').trim()
        const name = typed || selected
        if (!name) return
        const snapshot = getSnapshot()
        window.dispatchEvent(new CustomEvent('seesound:project-preset-save-request', {
            detail: {
                name,
                params: snapshot,
            },
        }))
        await savePreset(name, snapshot)
        await refreshPresets()
        presetSelect.value = name
        presetName.value = name
        window.dispatchEvent(new CustomEvent('seesound:preset-library-changed'))
    })

    btnSavePresetLocal.addEventListener('click', async () => {
        const typed = String(presetName.value || '').trim()
        const selected = String(presetSelect.value || '').trim()
        const name = typed || selected
        if (!name) return
        const didSave = await savePresetToLocalFile(name, getSnapshot())
        if (!didSave) return
        presetName.value = name
    })

    btnDeletePreset.addEventListener('click', async () => {
        const name = String(presetSelect.value || '').trim()
        if (!name) return
        await deletePreset(name)
        presetName.value = ''
        await refreshPresets()
        window.dispatchEvent(new CustomEvent('seesound:preset-library-changed'))
    })

    window.addEventListener('seesound:preset-library-changed', () => {
        refreshPresets()
    })

    const exportSection = el('section', 'cp-section')
    exportSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.file.export }))
    const exportActions = el('div', 'cp-button-grid')
    const btnExportImage = el('button', 'cp-btn', { text: UI_TEXT.file.exportImage })
    const btnExportImageNoBg = el('button', 'cp-btn', { text: UI_TEXT.file.exportImageNoBg })
    const btnExportVideo = el('button', 'cp-btn', { text: UI_TEXT.file.exportVideo })
    const btnExportObj = el('button', 'cp-btn', { text: UI_TEXT.file.exportObj })
    applyButtonIcon(btnExportImage, BUTTON_ICON_MAP.exportImage, UI_TEXT.file.exportImage)
    applyButtonIcon(btnExportImageNoBg, BUTTON_ICON_MAP.exportImageNoBg, UI_TEXT.file.exportImageNoBg)
    applyButtonIcon(btnExportVideo, BUTTON_ICON_MAP.exportVideo, UI_TEXT.file.exportVideo)
    applyButtonIcon(btnExportObj, BUTTON_ICON_MAP.exportObj, UI_TEXT.file.exportObj)
    exportActions.append(btnExportImage, btnExportImageNoBg, btnExportVideo, btnExportObj)
    exportSection.appendChild(exportActions)

    btnExportImage.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:export-image')))
    btnExportImageNoBg.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:export-image-no-bg')))
    btnExportVideo.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:export-video-toggle')))
    btnExportObj.addEventListener('click', () => window.dispatchEvent(new CustomEvent('seesound:export-obj')))

    panel.append(projectSection, presetsSection, exportSection)
    body.appendChild(panel)

    refreshPresets()
}

function buildViewMenu(body, syncRegistry) {
    const panel = el('div', 'cp-menu-pane-inner')

    const canvasSection = el('section', 'cp-section')
    canvasSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.canvasSize }))

    const widthInput = el('input', 'cp-input-number', { type: 'number', min: 160, step: 1 })
    const heightInput = el('input', 'cp-input-number', { type: 'number', min: 120, step: 1 })
    const canvasRow = el('div', 'cp-inline-pair')
    canvasRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.width }),
        widthInput,
        el('label', 'cp-setting-label', { text: UI_TEXT.view.height }),
        heightInput,
    )
    canvasSection.appendChild(canvasRow)

    const zoomSlider = el('input', 'cp-input-range', { type: 'range', min: 5, max: 400, step: 1 })
    const zoomNumber = el('input', 'cp-input-number', { type: 'number', min: 5, max: 400, step: 1 })
    const zoomRow = el('div', 'cp-setting-row')
    const zoomLabelWrap = el('div', 'cp-setting-label-wrap')
    zoomLabelWrap.appendChild(el('label', 'cp-setting-label', { text: UI_TEXT.view.canvasZoom }))
    const zoomControls = el('div', 'cp-setting-controls')
    zoomControls.append(zoomSlider, zoomNumber)
    zoomRow.append(zoomLabelWrap, zoomControls)
    canvasSection.appendChild(zoomRow)

    const backgroundSection = el('section', 'cp-section')
    backgroundSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.backgroundColor }))
    const bgColorInput = el('input', 'cp-input-color', { type: 'color' })
    backgroundSection.appendChild(bgColorInput)

    const cameraSection = el('section', 'cp-section')
    cameraSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.cameraPosition }))
    const camPosX = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camPosY = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camPosZ = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const posRow = el('div', 'cp-inline-triplet')
    posRow.append(camPosX, camPosY, camPosZ)
    cameraSection.appendChild(posRow)

    cameraSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.cameraTarget }))
    const camTargetX = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camTargetY = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const camTargetZ = el('input', 'cp-input-number', { type: 'number', step: 1 })
    const targetRow = el('div', 'cp-inline-triplet')
    targetRow.append(camTargetX, camTargetY, camTargetZ)
    cameraSection.appendChild(targetRow)

    const cameraActions = el('div', 'cp-button-grid')
    const btnResetCamera = el('button', 'cp-btn', { text: UI_TEXT.view.cameraReset })
    const btnFitCamera = el('button', 'cp-btn', { text: UI_TEXT.view.cameraFit })
    const btnCleanCanvas = el('button', 'cp-btn', { text: UI_TEXT.view.cameraClean })
    applyButtonIcon(btnResetCamera, BUTTON_ICON_MAP.reset, UI_TEXT.view.cameraReset)
    applyButtonIcon(btnFitCamera, BUTTON_ICON_MAP.fit, UI_TEXT.view.cameraFit)
    applyButtonIcon(btnCleanCanvas, BUTTON_ICON_MAP.clean, UI_TEXT.view.cameraClean)
    cameraActions.append(btnResetCamera, btnFitCamera, btnCleanCanvas)
    cameraSection.appendChild(cameraActions)

    const projectionSection = el('section', 'cp-section')
    projectionSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.projection }))

    const projectionSelect = el('select', 'cp-input-select')
    projectionSelect.appendChild(createSelectOptions([
        { value: 'axonometric', label: UI_TEXT.view.projectionAxo },
        { value: 'perspective', label: UI_TEXT.view.projectionPerspective },
    ], params.cameraProjection))

    const axoSelect = el('select', 'cp-input-select')
    axoSelect.appendChild(createSelectOptions([
        { value: 'orthoXY', label: UI_TEXT.view.axoOrthoXY },
        { value: 'topXZ', label: UI_TEXT.view.axoOrthoXZ },
        { value: 'orthoYZ', label: UI_TEXT.view.axoOrthoYZ },
        { value: 'isometric', label: UI_TEXT.view.axoIsometric },
    ], params.cameraAxoPreset))

    projectionSection.append(projectionSelect, axoSelect)

    const fovSection = el('section', 'cp-section')
    fovSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.angleOfView }))
    const fovSlider = el('input', 'cp-input-range', { type: 'range', min: 20, max: 120, step: 1 })
    const fovNumber = el('input', 'cp-input-number', { type: 'number', min: 20, max: 120, step: 1 })
    const fovRow = el('div', 'cp-setting-controls')
    fovRow.append(fovSlider, fovNumber)
    fovSection.appendChild(fovRow)

    const blendingSection = el('section', 'cp-section')
    blendingSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.blending }))
    const blendSelect = el('select', 'cp-input-select')
    blendSelect.appendChild(createSelectOptions([
        { value: 'source-over', label: 'Normal' },
        { value: 'screen', label: 'Screen' },
        { value: 'alpha', label: 'Alpha' },
        { value: 'multiply', label: 'Multiply' },
    ], params.blendMode))
    blendingSection.appendChild(blendSelect)

    const postSection = el('section', 'cp-section')
    postSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.postProcessing }))

    const postEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const bloomEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const bokehEnabled = el('input', 'cp-input-toggle', { type: 'checkbox' })

    const postEnabledRow = el('label', 'cp-toggle-row')
    postEnabledRow.append(postEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.postProcessingEnabled }))
    const bloomEnabledRow = el('label', 'cp-toggle-row')
    bloomEnabledRow.append(bloomEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.bloomEnabled }))
    const bokehEnabledRow = el('label', 'cp-toggle-row')
    bokehEnabledRow.append(bokehEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.bokehEnabled }))

    const bloomStrengthSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 4, step: 0.01 })
    const bloomStrengthNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 4, step: 0.01 })
    const bloomStrengthRow = el('div', 'cp-setting-row')
    bloomStrengthRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomStrength }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomStrengthSlider, bloomStrengthNumber)
            return controls
        })(),
    )

    const bloomRadiusSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 2, step: 0.01 })
    const bloomRadiusNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 2, step: 0.01 })
    const bloomRadiusRow = el('div', 'cp-setting-row')
    bloomRadiusRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomRadius }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomRadiusSlider, bloomRadiusNumber)
            return controls
        })(),
    )

    const bloomThresholdSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 1, step: 0.01 })
    const bloomThresholdNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 1, step: 0.01 })
    const bloomThresholdRow = el('div', 'cp-setting-row')
    bloomThresholdRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bloomThreshold }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bloomThresholdSlider, bloomThresholdNumber)
            return controls
        })(),
    )

    const bokehFocusSlider = el('input', 'cp-input-range', { type: 'range', min: 1, max: 5000, step: 1 })
    const bokehFocusNumber = el('input', 'cp-input-number', { type: 'number', min: 1, max: 5000, step: 1 })
    const bokehFocusRow = el('div', 'cp-setting-row')
    bokehFocusRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bokehFocus }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bokehFocusSlider, bokehFocusNumber)
            return controls
        })(),
    )

    const bokehApertureSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 0.001, step: 0.00001 })
    const bokehApertureNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 0.001, step: 0.00001 })
    const bokehApertureRow = el('div', 'cp-setting-row')
    bokehApertureRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bokehAperture }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bokehApertureSlider, bokehApertureNumber)
            return controls
        })(),
    )

    const bokehMaxBlurSlider = el('input', 'cp-input-range', { type: 'range', min: 0, max: 0.1, step: 0.0005 })
    const bokehMaxBlurNumber = el('input', 'cp-input-number', { type: 'number', min: 0, max: 0.1, step: 0.0005 })
    const bokehMaxBlurRow = el('div', 'cp-setting-row')
    bokehMaxBlurRow.append(
        el('label', 'cp-setting-label', { text: UI_TEXT.view.bokehMaxBlur }),
        (() => {
            const controls = el('div', 'cp-setting-controls')
            controls.append(bokehMaxBlurSlider, bokehMaxBlurNumber)
            return controls
        })(),
    )

    postSection.append(
        postEnabledRow,
        bloomEnabledRow,
        bloomStrengthRow,
        bloomRadiusRow,
        bloomThresholdRow,
        bokehEnabledRow,
        bokehFocusRow,
        bokehApertureRow,
        bokehMaxBlurRow,
    )

    const guideSection = el('section', 'cp-section')
    guideSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.guides }))
    const originToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const guideToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })

    const originRow = el('label', 'cp-inline-pair')
    originRow.append(originToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.guideAxes }))
    const guideRow = el('label', 'cp-inline-pair')
    guideRow.append(guideToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.guideCoordinates }))
    guideSection.append(originRow, guideRow)

    widthInput.addEventListener('change', () => {
        const w = Math.max(160, Math.floor(Number(widthInput.value) || 160))
        set('canvasWidth', w)
    })
    heightInput.addEventListener('change', () => {
        const h = Math.max(120, Math.floor(Number(heightInput.value) || 120))
        set('canvasHeight', h)
    })

    const applyCanvasZoom = (raw) => {
        const value = clamp(raw, 5, 400)
        set('canvasScale', Math.floor(value))
    }
    zoomSlider.addEventListener('input', () => applyCanvasZoom(Number(zoomSlider.value)))
    zoomNumber.addEventListener('change', () => applyCanvasZoom(Number(zoomNumber.value)))

    bgColorInput.addEventListener('input', () => {
        const hsl = hexToHsl(bgColorInput.value)
        setMany({
            defaultBackgroundHue: Math.round(hsl.h),
            defaultBackgroundSaturation: Math.round(hsl.s),
            defaultBackgroundLightness: Math.round(hsl.l),
        })
    })

    const syncCameraNumbers = () => {
        camPosX.value = String(Number(params.cameraPosX ?? 0))
        camPosY.value = String(Number(params.cameraPosY ?? 0))
        camPosZ.value = String(Number(params.cameraPosZ ?? 420))
        camTargetX.value = String(Number(params.cameraTargetX ?? 0))
        camTargetY.value = String(Number(params.cameraTargetY ?? 0))
        camTargetZ.value = String(Number(params.cameraTargetZ ?? 0))
    }

    const applyCameraNumbers = () => {
        setMany({
            cameraPosX: Number(camPosX.value) || 0,
            cameraPosY: Number(camPosY.value) || 0,
            cameraPosZ: Number(camPosZ.value) || 0,
            cameraTargetX: Number(camTargetX.value) || 0,
            cameraTargetY: Number(camTargetY.value) || 0,
            cameraTargetZ: Number(camTargetZ.value) || 0,
        })
    }

    for (const input of [camPosX, camPosY, camPosZ, camTargetX, camTargetY, camTargetZ]) {
        input.addEventListener('change', applyCameraNumbers)
    }

    btnResetCamera.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-reset-camera'))
    })

    btnFitCamera.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-fit-camera'))
    })

    btnCleanCanvas.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('seesound:view-clean-canvas'))
    })

    projectionSelect.addEventListener('change', () => set('cameraProjection', projectionSelect.value))
    axoSelect.addEventListener('change', () => set('cameraAxoPreset', axoSelect.value))
    blendSelect.addEventListener('change', () => set('blendMode', blendSelect.value))

    postEnabled.addEventListener('change', () => set('postProcessEnabled', postEnabled.checked ? 1 : 0))
    bloomEnabled.addEventListener('change', () => set('bloomEnabled', bloomEnabled.checked ? 1 : 0))
    bokehEnabled.addEventListener('change', () => set('bokehEnabled', bokehEnabled.checked ? 1 : 0))

    const bindSliderAndNumber = ({ slider, number, key, min, max }) => {
        const apply = (raw) => {
            const value = clamp(raw, min, max)
            set(key, value)
        }
        slider.addEventListener('input', () => apply(Number(slider.value)))
        number.addEventListener('change', () => apply(Number(number.value)))
    }

    bindSliderAndNumber({ slider: bloomStrengthSlider, number: bloomStrengthNumber, key: 'bloomStrength', min: 0, max: 4 })
    bindSliderAndNumber({ slider: bloomRadiusSlider, number: bloomRadiusNumber, key: 'bloomRadius', min: 0, max: 2 })
    bindSliderAndNumber({ slider: bloomThresholdSlider, number: bloomThresholdNumber, key: 'bloomThreshold', min: 0, max: 1 })
    bindSliderAndNumber({ slider: bokehFocusSlider, number: bokehFocusNumber, key: 'bokehFocus', min: 1, max: 5000 })
    bindSliderAndNumber({ slider: bokehApertureSlider, number: bokehApertureNumber, key: 'bokehAperture', min: 0, max: 0.001 })
    bindSliderAndNumber({ slider: bokehMaxBlurSlider, number: bokehMaxBlurNumber, key: 'bokehMaxBlur', min: 0, max: 0.1 })

    const applyFov = (value) => {
        set('cameraAngleOfView', clamp(value, 20, 120))
    }

    fovSlider.addEventListener('input', () => applyFov(Number(fovSlider.value)))
    fovNumber.addEventListener('change', () => applyFov(Number(fovNumber.value)))

    originToggle.addEventListener('change', () => {
        set('originSignEnabled', originToggle.checked ? 1 : 0)
    })
    guideToggle.addEventListener('change', () => {
        set('coordinateGuidesEnabled', guideToggle.checked ? 1 : 0)
    })

    window.addEventListener('seesound:origin-sign-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') originToggle.checked = enabled
    })

    window.addEventListener('seesound:coordinate-guide-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') guideToggle.checked = enabled
    })

    const syncCanvasSize = () => {
        widthInput.value = String(Number(params.canvasWidth ?? 0) || 0)
        heightInput.value = String(Number(params.canvasHeight ?? 0) || 0)
    }

    const syncCanvasZoom = () => {
        const zoomPct = Math.max(5, Math.min(400, Math.floor(Number(params.canvasScale) || 100)))
        zoomSlider.value = String(zoomPct)
        zoomNumber.value = String(zoomPct)
    }

    const syncBackgroundColor = () => {
        const rgb = hslToRgb(
            Number(params.defaultBackgroundHue ?? 0),
            Number(params.defaultBackgroundSaturation ?? 0),
            Number(params.defaultBackgroundLightness ?? 0),
        )
        bgColorInput.value = rgbToHex(rgb.r, rgb.g, rgb.b)
    }

    const syncProjectionControls = () => {
        projectionSelect.value = String(params.cameraProjection || 'axonometric')
        axoSelect.value = String(params.cameraAxoPreset || 'orthoXY')
        const perspectiveActive = projectionSelect.value === 'perspective'
        fovSection.style.display = perspectiveActive ? '' : 'none'
    }

    const syncBlendMode = () => {
        blendSelect.value = String(params.blendMode || 'screen')
    }

    const syncFov = () => {
        const fov = Number(params.cameraAngleOfView ?? 55)
        fovSlider.value = String(fov)
        fovNumber.value = String(fov)
    }

    const syncPostEnabled = () => {
        postEnabled.checked = Number(params.postProcessEnabled ?? 0) >= 0.5
        bloomEnabled.checked = Number(params.bloomEnabled ?? 1) >= 0.5
        bokehEnabled.checked = Number(params.bokehEnabled ?? 1) >= 0.5
    }

    const syncGuideToggles = () => {
        originToggle.checked = Number(params.originSignEnabled ?? 1) >= 0.5
        guideToggle.checked = Number(params.coordinateGuidesEnabled ?? 0) >= 0.5
    }

    const syncBloomStrength = () => {
        const bloomStrength = Number(params.bloomStrength ?? 1.15)
        bloomStrengthSlider.value = String(bloomStrength)
        bloomStrengthNumber.value = String(bloomStrength)
    }

    const syncBloomRadius = () => {
        const bloomRadius = Number(params.bloomRadius ?? 0.7)
        bloomRadiusSlider.value = String(bloomRadius)
        bloomRadiusNumber.value = String(bloomRadius)
    }

    const syncBloomThreshold = () => {
        const bloomThreshold = Number(params.bloomThreshold ?? 0.18)
        bloomThresholdSlider.value = String(bloomThreshold)
        bloomThresholdNumber.value = String(bloomThreshold)
    }

    const syncBokehFocus = () => {
        const bokehFocus = Number(params.bokehFocus ?? 380)
        bokehFocusSlider.value = String(bokehFocus)
        bokehFocusNumber.value = String(bokehFocus)
    }

    const syncBokehAperture = () => {
        const bokehAperture = Number(params.bokehAperture ?? 0.00012)
        bokehApertureSlider.value = String(bokehAperture)
        bokehApertureNumber.value = String(bokehAperture)
    }

    const syncBokehMaxBlur = () => {
        const bokehMaxBlur = Number(params.bokehMaxBlur ?? 0.01)
        bokehMaxBlurSlider.value = String(bokehMaxBlur)
        bokehMaxBlurNumber.value = String(bokehMaxBlur)
    }

    const syncCameraFields = () => {
        syncCameraNumbers()
    }

    registerSync(syncRegistry, syncCanvasSize, ['canvasWidth', 'canvasHeight'])
    registerSync(syncRegistry, syncCanvasZoom, ['canvasScale'])
    registerSync(syncRegistry, syncBackgroundColor, ['defaultBackgroundHue', 'defaultBackgroundSaturation', 'defaultBackgroundLightness'])
    registerSync(syncRegistry, syncProjectionControls, ['cameraProjection', 'cameraAxoPreset'])
    registerSync(syncRegistry, syncBlendMode, ['blendMode'])
    registerSync(syncRegistry, syncFov, ['cameraAngleOfView'])
    registerSync(syncRegistry, syncPostEnabled, ['postProcessEnabled', 'bloomEnabled', 'bokehEnabled'])
    registerSync(syncRegistry, syncGuideToggles, ['originSignEnabled', 'coordinateGuidesEnabled'])
    registerSync(syncRegistry, syncBloomStrength, ['bloomStrength'])
    registerSync(syncRegistry, syncBloomRadius, ['bloomRadius'])
    registerSync(syncRegistry, syncBloomThreshold, ['bloomThreshold'])
    registerSync(syncRegistry, syncBokehFocus, ['bokehFocus'])
    registerSync(syncRegistry, syncBokehAperture, ['bokehAperture'])
    registerSync(syncRegistry, syncBokehMaxBlur, ['bokehMaxBlur'])
    registerSync(syncRegistry, syncCameraFields, ['cameraPosX', 'cameraPosY', 'cameraPosZ', 'cameraTargetX', 'cameraTargetY', 'cameraTargetZ'])

    window.addEventListener('seesound:camera-state', (event) => {
        const detail = event?.detail || {}
        const px = Number(detail.position?.x)
        const py = Number(detail.position?.y)
        const pz = Number(detail.position?.z)
        const tx = Number(detail.target?.x)
        const ty = Number(detail.target?.y)
        const tz = Number(detail.target?.z)
        const fov = Number(detail.fov)
        const projection = String(detail.projection || '')
        if (Number.isFinite(px)) camPosX.value = String(px)
        if (Number.isFinite(py)) camPosY.value = String(py)
        if (Number.isFinite(pz)) camPosZ.value = String(pz)
        if (Number.isFinite(tx)) camTargetX.value = String(tx)
        if (Number.isFinite(ty)) camTargetY.value = String(ty)
        if (Number.isFinite(tz)) camTargetZ.value = String(tz)
        if (Number.isFinite(fov)) {
            fovSlider.value = String(fov)
            fovNumber.value = String(fov)
        }
        if (projection === 'perspective' || projection === 'axonometric') {
            projectionSelect.value = projection
            fovSection.style.display = projection === 'perspective' ? '' : 'none'
        }
    })

    syncCanvasSize()
    syncCanvasZoom()
    syncBackgroundColor()
    syncProjectionControls()
    syncBlendMode()
    syncFov()
    syncPostEnabled()
    syncGuideToggles()
    syncBloomStrength()
    syncBloomRadius()
    syncBloomThreshold()
    syncBokehFocus()
    syncBokehAperture()
    syncBokehMaxBlur()
    syncCameraFields()

    panel.append(canvasSection, backgroundSection, cameraSection, projectionSection, fovSection, blendingSection, postSection, guideSection)
    body.appendChild(panel)
}

function buildSettingsMenu(body, syncRegistry) {
    const panel = el('div', 'cp-menu-pane-inner')

    const sliderSection = el('section', 'cp-section')
    sliderSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.sliders }))

    const resolutionRow = el('div', 'cp-setting-row')
    const resolutionLabelWrap = el('div', 'cp-setting-label-wrap')
    resolutionLabelWrap.appendChild(el('label', 'cp-setting-label', {
        text: UI_TEXT.settings.audioResolution,
        title: 'Technical term: FFT Size. Frequency-domain analysis resolution.',
    }))
    const resolutionSelect = el('select', 'cp-input-select')
    resolutionSelect.appendChild(createSelectOptions(
        FFT_OPTIONS.map((value) => ({ value, label: String(value) })),
        params.fftSize,
    ))
    resolutionSelect.addEventListener('change', () => {
        set('fftSize', Number(resolutionSelect.value))
    })
    resolutionRow.append(resolutionLabelWrap, resolutionSelect)
    sliderSection.appendChild(resolutionRow)

    for (const definition of SETTINGS_SLIDERS) {
        sliderSection.appendChild(createSliderControl(definition, syncRegistry))
    }

    const resetButton = el('button', 'cp-btn cp-btn-wide', { text: UI_TEXT.settings.resetDefaults })
    applyButtonIcon(resetButton, BUTTON_ICON_MAP.reset, UI_TEXT.settings.resetDefaults)
    resetButton.addEventListener('click', () => {
        resetToDefaults()
    })
    sliderSection.appendChild(resetButton)

    const rangeSection = el('section', 'cp-section')
    rangeSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.normalizationRanges }))
    for (const definition of SETTINGS_RANGES) {
        rangeSection.appendChild(createRangePairControl(definition, syncRegistry))
    }

    const syncResolution = () => {
        resolutionSelect.value = String(params.fftSize || 2048)
    }
    registerSync(syncRegistry, syncResolution, ['fftSize'])
    syncResolution()

    panel.append(sliderSection, rangeSection)
    body.appendChild(panel)
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

    const expression = rowState.definition.type === 'enum'
        ? ''
        : compileTokens(rowState.tokens)
    if (rowState.definition.type !== 'enum' && hasUnresolvedSlots(rowState.tokens)) return null
    rowState.expression = expression

    const text = String(expression || '').trim()
    if (!text) return null

    const numeric = Number(text)
    if (Number.isFinite(numeric) && /^[-+]?\d+(\.\d+)?$/.test(text)) {
        return {
            operator: 'set',
            output,
            value: numeric,
        }
    }

    if (RULE_VARIABLE_ID_SET.has(text)) {
        return {
            operator: 'set',
            output,
            input: text,
        }
    }

    return {
        operator: 'set',
        output,
        expression: text,
    }
}

function buildRulesMenu(body, syncRegistry) {
    const panel = el('div', 'cp-menu-pane-inner')
    const wrapper = el('div', 'cp-rules-wrapper')
    panel.appendChild(wrapper)

    const rowsByKey = new Map()
    const orderedRows = []

    function rowKey(target, output) {
        return `${target}:${output}`
    }

    function syncColorMode(target, changedOutput = '') {
        const rgbRows = [
            rowsByKey.get(rowKey(target, 'red')),
            rowsByKey.get(rowKey(target, 'green')),
            rowsByKey.get(rowKey(target, 'blue')),
        ].filter(Boolean)
        const hueRow = rowsByKey.get(rowKey(target, 'hue'))
        if (!hueRow || rgbRows.length === 0) return

        if (changedOutput === 'red' || changedOutput === 'green' || changedOutput === 'blue') {
            const changed = rowsByKey.get(rowKey(target, changedOutput))
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
            if (row.card) row.card.classList.toggle('is-disabled', !row.enabled)
        }
        if (hueRow.toggle) hueRow.toggle.checked = hueRow.enabled
        if (hueRow.card) hueRow.card.classList.toggle('is-disabled', !hueRow.enabled)
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

        const nextBlocks = []
        for (let i = 0; i < orderedRows.length; i++) {
            const rowState = orderedRows[i]
            const action = toActionFromState(rowState)
            if (!action) continue

            nextBlocks.push({
                id: `${rowState.definition.target}-${rowState.definition.output}`,
                group: `${rowState.definition.section}/${rowState.definition.subgroup}`,
                subgroup: '',
                enabled: !!rowState.enabled,
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
            for (const rowState of orderedRows) {
                rowState.enabled = false
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
            }

            const safeBlocks = Array.isArray(blocks) ? blocks : []
            for (const rule of safeBlocks) {
                const target = String(rule?.target || '')
                const action = Array.isArray(rule?.actions) ? rule.actions[0] : null
                const output = String(action?.output || '')
                const key = rowKey(target, output)
                const rowState = rowsByKey.get(key)
                if (!rowState) continue

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
                if (rowState.card) rowState.card.classList.toggle('is-disabled', !rowState.enabled)
                rowState.syncConditionUi?.()
                if (rowState.enumSelect) rowState.enumSelect.value = rowState.enumValue
                renderTokenEditor(rowState)
            }
        } finally {
            syncingFromParamStore = false
        }
    }

    let currentSection = ''
    let currentSubgroup = ''

    for (const definition of FIXED_RULE_ROWS) {
        if (definition.section !== currentSection) {
            currentSection = definition.section
            currentSubgroup = ''
            wrapper.appendChild(el('h3', 'cp-section-title cp-rule-section-title', { text: currentSection }))
        }

        if (definition.subgroup !== currentSubgroup) {
            currentSubgroup = definition.subgroup
            wrapper.appendChild(el('h4', 'cp-rule-subgroup-title', { text: currentSubgroup }))
        }

        const rowState = {
            definition,
            enabled: false,
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
            onExpressionChanged: null,
            enumSelect: null,
            actionSelect: null,
        }

        const card = el('article', 'cp-rule-card')
        const header = el('div', 'cp-rule-card-header')
        const toggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
        const title = el('div', 'cp-rule-card-title', { text: definition.label })
        header.append(toggle, title)

        const conditionRow = el('div', 'cp-rule-card-condition-builder')
        const addConditionButton = el('button', 'cp-btn cp-rule-condition-add', { type: 'button', text: UI_TEXT.rules.addCondition })
        applyButtonIcon(addConditionButton, BUTTON_ICON_MAP.add, UI_TEXT.rules.addCondition)

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
        conditionSentence.append(whenLabel, conditionInputSelect, conditionOperatorSelect, conditionValueInput, conditionValueInputSelect, removeConditionButton)
        conditionRow.append(addConditionButton, conditionSentence)

        const expressionRow = el('div', 'cp-rule-card-expression')
        let enumSelect = null
        let tokenEditor = null
        let actionSelect = null

        if (definition.type === 'enum') {
            enumSelect = el('select', 'cp-input-select')
            enumSelect.appendChild(createSelectOptions(
                definition.options.map((option) => ({ value: option, label: option })),
                rowState.enumValue,
            ))
            expressionRow.appendChild(enumSelect)
        } else {
            const tokenRow = el('div', 'cp-rule-token-row')
            const valueActionSelect = createRuleTokenValueSelect('')
            actionSelect = createRuleTokenMathSelect('')

            tokenEditor = el('div', 'cp-rule-token-editor', { role: 'list', tabindex: '0' })

            tokenRow.append(valueActionSelect, actionSelect)
            expressionRow.append(tokenRow, tokenEditor)

            const commitExpression = () => {
                rowState.expression = compileTokens(rowState.tokens)

                if (definition.output === 'red' || definition.output === 'green' || definition.output === 'blue') {
                    syncColorMode(definition.target, definition.output)
                }
                if (definition.output === 'hue') {
                    syncColorMode(definition.target, 'hue')
                }

                if (rowState.enabled && !String(rowState.expression || '').trim()) {
                    rowState.enabled = false
                    if (rowState.toggle) rowState.toggle.checked = false
                    if (rowState.card) rowState.card.classList.toggle('is-disabled', !rowState.enabled)
                    commitRuleBlocks()
                    return
                }

                commitRowIfReady(rowState)
            }

            rowState.onExpressionChanged = commitExpression

            const insertSelection = (selected, control) => {
                const next = tokensForInsertSelection(selected)
                if (!next.length) return
                const insertIndex = Number.isInteger(rowState.pendingInsertIndex)
                    ? rowState.pendingInsertIndex
                    : rowState.tokens.length
                rowState.tokens.splice(insertIndex, 0, ...next)
                rowState.pendingInsertIndex = null
                if (control) control.value = ''
                renderTokenEditor(rowState)
                commitExpression()
            }

            valueActionSelect.addEventListener('change', () => {
                insertSelection(String(valueActionSelect.value || ''), valueActionSelect)
            })

            actionSelect.addEventListener('change', () => {
                insertSelection(String(actionSelect.value || ''), actionSelect)
            })
        }

        card.append(header, conditionRow, expressionRow)
        wrapper.appendChild(card)

        rowState.toggle = toggle
        rowState.card = card
        rowState.conditionRow = conditionRow
        rowState.tokenEditor = tokenEditor
        rowState.enumSelect = enumSelect
        rowState.actionSelect = actionSelect
        card.classList.toggle('is-disabled', !rowState.enabled)

        rowState.syncConditionUi = () => {
            addConditionButton.style.display = rowState.conditionEnabled ? 'none' : ''
            conditionSentence.style.display = rowState.conditionEnabled ? '' : 'none'
            if (!rowState.conditionEnabled) return
            conditionOperatorSelect.value = rowState.conditionOperator === 'always' ? '>' : rowState.conditionOperator
            const activeInput = rowState.conditionDetail !== NONE_VAR ? rowState.conditionDetail : rowState.conditionOverall
            conditionInputSelect.value = activeInput || NONE_VAR
            conditionValueInput.value = String(Number(rowState.conditionValue || 0))
            conditionValueInputSelect.value = rowState.conditionValueInput || NONE_VAR
        }
        rowState.syncConditionUi()

        rowsByKey.set(rowKey(definition.target, definition.output), rowState)
        orderedRows.push(rowState)

        toggle.addEventListener('change', () => {
            rowState.enabled = toggle.checked
            if (rowState.card) rowState.card.classList.toggle('is-disabled', !rowState.enabled)
            if (definition.output === 'red' || definition.output === 'green' || definition.output === 'blue') {
                syncColorMode(definition.target, definition.output)
            }
            if (definition.output === 'hue') {
                syncColorMode(definition.target, 'hue')
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

function createMenuButton(item) {
    const button = el('button', 'cp-menu-button', {
        type: 'button',
        'data-menu-id': item.id,
        'aria-label': item.label,
        title: item.label,
    })
    const icon = el('span', 'cp-menu-icon', { html: getMenuIconSvg(item.id) })
    const label = el('span', 'cp-menu-label', { text: item.label })
    button.append(icon, label)
    return button
}

function createMenuPane(item) {
    const pane = el('section', 'cp-menu-pane', { 'data-menu-id': item.id })
    const header = el('div', 'cp-menu-pane-header')
    header.appendChild(el('h2', 'cp-menu-pane-title', { text: item.label }))
    const closeButton = el('button', 'cp-btn cp-menu-collapse', { type: 'button', text: UI_TEXT.menu.collapse })
    applyButtonIcon(closeButton, BUTTON_ICON_MAP.close, UI_TEXT.menu.collapse)
    header.appendChild(closeButton)

    const body = el('div', 'cp-menu-pane-body')
    pane.append(header, body)
    return { pane, body, closeButton }
}

export function initControlPanel(container) {
    if (!container) return

    container.innerHTML = ''
    container.className = ''
    container.classList.add('cp-shell')

    const shell = el('div', 'cp-shell-root')
    const rail = el('nav', 'cp-menu-rail')
    const stack = el('div', 'cp-menu-stack')

    const syncRegistry = createSyncRegistry()
    const menuButtons = new Map()
    const menuPanes = new Map()

    for (const item of MENU_ITEMS) {
        const button = createMenuButton(item)
        menuButtons.set(item.id, button)
        rail.appendChild(button)

        const paneParts = createMenuPane(item)
        menuPanes.set(item.id, paneParts)
        stack.appendChild(paneParts.pane)
    }

    shell.append(rail, stack)
    container.appendChild(shell)

    buildFileMenu(menuPanes.get('file').body)
    buildViewMenu(menuPanes.get('view').body, syncRegistry)
    buildSettingsMenu(menuPanes.get('settings').body, syncRegistry)
    buildRulesMenu(menuPanes.get('rules').body, syncRegistry)

    let pinnedMenuId = null
    let hoverMenuId = 'settings'
    let pointerInRail = false
    let pointerInPane = false
    let autoCollapseTimer = null

    const clearAutoCollapseTimer = () => {
        if (autoCollapseTimer !== null) {
            window.clearTimeout(autoCollapseTimer)
            autoCollapseTimer = null
        }
    }

    const scheduleAutoCollapse = () => {
        clearAutoCollapseTimer()
        if (pinnedMenuId || pointerInRail || pointerInPane) return
        autoCollapseTimer = window.setTimeout(() => {
            autoCollapseTimer = null
            if (pinnedMenuId || pointerInRail || pointerInPane) return
            hoverMenuId = null
            renderMenuState()
        }, 100)
    }

    function expandedMenuId() {
        if (pinnedMenuId) return pinnedMenuId
        if (pointerInRail || pointerInPane) return hoverMenuId
        return null
    }

    function renderMenuState() {
        const expanded = expandedMenuId()

        for (const [menuId, button] of menuButtons.entries()) {
            const active = expanded === menuId
            const pinned = pinnedMenuId === menuId
            button.classList.toggle('is-active', active)
            button.classList.toggle('is-pinned', pinned)
            button.setAttribute('aria-expanded', active ? 'true' : 'false')
        }

        for (const [menuId, paneParts] of menuPanes.entries()) {
            const active = expanded === menuId
            paneParts.pane.classList.toggle('is-active', active)
        }

        container.classList.toggle('is-open', !!expanded)
    }

    rail.addEventListener('mouseenter', () => {
        clearAutoCollapseTimer()
        pointerInRail = true
        renderMenuState()
    })

    rail.addEventListener('mouseleave', () => {
        pointerInRail = false
        scheduleAutoCollapse()
    })

    for (const item of MENU_ITEMS) {
        const button = menuButtons.get(item.id)
        const paneParts = menuPanes.get(item.id)

        button.addEventListener('mouseenter', () => {
            clearAutoCollapseTimer()
            hoverMenuId = item.id
            renderMenuState()
        })

        button.addEventListener('click', () => {
            const expanded = expandedMenuId()
            if (expanded === item.id) {
                pinnedMenuId = null
                hoverMenuId = null
            } else {
                pinnedMenuId = item.id
                hoverMenuId = item.id
            }
            renderMenuState()
        })

        paneParts.pane.addEventListener('mouseenter', () => {
            clearAutoCollapseTimer()
            pointerInPane = true
            hoverMenuId = item.id
            renderMenuState()
        })

        paneParts.pane.addEventListener('mouseleave', () => {
            pointerInPane = false
            scheduleAutoCollapse()
        })

        paneParts.closeButton.addEventListener('click', () => {
            pinnedMenuId = null
            hoverMenuId = null
            renderMenuState()
        })
    }

    const syncAll = () => {
        runSyncCallbacks(collectSyncCallbacks(syncRegistry, [], true))
    }

    const syncByKeys = (keys) => {
        const callbacks = collectSyncCallbacks(syncRegistry, keys, false)
        if (!callbacks.length) return
        runSyncCallbacks(callbacks)
    }

    subscribe((_, key, value) => {
        if (!key) {
            syncAll()
            return
        }
        if (key === '*') {
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                // setMany already emits per-key notifications before '*'.
                return
            }
            syncAll()
            return
        }
        syncByKeys([key])
    })

    hoverMenuId = 'settings'
    renderMenuState()
    syncAll()
}
