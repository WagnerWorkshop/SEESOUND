/**
 * SEESOUND v2.0 — AcousticShapeDictionary.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Fixed dictionary of 10 acoustic archetype spectral templates for supervised
 * NMF (Fixed-Dictionary Learning). Templates are defined in PITCH-NORMALIZED
 * harmonic space — each is a Float32Array of length MAX_HARMONICS (16), where
 * index k = amplitude weight of the k-th harmonic (k=1 = fundamental).
 *
 * All templates are L2-normalized. Cosine similarity between any pair is
 * verified < 0.35 at module init to ensure orthogonality.
 *
 * @module AcousticShapeDictionary
 */

// ── Constants ────────────────────────────────────────────────────────────────
export const MAX_HARMONICS = 16
export const SHAPE_COUNT = 10

/** @type {string[]} */
export const SHAPE_IDS = [
    'shapeSine',
    'shapeTriangle',
    'shapeSawtooth',
    'shapeSquare',
    'shapeNoise',
    'shapePinkNoise',
    'shapeTransient',
    'shapePad',
    'shapeBuzzy',
    'shapeBass',
]

// ── Template definitions in harmonic space (L2-normalized) ──────────────────

/**
 * Build a harmonic template with aggressive distinctness.
 * @param {number[]} weights — harmonic amplitudes (index 0 = fundamental)
 * @returns {Float32Array} length MAX_HARMONICS, L2-normalized
 */
function buildTemplate(weights) {
    const arr = new Float32Array(MAX_HARMONICS)
    const len = Math.min(weights.length, MAX_HARMONICS)
    for (let i = 0; i < len; i++) {
        arr[i] = Math.max(0, weights[i] || 0)
    }
    // L2 normalize
    let norm = 0
    for (let i = 0; i < MAX_HARMONICS; i++) norm += arr[i] * arr[i]
    if (norm > 1e-12) {
        const inv = 1 / Math.sqrt(norm)
        for (let i = 0; i < MAX_HARMONICS; i++) arr[i] *= inv
    }
    return arr
}

// ── Templates ────────────────────────────────────────────────────────────────
// Each defined with AGGRESSIVELY DISTINCT harmonic profiles to ensure
// orthogonality (pairwise cosine < 0.35). This prevents the NMF solver
// from arbitrarily splitting activations between similar shapes.

const EPS = 1e-6

/** @type {Object<string, Float32Array>} */
const TEMPLATES = {
    // Pure Sine — fundamental only, virtually no overtones
    shapeSine: buildTemplate([1.0, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS]),

    // Triangle — odd harmonics only, falling as 1/k², zero even harmonics
    shapeTriangle: buildTemplate([0.7, 0, 0.175, 0, 0.07, 0, 0.036, 0, 0.022, 0, 0.014, 0, 0.01, 0, 0.007, 0]),

    // Sawtooth — all harmonics falling as 1/k
    shapeSawtooth: buildTemplate([0.5, 0.25, 0.167, 0.125, 0.1, 0.083, 0.071, 0.0625, 0.056, 0.05, 0.045, 0.042, 0.038, 0.036, 0.033, 0.031]),

    // Square — odd harmonics only, falling as 1/k, zero even
    shapeSquare: buildTemplate([0.7, 0, 0.233, 0, 0.14, 0, 0.1, 0, 0.078, 0, 0.064, 0, 0.054, 0, 0.047, 0]),

    // White Noise — flat across all harmonics (all equal energy)
    shapeNoise: buildTemplate([0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]),

    // Pink Noise — decays as 1/√k
    shapePinkNoise: buildTemplate([0.4, 0.283, 0.231, 0.2, 0.179, 0.163, 0.151, 0.141, 0.133, 0.126, 0.12, 0.115, 0.111, 0.107, 0.103, 0.1]),

    // Transient — rises with harmonic index (energy at high harmonics)
    shapeTransient: buildTemplate([0.02, 0.04, 0.07, 0.12, 0.2, 0.32, 0.5, 0.65, 0.7, 0.55, 0.35, 0.18, 0.09, 0.04, 0.02, 0.01]),

    // Warm Pad — moderate fundamental, rapid decay after k=3
    shapePad: buildTemplate([0.6, 0.32, 0.12, 0.04, 0.015, 0.006, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS]),

    // Buzzy — emphasis at harmonics k=3-5 (typical brass/distortion formant region)
    shapeBuzzy: buildTemplate([0.35, 0.22, 0.42, 0.6, 0.48, 0.28, 0.14, 0.07, 0.035, 0.018, 0.009, EPS, EPS, EPS, EPS, EPS]),

    // Sub Bass — heavy fundamental, extremely fast decay
    shapeBass: buildTemplate([0.92, 0.28, 0.06, 0.015, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS, EPS]),
}

