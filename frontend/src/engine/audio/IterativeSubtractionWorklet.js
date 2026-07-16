/**
 * SEESOUND v2.0 — IterativeSubtractionWorklet.js
 * ═══════════════════════════════════════════════════════════════════════════
 * AudioWorkletProcessor for real-time time-domain blind source separation.
 *
 * Processes raw audio in sliding windows, discovers an organically
 * determined number of tonal sources via:
 *   1. YIN autocorrelation → dominant period
 *   2. Synchronous averaging → clean single-cycle waveform
 *   3. Per-cycle cross-correlation alignment → phase cancellation
 *   4. Iterate on residual until confidence < threshold
 *
 * Posts results to the main thread as {type: 'iterativeSources'}.
 *
 * @module IterativeSubtractionWorklet
 */

// ── Constants ────────────────────────────────────────────────────────────────
const WINDOW_SAMPLES = 16384               // ~371ms @ 44.1kHz
const HOP_SAMPLES = 4096                   // ~93ms between analyses
const YIN_DEFAULT_THRESHOLD = 0.1
const YIN_MIN_F0 = 30
const YIN_MAX_F0 = 2000
const TERMINATION_THRESHOLD = 0.2
const MAX_SOURCES = 16
const EPS = 1e-12
const MAX_CYCLES_AVERAGE = 48

// ── Helper functions (inlined — no external imports in AudioWorklet) ─────────

function _rms(samples, start, end) {
    start = start || 0; end = end || samples.length
    let sum = 0, count = 0
    for (let i = start; i < end && i < samples.length; i++) {
        const v = samples[i] || 0; sum += v * v; count++
    }
    return count > 0 ? Math.sqrt(sum / count) : 0
}

function _removeDcOffset(samples) {
    let sum = 0
    for (let i = 0; i < samples.length; i++) sum += samples[i] || 0
    const mean = sum / Math.max(1, samples.length)
    for (let i = 0; i < samples.length; i++) samples[i] = (samples[i] || 0) - mean
}

function _parabolicInterpolation(y0, y1, y2) {
    const denom = 2 * (2 * y1 - y0 - y2)
    return Math.abs(denom) < EPS ? 0 : (y0 - y2) / denom
}

function _yin(buffer, sampleRate, threshold, minF0, maxF0) {
    const N = buffer.length
    const maxPeriod = Math.floor(sampleRate / minF0)
    const minPeriod = Math.ceil(sampleRate / maxF0)
    const searchLen = Math.min(N / 2 - 1, maxPeriod)
    if (searchLen <= minPeriod) return { period: 0, f0: 0, confidence: 0 }

    // Difference function
    const diff = new Float64Array(searchLen + 1)
    for (let tau = 1; tau <= searchLen; tau++) {
        let sum = 0; const W = N - tau
        for (let j = 0; j < W; j++) {
            const d = (buffer[j] || 0) - (buffer[j + tau] || 0); sum += d * d
        }
        diff[tau] = sum
    }
    diff[0] = 1

    // Cumulative mean normalized difference
    const diffNorm = new Float64Array(searchLen + 1)
    diffNorm[0] = 1; let cumSum = 0
    for (let tau = 1; tau <= searchLen; tau++) {
        cumSum += diff[tau]
        const mean = cumSum / Math.max(1, tau)
        diffNorm[tau] = mean > EPS ? diff[tau] / mean : 1
    }

    // Find first dip below threshold
    let firstDipTau = 0
    for (let tau = minPeriod; tau <= searchLen; tau++) {
        if (diffNorm[tau] < threshold) { firstDipTau = tau; break }
    }

    let bestTau = 0, bestVal = Infinity

    if (firstDipTau > 0) {
        const windowEnd = Math.min(searchLen, Math.floor(firstDipTau * 2))
        let deepestIdx = firstDipTau, deepestVal = firstDipTau <= searchLen ? diffNorm[firstDipTau] : Infinity
        for (let tau = firstDipTau; tau <= windowEnd; tau++) {
            if (diffNorm[tau] < deepestVal) { deepestVal = diffNorm[tau]; deepestIdx = tau }
        }
        const i0 = Math.max(minPeriod, deepestIdx - 1)
        const i1 = deepestIdx
        const i2 = Math.min(searchLen, deepestIdx + 1)
        const offset = _parabolicInterpolation(diffNorm[i0], diffNorm[i1], diffNorm[i2])
        bestTau = deepestIdx + offset; bestVal = deepestVal
    } else {
        let minVal = Infinity, minIdx = 0
        for (let tau = minPeriod; tau <= searchLen; tau++) {
            if (diffNorm[tau] < minVal) { minVal = diffNorm[tau]; minIdx = tau }
        }
        if (minIdx > 0 && minVal < 0.5) {
            const i0 = Math.max(minPeriod, minIdx - 1)
            const i1 = minIdx
            const i2 = Math.min(searchLen, minIdx + 1)
            const offset = _parabolicInterpolation(diffNorm[i0], diffNorm[i1], diffNorm[i2])
            bestTau = minIdx + offset; bestVal = minVal
        }
    }

    if (bestTau < minPeriod) return { period: 0, f0: 0, confidence: 0 }

    const confidence = Math.max(0, Math.min(1, 1 - bestVal))
    const f0 = bestTau > 0 ? sampleRate / bestTau : 0

    if (f0 < minF0 || f0 > maxF0 || confidence < 0.05) return { period: 0, f0: 0, confidence: 0 }

    return { period: bestTau, f0, confidence }
}

