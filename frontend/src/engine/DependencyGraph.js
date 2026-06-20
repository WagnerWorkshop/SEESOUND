/**
 * SEESOUND v2.0 — DependencyGraph.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Mode-aware dynamic dependency graph for lazy audio computation.
 *
 * Parses active rule expressions to discover which audio inputs are
 * referenced, then emits a flat `AudioUsage` object consumed by
 * AudioEngine.setRuleInputUsage(). This formalizes the ad-hoc
 * `_deriveAudioUsage` logic from main.js v1.
 *
 * Variables are categorized as:
 *  - **axiomatic**: always computed (time, deltaTime, canvasWidthPx, ...).
 *  - **derived**:  computed only if a rule references them.
 *
 * The graph is **mode-aware**: it knows which variables are legal for each
 * EngineMode and prunes illegal references.
 */

import { getInputDictionary } from './rules/RuleDictionary.js'

// ── Axiomatic (always-computed) variables ────────────────────────────────────
const AXIOMATIC_VARS = new Set([
    'time',
    'deltaTime',
    'canvasWidthPx',
    'canvasHeightPx',
    'canvasWidthUnits',
    'canvasHeightUnits',
    'canvasWidth',
    'canvasHeight',
    'frequencyHz',
    'normFreq',
    'audioLengthSec',
    'amplitude',
    'bass',
    'mid',
    'high',
    'peakFreq',
    'pan',
    'binEnergy',
    'globalRmsEnergy',
])

export { AXIOMATIC_VARS }

// ── Variable-to-mode map
// Variable IDs → set of modes they are legal in.
// Absence = legal in all modes.
// Must match RuleDictionary _INPUT_MODES and _outputEntries[].modes.
const MODE_GATED_VARS = new Map([
    // Per-bin variables — available in all modes
    ['binMagnitude', new Set(['particle', 'cloud'])],
    ['binPhase', new Set(['particle', 'cloud'])],
    ['binFlux', new Set(['particle', 'cloud'])],
    ['binPhaseDeviation', new Set(['particle', 'cloud'])],
    ['binEnvelope', new Set(['particle', 'cloud'])],
    ['binEnvelopeState', new Set(['particle', 'cloud'])],
    ['binAttackTime', new Set(['particle', 'cloud'])],
    ['binRMSEnergy', new Set(['particle', 'cloud'])],
    ['notePitchClass', new Set(['particle', 'cloud'])],
    ['octave', new Set(['particle', 'cloud'])],
    // Cloud-mode only (entity-level variables)
    ['fundamentalHz', new Set(['cloud'])],
    ['fundamentalPitch', new Set(['cloud'])],
    ['fundamentalNote', new Set(['cloud'])],
    ['entityCentroid', new Set(['cloud'])],
    ['entityFlatness', new Set(['cloud'])],
    ['entityInharmonicity', new Set(['cloud'])],
    ['entityVolume', new Set(['cloud'])],
    ['entityAge', new Set(['cloud'])],
    ['streamId', new Set(['cloud'])],
    // isFundamental is legal in all modes (flagged at spawn/harmonic time)
    ['globalTransient', new Set(['cloud'])],
    // Output variables gated by mode
    // Cloud aura mode outputs
    ['cloudSize', new Set(['cloud'])],
    ['auraDistance', new Set(['cloud'])],
    ['auraAngle', new Set(['cloud'])],
    ['auraElevation', new Set(['cloud'])],
    ['auraLatitude', new Set(['cloud'])],
    // Cloud network mode outputs
    ['repulsion', new Set(['cloud'])],
    ['centerGravity', new Set(['cloud'])],
    ['tension', new Set(['cloud'])],
    ['particleCount', new Set(['particle'])],
])

