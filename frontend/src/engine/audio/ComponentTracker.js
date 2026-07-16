/**
 * SEESOUND v2.0 — ComponentTracker.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Per-component audio analysis engine.
 *
 * Transforms the log-frequency (CQT) magnitude spectrogram into a set of
 * tracked sound components via sparse online NMF with cross-frame cosine
 * similarity matching. Each component represents a distinct acoustic layer
 * (e.g. a violin, a voice, a drum) and carries its own timbre metrics.
 *
 * The "distinctness" parameter (λ) controls the sparsity penalty: higher
 * values force fewer, more separated components; lower values allow more
 * overlap and blending.
 *
 * @module ComponentTracker
 */

// ── Constants ────────────────────────────────────────────────────────────────

const MAX_COMPONENTS = 16
const CQT_BUFFER_FRAMES = 8           // sliding window depth for NMF
const CQT_BINS = 240                   // log-frequency bin count
const FREQ_MIN_HZ = 40
const FREQ_MAX_HZ = 16000
const LOG_FREQ_MIN = Math.log2(FREQ_MIN_HZ)
const LOG_FREQ_MAX = Math.log2(FREQ_MAX_HZ)
const EPS = 1e-12
const DEFAULT_SPARSITY = 0.15          // default λ (distinctness)
const ONSET_HIGH_WINDOW = 3            // frames for high-freq onset (fast)
const ONSET_LOW_WINDOW = 8             // frames for low-freq onset (slow)
const ONSET_CROSSOVER_HZ = 500         // boundary between "high" and "low"
const MATCH_COSINE_THRESHOLD = 0.6     // minimum cosine similarity to match across frames

// ── Helpers ──────────────────────────────────────────────────────────────────

function clamp01(v) {
    return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0))
}

/**
 * Convert Hz to log-frequency normalized index [0, CQT_BINS).
 */
function hzToLogBin(hz) {
    const logNorm = (Math.log2(Math.max(FREQ_MIN_HZ, Math.min(FREQ_MAX_HZ, hz))) - LOG_FREQ_MIN) /
        (LOG_FREQ_MAX - LOG_FREQ_MIN)
    return logNorm * (CQT_BINS - 1)
}

/**
 * Convert log-frequency bin index back to Hz (centre frequency).
 */
function logBinToHz(bin) {
    const t = bin / Math.max(1, CQT_BINS - 1)
    return Math.pow(2, LOG_FREQ_MIN + t * (LOG_FREQ_MAX - LOG_FREQ_MIN))
}

/**
 * Sample a CQT magnitude array (log-spaced) at a given Hz value
 * using linear interpolation.
 */
function sampleCqtAtHz(array, hz) {
    if (!array || array.length === 0) return 0
    const pos = hzToLogBin(hz)
    const i0 = Math.max(0, Math.min(array.length - 1, Math.floor(pos)))
    const i1 = Math.max(0, Math.min(array.length - 1, i0 + 1))
    const frac = pos - i0
    const v0 = Number(array[i0]) || 0
    const v1 = Number(array[i1]) || 0
    return v0 + (v1 - v0) * frac
}

/**
 * Compute cosine similarity between two vectors.
 */
function cosineSimilarity(a, b) {
    let dot = 0, na = 0, nb = 0
    const n = Math.min(a.length, b.length)
    for (let i = 0; i < n; i++) {
        const ai = a[i] || 0
        const bi = b[i] || 0
        dot += ai * bi
        na += ai * ai
        nb += bi * bi
    }
    const denom = Math.sqrt(na) * Math.sqrt(nb)
    return denom > EPS ? dot / denom : 0
}

/**
 * Soft thresholding function for L1 sparsity.
 */
function softThreshold(x, lambda) {
    return Math.max(0, x - lambda)
}

// ── Log-Frequency Spectrogram Frame ──────────────────────────────────────────

