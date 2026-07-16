/**
 * SEESOUND v2.0 — Shared Type Definitions
 * ═══════════════════════════════════════════════════════════════════════════
 * JSDoc typedefs for the headless engine API surface.
 * These are documentation-only; no runtime exports.
 *
 * @module types
 */

/**
 * Engine operating modes. Each mode gates available audio compute paths,
 * rule variables, and UI panels.
 * @typedef {'particle'|'cloud'|'tracing'|'lines'} EngineMode
 */

/**
 * Cloud-mode positioning sub-mode.
 * - `direct`: layer xyz positions assigned by user rules.
 * - `network`: Force-Directed Graph positions entities organically.
 * @typedef {'direct'|'network'} CloudPositioningMode
 */

/**
 * Time-sampling strategy.
 * - `immediate`: per-frame audio features applied immediately.
 * - `interval`: features buffered over a foresight window, applied at
 *   a fixed cadence (trackingInterval).
 * @typedef {'immediate'|'interval'} TimeMode
 */

/**
 * UI complexity tier for progressive disclosure.
 * - `basic`: mode selector + 1-2 macro sliders.
 * - `advanced`: full rule builder, all controls.
 * @typedef {'basic'|'advanced'} UiMode
 */

/**
 * Configuration object passed to the SeesoundEngine constructor.
 * @typedef {Object} SeesoundConfig
 * @property {EngineMode} [mode='particle'] - Initial operating mode.
 * @property {TimeMode} [timeMode='immediate'] - Time sampling strategy.
 * @property {CloudPositioningMode} [cloudPositioning='direct'] - Cloud sub-mode.
 * @property {UiMode} [uiMode='basic'] - UI disclosure tier.
 * @property {number} [maxParticles=262144] - GPU particle slot capacity.
 * @property {number} [foresight=0] - Foresight window in seconds (interval mode).
 * @property {number} [delay=0] - Delay in seconds before applying features.
 * @property {number} [trackingInterval=0.5] - Update cadence in seconds (interval mode).
 */

/**
 * Audio usage flags consumed by AudioEngine.setRuleInputUsage().
 * Represents which audio computations must be active based on active rules.
 * @typedef {Object} AudioUsage
 * @property {Object} worklet - Flags for the BinAnalysis AudioWorklet.
 * @property {boolean} worklet.enabled - Whether the worklet should run at all.
 * @property {boolean} worklet.needMagnitude - Per-bin magnitude computation.
 * @property {boolean} worklet.needFlux - Per-bin spectral flux.
 * @property {boolean} worklet.needPhaseDeviation - Per-bin phase deviation.
 * @property {boolean} worklet.needPhase - Per-bin raw phase.
 * @property {boolean} worklet.needEnvelope - Per-bin envelope state.
 * @property {boolean} worklet.needAttackTime - Per-bin attack time.
 * @property {boolean} worklet.needPitchBrain - 16384-window pitch FFT.
 * @property {boolean} worklet.needRhythmBrain - 1024-window transient detection.
 * @property {boolean} worklet.needTrackerBrain - Frame-to-frame object tracking.
 * @property {boolean} worklet.needIterativeSubtraction - Time-domain waveform subtraction.
 * @property {Object} engine - Flags for main-thread feature computation.
 * @property {boolean} engine.needIterativeSubtraction - Time-domain waveform subtraction.
 * @property {boolean} engine.needRms - Global RMS energy.
 * @property {boolean} engine.needSpectralCentroid - Spectral centroid.
 * @property {boolean} engine.needGlobalSpectralFlux - Global spectral flux.
 * @property {boolean} engine.needSpectralFlatness - Spectral flatness ratio.
 * @property {boolean} engine.needInharmonicity - Inharmonicity.
 * @property {boolean} engine.needPeakAmplitude - Peak amplitude.
 * @property {boolean} engine.needZeroCrossingRate - Zero-crossing rate.
 * @property {boolean} engine.needSpectralRolloff - Spectral rolloff.
 * @property {boolean} engine.needSpectralSpread - Spectral spread.
 * @property {boolean} engine.needSpectralSkewness - Spectral skewness.
 * @property {boolean} engine.needChromagram - Chromagram.
 */

