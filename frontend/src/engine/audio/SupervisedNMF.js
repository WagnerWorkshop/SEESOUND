/**
 * SEESOUND v2.0 — SupervisedNMF.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Per-fundamental shape classifier using Fixed-Dictionary Learning.
 *
 * Takes harmonic objects from BinAnalysisWorklet (via _findHarmonicObjects),
 * runs NNLS against the 10-shape dictionary, applies EMA smoothing and
 * dynamic top-N sparsity gating.
 *
 * This is a TEXTURE CLASSIFIER, not an instrument separator. For dense
 * orchestral audio, multiple shapes co-activate — the top-N gate prevents
 * visual mud by keeping only the N most dominant texture×pitch combos.
 *
 * Algorithm: multiplicative update NNLS
 *   H = H .* (WᵀV) ./ (WᵀWH + ε)
 * where W = 16×10 dictionary matrix, V = harmonic magnitude vector (16×1),
 * and H = shape activation vector (10×1). 5 iterations per object.
 *
 * @module SupervisedNMF
 */

import {
    SHAPE_IDS,
    SHAPE_COUNT,
    MAX_HARMONICS,
    DICTIONARY_MATRIX,
    SHAPE_METADATA,
} from './AcousticShapeDictionary.js'

// ── Constants ────────────────────────────────────────────────────────────────
const NNLS_ITERATIONS = 5
const EPS = 1e-12
const DEFAULT_SMOOTHING_ALPHA = 0.18
const DEFAULT_SPARSITY_TOP_N = 3
const ONSET_THRESHOLD = 0.15  // activation rise threshold for onset detection

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Multiplicative update NNLS solver.
 * H = H .* (WᵀV) ./ (WᵀWH + ε)
 *
 * @param {Float64Array} W — dictionary matrix (MAX_HARMONICS × SHAPE_COUNT, column-major)
 * @param {Float64Array} V — observed harmonic magnitude vector (MAX_HARMONICS × 1)
 * @param {Float32Array} H — initial activations (SHAPE_COUNT × 1), updated in-place
 */
function nnlsMultiplicative(W, V, H) {
    // WᵀV: for each shape s, sum over k of W[k*SHAPE_COUNT + s] * V[k]
    const WtV = new Float64Array(SHAPE_COUNT)
    for (let s = 0; s < SHAPE_COUNT; s++) {
        let sum = 0
        for (let k = 0; k < MAX_HARMONICS; k++) {
            sum += W[k * SHAPE_COUNT + s] * (V[k] || 0)
        }
        WtV[s] = sum
    }

    for (let iter = 0; iter < NNLS_ITERATIONS; iter++) {
        // WH: reconstruct spectrum from current H
        const WH = new Float64Array(MAX_HARMONICS)
        for (let k = 0; k < MAX_HARMONICS; k++) {
            let sum = 0
            for (let s = 0; s < SHAPE_COUNT; s++) {
                sum += W[k * SHAPE_COUNT + s] * H[s]
            }
            WH[k] = sum
        }

        // Wᵀ(WH): for each shape s
        const WtWH = new Float64Array(SHAPE_COUNT)
        for (let s = 0; s < SHAPE_COUNT; s++) {
            let sum = 0
            for (let k = 0; k < MAX_HARMONICS; k++) {
                sum += W[k * SHAPE_COUNT + s] * WH[k]
            }
            WtWH[s] = Math.max(EPS, sum)
        }

        // Multiplicative update
        for (let s = 0; s < SHAPE_COUNT; s++) {
            H[s] = Math.max(0, H[s] * WtV[s] / WtWH[s])
        }
    }

    // L1-normalize so activations sum to 1
    let sumH = 0
    for (let s = 0; s < SHAPE_COUNT; s++) sumH += H[s]
    if (sumH > EPS) {
        const inv = 1 / sumH
        for (let s = 0; s < SHAPE_COUNT; s++) H[s] *= inv
    }
}

// ── SupervisedNMF Class ──────────────────────────────────────────────────────

