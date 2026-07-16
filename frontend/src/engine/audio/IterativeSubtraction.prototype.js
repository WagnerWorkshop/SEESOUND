/**
 * SEESOUND v2.0 — IterativeSubtraction.prototype.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Standalone TIME-DOMAIN blind source separation prototype.
 *
 * ZERO FFT. Operates purely on raw 1D pressure samples.
 *
 * Algorithm (de Cheveigné & Kawahara, 2002 — YIN):
 *   1. YIN autocorrelation → find dominant period T₀
 *   2. Synchronous averaging → extract clean single-cycle waveform W
 *   3. Phase cancellation → M_residual = M - W_repeated
 *   4. Iterate on residual until confidence < threshold
 *   5. Organic source count = number of successful iterations
 *
 * This is a SYNCHRONOUS / OFFLINE prototype for algorithm validation.
 * It works on a full decoded AudioBuffer in one go.
 * Phase 2 will move this into a real-time AudioWorklet.
 *
 * @module IterativeSubtraction
 */

// ── Constants ────────────────────────────────────────────────────────────────
const YIN_DEFAULT_THRESHOLD = 0.1       // Absolute threshold for period dip
const YIN_MIN_F0 = 30                   // Lowest detectable fundamental (Hz)
const YIN_MAX_F0 = 2000                 // Highest detectable fundamental (Hz)
const TERMINATION_THRESHOLD = 0.2       // Minimum confidence to continue iterating
const MAX_SOURCES = 16                  // Upper bound on extractable sources
const NOISE_FLOOR_RMS = 1e-6           // Minimum residual RMS to continue
const EPS = 1e-12

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Compute RMS (root mean square) of a Float32Array segment.
 * @param {Float32Array|number[]} samples
 * @param {number} [start=0]
 * @param {number} [end=samples.length]
 * @returns {number}
 */
function rms(samples, start = 0, end = samples.length) {
    let sum = 0, count = 0
    for (let i = start; i < end && i < samples.length; i++) {
        const v = samples[i] || 0
        sum += v * v
        count++
    }
    return count > 0 ? Math.sqrt(sum / count) : 0
}

/**
 * Compute peak amplitude of a Float32Array segment.
 * @param {Float32Array|number[]} samples
 * @returns {number}
 */
function peak(samples) {
    let p = 0
    for (let i = 0; i < samples.length; i++) {
        const abs = Math.abs(samples[i] || 0)
        if (abs > p) p = abs
    }
    return p
}

/**
 * Zero-mean normalize a buffer in-place.
 * @param {Float32Array} samples
 */
function removeDcOffset(samples) {
    let sum = 0
    for (let i = 0; i < samples.length; i++) sum += samples[i] || 0
    const mean = sum / Math.max(1, samples.length)
    for (let i = 0; i < samples.length; i++) samples[i] = (samples[i] || 0) - mean
}

/**
 * Apply a Hann window to the buffer in-place.
 * @param {Float32Array} samples
 */
function applyHannWindow(samples) {
    const N = samples.length
    for (let i = 0; i < N; i++) {
        samples[i] = (samples[i] || 0) * 0.5 * (1 - Math.cos((2 * Math.PI * i) / (N - 1)))
    }
}

/**
 * Linear interpolation at fractional index.
 * @param {Float32Array} arr
 * @param {number} idx — fractional index
 * @returns {number}
 */
function interp1(arr, idx) {
    const i0 = Math.floor(idx)
    const i1 = i0 + 1
    const frac = idx - i0
    if (i0 < 0 || i1 >= arr.length) return 0
    const v0 = arr[i0] || 0
    const v1 = arr[i1] || 0
    return v0 + frac * (v1 - v0)
}

// ── Parabolic Interpolation (sub-sample peak refinement) ─────────────────

