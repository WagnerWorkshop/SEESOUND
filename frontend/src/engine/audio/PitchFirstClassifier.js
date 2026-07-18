/**
 * SEESOUND v2.0 — PitchFirstClassifier.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Pitch-first shape classifier using Fixed-Dictionary Learning.
 *
 * Algorithm (per frame, on the CQT magnitude array in dB from the worklet):
 *   1. Convert dB to linear, normalize to [0,1] per frame
 *   2. HPS (Harmonic Product Spectrum) to suppress octave errors
 *   3. Greedy peak-pick → NNLS classify → subtract harmonics → repeat
 *   4. EMA-smooth per fundamental across frames
 *   5. Dynamic top-N sparsity gate
 *
 * The greedy subtraction step unmasks quieter overlapping instruments
 * by removing the loudest instrument's harmonic pattern from the spectrum
 * before searching for the next fundamental.
 *
 * @module PitchFirstClassifier
 */

import {
    SHAPE_IDS,
    SHAPE_COUNT,
    MAX_HARMONICS,
    DICTIONARY_MATRIX,
    getTemplate,
} from './AcousticShapeDictionary.js'

// ── Constants ────────────────────────────────────────────────────────────────
const NNLS_ITERATIONS = 5
const EPS = 1e-12
/** Threshold after dB→linear→normalize. ~0.01 ≈ peak 40 dB below frame max. */
const PEAK_MIN_NORM_MAGNITUDE = 0.01
const PEAK_MIN_DISTANCE_BINS = 4
const MAX_PEAKS = 12
const DEFAULT_SMOOTHING_ALPHA = 0.18
const DEFAULT_SPARSITY_TOP_N = 3
/** dB noise floor — bins below this are clamped to silence before linear conversion */
const DB_NOISE_FLOOR = -90
/** HPS downsample factors: R = 2, 3, 4, 5 */
const HPS_FACTORS = [2, 3, 4, 5]

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Multiplicative update NNLS solver — fast path for tiny matrices.
 * W = 16×10, V = 16×1 (linear magnitudes), H = 10×1. 5 iterations.
 */
function nnlsFast(W, V, H) {
    const WtV = new Float64Array(SHAPE_COUNT)
    for (let s = 0; s < SHAPE_COUNT; s++) {
        let sum = 0
        for (let k = 0; k < MAX_HARMONICS; k++) {
            sum += W[k * SHAPE_COUNT + s] * V[k]
        }
        WtV[s] = sum
    }

    for (let iter = 0; iter < NNLS_ITERATIONS; iter++) {
        const WH = new Float64Array(MAX_HARMONICS)
        for (let k = 0; k < MAX_HARMONICS; k++) {
            let sum = 0
            for (let s = 0; s < SHAPE_COUNT; s++) {
                sum += W[k * SHAPE_COUNT + s] * H[s]
            }
            WH[k] = sum
        }

        const WtWH = new Float64Array(SHAPE_COUNT)
        for (let s = 0; s < SHAPE_COUNT; s++) {
            let sum = 0
            for (let k = 0; k < MAX_HARMONICS; k++) {
                sum += W[k * SHAPE_COUNT + s] * WH[k]
            }
            WtWH[s] = Math.max(EPS, sum)
        }

        for (let s = 0; s < SHAPE_COUNT; s++) {
            H[s] = Math.max(0, H[s] * WtV[s] / WtWH[s])
        }
    }

    let sumH = 0
    for (let s = 0; s < SHAPE_COUNT; s++) sumH += H[s]
    if (sumH > EPS) {
        const inv = 1 / sumH
        for (let s = 0; s < SHAPE_COUNT; s++) H[s] *= inv
    }
}

function cqtBinToHz(binIdx, cqtBins, minHz, maxHz) {
    const t = binIdx / Math.max(1, cqtBins - 1)
    return Math.pow(2, Math.log2(minHz) + t * (Math.log2(maxHz) - Math.log2(minHz)))
}

function hzToCqtBin(hz, cqtBins, minHz, maxHz) {
    const t = (Math.log2(hz) - Math.log2(minHz)) / (Math.log2(maxHz) - Math.log2(minHz))
    return t * (cqtBins - 1)
}

// ── PitchFirstClassifier ─────────────────────────────────────────────────────

export class PitchFirstClassifier {
    constructor(opts = {}) {
        this.smoothingAlpha = opts.smoothingAlpha ?? DEFAULT_SMOOTHING_ALPHA
        this.sparsityTopN = opts.sparsityTopN ?? DEFAULT_SPARSITY_TOP_N

        /** @type {Float64Array} Dictionary matrix (16×10, column-major) */
        this._W = DICTIONARY_MATRIX

        /** @type {Map<string, Float32Array>} f0Key → previous smoothed H */
        this._prevActivations = new Map()

        /** @type {Float32Array} Global shape activations (weighted average) */
        this.globalActivations = new Float32Array(SHAPE_COUNT)

        this.peaks = []
        this.entities = []
        this._cqtBins = 0
        this._frameCount = 0

        // Pre-allocate reusable buffers
        this._linBuf = null
        this._residualBuf = null
        this._hpsBuf = null
    }