export class SupervisedNMF {
    /**
     * @param {object} [opts]
     * @param {number} [opts.smoothingAlpha=0.18] — EMA smoothing factor (lower = heavier smoothing)
     * @param {number} [opts.sparsityTopN=3] — Keep only the top N (objectIdx,shapeIdx) pairs
     * @param {number} [opts.onsetThreshold=0.15] — Activation rise to flag as onset
     */
    constructor(opts = {}) {
        /** @type {number} */
        this.smoothingAlpha = opts.smoothingAlpha ?? DEFAULT_SMOOTHING_ALPHA
        /** @type {number} */
        this.sparsityTopN = opts.sparsityTopN ?? DEFAULT_SPARSITY_TOP_N
        /** @type {number} */
        this.onsetThreshold = opts.onsetThreshold ?? ONSET_THRESHOLD

        /** @type {Float64Array} Dictionary matrix reference */
        this._W = DICTIONARY_MATRIX

        /** @type {Map<number, Float32Array>} streamId → previous smoothed activations */
        this._prevActivations = new Map()

        /** @type {Float32Array} Pre-allocated temp H vector */
        this._tempH = new Float32Array(SHAPE_COUNT)

        /** @type {Float32Array} Global shape activations (frame average) */
        this.globalActivations = new Float32Array(SHAPE_COUNT)

        /** @type {Array<Object>} Enriched objects for this frame */
        this.enrichedObjects = []

        /** @type {Uint8Array} Per-shape onset flags */
        this.shapeOnsets = new Uint8Array(SHAPE_COUNT)

        /** @type {string} Dominant shape name this frame */
        this.dominantShape = 'shapeSine'
        /** @type {number} Dominant shape activation value */
        this.dominantShapeValue = 0

        /** @type {number} Frame counter */
        this._frameCount = 0
    }

    /**
     * Classify harmonic objects against the shape dictionary.
     *
     * @param {Array<Object>} harmonicObjects — from AudioEngine.getHarmonicObjects()
     *   Each object must have: { fundamentalHz, harmonics: [{multiple, magnitude}] }
     * @returns {Array<Object>} enriched objects with shapeActivations added
     */
    classifyObjects(harmonicObjects) {
        if (!Array.isArray(harmonicObjects) || harmonicObjects.length === 0) {
            // No objects — zero out global activations
            this.globalActivations.fill(0)
            this.enrichedObjects = []
            this.shapeOnsets.fill(0)
            return []
        }

        const enriched = []
        const alpha = this.smoothingAlpha
        const oneMinusAlpha = 1 - alpha

        // Reset onset flags
        this.shapeOnsets.fill(0)

        for (const obj of harmonicObjects) {
            // ── 1. Extract harmonic magnitude vector ──
            const V = new Float64Array(MAX_HARMONICS)
            const harmonics = Array.isArray(obj.harmonics) ? obj.harmonics : []
            for (let k = 0; k < Math.min(harmonics.length, MAX_HARMONICS); k++) {
                V[k] = harmonics[k]?.magnitude || 0
            }
            // Add the fundamental itself as k=0
            if (harmonics.length === 0 || !V[0]) {
                V[0] = obj.volume || 0.1
            }

            // ── 2. Run NNLS ──
            const H = new Float32Array(SHAPE_COUNT)
            // Initial guess: uniform
            const initVal = 1 / SHAPE_COUNT
            for (let s = 0; s < SHAPE_COUNT; s++) H[s] = initVal
            nnlsMultiplicative(this._W, V, H)

            // ── 3. EMA smoothing (per streamId) ──
            const streamId = obj.streamId ?? 0
            const prevH = this._prevActivations.get(streamId)
            if (prevH) {
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    H[s] = alpha * H[s] + oneMinusAlpha * prevH[s]
                    if (H[s] < 0) H[s] = 0
                    if (H[s] > 1) H[s] = 1
                }
                // ── Onset detection ──
                for (let s = 0; s < SHAPE_COUNT; s++) {
                    if (H[s] - prevH[s] > this.onsetThreshold) {
                        this.shapeOnsets[s] = 1
                    }
                }
            }
            // Store for next frame
            this._prevActivations.set(streamId, new Float32Array(H))

            // ── 4. Attach to object ──
            const enrichedObj = {
                ...obj,
                shapeActivations: H,
                dominantShape: SHAPE_IDS[0],
                dominantShapeValue: 0,
            }
            // Find dominant shape
            for (let s = 0; s < SHAPE_COUNT; s++) {
                if (H[s] > enrichedObj.dominantShapeValue) {
                    enrichedObj.dominantShapeValue = H[s]
                    enrichedObj.dominantShape = SHAPE_IDS[s]
                }
            }
            enriched.push(enrichedObj)
        }

        // ── 5. Dynamic top-N sparsity gate ──
        this._applySparsityGate(enriched)

        // ── 6. Compute global frame-level shape activations ──
        this._computeGlobalActivations(enriched)

        // ── 7. Find global dominant shape ──
        this._findGlobalDominant()

        this.enrichedObjects = enriched
        this._frameCount++

        // ── 8. Cleanup stale streamIds (keep last 128) ──
        if (this._prevActivations.size > 128) {
            const keys = [...this._prevActivations.keys()]
            for (const k of keys.slice(0, keys.length - 64)) {
                this._prevActivations.delete(k)
            }
        }

