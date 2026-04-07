/**
 * SEESOUND v1.0 — ParamStore.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Central parameter state. Defines every slider/toggle/dropdown, exposes a
 * live `params` object the render loop reads every frame, and provides
 * preset save/load via root preset files + browser local storage.
 */

import { sanitizeRuleBlocks } from './rules/RuleDictionary.js'
import { UI_TEXT } from './ui/UiText.js'

const STORAGE_KEY = 'seesound_user_defaults_v4'
const DISABLED_KEY = 'seesound_disabled_v4'
const USER_PRESET_STORAGE_KEY = 'seesound_user_presets_v1'
const HIDDEN_ROOT_PRESET_STORAGE_KEY = 'seesound_hidden_root_presets_v1'
const ROOT_PRESET_MODULES = import.meta.glob('../../../presets/*.json', { eager: true, import: 'default' })

export const RULE_SCHEMA_VERSION = 1
export const RULE_DEBUG_FLAGS = {
    logCompilerStatus: false,
    logCompilerTiming: false,
}

const DEFAULT_RULE_ENGINE_STATE = Object.freeze({
    ruleBlocks: [],
    ruleEngineEnabled: true,
    ruleSchemaVersion: RULE_SCHEMA_VERSION,
    palettes: [],
    ruleUiState: {
        collapsedGroups: [],
        collapsedSubgroups: [],
        collapsedRules: [],
        standaloneGroups: [],
        selectedContextGroup: 'spawnedParticles',
        selectedGroupPath: '',
        selectedGroupName: '',
        selectedSubgroup: '',
    },
})

function _sanitizeRuleUiState(raw) {
    const source = (raw && typeof raw === 'object') ? raw : {}
    return {
        collapsedGroups: Array.isArray(source.collapsedGroups) ? source.collapsedGroups.map((v) => String(v || '').trim()).filter(Boolean) : [],
        collapsedSubgroups: [],
        collapsedRules: Array.isArray(source.collapsedRules) ? source.collapsedRules.map((v) => String(v || '').trim()).filter(Boolean) : [],
        selectedContextGroup: String(source.selectedContextGroup || 'spawnedParticles'),
        selectedGroupPath: String(source.selectedGroupPath || source.selectedGroupName || ''),
        selectedGroupName: String(source.selectedGroupPath || source.selectedGroupName || ''),
        selectedSubgroup: '',
        standaloneGroups: Array.isArray(source.standaloneGroups) ? source.standaloneGroups.map((v) => String(v || '').trim()).filter(Boolean) : [],
    }
}

function _sanitizePalettes(rawPalettes) {
    if (!Array.isArray(rawPalettes)) return []
    return rawPalettes
        .map((palette, index) => {
            if (!palette || typeof palette !== 'object') return null
            const id = (typeof palette.id === 'string' && palette.id.trim())
                ? palette.id.trim()
                : `palette-${index + 1}`
            const type = (palette.type === 'continuous' || palette.type === 'discrete')
                ? palette.type
                : 'discrete'
            const colors = Array.isArray(palette.colors) ? palette.colors : []
            return {
                ...palette,
                id,
                type,
                colors,
            }
        })
        .filter(Boolean)
}

// ─────────────────────────────────────────────────────────────────────────────
// § 1  PARAMETER GROUP DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

const PARAM_GROUPS_BASE = [
    { id: 'inputGain', label: 'Input' },
    { id: 'inputProcessing', label: 'Input Processing' },
    { id: 'geometry', label: 'Geometry' },
    { id: 'mixing', label: 'View' },
]

