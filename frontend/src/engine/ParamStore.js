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
})

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
    { id: 'geometry', label: 'Geometry' },
    { id: 'mixing', label: 'Mixing' },
]

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
    {
        key: 'brightnessFloor', group: 'inputGain', label: 'Brightness Floor',
        min: 0, max: 1, step: 0.01, default: 0.2, unit: '',
        desc: 'Minimum particle brightness when signal is present.',
        canDisable: false,
    },
    {
        key: 'amplitudeToBrightness', group: 'inputGain', label: 'Amp→Brightness',
        min: 0, max: 4, step: 0.01, default: 1.25, unit: '×',
        desc: 'How strongly audio amplitude increases particle brightness.',
        canDisable: false,
    },

    // ── Geometry ────────────────────────────────────────────────────────────
    {
        key: 'defaultParticleSize', group: 'geometry', label: 'Particle Size',
        min: 1, max: 40, step: 0.5, default: 6, unit: 'px',
        desc: 'Base diameter of every particle before per-frequency size scaling.',
        canDisable: false,
    },
    {
        key: 'freqDepthEffect', group: 'geometry', label: 'Bass→Larger',
        min: 0, max: 100, step: 1, default: 100, unit: '%',
        desc: 'Bass frequencies draw as larger particles. 0% = all bins same size.',
        canDisable: true, neutralValue: 0,
    },
    {
        key: 'zDepth', group: 'geometry', label: 'Z-Axis Depth',
        min: 0, max: 100, step: 1, default: 0, unit: '%',
        desc: 'Recedes higher-frequency particles into the depth axis.',
        canDisable: true,
    },
    {
        key: 'frequencySpread', group: 'geometry', label: 'Frequency Spread',
        min: 0.6, max: 2.4, step: 0.01, default: 1.35, unit: 'γ',
        desc: 'Vertical remap exponent on log₂ frequency: >1 compresses bass spacing and opens treble spacing.',
        canDisable: false,
    },
    {
        key: 'lowFrequencyCutoff', group: 'geometry', label: 'Low Freq Cutoff',
        min: 16, max: 20000, step: 1, default: 16, unit: 'Hz',
        desc: 'Only process bins at or above this frequency. This does not alter any other mapping behavior.',
        canDisable: false,
    },
    {
        key: 'highFrequencyCutoff', group: 'geometry', label: 'High Freq Cutoff',
        min: 16, max: 20000, step: 1, default: 20000, unit: 'Hz',
        desc: 'Only process bins at or below this frequency. This does not alter any other mapping behavior.',
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
        key: 'maxParticles', group: 'geometry', label: 'Max Particle Capacity',
        min: 4096, max: 8000000, step: 1024, default: 262144, unit: '',
        desc: 'Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.',
        canDisable: false,
    },
    {
        key: 'particleRenderPercent', group: 'geometry', label: 'Particle Render %',
        min: 1, max: 100, step: 1, default: 100, unit: '%',
        desc: 'Bin thinning: only this percentage of FFT bins can spawn particles each frame (evenly distributed by bin index).',
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
    return out
}

/** Live params object — read every frame in the render loop. */
export const params = _buildInitial()

/** Set of bypassed (disabled) param keys. */
export const disabled = _loadDisabled()

// ─────────────────────────────────────────────────────────────────────────────
// § 4  SUBSCRIBER PATTERN
// ─────────────────────────────────────────────────────────────────────────────

const _listeners = new Set()

export function subscribe(cb) {
    _listeners.add(cb)
    return () => _listeners.delete(cb)
}
function _notify(key, value) {
    for (const cb of _listeners) cb(params, key, value)
}

// ─────────────────────────────────────────────────────────────────────────────
// § 5  WRITE API
// ─────────────────────────────────────────────────────────────────────────────

export function set(key, value) {
    params[key] = value
    _notify(key, value)
}

export function setMany(updates) {
    const normalized = migrateRuleSchema(updates)
    for (const [k, v] of Object.entries(normalized)) {
        params[k] = v
        _notify(k, v)
    }
    _notify('*', normalized)
}

export function resetToDefaults() {
    for (const p of PARAMS) params[p.key] = p.default
    params.tonicHz = 261.63
    params.ruleBlocks = []
    params.ruleEngineEnabled = true
    params.ruleSchemaVersion = RULE_SCHEMA_VERSION
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
    if (disabled.has(key)) disabled.delete(key)
    else disabled.add(key)
    try { localStorage.setItem(DISABLED_KEY, JSON.stringify([...disabled])) } catch { /**/ }
    _notify('disabled', key)
}

export function getSnapshot() {
    const migrated = migrateRuleSchema(params)
    return { ...params, ...migrated, _disabled: [...disabled] }
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
    const normalized = migrateRuleSchema(paramsObj)
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
    return { ...data, params: migrateRuleSchema(data.params) }
}

export async function deletePreset(name) {
    return fetch(`${API}/api/presets/${encodeURIComponent(name)}`, { method: 'DELETE' }).then(r => r.json())
}