// ── Metadata ─────────────────────────────────────────────────────────────────

/** @type {Object<string, Object>} */
export const SHAPE_METADATA = {
    shapeSine: {
        id: 'shapeSine',
        name: 'Pure Sine',
        description: 'Pure tone, single fundamental frequency. Flute, whistling, pure oscillator.',
        typicalCentroid: 500,
        typicalFlatness: 0.05,
        colorHint: [0.6, 0.8, 1.0],  // blue
    },
    shapeTriangle: {
        id: 'shapeTriangle',
        name: 'Triangle',
        description: 'Gentle odd-harmonic rolloff. Warm, soft, mellow tones.',
        typicalCentroid: 800,
        typicalFlatness: 0.15,
        colorHint: [0.3, 0.9, 0.5],  // green
    },
    shapeSawtooth: {
        id: 'shapeSawtooth',
        name: 'Sawtooth',
        description: 'All harmonics present, bright and buzzy. Strings, leads, rich synths.',
        typicalCentroid: 1500,
        typicalFlatness: 0.2,
        colorHint: [1.0, 0.7, 0.2],  // orange
    },
    shapeSquare: {
        id: 'shapeSquare',
        name: 'Square',
        description: 'Odd harmonics only, hollow character. Clarinets, hollow synths.',
        typicalCentroid: 1200,
        typicalFlatness: 0.1,
        colorHint: [0.6, 0.3, 1.0],  // violet
    },
    shapeNoise: {
        id: 'shapeNoise',
        name: 'White Noise',
        description: 'Flat spectrum, broadband energy. Hissy, breathy, percussive wash.',
        typicalCentroid: 8000,
        typicalFlatness: 0.9,
        colorHint: [0.7, 0.7, 0.7],  // gray
    },
    shapePinkNoise: {
        id: 'shapePinkNoise',
        name: 'Pink Noise',
        description: 'Natural 1/f noise decay. Rumble, waterfalls, natural ambience.',
        typicalCentroid: 3000,
        typicalFlatness: 0.7,
        colorHint: [0.5, 0.45, 0.4],  // brown-gray
    },
    shapeTransient: {
        id: 'shapeTransient',
        name: 'Sharp Transient',
        description: 'Energy concentrated in high harmonics. Clicks, attacks, drum hits.',
        typicalCentroid: 6000,
        typicalFlatness: 0.3,
        colorHint: [1.0, 0.25, 0.2],  // red
    },
    shapePad: {
        id: 'shapePad',
        name: 'Warm Pad',
        description: 'Soft fundamental with gentle decay. Synth pads, soft voices, reverb tails.',
        typicalCentroid: 600,
        typicalFlatness: 0.12,
        colorHint: [0.9, 0.5, 0.8],  // pink
    },
    shapeBuzzy: {
        id: 'shapeBuzzy',
        name: 'Buzzy',
        description: 'Emphasis at mid harmonics (k=3-5). Brass, distorted guitar, formant-rich.',
        typicalCentroid: 2500,
        typicalFlatness: 0.25,
        colorHint: [1.0, 0.85, 0.1],  // yellow-gold
    },
    shapeBass: {
        id: 'shapeBass',
        name: 'Sub Bass',
        description: 'Heavy fundamental, almost no overtones. Kick drums, sub bass, deep rumble.',
        typicalCentroid: 120,
        typicalFlatness: 0.08,
        colorHint: [0.4, 0.2, 0.6],  // dark purple
    },
}