/**
 * Individual harmonic object emitted by the Quad-Brain worklet in Cloud mode.
 * @typedef {Object} HarmonicObject
 * @property {number} fundamentalHz - Precise fundamental frequency (sub-bin).
 * @property {number} pitchClass - MIDI pitch class (0-11).
 * @property {number} pitchMidi - MIDI note number.
 * @property {number} volume - Object loudness (0-1).
 * @property {number} harmonicEnergy - Summed energy across detected harmonics.
 * @property {Array<{multiple: number, magnitude: number, phase: number}>} harmonics
 *           - Detected harmonic overtones with their magnitude and phase.
 * @property {number} centroid - Localized spectral centroid (Hz).
 * @property {number} flatness - Localized spectral flatness (0-1).
 * @property {number} inharmonicity - Localized inharmonicity (0-1).
 * @property {number} temporalGroupId - Transient-group identifier (0 if none).
 * @property {number} streamId - Persistent tracker ID across frames (0 if unassigned).
 * @property {number} objectAge - Frames since first detection.
 */

/**
 * An individual source extracted by iterative time-domain subtraction.
 * @typedef {Object} IterativeSource
 * @property {number} f0 - Fundamental frequency in Hz.
 * @property {number} period - Period in samples (may be fractional).
 * @property {number} confidence - YIN periodicity confidence (0-1).
 * @property {number} volume - RMS volume of extracted waveform.
 * @property {number} streamId - Persistent tracking ID across frames.
 * @property {number} age - Frames since first detection.
 */

/**
 * A compiled rule block with its layer metadata.
 * @typedef {Object} RuleBlock
 * @property {string} id - Unique rule ID.
 * @property {string} [layerId] - Owning layer ID.
 * @property {string} [layerName] - Owning layer name.
 * @property {string} target - Rule target context.
 * @property {string} [scope] - Particle scope.
 * @property {boolean} enabled - Whether the rule is active.
 * @property {boolean} [sectionDisabled] - Whether the rule's section is disabled.
 * @property {number} order - Execution order index.
 * @property {Object} condition - Rule condition.
 * @property {Array<Object>} actions - Rule actions.
 * @property {string} [definitionExpression] - Layer definition filter expression.
 */

/**
 * Per-frame render data snapshot.
 * @typedef {Object} RenderFrame
 * @property {number} frameN - Frame counter.
 * @property {number} time - Audio current time in seconds.
 * @property {number} deltaTime - Time since last frame.
 * @property {number} canvasWidthPx - Canvas pixel width.
 * @property {number} canvasHeightPx - Canvas pixel height.
 * @property {Object<string, number>} inputs - All calculated rule input values.
 */

/**
 * Events emitted by SeesoundEngine.
 * @readonly
 * @enum {string}
 */
export const EngineEvent = Object.freeze({
    /** Fired every frame with the current RenderFrame. */
    FRAME: 'frame',
    /** Fired when the engine starts or resumes playback. */
    PLAY: 'play',
    /** Fired when playback pauses. */
    PAUSE: 'pause',
    /** Fired when the engine stops. */
    STOP: 'stop',
    /** Fired when the operating mode changes. */
    MODE_CHANGE: 'modeChange',
    /** Fired when audio is loaded. */
    AUDIO_LOADED: 'audioLoaded',
    /** Fired when a preset is loaded. */
    PRESET_LOADED: 'presetLoaded',
    /** Fired when the dependency graph updates. */
    GRAPH_UPDATED: 'graphUpdated',
    /** Fired when compile state changes. */
    COMPILE_STATE: 'compileState',
    /** Fired on error. */
    ERROR: 'error',
})

/**
 * Create a SeesoundConfig with defaults filled in.
 * @param {Partial<SeesoundConfig>} [overrides]
 * @returns {SeesoundConfig}
 */
export function createDefaultConfig(overrides = {}) {
    return {
        mode: overrides.mode ?? 'particle',
        timeMode: overrides.timeMode ?? 'immediate',
        cloudPositioning: overrides.cloudPositioning ?? 'direct',
        uiMode: overrides.uiMode ?? 'advanced',
        maxParticles: overrides.maxParticles ?? 262144,
        foresight: overrides.foresight ?? 0,
        delay: overrides.delay ?? 0,
        trackingInterval: overrides.trackingInterval ?? 0.5,
    }
}

export default {
    EngineEvent,
    createDefaultConfig,
}
