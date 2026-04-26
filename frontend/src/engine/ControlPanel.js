import { buildFileMenu } from "./ui/MenuFile.js";
import { buildViewMenu } from "./ui/MenuView.js";
import { buildSettingsMenu } from "./ui/MenuSettings.js";
import { buildRulesMenu } from "./ui/RuleEditorPanel.js";
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
import exportIcon from '../icons/export.svg?raw'
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
        tooltip: getSettingsTooltip('inputGain', 'Input Gain. Scales all amplitude before analysis.'),
    },
    {
        key: 'cqtDetailsPer10Octaves',
        label: UI_TEXT.settings.cqtDetailResolution || 'CQT Detail Resolution',
        min: 100,
        max: 5000,
        step: 10,
        tooltip: getSettingsTooltip('cqtDetailsPer10Octaves', 'CQT Detail Resolution. Number of logarithmic bins computed per 10 octaves.'),
    },
    {
        key: 'defaultParticleSize',
        label: UI_TEXT.settings.particleDefaultSize,
        min: 1,
        max: 40,
        step: 0.5,
        tooltip: getSettingsTooltip('defaultParticleSize', 'Default Size. Base object size before rule outputs.'),
    },
    {
        key: 'maxParticles',
        label: UI_TEXT.settings.particleCapacity,
        min: 100000,
        max: 5000000,
        step: 50000,
        tooltip: getSettingsTooltip('maxParticles', 'Capacity. Total GPU object slots.'),
    },
    {
        key: 'particlesByFrame',
        label: UI_TEXT.settings.spawnRate,
        min: 100,
        max: 5000,
        step: 1,
        tooltip: getSettingsTooltip('particlesByFrame', 'Objects By Frame. Number of log-frequency spawn buckets shared by light particles and lines.'),
    },
    {
        key: 'fluxWindowFrames',
        label: UI_TEXT.settings.activityInterval,
        min: 1,
        max: 64,
        step: 1,
        tooltip: getSettingsTooltip('fluxWindowFrames', 'Flux Window Frames. Rolling frame window for activity averaging.'),
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
    export: exportIcon,
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

function getRuleFunctionParamSlots(functionId) {
    const template = RULE_FUNCTION_TEMPLATES[String(functionId || '')]
    if (!Array.isArray(template)) return []
    return template
        .filter((part) => part && typeof part === 'object' && part.slot)
        .map((part) => String(part.slot || '').trim())
        .filter(Boolean)
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

function escapeRegExpLiteral(value) {
    return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function normalizeSearchKey(value) {
    return String(value || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '')
}

function getRuleVariableAliases(entry) {
    const aliases = new Set()
    const id = String(entry?.id || '').trim()
    const label = String(entry?.label || '').trim()
    const legacyName = String(entry?.legacyName || '').trim()
    const technical = formatTechnicalTerm(legacyName || id)

    if (id) aliases.add(id)
    if (label) aliases.add(label)
    if (legacyName) aliases.add(legacyName)
    if (technical) aliases.add(technical)
    return [...aliases]
}

function findRuleVariableSuggestions(query, limit = 6) {
    const source = String(query || '').trim()
    const normalizedQuery = normalizeSearchKey(source)
    if (!normalizedQuery) return []

    const ranked = []
    for (const entry of RULE_VARIABLES) {
        const aliases = getRuleVariableAliases(entry)
        let bestRank = Number.POSITIVE_INFINITY
        for (const alias of aliases) {
            const normalizedAlias = normalizeSearchKey(alias)
            if (!normalizedAlias) continue
            if (normalizedAlias === normalizedQuery) bestRank = Math.min(bestRank, 0)
            else if (normalizedAlias.startsWith(normalizedQuery)) bestRank = Math.min(bestRank, 1)
            else if (normalizedAlias.includes(normalizedQuery)) bestRank = Math.min(bestRank, 2)
        }
        if (bestRank !== Number.POSITIVE_INFINITY) {
            ranked.push({ rank: bestRank, entry })
        }
    }

    ranked.sort((a, b) => {
        if (a.rank !== b.rank) return a.rank - b.rank
        return String(a.entry?.label || a.entry?.id || '').localeCompare(String(b.entry?.label || b.entry?.id || ''))
    })
    return ranked.slice(0, limit).map((item) => item.entry)
}

function replaceExpressionVariableAliases(expression) {
    let source = String(expression || '')
    if (!source.trim()) return source

    const replacements = []
    for (const entry of RULE_VARIABLES) {
        const id = String(entry?.id || '').trim()
        if (!id) continue
        for (const alias of getRuleVariableAliases(entry)) {
            const normalizedAlias = String(alias || '').trim()
            if (!normalizedAlias) continue
            if (normalizedAlias === id) continue
            replacements.push({ alias: normalizedAlias, id })
        }
    }

    replacements.sort((a, b) => b.alias.length - a.alias.length)

    for (const { alias, id } of replacements) {
        const escapedAlias = escapeRegExpLiteral(alias)
        const regex = new RegExp(`(^|[^A-Za-z0-9_])(${escapedAlias})(?=$|[^A-Za-z0-9_])`, 'gi')
        source = source.replace(regex, (_match, prefix) => `${prefix}${id}`)
    }

    return source
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

function readExpressionToCursor(editor) {
    if (!editor) return ''
    const selection = window.getSelection?.()
    if (!selection || selection.rangeCount === 0 || !isSelectionInside(editor, selection)) {
        return readExpressionFromEditor(editor)
    }
    const active = selection.getRangeAt(0)
    const probe = document.createRange()
    probe.selectNodeContents(editor)
    probe.setEnd(active.endContainer, active.endOffset)
    return readExpressionFromFragment(probe.cloneContents())
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

function captureEditorSelectionRange(editor) {
    if (!editor) return null
    const selection = window.getSelection?.()
    if (!selection || selection.rangeCount === 0) return null
    if (!isSelectionInside(editor, selection)) return null
    return selection.getRangeAt(0).cloneRange()
}

function restoreEditorSelectionRange(editor, savedRange) {
    if (!editor || !savedRange) return false
    const selection = window.getSelection?.()
    if (!selection) return false

    const startNode = savedRange.startContainer
    const endNode = savedRange.endContainer
    if (!startNode || !endNode) return false
    if (!editor.contains(startNode) || !editor.contains(endNode)) return false

    selection.removeAllRanges()
    selection.addRange(savedRange)
    return true
}

function getAutocompleteQueryAtCursor(editor) {
    if (!editor) return ''
    const selection = window.getSelection?.()
    if (!selection || selection.rangeCount === 0) return ''
    if (!isSelectionInside(editor, selection)) return ''

    const active = selection.getRangeAt(0)
    if (!active.collapsed) return ''

    const probe = active.cloneRange()
    probe.selectNodeContents(editor)
    probe.setEnd(active.endContainer, active.endOffset)
    const beforeText = readExpressionFromFragment(probe.cloneContents())
    const match = String(beforeText || '').match(/([A-Za-z_][A-Za-z0-9_]*(?:\s+[A-Za-z0-9_]+)*)$/)
    return String(match?.[1] || '').trim()
}

function removeTrailingQueryAtCursor(editor, query) {
    const needle = String(query || '').trim()
    if (!editor || !needle) return false
    const selection = window.getSelection?.()
    if (!selection || selection.rangeCount === 0) return false

    const range = selection.getRangeAt(0)
    if (!range.collapsed) return false

    let node = range.startContainer
    let offset = range.startOffset

    if (node.nodeType !== Node.TEXT_NODE) {
        const previous = node.childNodes[Math.max(0, offset - 1)]
        if (!(previous instanceof Text)) return false
        node = previous
        offset = previous.textContent?.length || 0
    }

    if (!(node instanceof Text)) return false
    const text = String(node.textContent || '')
    const before = text.slice(0, offset)
    if (!before.toLowerCase().endsWith(needle.toLowerCase())) return false

    const start = Math.max(0, offset - needle.length)
    node.textContent = text.slice(0, start) + text.slice(offset)

    const nextRange = document.createRange()
    nextRange.setStart(node, start)
    nextRange.collapse(true)
    selection.removeAllRanges()
    selection.addRange(nextRange)
    return true
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

    let text = ''
    const slotRanges = []
    let isFirstSlot = true
    for (const part of template) {
        if (typeof part === 'string') {
            text += part
            continue
        }
        if (part && typeof part === 'object' && part.slot) {
            const start = text.length
            if (isFirstSlot && wrappedSelection) {
                text += wrappedSelection
            }
            slotRanges.push({
                start,
                end: text.length,
                filled: isFirstSlot && !!wrappedSelection,
            })
            isFirstSlot = false
        }
    }
    text += ' '

    const textNode = document.createTextNode(text)
    range.insertNode(textNode)

    const firstEmpty = slotRanges.find((slot) => !slot.filled)
    const fallback = slotRanges[0]
    const caretOffset = firstEmpty
        ? firstEmpty.start
        : (fallback ? fallback.end : Math.max(0, text.length - 1))

    const nextRange = document.createRange()
    nextRange.setStart(textNode, Math.max(0, Math.min(caretOffset, textNode.textContent?.length || 0)))
    nextRange.collapse(true)
    selection.removeAllRanges()
    selection.addRange(nextRange)
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
            // Legacy slot markers are intentionally rendered as empty gaps.
            // Active parameter guidance is now shown by the floating hint UI.
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

    const deps = {
        el, UI_TEXT, BUTTON_ICON_MAP, params, set, setMany, resetToDefaults, clamp,
        applyButtonIcon, applyIconOnlyButton, applySelectedOptionTooltip,
        hslToRgb, rgbToHex, hexToHsl, createSelectOptions, registerSync,
        FFT_OPTIONS, SETTINGS_SLIDERS, SETTINGS_RANGES,
        NONE_VAR, RULE_OPERATORS, FIXED_RULE_ROWS, RULE_VARIABLE_ID_SET,
        RULE_SLOT_MARKER_REGEX, getRuleText, getRuleSectionLabel,
        getRuleSubgroupLabel, getRuleRowLabel, getRuleVariableById,
        createRuleConditionInputSelect, renderTokenEditor,
        readExpressionFromEditor, normalizeExpressionSlotGaps,
        replaceExpressionVariableAliases, parseExpressionToTokens,
        findRuleVariableSuggestions, captureEditorSelectionRange,
        restoreEditorSelectionRange, insertVariablePillAtCursor,
        insertFunctionTemplateAtCursor, removeTrailingQueryAtCursor,
        getAutocompleteQueryAtCursor, replaceActiveSlotWithText,
        createRuleTokenValueSelect, createRuleFunctionSelect,
        createRuleExpressionPill, normalizeToken,
        readExpressionToCursor, getRuleFunctionParamSlots,
        getRuleFunctionName, getRuleFunctionSlotLabel
    };

    buildFileMenu(menuPanes.get('start').body, deps);
    buildViewMenu(menuPanes.get("view").body, syncRegistry, deps);
    buildSettingsMenu(menuPanes.get("settings").body, syncRegistry, deps);
    buildRulesMenu(menuPanes.get("rules").body, syncRegistry, deps);

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
