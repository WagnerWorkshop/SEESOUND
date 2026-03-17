/**
 * Spectral feature extraction helpers for rule-engine input dictionaries.
 */

function clamp01(v) {
    return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0))
}

/** Weighted mean frequency in Hz. */
export function computeSpectralCentroid(freq, sr) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    let weighted = 0
    let total = 0

    for (let i = 0; i < n; i++) {
        const mag = Math.max(0, freq[i] / 255)
        const hz = (i / Math.max(1, n - 1)) * nyquist
        weighted += hz * mag
        total += mag
    }

    if (total <= 1e-9) return 0
    return weighted / total
}

/** Positive-frame-delta flux in normalized [0..1]. */
export function computeSpectralFlux(curr, prev) {
    if (!curr || !prev) return 0
    const n = Math.min(curr.length, prev.length)
    if (n <= 0) return 0
    let sumPositive = 0

    for (let i = 0; i < n; i++) {
        const c = Math.max(0, curr[i] / 255)
        const p = Math.max(0, prev[i] / 255)
        const d = c - p
        if (d > 0) sumPositive += d
    }

    return clamp01(sumPositive / n)
}

/** Geometric/arithmetic power-mean ratio in [0..1]. */
export function computeSpectralFlatness(freq) {
    if (!freq || !freq.length) return 0
    const eps = 1e-12
    let sumLog = 0
    let sumPower = 0

    for (let i = 0; i < freq.length; i++) {
        const mag = Math.max(0, freq[i] / 255)
        const power = mag * mag + eps
        sumLog += Math.log(power)
        sumPower += power
    }

    if (sumPower <= 0) return 0
    const gm = Math.exp(sumLog / freq.length)
    const am = sumPower / freq.length
    return clamp01(gm / Math.max(am, eps))
}

/** Peak-to-nearest-harmonic deviation estimate in [0..1]. */
export function computeInharmonicity(freq, sr) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    const minPeak = 8
    const peaks = []

    for (let i = 1; i < n - 1; i++) {
        const v = freq[i]
        if (v < minPeak) continue
        if (v >= freq[i - 1] && v >= freq[i + 1]) {
            const hz = (i / Math.max(1, n - 1)) * nyquist
            peaks.push({ i, hz, mag: v / 255 })
        }
    }

    if (peaks.length < 2) return 0
    peaks.sort((a, b) => b.mag - a.mag)
    const top = peaks.slice(0, 6)
    const f0 = Math.max(20, top[0].hz)

    let weightedDev = 0
    let weightedMag = 0
    for (let k = 1; k < top.length; k++) {
        const p = top[k]
        const harmonicN = Math.max(1, Math.round(p.hz / f0))
        const expected = harmonicN * f0
        const relDev = Math.abs(p.hz - expected) / Math.max(expected, 1e-9)
        weightedDev += relDev * p.mag
        weightedMag += p.mag
    }

    if (weightedMag <= 1e-9) return 0
    return clamp01((weightedDev / weightedMag) * 2)
}

export function smoothFeature(prev, next, alpha = 0.2) {
    const a = clamp01(alpha)
    const p = Number.isFinite(prev) ? prev : 0
    const n = clamp01(next)
    return p + (n - p) * a
}

export function normalizeCentroidHzToUnit(centroidHz, sampleRate) {
    const nyquist = Math.max(1, (Number.isFinite(sampleRate) ? sampleRate : 44100) / 2)
    return clamp01((Number.isFinite(centroidHz) ? centroidHz : 0) / nyquist)
}
