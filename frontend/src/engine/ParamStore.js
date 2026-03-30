/**
 * SEESOUND v1.0 — ParamStore.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Central parameter state. Defines every slider/toggle/dropdown, exposes a
 * live `params` object the render loop reads every frame, and provides
 * preset save/load via the backend REST API.
 */

import { sanitizeRuleBlocks } from './rules/RuleDictionary.js'

const API = 'http://localhost:8000'
const STORAGE_KEY = 'seesound_user_defaults_v4'
const DISABLED_KEY = 'seesound_disabled_v4'

// Phase checklist workflow anchor:
// 1) implement one cluster at a time, 2) verify immediately, 3) checkpoint in instructions.txt.
export const RULE_SCHEMA_VERSION = 1
// Central schema changelog (append-only):
// v1: initial rule schema scaffold + compiler debug flags.
export const RULE_SCHEMA_CHANGELOG = [
    { version: 1, date: '2026-03-17', note: 'Initial rule schema scaffold and debug flags.' },
]
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

/* TODO_RESUME (Phase 2):
 * - Add params/state: ruleBlocks, ruleEngineEnabled, ruleSchemaVersion.
 * - Include rules in getSnapshot() and preset round-trip.
 * - Add migration for legacy presets missing ruleBlocks.
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  PARAMETER GROUP DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────

export const PARAM_GROUPS = [
    { id: 'inputGain', label: 'Input' },
    { id: 'inputProcessing', label: 'Input Processing' },
    { id: 'geometry', label: 'Geometry' },
    { id: 'mixing', label: 'Mixing' },
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

export const PARAMS = [
    // ── Input ──────────────────────────────────────────────────────────────
    {
        key: 'inputGain', group: 'inputGain', label: 'Input Gain',
        min: 0, max: 3, step: 0.01, default: 1.0, unit: '×',
        desc: 'Scales every amplitude value before processing. 1× = unchanged.',
        canDisable: false,
    },
    {
        key: 'amplitudeThreshold', group: 'inputGain', label: 'Amplitude Threshold',
        min: -96, max: 0, step: 1, default: -48, unit: 'dB',
        desc: 'Hard noise gate: any bin quieter than this level is hidden.',
        canDisable: true,
    },
    // ── Input Processing ───────────────────────────────────────────────────
    {
        key: 'freqNormMin', group: 'inputProcessing', label: 'Freq Norm Min',
        min: 16, max: 20000, step: 1, default: 40, unit: 'Hz',
        desc: 'Lower bound for log2-based frequency normalization into normFreq.',
        canDisable: false,
    },
    {
        key: 'freqNormMax', group: 'inputProcessing', label: 'Freq Norm Max',
        min: 16, max: 20000, step: 1, default: 12000, unit: 'Hz',
        desc: 'Upper bound for log2-based frequency normalization into normFreq.',
        canDisable: false,
    },
    {
        key: 'fftSize', group: 'inputProcessing', label: 'FFT Size',
        default: 2048, unit: '',
        desc: 'FFT analysis size. Discrete power-of-two choices; larger sizes increase frequency detail and then progressively thin high-frequency buckets.',
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
        key: 'fluxWindowFrames', group: 'inputProcessing', label: 'Flux Window Frames',
        min: 1, max: 64, step: 1, default: 10, unit: 'frames',
        desc: 'Rolling window size used for per-bin spectral flux averaging in dynamic attack detection.',
        canDisable: false,
    },
    normRangeParam({
        key: 'binMagnitudeNormMin',
        label: 'Per-Bin Magnitude Min',
        min: -120,
        max: 0,
        step: 1,
        def: -70,
        unit: 'dBFS',
        desc: 'Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS).',
    }),
    normRangeParam({
        key: 'binMagnitudeNormMax',
        label: 'Per-Bin Magnitude Max',
        min: -120,
        max: 0,
        step: 1,
        def: 0,
        unit: 'dBFS',
        desc: 'Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS).',
    }),
    normRangeParam({
        key: 'binFluxNormMin',
        label: 'Per-Bin Spectral Flux Min',
        min: 0,
        max: 2,
        step: 0.001,
        def: 0,
        unit: 'delta',
        desc: 'Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame.',
    }),
    normRangeParam({
        key: 'binFluxNormMax',
        label: 'Per-Bin Spectral Flux Max',
        min: 0,
        max: 2,
        step: 0.001,
        def: 0.5,
        unit: 'delta',
        desc: 'Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame.',
    }),
    normRangeParam({
        key: 'binPhaseDeviationNormMin',
        label: 'Per-Bin Phase Deviation Min',
        min: 0,
        max: 3.14,
        step: 0.001,
        def: 0,
        unit: 'rad',
        desc: 'Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians.',
    }),
    normRangeParam({
        key: 'binPhaseDeviationNormMax',
        label: 'Per-Bin Phase Deviation Max',
        min: 0,
        max: 3.14,
        step: 0.001,
        def: 3.14,
        unit: 'rad',
        desc: 'Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians.',
    }),
    normRangeParam({
        key: 'binAttackTimeNormMin',
        label: 'Per-Bin Attack Time Min',
        min: 0,
        max: 2000,
        step: 1,
        def: 5,
        unit: 'ms',
        desc: 'Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms).',
    }),
    normRangeParam({
        key: 'binAttackTimeNormMax',
        label: 'Per-Bin Attack Time Max',
        min: 0,
        max: 2000,
        step: 1,
        def: 500,
        unit: 'ms',
        desc: 'Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms).',
    }),
    normRangeParam({
        key: 'globalRmsNormMin',
        label: 'Global RMS Energy Min',
        min: -120,
        max: 0,
        step: 1,
        def: -60,
        unit: 'dBFS',
        desc: 'Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS).',
    }),
    normRangeParam({
        key: 'globalRmsNormMax',
        label: 'Global RMS Energy Max',
        min: -120,
        max: 0,
        step: 1,
        def: 0,
        unit: 'dBFS',
        desc: 'Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS).',
    }),
    normRangeParam({
        key: 'spectralCentroidNormMin',
        label: 'Spectral Centroid Min',
        min: 16,
        max: 22050,
        step: 1,
        def: 150,
        unit: 'Hz',
        desc: 'Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz).',
    }),
    normRangeParam({
        key: 'spectralCentroidNormMax',
        label: 'Spectral Centroid Max',
        min: 16,
        max: 22050,
        step: 1,
        def: 8000,
        unit: 'Hz',
        desc: 'Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz).',
    }),
    normRangeParam({
        key: 'globalSpectralFluxNormMin',
        label: 'Global Spectral Flux Min',
        min: 0,
        max: 200,
        step: 0.1,
        def: 0,
        unit: 'AU',
        desc: 'Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units).',
    }),
    normRangeParam({
        key: 'globalSpectralFluxNormMax',
        label: 'Global Spectral Flux Max',
        min: 0,
        max: 200,
        step: 0.1,
        def: 100,
        unit: 'AU',
        desc: 'Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units).',
    }),
    normRangeParam({
        key: 'spectralFlatnessNormMin',
        label: 'Spectral Flatness Min',
        min: 0,
        max: 1,
        step: 0.001,
        def: 0,
        unit: 'ratio',
        desc: 'Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0).',
    }),
    normRangeParam({
        key: 'spectralFlatnessNormMax',
        label: 'Spectral Flatness Max',
        min: 0,
        max: 1,
        step: 0.001,
        def: 1,
        unit: 'ratio',
        desc: 'Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0).',
    }),

    // ── Geometry ────────────────────────────────────────────────────────────
    {
        key: 'defaultParticleSize', group: 'geometry', label: 'Particle Size',
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
        key: 'maxParticles', group: 'geometry', label: 'Max Particle Capacity',
        min: 4096, max: 8000000, step: 1024, default: 262144, unit: '',
        desc: 'Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.',
        canDisable: false,
    },
    {
        key: 'particleRenderPercent', group: 'geometry', label: 'Particle Render %',
        min: 1, max: 100, step: 1, default: 100, unit: '%',
        desc: 'Bucket thinning: only this percentage of log-frequency buckets can spawn particles each frame (evenly distributed by bucket index).',
        canDisable: false,
    },
    {
        key: 'particlesByFrame', group: 'geometry', label: 'Particles By Frame',
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
        key: 'persistMode', group: 'mixing', label: 'Persistence',
        min: 0, max: 1, step: 1, default: 0, unit: '',
        desc: 'Momentary: canvas fades each frame. Painting: marks accumulate.',
        isToggle: true, toggleLabels: ['Momentary', 'Painting'],
    },
]

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

    // Legacy compatibility: old presets used particlesPerOctave (10..500),
    // where total buckets were 10 * particlesPerOctave (100..5000).
    if (!Number.isFinite(Number(source.particlesByFrame)) && Number.isFinite(Number(source.particlesPerOctave))) {
        const legacy = Math.round(Number(source.particlesPerOctave) * 10)
        migrated.particlesByFrame = Math.max(100, Math.min(5000, legacy))
    }

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
    out.tonicHz = saved.tonicHz ?? 261.63   // kept for WS bridge compatibility
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
    const merged = { ...params, ...(updates && typeof updates === 'object' ? updates : {}) }
    const normalized = migrateRuleSchema(merged)
    for (const [k, v] of Object.entries(normalized)) {
        params[k] = v
        _notify(k, v)
    }
    _notify('*', normalized)
}

export function resetToDefaults() {
    _pushUndoSnapshot()
    for (const p of PARAMS) params[p.key] = p.default
    params.tonicHz = 261.63
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
        const legacyParticlesPerOctave = Number(incoming.particlesPerOctave)
        const hasLegacyParticlesPerOctave = Number.isFinite(legacyParticlesPerOctave)

        for (const paramDef of PARAMS) {
            const hasSavedValue = Object.prototype.hasOwnProperty.call(incoming, paramDef.key)
            if (paramDef.key === 'particlesByFrame' && !hasSavedValue && hasLegacyParticlesPerOctave) {
                const legacy = Math.round(legacyParticlesPerOctave * 10)
                canonical.particlesByFrame = Math.max(100, Math.min(5000, legacy))
                continue
            }
            if (!hasSavedValue || incoming[paramDef.key] === undefined || incoming[paramDef.key] === null) {
                canonical[paramDef.key] = paramDef.default
                continue
            }
            canonical[paramDef.key] = _coerceParamValue(paramDef, incoming[paramDef.key])
        }

        if (!Object.prototype.hasOwnProperty.call(incoming, 'tonicHz') || !Number.isFinite(Number(incoming.tonicHz))) {
            canonical.tonicHz = 261.63
        } else {
            canonical.tonicHz = Number(incoming.tonicHz)
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
    try {
        const r = await fetch(`${API}/api/presets`, { cache: 'no-store' })
        if (!r.ok) return []
        return (await r.json()).presets ?? []
    } catch { return [] }
}

export async function savePreset(name, paramsObj) {
    const normalized = _buildCanonicalPresetParams(paramsObj)
    return fetch(`${API}/api/presets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, params: normalized }),
    }).then(r => r.json())
}

export async function loadPreset(name) {
    const r = await fetch(`${API}/api/presets/${encodeURIComponent(name)}`, { cache: 'no-store' })
    if (!r.ok) return null
    const data = await r.json()
    if (!data?.params) return data
    try {
        return { ...data, params: _buildCanonicalPresetParams(data.params) }
    } catch (err) {
        console.warn('[Preset] load normalization failed, applying raw params:', err)
        return { ...data, params: migrateRuleSchema(data.params) }
    }
}

export async function deletePreset(name) {
    return fetch(`${API}/api/presets/${encodeURIComponent(name)}`, { method: 'DELETE' }).then(r => r.json())
}
