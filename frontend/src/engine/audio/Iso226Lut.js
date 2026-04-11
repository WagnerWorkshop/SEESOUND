const ISO226_FREQUENCIES_HZ = Object.freeze([
    20, 25, 31.5, 40, 50, 63, 80, 100, 125, 160,
    200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600,
    2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000, 12500,
])

const ISO226_ALPHA = Object.freeze([
    0.532, 0.506, 0.48, 0.455, 0.432, 0.409, 0.387, 0.367, 0.349, 0.33,
    0.315, 0.301, 0.288, 0.276, 0.267, 0.259, 0.253, 0.25, 0.246, 0.244,
    0.243, 0.243, 0.243, 0.242, 0.242, 0.245, 0.254, 0.271, 0.301,
])

const ISO226_LU = Object.freeze([
    -31.6, -27.2, -23.0, -19.1, -15.9, -13.0, -10.3, -8.1, -6.2, -4.5,
    -3.1, -2.0, -1.1, -0.4, 0.0, 0.3, 0.5, 0.0, -2.7, -4.1,
    -1.0, 1.7, 2.5, 1.2, -2.1, -7.1, -11.2, -10.7, -3.1,
])

const ISO226_TF = Object.freeze([
    78.5, 68.7, 59.5, 51.1, 44.0, 37.5, 31.5, 26.5, 22.1, 17.9,
    14.4, 11.4, 8.6, 6.2, 4.4, 3.0, 2.2, 2.4, 3.5, 1.7,
    -1.3, -4.2, -6.0, -5.4, -1.5, 6.0, 12.6, 13.9, 12.3,
])

function clamp(value, minValue, maxValue) {
    return Math.max(minValue, Math.min(maxValue, value))
}

function lerp(a, b, t) {
    return a + (b - a) * t
}

function _interpolateIso226Row(freqHz) {
    const f = clamp(Number(freqHz) || 0, ISO226_FREQUENCIES_HZ[0], ISO226_FREQUENCIES_HZ[ISO226_FREQUENCIES_HZ.length - 1])

    if (f <= ISO226_FREQUENCIES_HZ[0]) {
        return {
            alpha: ISO226_ALPHA[0],
            lu: ISO226_LU[0],
            tf: ISO226_TF[0],
        }
    }

    const last = ISO226_FREQUENCIES_HZ.length - 1
    if (f >= ISO226_FREQUENCIES_HZ[last]) {
        return {
            alpha: ISO226_ALPHA[last],
            lu: ISO226_LU[last],
            tf: ISO226_TF[last],
        }
    }

    let hi = 1
    while (hi < ISO226_FREQUENCIES_HZ.length && ISO226_FREQUENCIES_HZ[hi] < f) hi++
    const lo = hi - 1

    const fLo = ISO226_FREQUENCIES_HZ[lo]
    const fHi = ISO226_FREQUENCIES_HZ[hi]
    const t = clamp((Math.log(f) - Math.log(fLo)) / Math.max(1e-9, Math.log(fHi) - Math.log(fLo)), 0, 1)

    return {
        alpha: lerp(ISO226_ALPHA[lo], ISO226_ALPHA[hi], t),
        lu: lerp(ISO226_LU[lo], ISO226_LU[hi], t),
        tf: lerp(ISO226_TF[lo], ISO226_TF[hi], t),
    }
}

function iso226SplForPhon(phon, freqHz) {
    const ln = Number.isFinite(phon) ? phon : 60
    const { alpha, lu, tf } = _interpolateIso226Row(freqHz)
    const a = 4.47e-3 * (Math.pow(10, 0.025 * ln) - 1.15)
    const b = Math.pow(0.4 * Math.pow(10, ((tf + lu) / 10) - 9), alpha)
    const af = Math.max(1e-12, a + b)
    return (10 / alpha) * Math.log10(af) - lu + 94
}

export function createIso226CompensationLut({
    size = 5000,
    phon = 60,
    minHz = 16,
    maxHz = 20000,
    referenceHz = 1000,
    maxBoostDb = 30,
    maxCutDb = 18,
} = {}) {
    const safeSize = Math.max(2, Math.floor(Number(size) || 5000))
    const safeMinHz = Math.max(1, Number(minHz) || 16)
    const safeMaxHz = Math.max(safeMinHz + 1, Number(maxHz) || 20000)
    const safeReferenceHz = clamp(Number(referenceHz) || 1000, safeMinHz, safeMaxHz)
    const safeMaxBoostDb = Math.max(0, Number(maxBoostDb) || 30)
    const safeMaxCutDb = Math.max(0, Number(maxCutDb) || 18)

    const dbOffsets = new Float32Array(safeSize)
    const span = safeMaxHz - safeMinHz
    const refSpl = iso226SplForPhon(phon, safeReferenceHz)

    for (let i = 0; i < safeSize; i++) {
        const t = i / Math.max(1, safeSize - 1)
        const freqHz = safeMinHz + span * t
        const spl = iso226SplForPhon(phon, freqHz)
        const dbOffset = clamp(refSpl - spl, -safeMaxCutDb, safeMaxBoostDb)
        dbOffsets[i] = dbOffset
    }

    return {
        size: safeSize,
        phon,
        minHz: safeMinHz,
        maxHz: safeMaxHz,
        referenceHz: safeReferenceHz,
        dbOffsets,
    }
}

export function sampleIso226CompensationDb(lut, freqHz) {
    const table = lut && lut.dbOffsets instanceof Float32Array ? lut : null
    if (!table) return 0

    const n = table.dbOffsets.length
    if (n <= 0) return 0

    const f = clamp(Number(freqHz) || 0, table.minHz, table.maxHz)
    const pos = ((f - table.minHz) / Math.max(1e-9, table.maxHz - table.minHz)) * (n - 1)
    const i0 = Math.floor(pos)
    const i1 = Math.min(n - 1, i0 + 1)
    const t = pos - i0

    return lerp(table.dbOffsets[i0], table.dbOffsets[i1], t)
}

export function buildBinCompensationDbLut({ binCount, sampleRate, lut }) {
    const n = Math.max(0, Math.floor(Number(binCount) || 0))
    const sr = Math.max(1, Number(sampleRate) || 44100)
    const nyquist = sr * 0.5
    const out = new Float32Array(n)

    for (let i = 0; i < n; i++) {
        const freqHz = (i / Math.max(1, n - 1)) * nyquist
        out[i] = sampleIso226CompensationDb(lut, freqHz)
    }

    return out
}