/**
 * Build a log-frequency magnitude vector from the raw FFT frequency data
 * using the CQT magnitude array and per-bin volume normalisation.
 *
 * @param {Uint8Array} freqData — Raw FFT data (byte array, 0-255)
 * @param {Float32Array|null} binMagArr — CQT magnitude array (log-spaced)
 * @param {number} fftSize — FFT size (e.g. 16384)
 * @param {number} sampleRate — Audio sample rate
 * @param {number} gainMult — Input gain multiplier
 * @returns {Float64Array} CQT_BINS-length log-magnitude frame
 */
function buildLogFrame(freqData, binMagArr, fftSize, sampleRate, gainMult) {
    const frame = new Float64Array(CQT_BINS)
    const nyquist = sampleRate / 2
    const binToHz = (i) => (i / (fftSize / 2)) * nyquist

    for (let b = 0; b < CQT_BINS; b++) {
        const hz = logBinToHz(b)
        let mag = 0

        if (binMagArr && binMagArr.length > 0) {
            // Use CQT magnitude (log-spaced) directly
            mag = sampleCqtAtHz(binMagArr, hz)
        } else if (freqData && freqData.length > 0) {
            // Fallback: linear FFT with log-spaced sampling
            const binIdx = (hz / nyquist) * (fftSize / 2)
            const i0 = Math.max(0, Math.min(freqData.length - 1, Math.floor(binIdx)))
            const i1 = Math.max(0, Math.min(freqData.length - 1, i0 + 1))
            const frac = binIdx - i0
            const v0 = freqData[i0] / 255
            const v1 = freqData[i1] / 255
            mag = v0 + (v1 - v0) * frac
        }

        frame[b] = Math.max(0, mag * gainMult)
    }

    return frame
}

/**
 * Build a per-bin flux frame (frame-to-frame magnitude change).
 */
function buildFluxFrame(currentMag, previousMag) {
    const frame = new Float64Array(CQT_BINS)
    const n = Math.min(currentMag.length, previousMag ? previousMag.length : 0, CQT_BINS)
    for (let i = 0; i < n; i++) {
        const d = (currentMag[i] || 0) - (previousMag[i] || 0)
        frame[i] = Math.max(0, d)
    }
    return frame
}

// ── Component Object ─────────────────────────────────────────────────────────

/**
 * @typedef {Object} Component
 * @property {number} id — Unique component index
 * @property {Float64Array} template — Spectral template (CQT_BINS length)
 * @property {number} activation — Current activation energy (scalar)
 * @property {number} centroid — Spectral centroid (Hz)
 * @property {number} flatness — Spectral flatness (0-1)
 * @property {number} flux — Spectral flux (0-1)
 * @property {number} onset — Onset strength (0-1)
 * @property {number} age — Frames since first detection
 * @property {number} streamId — Persistent tracking ID across frames
 * @property {number} energy — Total energy of this component
 */

function createComponent(id) {
    return {
        id,
        template: new Float64Array(CQT_BINS),
        activation: 0,
        centroid: 0,
        flatness: 0,
        flux: 0,
        onset: 0,
        age: 0,
        streamId: id,
        energy: 0,
    }
}

// ── Timbre Metric Computation ────────────────────────────────────────────────

/**
 * Compute spectral centroid (weighted mean frequency in Hz) from a template.
 */
function computeCentroid(template) {
    let weighted = 0, total = 0
    for (let i = 0; i < template.length; i++) {
        const mag = template[i] || 0
        if (mag > EPS) {
            const hz = logBinToHz(i)
            weighted += hz * mag
            total += mag
        }
    }
    return total > EPS ? weighted / total : 0
}

/**
 * Compute spectral flatness (Wiener entropy ratio, 0-1).
 */
function computeFlatness(template) {
    let sumLog = 0, sumMag = 0, count = 0
    for (let i = 0; i < template.length; i++) {
        const mag = template[i] || 0
        if (mag > EPS) {
            sumLog += Math.log(mag)
            sumMag += mag
            count++
        }
    }
    if (count < 2 || sumMag <= EPS) return 0
    const gm = Math.exp(sumLog / count)
    const am = sumMag / count
    return clamp01(gm / am)
}

/**
 * Compute average spectral flux (frame-to-frame change) from current and previous templates.
 */