/**
 * Fit a parabola through three points and return the x-offset of the vertex
 * relative to the center index.
 *
 * Given y0, y1, y2 at x = -1, 0, 1:
 *   x_offset = (y0 - y2) / (2 * (2*y1 - y0 - y2))
 *
 * @param {number} y0 — value at index-1
 * @param {number} y1 — value at index (peak)
 * @param {number} y2 — value at index+1
 * @returns {number} fractional offset from center (−0.5..0.5 typically)
 */
function parabolicInterpolation(y0, y1, y2) {
    const denom = 2 * (2 * y1 - y0 - y2)
    if (Math.abs(denom) < EPS) return 0
    return (y0 - y2) / denom
}

// ── YIN Algorithm (de Cheveigné & Kawahara, 2002) ─────────────────────────

/**
 * Run the YIN algorithm on a mono buffer to find the dominant period.
 *
 * @param {Float32Array} buffer — raw audio samples (preferably zero-mean)
 * @param {number} sampleRate — sample rate in Hz
 * @param {object} [opts]
 * @param {number} [opts.threshold=0.1] — absolute threshold for dip detection
 * @param {number} [opts.minF0=30] — minimum detectable frequency (Hz)
 * @param {number} [opts.maxF0=2000] — maximum detectable frequency (Hz)
 * @returns {{ period: number, f0: number, confidence: number }}
 *   period: period in samples (may be fractional via interpolation)
 *   f0: fundamental frequency in Hz
 *   confidence: 0–1 where 1 = perfect periodicity
 */
