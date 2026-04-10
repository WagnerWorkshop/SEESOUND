import {
    params,
    set,
    setMany,
    subscribe,
    canUndo,
    canRedo,
    undo,
    redo,
    resetToDefaults,
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
import conditionIcon from '../icons/condition.svg?raw'
import clearIcon from '../icons/clear.svg?raw'
import resetIcon from '../icons/reset.svg?raw'
import fitIcon from '../icons/fit.svg?raw'
import copyIcon from '../icons/copy.svg?raw'
import undoIcon from '../icons/undo.svg?raw'
import redoIcon from '../icons/redo.svg?raw'


const NONE_VAR = '__none__'
const RULE_OPERATORS = Object.freeze(['always', '>', '>=', '<', '<=', '==', '!='])

const MENU_ITEMS = Object.freeze([
    { id: 'start', label: UI_TEXT.menu.start || UI_TEXT.menu.file },
    { id: 'view', label: UI_TEXT.menu.view },
    { id: 'settings', label: UI_TEXT.menu.settings },
    { id: 'rules', label: UI_TEXT.menu.rules },
])

const FFT_OPTIONS = Object.freeze([512, 1024, 2048, 4096, 8192, 16384])

function getSettingsTooltip(key, fallback = '') {
    const value = UI_TEXT?.settings?.tooltips?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
}

const SETTINGS_SLIDERS = Object.freeze([
    {
        key: 'inputGain',
        label: UI_TEXT.settings.sensitivity,
        min: 0,
        max: 3,
        step: 0.01,
        tooltip: getSettingsTooltip('inputGain', 'Technical term: Input Gain. Scales all amplitude before analysis.'),
    },
    {
        key: 'defaultParticleSize',
        label: UI_TEXT.settings.particleDefaultSize,
        min: 1,
        max: 40,
        step: 0.5,
        tooltip: getSettingsTooltip('defaultParticleSize', 'Technical term: Default Size. Base object size before rule outputs.'),
    },
    {
        key: 'maxParticles',
        label: UI_TEXT.settings.particleCapacity,
        min: 100000,
        max: 5000000,
        step: 50000,
        tooltip: getSettingsTooltip('maxParticles', 'Technical term: Capacity. Total GPU object slots.'),
    },
    {
        key: 'particlesByFrame',
        label: UI_TEXT.settings.spawnRate,
        min: 100,
        max: 5000,
        step: 1,
        tooltip: getSettingsTooltip('particlesByFrame', 'Technical term: Objects By Frame. Number of log-frequency spawn buckets shared by light particles and lines.'),
    },
    {
        key: 'fluxWindowFrames',
        label: UI_TEXT.settings.activityInterval,
        min: 1,
        max: 64,
        step: 1,
        tooltip: getSettingsTooltip('fluxWindowFrames', 'Technical term: Flux Window Frames. Rolling frame window for activity averaging.'),
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
        tooltip: getSettingsTooltip('frequencyRange', 'Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.'),
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
        tooltip: getSettingsTooltip('volumeRange', 'Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.'),
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
        tooltip: getSettingsTooltip('instabilityRange', 'Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.'),
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
        tooltip: getSettingsTooltip('attackSharpnessRange', 'Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.'),
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
        tooltip: getSettingsTooltip('energyRange', 'Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.'),
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
        tooltip: getSettingsTooltip('sharpnessRange', 'Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.'),
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
        tooltip: getSettingsTooltip('activityRange', 'Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.'),
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
        tooltip: getSettingsTooltip('noisinessRange', 'Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.'),
        get: () => ({ min: Number(params.spectralFlatnessNormMin ?? 0), max: Number(params.spectralFlatnessNormMax ?? 1) }),
        set: (minValue, maxValue) => setMany({ spectralFlatnessNormMin: minValue, spectralFlatnessNormMax: maxValue }),
    },
])

const FIXED_RULE_ROWS = Object.freeze([
    // Light Particles
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Position', output: 'x', label: 'X' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Position', output: 'y', label: 'Y' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Position', output: 'z', label: 'Z' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'size', label: 'Size' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'shapeType', label: 'Shape', type: 'enum', options: ['circle', 'square'] },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'particleCount', label: 'Particle Count' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'red', label: 'Red' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'green', label: 'Green' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'blue', label: 'Blue' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'hue', label: 'Hue' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'saturation', label: 'Saturation' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'brightness', label: 'Brightness' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'luma', label: 'Luma' },
    { target: 'spawnedParticles', section: 'Light Particles', subgroup: 'Appearance', output: 'opacity', label: 'Opacity' },

    // Legacy disabled: Physical Particles rules section intentionally hidden from the UI.
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Position', output: 'x', label: 'X' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Position', output: 'y', label: 'Y' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Position', output: 'z', label: 'Z' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'size', label: 'Size' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'particleCount', label: 'Particle Count' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'red', label: 'Red' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'green', label: 'Green' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'blue', label: 'Blue' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'hue', label: 'Hue' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'saturation', label: 'Saturation' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'brightness', label: 'Brightness' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Appearance', output: 'luma', label: 'Luma' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Material', output: 'luminosity', label: 'Luminosity' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Material', output: 'transparency', label: 'Transparency' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Material', output: 'roughness', label: 'Roughness' },
    // { target: 'physicalParticles', section: 'Physical Particles', subgroup: 'Material', output: 'metalness', label: 'Metalness' },

    // Lines
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'x', label: 'X' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'y', label: 'Y' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'z', label: 'Z' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'length', label: 'Length' },
    { target: 'lines', section: 'Lines', subgroup: 'Position', output: 'direction', label: 'Direction', type: 'enum', options: ['x', 'y', 'z'] },
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
const RULE_VARIABLE_PATTERN = RULE_VARIABLES
    .map((entry) => entry.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .sort((a, b) => b.length - a.length)
    .join('|')
const RULE_VARIABLE_REGEX = new RegExp(`\\b(${RULE_VARIABLE_PATTERN})\\b`, 'g')

const MENU_ICON_MAP = Object.freeze({
    start: menuFileIcon,
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
    condition: conditionIcon,
    duplicate: copyIcon,
    clear: clearIcon,
    clean: clearIcon,
    close: closeIcon,
    undo: undoIcon,
    redo: redoIcon,
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

const RULE_FUNCTION_GROUPS = Object.freeze([
    {
        groupKey: 'shapers',
        items: [
            { id: 'clamp', hint: 'Math.max(min, Math.min(max, value))' },
            { id: 'pow', hint: 'Math.pow(value, exponent)' },
            { id: 'abs', hint: 'Math.abs(value)' },
        ],
    },
    {
        groupKey: 'interpolators',
        items: [
            { id: 'lerp', hint: 'start + (end - start) * amount' },
            { id: 'smoothstep', hint: 'Smoothed threshold blend.' },
        ],
    },
    {
        groupKey: 'oscillators',
        items: [
            { id: 'mod', hint: '((value % max) + max) % max' },
            { id: 'sin', hint: 'Math.sin(value)' },
            { id: 'cos', hint: 'Math.cos(value)' },
        ],
    },
    {
        groupKey: 'logic',
        items: [
            { id: 'step', hint: 'value < edge ? 0.0 : 1.0' },
            { id: 'if', hint: 'condition ? true_val : false_val' },
        ],
    },
])

const RULE_FUNCTION_TEMPLATES = Object.freeze({
    clamp: ['clamp(', { slot: 'value' }, ', ', { slot: 'min' }, ', ', { slot: 'max' }, ')'],
    pow: ['pow(', { slot: 'value' }, ', ', { slot: 'exponent' }, ')'],
    abs: ['abs(', { slot: 'value' }, ')'],
    lerp: ['lerp(', { slot: 'start' }, ', ', { slot: 'end' }, ', ', { slot: 'amount' }, ')'],
    smoothstep: ['smoothstep(', { slot: 'edge0' }, ', ', { slot: 'edge1' }, ', ', { slot: 'value' }, ')'],
    mod: ['mod(', { slot: 'value' }, ', ', { slot: 'max' }, ')'],
    sin: ['sin(', { slot: 'value' }, ')'],
    cos: ['cos(', { slot: 'value' }, ')'],
    step: ['step(', { slot: 'edge' }, ', ', { slot: 'value' }, ')'],
    if: ['if(', { slot: 'condition' }, ', ', { slot: 'true_val' }, ', ', { slot: 'false_val' }, ')'],
})

const RULE_SLOT_MARKER = '__slot__'
const RULE_SLOT_MARKER_PATTERN = RULE_SLOT_MARKER.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const RULE_SLOT_TOKEN_PATTERN = `${RULE_SLOT_MARKER_PATTERN}([A-Za-z_][A-Za-z0-9_]*)?`
const RULE_SLOT_MARKER_REGEX = new RegExp(`${RULE_SLOT_MARKER_PATTERN}[A-Za-z0-9_]*`, 'g')
const RULE_RENDER_TOKEN_REGEX = new RegExp(`${RULE_SLOT_TOKEN_PATTERN}|\\b(${RULE_VARIABLE_PATTERN})\\b`, 'g')

function getRuleText(key, fallback = '') {
    const value = UI_TEXT?.rules?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
}

function getRuleSectionLabel(definition) {
    const key = String(definition?.target || '').trim()
    const value = UI_TEXT?.rules?.sections?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return String(definition?.section || key || '').trim()
}

function getRuleSubgroupLabel(definition) {
    const raw = String(definition?.subgroup || '').trim()
    if (!raw) return raw
    const key = raw.charAt(0).toLowerCase() + raw.slice(1)
    const value = UI_TEXT?.rules?.subgroups?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return raw
}

function getRuleRowLabel(definition) {
    const target = String(definition?.target || '').trim()
    const output = String(definition?.output || '').trim()
    const key = target && output ? `${target}.${output}` : ''
    const value = key ? UI_TEXT?.rules?.rowLabels?.[key] : null
    if (typeof value === 'string' && value.trim()) return value
    return String(definition?.label || output || key || '').trim()
}

function getRuleFunctionGroupLabel(groupKey) {
    const value = UI_TEXT?.rules?.functionGroups?.[groupKey]
    if (typeof value === 'string' && value.trim()) return value
    return groupKey
}

function getRuleFunctionName(functionId) {
    const value = UI_TEXT?.rules?.functionNames?.[functionId]
    if (typeof value === 'string' && value.trim()) return value
    return functionId
}

function getRuleFunctionHint(functionId, fallback = '') {
    const value = UI_TEXT?.rules?.functionHints?.[functionId]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
}

function getRuleFunctionSlotLabel(slotId) {
    const value = UI_TEXT?.rules?.functionSlotLabels?.[slotId]
    if (typeof value === 'string' && value.trim()) return value
    return slotId
}

function formatTechnicalTerm(term) {
    const source = String(term || '').trim()
    if (!source) return ''
    const spaced = source
        .replace(/_/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim()
    return spaced.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatRuleVariableDropdownLabel(entry) {
    const label = String(entry?.label || '').trim()
    const technical = formatTechnicalTerm(entry?.legacyName || entry?.id)
    return label || technical
}

function getRuleVariableTooltip(entry) {
    const technical = formatTechnicalTerm(entry?.legacyName || entry?.id)
    const description = String(entry?.description || '').trim()
    if (technical && description) return `[${technical}] ${description}`
    if (technical) return `[${technical}]`
    return description
}

function applySelectedOptionTooltip(select) {
    if (!select) return
    const sync = () => {
        const selectedOption = select.selectedOptions?.[0]
        const title = String(selectedOption?.title || '')
        if (title) select.title = title
        else select.removeAttribute('title')
    }
    select.addEventListener('change', sync)
    select.addEventListener('input', sync)
    select.addEventListener('focus', sync)
    select.addEventListener('mouseover', sync)
    sync()
}

function appendExpressionPartsFromNode(node, parts) {
    if (!node) return
    if (node.nodeType === Node.TEXT_NODE) {
        parts.push(node.textContent || '')
        return
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return

    const element = node
    if (element.classList?.contains('cp-rule-inline-pill')) {
        const id = String(element.getAttribute('data-rule-var-id') || '')
        if (id) parts.push(id)
        return
    }
    if (element.classList?.contains('cp-rule-inline-slot')) {
        const slotLabel = String(element.getAttribute('data-slot-label') || 'value').trim() || 'value'
        parts.push(`${RULE_SLOT_MARKER}${slotLabel}`)
        return
    }
    if (element.tagName === 'BR') {
        parts.push(' ')
        return
    }
    for (const child of element.childNodes) appendExpressionPartsFromNode(child, parts)
}

function readExpressionFromFragment(fragment) {
    if (!fragment) return ''
    const parts = []
    for (const child of fragment.childNodes) appendExpressionPartsFromNode(child, parts)
    return parts.join('').replace(/\u00A0/g, ' ')
}

function splitTopLevelArgs(value) {
    const args = []
    let current = ''
    let depth = 0
    for (const char of String(value || '')) {
        if (char === '(') depth += 1
        if (char === ')') depth = Math.max(0, depth - 1)
        if (char === ',' && depth === 0) {
            args.push(current)
            current = ''
            continue
        }
        current += char
    }
    args.push(current)
    return args
}

function normalizeFunctionCallSlots(source, functionId, slotKeys) {
    if (!source || !functionId || !Array.isArray(slotKeys) || !slotKeys.length) return source
    const token = `${functionId}(`
    let cursor = 0
    let output = ''

    while (cursor < source.length) {
        const start = source.indexOf(token, cursor)
        if (start === -1) {
            output += source.slice(cursor)
            break
        }

        const prevChar = source[start - 1]
        if (prevChar && /[A-Za-z0-9_]/.test(prevChar)) {
            output += source.slice(cursor, start + token.length)
            cursor = start + token.length
            continue
        }

        let depth = 1
        let index = start + token.length
        while (index < source.length && depth > 0) {
            const char = source[index]
            if (char === '(') depth += 1
            else if (char === ')') depth -= 1
            index += 1
        }
        if (depth !== 0) {
            output += source.slice(cursor)
            break
        }

        const argsSource = source.slice(start + token.length, index - 1)
        const args = splitTopLevelArgs(argsSource)
        const normalizedArgs = []
        for (let i = 0; i < slotKeys.length; i += 1) {
            const raw = args[i]
            if (typeof raw === 'string' && raw.trim()) {
                normalizedArgs.push(raw)
            } else {
                normalizedArgs.push(`${RULE_SLOT_MARKER}${slotKeys[i]}`)
            }
        }
        if (args.length > slotKeys.length) {
            normalizedArgs.push(...args.slice(slotKeys.length))
        }

        output += source.slice(cursor, start)
        output += `${functionId}(${normalizedArgs.join(', ')})`
        cursor = index
    }

    return output
}

function normalizeExpressionSlotGaps(expression) {
    let normalized = String(expression || '')
    for (const [functionId, template] of Object.entries(RULE_FUNCTION_TEMPLATES)) {
        const slotKeys = template.filter((part) => part && typeof part === 'object' && part.slot).map((part) => part.slot)
        if (!slotKeys.length) continue
        normalized = normalizeFunctionCallSlots(normalized, functionId, slotKeys)
    }
    return normalized
}

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

function applyIconOnlyButton(button, svgMarkup, label) {
    if (!button || !svgMarkup) return null
    button.textContent = ''
    const icon = el('span', 'cp-btn-icon', { html: svgMarkup })
    button.appendChild(icon)
    if (label) {
        button.setAttribute('aria-label', label)
        button.title = label
    }
    return icon
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
        const option = el('option', '', { value: `var:${entry.id}`, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        valueGroup.appendChild(option)
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        const option = el('option', '', { value: `var:${entry.id}`, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        overallGroup.appendChild(option)
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
    applySelectedOptionTooltip(select)
    return select
}

function createRuleTokenValueSelect(selected = '') {
    const select = el('select', 'cp-input-select cp-rule-token-action-select cp-rule-token-value-select')
    select.appendChild(el('option', '', { value: '', text: getRuleText('ruleAudioData', 'Audio data') }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        const option = el('option', '', { value: `var:${entry.id}`, text: formatRuleVariableDropdownLabel(entry) })
        option.title = getRuleVariableTooltip(entry)
        detailGroup.appendChild(option)
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        const option = el('option', '', { value: `var:${entry.id}`, text: formatRuleVariableDropdownLabel(entry) })
        option.title = getRuleVariableTooltip(entry)
        overallGroup.appendChild(option)
    }

    select.append(detailGroup, overallGroup)
    if (selected) select.value = selected
    applySelectedOptionTooltip(select)
    return select
}

function createRuleFunctionSelect(selected = '') {
    const select = el('select', 'cp-input-select cp-rule-token-action-select cp-rule-token-function-select')
    select.appendChild(el('option', '', { value: '', text: getRuleText('ruleFunctions', 'Functions') }))

    for (const group of RULE_FUNCTION_GROUPS) {
        const optgroup = document.createElement('optgroup')
        optgroup.label = getRuleFunctionGroupLabel(group.groupKey)
        for (const item of group.items) {
            const option = el('option', '', { value: item.id, text: getRuleFunctionName(item.id) })
            const hint = getRuleFunctionHint(item.id, item.hint)
            if (hint) option.title = hint
            optgroup.appendChild(option)
        }
        select.appendChild(optgroup)
    }

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

function createRuleExpressionPill(variableId) {
    const id = String(variableId || '')
    const variable = getRuleVariableById(id)
    const pill = el('span', 'cp-rule-inline-pill', {
        'data-rule-var-id': id,
        contenteditable: 'false',
        title: getRuleVariableTooltip(variable) || id,
    })
    pill.textContent = variable?.label || id
    return pill
}

function appendExpressionTextTokens(editor, text) {
    if (!editor) return
    const source = String(text || '')
    if (!source) return

    const tokenRegex = /(\d*\.\d+|\d+|[+\-*/]|[()\[\]{}])/g
    let lastIndex = 0

    for (const match of source.matchAll(tokenRegex)) {
        const value = String(match[0] || '')
        const index = Number(match.index)
        if (index > lastIndex) {
            editor.appendChild(document.createTextNode(source.slice(lastIndex, index)))
        }

        let className = ''
        if (/^(\d*\.\d+|\d+)$/.test(value)) className = 'cp-rule-expression-number'
        else if (/^[+\-*/]$/.test(value)) className = 'cp-rule-expression-math'
        else className = 'cp-rule-expression-bracket'

        editor.appendChild(el('span', className, { text: value }))
        lastIndex = index + value.length
    }

    if (lastIndex < source.length) {
        editor.appendChild(document.createTextNode(source.slice(lastIndex)))
    }
}

function createRuleExpressionSlot(label = 'value') {
    const slotLabel = String(label || 'value')
    return el('span', 'cp-rule-inline-slot', {
        contenteditable: 'false',
        'data-slot-label': slotLabel,
        text: getRuleFunctionSlotLabel(slotLabel),
        title: getRuleText('slotInsertHint', 'Insert audio data or type a value'),
    })
}

function getActiveSlotFromSelection(root, selection) {
    if (!root || !selection || selection.rangeCount === 0) return null
    const range = selection.getRangeAt(0)

    const resolveSlot = (node) => {
        if (!node) return null
        let current = node
        if (current.nodeType === Node.TEXT_NODE) current = current.parentElement
        if (!(current instanceof Element)) return null
        const slot = current.closest('.cp-rule-inline-slot')
        if (!slot) return null
        return root.contains(slot) ? slot : null
    }

    const directCandidates = [range.startContainer, range.endContainer, selection.anchorNode, selection.focusNode]
    for (const candidate of directCandidates) {
        const slot = resolveSlot(candidate)
        if (slot) return slot
    }

    if (range.startContainer instanceof Element) {
        const { childNodes } = range.startContainer
        const nextNode = childNodes[range.startOffset]
        const prevNode = childNodes[Math.max(0, range.startOffset - 1)]
        for (const candidate of [nextNode, prevNode]) {
            const slot = resolveSlot(candidate)
            if (slot) return slot
        }
    }

    return null
}

function readExpressionFromEditor(editor) {
    if (!editor) return ''
    return readExpressionFromFragment(editor)
}

function placeCaretAtEnd(node) {
    if (!node) return
    const selection = window.getSelection?.()
    if (!selection) return
    const range = document.createRange()
    range.selectNodeContents(node)
    range.collapse(false)
    selection.removeAllRanges()
    selection.addRange(range)
}

function isSelectionInside(root, selection) {
    if (!root || !selection || selection.rangeCount === 0) return false
    const range = selection.getRangeAt(0)
    const container = range.commonAncestorContainer
    return root === container || root.contains(container)
}

function openSelectPicker(select) {
    if (!select) return
    select.focus()
    if (typeof select.showPicker === 'function') {
        try {
            select.showPicker()
            return
        } catch {
            // ignore and fallback to click
        }
    }
    try {
        select.click()
    } catch {
        // no-op
    }
}

function caretRangeFromPoint(x, y) {
    if (typeof document.caretRangeFromPoint === 'function') {
        return document.caretRangeFromPoint(x, y)
    }
    if (typeof document.caretPositionFromPoint === 'function') {
        const pos = document.caretPositionFromPoint(x, y)
        if (!pos) return null
        const range = document.createRange()
        range.setStart(pos.offsetNode, pos.offset)
        range.collapse(true)
        return range
    }
    return null
}

function placeCaretAfterNode(node) {
    if (!node) return
    const selection = window.getSelection?.()
    if (!selection) return
    const range = document.createRange()
    range.setStartAfter(node)
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
}

function insertVariablePillAtCursor(editor, variableId) {
    if (!editor || !variableId) return
    const selection = window.getSelection?.()
    if (!selection) return

    editor.focus()
    if (!isSelectionInside(editor, selection)) {
        placeCaretAtEnd(editor)
    }

    const activeSlot = getActiveSlotFromSelection(editor, selection)
    if (activeSlot) {
        const pill = createRuleExpressionPill(variableId)
        activeSlot.replaceWith(pill)
        const range = document.createRange()
        range.setStartAfter(pill)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
        return
    }

    if (selection.rangeCount === 0) return
    const range = selection.getRangeAt(0)
    range.deleteContents()

    const pill = createRuleExpressionPill(variableId)
    range.insertNode(pill)

    const spacer = document.createTextNode(' ')
    pill.after(spacer)

    range.setStartAfter(spacer)
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
}

function insertTextAtCursor(editor, text) {
    if (!editor) return
    const value = String(text || '')
    if (!value) return
    const selection = window.getSelection?.()
    if (!selection) return

    editor.focus()
    if (!isSelectionInside(editor, selection)) {
        placeCaretAtEnd(editor)
    }

    const activeSlot = getActiveSlotFromSelection(editor, selection)
    if (activeSlot) {
        const textNode = document.createTextNode(value)
        activeSlot.replaceWith(textNode)
        const range = document.createRange()
        range.setStart(textNode, textNode.textContent?.length || 0)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
        return
    }
    if (selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    range.deleteContents()

    const textNode = document.createTextNode(value)
    range.insertNode(textNode)
    range.setStartAfter(textNode)
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
}

function replaceActiveSlotWithText(editor, text = '') {
    if (!editor) return false
    const selection = window.getSelection?.()
    if (!selection || selection.rangeCount === 0) return false
    const activeSlot = getActiveSlotFromSelection(editor, selection)
    if (!activeSlot) return false

    const textNode = document.createTextNode(String(text || ''))
    activeSlot.replaceWith(textNode)
    const range = document.createRange()
    range.setStart(textNode, textNode.textContent?.length || 0)
    range.collapse(true)
    selection.removeAllRanges()
    selection.addRange(range)
    return true
}

function insertFunctionTemplateAtCursor(editor, functionId) {
    const template = RULE_FUNCTION_TEMPLATES[String(functionId || '')]
    if (!editor || !Array.isArray(template) || template.length === 0) return
    const selection = window.getSelection?.()
    if (!selection) return

    editor.focus()
    if (!isSelectionInside(editor, selection)) {
        placeCaretAtEnd(editor)
    }
    if (selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    let wrappedSelection = ''
    if (!range.collapsed) {
        wrappedSelection = readExpressionFromFragment(range.cloneContents()).trim()
    }
    range.deleteContents()

    const fragment = document.createDocumentFragment()
    const slots = []
    let isFirstSlot = true
    for (const part of template) {
        if (typeof part === 'string') {
            fragment.appendChild(document.createTextNode(part))
            continue
        }
        if (part && typeof part === 'object' && part.slot) {
            if (isFirstSlot && wrappedSelection) {
                fragment.appendChild(document.createTextNode(wrappedSelection))
                isFirstSlot = false
                continue
            }
            const slot = createRuleExpressionSlot(part.slot)
            slots.push(slot)
            fragment.appendChild(slot)
            isFirstSlot = false
        }
    }
    fragment.appendChild(document.createTextNode(' '))

    range.insertNode(fragment)

    const firstSlot = slots[0]
    if (firstSlot) {
        const slotRange = document.createRange()
        slotRange.selectNode(firstSlot)
        selection.removeAllRanges()
        selection.addRange(slotRange)
        return
    }

    placeCaretAtEnd(editor)
}

function renderTokenEditor(rowState) {
    if (!rowState?.expressionInput) return
    const editor = rowState.expressionInput

    const hidePillContextMenu = () => {
        if (!rowState.pillContextMenu) return
        rowState.pillContextMenu.classList.remove('is-open')
        rowState.pillContextMenuTarget = null
    }

    const openPillContextMenu = (pill, clientX, clientY) => {
        const menu = ensurePillContextMenu()
        if (!menu || !pill) return
        rowState.activePill = pill
        rowState.pillContextMenuTarget = pill
        menu.classList.add('is-open')

        const margin = 8
        const menuRect = menu.getBoundingClientRect()
        const maxLeft = Math.max(margin, window.innerWidth - menuRect.width - margin)
        const maxTop = Math.max(margin, window.innerHeight - menuRect.height - margin)
        const left = clamp(clientX, margin, maxLeft)
        const top = clamp(clientY, margin, maxTop)
        menu.style.left = `${left}px`
        menu.style.top = `${top}px`
    }

    const ensurePillContextMenu = () => {
        if (rowState.pillContextMenu) return rowState.pillContextMenu

        const menu = el('div', 'cp-rule-pill-context-menu', {
            role: 'menu',
            'aria-label': getRuleText('pillMenuLabel', 'Pill actions'),
        })

        const changeBtn = el('button', 'cp-rule-pill-context-item', {
            type: 'button',
            role: 'menuitem',
            text: getRuleText('pillMenuChange', 'Change'),
        })
        const duplicateBtn = el('button', 'cp-rule-pill-context-item', {
            type: 'button',
            role: 'menuitem',
            text: getRuleText('pillMenuDuplicate', 'Duplicate'),
        })
        const deleteBtn = el('button', 'cp-rule-pill-context-item', {
            type: 'button',
            role: 'menuitem',
            text: getRuleText('pillMenuDelete', 'Delete'),
        })

        menu.append(changeBtn, duplicateBtn, deleteBtn)
        document.body.appendChild(menu)

        const getTargetPill = () => {
            const target = rowState.pillContextMenuTarget
            if (!target || !editor.contains(target)) return null
            return target
        }

        changeBtn.addEventListener('click', () => {
            const targetPill = getTargetPill()
            if (!targetPill) {
                hidePillContextMenu()
                return
            }
            const id = String(targetPill.getAttribute('data-rule-var-id') || '')
            rowState.activePill = targetPill
            rowState.suppressNextBlurRerender = true
            hidePillContextMenu()
            if (rowState.valueActionSelect && id) {
                rowState.valueActionSelect.value = `var:${id}`
                openSelectPicker(rowState.valueActionSelect)
            }
        })

        duplicateBtn.addEventListener('click', () => {
            const targetPill = getTargetPill()
            if (!targetPill) {
                hidePillContextMenu()
                return
            }
            const id = String(targetPill.getAttribute('data-rule-var-id') || '').trim()
            if (!id) {
                hidePillContextMenu()
                return
            }
            const cloned = createRuleExpressionPill(id)
            wirePillInteractions(cloned)
            const spacer = document.createTextNode(' ')
            targetPill.after(spacer, cloned)
            placeCaretAfterNode(cloned)
            hidePillContextMenu()
            rowState.onExpressionChanged?.()
        })

        deleteBtn.addEventListener('click', () => {
            const targetPill = getTargetPill()
            if (!targetPill) {
                hidePillContextMenu()
                return
            }
            if (rowState.activePill === targetPill) rowState.activePill = null
            targetPill.remove()
            hidePillContextMenu()
            rowState.onExpressionChanged?.()
        })

        if (!rowState.pillContextMenuEventsBound) {
            document.addEventListener('pointerdown', (event) => {
                if (!rowState.pillContextMenu?.classList.contains('is-open')) return
                const target = event.target
                const inMenu = target instanceof Element && rowState.pillContextMenu.contains(target)
                if (inMenu) return
                hidePillContextMenu()
            })
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') hidePillContextMenu()
            })
            window.addEventListener('resize', hidePillContextMenu)
            window.addEventListener('scroll', hidePillContextMenu, true)
            rowState.pillContextMenuEventsBound = true
        }

        rowState.pillContextMenu = menu
        return menu
    }

    hidePillContextMenu()
    editor.innerHTML = ''
    rowState.activePill = null

    const ensureDropMarker = () => {
        if (rowState.dropMarker?.isConnected) return rowState.dropMarker
        rowState.dropMarker = el('span', 'cp-rule-drop-marker')
        return rowState.dropMarker
    }

    const clearDropMarker = () => {
        rowState.dropMarker?.remove()
    }

    const placeDropMarkerAtPoint = (clientX, clientY) => {
        const marker = ensureDropMarker()
        const range = caretRangeFromPoint(clientX, clientY)
        if (!range || !editor.contains(range.commonAncestorContainer)) {
            editor.appendChild(marker)
            return
        }
        range.insertNode(marker)
    }

    const wirePillInteractions = (pill) => {
        if (!pill) return
        pill.draggable = true
        pill.addEventListener('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            rowState.activePill = pill
            rowState.suppressNextBlurRerender = true
            const id = String(pill.getAttribute('data-rule-var-id') || '')
            if (rowState.valueActionSelect && id) {
                rowState.valueActionSelect.value = `var:${id}`
                openSelectPicker(rowState.valueActionSelect)
            }
        })
        pill.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            event.stopPropagation()
            openPillContextMenu(pill, event.clientX, event.clientY)
        })
        pill.addEventListener('dragstart', (event) => {
            rowState.draggingPill = pill
            pill.classList.add('is-dragging')
            if (event.dataTransfer) {
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('text/plain', String(pill.getAttribute('data-rule-var-id') || ''))
            }
        })
        pill.addEventListener('dragend', () => {
            pill.classList.remove('is-dragging')
            rowState.draggingPill = null
            clearDropMarker()
            rowState.onExpressionChanged?.()
        })
    }

    if (!rowState.editorEventsBound) {
        editor.addEventListener('dragover', (event) => {
            if (!rowState.draggingPill) return
            event.preventDefault()
            placeDropMarkerAtPoint(event.clientX, event.clientY)
        })

        editor.addEventListener('drop', (event) => {
            if (!rowState.draggingPill) return
            event.preventDefault()
            const dragging = rowState.draggingPill
            const marker = rowState.dropMarker
            if (marker?.isConnected && dragging !== marker && dragging.parentNode === editor) {
                marker.replaceWith(dragging)
            } else {
                placeDropMarkerAtPoint(event.clientX, event.clientY)
                rowState.dropMarker?.replaceWith(dragging)
            }
            clearDropMarker()
            rowState.onExpressionChanged?.()
        })

        editor.addEventListener('dragleave', (event) => {
            if (!rowState.draggingPill) return
            const nextTarget = event.relatedTarget
            if (nextTarget instanceof Node && editor.contains(nextTarget)) return
            clearDropMarker()
        })

        rowState.editorEventsBound = true
    }

    const source = String(rowState.expression || '')
    if (!source) return

    RULE_RENDER_TOKEN_REGEX.lastIndex = 0
    let lastIndex = 0
    for (const match of source.matchAll(RULE_RENDER_TOKEN_REGEX)) {
        const tokenText = String(match[0] || '')
        const index = Number(match.index)
        if (index > lastIndex) {
            appendExpressionTextTokens(editor, source.slice(lastIndex, index))
        }
        if (tokenText.startsWith(RULE_SLOT_MARKER)) {
            const slotLabel = tokenText.slice(RULE_SLOT_MARKER.length).trim() || 'value'
            editor.appendChild(createRuleExpressionSlot(slotLabel))
        } else {
            const pill = createRuleExpressionPill(tokenText)
            wirePillInteractions(pill)
            editor.appendChild(pill)
        }
        lastIndex = index + tokenText.length
    }

    if (lastIndex < source.length) {
        appendExpressionTextTokens(editor, source.slice(lastIndex))
    }
}

function createRuleInsertionSelect(selected = NONE_VAR) {
    const select = el('select', 'cp-input-select cp-rule-token-select')
    select.appendChild(el('option', '', { value: NONE_VAR, text: UI_TEXT.rules.insertVariable }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        detailGroup.appendChild(option)
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        overallGroup.appendChild(option)
    }

    select.append(detailGroup, overallGroup)
    if (selected && selected !== NONE_VAR) select.value = selected
    applySelectedOptionTooltip(select)
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
    let suppressInputSync = false

    const updateNumberInputs = (minValue, maxValue) => {
        minInput.value = String(minValue)
        maxInput.value = String(maxValue)
    }

    sliderApi.on('update', (values) => {
        const minValue = Number(values[0])
        const maxValue = Number(values[1])
        if (!suppressInputSync) updateNumberInputs(minValue, maxValue)
        if (suppressCommit) return
        definition.set(minValue, maxValue)
    })

    const applyFromNumbers = () => {
        let minValue = Number(minInput.value)
        let maxValue = Number(maxInput.value)
        if (!Number.isFinite(minValue)) minValue = definition.min
        if (!Number.isFinite(maxValue)) maxValue = definition.max
        if (minValue > maxValue) {
            const temp = minValue
            minValue = maxValue
            maxValue = temp
        }

        const sliderMin = clamp(minValue, definition.min, definition.max)
        const sliderMax = clamp(maxValue, definition.min, definition.max)
        const keepTypedValues = sliderMin !== minValue || sliderMax !== maxValue

        suppressCommit = true
        suppressInputSync = keepTypedValues
        sliderApi.set([sliderMin, sliderMax])
        suppressInputSync = false
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
        const nextMin = Number(current.min)
        const nextMax = Number(current.max)
        const safeMin = Number.isFinite(nextMin) ? nextMin : definition.min
        const safeMax = Number.isFinite(nextMax) ? nextMax : definition.max
        const sliderMin = clamp(safeMin, definition.min, definition.max)
        const sliderMax = clamp(safeMax, definition.min, definition.max)
        const keepTypedValues = sliderMin !== safeMin || sliderMax !== safeMax

        suppressCommit = true
        suppressInputSync = keepTypedValues
        sliderApi.set([sliderMin, sliderMax])
        suppressInputSync = false
        suppressCommit = false
        updateNumberInputs(safeMin, safeMax)
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

    const applyFromSlider = (raw) => {
        const value = clamp(raw, definition.min, definition.max)
        set(definition.key, value)
    }

    const applyFromNumber = (raw) => {
        const value = Number(raw)
        if (!Number.isFinite(value)) return
        set(definition.key, value)
    }

    slider.addEventListener('input', () => applyFromSlider(Number(slider.value)))
    number.addEventListener('change', () => applyFromNumber(number.value))

    const sync = () => {
        const value = Number(params[definition.key])
        const safeValue = Number.isFinite(value) ? value : definition.min
        slider.value = String(clamp(safeValue, definition.min, definition.max))
        number.value = String(safeValue)
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
            title: getRuleVariableTooltip(entry),
        }))
    )
    select.appendChild(createSelectOptions(options, selected))
    applySelectedOptionTooltip(select)
    return select
}

function createRuleConditionInputSelect(selected = NONE_VAR) {
    const select = el('select', 'cp-input-select')
    select.appendChild(el('option', '', { value: NONE_VAR, text: UI_TEXT.rules.selectValue }))

    const detailGroup = document.createElement('optgroup')
    detailGroup.label = UI_TEXT.rules.detailVariables
    for (const entry of getRuleVariablesByGroup('detail')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        detailGroup.appendChild(option)
    }

    const overallGroup = document.createElement('optgroup')
    overallGroup.label = UI_TEXT.rules.overallVariables
    for (const entry of getRuleVariablesByGroup('overall')) {
        const option = el('option', '', { value: entry.id, text: entry.label })
        option.title = getRuleVariableTooltip(entry)
        overallGroup.appendChild(option)
    }

    select.append(detailGroup, overallGroup)
    if (selected && selected !== NONE_VAR) select.value = selected
    applySelectedOptionTooltip(select)
    return select
}

function buildFileMenu(body) {
    const panel = el('div', 'cp-menu-pane-inner')
    const TEMPLATE_MANIFEST_URL = '/templates/factory-templates.json'
    const FALLBACK_FACTORY_TEMPLATES = Object.freeze([
        { id: 'linear-basic', title: 'Linear Basic', presetName: 'linear basic', presetPath: '/templates/presets/linear-basic.json', thumbnail: '/templates/thumbnails/linear-basic.svg' },
        { id: 'linear-colors', title: 'Linear Colors', presetName: 'linear colors', presetPath: '/templates/presets/linear-colors.json', thumbnail: '/templates/thumbnails/linear-colors.svg' },
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
                value: 'obj',
                label: labels.exportObjOption || '3D object (.obj)',
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
    applyButtonIcon(btnExportAs, BUTTON_ICON_MAP.saveAs, UI_TEXT.file.exportAsAction || UI_TEXT.file.export)
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

    const renderModeSection = el('section', 'cp-section')
    const renderModeButton = el('button', 'cp-btn cp-btn-wide', { type: 'button' })
    renderModeSection.append(renderModeButton)

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

    const postEnabledRow = el('label', 'cp-toggle-row')
    postEnabledRow.append(postEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.postProcessingEnabled }))
    const bloomEnabledRow = el('label', 'cp-toggle-row')
    bloomEnabledRow.append(bloomEnabled, el('span', 'cp-setting-label', { text: UI_TEXT.view.bloomEnabled }))

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


    postSection.append(
        postEnabledRow,
        bloomEnabledRow,
        bloomStrengthRow,
        bloomRadiusRow,
        bloomThresholdRow,
    )

    const guideSection = el('section', 'cp-section')
    guideSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.view.guides }))
    const originToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const guideToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const cameraHudToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })

    const originRow = el('label', 'cp-inline-pair')
    originRow.append(originToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.guideAxes }))
    const guideRow = el('label', 'cp-inline-pair')
    guideRow.append(guideToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.guideCoordinates }))
    const cameraHudRow = el('label', 'cp-inline-pair')
    cameraHudRow.append(cameraHudToggle, el('span', 'cp-setting-label', { text: UI_TEXT.view.cameraHud }))
    guideSection.append(originRow, guideRow, cameraHudRow)

    widthInput.addEventListener('change', () => {
        const w = Math.max(160, Math.floor(Number(widthInput.value) || 160))
        set('canvasWidth', w)
    })
    heightInput.addEventListener('change', () => {
        const h = Math.max(120, Math.floor(Number(heightInput.value) || 120))
        set('canvasHeight', h)
    })

    const applyCanvasZoomFromSlider = (raw) => {
        const value = clamp(raw, 5, 400)
        set('canvasScale', Math.floor(value))
    }
    const applyCanvasZoomFromNumber = (raw) => {
        const value = Number(raw)
        if (!Number.isFinite(value)) return
        set('canvasScale', Math.floor(value))
    }
    zoomSlider.addEventListener('input', () => applyCanvasZoomFromSlider(Number(zoomSlider.value)))
    zoomNumber.addEventListener('change', () => applyCanvasZoomFromNumber(zoomNumber.value))

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
    blendSelect.addEventListener('change', () => {
        setMany({
            blendEnabled: 1,
            blendMode: blendSelect.value,
        })
    })

    const applyRenderMode = (nextMode) => {
        const mode = String(nextMode || '')
        if (mode === 'luminous') {
            const nextBlendMode = String(params.blendMode || '') === 'source-over' ? 'screen' : String(params.blendMode || 'screen')
            setMany({
                blendEnabled: 1,
                blendMode: nextBlendMode,
            })
            return
        }

        setMany({
            blendEnabled: 0,
        })
    }

    renderModeButton.addEventListener('click', () => {
        const luminous = Number(params.blendEnabled ?? 0) >= 0.5
        applyRenderMode(luminous ? 'solid' : 'luminous')
    })

    postEnabled.addEventListener('change', () => set('postProcessEnabled', postEnabled.checked ? 1 : 0))
    bloomEnabled.addEventListener('change', () => set('bloomEnabled', bloomEnabled.checked ? 1 : 0))

    const bindSliderAndNumber = ({ slider, number, key, min, max }) => {
        const applyFromSlider = (raw) => {
            const value = clamp(raw, min, max)
            set(key, value)
        }
        const applyFromNumber = (raw) => {
            const value = Number(raw)
            if (!Number.isFinite(value)) return
            set(key, value)
        }
        slider.addEventListener('input', () => applyFromSlider(Number(slider.value)))
        number.addEventListener('change', () => applyFromNumber(number.value))
    }

    bindSliderAndNumber({ slider: bloomStrengthSlider, number: bloomStrengthNumber, key: 'bloomStrength', min: 0, max: 4 })
    bindSliderAndNumber({ slider: bloomRadiusSlider, number: bloomRadiusNumber, key: 'bloomRadius', min: 0, max: 2 })
    bindSliderAndNumber({ slider: bloomThresholdSlider, number: bloomThresholdNumber, key: 'bloomThreshold', min: 0, max: 1 })

    const applyFovFromSlider = (value) => {
        set('cameraAngleOfView', clamp(value, 20, 120))
    }

    const applyFovFromNumber = (value) => {
        const n = Number(value)
        if (!Number.isFinite(n)) return
        set('cameraAngleOfView', n)
    }

    fovSlider.addEventListener('input', () => applyFovFromSlider(Number(fovSlider.value)))
    fovNumber.addEventListener('change', () => applyFovFromNumber(fovNumber.value))

    originToggle.addEventListener('change', () => {
        set('originSignEnabled', originToggle.checked ? 1 : 0)
    })
    guideToggle.addEventListener('change', () => {
        set('coordinateGuidesEnabled', guideToggle.checked ? 1 : 0)
    })
    cameraHudToggle.addEventListener('change', () => {
        window.dispatchEvent(new CustomEvent('seesound:camera-hud-toggle', {
            detail: { enabled: cameraHudToggle.checked },
        }))
    })

    window.addEventListener('seesound:origin-sign-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') originToggle.checked = enabled
    })

    window.addEventListener('seesound:coordinate-guide-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') guideToggle.checked = enabled
    })

    window.addEventListener('seesound:camera-hud-state', (e) => {
        const enabled = e?.detail?.enabled
        if (typeof enabled === 'boolean') cameraHudToggle.checked = enabled
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

    const syncRenderMode = () => {
        const luminous = Number(params.blendEnabled ?? 0) >= 0.5
        const renderModeLabel = luminous
            ? (UI_TEXT.view.renderModeLuminous || 'Luminous')
            : (UI_TEXT.view.renderModePhysical || 'Physical')
        renderModeButton.textContent = renderModeLabel
        renderModeButton.setAttribute('aria-pressed', luminous ? 'true' : 'false')

        blendingSection.style.display = luminous ? '' : 'none'
    }

    const syncFov = () => {
        const fov = Number(params.cameraAngleOfView ?? 55)
        fovSlider.value = String(fov)
        fovNumber.value = String(fov)
    }

    const syncPostEnabled = () => {
        postEnabled.checked = Number(params.postProcessEnabled ?? 0) >= 0.5
        bloomEnabled.checked = Number(params.bloomEnabled ?? 1) >= 0.5
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

    const syncCameraFields = () => {
        syncCameraNumbers()
    }

    registerSync(syncRegistry, syncCanvasSize, ['canvasWidth', 'canvasHeight'])
    registerSync(syncRegistry, syncCanvasZoom, ['canvasScale'])
    registerSync(syncRegistry, syncBackgroundColor, ['defaultBackgroundHue', 'defaultBackgroundSaturation', 'defaultBackgroundLightness'])
    registerSync(syncRegistry, syncProjectionControls, ['cameraProjection', 'cameraAxoPreset'])
    registerSync(syncRegistry, syncBlendMode, ['blendMode'])
    registerSync(syncRegistry, syncRenderMode, ['blendEnabled', 'blendMode'])
    registerSync(syncRegistry, syncFov, ['cameraAngleOfView'])
    registerSync(syncRegistry, syncPostEnabled, ['postProcessEnabled', 'bloomEnabled'])
    registerSync(syncRegistry, syncGuideToggles, ['originSignEnabled', 'coordinateGuidesEnabled'])
    registerSync(syncRegistry, syncBloomStrength, ['bloomStrength'])
    registerSync(syncRegistry, syncBloomRadius, ['bloomRadius'])
    registerSync(syncRegistry, syncBloomThreshold, ['bloomThreshold'])
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
    syncRenderMode()
    syncFov()
    syncPostEnabled()
    syncGuideToggles()
    syncBloomStrength()
    syncBloomRadius()
    syncBloomThreshold()
    syncCameraFields()
    cameraHudToggle.checked = false

    panel.append(canvasSection, backgroundSection, cameraSection, projectionSection, fovSection, renderModeSection, blendingSection, postSection, guideSection)
    body.appendChild(panel)
}

function buildSettingsMenu(body, syncRegistry) {
    const panel = el('div', 'cp-menu-pane-inner')

    const sliderSection = el('section', 'cp-section')
    sliderSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.processing || 'Processing' }))

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