// ── Variables that, when used, trigger a specific brain in the worklet
const BRAIN_TRIGGERS = {
    pitchBrain: new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote']),
    textureBrain: new Set(['entityCentroid', 'entityFlatness', 'entityInharmonicity', 'entityVolume']),
    rhythmBrain: new Set(['globalTransient', 'spectralFlux', 'binFlux', 'binPhaseDeviation', 'binAttackTime', 'binEnvelope', 'binEnvelopeState', 'bandTransient', 'bandFlux', 'bandInstability']),
    trackerBrain: new Set(['entityAge', 'streamId']),
}

// ── Worklet feature triggers (frequency brain — high FFT)
// Bin magnitude and phase stay on the frequency brain (worklet CQT).
// Flux, phase deviation, attack time, envelope moved to rhythm brain (low FFT main-thread).
const WORKLET_FEATURE_TRIGGERS = {
    needMagnitude: new Set(['binMagnitude', 'binEnergy', 'binRMSEnergy']),
    needFlux: new Set(['binFlux']),
    needPhaseDeviation: new Set(['binPhaseDeviation']),
    needPhase: new Set(['binPhase']),
    needEnvelope: new Set(['binEnvelope', 'binEnvelopeState']),
    needAttackTime: new Set(['binAttackTime']),
}

// ── Engine feature triggers (computed on main thread from high FFT)
const ENGINE_FEATURE_TRIGGERS = {
    needRms: new Set(['globalRmsEnergy', 'binRMSEnergy', 'amplitude']),
    needSpectralCentroid: new Set(['spectralCentroid']),
    needGlobalSpectralFlux: new Set(['spectralFlux']),
    needSpectralFlatness: new Set(['spectralFlatness']),
    needInharmonicity: new Set(['inharmonicity']),
    needPeakAmplitude: new Set(['peakAmplitude']),
    needZeroCrossingRate: new Set(['zeroCrossingRate']),
    needSpectralRolloff: new Set(['spectralRolloff']),
    needSpectralSpread: new Set(['spectralSpread']),
    needSpectralSkewness: new Set(['spectralSkewness']),
    needChromagram: new Set(['chromagram']),
}

/**
 * Collect all variable IDs referenced across a set of rule blocks.
 * Reuses the logic from RuleCompiler._collectRuleInputs.
 * @param {import('./types').RuleBlock[]} rules
 * @param {Set<string>} allInputIds - All legal input variable IDs.
 * @param {import('./types').EngineMode} mode - Current engine mode.
 * @param {boolean} [cloudNetwork=false] - Whether Cloud+Network sub-mode is active.
 * @returns {Set<string>} - Set of referenced input variable IDs (mode-filtered).
 */
function collectReferencedInputs(rules, allInputIds, mode, cloudNetwork = false) {
    const ids = new Set()

    for (const rule of (rules || [])) {
        if (!rule?.enabled || rule?.sectionDisabled === true) continue

        const cond = rule.condition || {}
        if (typeof cond.input === 'string' && allInputIds.has(cond.input)) ids.add(cond.input)
        if (typeof cond.valueInput === 'string' && allInputIds.has(cond.valueInput)) ids.add(cond.valueInput)

        // Extract variable IDs from expression strings
        for (const expr of [cond.expression, rule.definitionExpression]) {
            if (typeof expr !== 'string' || !expr) continue
            const tokens = expr.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
            for (const tok of tokens) {
                if (allInputIds.has(tok)) ids.add(tok)
            }
        }

        const actions = Array.isArray(rule.actions) ? rule.actions : []
        for (const action of actions) {
            if (typeof action?.input === 'string' && allInputIds.has(action.input)) ids.add(action.input)
            if (typeof action?.expression === 'string' && action.expression) {
                const tokens = action.expression.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
                for (const tok of tokens) {
                    if (allInputIds.has(tok)) ids.add(tok)
                }
            }
        }
    }

    // Filter by mode-gate — remove variables not legal for the current mode.
    const filtered = new Set()
    for (const id of ids) {
        const allowedModes = MODE_GATED_VARS.get(id)
        if (allowedModes && !allowedModes.has(mode)) {
            // Variable is not legal in this mode — skip it
            continue
        }
        filtered.add(id)
    }

    return filtered
}