export function yin(buffer, sampleRate, opts = {}) {
    const threshold = opts.threshold ?? YIN_DEFAULT_THRESHOLD
    const minF0 = opts.minF0 ?? YIN_MIN_F0
    const maxF0 = opts.maxF0 ?? YIN_MAX_F0

    const N = buffer.length
    const maxPeriod = Math.floor(sampleRate / minF0)   // longest period to search
    const minPeriod = Math.ceil(sampleRate / maxF0)     // shortest period to search
    const searchLen = Math.min(N / 2 - 1, maxPeriod)

    if (searchLen <= minPeriod) {
        return { period: 0, f0: 0, confidence: 0 }
    }

    // ── Step 1: Difference function ──
    // d[tau] = sum_{j=1}^{W} (x[j] - x[j+tau])^2
    // We use the full buffer where W = N - tau
    const diff = new Float64Array(searchLen + 1)
    let maxDiff = 0

    for (let tau = 1; tau <= searchLen; tau++) {
        let sum = 0
        const W = N - tau
        for (let j = 0; j < W; j++) {
            const d = (buffer[j] || 0) - (buffer[j + tau] || 0)
            sum += d * d
        }
        diff[tau] = sum
        if (sum > maxDiff) maxDiff = sum
    }
    diff[0] = 1  // d'(0) = 1 by convention

    // ── Step 2: Cumulative mean normalized difference ──
    // d'_t(tau) = d(tau) / ((1/tau) * sum_{j=1}^{tau} d(j))
    const diffNorm = new Float64Array(searchLen + 1)
    diffNorm[0] = 1
    let cumSum = 0
    for (let tau = 1; tau <= searchLen; tau++) {
        cumSum += diff[tau]
        const mean = cumSum / Math.max(1, tau)
        diffNorm[tau] = mean > EPS ? diff[tau] / mean : 1
    }

    // ── Step 3: Find dip(s) below threshold ──
    // For sinusoidal signals the normalized difference crosses the
    // threshold BEFORE the true period (e.g. a 440Hz sine at 44.1kHz
    // crosses 0.1 at τ≈93 instead of τ≈100).  So we find the FIRST
    // dip below threshold, then scan a window around it for the
    // DEEPEST minimum, and use that for the period estimate.
    let firstDipTau = 0
    let firstDipVal = Infinity

    for (let tau = minPeriod; tau <= searchLen; tau++) {
        if (diffNorm[tau] < threshold) {
            firstDipTau = tau
            firstDipVal = diffNorm[tau]
            break
        }
    }

    let bestTau = 0
    let bestVal = Infinity

    if (firstDipTau > 0) {
        // Scan a window from firstDipTau up to 2× the dip position
        // (capped at searchLen) to find the deepest local minimum.
        // This avoids locking onto pre‑period partial minima while
        // still protecting against harmonic multiples.
        const windowEnd = Math.min(searchLen, Math.floor(firstDipTau * 2))

        // Find deepest minimum in the window
        let deepestIdx = firstDipTau
        let deepestVal = firstDipVal
        for (let tau = firstDipTau; tau <= windowEnd; tau++) {
            if (diffNorm[tau] < deepestVal) {
                deepestVal = diffNorm[tau]
                deepestIdx = tau
            }
        }

        // Parabolic interpolation around the deepest minimum
        const i0 = Math.max(minPeriod, deepestIdx - 1)
        const i1 = deepestIdx
        const i2 = Math.min(searchLen, deepestIdx + 1)
        const y0 = diffNorm[i0]
        const y1 = diffNorm[i1]
        const y2 = diffNorm[i2]
        const offset = parabolicInterpolation(y0, y1, y2)
        bestTau = deepestIdx + offset
        bestVal = deepestVal

    } else {
        // No dip below threshold → fallback to absolute minimum
        let minVal = Infinity
        let minIdx = 0
        for (let tau = minPeriod; tau <= searchLen; tau++) {
            if (diffNorm[tau] < minVal) {
                minVal = diffNorm[tau]
                minIdx = tau
            }
        }
        if (minIdx > 0 && minVal < 0.5) {
            const i0 = Math.max(minPeriod, minIdx - 1)
            const i1 = minIdx
            const i2 = Math.min(searchLen, minIdx + 1)
            const y0 = diffNorm[i0]
            const y1 = diffNorm[i1]
            const y2 = diffNorm[i2]
            const offset = parabolicInterpolation(y0, y1, y2)
            bestTau = minIdx + offset
            bestVal = minVal
        }
    }

    if (bestTau < minPeriod) {
        return { period: 0, f0: 0, confidence: 0 }
    }

    // ── Confidence: how deep is the dip relative to 1.0? ──
    // 1.0 = perfect periodicity (dip at 0), 0.0 = no periodicity
    const confidence = Math.max(0, Math.min(1, 1 - bestVal))

    // ── Sub-sample period → frequency ──
    const f0 = bestTau > 0 ? sampleRate / bestTau : 0

    // ── Aperiodicity check: if the best dip is too shallow, reject ──
    if (f0 < minF0 || f0 > maxF0 || confidence < 0.05) {
        return { period: 0, f0: 0, confidence: 0 }
    }

    return {
        period: bestTau,
        f0,
        confidence,
    }
}

// ── Synchronous Averaging ──────────────────────────────────────────────────

/**
 * Extract one clean cycle of the dominant periodic waveform using
 * synchronous averaging with **integer-aligned cycles**.
 *
 * Each cycle starts at an integer multiple of `round(period)`.  For
 * non-integer periods this introduces a small phase drift per cycle,
 * but the dominant waveform's fundamental shape still reinforces
 * over many cycles while non-aligned content averages toward zero.
 *
 * (Phase 2 will add sub-sample alignment via cross-correlation.)
 *
 * @param {Float32Array} buffer — raw samples (preferably zero-mean)
 * @param {number} period — period in samples (may be fractional)
 * @param {number} [maxCycles=64] — maximum cycles to average
 * @returns {Float32Array} single-cycle waveform (length = Math.round(period))
 */
