/**
 * SEESOUND v2.0 — PitchFirstClassifier.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Pitch-first shape classifier: Look-Fit-Subtract algorithm.
 *
 * Algorithm (per frame, on the CQT magnitude array in dB from the worklet):
 *   1. Convert dB to linear, normalize to [0,1] per frame
 *   2. Find local peaks on the linear spectrum, sorted LOWEST frequency first
 *   3. LOOK: for each peak, extract its harmonic vector at log-CQT offsets
 *      (k=1..16). Harvest actual energy from residual spectrum bins.
 *   4. FIT: run mini NNLS against 10-shape dictionary to find best template.
 *      Octave-trap check: if a harmonic bin has anomalously more energy than
 *      the template allocates (e.g. another instrument at 2×f0), only subtract
 *      the allocated portion, leaving the surplus for the next pass.
 *   5. SUBTRACT: remove the winning template's harmonic signature from the
 *      residual at the specific harmonic bin positions. Move to next peak.
 *   6. EMA-smooth per fundamental across frames
 *   7. Dynamic top-N sparsity gate
 *
 * This runs ENTIRELY on the main thread from dB CQT data.
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
const PEAK_MIN_LIN_MAGNITUDE = 0.005  // ~46 dB below frame max
const PEAK_MIN_DISTANCE_BINS = 6       // wider guard for clean harmonic separation
const MAX_FUNDAMENTALS = 12
const DEFAULT_SMOOTHING_ALPHA = 0.18
const DEFAULT_SPARSITY_TOP_N = 3
const DB_NOISE_FLOOR = -90
/** How many times louder a harmonic can be vs the template prediction before
 *  we cap subtraction at the template-allocated level (octave trap). */