/**
 * Build a complete AudioUsage object from referenced input IDs.
 * @param {Set<string>} referencedIds - Set of referenced input variable IDs.
 * @param {import('./types').EngineMode} mode - Current engine mode.
 * @returns {import('./types').AudioUsage} - Complete audio usage flags.
 */
export function buildAudioUsage(referencedIds, mode) {
    const used = referencedIds

    // Detect worklet brain requirements
    let needPitchBrain = false
    let needTextureBrain = false
    let needRhythmBrain = false
    let needTrackerBrain = false

    for (const id of used) {
        if (BRAIN_TRIGGERS.pitchBrain.has(id)) needPitchBrain = true
        if (BRAIN_TRIGGERS.textureBrain.has(id)) needTextureBrain = true
        if (BRAIN_TRIGGERS.rhythmBrain.has(id)) needRhythmBrain = true
        if (BRAIN_TRIGGERS.trackerBrain.has(id)) needTrackerBrain = true
    }

    // In Cloud mode, always enable the full Quad-Brain pipeline
    // (Pitch + Texture + Rhythm + Tracker) because harmonic objects
    // are the primary output, even if no individual entity variable
    // appears in a rule expression.
    if (mode === 'cloud') {
        needPitchBrain = true
        needRhythmBrain = true
        needTextureBrain = true
        needTrackerBrain = true
        // The worklet uses objectMode to decide whether to run the
        // full harmonic association or just the single-fundamental path.
    }

    // Detect worklet feature requirements
    let needMagnitude = false
    let needFlux = false
    let needPhaseDeviation = false
    let needPhase = false
    let needEnvelope = false
    let needAttackTime = false

    for (const id of used) {
        for (const [feature, triggerSet] of Object.entries(WORKLET_FEATURE_TRIGGERS)) {
            if (triggerSet.has(id)) {
                if (feature === 'needMagnitude') needMagnitude = true
                if (feature === 'needFlux') needFlux = true
                if (feature === 'needPhaseDeviation') needPhaseDeviation = true
                if (feature === 'needPhase') needPhase = true
                if (feature === 'needEnvelope') needEnvelope = true
                if (feature === 'needAttackTime') needAttackTime = true
            }
        }
    }

    // Detect engine feature requirements
    const engine = {}
    for (const [feature, triggerSet] of Object.entries(ENGINE_FEATURE_TRIGGERS)) {
        let need = false
        for (const id of used) {
            if (triggerSet.has(id)) { need = true; break }
        }
        engine[feature] = need
    }

    // Cloud mode needs the worklet enabled (for harmonic objects)
    const workletEnabled = mode === 'cloud'
        || needMagnitude || needFlux || needPhaseDeviation
        || needEnvelope || needAttackTime || needPhase
        || needPitchBrain || needTextureBrain || needRhythmBrain || needTrackerBrain

    return {
        used,
        worklet: {
            enabled: workletEnabled,
            needMagnitude,
            needFlux,
            needPhaseDeviation,
            needPhase,
            needEnvelope,
            needAttackTime,
            needPitchBrain,
            needTextureBrain,
            needRhythmBrain,
            needTrackerBrain,
            objectMode: mode,
        },
        engine: {
            needRms: engine.needRms ?? false,
            needSpectralCentroid: engine.needSpectralCentroid ?? false,
            needGlobalSpectralFlux: engine.needGlobalSpectralFlux ?? false,
            needSpectralFlatness: engine.needSpectralFlatness ?? false,
            needInharmonicity: engine.needInharmonicity ?? false,
            needPeakAmplitude: engine.needPeakAmplitude ?? false,
            needZeroCrossingRate: engine.needZeroCrossingRate ?? false,
            needSpectralRolloff: engine.needSpectralRolloff ?? false,
            needSpectralSpread: engine.needSpectralSpread ?? false,
            needSpectralSkewness: engine.needSpectralSkewness ?? false,
            needChromagram: engine.needChromagram ?? false,
        },
    }
}