export function synchronousAverage(buffer, period, maxCycles = 64) {
    const periodInt = Math.max(1, Math.round(period))
    const totalSamples = buffer.length
    const maxPossible = Math.floor(totalSamples / periodInt)
    const numCycles = Math.min(maxPossible, maxCycles)
    const waveform = new Float32Array(periodInt)

    if (numCycles < 1) {
        for (let s = 0; s < periodInt && s < totalSamples; s++) {
            waveform[s] = buffer[s] || 0
        }
        return waveform
    }

    for (let cyc = 0; cyc < numCycles; cyc++) {
        const offset = cyc * periodInt
        for (let s = 0; s < periodInt; s++) {
            waveform[s] += (buffer[offset + s] || 0)
        }
    }

    for (let s = 0; s < periodInt; s++) {
        waveform[s] /= numCycles
    }

    return waveform
}

// ── Phase Cancellation / Waveform Subtraction ─────────────────────────────

/**
 * Subtract a repeating single-cycle waveform from a buffer using
 * **per-cycle cross-correlation alignment**.
 *
 * When the period is close to an integer (<0.1 sample drift), direct
 * integer-aligned subtraction is used (fast, exact).  For fractional
 * periods, each cycle is cross-correlated with the waveform to find
 * the sample-accurate shift that maximises cancellation.
 *
 * @param {Float32Array} buffer — input buffer (will NOT be modified)
 * @param {Float32Array} waveform — single-cycle waveform
 * @param {number} period — detected period in samples (may be fractional)
 * @returns {Float32Array} residual buffer (same length as input)
 */
export function subtractWaveform(buffer, waveform, period) {
    const residual = new Float32Array(buffer.length)
    const periodInt = waveform.length

    for (let i = 0; i < buffer.length; i++) {
        residual[i] = buffer[i] || 0
    }

    // If the period is nearly integer, use fast-direct subtraction
    const periodFractional = Math.abs(period - periodInt)
    const useDirect = periodFractional < 0.1

    if (useDirect) {
        for (let offset = 0; offset < buffer.length; offset += periodInt) {
            for (let s = 0; s < periodInt; s++) {
                const idx = offset + s
                if (idx >= buffer.length) break
                residual[idx] -= waveform[s]
            }
        }
        return residual
    }

    // ── Fractional-period: per-cycle cross-correlation alignment ──
    const maxShift = Math.max(1, Math.floor(periodInt * 0.15))

    for (let offset = 0; offset < buffer.length; offset += periodInt) {
        let bestShift = 0
        let bestCorr = -Infinity
        const segEnd = Math.min(buffer.length, offset + periodInt)
        const segLen = segEnd - offset

        if (segLen < periodInt * 0.5) {
            for (let s = 0; s < periodInt; s++) {
                const idx = offset + s
                if (idx >= buffer.length) break
                residual[idx] -= waveform[s]
            }
            continue
        }

        for (let shift = -maxShift; shift <= maxShift; shift++) {
            let corr = 0, n = 0
            for (let s = 0; s < periodInt; s++) {
                const idx = offset + s + shift
                if (idx < 0 || idx >= buffer.length) continue
                corr += buffer[idx] * waveform[s]
                n++
            }
            if (n > 0) {
                corr /= n
                if (corr > bestCorr) { bestCorr = corr; bestShift = shift }
            }
        }

        for (let s = 0; s < periodInt; s++) {
            const idx = offset + s + bestShift
            if (idx < 0 || idx >= buffer.length) break
            residual[idx] -= waveform[s]
        }
    }

    return residual
}

// ── Main Iterative Subtraction Loop ──────────────────────────────────────

/**
 * Iterative Time-Domain Waveform Subtraction.
 *
 * Processes a raw mono audio buffer and separates it into an undetermined
 * number of tonal sources plus a noise residual.
 *
 * @param {Float32Array} inputBuffer — raw PCM samples (mono, float, −1..1)
 * @param {number} sampleRate — sample rate in Hz
 * @param {object} [opts]
 * @param {number} [opts.terminationThreshold=0.2] — YIN confidence below which we stop
 * @param {number} [opts.maxSources=16] — maximum number of sources to extract
 * @param {number} [opts.minF0=30] — minimum fundamental frequency
 * @param {number} [opts.maxF0=2000] — maximum fundamental frequency
 * @param {number} [opts.yinThreshold=0.1] — YIN absolute dip threshold
 * @param {boolean} [opts.verbose=true] — log per-iteration info to console
 * @returns {{
 *   sources: Array<{ f0: number, period: number, confidence: number, volume: number, crest: number, symmetry: number, waveform: Float32Array }>,
 *   residual: Float32Array,
 *   sourceCount: number,
 *   iterations: number,
 *   success: boolean
 * }}
 */