const OCTAVE_TRAP_RATIO = 2.5

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
    }

    // ── dB→linear conversion + normalization ────────────────────────────────

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

    // ── Peak picking — lowest frequency first ────────────────────────────────

    /**
     * Find local maxima on raw linear spectrum with parabolic interpolation,
     * sorted by ascending frequency (lowest harmonics first for Look-Fit-Subtract).
     */
    _findPeaksAscending(mags, binCount) {
        // Dynamic threshold: 8% of the frame's current maximum.
        // After subtracting a strong fundamental, the residual's max drops,
        // so weaker peaks become proportionally detectable. A fixed threshold
        // of 0.005 is too aggressive after subtraction.
        let frameMax = 0
        for (let i = 3; i < binCount - 3; i++) {
            if (mags[i] > frameMax) frameMax = mags[i]
        }
        const threshold = Math.max(PEAK_MIN_LIN_MAGNITUDE, frameMax * 0.08)
        const minDist = PEAK_MIN_DISTANCE_BINS
        const peaks = []

        for (let i = 3; i < binCount - 3; i++) {
            const v = mags[i]
            if (v < threshold) continue
            // Local max with ±2 guard
            if (v < mags[i - 1] || v < mags[i + 1] ||
                v < mags[i - 2] || v < mags[i + 2]) continue

            const m1 = mags[i - 1], m2 = v, m3 = mags[i + 1]
            const denom = m1 - 2 * m2 + m3
            let subBin = 0
            if (Math.abs(denom) > 1e-9) {
                subBin = 0.5 * (m1 - m3) / denom
                subBin = Math.max(-0.49, Math.min(0.49, subBin))
            }
            const refinedBin = i + subBin

            // Harmonic suppression: skip if within minDist of a stronger peak
            let skip = false
            for (const p of peaks) {
                if (Math.abs(i - p.binIdx) < minDist) {
                    skip = true; break
                }
            }
            if (skip) continue

            peaks.push({ binIdx: i, refinedBin, magnitude: v })
            if (peaks.length >= MAX_FUNDAMENTALS * 2) break
        }

        // Sort by ascending bin index (lowest frequency → highest)
        peaks.sort((a, b) => a.binIdx - b.binIdx)
        return peaks
    }

    setParams(topN, alpha) {
        if (Number.isFinite(topN)) this.sparsityTopN = Math.max(1, Math.min(10, Math.floor(topN)))
        if (Number.isFinite(alpha)) this.smoothingAlpha = Math.max(0.05, Math.min(0.5, alpha))
    }

    // ── Look-Fit-Subtract pipeline ───────────────────────────────────────────

    /**
     * Detect sound entities from CQT dB using Look-Fit-Subtract.
     *
     * @param {Float32Array|null} cqtMagnitudes — dB values from AudioEngine
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

        // ── Step 2: Mutable residual ──
        if (!this._residualBuf || this._residualBuf.length !== binCount) {
            this._residualBuf = new Float32Array(binCount)
        }
        for (let i = 0; i < binCount; i++) this._residualBuf[i] = linMags[i]

        const alpha = this.smoothingAlpha, oma = 1 - alpha
        const entities = []
        const allPeaks = []

        const usedFundamentals = []  // track detected f0 for harmonic rejection

        // ── Step 3-4: Greedy look-fit-subtract with re-scan ──
        for (let pass = 0; pass < MAX_FUNDAMENTALS; pass++) {
            if (entities.length >= MAX_FUNDAMENTALS) break

            // Re-scan the residual on each pass — after subtracting one
            // fundamental, new peaks become visible
            const candidatePeaks = this._findPeaksAscending(this._residualBuf, binCount)
            if (candidatePeaks.length === 0) break

            // Find the strongest remaining peak NOT already detected
            let bestPeak = null
            for (const peak of candidatePeaks) {
                const f0 = cqtBinToHz(peak.refinedBin, binCount, 40, 16000)
                if (f0 < 30 || f0 > 8000) continue

                // HARMONIC REJECTION: skip if within ±8% of an already-detected
                // fundamental or its harmonics (this peak is likely a ghost)
                let isHarmonic = false
                for (const uf of usedFundamentals) {
                    const ratio = f0 / uf
                    // Within 8% of integer ratio → this is a harmonic of uf
                    if (ratio >= 0.92 && ratio < 1.08) { isHarmonic = true; break }
                    if (ratio >= 1.92 && ratio < 2.08) { isHarmonic = true; break }
                    if (ratio >= 2.92 && ratio < 3.08) { isHarmonic = true; break }
                    if (ratio >= 0.47 && ratio < 0.53) { isHarmonic = true; break }  // sub-octave
                }
                if (isHarmonic) continue

                // Pick the strongest VALID peak
                if (!bestPeak || peak.magnitude > bestPeak.magnitude) {
                    bestPeak = peak
                }
            }
            if (!bestPeak) break

            const peak = bestPeak
            const f0 = cqtBinToHz(peak.refinedBin, binCount, 40, 16000)

            // ── LOOK: extract harmonic vector from original linMags (unsubtracted)
            // so the NNLS gets the full signal, not the residual
            const V = new Float64Array(MAX_HARMONICS)
            let sv = 0
            const harmonicBins = []
            for (let k = 1; k <= MAX_HARMONICS; k++) {
                const hz = f0 * k; if (hz > 20000) break
                const bi = Math.round(hzToCqtBin(hz, binCount, 40, 16000))
                if (bi >= 0 && bi < binCount) {
                    V[k - 1] = linMags[bi]  // use ORIGINAL, not residual
                    sv += V[k - 1]
                    harmonicBins.push(bi)
                }
            }
            if (sv < EPS) continue

            usedFundamentals.push(f0)
            allPeaks.push({ binIdx: peak.binIdx, refinedBin: peak.refinedBin, freqHz: f0, magnitude: peak.magnitude })

            // ── FIT: NNLS shape classification ──
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

            // ── SUBTRACT: aggressively remove this fundamental ──
            const tpl = getTemplate(dominantShapeId)
            if (!tpl) continue

            const subGain = dv * 1.2  // over-subtract slightly to prevent ghost re-detection

            for (let k = 1; k <= MAX_HARMONICS; k++) {
                const hz = f0 * k; if (hz > 20000) break
                const bi = Math.round(hzToCqtBin(hz, binCount, 40, 16000))
                if (bi < 0 || bi >= binCount) continue

                const actualEnergy = this._residualBuf[bi]
                const templateEnergy = subGain * (tpl[k - 1] || 0)

                // Octave-trap: if another instrument lives at 2×f0, don't erase it
                if (k >= 2 && actualEnergy > templateEnergy * OCTAVE_TRAP_RATIO) {
                    this._residualBuf[bi] = Math.max(0, actualEnergy - templateEnergy)
                } else {
                    this._residualBuf[bi] = Math.max(0, actualEnergy - templateEnergy * 1.5)
                }
            }
        }

        this.peaks = allPeaks

        // ── Step 5: Top-N sparsity gate ──
        if (this.sparsityTopN > 0 && entities.length > this.sparsityTopN) {
            entities.sort((a, b) => b.volume - a.volume)
            entities.length = this.sparsityTopN
        }

        // ── Step 6: Global weighted average ──
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