function _synchronousAverage(buffer, period) {
    const periodInt = Math.max(1, Math.round(period))
    const totalSamples = buffer.length
    const maxPossible = Math.floor(totalSamples / periodInt)
    const numCycles = Math.min(maxPossible, MAX_CYCLES_AVERAGE)
    const waveform = new Float32Array(periodInt)

    if (numCycles < 1) {
        for (let s = 0; s < periodInt && s < totalSamples; s++) waveform[s] = buffer[s] || 0
        return waveform
    }

    for (let cyc = 0; cyc < numCycles; cyc++) {
        const offset = cyc * periodInt
        for (let s = 0; s < periodInt; s++) waveform[s] += (buffer[offset + s] || 0)
    }
    for (let s = 0; s < periodInt; s++) waveform[s] /= numCycles
    return waveform
}

function _subtractWaveform(buffer, waveform) {
    const residual = new Float32Array(buffer.length)
    const periodInt = waveform.length
    const maxShift = Math.max(1, Math.floor(periodInt * 0.15))

    for (let i = 0; i < buffer.length; i++) residual[i] = buffer[i] || 0

    // Fast path: check if period is nearly integer
    for (let offset = 0; offset < buffer.length; offset += periodInt) {
        let bestShift = 0, bestCorr = -Infinity
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
                corr += buffer[idx] * waveform[s]; n++
            }
            if (n > 0) { corr /= n; if (corr > bestCorr) { bestCorr = corr; bestShift = shift } }
        }
        for (let s = 0; s < periodInt; s++) {
            const idx = offset + s + bestShift
            if (idx < 0 || idx >= buffer.length) break
            residual[idx] -= waveform[s]
        }
    }
    return residual
}