export function iterativeSubtraction(inputBuffer, sampleRate, opts = {}) {
    const terminationThreshold = opts.terminationThreshold ?? TERMINATION_THRESHOLD
    const maxSources = opts.maxSources ?? MAX_SOURCES
    const minF0 = opts.minF0 ?? YIN_MIN_F0
    const maxF0 = opts.maxF0 ?? YIN_MAX_F0
    const yinThreshold = opts.yinThreshold ?? YIN_DEFAULT_THRESHOLD
    const verbose = opts.verbose ?? true

    // ── Validate input ──
    if (!inputBuffer || inputBuffer.length < sampleRate * 0.1) {
        if (verbose) console.warn('[IterativeSubtraction] Input too short or empty')
        return { sources: [], residual: new Float32Array(0), sourceCount: 0, iterations: 0, success: false }
    }

    if (verbose) {
        console.log(`[IterativeSubtraction] Starting separation: ${(inputBuffer.length / sampleRate).toFixed(2)}s @ ${sampleRate}Hz`)
        console.log(`  threshold=${terminationThreshold}, maxSources=${maxSources}, f0Range=[${minF0}, ${maxF0}]Hz`)
    }

    // ── Working copy — remove DC offset ──
    const working = new Float32Array(inputBuffer)
    removeDcOffset(working)

    const sources = []
    let previousPeriod = 0
    let iteration = 0

    for (; iteration < maxSources; iteration++) {
        // ── 1. YIN: Find dominant period ──
        const result = yin(working, sampleRate, {
            threshold: yinThreshold,
            minF0,
            maxF0,
        })

        if (result.confidence < terminationThreshold || result.period < 1) {
            if (verbose) {
                console.log(`  Iteration ${iteration}: confidence ${result.confidence.toFixed(4)} < ${terminationThreshold} → STOP`)
            }
            break
        }

        // Avoid extracting the same period twice (octave/harmonic lock)
        if (previousPeriod > 0) {
            const ratio = Math.max(result.period, previousPeriod) / Math.min(result.period, previousPeriod)
            const nearestInt = Math.round(ratio)
            if (Math.abs(ratio - nearestInt) < 0.05) {
                if (verbose) {
                    console.log(`  Iteration ${iteration}: period ${result.period.toFixed(2)} is harmonic of previous ${previousPeriod.toFixed(2)} → STOP (harmonic lock)`)
                }
                break
            }
        }

        // ── 2. Synchronous averaging: extract clean waveform ──
        const waveform = synchronousAverage(working, result.period)

        // ── 3. Compute waveform shape descriptors ──
        const vol = rms(waveform)
        const pk = peak(waveform)
        const crest = pk > EPS ? vol / pk : 0

        // Symmetry: ratio of positive to negative area (1 = perfectly symmetric)
        let posArea = 0, negArea = 0
        for (let i = 0; i < waveform.length; i++) {
            const v = waveform[i] || 0
            if (v > 0) posArea += v
            else negArea += Math.abs(v)
        }
        const symmetry = (posArea + negArea) > EPS
            ? Math.min(posArea, negArea) / Math.max(posArea, negArea) * 2
            : 1

        // ── 4. Phase cancellation: subtract from working buffer ──
        const residual = subtractWaveform(working, waveform, result.period)

        // ── 5. Check residual — if it didn't reduce energy, stop ──
        const residualRMS = rms(residual)
        const originalRMS = rms(working)
        const reduction = originalRMS > EPS ? (originalRMS - residualRMS) / originalRMS : 0

        if (verbose) {
            console.log(
                `  Iteration ${iteration}: f0=${result.f0.toFixed(2)}Hz, ` +
                `period=${result.period.toFixed(2)}samp, ` +
                `confidence=${result.confidence.toFixed(4)}, ` +
                `volume=${vol.toFixed(6)}, ` +
                `reduction=${(reduction * 100).toFixed(1)}%`
            )
        }

        // If the subtraction barely changed the signal, stop
        // BUT always sync working → residual so the returned value is accurate
        if (residualRMS < NOISE_FLOOR_RMS || reduction < 0.001) {
            if (verbose) console.log(`  Iteration ${iteration}: negligible reduction → STOP`)
            // Copy residual into working so the final return value is correct
            for (let i = 0; i < working.length; i++) {
                working[i] = residual[i] || 0
            }
            sources.push({
                f0: result.f0,
                period: result.period,
                confidence: result.confidence,
                volume: vol,
                crest,
                symmetry,
                waveform: new Float32Array(waveform),
            })
            break
        }

        // ── Record source ──
        sources.push({
            f0: result.f0,
            period: result.period,
            confidence: result.confidence,
            volume: vol,
            crest,
            symmetry,
            waveform: new Float32Array(waveform),
        })

        // ── Replace working buffer with residual for next iteration ──
        for (let i = 0; i < working.length; i++) {
            working[i] = residual[i] || 0
        }
        previousPeriod = result.period
    }

    const finalResidual = new Float32Array(working)

    if (verbose) {
        console.log(`[IterativeSubtraction] Done: ${sources.length} sources extracted in ${iteration} iterations`)
        sources.forEach((s, i) => {
            console.log(`  Source ${i}: f0=${s.f0.toFixed(2)}Hz, vol=${s.volume.toFixed(6)}, crest=${s.crest.toFixed(3)}, sym=${s.symmetry.toFixed(3)}`)
        })
        console.log(`  Residual RMS: ${rms(finalResidual).toFixed(8)}`)
    }

    return {
        sources,
        residual: finalResidual,
        sourceCount: sources.length,
        iterations: iteration,
        success: true,
    }
}