/**
 * @typedef {Object} DependencyGraphResult
 * @property {Set<string>} referencedInputs - All referenced input variable IDs (mode-filtered).
 * @property {import('./types').AudioUsage} audioUsage - Complete audio usage flags.
 * @property {import('./types').EngineMode} mode - The mode used for this computation.
 */

/**
 * Resolve the full dependency graph for a set of rule blocks and an engine mode.
 *
 * @param {import('./types').RuleBlock[]} flattenedRules - Flat array of all rule blocks.
 * @param {import('./types').EngineMode} mode - Current operating mode.
 * @param {Object} [options]
 * @param {boolean} [options.cloudNetwork=false] - Cloud+Network sub-mode.
 * @returns {DependencyGraphResult}
 */
export function resolveDependencyGraph(flattenedRules, mode, options = {}) {
    const { cloudNetwork = false } = options

    // Build the full set of legal input variable IDs from the RuleDictionary.
    const dict = getInputDictionary()
    const allInputIds = new Set(dict.entries.map((e) => e.id))
    // Add axiomatic variables that might not be in dictionary
    for (const v of AXIOMATIC_VARS) allInputIds.add(v)

    // Collect referenced inputs
    const referencedInputs = collectReferencedInputs(flattenedRules, allInputIds, mode, cloudNetwork)

    // Always include axiomatic variables
    for (const v of AXIOMATIC_VARS) referencedInputs.add(v)

    // Build audio usage
    const audioUsage = buildAudioUsage(referencedInputs, mode)

    return {
        referencedInputs,
        audioUsage,
        mode,
    }
}

/**
 * Check whether a variable ID is legal in the given mode.
 * @param {string} varId
 * @param {import('./types').EngineMode} mode
 * @returns {boolean}
 */
export function isVariableLegalInMode(varId, mode) {
    const allowedModes = MODE_GATED_VARS.get(varId)
    if (!allowedModes) return true // legal in all modes
    return allowedModes.has(mode)
}

/**
 * Get the set of variables gated to a specific mode.
 * @param {import('./types').EngineMode} mode
 * @returns {Set<string>}
 */
export function getVariablesForMode(mode) {
    const vars = new Set()
    const dict = getInputDictionary()
    for (const entry of dict.entries) {
        const allowedModes = MODE_GATED_VARS.get(entry.id)
        if (!allowedModes || allowedModes.has(mode)) {
            vars.add(entry.id)
        }
    }
    // Add outputs that are legal in this mode
    return vars
}

/**
 * Get the set of output variable IDs available for a given mode.
 * @param {import('./types').EngineMode} mode
 * @param {boolean} [cloudNetwork=false]
 * @returns {Set<string>}
 */
export function getOutputsForMode(mode, cloudNetwork = false) {
    const outputs = new Set([
        'x', 'y', 'z',
        'red', 'green', 'blue',
        'rgb', 'hue', 'saturation', 'brightness', 'hsv',
        'opacity', 'size', 'shapeType',
        'particleCount',
        'length', 'direction', 'thickness', 'lineCount',
        'zoom', 'targetX', 'targetY', 'targetZ', 'angleOfView',
    ])

    if (mode === 'cloud') {
        outputs.add('cloudSize')
        outputs.add('auraDistance')
        outputs.add('auraAngle')
        outputs.add('auraElevation')
        outputs.add('auraLatitude')
        outputs.add('repulsion')
        outputs.add('centerGravity')
        outputs.add('tension')
    }

    return outputs
}

export default {
    resolveDependencyGraph,
    buildAudioUsage,
    isVariableLegalInMode,
    getVariablesForMode,
    getOutputsForMode,
    AXIOMATIC_VARS,
}