function computeFlux(currentTemplate, previousTemplate) {
    if (!previousTemplate) return 0
    let sum = 0, count = 0
    const n = Math.min(currentTemplate.length, previousTemplate.length)
    for (let i = 0; i < n; i++) {
        const d = (currentTemplate[i] || 0) - (previousTemplate[i] || 0)
        if (d > 0) {
            sum += d
            count++
        }
    }
    return count > 0 ? clamp01(sum / count) : 0
}

// ── ComponentTracker Class ───────────────────────────────────────────────────

export class ComponentTracker {
    /**
     * @param {object} [opts]
     * @param {number} [opts.maxComponents=12] — Upper bound on component count
     * @param {number} [opts.sparsity=DEFAULT_SPARSITY] — L₁ sparsity penalty λ
     * @param {number} [opts.matchThreshold=MATCH_COSINE_THRESHOLD] — Cosine similarity threshold
     */
    constructor(opts = {}) {
        /** @type {number} Maximum number of components */
        this._maxComponents = Math.max(2, Math.min(MAX_COMPONENTS, opts.maxComponents ?? 12))

        /** @type {number} Sparsity penalty λ — higher = fewer components */
        this._sparsity = opts.sparsity ?? DEFAULT_SPARSITY

        /** @type {number} Cosine similarity threshold for cross-frame matching */
        this._matchThreshold = opts.matchThreshold ?? MATCH_COSINE_THRESHOLD

        /** @type {Component[]} Active components this frame */
        this._components = []

        /** @type {Component[]} Previous frame's components (for matching) */
        this._prevComponents = []

        /** @type {Float64Array[]} CQT frame buffer (sliding window) */
        this._cqtBuffer = []

        /** @type {Float64Array|null} Previous log-magnitude frame (for flux) */
        this._prevLogFrame = null

        /** @type {number} Frame counter */
        this._frameCount = 0

        /** @type {number} Next available stream ID */
        this._nextStreamId = 0

        /** @type {number} Onset buffer: ring buffer for onset detection */
        this._onsetBuffer = []

        /** @type {number} Onset buffer size */
        this._onsetBufferSize = ONSET_LOW_WINDOW

        /** @type {Map<number, Component>} Stream ID → component lookup */
        this._streamMap = new Map()

        /** @type {boolean} Cold-start flag — first frame suppresses onset */
        this._coldStart = true

        /** @type {number} Play state tracking — reset onset buffers on play */
        this._wasPlaying = false

        // ── Public readout (updated each frame) ──
        /** @type {Component[]} Live component array — read by ParticleSystem */
        this.components = []

        /** @type {number} Total active component count */
        this.componentCount = 0

        /** @type {number[]} Per-bin component assignment (CQT_BINS length, -1 = no component) */
        this.binAssignment = new Int16Array(CQT_BINS).fill(-1)

        // ── Pre-allocated temp vectors ──
        this._tempMagnitude = new Float64Array(CQT_BINS)
        this._tempTemplate = new Float64Array(CQT_BINS)
        this._workResidual = new Float64Array(CQT_BINS)
    }

    // ── Public API ───────────────────────────────────────────────────────────

    /**
     * Set the distinctness/sparsity parameter.
     * @param {number} value — 0 (blended) to 1 (highly separated)
     */
    setDistinctness(value) {
        // Map 0..1 slider to a reasonable λ range
        // 0    → λ = 0.01 (almost no sparsity)
        // 0.5  → λ = 0.15 (default)
        // 1    → λ = 0.50 (very sparse, few components)
        const slider = clamp01(value)
        this._sparsity = 0.01 + slider * 0.49
    }

    /**
     * Set the cosine match threshold.
     * @param {number} value — 0 (lax matching) to 1 (strict matching)
     */
    setMatchThreshold(value) {
        this._matchThreshold = 0.3 + clamp01(value) * 0.4
    }

    /**
     * Reset all tracked state.
     */
    reset() {
        this._components = []
        this._prevComponents = []
        this._cqtBuffer = []
        this._prevLogFrame = null
        this._frameCount = 0
        this._nextStreamId = 0
        this._onsetBuffer = []
        this._streamMap.clear()
        this.components = []
        this.componentCount = 0
        this.binAssignment.fill(-1)
        this._coldStart = true
        this._wasPlaying = false
    }