// ── Debug / Browser Testing ───────────────────────────────────────────────

/**
 * Run iterative subtraction on an AudioBuffer (e.g. from a decoded file).
 * Convenience wrapper for browser console testing.
 *
 * Usage in browser console:
 *   const ctx = new AudioContext()
 *   const resp = await fetch('audio-file.wav')
 *   const ab = await resp.arrayBuffer()
 *   const audioBuf = await ctx.decodeAudioData(ab)
 *   const result = runOnAudioBuffer(audioBuf)
 *
 * @param {AudioBuffer} audioBuffer
 * @param {object} [opts]
 * @returns {Promise<object>} — the iterativeSubtraction result
 */
export function runOnAudioBuffer(audioBuffer, opts = {}) {
    // Mix to mono
    const numChannels = audioBuffer.numberOfChannels
    const length = audioBuffer.length
    const mono = new Float32Array(length)

    if (numChannels === 0) {
        console.warn('[IterativeSubtraction] Empty audio buffer')
        return { sources: [], residual: new Float32Array(0), sourceCount: 0, iterations: 0, success: false }
    }

    // Sum + normalize channels
    for (let c = 0; c < numChannels; c++) {
        const channel = audioBuffer.getChannelData(c)
        for (let i = 0; i < length; i++) {
            mono[i] += (channel[i] || 0)
        }
    }
    if (numChannels > 1) {
        for (let i = 0; i < length; i++) {
            mono[i] /= numChannels
        }
    }

    return iterativeSubtraction(mono, audioBuffer.sampleRate, opts)
}

// ── Export for Node.js / bundler usage ──
export default {
    yin,
    synchronousAverage,
    subtractWaveform,
    iterativeSubtraction,
    runOnAudioBuffer,
}