    // ── dB→linear conversion + normalization ────────────────────────────────

    /**
     * Convert dB magnitude array to linear, clamp noise floor, normalize to [0,1].
     * This fixes the Web Audio API dB format mismatch — the worklet sends
     * dB values (-120..0) but the peak detector and NNLS need linear (0..1).
     * @param {Float32Array|null} dbMags
     * @returns {Float32Array} linear values normalized to [0,1]
     */
    _dbToLinearAndNormalize(dbMags) {
        const n = dbMags.length
        if (!this._linBuf || this._linBuf.length !== n) {
            this._linBuf = new Float32Array(n)
        }

        let maxVal = 0
        for (let i = 0; i < n; i++) {
            const db = Math.max(DB_NOISE_FLOOR, dbMags[i])
            const val = Math.pow(10, db / 20)
            this._linBuf[i] = val
            if (val > maxVal) maxVal = val
        }

        if (maxVal > EPS) {
            const inv = 1 / maxVal
            for (let i = 0; i < n; i++) this._linBuf[i] *= inv
        }

        return this._linBuf
    }

    // ── Harmonic Product Spectrum ────────────────────────────────────────────

    /**
     * Compute HPS to suppress octave errors.
     *
     * Downsamples the spectrum by factors 2,3,4,5, then multiplies
     * them together element-wise. The true fundamental gets amplified
     * exponentially because every harmonic layer aligns at that exact bin.
     * Overtones (2f0, 3f0...) are NOT aligned across all downsampled
     * spectra — their peaks get crushed by multiplication with near-zero
     * values from misaligned spectra.
     *
     * A sqrt compression prevents extreme attenuation after 4-way multiplication.
     *
     * @param {Float32Array} linMags — linear normalized magnitudes [0,1]
     * @param {number} binCount
     * @returns {Float32Array} HPS product spectrum
     */
    _hpsSpectrum(linMags, binCount) {
        if (!this._hpsBuf || this._hpsBuf.length !== binCount) {
            this._hpsBuf = new Float32Array(binCount)
        }

        // Start with a copy of the original (factor 1)
        for (let i = 0; i < binCount; i++) this._hpsBuf[i] = linMags[i]

        const downsampled = new Float32Array(binCount)

        for (const R of HPS_FACTORS) {
            downsampled.fill(0)
            for (let i = 0; i < binCount; i++) {
                const srcIdx = i * R
                if (srcIdx >= binCount) break
                if (srcIdx >= binCount - 1) {
                    downsampled[i] = linMags[binCount - 1] || 0
                } else {
                    const floor = Math.floor(srcIdx)
                    const frac = srcIdx - floor
                    const v0 = linMags[floor] || 0
                    const v1 = linMags[floor + 1] || 0
                    downsampled[i] = v0 + (v1 - v0) * frac
                }
            }
            for (let i = 0; i < binCount; i++) {
                this._hpsBuf[i] *= downsampled[i]
            }
        }

        // Sqrt compression to prevent extreme values
        for (let i = 0; i < binCount; i++) {
            this._hpsBuf[i] = Math.sqrt(Math.max(0, this._hpsBuf[i]))
        }

        return this._hpsBuf
    }

    // ── Peak picking on linear-normalized spectrum ───────────────────────────