    /**
     * Notify the tracker of playback state changes.
     * Call this when audio pauses, resumes, or seeks to prevent
     * transient hallucination artifacts from silence→signal transitions.
     * @param {boolean} isPlaying — Whether audio is currently playing
     */
    notePlayStateChange(isPlaying) {
        if (isPlaying && !this._wasPlaying) {
            // Transitioned from paused/stopped to playing — reset onset buffers
            // to prevent the silence→signal boundary from registering as a
            // false transient.
            this._coldStart = true
            for (const comp of this._components) {
                if (comp._onsetRing) comp._onsetRing.length = 0
            }
            this._onsetBuffer = []
        }
        this._wasPlaying = isPlaying
    }

    /**
     * Process one frame of audio data and update component state.
     *
     * @param {object} frameData
     * @param {Uint8Array} frameData.freqData — Raw FFT frequency data
     * @param {Float32Array|null} frameData.binMagArr — CQT magnitude array
     * @param {number} frameData.fftSize — FFT size
     * @param {number} frameData.sampleRate — Sample rate
     * @param {number} frameData.gainMult — Input gain multiplier
     */
    processFrame(frameData) {
        const { freqData, binMagArr, fftSize, sampleRate, gainMult } = frameData
        if (!freqData || !sampleRate) return

        // ── 1. Build log-frequency frame ──
        const logFrame = buildLogFrame(freqData, binMagArr, fftSize, sampleRate, gainMult)

        // ── 2. Add to CQT buffer ──
        this._cqtBuffer.push(logFrame)
        if (this._cqtBuffer.length > CQT_BUFFER_FRAMES) {
            this._cqtBuffer.shift()
        }

        // ── 3. Build flux frame ──
        // Cold-start: initialise prevLogFrame with zeros so the first real frame
        // doesn't register a hallucinated transient from null→signal.
        if (!this._prevLogFrame) {
            this._prevLogFrame = new Float64Array(CQT_BINS)
        }
        const fluxFrame = this._frameCount > 0
            ? buildFluxFrame(logFrame, this._prevLogFrame)
            : new Float64Array(CQT_BINS)
        this._prevLogFrame = logFrame

        // ── 4. Sparse NMF decomposition ──
        this._decomposeToComponents(logFrame, fluxFrame)

        // ── 5. Cross-frame matching ──
        this._matchComponentsAcrossFrames()

        // ── 6. Compute timbre metrics ──
        this._computeTimbreMetrics()

        // ── 7. Compute onset strengths ──
        // Suppress onset during cold-start to prevent silence→signal
        // transient hallucination. The transient detection uses frequency-
        // adaptive windows (3 frames for high freqs, 8 for low freqs), so
        // we suppress for at least 10 frames to cover the worst case.
        if (this._coldStart && this._frameCount < 10) {
            for (const comp of this._components) {
                comp.onset = 0
            }
        } else {
            this._computeOnsets(fluxFrame, sampleRate)
        }
        if (this._coldStart && this._frameCount >= 12) {
            this._coldStart = false
        }

        // ── 8. Update public readout ──
        this._updatePublicReadout()

        this._frameCount++
    }

    // ── Step 4: Sparse NMF Decomposition ────────────────────────────────────