function _iterativeSubtraction(inputBuffer, sampleRate, threshold, maxSources, minF0, maxF0) {
    const working = new Float32Array(inputBuffer)
    _removeDcOffset(working)
    const sources = []
    let previousPeriod = 0

    for (let iter = 0; iter < maxSources; iter++) {
        const result = _yin(working, sampleRate, threshold, minF0, maxF0)
        if (result.confidence < threshold || result.period < 1) break

        // Harmonic lock: skip if period is a simple multiple of previous
        if (previousPeriod > 0) {
            const ratio = Math.max(result.period, previousPeriod) / Math.min(result.period, previousPeriod)
            if (Math.abs(ratio - Math.round(ratio)) < 0.05) break
        }

        const waveform = _synchronousAverage(working, result.period)
        const residual = _subtractWaveform(working, waveform)
        const resRMS = _rms(residual)
        const origRMS = _rms(working)
        const reduction = origRMS > EPS ? (origRMS - resRMS) / origRMS : 0

        const vol = _rms(waveform)

        if (resRMS < 1e-6 || reduction < 0.001) {
            for (let i = 0; i < working.length; i++) working[i] = residual[i] || 0
            sources.push({ f0: result.f0, period: result.period, confidence: result.confidence, volume: vol, waveform: new Float32Array(waveform) })
            break
        }

        sources.push({ f0: result.f0, period: result.period, confidence: result.confidence, volume: vol, waveform: new Float32Array(waveform) })

        for (let i = 0; i < working.length; i++) working[i] = residual[i] || 0
        previousPeriod = result.period
    }

    return { sources, residual: working, sourceCount: sources.length }
}

// ── AudioWorklet Processor ───────────────────────────────────────────────────

class IterativeSubtractionProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super()
        const opts = options?.processorOptions || {}

        this._cfg = {
            enabled: true,  // enabled by default; config message can disable
            threshold: Number.isFinite(opts.threshold) ? opts.threshold : TERMINATION_THRESHOLD,
            maxSources: Number.isFinite(opts.maxSources) ? Math.max(1, Math.min(MAX_SOURCES, opts.maxSources)) : MAX_SOURCES,
            minF0: Number.isFinite(opts.minF0) ? Math.max(10, Math.min(2000, opts.minF0)) : YIN_MIN_F0,
            maxF0: Number.isFinite(opts.maxF0) ? Math.max(20, Math.min(4000, opts.maxF0)) : YIN_MAX_F0,
            yinThreshold: Number.isFinite(opts.yinThreshold) ? opts.yinThreshold : YIN_DEFAULT_THRESHOLD,
        }

        // ── Ring buffer for raw audio samples ──
        this._ringBuffer = new Float32Array(WINDOW_SAMPLES)
        this._ringWritePos = 0
        this._ringFill = 0

        // ── Hop counter — run analysis every HOP_SAMPLES ──
        this._hopCounter = 0
        this._windowSize = WINDOW_SAMPLES
        this._hopSamples = HOP_SAMPLES

        // ── Cross-window source tracking ──
        this._prevSources = []   // { f0, streamId, age }
        this._nextStreamId = 1

        // ── Boot muzzle: skip first few analyses (buffer not yet full) ──
        this._bootFrames = Math.ceil(this._windowSize / 128) + 2

        // ── Message handler for config updates ──
        this.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type !== 'config') return
            const cfg = msg.config || {}
            this._cfg.enabled = !!cfg.enabled
            if (Number.isFinite(cfg.threshold)) this._cfg.threshold = Math.max(0.05, Math.min(0.95, cfg.threshold))
            if (Number.isFinite(cfg.maxSources)) this._cfg.maxSources = Math.max(1, Math.min(MAX_SOURCES, cfg.maxSources))
            if (Number.isFinite(cfg.yinThreshold)) this._cfg.yinThreshold = Math.max(0.01, Math.min(0.5, cfg.yinThreshold))
        }
    }

    process(inputs) {
        if (!this._cfg.enabled) return true
        const input = inputs[0]
        if (!input || input.length === 0) return true

        const channel = input[0]
        if (!channel || channel.length === 0) return true

        let hasSignal = false
        for (let i = 0; i < channel.length; i++) {
            const sample = channel[i] || 0
            if (Math.abs(sample) > 0.001) hasSignal = true
            this._ringBuffer[this._ringWritePos] = sample
            this._ringWritePos = (this._ringWritePos + 1) % this._windowSize
            if (this._ringFill < this._windowSize) this._ringFill++
        }

        this._hopCounter += channel.length

        // ── Run analysis when enough samples accumulated ──
        if (this._hopCounter >= this._hopSamples) {
            this._hopCounter = 0

            // Boot muzzle: skip until ring buffer is full
            if (this._bootFrames > 0) { this._bootFrames--; return true }

            if (!hasSignal && this._ringFill < this._windowSize * 0.5) {
                return true
            }

            this._runAnalysis()
        }

        return true
    }

    _runAnalysis() {
        // ── Extract contiguous window from ring buffer ──
        const windowSize = Math.min(this._ringFill, this._windowSize)
        const window = new Float32Array(windowSize)

        if (this._ringFill < this._windowSize) {
            // Buffer not yet full — use what we have
            for (let i = 0; i < this._ringFill; i++) window[i] = this._ringBuffer[i] || 0
        } else {
            // Ring buffer is full — read from write position backwards
            let readPos = this._ringWritePos
            for (let i = 0; i < windowSize; i++) {
                window[i] = this._ringBuffer[readPos] || 0
                readPos = (readPos + 1) % this._windowSize
            }
        }

        // ── Run iterative subtraction ──
        const result = _iterativeSubtraction(
            window,
            sampleRate,
            this._cfg.yinThreshold,
            this._cfg.maxSources,
            this._cfg.minF0,
            this._cfg.maxF0,
        )

        if (result.sourceCount === 0) {
            // No sources — only send if we previously had sources (avoid spamming)
            if (this._prevSources.length > 0) {
                this._prevSources = []
                this.port.postMessage({
                    type: 'iterativeSources',
                    sources: [],
                    sourceCount: 0,
                    residualEnergy: _rms(result.residual),
                })
            }
            return
        }

        // ── Cross-window source tracking ──
        // Match current sources to previous by nearest f0 (pitch continuity ±3%)
        const matched = []
        for (const src of result.sources) {
            let bestMatch = -1
            let bestDist = Infinity
            for (let pi = 0; pi < this._prevSources.length; pi++) {
                const prev = this._prevSources[pi]
                if (prev.matched) continue
                const ratio = Math.max(src.f0, prev.f0) / Math.min(src.f0, prev.f0)
                if (ratio < 1.03 && ratio > 0.97) {  // within ±3% pitch continuity
                    const dist = Math.abs(src.f0 - prev.f0)
                    if (dist < bestDist) { bestDist = dist; bestMatch = pi }
                }
            }

            let streamId, age
            if (bestMatch >= 0) {
                const prev = this._prevSources[bestMatch]
                prev.matched = true
                streamId = prev.streamId
                age = prev.age + 1
            } else {
                streamId = this._nextStreamId++
                age = 0
            }

            matched.push({ f0: src.f0, streamId, age, matched: false })
        }

        this._prevSources = matched

        // ── Build transferable message ──
        const sources = result.sources.map((src, i) => ({
            f0: src.f0,
            period: src.period,
            confidence: src.confidence,
            volume: src.volume,
            streamId: matched[i]?.streamId || 0,
            age: matched[i]?.age || 0,
        }))

        const residualEnergy = _rms(result.residual)

        // Only send if sources actually changed (avoid redundant messages)
        const sameCount = sources.length === this._lastSentCount
        const sameEnergy = Math.abs(residualEnergy - (this._lastSentEnergy || 0)) < 0.001
        if (sameCount && sameEnergy && sources.length > 0) {
            // Check if all f0s are within 1Hz
            let f0sSame = true
            if (this._lastSentF0s && this._lastSentF0s.length === sources.length) {
                for (let i = 0; i < sources.length; i++) {
                    if (Math.abs(sources[i].f0 - this._lastSentF0s[i]) > 1) { f0sSame = false; break }
                }
            } else { f0sSame = false }
            if (f0sSame) return
        }

        this._lastSentCount = sources.length
        this._lastSentEnergy = residualEnergy
        this._lastSentF0s = sources.map(s => s.f0)

        this.port.postMessage({
            type: 'iterativeSources',
            sources,
            sourceCount: sources.length,
            residualEnergy,
        })
    }
}

registerProcessor('iterative-subtraction-processor', IterativeSubtractionProcessor)
