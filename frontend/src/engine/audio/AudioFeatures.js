/**
 * Spectral feature extraction helpers for rule-engine input dictionaries.
 */

function clamp01(v) {
    return Math.max(0, Math.min(1, Number.isFinite(v) ? v : 0))
}

function _windowBounds(index, length, radius = 2) {
    const i = Math.max(0, Math.min(length - 1, Math.floor(index)))
    const r = Math.max(1, Math.floor(radius))
    return {
        start: Math.max(0, i - r),
        end: Math.min(length - 1, i + r),
        center: i,
    }
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

export function computePeakAmplitude(freq) {
    if (!freq || !freq.length) return 0
    let peak = 0
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] > peak) peak = freq[i]
    }
    return clamp01(peak / 255)
}

export function computeZeroCrossingRate(timeDomain) {
    if (!timeDomain || timeDomain.length < 2) return 0
    let crossings = 0
    let prev = (timeDomain[0] - 128) >= 0 ? 1 : -1
    for (let i = 1; i < timeDomain.length; i++) {
        const curr = (timeDomain[i] - 128) >= 0 ? 1 : -1
        if (curr !== prev) crossings++
        prev = curr
    }
    return clamp01(crossings / Math.max(1, timeDomain.length - 1))
}

export function computeSpectralRolloff(freq, sr, percent = 0.85) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    const p = Math.max(0, Math.min(1, Number.isFinite(percent) ? percent : 0.85))
    let total = 0
    for (let i = 0; i < n; i++) total += Math.max(0, freq[i] / 255)
    if (total <= 1e-9) return 0
    const threshold = total * p
    let run = 0
    for (let i = 0; i < n; i++) {
        run += Math.max(0, freq[i] / 255)
        if (run >= threshold) {
            const hz = (i / Math.max(1, n - 1)) * nyquist
            return clamp01(hz / Math.max(1, nyquist))
        }
    }
    return 1
}

export function computeSpectralSpread(freq, sr, centroidHz = null) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    const cHz = Number.isFinite(centroidHz) ? centroidHz : computeSpectralCentroid(freq, sr)
    let total = 0
    let varAcc = 0
    for (let i = 0; i < n; i++) {
        const mag = Math.max(0, freq[i] / 255)
        const hz = (i / Math.max(1, n - 1)) * nyquist
        const d = hz - cHz
        varAcc += (d * d) * mag
        total += mag
    }
    if (total <= 1e-9) return 0
    const stdHz = Math.sqrt(varAcc / total)
    return clamp01(stdHz / Math.max(1, nyquist))
}

export function computeSpectralSkewness(freq, sr, centroidHz = null, spreadNorm = null) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    const cHz = Number.isFinite(centroidHz) ? centroidHz : computeSpectralCentroid(freq, sr)
    const spread = Number.isFinite(spreadNorm)
        ? Math.max(1e-6, Number(spreadNorm) * nyquist)
        : Math.max(1e-6, computeSpectralSpread(freq, sr, cHz) * nyquist)

    let total = 0
    let m3 = 0
    for (let i = 0; i < n; i++) {
        const mag = Math.max(0, freq[i] / 255)
        const hz = (i / Math.max(1, n - 1)) * nyquist
        const z = (hz - cHz) / spread
        m3 += (z * z * z) * mag
        total += mag
    }
    if (total <= 1e-9) return 0
    // Map common skewness range roughly from [-2, 2] into [0, 1].
    const skew = m3 / total
    return clamp01((skew + 2) / 4)
}

export function computeChromagram(freq, sr) {
    if (!freq || !freq.length || !Number.isFinite(sr) || sr <= 0) return 0
    const n = freq.length
    const nyquist = sr / 2
    const chroma = new Float32Array(12)
    let total = 0

    for (let i = 1; i < n; i++) {
        const mag = Math.max(0, freq[i] / 255)
        if (mag <= 0) continue
        const hz = (i / Math.max(1, n - 1)) * nyquist
        if (hz < 20) continue
        const midi = 69 + 12 * Math.log2(hz / 440)
        const cls = ((Math.round(midi) % 12) + 12) % 12
        chroma[cls] += mag
        total += mag
    }

    if (total <= 1e-9) return 0
    let peak = 0
    for (let i = 0; i < 12; i++) if (chroma[i] > peak) peak = chroma[i]
    return clamp01(peak / total)
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

/** Local spectral centroid around one FFT bin, normalized to [0..1] bin position. */
export function computeBinSpectralCentroid(freq, binIndex, radius = 3) {
    if (!freq || !freq.length) return 0
    const n = freq.length
    const { start, end } = _windowBounds(binIndex, n, radius)
    let weighted = 0
    let total = 0

    for (let i = start; i <= end; i++) {
        const mag = Math.max(0, freq[i] / 255)
        weighted += i * mag
        total += mag
    }

    if (total <= 1e-9) return clamp01((Math.floor(binIndex) || 0) / Math.max(1, n - 1))
    return clamp01((weighted / total) / Math.max(1, n - 1))
}

/** Local positive flux around one FFT bin in [0..1]. */
export function computeBinSpectralFlux(curr, prev, binIndex, radius = 2) {
    if (!curr || !prev || !curr.length || !prev.length) return 0
    const n = Math.min(curr.length, prev.length)
    const { start, end } = _windowBounds(binIndex, n, radius)
    let sumPositive = 0
    let count = 0

    for (let i = start; i <= end; i++) {
        const c = Math.max(0, curr[i] / 255)
        const p = Math.max(0, prev[i] / 255)
        const d = c - p
        if (d > 0) sumPositive += d
        count++
    }

    if (count <= 0) return 0
    return clamp01(sumPositive / count)
}

/** Local geometric/arithmetic power-mean ratio around one bin in [0..1]. */
export function computeBinSpectralFlatness(freq, binIndex, radius = 3) {
    if (!freq || !freq.length) return 0
    const eps = 1e-12
    const { start, end } = _windowBounds(binIndex, freq.length, radius)
    let sumLog = 0
    let sumPower = 0
    let count = 0

    for (let i = start; i <= end; i++) {
        const mag = Math.max(0, freq[i] / 255)
        const power = mag * mag + eps
        sumLog += Math.log(power)
        sumPower += power
        count++
    }

    if (count <= 0 || sumPower <= 0) return 0
    const gm = Math.exp(sumLog / count)
    const am = sumPower / count
    return clamp01(gm / Math.max(am, eps))
}

/**
 * Local inharmonicity proxy in [0..1].
 * Uses neighborhood roughness (second-derivative magnitude) as a bin-local
 * estimate of harmonic deviation instead of global peak matching.
 */
export function computeBinInharmonicity(freq, binIndex, radius = 3) {
    if (!freq || freq.length < 3) return 0
    const n = freq.length
    const { start, end } = _windowBounds(binIndex, n, radius)
    let roughness = 0
    let count = 0

    const a = Math.max(start + 1, 1)
    const b = Math.min(end - 1, n - 2)
    for (let i = a; i <= b; i++) {
        const l = Math.max(0, freq[i - 1] / 255)
        const c = Math.max(0, freq[i] / 255)
        const r = Math.max(0, freq[i + 1] / 255)
        const secondDiff = Math.abs(l - 2 * c + r)
        roughness += secondDiff
        count++
    }

    if (count <= 0) return 0
    return clamp01((roughness / count) * 1.5)
}