    /**
     * Decompose the current log-frequency frame into sparse components
     * using an online NMF-like algorithm.
     *
     * Uses multiplicative update with L1 sparsity regularization on the
     * activation vector. The number of active components is determined
     * by the sparsity penalty λ.
     */
    _decomposeToComponents(logFrame, fluxFrame) {
        const lambda = this._sparsity
        const maxComp = this._maxComponents

        // If we have fewer than 2 CQT frames, or no previous components exist,
        // initialise with a component built from the log-magnitude frame.
        // Normalise the template so it can match future frames reliably.
        if (this._frameCount < 2 || this._prevComponents.length === 0) {
            const comp = createComponent(0)
            let templateNorm = 0
            for (let i = 0; i < CQT_BINS; i++) {
                comp.template[i] = Math.max(EPS, logFrame[i] || EPS)
                templateNorm += comp.template[i] * comp.template[i]
            }
            if (templateNorm > EPS) {
                const invNorm = 1 / Math.sqrt(templateNorm)
                for (let i = 0; i < CQT_BINS; i++) comp.template[i] *= invNorm
            }
            comp.activation = 1.0
            this._components = [comp]
            return
        }

        // Use the previous frame's components to warm-start the decomposition
        const prevComps = this._prevComponents.length > 0
            ? this._prevComponents
            : this._components

        // Copy current frame as the residual — we'll peel off components
        const residual = new Float64Array(CQT_BINS)
        for (let i = 0; i < CQT_BINS; i++) residual[i] = Math.max(EPS, logFrame[i] || EPS)

        // Allocate activation candidates
        const activations = new Float64Array(maxComp)
        const newTemplates = []

        // Iterative matching-pursuit style decomposition with L1 sparsity
        const extracted = []
        const usedIndices = new Set()

        // Determine max iterations based on available energy
        const totalEnergy = residual.reduce((s, v) => s + v, 0)
        if (totalEnergy < EPS) {
            // No energy this frame — keep the previous frame's component(s)
            // so per-component variables never go undefined for downstream rules.
            // If there are no previous components either, create one silent dummy.
            if (this._prevComponents.length > 0) {
                this._components = this._prevComponents.map((c) => {
                    const copy = createComponent(c.id)
                    for (let i = 0; i < CQT_BINS; i++) copy.template[i] = c.template[i]
                    copy.activation = 0
                    copy.centroid = c.centroid
                    copy.flatness = c.flatness
                    copy.flux = 0
                    copy.onset = 0
                    copy.age = c.age + 1
                    copy.streamId = c.streamId
                    copy.energy = 0
                    return copy
                })
            } else {
                // No previous components — create a trivial fallback
                const comp = createComponent(0)
                for (let i = 0; i < CQT_BINS; i++) {
                    comp.template[i] = 1 / Math.sqrt(CQT_BINS)
                }
                comp.activation = EPS
                this._components = [comp]
            }
            return
        }

        const energyThreshold = totalEnergy * 0.005 // stop when 99.5% explained
        let remainingEnergy = totalEnergy

        // Limit iterations to maxComponents to avoid runaway
        for (let iter = 0; iter < maxComp; iter++) {
            if (remainingEnergy < energyThreshold) break

            // Find which previous component template (or a new one) best
            // explains the current residual
            let bestIdx = -1
            let bestScore = -Infinity

            // Try each previous component template
            for (let p = 0; p < prevComps.length; p++) {
                if (usedIndices.has(p)) continue
                const prevTemplate = prevComps[p].template
                let dot = 0, norm = 0
                for (let i = 0; i < CQT_BINS; i++) {
                    dot += residual[i] * prevTemplate[i]
                    norm += prevTemplate[i] * prevTemplate[i]
                }
                const score = norm > EPS ? dot / Math.sqrt(norm) : 0
                if (score > bestScore) {
                    bestScore = score
                    bestIdx = p
                }
            }

            // Also consider a "mean residual" template (to discover new components)
            let meanScore = 0
            for (let i = 0; i < CQT_BINS; i++) {
                meanScore += residual[i]
            }
            meanScore /= Math.sqrt(CQT_BINS)

            // Apply sparsity penalty: if meanScore * (1 - lambda) beats the
            // best previous match, start a new component.
            // Also start a new component if the best previous match would be
            // killed by soft threshold — this prevents silent frames from
            // producing zero components.
            const sparsityDiscount = 1 - lambda
            if ((meanScore * sparsityDiscount > bestScore || bestScore < lambda) && iter < maxComp - 1) {
                // Create a new template from the residual
                const newTemplate = new Float64Array(CQT_BINS)
                for (let i = 0; i < CQT_BINS; i++) {
                    newTemplate[i] = Math.max(0, residual[i])
                }
                // Normalise
                let templateNorm = 0
                for (let i = 0; i < CQT_BINS; i++) templateNorm += newTemplate[i] * newTemplate[i]
                if (templateNorm > EPS) {
                    const invNorm = 1 / Math.sqrt(templateNorm)
                    for (let i = 0; i < CQT_BINS; i++) newTemplate[i] *= invNorm
                }

                // Compute activation with soft thresholding (L1 sparsity)
                let activation = 0
                for (let i = 0; i < CQT_BINS; i++) {
                    activation += residual[i] * newTemplate[i]
                }
                activation = softThreshold(activation, lambda * 0.5)
                // Always produce at least a minimal activation so the extraction
                // loop never stalls on quiet frames.
                if (activation <= EPS) activation = EPS

                const newComp = createComponent(iter)
                for (let i = 0; i < CQT_BINS; i++) {
                    newComp.template[i] = newTemplate[i]
                }
                newComp.activation = activation
                extracted.push(newComp)

                // Subtract explained energy from residual
                for (let i = 0; i < CQT_BINS; i++) {
                    residual[i] = Math.max(EPS, residual[i] - activation * newTemplate[i])
                }
                remainingEnergy = residual.reduce((s, v) => s + v, 0)
                continue
            }

            // Use best-matching previous component
            if (bestIdx < 0) break

            const matchedComp = prevComps[bestIdx]
            usedIndices.add(bestIdx)
            const template = matchedComp.template

            // Compute activation with soft thresholding (L1 sparsity)
            let activation = 0
            for (let i = 0; i < CQT_BINS; i++) {
                activation += residual[i] * template[i]
            }
            activation = softThreshold(activation, lambda)
            // Always produce at least a minimal activation so the extraction
            // loop never stalls. Each iteration MUST produce a component to
            // guarantee componentCount > 0 for downstream rules.
            if (activation <= EPS) activation = EPS

            // Slightly adapt the template to the current frame (online learning)
            const learnRate = 0.3
            const adaptedTemplate = new Float64Array(CQT_BINS)
            for (let i = 0; i < CQT_BINS; i++) {
                const target = Math.max(EPS, residual[i] / Math.max(EPS, activation))
                adaptedTemplate[i] = (1 - learnRate) * template[i] + learnRate * target
            }
            // Re-normalise the adapted template
            let templateNorm = 0
            for (let i = 0; i < CQT_BINS; i++) templateNorm += adaptedTemplate[i] * adaptedTemplate[i]
            if (templateNorm > EPS) {
                const invNorm = 1 / Math.sqrt(templateNorm)
                for (let i = 0; i < CQT_BINS; i++) adaptedTemplate[i] *= invNorm
            }

            const comp = createComponent(matchedComp.id)
            for (let i = 0; i < CQT_BINS; i++) {
                comp.template[i] = adaptedTemplate[i]
            }
            comp.activation = activation
            comp.streamId = matchedComp.streamId
            comp.age = matchedComp.age + 1
            extracted.push(comp)

            // Subtract explained energy from residual
            for (let i = 0; i < CQT_BINS; i++) {
                residual[i] = Math.max(EPS, residual[i] - activation * adaptedTemplate[i])
            }
            remainingEnergy = residual.reduce((s, v) => s + v, 0)
        }

        // Sort extracted components by activation descending
        extracted.sort((a, b) => b.activation - a.activation)

        // ── Deduplicate near-identical components ──
        // The epsilon activation floor can produce several components with
        // nearly identical templates (each iteration barely changes the
        // residual). Merge them by keeping only the first component for
        // each distinct spectral shape.
        const unique = []
        const DUP_SIMILARITY = 0.92
        for (const comp of extracted) {
            let isDuplicate = false
            for (const existing of unique) {
                const sim = cosineSimilarity(comp.template, existing.template)
                if (sim > DUP_SIMILARITY) {
                    isDuplicate = true
                    break
                }
            }
            if (!isDuplicate) unique.push(comp)
        }
        extracted.length = 0
        extracted.push(...unique)

        // ── Fallback: ensure at least one non-degenerate component ──
        // When audio is very quiet or during fade-in ramps, the matching-
        // pursuit loop may fail to extract any component (all activations
        // zero from softThreshold). Produce a single component from the
        // log-magnitude frame so downstream consumers never see an empty set.
        if (extracted.length === 0) {
            const fallback = createComponent(0)
            let fbNorm = 0
            for (let i = 0; i < CQT_BINS; i++) {
                fallback.template[i] = Math.max(EPS, logFrame[i] || EPS)
                fbNorm += fallback.template[i] * fallback.template[i]
            }
            if (fbNorm > EPS) {
                const invFn = 1 / Math.sqrt(fbNorm)
                for (let i = 0; i < CQT_BINS; i++) fallback.template[i] *= invFn
            }
            fallback.activation = Math.sqrt(fbNorm)
            if (fallback.activation < EPS) fallback.activation = EPS
            extracted.push(fallback)
        }

        // Re-assign IDs based on sorted order
        for (let i = 0; i < extracted.length; i++) {
            extracted[i].id = i
        }

        this._components = extracted
    }