        return enriched
    }

    /**
     * Dynamic top-N sparsity: keep only the N highest (objectIdx, shapeIdx) pairs.
     * Sorts all activation tuples globally, zeroes out the rest.
     */
    _applySparsityGate(enrichedObjects) {
        const topN = this.sparsityTopN
        if (topN <= 0 || topN >= SHAPE_COUNT * enrichedObjects.length) return

        // Flatten all (objIdx, shapeIdx, activation) tuples
        const tuples = []
        for (let oi = 0; oi < enrichedObjects.length; oi++) {
            const H = enrichedObjects[oi].shapeActivations
            for (let si = 0; si < SHAPE_COUNT; si++) {
                tuples.push({ oi, si, val: H[si] })
            }
        }

        // Sort descending
        tuples.sort((a, b) => b.val - a.val)

        // Keep only top N — mark rest for zeroing
        const keep = new Set()
        for (let i = 0; i < Math.min(topN, tuples.length); i++) {
            keep.add(`${tuples[i].oi}_${tuples[i].si}`)
        }

        // Zero out non-kept
        for (let oi = 0; oi < enrichedObjects.length; oi++) {
            const H = enrichedObjects[oi].shapeActivations
            let keptAny = false
            for (let si = 0; si < SHAPE_COUNT; si++) {
                if (!keep.has(`${oi}_${si}`)) {
                    H[si] = 0
                } else {
                    keptAny = true
                }
            }
            // If this object had no kept shapes, still keep its dominant one
            if (!keptAny) {
                let bestSi = 0
                let bestVal = 0
                for (let si = 0; si < SHAPE_COUNT; si++) {
                    if (enrichedObjects[oi]._preGateH?.[si] > bestVal) {
                        bestVal = enrichedObjects[oi]._preGateH[si]
                        bestSi = si
                    }
                }
                H[bestSi] = enrichedObjects[oi]._preGateH?.[bestSi] ?? 0
            }
            // Recompute dominant shape after gating
            enrichedObjects[oi].dominantShape = SHAPE_IDS[0]
            enrichedObjects[oi].dominantShapeValue = 0
            for (let si = 0; si < SHAPE_COUNT; si++) {
                if (H[si] > enrichedObjects[oi].dominantShapeValue) {
                    enrichedObjects[oi].dominantShapeValue = H[si]
                    enrichedObjects[oi].dominantShape = SHAPE_IDS[si]
                }
            }
        }
    }

    /**
     * Compute global frame-level shape activations (weighted average across all objects).
     */
    _computeGlobalActivations(enrichedObjects) {
        this.globalActivations.fill(0)
        if (enrichedObjects.length === 0) return

        let totalWeight = 0
        for (const obj of enrichedObjects) {
            const weight = (obj.volume || 0) + EPS
            totalWeight += weight
            const H = obj.shapeActivations
            for (let s = 0; s < SHAPE_COUNT; s++) {
                this.globalActivations[s] += H[s] * weight
            }
        }

        if (totalWeight > EPS) {
            const inv = 1 / totalWeight
            for (let s = 0; s < SHAPE_COUNT; s++) {
                this.globalActivations[s] *= inv
            }
        }
    }

    /**
     * Find the globally dominant shape and its activation value.
     */
    _findGlobalDominant() {
        let bestS = 0
        let bestV = 0
        for (let s = 0; s < SHAPE_COUNT; s++) {
            if (this.globalActivations[s] > bestV) {
                bestV = this.globalActivations[s]
                bestS = s
            }
        }
        this.dominantShape = SHAPE_IDS[bestS]
        this.dominantShapeValue = bestV
    }

    /**
     * Update sparsity and smoothing parameters.
     * @param {number} topN
     * @param {number} alpha
     */
    setParams(topN, alpha) {
        if (Number.isFinite(topN)) this.sparsityTopN = Math.max(1, Math.min(10, Math.floor(topN)))
        if (Number.isFinite(alpha)) this.smoothingAlpha = Math.max(0.05, Math.min(0.5, alpha))
    }

    /**
     * Reset all internal state (on track change, seek, etc.).
     */
    reset() {
        this._prevActivations.clear()
        this.globalActivations.fill(0)
        this.enrichedObjects = []
        this.shapeOnsets.fill(0)
        this._frameCount = 0
    }
}

/**
 * Convenience: get shape metadata for a shape activation.
 * @param {number} shapeIndex
 * @returns {Object}
 */
export function getShapeInfo(shapeIndex) {
    const id = SHAPE_IDS[shapeIndex] || 'shapeSine'
    return SHAPE_METADATA[id] || SHAPE_METADATA.shapeSine
}
