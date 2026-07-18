/**
 * SEESOUND v2.0 — PitchFirstClassifier.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Pitch-first shape classifier using Fixed-Dictionary Learning.
 *
 * Algorithm (per frame, on the CQT magnitude array):
 *   1. Peak-pick on the CQT frame (240-1000 log-spaced bins) → find fundamentals
 *   2. For each fundamental, extract its harmonic slice (16 bins at f0,2f0...)
 *   3. Run NNLS against the 10-shape dictionary (~8K ops per fundamental)
 *   4. Build per-bin shape maps: each CQT bin gets shape activations from its
 *      nearest fundamental
 *   5. EMA-smooth per fundamental across frames
 *   6. Dynamic top-N sparsity gate
 *
 * This runs ENTIRELY on the main thread from already-available CQT data.
 * No worklet overhead, no JSON serialization, no 8192-bin peak scan.
 * Total cost: ~240 peak scans + ~12 peaks × 8K NNLS ops ≈ <0.5ms/frame.
 *
 * @module PitchFirstClassifier
 */

import {
    SHAPE_IDS,
    SHAPE_COUNT,
    MAX_HARMONICS,
    DICTIONARY_MATRIX,
} from './AcousticShapeDictionary.js'

// ── Constants ────────────────────────────────────────────────────────────────
const NNLS_ITERATIONS = 5
const EPS = 1e-12
const PEAK_MIN_MAGNITUDE = 0.001    // minimum CQT magnitude to consider a peak
const PEAK_MIN_DISTANCE_BINS = 3    // minimum bins between peaks (suppress harmonics)
const MAX_PEAKS = 12                 // maximum fundamentals to classify
const DEFAULT_SMOOTHING_ALPHA = 0.18
const DEFAULT_SPARSITY_TOP_N = 3

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Multiplicative update NNLS solver — fast path for tiny matrices.
 * W = 16×10, V = 16×1, H = 10×1. 5 iterations.
 */
function nnlsFast(W, V, H) {
    // Precompute WᵀV once
    const WtV = new Float64Array(SHAPE_COUNT)
    for (let s = 0; s < SHAPE_COUNT; s++) {
        let sum = 0
        for (let k = 0; k < MAX_HARMONICS; k++) {
            sum += W[k * SHAPE_COUNT + s] * V[k]
        }
        WtV[s] = sum
    }

    for (let iter = 0; iter < NNLS_ITERATIONS; iter++) {
        // WH = reconstructed spectrum
        const WH = new Float64Array(MAX_HARMONICS)
        for (let k = 0; k < MAX_HARMONICS; k++) {
            let sum = 0
            for (let s = 0; s < SHAPE_COUNT; s++) {
                sum += W[k * SHAPE_COUNT + s] * H[s]
            }
            WH[k] = sum
        }

        // Wᵀ(WH)
        const WtWH = new Float64Array(SHAPE_COUNT)
        for (let s = 0; s < SHAPE_COUNT; s++) {
            let sum = 0
            for (let k = 0; k < MAX_HARMONICS; k++) {
                sum += W[k * SHAPE_COUNT + s] * WH[k]
            }
            WtWH[s] = Math.max(EPS, sum)
        }

        // Multiplicative update + clamp
        for (let s = 0; s < SHAPE_COUNT; s++) {
            H[s] = Math.max(0, H[s] * WtV[s] / WtWH[s])
        }
    }

    // L1-normalize
    let sumH = 0
    for (let s = 0; s < SHAPE_COUNT; s++) sumH += H[s]
    if (sumH > EPS) {
        const inv = 1 / sumH
        for (let s = 0; s < SHAPE_COUNT; s++) H[s] *= inv
    }
}

/**
 * Convert a CQT bin index to Hz.
 * @param {number} binIdx
 * @param {number} cqtBins - total CQT bins
 * @param {number} minHz - lowest CQT frequency
 * @param {number} maxHz - highest CQT frequency
 */
function cqtBinToHz(binIdx, cqtBins, minHz, maxHz) {
    const t = binIdx / Math.max(1, cqtBins - 1)
    return Math.pow(2, Math.log2(minHz) + t * (Math.log2(maxHz) - Math.log2(minHz)))
}

/**
 * Convert Hz to CQT bin index (fractional).
 */
function hzToCqtBin(hz, cqtBins, minHz, maxHz) {
    const t = (Math.log2(hz) - Math.log2(minHz)) / (Math.log2(maxHz) - Math.log2(minHz))
    return t * (cqtBins - 1)
}

// ── PitchFirstClassifier ─────────────────────────────────────────────────────

export class PitchFirstClassifier {
    /**
     * @param {object} [opts]
     * @param {number} [opts.smoothingAlpha=0.18]
     * @param {number} [opts.sparsityTopN=3]
     */
    constructor(opts = {}) {
        this.smoothingAlpha = opts.smoothingAlpha ?? DEFAULT_SMOOTHING_ALPHA
        this.sparsityTopN = opts.sparsityTopN ?? DEFAULT_SPARSITY_TOP_N

        /** @type {Float64Array} Dictionary matrix (16×10, column-major) */
        this._W = DICTIONARY_MATRIX

        /** @type {Map<string, Float32Array>} f0Key → previous smoothed H */
        this._prevActivations = new Map()

        /** @type {Float32Array} Global shape activations (weighted average) */
        this.globalActivations = new Float32Array(SHAPE_COUNT)

        /** @type {Array<Object>} Detected peaks with shape data */
        this.peaks = []

        /** @type {Array<Object>} Detected entities: {fundamentalHz, dominantShape, volume, shapeActivations} */
        this.entities = []

        /** @type {number} Total CQT bins last frame */
        this._cqtBins = 0

        /** @type {number} */
        this._frameCount = 0
    }