    /**
     * Find peaks using parabolic interpolation for sub-bin precision.
     * @param {Float32Array} mags — linear normalized magnitudes [0,1]
     * @param {number} binCount
     * @returns {Array}
     */
    _findPeaks(mags, binCount) {
        const peaks = []
        for (let i = 1; i < binCount - 1; i++) {
            const v = mags[i]
            if (v < PEAK_MIN_NORM_MAGNITUDE) continue
            if (v <= mags[i - 1] || v <= mags[i + 1]) continue

            const m1 = mags[i - 1], m2 = mags[i], m3 = mags[i + 1]
            const denom = m1 - 2 * m2 + m3
            let subBin = 0
            if (Math.abs(denom) > 1e-9) {
                subBin = 0.5 * (m1 - m3) / denom
                subBin = Math.max(-0.49, Math.min(0.49, subBin))
            }
            const refinedBin = i + subBin
            const freqHz = cqtBinToHz(refinedBin, binCount, 40, 16000)

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

    // ── Main detection pipeline ──────────────────────────────────────────────

    /**
     * Detect sound entities from CQT dB data using HPS + greedy subtraction.
     *
     * @param {Float32Array|null} cqtMagnitudes — dB values from AudioEngine (-120..0)
     * @returns {{entities: Array, globalActivations: Float32Array}}
     */
    detectEntities(cqtMagnitudes) {
        if (!cqtMagnitudes || cqtMagnitudes.length < 4) {
            this.globalActivations.fill(0); this.entities = []
            return { entities: [], globalActivations: this.globalActivations }
        }

        const binCount = cqtMagnitudes.length
        this._cqtBins = binCount

        // ── Step 1: dB → linear → normalize ──
        const linMags = this._dbToLinearAndNormalize(cqtMagnitudes)

        // ── Step 2: Mutable residual for greedy subtraction ──
        if (!this._residualBuf || this._residualBuf.length !== binCount) {
            this._residualBuf = new Float32Array(binCount)
        }
        for (let i = 0; i < binCount; i++) this._residualBuf[i] = linMags[i]

        const alpha = this.smoothingAlpha, oma = 1 - alpha
        const entities = []
        const allPeaks = []

        // ── Step 3: Greedy loop — find, classify, subtract, repeat ──
        for (let pass = 0; pass < MAX_PEAKS; pass++) {
            // HPS on the residual to find the next dominant fundamental
            const hps = this._hpsSpectrum(this._residualBuf, binCount)
            const peaks = this._findPeaks(hps, binCount)
            if (peaks.length === 0) break

            const peak = peaks[0]
            allPeaks.push(peak)

            // ── Extract harmonic vector from RESIDUAL (linear, not dB!) ──
            const f0 = peak.freqHz
            const V = new Float64Array(MAX_HARMONICS)
            let sv = 0
            for (let k = 1; k <= MAX_HARMONICS; k++) {
                const hz = f0 * k; if (hz > 20000) break
                const bi = Math.round(hzToCqtBin(hz, binCount, 40, 16000))
                if (bi >= 0 && bi < binCount) {
                    V[k - 1] = this._residualBuf[bi]
                    sv += V[k - 1]
                }
            }
            if (sv < EPS) continue

            // ── NNLS shape classification (uses RESIDUAL linear values) ──
            const H = new Float32Array(SHAPE_COUNT)
            for (let s = 0; s < SHAPE_COUNT; s++) H[s] = 1 / SHAPE_COUNT
            nnlsFast(this._W, V, H)

            // ── EMA smooth by quantized f0 ──
            const fk = Math.round(f0 / 5) * 5
            const prevH = this._prevActivations.get(fk)
            if (prevH) {
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    H[s] = alpha * H[s] + oma * prevH[s]
                    if (H[s] < 0) H[s] = 0
                    if (H[s] > 1) H[s] = 1
                }
            }
            this._prevActivations.set(fk, new Float32Array(H))

            // ── Dominant shape ──
            let ds = 0, dv = 0
            for (let s = 0; s < SHAPE_COUNT; s++) {
                if (H[s] > dv) { dv = H[s]; ds = s }
            }

            const dominantShapeId = SHAPE_IDS[ds]
            const volume = Math.min(1, peak.magnitude * 5)

            entities.push({
                fundamentalHz: f0,
                dominantShape: dominantShapeId,
                dominantShapeValue: dv,
                volume,
                shapeActivations: H,
            })

            // ── GREEDY SUBTRACTION ──
            // Remove this fundamental's harmonic template from the residual
            // so quieter overlapping instruments get unmasked.
            const tpl = getTemplate(dominantShapeId)
            if (tpl) {
                const subGain = dv * 0.6
                for (let k = 1; k <= MAX_HARMONICS; k++) {
                    const hz = f0 * k; if (hz > 20000) break
                    const bi = Math.round(hzToCqtBin(hz, binCount, 40, 16000))
                    if (bi >= 0 && bi < binCount) {
                        const tplVal = tpl[k - 1] || 0
                        this._residualBuf[bi] = Math.max(0, this._residualBuf[bi] - subGain * tplVal)
                    }
                }
            }
        }

        this.peaks = allPeaks

        // ── Step 4: Top-N sparsity gate ──
        if (this.sparsityTopN > 0 && entities.length > this.sparsityTopN) {
            entities.sort((a, b) => b.dominantShapeValue - a.dominantShapeValue)
            entities.length = this.sparsityTopN
        }

        // ── Step 5: Global weighted average ──
        this.globalActivations.fill(0)
        let totalWeight = 0
        for (const e of entities) {
            const w = e.volume
            totalWeight += w
            for (let s = 0; s < SHAPE_COUNT; s++) {
                this.globalActivations[s] += (e.shapeActivations?.[s] || 0) * w
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

        this.entities = entities
        this._frameCount++
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