function normRangeParam({ key, label, min, max, step, def, unit, desc }) {
    return {
        key,
        group: 'inputProcessing',
        label,
        min,
        max,
        step,
        default: def,
        unit,
        desc,
        canDisable: false,
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// § 2  PARAMETER DEFINITIONS
// Only settings that are actively used in the render pipeline are listed.
// ─────────────────────────────────────────────────────────────────────────────

const PARAMS_BASE = [
    // ── Input ──────────────────────────────────────────────────────────────
    {
        key: 'inputGain', group: 'inputGain', label: 'Sensitivity',
        min: 0, max: 3, step: 0.01, default: 1.0, unit: '×',
        desc: 'Global input gain scaler applied before analysis and spawning.',
        canDisable: false,
    },
    // ── Input Processing ───────────────────────────────────────────────────
    {
        key: 'freqNormMin', group: 'inputProcessing', label: 'Frequency Range Min',
        min: 16, max: 20000, step: 1, default: 40, unit: 'Hz',
        desc: 'Lower bound for frequency normalization.',
        canDisable: false,
    },
    {
        key: 'freqNormMax', group: 'inputProcessing', label: 'Frequency Range Max',
        min: 16, max: 20000, step: 1, default: 12000, unit: 'Hz',
        desc: 'Upper bound for frequency normalization.',
        canDisable: false,
    },
    {
        key: 'fftSize', group: 'inputProcessing', label: 'Audio Resolution',
        default: 2048, unit: '',
        desc: 'FFT analysis size. Higher values increase frequency detail.',
        isDropdown: true,
        dropdownOptions: [
            { label: '512', value: 512 },
            { label: '1024', value: 1024 },
            { label: '2048', value: 2048 },
            { label: '4096', value: 4096 },
            { label: '8192', value: 8192 },
            { label: '16384', value: 16384 },
        ],
        canDisable: false,
    },
    {
        key: 'fluxWindowFrames', group: 'inputProcessing', label: 'Activity Interval',
        min: 1, max: 64, step: 1, default: 10, unit: 'frames',
        desc: 'Rolling frame window used to smooth activity detection.',
        canDisable: false,
    },
    normRangeParam({
        key: 'binMagnitudeNormMin',
        label: 'Volume Min',
        min: -120,
        max: 0,
        step: 1,
        def: -105,
        unit: 'dBFS',
        desc: 'Normalization lower bound for per-bin volume.',
    }),
    normRangeParam({
        key: 'binMagnitudeNormMax',
        label: 'Volume Max',
        min: -120,
        max: 0,
        step: 1,
        def: 0,
        unit: 'dBFS',
        desc: 'Normalization upper bound for per-bin volume.',
    }),
    normRangeParam({
        key: 'binFluxNormMin',
        label: 'Activity Detail Min',
        min: 0,
        max: 2,
        step: 0.001,
        def: 0,
        unit: 'delta',
        desc: 'Normalization lower bound for per-frequency activity.',
    }),
    normRangeParam({
        key: 'binFluxNormMax',
        label: 'Activity Detail Max',
        min: 0,
        max: 2,
        step: 0.001,
        def: 0.5,
        unit: 'delta',
        desc: 'Normalization upper bound for per-frequency activity.',
    }),
    normRangeParam({
        key: 'binPhaseDeviationNormMin',
        label: 'Instability Min',
        min: 0,
        max: 3.14,
        step: 0.001,
        def: 0,
        unit: 'rad',
        desc: 'Normalization lower bound for per-bin instability.',
    }),
    normRangeParam({
        key: 'binPhaseDeviationNormMax',
        label: 'Instability Max',
        min: 0,
        max: 3.14,
        step: 0.001,
        def: 3.14,
        unit: 'rad',
        desc: 'Normalization upper bound for per-bin instability.',
    }),
    normRangeParam({
        key: 'binAttackTimeNormMin',
        label: 'Attack Sharpness Min',
        min: 0,
        max: 2000,
        step: 1,
        def: 5,
        unit: 'ms',
        desc: 'Normalization lower bound for per-bin attack sharpness.',
    }),
    normRangeParam({
        key: 'binAttackTimeNormMax',
        label: 'Attack Sharpness Max',
        min: 0,
        max: 2000,
        step: 1,
        def: 500,
        unit: 'ms',
        desc: 'Normalization upper bound for per-bin attack sharpness.',
    }),
    normRangeParam({
        key: 'globalRmsNormMin',
        label: 'Energy Min',
        min: -120,
        max: 0,
        step: 1,
        def: -60,
        unit: 'dBFS',
        desc: 'Normalization lower bound for frame energy.',
    }),
    normRangeParam({
        key: 'globalRmsNormMax',
        label: 'Energy Max',
        min: -120,
        max: 0,
        step: 1,
        def: 0,
        unit: 'dBFS',
        desc: 'Normalization upper bound for frame energy.',
    }),
    normRangeParam({
        key: 'spectralCentroidNormMin',
        label: 'Sharpness Min',
        min: 16,
        max: 22050,
        step: 1,
        def: 150,
        unit: 'Hz',
        desc: 'Normalization lower bound for spectral sharpness.',
    }),
    normRangeParam({
        key: 'spectralCentroidNormMax',
        label: 'Sharpness Max',
        min: 16,
        max: 22050,
        step: 1,
        def: 8000,
        unit: 'Hz',
        desc: 'Normalization upper bound for spectral sharpness.',
    }),
    normRangeParam({
        key: 'globalSpectralFluxNormMin',
        label: 'Activity Global Min',
        min: 0,
        max: 200,
        step: 0.1,
        def: 0,
        unit: 'AU',
        desc: 'Normalization lower bound for frame-level activity.',
    }),
    normRangeParam({
        key: 'globalSpectralFluxNormMax',
        label: 'Activity Global Max',
        min: 0,
        max: 200,
        step: 0.1,
        def: 100,
        unit: 'AU',
        desc: 'Normalization upper bound for frame-level activity.',
    }),
    normRangeParam({
        key: 'spectralFlatnessNormMin',
        label: 'Noisiness Min',
        min: 0,
        max: 1,
        step: 0.001,
        def: 0,
        unit: 'ratio',
        desc: 'Normalization lower bound for spectral noisiness.',
    }),
    normRangeParam({
        key: 'spectralFlatnessNormMax',
        label: 'Noisiness Max',
        min: 0,
        max: 1,
        step: 0.001,
        def: 1,
        unit: 'ratio',
        desc: 'Normalization upper bound for spectral noisiness.',
    }),

    // ── Geometry ────────────────────────────────────────────────────────────
    {
        key: 'defaultParticleSize', group: 'geometry', label: 'Default Size',
        min: 1, max: 40, step: 0.5, default: 6, unit: 'px',
        desc: 'Base diameter of every particle before per-frequency size scaling.',
        canDisable: false,
    },
    {
        key: 'canvasWidth', group: 'geometry', label: 'Canvas Width',
        min: 160, max: 12000, step: 1, default: 0, unit: 'u',
        desc: 'Explicit canvas width in Three.js world units. 0 keeps automatic sizing.',
        canDisable: false,
    },
    {
        key: 'canvasHeight', group: 'geometry', label: 'Canvas Height',
        min: 120, max: 8000, step: 1, default: 0, unit: 'u',
        desc: 'Explicit canvas height in Three.js world units. 0 keeps automatic sizing.',
        canDisable: false,
    },
    {
        key: 'canvasScale', group: 'geometry', label: 'Canvas Scale',
        min: 5, max: 400, step: 1, default: 100, unit: '%',
        desc: 'Display zoom of the canvas on screen. Does not change render resolution.',
        canDisable: false,
    },
    {
        key: 'defaultBackgroundHue', group: 'geometry', label: 'Default Background Hue',
        min: 0, max: 360, step: 1, default: 0, unit: 'deg',
        desc: 'Base background hue used before background rules are applied.',
        canDisable: false,
    },
    {
        key: 'defaultBackgroundSaturation', group: 'geometry', label: 'Default Background Saturation',
        min: 0, max: 100, step: 1, default: 0, unit: '%',
        desc: 'Base background saturation used before background rules are applied.',
        canDisable: false,
    },
    {
        key: 'defaultBackgroundLightness', group: 'geometry', label: 'Default Background Lightness',
        min: 0, max: 100, step: 1, default: 0, unit: '%',
        desc: 'Base background lightness used before background rules are applied.',
        canDisable: false,
    },
    {
        key: 'maxParticles', group: 'geometry', label: 'Capacity',
        min: 100000, max: 5000000, step: 1000, default: 1000000, unit: '',
        desc: 'Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.',
        canDisable: false,
    },
    {
        key: 'particlesByFrame', group: 'geometry', label: 'Spawn Rate',
        min: 100, max: 5000, step: 1, default: 1000, unit: 'N',
        desc: 'Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).',
        canDisable: false,
    },

    // ── Mixing ──────────────────────────────────────────────────────────────
    {
        key: 'blendMode', group: 'mixing', label: 'Blend Mode',
        default: 'screen', unit: '',
        desc: 'WebGL blending mode.',
        isDropdown: true, neutralValue: 'source-over',
        dropdownOptions: [
            { label: 'Screen (Add)', value: 'screen' },
            { label: 'Normal', value: 'source-over' },
            { label: 'Alpha', value: 'alpha' },
            { label: 'Multiply', value: 'multiply' },
        ],
    },
    {
        key: 'cameraProjection', group: 'mixing', label: 'Camera Projection',
        default: 'axonometric', unit: '',
        desc: 'Choose between axonometric (orthographic) and perspective camera projection.',
        isDropdown: true,
        dropdownOptions: [
            { label: 'Axonometric', value: 'axonometric' },
            { label: 'Perspective', value: 'perspective' },
        ],
    },
    {
        key: 'cameraAxoPreset', group: 'mixing', label: 'Axo Default View',
        default: 'orthoXY', unit: '',
        desc: 'Default axonometric camera orientation preset.',
        isDropdown: true,
        dropdownOptions: [
            { label: 'Ortho XY', value: 'orthoXY' },
            { label: 'Ortho YZ', value: 'orthoYZ' },
            { label: 'Isometric', value: 'isometric' },
            { label: '45°', value: 'fortyFive' },
            { label: 'Top (XZ)', value: 'topXZ' },
        ],
    },
    {
        key: 'cameraPosX', group: 'mixing', label: 'Camera Position X',
        min: -5000, max: 5000, step: 1, default: 0, unit: 'u',
        desc: 'Camera position X in world units.',
        canDisable: false,
    },
    {
        key: 'cameraPosY', group: 'mixing', label: 'Camera Position Y',
        min: -5000, max: 5000, step: 1, default: 0, unit: 'u',
        desc: 'Camera position Y in world units.',
        canDisable: false,
    },
    {
        key: 'cameraPosZ', group: 'mixing', label: 'Camera Position Z',
        min: -5000, max: 5000, step: 1, default: 420, unit: 'u',
        desc: 'Camera position Z in world units.',
        canDisable: false,
    },
    {
        key: 'cameraTargetX', group: 'mixing', label: 'Camera Target X',
        min: -5000, max: 5000, step: 1, default: 0, unit: 'u',
        desc: 'Camera target X in world units.',
        canDisable: false,
    },
    {
        key: 'cameraTargetY', group: 'mixing', label: 'Camera Target Y',
        min: -5000, max: 5000, step: 1, default: 0, unit: 'u',
        desc: 'Camera target Y in world units.',
        canDisable: false,
    },
    {
        key: 'cameraTargetZ', group: 'mixing', label: 'Camera Target Z',
        min: -5000, max: 5000, step: 1, default: 0, unit: 'u',
        desc: 'Camera target Z in world units.',
        canDisable: false,
    },
    {
        key: 'cameraAngleOfView', group: 'mixing', label: 'Angle Of View',
        min: 20, max: 120, step: 1, default: 55, unit: 'deg',
        desc: 'Perspective camera field of view in degrees.',
        canDisable: false,
    },
    {
        key: 'postProcessEnabled', group: 'mixing', label: 'Post-Processing',
        min: 0, max: 1, step: 1, default: 0, unit: '',
        desc: 'Master switch for all post-processing effects.',
        isToggle: true, toggleLabels: ['Off', 'On'],
    },
    {
        key: 'bloomEnabled', group: 'mixing', label: 'Bloom Enabled',
        min: 0, max: 1, step: 1, default: 1, unit: '',
        desc: 'Enable Unreal Bloom pass.',
        isToggle: true, toggleLabels: ['Off', 'On'],
    },
    {
        key: 'bloomStrength', group: 'mixing', label: 'Bloom Strength',
        min: 0, max: 4, step: 0.01, default: 1.15, unit: '',
        desc: 'Bloom intensity multiplier.',
        canDisable: false,
    },
    {
        key: 'bloomRadius', group: 'mixing', label: 'Bloom Radius',
        min: 0, max: 2, step: 0.01, default: 0.7, unit: '',
        desc: 'Bloom spread radius.',
        canDisable: false,
    },
    {
        key: 'bloomThreshold', group: 'mixing', label: 'Bloom Threshold',
        min: 0, max: 1, step: 0.01, default: 0.18, unit: '',
        desc: 'Luminance threshold before bloom is applied.',
        canDisable: false,
    },
    {
        key: 'persistMode', group: 'mixing', label: 'Persistence',
        min: 0, max: 1, step: 1, default: 0, unit: '',
        desc: 'Momentary: canvas fades each frame. Painting: marks accumulate.',
        isToggle: true, toggleLabels: ['Momentary', 'Painting'],
    },
    {
        key: 'originSignEnabled', group: 'mixing', label: 'Origin Axes',
        min: 0, max: 1, step: 1, default: 1, unit: '',
        desc: 'Show/hide origin axes guide.',
        isToggle: true, toggleLabels: ['Off', 'On'],
    },
    {
        key: 'coordinateGuidesEnabled', group: 'mixing', label: 'Coordinate Guides',
        min: 0, max: 1, step: 1, default: 0, unit: '',
        desc: 'Show/hide coordinate guide grids.',
        isToggle: true, toggleLabels: ['Off', 'On'],
    },
]

function getLocalizedSettingText(bucket, key, fallback = '') {
    const value = UI_TEXT?.settings?.[bucket]?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
}

function localizeParamGroup(definition) {
    return {
        ...definition,
        label: getLocalizedSettingText('paramGroups', definition.id, definition.label),
    }
}

function localizeParamDefinition(definition) {
    const key = String(definition?.key || '')
    return {
        ...definition,
        label: getLocalizedSettingText('paramLabels', key, definition.label),
        desc: getLocalizedSettingText('paramDescriptions', key, definition.desc),
    }
}

export const PARAM_GROUPS = PARAM_GROUPS_BASE.map(localizeParamGroup)
export const PARAMS = PARAMS_BASE.map(localizeParamDefinition)

// ─────────────────────────────────────────────────────────────────────────────
// § 3  STATE
// ─────────────────────────────────────────────────────────────────────────────

function _loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}
function _loadDisabled() {
    try { return new Set(JSON.parse(localStorage.getItem(DISABLED_KEY) || '[]')) } catch { return new Set() }
}

export function migrateRuleSchema(snapshot) {
    const source = (snapshot && typeof snapshot === 'object') ? snapshot : {}
    const migrated = { ...source }
    const incomingBlocks = Array.isArray(source.ruleBlocks) ? source.ruleBlocks : []
    const sanitization = sanitizeRuleBlocks(incomingBlocks)

    migrated.ruleBlocks = sanitization.ruleBlocks
    migrated.ruleEngineEnabled = typeof source.ruleEngineEnabled === 'boolean'
        ? source.ruleEngineEnabled
        : DEFAULT_RULE_ENGINE_STATE.ruleEngineEnabled
    migrated.ruleSchemaVersion = Number.isFinite(source.ruleSchemaVersion)
        ? Number(source.ruleSchemaVersion)
        : DEFAULT_RULE_ENGINE_STATE.ruleSchemaVersion
    migrated.palettes = _sanitizePalettes(source.palettes)
    migrated.ruleUiState = _sanitizeRuleUiState(source.ruleUiState)

    if (sanitization.rejected.length > 0) {
        console.warn('[RuleEngine] Rejected malformed ruleBlocks during migration', sanitization.rejected)
    }

    return migrated
}

function _buildInitial() {
    const saved = migrateRuleSchema(_loadSaved())
    const out = {}
    for (const p of PARAMS) {
        out[p.key] = Object.prototype.hasOwnProperty.call(saved, p.key) ? saved[p.key] : p.default
    }
    out.ruleBlocks = saved.ruleBlocks
    out.ruleEngineEnabled = saved.ruleEngineEnabled
    out.ruleSchemaVersion = saved.ruleSchemaVersion
    out.palettes = _sanitizePalettes(saved.palettes)
    out.ruleUiState = _sanitizeRuleUiState(saved.ruleUiState)
    return out
}

/** Live params object — read every frame in the render loop. */
export const params = _buildInitial()

/** Set of bypassed (disabled) param keys. */
export const disabled = _loadDisabled()

const _historyPast = []
const _historyFuture = []
const _HISTORY_LIMIT = 300
let _historyPaused = false

function _deepClone(value) {
    return JSON.parse(JSON.stringify(value))
}

function _captureState() {
    return {
        params: _deepClone(params),
        disabled: [...disabled],
    }
}

function _statesEqual(a, b) {
    if (!a || !b) return false
    if (JSON.stringify(a.params) !== JSON.stringify(b.params)) return false
    const ad = Array.isArray(a.disabled) ? [...a.disabled].sort() : []
    const bd = Array.isArray(b.disabled) ? [...b.disabled].sort() : []
    return JSON.stringify(ad) === JSON.stringify(bd)
}

function _applyState(state) {
    const merged = migrateRuleSchema((state && typeof state === 'object' ? state.params : {}) || {})
    for (const key of Object.keys(params)) delete params[key]
    for (const [k, v] of Object.entries(merged)) {
        params[k] = v
        _notify(k, v)
    }

    const nextDisabled = new Set(Array.isArray(state?.disabled) ? state.disabled : [])
    disabled.clear()
    for (const key of nextDisabled) disabled.add(key)
    try { localStorage.setItem(DISABLED_KEY, JSON.stringify([...disabled])) } catch { }
    _notify('disabled', null)
    _notify('*', merged)
}

function _pushUndoSnapshot() {
    if (_historyPaused) return
    const snapshot = _captureState()
    const prev = _historyPast[_historyPast.length - 1]
    if (prev && _statesEqual(prev, snapshot)) return
    _historyPast.push(snapshot)
    if (_historyPast.length > _HISTORY_LIMIT) _historyPast.splice(0, _historyPast.length - _HISTORY_LIMIT)
    _historyFuture.length = 0
}

export function canUndo() {
    return _historyPast.length > 0
}

export function canRedo() {
    return _historyFuture.length > 0
}

export function undo() {
    if (!canUndo()) return false
    const prev = _historyPast.pop()
    const current = _captureState()
    _historyFuture.push(current)
    _historyPaused = true
    try { _applyState(prev) } finally { _historyPaused = false }
    return true
}

export function redo() {
    if (!canRedo()) return false
    const next = _historyFuture.pop()
    const current = _captureState()
    _historyPast.push(current)
    _historyPaused = true
    try { _applyState(next) } finally { _historyPaused = false }
    return true
}

// ─────────────────────────────────────────────────────────────────────────────
// § 4  SUBSCRIBER PATTERN
// ─────────────────────────────────────────────────────────────────────────────

const _listeners = new Set()

export function subscribe(cb) {
    _listeners.add(cb)
    return () => _listeners.delete(cb)
}
function _notify(key, value) {
    for (const cb of _listeners) {
        try {
            cb(params, key, value)
        } catch (err) {
            console.warn('[ParamStore] subscriber error:', err)
        }
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// § 5  WRITE API
// ─────────────────────────────────────────────────────────────────────────────

export function set(key, value) {
    _pushUndoSnapshot()
    params[key] = value
    _notify(key, value)
}

export function setMany(updates) {
    _pushUndoSnapshot()
    const patch = (updates && typeof updates === 'object') ? updates : {}
    const merged = migrateRuleSchema({ ...params, ...patch })

    const changed = Object.create(null)
    const patchKeys = Object.keys(patch)
    for (const key of patchKeys) {
        const nextValue = merged[key]
        if (Object.is(params[key], nextValue)) continue
        params[key] = nextValue
        changed[key] = nextValue
    }

    const ruleSchemaKeys = ['ruleBlocks', 'ruleEngineEnabled', 'ruleSchemaVersion', 'palettes', 'ruleUiState']
    const includesRuleSchemaField = ruleSchemaKeys.some((key) => Object.prototype.hasOwnProperty.call(patch, key))
    if (includesRuleSchemaField) {
        for (const key of ruleSchemaKeys) {
            const nextValue = merged[key]
            if (Object.is(params[key], nextValue)) continue
            params[key] = nextValue
            changed[key] = nextValue
        }
    }

    const changedEntries = Object.entries(changed)
    if (changedEntries.length === 0) return

    for (const [k, v] of changedEntries) {
        _notify(k, v)
    }
    _notify('*', changed)
}

export function resetToDefaults() {
    _pushUndoSnapshot()
    for (const p of PARAMS) params[p.key] = p.default
    params.ruleBlocks = []
    params.ruleEngineEnabled = true
    params.ruleSchemaVersion = RULE_SCHEMA_VERSION
    params.palettes = []
    params.ruleUiState = _sanitizeRuleUiState(DEFAULT_RULE_ENGINE_STATE.ruleUiState)
    _notify('*', null)
}

export function saveUserDefault(key, value) {
    try {
        const saved = _loadSaved()
        saved[key] = value
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
    } catch { /**/ }
}

export function toggleDisabled(key) {
    _pushUndoSnapshot()
    if (disabled.has(key)) disabled.delete(key)
    else disabled.add(key)
    try { localStorage.setItem(DISABLED_KEY, JSON.stringify([...disabled])) } catch { /**/ }
    _notify('disabled', key)
}

export function getSnapshot() {
    const migrated = migrateRuleSchema(params)
    return { ...params, ...migrated, _disabled: [...disabled] }
}

function _fileStem(path) {
    const norm = String(path || '').replace(/\\/g, '/')
    const leaf = norm.slice(norm.lastIndexOf('/') + 1)
    return leaf.replace(/\.json$/i, '')
}

function _readHiddenRootPresetNames() {
    try {
        const raw = JSON.parse(localStorage.getItem(HIDDEN_ROOT_PRESET_STORAGE_KEY) || '[]')
        if (!Array.isArray(raw)) return new Set()
        return new Set(raw.map((name) => String(name || '').trim()).filter(Boolean))
    } catch {
        return new Set()
    }
}

function _writeHiddenRootPresetNames(hiddenSet) {
    try {
        localStorage.setItem(HIDDEN_ROOT_PRESET_STORAGE_KEY, JSON.stringify([...hiddenSet]))
    } catch {
        // no-op
    }
}

function _readUserPresetMap() {
    try {
        const raw = JSON.parse(localStorage.getItem(USER_PRESET_STORAGE_KEY) || '[]')
        if (!Array.isArray(raw)) return new Map()
        const out = new Map()
        for (const item of raw) {
            const name = String(item?.name || '').trim()
            if (!name) continue
            out.set(name, {
                name,
                params: _buildCanonicalPresetParams(item?.params),
            })
        }
        return out
    } catch {
        return new Map()
    }
}

function _writeUserPresetMap(presetMap) {
    try {
        const payload = [...presetMap.values()].map((entry) => ({
            name: entry.name,
            params: _buildCanonicalPresetParams(entry.params),
        }))
        localStorage.setItem(USER_PRESET_STORAGE_KEY, JSON.stringify(payload))
    } catch {
        // no-op
    }
}

let _rootPresetCache = null
function _getRootPresetMap() {
    if (_rootPresetCache) return _rootPresetCache
    const map = new Map()
    for (const [path, mod] of Object.entries(ROOT_PRESET_MODULES)) {
        const payload = (mod && typeof mod === 'object') ? mod : {}
        const name = String(payload.name || _fileStem(path)).trim()
        if (!name) continue
        map.set(name, {
            name,
            params: _buildCanonicalPresetParams(payload.params),
        })
    }
    _rootPresetCache = map
    return _rootPresetCache
}

function _dropdownValues(paramDef) {
    if (Array.isArray(paramDef?.dropdownOptions)) {
        return paramDef.dropdownOptions.map((opt) => opt.value)
    }
    if (Array.isArray(paramDef?.dropdownGroups)) {
        return paramDef.dropdownGroups.flatMap((group) => (group.options || []).map((opt) => opt.value))
    }
    return []
}

function _coerceToggleValue(raw, fallback) {
    if (raw === undefined || raw === null) return fallback
    if (typeof raw === 'boolean') return raw ? 1 : 0
    if (typeof raw === 'string') {
        const text = raw.trim().toLowerCase()
        if (text === 'painting' || text === 'paint' || text === 'on' || text === 'true') return 1
        if (text === 'momentary' || text === 'off' || text === 'false') return 0
    }
    const n = Number(raw)
    if (Number.isFinite(n)) return n >= 0.5 ? 1 : 0
    return fallback
}

function _coerceParamValue(paramDef, raw) {
    if (raw === undefined || raw === null) return undefined

    if (paramDef?.isToggle) {
        return _coerceToggleValue(raw, paramDef.default)
    }

    if (paramDef?.isDropdown) {
        const allowedValues = _dropdownValues(paramDef)
        const matched = allowedValues.find((value) => String(value) === String(raw))
        if (matched !== undefined) return matched
        return raw
    }

    const n = Number(raw)
    if (Number.isFinite(n)) return n
    return raw
}

function _buildCanonicalPresetParams(source) {
    try {
        const incoming = (source && typeof source === 'object') ? source : {}
        const canonical = { ...incoming }

        for (const paramDef of PARAMS) {
            const hasSavedValue = Object.prototype.hasOwnProperty.call(incoming, paramDef.key)
            if (!hasSavedValue || incoming[paramDef.key] === undefined || incoming[paramDef.key] === null) {
                canonical[paramDef.key] = paramDef.default
                continue
            }
            canonical[paramDef.key] = _coerceParamValue(paramDef, incoming[paramDef.key])
        }

        if (!Object.prototype.hasOwnProperty.call(incoming, 'ruleBlocks')) {
            canonical.ruleBlocks = []
        }
        if (!Object.prototype.hasOwnProperty.call(incoming, 'ruleEngineEnabled') || typeof incoming.ruleEngineEnabled !== 'boolean') {
            canonical.ruleEngineEnabled = DEFAULT_RULE_ENGINE_STATE.ruleEngineEnabled
        }
        if (!Object.prototype.hasOwnProperty.call(incoming, 'ruleSchemaVersion') || !Number.isFinite(Number(incoming.ruleSchemaVersion))) {
            canonical.ruleSchemaVersion = DEFAULT_RULE_ENGINE_STATE.ruleSchemaVersion
        } else {
            canonical.ruleSchemaVersion = Number(incoming.ruleSchemaVersion)
        }
        canonical.palettes = _sanitizePalettes(incoming.palettes)
        canonical.ruleUiState = _sanitizeRuleUiState(incoming.ruleUiState)

        if (Array.isArray(incoming._disabled)) {
            canonical._disabled = [...incoming._disabled]
        }

        return migrateRuleSchema(canonical)
    } catch (err) {
        console.warn('[Preset] canonicalization failed, falling back to raw payload:', err)
        return migrateRuleSchema((source && typeof source === 'object') ? source : {})
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// § 6  PRESET API
// ─────────────────────────────────────────────────────────────────────────────

export async function listPresets() {
    const hiddenRoot = _readHiddenRootPresetNames()
    const rootNames = [..._getRootPresetMap().keys()].filter((name) => !hiddenRoot.has(name))
    const userNames = [..._readUserPresetMap().keys()]
    return [...new Set([...rootNames, ...userNames])].sort((a, b) => a.localeCompare(b))
}

export async function savePreset(name, paramsObj) {
    const trimmed = String(name || '').trim()
    if (!trimmed) return { ok: false, error: 'Preset name is required.' }
    const normalized = _buildCanonicalPresetParams(paramsObj)
    const userPresets = _readUserPresetMap()
    userPresets.set(trimmed, { name: trimmed, params: normalized })
    _writeUserPresetMap(userPresets)

    const hiddenRoot = _readHiddenRootPresetNames()
    if (hiddenRoot.delete(trimmed)) _writeHiddenRootPresetNames(hiddenRoot)

    return { ok: true, name: trimmed, source: 'localStorage' }
}

export async function loadPreset(name) {
    const trimmed = String(name || '').trim()
    if (!trimmed) return null

    const userPresets = _readUserPresetMap()
    if (userPresets.has(trimmed)) {
        const data = userPresets.get(trimmed)
        return {
            name: data.name,
            params: _buildCanonicalPresetParams(data.params),
        }
    }

    const hiddenRoot = _readHiddenRootPresetNames()
    if (hiddenRoot.has(trimmed)) return null

    const rootPresets = _getRootPresetMap()
    if (!rootPresets.has(trimmed)) return null
    const data = rootPresets.get(trimmed)

    try {
        return { name: data.name, params: _buildCanonicalPresetParams(data.params) }
    } catch (err) {
        console.warn('[Preset] load normalization failed, applying raw params:', err)
        return { name: data.name, params: migrateRuleSchema(data.params) }
    }
}

export async function deletePreset(name) {
    const trimmed = String(name || '').trim()
    if (!trimmed) return { ok: false, deleted: false }

    const userPresets = _readUserPresetMap()
    if (userPresets.delete(trimmed)) {
        _writeUserPresetMap(userPresets)
        return { ok: true, deleted: true, source: 'localStorage' }
    }

    if (_getRootPresetMap().has(trimmed)) {
        const hiddenRoot = _readHiddenRootPresetNames()
        hiddenRoot.add(trimmed)
        _writeHiddenRootPresetNames(hiddenRoot)
        return { ok: true, deleted: true, source: 'hidden-root' }
    }

    return { ok: false, deleted: false }
}
