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

        /** @type {Float32Array} Per-CQT-bin shape activations, length = binCount × SHAPE_COUNT.
         *   Layout: binShapeData[bin * SHAPE_COUNT + shapeIndex] = activation  */
        this.binShapeData = null

        /** @type {Float32Array} Per-bin fundamental frequency (Hz), length = binCount */
        this.binFundamentalHz = null

        /** @type {Float32Array} Per-bin dominant shape value, length = binCount */
        this.binDominantValue = null

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
     * Process a CQT magnitude frame — pitch-first shape classification.
     *
     * @param {Float32Array|null} cqtMagnitudes — CQT magnitude array from AudioEngine
     * @param {number} [cqtMinHz=40] — lowest CQT bin frequency
     * @param {number} [cqtMaxHz=16000] — highest CQT bin frequency
     * @param {number} [sampleRate=44100] — for Hz conversion (not critical for CQT)
     * @returns {Object} classification results
     */
    classifyCqtFrame(cqtMagnitudes, cqtMinHz = 40, cqtMaxHz = 16000, sampleRate = 44100) {
        if (!cqtMagnitudes || cqtMagnitudes.length < 4) {
            this._resetOutputs(0)
            return this._buildResult()
        }

        const binCount = cqtMagnitudes.length
        this._cqtBins = binCount

        // Allocate/check per-bin shape arrays
        if (!this.binShapeData || this.binShapeData.length !== binCount * SHAPE_COUNT) {
            this.binShapeData = new Float32Array(binCount * SHAPE_COUNT)
        } else {
            this.binShapeData.fill(0)
        }
        if (!this.binFundamentalHz || this.binFundamentalHz.length !== binCount) {
            this.binFundamentalHz = new Float32Array(binCount)
        } else {
            this.binFundamentalHz.fill(0)
        }
        if (!this.binDominantValue || this.binDominantValue.length !== binCount) {
            this.binDominantValue = new Float32Array(binCount)
        } else {
            this.binDominantValue.fill(0)
        }

        // ── Step 1: Peak picking on CQT frame ──
        const peaks = this._findPeaks(cqtMagnitudes, binCount)
        this.peaks = peaks

        if (peaks.length === 0) {
            this._resetOutputs(binCount)
            return this._buildResult()
        }

        const alpha = this.smoothingAlpha
        const oneMinusAlpha = 1 - alpha
        const allShapes = []  // for top-N gate

        // ── Step 2: For each peak, extract harmonic slice + run NNLS ──
        for (let pi = 0; pi < peaks.length; pi++) {
            const peak = peaks[pi]
            const f0Hz = peak.freqHz

            // Build harmonic magnitude vector
            const V = new Float64Array(MAX_HARMONICS)
            let sumV = 0
            for (let k = 1; k <= MAX_HARMONICS; k++) {
                const harmonicHz = f0Hz * k
                if (harmonicHz > 20000) break
                const binFrac = hzToCqtBin(harmonicHz, binCount, cqtMinHz, cqtMaxHz)
                const binIdx = Math.round(binFrac)
                if (binIdx >= 0 && binIdx < binCount) {
                    V[k - 1] = cqtMagnitudes[binIdx]
                    sumV += V[k - 1]
                }
            }
            if (sumV < EPS) continue

            // ── Step 3: Run NNLS ──
            const H = new Float32Array(SHAPE_COUNT)
            const initVal = 1 / SHAPE_COUNT
            for (let s = 0; s < SHAPE_COUNT; s++) H[s] = initVal
            nnlsFast(this._W, V, H)

            // ── Step 4: EMA smooth (keyed by quantized f0 to nearest 5 Hz) ──
            const f0Key = Math.round(f0Hz / 5) * 5
            const prevH = this._prevActivations.get(f0Key)
            if (prevH) {
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    H[s] = alpha * H[s] + oneMinusAlpha * prevH[s]
                    if (H[s] < 0) H[s] = 0
                    if (H[s] > 1) H[s] = 1
                }
            }
            this._prevActivations.set(f0Key, new Float32Array(H))

            // Find dominant shape
            let domS = 0, domV = 0
            for (let s = 0; s < SHAPE_COUNT; s++) {
                if (H[s] > domV) { domV = H[s]; domS = s }
            }

            // ── Step 5: Paint shape activations onto all bins "owned" by this fundamental ──
            // Each fundamental owns bins within ±half an octave or until next fundamental
            const binLow = Math.max(0, Math.floor(peak.binIdx * 0.84))  // ~minor third below
            const binHigh = Math.min(binCount - 1, Math.ceil(peak.binIdx * 1.19)) // ~minor third above
            // Narrower: own bins closest to this fundamental vs next
            let actualLow = pi > 0
                ? Math.max(binLow, Math.floor((peak.binIdx + peaks[pi - 1].binIdx) / 2))
                : binLow
            let actualHigh = pi < peaks.length - 1
                ? Math.min(binHigh, Math.ceil((peak.binIdx + peaks[pi + 1].binIdx) / 2))
                : binHigh

            for (let b = actualLow; b <= actualHigh; b++) {
                const base = b * SHAPE_COUNT
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    this.binShapeData[base + s] = H[s]
                }
                this.binFundamentalHz[b] = f0Hz
                this.binDominantValue[b] = domV
            }

            // Store for top-N gate
            for (let s = 0; s < SHAPE_COUNT; s++) {
                allShapes.push({ peakIdx: pi, shapeIdx: s, val: H[s], f0Hz, binRange: [actualLow, actualHigh] })
            }
        }

        // ── Step 6: Dynamic top-N sparsity ──
        if (this.sparsityTopN > 0 && this.sparsityTopN < allShapes.length) {
            allShapes.sort((a, b) => b.val - a.val)
            const keep = new Set()
            for (let i = 0; i < Math.min(this.sparsityTopN, allShapes.length); i++) {
                keep.add(allShapes[i].peakIdx + '_' + allShapes[i].shapeIdx)
            }

            // Zero out non-kept in bin data
            for (let pi = 0; pi < peaks.length; pi++) {
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    if (!keep.has(pi + '_' + s)) {
                        const peak = peaks[pi]
                        const aLow = pi > 0 ? Math.max(0, Math.floor((peak.binIdx + peaks[pi - 1].binIdx) / 2)) : Math.max(0, Math.floor(peak.binIdx * 0.84))
                        const aHigh = pi < peaks.length - 1 ? Math.min(binCount - 1, Math.ceil((peak.binIdx + peaks[pi + 1].binIdx) / 2)) : Math.min(binCount - 1, Math.ceil(peak.binIdx * 1.19))
                        for (let b = aLow; b <= aHigh; b++) {
                            this.binShapeData[b * SHAPE_COUNT + s] = 0
                        }
                    }
                }
            }
        }

        // ── Step 7: Compute global averages ──
        this.globalActivations.fill(0)
        let totalWeight = 0
        for (const peak of peaks) {
            const weight = peak.magnitude
            totalWeight += weight
            const aLow = pi > 0 ? Math.max(0, Math.floor((peak.binIdx + peaks[pi - 1]?.binIdx ?? 0) / 2)) : Math.max(0, Math.floor(peak.binIdx * 0.84))
            const aHigh = pi < peaks.length - 1 ? Math.min(binCount - 1, Math.ceil((peak.binIdx + peaks[pi + 1]?.binIdx ?? binCount - 1) / 2)) : Math.min(binCount - 1, Math.ceil(peak.binIdx * 1.19))
            // Just use the peak's own H for the global average
            // Re-read from bin data at the peak bin
            const base = peak.binIdx * SHAPE_COUNT
            for (let s = 0; s < SHAPE_COUNT; s++) {
                this.globalActivations[s] += this.binShapeData[base + s] * weight
            }
        }
        if (totalWeight > EPS) {
            const inv = 1 / totalWeight
            for (let s = 0; s < SHAPE_COUNT; s++) {
                this.globalActivations[s] *= inv
            }
        }

        // Cleanup stale f0 keys
        if (this._prevActivations.size > 64) {
            const keys = [...this._prevActivations.keys()]
            for (const k of keys.slice(0, keys.length - 32)) {
                this._prevActivations.delete(k)
            }
        }

        this._frameCount++
        return this._buildResult()
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

    _resetOutputs(binCount) {
        if (this.binShapeData) this.binShapeData.fill(0)
        if (this.binFundamentalHz) this.binFundamentalHz.fill(0)
        if (this.binDominantValue) this.binDominantValue.fill(0)
        this.globalActivations.fill(0)
        this.peaks = []
        this._cqtBins = binCount
    }

    _buildResult() {
        return {
            binShapeData: this.binShapeData,
            binFundamentalHz: this.binFundamentalHz,
            binDominantValue: this.binDominantValue,
            globalActivations: this.globalActivations,
            peaks: this.peaks,
            cqtBins: this._cqtBins,
        }
    }

    /**
     * Get shape activation for a specific CQT bin and shape index.
     * @param {number} binIdx
     * @param {number} shapeIdx
     * @returns {number}
     */
    getBinShape(binIdx, shapeIdx) {
        if (!this.binShapeData || binIdx < 0 || binIdx >= this._cqtBins) return 0
        return this.binShapeData[binIdx * SHAPE_COUNT + shapeIdx] || 0
    }

    /**
     * Get all 10 shape activations for a specific CQT bin.
     * @param {number} binIdx
     * @param {Float32Array} [out] — optional pre-allocated output array
     * @returns {Float32Array}
     */
    getBinShapes(binIdx, out) {
        if (!out) out = new Float32Array(SHAPE_COUNT)
        out.fill(0)
        if (!this.binShapeData || binIdx < 0 || binIdx >= this._cqtBins) return out
        const base = binIdx * SHAPE_COUNT
        for (let s = 0; s < SHAPE_COUNT; s++) {
            out[s] = this.binShapeData[base + s] || 0
        }
        return out
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
        if (this.binShapeData) this.binShapeData.fill(0)
        if (this.binFundamentalHz) this.binFundamentalHz.fill(0)
        if (this.binDominantValue) this.binDominantValue.fill(0)
        this.peaks = []
        this.entities = []
        this._frameCount = 0
    }
}