function buildRulesMenu(body, syncRegistry) {
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
        syncColorMode('physicalParticles')
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
            syncColorMode('physicalParticles')
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

            expressionInput = el('div', 'cp-rule-token-editor cp-rule-expression-input', {
                contenteditable: 'true',
                role: 'textbox',
                'aria-multiline': 'false',
                tabindex: '0',
                'data-placeholder': UI_TEXT.rules.tokenEditorPlaceholder,
            })
            tokenEditor = expressionInput

            tokenRow.append(valueActionSelect, functionSelect)
            expressionRow.append(tokenRow, expressionInput)

            const commitExpression = ({ rerender = false } = {}) => {
                rowState.expression = normalizeExpressionSlotGaps(readExpressionFromEditor(expressionInput))
                rowState.tokens = parseExpressionToTokens(rowState.expression)

                if (rerender) {
                    renderTokenEditor(rowState)
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

            valueActionSelect.addEventListener('change', () => {
                const selected = String(valueActionSelect.value || '')
                valueActionSelect.value = ''
                if (!selected.startsWith('var:')) return
                const nextVariableId = selected.slice(4)
                const activePill = rowState.activePill
                if (activePill && expressionInput.contains(activePill)) {
                    activePill.replaceWith(createRuleExpressionPill(nextVariableId))
                    rowState.activePill = null
                    rowState.expression = readExpressionFromEditor(expressionInput)
                    renderTokenEditor(rowState)
                } else {
                    insertVariablePillAtCursor(expressionInput, nextVariableId)
                }
                commitExpression()
            })

            functionSelect.addEventListener('change', () => {
                const selected = String(functionSelect.value || '')
                functionSelect.value = ''
                if (!selected) return
                insertFunctionTemplateAtCursor(expressionInput, selected)
                commitExpression()
            })

            expressionInput.addEventListener('input', commitExpression)
            expressionInput.addEventListener('blur', () => {
                const shouldSuppress = !!rowState.suppressNextBlurRerender
                rowState.suppressNextBlurRerender = false
                commitExpression({ rerender: !shouldSuppress })
            })
            expressionInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') event.preventDefault()
                if ((event.key === 'Backspace' || event.key === 'Delete') && replaceActiveSlotWithText(expressionInput, '')) {
                    event.preventDefault()
                    commitExpression({ rerender: true })
                }
            })
            expressionInput.addEventListener('beforeinput', (event) => {
                const inputType = String(event.inputType || '')
                if (!inputType.startsWith('insert')) return
                const text = String(event.data || '')
                if (!replaceActiveSlotWithText(expressionInput, text)) return
                event.preventDefault()
                commitExpression({ rerender: true })
            })
            expressionInput.addEventListener('click', (event) => {
                const clickedPill = event.target instanceof Element ? event.target.closest('.cp-rule-inline-pill') : null
                if (!clickedPill || !expressionInput.contains(clickedPill)) {
                    rowState.activePill = null
                }
                const slot = event.target instanceof Element ? event.target.closest('.cp-rule-inline-slot') : null
                if (!slot || !expressionInput.contains(slot)) return
                const selection = window.getSelection?.()
                if (!selection) return
                const range = document.createRange()
                range.selectNodeContents(slot)
                selection.removeAllRanges()
                selection.addRange(range)
            })

            clearTokensBtn.addEventListener('click', () => {
                expressionInput.innerHTML = ''
                rowState.expression = ''
                rowState.tokens = []
                rowState.insertContext = null
                rowState.pendingInsertIndex = null
                commitExpression()
                expressionInput.focus()
            })
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
    const headerActions = el('div', 'cp-menu-pane-actions')
    const undoLabel = getRuleText('undo', 'Undo')
    const redoLabel = getRuleText('redo', 'Redo')
    const historyGroup = el('div', 'cp-menu-pane-history')
    const undoButton = el('button', 'cp-btn cp-btn-icon cp-menu-pane-history-btn', {
        type: 'button',
        title: undoLabel,
        'aria-label': undoLabel,
    })
    const redoButton = el('button', 'cp-btn cp-btn-icon cp-menu-pane-history-btn', {
        type: 'button',
        title: redoLabel,
        'aria-label': redoLabel,
    })
    applyIconOnlyButton(undoButton, BUTTON_ICON_MAP.undo, undoLabel)
    applyIconOnlyButton(redoButton, BUTTON_ICON_MAP.redo, redoLabel)
    historyGroup.append(undoButton, redoButton)
    headerActions.appendChild(historyGroup)
    const closeButton = el('button', 'cp-btn cp-menu-collapse', { type: 'button', text: UI_TEXT.menu.collapse })
    applyButtonIcon(closeButton, BUTTON_ICON_MAP.close, UI_TEXT.menu.collapse)
    headerActions.appendChild(closeButton)
    header.appendChild(headerActions)

    const body = el('div', 'cp-menu-pane-body')
    pane.append(header, body)
    return { pane, body, header, headerActions, closeButton, undoButton, redoButton }
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

    let lastCanUndo = null
    let lastCanRedo = null
    const refreshHistoryButtons = (force = false) => {
        const nextCanUndo = !!canUndo()
        const nextCanRedo = !!canRedo()
        if (!force && nextCanUndo === lastCanUndo && nextCanRedo === lastCanRedo) return false
        lastCanUndo = nextCanUndo
        lastCanRedo = nextCanRedo
        for (const paneParts of menuPanes.values()) {
            if (paneParts.undoButton) paneParts.undoButton.disabled = !nextCanUndo
            if (paneParts.redoButton) paneParts.redoButton.disabled = !nextCanRedo
        }
        return true
    }

    let historyRefreshRaf = null
    const scheduleHistoryButtonsRefresh = () => {
        const nextCanUndo = !!canUndo()
        const nextCanRedo = !!canRedo()
        if (nextCanUndo === lastCanUndo && nextCanRedo === lastCanRedo) return
        if (historyRefreshRaf !== null) return
        historyRefreshRaf = window.requestAnimationFrame(() => {
            historyRefreshRaf = null
            refreshHistoryButtons(false)
        })
    }

    for (const paneParts of menuPanes.values()) {
        paneParts.undoButton?.addEventListener('click', () => {
            if (!undo()) return
            refreshHistoryButtons(true)
        })
        paneParts.redoButton?.addEventListener('click', () => {
            if (!redo()) return
            refreshHistoryButtons(true)
        })
    }

    buildFileMenu(menuPanes.get('start').body)
    buildViewMenu(menuPanes.get('view').body, syncRegistry)
    buildSettingsMenu(menuPanes.get('settings').body, syncRegistry)
    buildRulesMenu(menuPanes.get('rules').body, syncRegistry)
    refreshHistoryButtons(true)

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
            if (pinnedMenuId === item.id) {
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

    let syncFlushRaf = null
    let syncIncludeGlobal = false
    const pendingSyncKeys = new Set()

    const flushQueuedSync = () => {
        syncFlushRaf = null
        const keys = [...pendingSyncKeys]
        pendingSyncKeys.clear()
        const callbacks = collectSyncCallbacks(syncRegistry, keys, syncIncludeGlobal)
        syncIncludeGlobal = false
        if (!callbacks.length) return
        runSyncCallbacks(callbacks)
    }

    const queueSyncFlush = () => {
        if (syncFlushRaf !== null) return
        syncFlushRaf = window.requestAnimationFrame(flushQueuedSync)
    }

    const syncAll = () => {
        syncIncludeGlobal = true
        queueSyncFlush()
    }

    const syncByKeys = (keys) => {
        for (const key of Array.isArray(keys) ? keys : []) {
            const normalized = String(key || '').trim()
            if (!normalized) continue
            pendingSyncKeys.add(normalized)
        }
        queueSyncFlush()
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
            scheduleHistoryButtonsRefresh()
            return
        }
        syncByKeys([key])
        scheduleHistoryButtonsRefresh()
    })

    hoverMenuId = 'settings'
    renderMenuState()
    syncAll()
}