    // ── Step 5: Cross-Frame Matching ─────────────────────────────────────────

    /**
     * Match current frame's components to previous frame's components
     * using cosine similarity. This ensures that the same sound source
     * keeps the same streamId across frames (fingerprint continuity).
     */
    _matchComponentsAcrossFrames() {
        if (this._prevComponents.length === 0 || this._components.length === 0) return

        const prev = this._prevComponents
        const curr = this._components
        const matchThreshold = this._matchThreshold

        // Build similarity matrix (curr × prev)
        const simMatrix = curr.map((c) =>
            prev.map((p) => cosineSimilarity(c.template, p.template))
        )

        // Greedy assignment: for each current component, find the best
        // matching previous component above threshold
        const assignedPrev = new Set()

        for (let ci = 0; ci < curr.length; ci++) {
            let bestPj = -1
            let bestSim = this._matchThreshold

            for (let pj = 0; pj < prev.length; pj++) {
                if (assignedPrev.has(pj)) continue
                const sim = simMatrix[ci][pj]
                if (sim > bestSim) {
                    bestSim = sim
                    bestPj = pj
                }
            }

            if (bestPj >= 0) {
                // Match found — inherit streamId and other metadata
                const matchedPrev = prev[bestPj]
                curr[ci].streamId = matchedPrev.streamId
                curr[ci].age = matchedPrev.age + 1
                assignedPrev.add(bestPj)
            } else if (ci < prev.length) {
                // No similarity match, but inherit streamId by index to
                // preserve component identity across frames when the template
                // has drifted or during fallback/noise frames.
                // This prevents a new streamId every frame (rainbow effect).
                curr[ci].streamId = prev[ci].streamId
                curr[ci].age = prev[ci].age + 1
            } else {
                // No match — this is a new component
                curr[ci].streamId = this._nextStreamId++
                curr[ci].age = 0
            }
        }
    }