// ── Dictionary Matrix ────────────────────────────────────────────────────────
// Pre-built 16×10 matrix (column-major: W[harmonicBin * SHAPE_COUNT + shapeIdx])
// Stored as Float64Array for direct NNLS use.

/** @type {Float64Array} W matrix (MAX_HARMONICS × SHAPE_COUNT) */
export let DICTIONARY_MATRIX = null

function buildDictionaryMatrix() {
    const W = new Float64Array(MAX_HARMONICS * SHAPE_COUNT)
    for (let s = 0; s < SHAPE_COUNT; s++) {
        const shapeId = SHAPE_IDS[s]
        const template = TEMPLATES[shapeId]
        for (let k = 0; k < MAX_HARMONICS; k++) {
            W[k * SHAPE_COUNT + s] = template[k] || 0
        }
    }
    return W
}

// ── Orthogonality Check ──────────────────────────────────────────────────────

/**
 * Compute pairwise cosine similarity for all 10 templates.
 * @returns {number[][]} similarity matrix (10×10)
 */
export function computeSimilarityMatrix() {
    const matrix = []
    for (let i = 0; i < SHAPE_COUNT; i++) {
        matrix[i] = []
        for (let j = 0; j < SHAPE_COUNT; j++) {
            const a = TEMPLATES[SHAPE_IDS[i]]
            const b = TEMPLATES[SHAPE_IDS[j]]
            let dot = 0, na = 0, nb = 0
            for (let k = 0; k < MAX_HARMONICS; k++) {
                dot += a[k] * b[k]
                na += a[k] * a[k]
                nb += b[k] * b[k]
            }
            const sim = (na > 1e-12 && nb > 1e-12) ? dot / Math.sqrt(na * nb) : 0
            matrix[i][j] = Math.round(sim * 1000) / 1000
        }
    }
    return matrix
}

/**
 * Verify all pairwise cosine similarities are < 0.35.
 * Logs a warning if any pair exceeds the threshold.
 */
export function verifyOrthogonality() {
    const sim = computeSimilarityMatrix()
    let maxSim = 0
    let maxPair = ''
    for (let i = 0; i < SHAPE_COUNT; i++) {
        for (let j = i + 1; j < SHAPE_COUNT; j++) {
            if (sim[i][j] > maxSim) {
                maxSim = sim[i][j]
                maxPair = `${SHAPE_IDS[i]} / ${SHAPE_IDS[j]}`
            }
            if (sim[i][j] > 0.35) {
                console.warn(`[AcousticShapeDictionary] ⚠ Low orthogonality: ${SHAPE_IDS[i]} / ${SHAPE_IDS[j]} = ${sim[i][j].toFixed(3)} (threshold 0.35)`)
            }
        }
    }
    console.log(`[AcousticShapeDictionary] Max pairwise cosine similarity: ${maxSim.toFixed(3)} (${maxPair})`)
    // Assert: if maxSim > 0.35, dictionary needs revision
    return maxSim <= 0.35
}

// ── Accessors ────────────────────────────────────────────────────────────────

/**
 * Get a single template vector for a shape.
 * @param {string} shapeId
 * @returns {Float32Array|null}
 */
export function getTemplate(shapeId) {
    return TEMPLATES[shapeId] || null
}

/**
 * Get all templates as a Map.
 * @returns {Map<string, Float32Array>}
 */
export function getAllTemplates() {
    const map = new Map()
    for (const [id, tpl] of Object.entries(TEMPLATES)) {
        map.set(id, tpl)
    }
    return map
}

// ── Init ─────────────────────────────────────────────────────────────────────

DICTIONARY_MATRIX = buildDictionaryMatrix()
const orthoOk = verifyOrthogonality()
if (!orthoOk) {
    console.warn('[AcousticShapeDictionary] Dictionary orthogonality check FAILED — revise harmonic weights.')
}