    /**
     * Peak-pick on CQT magnitude array.
     * Finds local maxima above threshold, separated by minimum distance.
     */
    _findPeaks(mags, binCount) {
        const peaks = []
        for (let i = 1; i < binCount - 1; i++) {
            const v = mags[i]
            if (v < PEAK_MIN_MAGNITUDE) continue
            if (v <= mags[i - 1] || v <= mags[i + 1]) continue

            // Parabolic interpolation for sub-bin precision
            const m1 = mags[i - 1], m2 = mags[i], m3 = mags[i + 1]
            const denom = m1 - 2 * m2 + m3
            let subBin = 0
            if (Math.abs(denom) > 1e-9) {
                subBin = 0.5 * (m1 - m3) / denom
                subBin = Math.max(-0.49, Math.min(0.49, subBin))
            }
            const refinedBin = i + subBin
            const freqHz = cqtBinToHz(refinedBin, binCount, 40, 16000)

            // Suppress harmonics: skip if too close to a stronger peak
            let skip = false
            for (const p of peaks) {
                if (Math.abs(i - p.binIdx) < PEAK_MIN_DISTANCE_BINS) {
                    skip = true; break
                }
            }
            if (skip) continue

            peaks.push({ binIdx: i, refinedBin, freqHz, magnitude: v })

            if (peaks.length >= MAX_PEAKS) break
        }
        return peaks
    }

    setParams(topN, alpha) {
        if (Number.isFinite(topN)) this.sparsityTopN = Math.max(1, Math.min(10, Math.floor(topN)))
        if (Number.isFinite(alpha)) this.smoothingAlpha = Math.max(0.05, Math.min(0.5, alpha))
    }

    /**
     * Detect sound entities from CQT data. Each entity = (fundamentalHz, shape, volume).
     * No per-bin painting — pure list of detected sounds.
     */
    detectEntities(cqtMagnitudes) {
        if (!cqtMagnitudes || cqtMagnitudes.length < 4) {
            this.globalActivations.fill(0); this.entities = []
            return { entities: [], globalActivations: this.globalActivations }
        }
        const binCount = cqtMagnitudes.length
        const peaks = this._findPeaks(cqtMagnitudes, binCount)
        this.peaks = peaks
        if (peaks.length === 0) {
            this.globalActivations.fill(0); this.entities = []
            return { entities: [], globalActivations: this.globalActivations }
        }
        const alpha = this.smoothingAlpha, oma = 1 - alpha
        const entities = []
        for (const peak of peaks) {
            const f0 = peak.freqHz
            const V = new Float64Array(MAX_HARMONICS); let sv = 0
            for (let k = 1; k <= MAX_HARMONICS; k++) {
                const hz = f0 * k; if (hz > 20000) break
                const bi = Math.round(hzToCqtBin(hz, binCount, 40, 16000))
                if (bi >= 0 && bi < binCount) { V[k - 1] = cqtMagnitudes[bi]; sv += V[k - 1] }
            }
            if (sv < EPS) continue
            const H = new Float32Array(SHAPE_COUNT)
            for (let s = 0; s < SHAPE_COUNT; s++) H[s] = 1 / SHAPE_COUNT
            nnlsFast(this._W, V, H)
            const fk = Math.round(f0 / 5) * 5; const pH = this._prevActivations.get(fk)
            if (pH) { for (let s = 0; s < SHAPE_COUNT; s++) { H[s] = alpha * H[s] + oma * pH[s]; if (H[s] < 0) H[s] = 0; if (H[s] > 1) H[s] = 1 } }
            this._prevActivations.set(fk, new Float32Array(H))
            let ds = 0, dv = 0; for (let s = 0; s < SHAPE_COUNT; s++) { if (H[s] > dv) { dv = H[s]; ds = s } }
            entities.push({ fundamentalHz: f0, dominantShape: SHAPE_IDS[ds], dominantShapeValue: dv, volume: Math.min(1, peak.magnitude * 3), shapeActivations: H })
        }
        if (this.sparsityTopN > 0 && this.sparsityTopN < entities.length) {
            entities.sort((a, b) => b.dominantShapeValue - a.dominantShapeValue); entities.length = this.sparsityTopN
        }
        this.globalActivations.fill(0); let tw = 0
        for (const e of entities) { const w = e.volume; tw += w; for (let s = 0; s < SHAPE_COUNT; s++)this.globalActivations[s] += (e.shapeActivations?.[s] || 0) * w }
        if (tw > EPS) { const inv = 1 / tw; for (let s = 0; s < SHAPE_COUNT; s++)this.globalActivations[s] *= inv }
        this.entities = entities; this._frameCount++
        return { entities, globalActivations: this.globalActivations }
    }

    reset() {
        this._prevActivations.clear()
        this.globalActivations.fill(0)
        this.peaks = []
        this.entities = []
        this._frameCount = 0
    }
}