    // ── Step 6: Timbre Metrics ──────────────────────────────────────────────

    /**
     * Compute spectral centroid, flatness, and flux for each component.
     */
    _computeTimbreMetrics() {
        const curr = this._components
        const prevComps = this._prevComponents.length > 0
            ? this._prevComponents
            : null

        for (let i = 0; i < curr.length; i++) {
            const comp = curr[i]

            // Centroid
            comp.centroid = computeCentroid(comp.template)

            // Flatness
            comp.flatness = computeFlatness(comp.template)

            // Flux: compare current template to (matched previous template)
            if (prevComps) {
                let matchedPrev = null
                for (const p of prevComps) {
                    if (p.streamId === comp.streamId) {
                        matchedPrev = p
                        break
                    }
                }
                comp.flux = matchedPrev
                    ? computeFlux(comp.template, matchedPrev.template)
                    : 0
            } else {
                comp.flux = 0
            }

            // Energy
            comp.energy = comp.activation
        }
    }

    // ── Step 7: Onset Detection ─────────────────────────────────────────────

    /**
     * Compute per-component onset strength.
     * High frequencies use a short window (fast response), low frequencies
     * use a longer window (frequency-preserving). The crossover is at ONSET_CROSSOVER_HZ.
     */
    _computeOnsets(fluxFrame, sampleRate) {
        const curr = this._components

        // Compute per-component flux-weighted centroid to determine onset window
        for (let i = 0; i < curr.length; i++) {
            const comp = curr[i]

            // Determine onset window based on component spectral centroid
            const centroidHz = comp.centroid || 1000
            const isHighFreq = centroidHz > ONSET_CROSSOVER_HZ
            const windowSize = isHighFreq ? ONSET_HIGH_WINDOW : ONSET_LOW_WINDOW

            // Compute flux-weighted activation as onset proxy
            let templateFlux = 0
            let fluxWeight = 0
            for (let b = 0; b < CQT_BINS; b++) {
                const tMag = comp.template[b] || 0
                const fMag = fluxFrame[b] || 0
                templateFlux += tMag * fMag
                fluxWeight += tMag
            }

            const rawOnset = fluxWeight > EPS ? templateFlux / fluxWeight : 0

            // Store in onset ring buffer
            if (!comp._onsetRing) comp._onsetRing = []
            comp._onsetRing.push(rawOnset)
            if (comp._onsetRing.length > windowSize) {
                comp._onsetRing.shift()
            }

            // Onset is the peak-to-average ratio in the ring buffer
            const avg = comp._onsetRing.reduce((s, v) => s + v, 0) / Math.max(1, comp._onsetRing.length)
            const peak = Math.max(...comp._onsetRing)
            comp.onset = avg > EPS ? clamp01((peak - avg) / avg) : 0
        }
    }

    // ── Step 8: Public Readout ──────────────────────────────────────────────

    /**
     * Update the public-facing readout arrays consumed by ParticleSystem.
     * Also compute per-bin component assignment for the bucket loop.
     */
    _updatePublicReadout() {
        this.components = this._components
        this.componentCount = this._components.length

        // Assign each CQT bin to the most dominant component
        this.binAssignment.fill(-1)

        if (this._components.length === 0) return

        // For each bin, find which component has the strongest template energy
        for (let b = 0; b < CQT_BINS; b++) {
            let bestComp = -1
            let bestMag = 0

            for (let c = 0; c < this._components.length; c++) {
                const mag = this._components[c].template[b] || 0
                if (mag > bestMag) {
                    bestMag = mag
                    bestComp = c
                }
            }

            if (bestMag > EPS) {
                this.binAssignment[b] = bestComp
            }
        }

        // Store current components for next frame's matching
        this._prevComponents = this._components.map((c) => {
            const copy = createComponent(c.id)
            for (let i = 0; i < CQT_BINS; i++) copy.template[i] = c.template[i]
            copy.activation = c.activation
            copy.centroid = c.centroid
            copy.flatness = c.flatness
            copy.flux = c.flux
            copy.onset = c.onset
            copy.age = c.age
            copy.streamId = c.streamId
            copy.energy = c.energy
            return copy
        })
    }

    // ── Utility: Get component at Hz ────────────────────────────────────────

    /**
     * Get the dominant component index at a given frequency.
     * @param {number} hz — Frequency in Hz
     * @returns {number} Component index, or -1 if none
     */
    getComponentAtHz(hz) {
        const bin = Math.round(hzToLogBin(hz))
        if (bin < 0 || bin >= CQT_BINS) return -1
        return this.binAssignment[bin]
    }

    /**
     * Get the component with a given stream ID.
     * @param {number} streamId
     * @returns {Component|null}
     */
    getComponentByStreamId(streamId) {
        return this._components.find((c) => c.streamId === streamId) || null
    }

    /**
     * Get per-component timbre metrics as plain objects for rule inputs.
     * @returns {Array<{componentId: number, centroid: number, flatness: number, flux: number, onset: number, streamId: number, energy: number}>}
     */
    getComponentMetrics() {
        return this._components.map((c) => ({
            componentId: c.streamId,
            centroid: c.centroid,
            flatness: c.flatness,
            flux: c.flux,
            onset: c.onset,
            streamId: c.streamId,
            energy: c.energy,
        }))
    }
}

export default ComponentTracker
