import { CascadedDecimator, processInputBlockToDecimator } from './RawAudioProcessing.js'

const DEFAULT_LEVEL_COUNT = 7
const DEFAULT_CQT_MIN_HZ = 16
const DEFAULT_CQT_MAX_HZ = 20000
const DEFAULT_CQT_DETAILS_PER_10_OCTAVES = 1000
const RHYTHM_WINDOW_SAMPLES = 1024
const RHYTHM_HOP_SAMPLES = 512
const MIN_WINDOW_SAMPLES = 32
const MAX_WINDOW_SAMPLES = 8192

class BinAnalysisProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super()
        const opts = options?.processorOptions || {}

        this._cfg = {
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            needRhythmBrain: false,
            fluxWindowFrames: this._sanitizeFluxWindowFrames(opts.fluxWindowFrames),
            attackThreshold: 0.0005,
            attackRatio: 3.0,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
            cqtDetailsPer10Octaves: this._sanitizeCqtDetails(opts.cqtDetailsPer10Octaves),
            cqtMinHz: this._sanitizeHz(opts.cqtMinHz, DEFAULT_CQT_MIN_HZ),
            cqtMaxHz: this._sanitizeHz(opts.cqtMaxHz, DEFAULT_CQT_MAX_HZ),
        }
        if (this._cfg.cqtMaxHz <= this._cfg.cqtMinHz) this._cfg.cqtMaxHz = this._cfg.cqtMinHz * 1.05

        this._levelCount = DEFAULT_LEVEL_COUNT
        this._decimator = new CascadedDecimator(this._levelCount)

        this._levelSampleRates = new Float32Array(this._levelCount)
        for (let level = 0; level < this._levelCount; level++) {
            this._levelSampleRates[level] = sampleRate / Math.pow(2, level)
        }

        this._levelRings = Array.from({ length: this._levelCount }, () => new Float32Array(256))
        this._levelWritePos = new Uint32Array(this._levelCount)
        this._levelFill = new Uint32Array(this._levelCount)
        this._levelProduced = new Uint32Array(this._levelCount)
        this._levelHopCounter = new Uint32Array(this._levelCount)
        this._levelHopSize = new Uint32Array(this._levelCount)

        this._bins = []
        this._binsByLevel = Array.from({ length: this._levelCount }, () => [])
        this.binCount = 0

        this._fluxWindowFrames = this._cfg.fluxWindowFrames
        this._prevMag = new Float32Array(0)
        this._prevPhase = new Float32Array(0)
        this._prevPhaseDelta = new Float32Array(0)
        this._attackElapsedMs = new Float32Array(0)
        this._attackLastMs = new Float32Array(0)
        this._attackActive = new Uint8Array(0)

        this._outMagnitude = new Float32Array(0)
        this._outFlux = new Float32Array(0)
        this._outPhaseDeviation = new Float32Array(0)
        this._outPhase = new Float32Array(0)
        this._outEnvelope = new Float32Array(0)
        this._outAttackTime = new Float32Array(0)

        this._rhythmWindow = new Float32Array(RHYTHM_WINDOW_SAMPLES)
        this._rhythmWindowWritePos = 0
        this._rhythmWindowFill = 0
        this._rhythmHopCounter = 0
        this._rhythmEnergyAvg = 0

        this._fluxHistory = new Float32Array(0)
        this._fluxHistorySums = new Float32Array(0)
        this._fluxHistoryWritePos = new Uint16Array(0)
        this._fluxHistoryFill = new Uint8Array(0)

        this._framesUntilNextAnalysis = 0
        // Suppress rhythm transient detection for the first 120 analysis
        // windows (~2s at 60fps hop) while the CQT ring buffers fill.
        // The lowest bin (16 Hz) has a ~9s Goertzel window at level 6; the
        // ring buffer starts zero-filled so Goertzel output rises naturally
        // from 0 to full over that entire window. No per-sample gain ramp
        // is needed — the ring buffer IS the pre-roll.
        this._startupSuppress = 120

        // Internal math resolution is locked once at startup. UI changes to
        // `cqtDetailsPer10Octaves` will only affect the visual thinning layer
        // and will not trigger a plan rebuild. This avoids mid-stream buffer
        // reallocations that cause audio artifacts.
        this._internalResolution = DEFAULT_CQT_DETAILS_PER_10_OCTAVES
        this._visualResolution = this._cfg.cqtDetailsPer10Octaves

        // Boot muzzle: suppress the first 2 blocks (~5ms) to avoid sending
        // data from a completely empty ring buffer. After that, Goertzel
        // filters receive a smooth fade-in (not a step) so their initial
        // output is already valid.
        this.bootTimer = 2

        this._rebuildCqtPlan()

        this.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type !== 'config') return

            const cfg = msg.config || {}
            this._cfg.enabled = !!cfg.enabled
            this._cfg.needMagnitude = !!cfg.needMagnitude
            this._cfg.needFlux = !!cfg.needFlux
            this._cfg.needPhaseDeviation = !!cfg.needPhaseDeviation
            this._cfg.needPhase = !!cfg.needPhase
            this._cfg.needEnvelope = !!cfg.needEnvelope
            this._cfg.needAttackTime = !!cfg.needAttackTime
            this._cfg.needRhythmBrain = !!cfg.needRhythmBrain

            let requiresPlanRebuild = false

            // When the UI requests a different details-per-10-octaves value,
            // do not rebuild the internal math plan. Instead, update the
            // visual resolution (thinner) which compresses the fixed internal
            // output for UI consumption.
            const nextDetails = this._sanitizeCqtDetails(cfg.cqtDetailsPer10Octaves)
            if (nextDetails !== this._cfg.cqtDetailsPer10Octaves) {
                this._cfg.cqtDetailsPer10Octaves = nextDetails
                this._visualResolution = nextDetails
                // do NOT set requiresPlanRebuild
            }

            const nextMin = this._sanitizeHz(cfg.cqtMinHz, this._cfg.cqtMinHz)
            if (nextMin !== this._cfg.cqtMinHz) {
                this._cfg.cqtMinHz = nextMin
                requiresPlanRebuild = true
            }

            const nextMax = this._sanitizeHz(cfg.cqtMaxHz, this._cfg.cqtMaxHz)
            if (nextMax !== this._cfg.cqtMaxHz) {
                this._cfg.cqtMaxHz = nextMax
                requiresPlanRebuild = true
            }

            const nextPitchMin = this._sanitizeHz(cfg.pitchMinHz, this._cfg.pitchMinHz)
            if (nextPitchMin !== this._cfg.pitchMinHz) this._cfg.pitchMinHz = nextPitchMin

            if (this._cfg.cqtMaxHz <= this._cfg.cqtMinHz) {
                this._cfg.cqtMaxHz = this._cfg.cqtMinHz * 1.05
                requiresPlanRebuild = true
            }

            const nextFluxWindow = this._sanitizeFluxWindowFrames(cfg.fluxWindowFrames)
            if (nextFluxWindow !== this._fluxWindowFrames) {
                this._cfg.fluxWindowFrames = nextFluxWindow
                this._fluxWindowFrames = nextFluxWindow
                this._resetFluxHistoryStorage()
            }

            this._cfg.attackThreshold = Number.isFinite(cfg.attackThreshold) ? cfg.attackThreshold : this._cfg.attackThreshold
            this._cfg.attackRatio = Number.isFinite(cfg.attackRatio) ? cfg.attackRatio : this._cfg.attackRatio
            this._cfg.sustainFluxEps = Number.isFinite(cfg.sustainFluxEps) ? cfg.sustainFluxEps : this._cfg.sustainFluxEps
            this._cfg.sustainMagThreshold = Number.isFinite(cfg.sustainMagThreshold) ? cfg.sustainMagThreshold : this._cfg.sustainMagThreshold
            this._cfg.decayThreshold = Number.isFinite(cfg.decayThreshold) ? cfg.decayThreshold : this._cfg.decayThreshold

            if (requiresPlanRebuild) this._rebuildCqtPlan()
        }
    }

    _sanitizeFluxWindowFrames(value) {
        const n = Math.floor(Number(value))
        if (!Number.isFinite(n)) return 10
        return Math.max(1, Math.min(64, n))
    }

    _sanitizeCqtDetails(value) {
        const n = Math.floor(Number(value))
        if (!Number.isFinite(n)) return DEFAULT_CQT_DETAILS_PER_10_OCTAVES
        return Math.max(100, Math.min(5000, n))
    }

    _sanitizeHz(value, fallback) {
        const n = Number(value)
        if (!Number.isFinite(n)) return fallback
        return Math.max(8, Math.min(22050, n))
    }

    _computeRms(samples) {
        let sum = 0
        for (let i = 0; i < samples.length; i++) {
            const v = samples[i]
            sum += v * v
        }
        return Math.sqrt(sum / Math.max(1, samples.length))
    }

    _analyzeBrains(sampleCount = 0) {
        const cfg = this._cfg
        if (!cfg.needRhythmBrain) return null

        let globalTransient = 0
        this._rhythmHopCounter += sampleCount
        if (this._rhythmHopCounter >= RHYTHM_HOP_SAMPLES) {
            this._rhythmHopCounter = 0
            // Compute RMS directly from the rhythm window ring buffer
            const rms = this._computeRms(this._rhythmWindow)
            if (this._rhythmEnergyAvg <= 0) {
                this._rhythmEnergyAvg = rms
            } else {
                this._rhythmEnergyAvg = (this._rhythmEnergyAvg * 0.9) + (rms * 0.1)
            }
            const baseline = Math.max(1e-6, this._rhythmEnergyAvg)
            globalTransient = Math.max(0, (rms - baseline) / baseline)
            if (this._startupSuppress > 0) {
                this._startupSuppress--
                globalTransient = 0
            }
        }

        return { type: 'objectMetrics', globalTransient, fundamentalHz: 0, fundamentalPitch: 0, fundamentalNote: 0, objectAge: 0, streamId: 0 }
    }

    _chooseLevelForFrequency(freqHz) {
        const safeFreq = Math.max(1e-6, Number(freqHz) || 0)
        for (let level = this._levelCount - 1; level >= 0; level--) {
            const sr = this._levelSampleRates[level]
            if (safeFreq <= sr * 0.45) return level
        }
        return 0
    }

    _resizeMetricBuffers(binCount) {
        this._prevMag = new Float32Array(binCount)
        this._prevPhase = new Float32Array(binCount)
        this._prevPhaseDelta = new Float32Array(binCount)
        this._attackElapsedMs = new Float32Array(binCount)
        this._attackLastMs = new Float32Array(binCount)
        this._attackActive = new Uint8Array(binCount)

        this._outMagnitude = new Float32Array(binCount)
        this._outFlux = new Float32Array(binCount)
        this._outPhaseDeviation = new Float32Array(binCount)
        this._outPhase = new Float32Array(binCount)
        this._outEnvelope = new Float32Array(binCount)
        this._outAttackTime = new Float32Array(binCount)

        this._resetFluxHistoryStorage()
    }

    _resetFluxHistoryStorage() {
        const fluxWindow = this._fluxWindowFrames
        const bins = this.binCount
        this._fluxHistory = new Float32Array(bins * fluxWindow)
        this._fluxHistorySums = new Float32Array(bins)
        this._fluxHistoryWritePos = new Uint16Array(bins)
        this._fluxHistoryFill = new Uint8Array(bins)
    }

    _configureLevelRings(maxWindowByLevel, minWindowByLevel) {
        for (let level = 0; level < this._levelCount; level++) {
            const maxWindow = Math.max(MIN_WINDOW_SAMPLES, maxWindowByLevel[level] || MIN_WINDOW_SAMPLES)
            const minWindow = Math.max(MIN_WINDOW_SAMPLES, minWindowByLevel[level] || MIN_WINDOW_SAMPLES)
            const ringSize = Math.max(128, maxWindow + 8)

            this._levelRings[level] = new Float32Array(ringSize)
            this._levelWritePos[level] = 0
            this._levelFill[level] = 0
            this._levelProduced[level] = 0
            this._levelHopCounter[level] = 0

            const hop = Math.max(8, Math.min(256, Math.floor(minWindow / 6)))
            this._levelHopSize[level] = hop
        }

        this._decimator.reset()
    }

    // Note: explicit buffer zeroing is removed. Arrays are allocated once and
    // are naturally zero-initialized. We use a boot muzzle to hide initial
    // transient artifacts instead of clearing arrays mid-run.

    _rebuildCqtPlan() {
        const minHz = Math.max(8, this._cfg.cqtMinHz)
        const maxHz = Math.max(minHz * 1.05, this._cfg.cqtMaxHz)
        // Build the internal CQT plan using the locked internal resolution so
        // the internal arrays are allocated exactly once at startup.
        const detailsPer10 = this._internalResolution || Math.max(100, this._cfg.cqtDetailsPer10Octaves)
        const binsPerOctave = detailsPer10 / 10
        const octaveSpan = Math.max(0.125, Math.log2(maxHz / minHz))
        const requestedBinCount = Math.max(8, Math.min(6000, Math.round(octaveSpan * binsPerOctave)))
        const q = 1 / Math.max(1e-6, Math.pow(2, 1 / Math.max(1, binsPerOctave)) - 1)

        const bins = []
        const binsByLevel = Array.from({ length: this._levelCount }, () => [])
        const maxWindowByLevel = new Uint32Array(this._levelCount)
        const minWindowByLevel = new Uint32Array(this._levelCount)

        for (let i = 0; i < requestedBinCount; i++) {
            const freqHz = minHz * Math.pow(2, i / binsPerOctave)
            if (!Number.isFinite(freqHz) || freqHz > maxHz) break

            const level = this._chooseLevelForFrequency(freqHz)
            const sr = this._levelSampleRates[level]
            const windowSize = Math.max(
                MIN_WINDOW_SAMPLES,
                Math.min(MAX_WINDOW_SAMPLES, Math.round((q * sr) / Math.max(1e-6, freqHz)))
            )
            const omega = (2 * Math.PI * freqHz) / Math.max(1, sr)

            const idx = bins.length
            bins.push({
                freqHz,
                level,
                windowSize,
                coeff: 2 * Math.cos(omega),
                cos: Math.cos(omega),
                sin: Math.sin(omega),
            })
            binsByLevel[level].push(idx)

            maxWindowByLevel[level] = Math.max(maxWindowByLevel[level], windowSize)
            const prevMin = minWindowByLevel[level]
            minWindowByLevel[level] = prevMin === 0 ? windowSize : Math.min(prevMin, windowSize)
        }

        if (bins.length === 0) {
            const freqHz = minHz
            const level = this._chooseLevelForFrequency(freqHz)
            const sr = this._levelSampleRates[level]
            const windowSize = MIN_WINDOW_SAMPLES
            const omega = (2 * Math.PI * freqHz) / Math.max(1, sr)
            bins.push({
                freqHz,
                level,
                windowSize,
                coeff: 2 * Math.cos(omega),
                cos: Math.cos(omega),
                sin: Math.sin(omega),
            })
            binsByLevel[level].push(0)
            maxWindowByLevel[level] = windowSize
            minWindowByLevel[level] = windowSize
        }

        this._bins = bins
        this._binsByLevel = binsByLevel
        this.binCount = bins.length

        this._resizeMetricBuffers(this.binCount)
        this._configureLevelRings(maxWindowByLevel, minWindowByLevel)
    }

    _pushLevelSample(level, sample) {
        const ring = this._levelRings[level]
        const len = ring.length
        let writePos = this._levelWritePos[level]
        ring[writePos] = sample
        writePos += 1
        if (writePos >= len) writePos = 0
        this._levelWritePos[level] = writePos

        const fill = this._levelFill[level]
        this._levelFill[level] = Math.min(len, fill + 1)
        this._levelProduced[level] += 1
    }

    _pushSamples(input) {
        this._levelProduced.fill(0)
        processInputBlockToDecimator(input, this._decimator, (level, sample) => {
            this._pushLevelSample(level, sample)
        })
    }

    _pushRhythmSample(sample) {
        const ring = this._rhythmWindow
        const len = ring.length
        ring[this._rhythmWindowWritePos] = sample
        this._rhythmWindowWritePos += 1
        if (this._rhythmWindowWritePos >= len) this._rhythmWindowWritePos = 0
        this._rhythmWindowFill = Math.min(len, this._rhythmWindowFill + 1)
    }

    _phaseDelta(curr, prev) {
        let d = curr - prev
        while (d > Math.PI) d -= 2 * Math.PI
        while (d < -Math.PI) d += 2 * Math.PI
        return d
    }

    _computeGoertzel(binIndex) {
        const bin = this._bins[binIndex]
        const level = bin.level
        const windowSize = bin.windowSize
        const fill = this._levelFill[level]
        if (fill < windowSize) return null

        const ring = this._levelRings[level]
        const ringSize = ring.length
        const writePos = this._levelWritePos[level]
        let readPos = writePos - windowSize
        if (readPos < 0) readPos += ringSize

        let s0 = 0
        let s1 = 0
        let s2 = 0

        for (let i = 0; i < windowSize; i++) {
            const x = ring[readPos]
            readPos += 1
            if (readPos >= ringSize) readPos = 0
            s0 = x + (bin.coeff * s1) - s2
            s2 = s1
            s1 = s0
        }

        const re = s1 - (s2 * bin.cos)
        const im = s2 * bin.sin
        const mag = Math.sqrt((re * re) + (im * im)) / Math.max(1, windowSize)
        const db = 20 * Math.log10(Math.max(1e-12, mag))
        const phase = Math.atan2(im, re)

        return {
            magDb: Math.max(-120, Math.min(0, db)),
            phase,
        }
    }

    _analyzeBin(binIndex, hopMs) {
        const cfg = this._cfg
        const result = this._computeGoertzel(binIndex)
        if (!result) return false

        const needsMagnitude = cfg.needMagnitude || cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime
        const needsFlux = cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime
        const needsPhaseDeviation = cfg.needPhaseDeviation
        const needsPhase = cfg.needPhase
        const needsEnvelope = cfg.needEnvelope
        const needsAttackTime = cfg.needAttackTime

        const magNowDb = result.magDb
        const magNowLin = Math.max(0, Math.pow(10, magNowDb / 20))
        if (needsMagnitude) this._outMagnitude[binIndex] = magNowDb

        const prevMag = this._prevMag[binIndex]
        const rise = magNowLin - prevMag
        const fluxValue = Math.max(0, rise) * 64
        if (needsFlux) this._outFlux[binIndex] = fluxValue

        const fluxWindow = this._fluxWindowFrames
        const fill = this._fluxHistoryFill[binIndex]
        const avgFlux = this._fluxHistorySums[binIndex] / Math.max(1, fill)
        const attackRatio = Math.max(1.0, Number(cfg.attackRatio) || 3.0)
        const minAttackThreshold = Math.max(1e-6, Number(cfg.attackThreshold) || 0.0005)
        const dynamicAttackThreshold = Math.max(minAttackThreshold, avgFlux * attackRatio)

        const writePos = this._fluxHistoryWritePos[binIndex]
        const histOffset = (binIndex * fluxWindow) + writePos
        const oldFlux = this._fluxHistory[histOffset]
        this._fluxHistory[histOffset] = fluxValue
        this._fluxHistorySums[binIndex] = this._fluxHistorySums[binIndex] - oldFlux + fluxValue
        this._fluxHistoryWritePos[binIndex] = (writePos + 1) % fluxWindow
        if (fill < fluxWindow) this._fluxHistoryFill[binIndex] = fill + 1

        if (needsPhase || needsPhaseDeviation) {
            if (needsPhase) this._outPhase[binIndex] = result.phase
            if (needsPhaseDeviation) {
                const phase = result.phase
                const d1 = this._phaseDelta(phase, this._prevPhase[binIndex])
                // True phase instability: subtract the expected phase advance.
                // For bin at frequency f with Goertzel window W and hop H at
                // sample rate sr, the expected per-hop phase increment is:
                //   expected = 2*PI * f * H / sr
                // A pure tone at the bin's exact center frequency will have
                // exactly this phase increment → corrected deviation = 0.
                // Noisy/transient content misses the expected value → random.
                const bin = this._bins[binIndex]
                const hopSize = this._levelHopSize[bin.level] || 64
                const sr = this._levelSampleRates[bin.level] || 44100
                const expectedDelta = 2 * Math.PI * bin.freqHz * hopSize / sr
                const corrected = this._phaseDelta(d1, expectedDelta)
                // Second difference catches acceleration / rate-of-change of instability
                const d2 = this._phaseDelta(corrected, this._prevPhaseDelta[binIndex])
                // Output absolute value in [0, PI], then normalize to [0, 1]
                this._outPhaseDeviation[binIndex] = Math.abs(d2) / Math.PI
                this._prevPhase[binIndex] = phase
                this._prevPhaseDelta[binIndex] = corrected
            }
        }

        if (needsAttackTime) {
            const isRising = fluxValue > dynamicAttackThreshold
            if (isRising) {
                this._attackActive[binIndex] = 1
                this._attackElapsedMs[binIndex] += hopMs
            } else if (this._attackActive[binIndex]) {
                this._attackActive[binIndex] = 0
                this._attackLastMs[binIndex] = Math.max(hopMs, this._attackElapsedMs[binIndex])
                this._attackElapsedMs[binIndex] = 0
            }
            this._outAttackTime[binIndex] = this._attackActive[binIndex]
                ? this._attackElapsedMs[binIndex]
                : this._attackLastMs[binIndex]
        }

        if (needsEnvelope) {
            let state = 0
            if (fluxValue > dynamicAttackThreshold) state = 1
            else if (Math.abs(rise) <= cfg.sustainFluxEps && magNowLin >= cfg.sustainMagThreshold) state = 2
            else if (rise < -cfg.decayThreshold) state = 3
            this._outEnvelope[binIndex] = state
        }

        this._prevMag[binIndex] = magNowLin
        return true
    }

    _analyzeAndPost() {
        const cfg = this._cfg
        const needsAny = cfg.needMagnitude || cfg.needFlux || cfg.needPhaseDeviation || cfg.needPhase || cfg.needEnvelope || cfg.needAttackTime
        if (!cfg.enabled || !needsAny || this.binCount === 0) return

        // Boot muzzle: skip the first few blocks to avoid sending data
        // from an empty ring buffer.
        if (this.bootTimer > 0) { this.bootTimer--; return }

        // Skip analysis frames immediately after CQT parameter changes to allow
        // ring buffers to refill with fresh data and prevent discontinuity artifacts.
        if (this._framesUntilNextAnalysis > 0) {
            this._framesUntilNextAnalysis--
            return
        }

        let analyzedAny = false

        for (let level = 0; level < this._levelCount; level++) {
            const produced = this._levelProduced[level]
            if (produced <= 0) continue

            const hopSize = this._levelHopSize[level]
            if (!hopSize) continue

            const counter = this._levelHopCounter[level] + produced
            if (counter < hopSize) {
                this._levelHopCounter[level] = counter
                continue
            }
            this._levelHopCounter[level] = counter % hopSize

            const hopMs = (hopSize / Math.max(1, this._levelSampleRates[level])) * 1000
            const binIndices = this._binsByLevel[level]
            for (let i = 0; i < binIndices.length; i++) {
                const binIndex = binIndices[i]
                if (this._analyzeBin(binIndex, hopMs)) analyzedAny = true
            }
        }

        if (!analyzedAny) return

        const payload = { type: 'binMetrics' }

        // Determine visual target bin count based on requested visual resolution
        // relative to the internal math resolution.
        const internalRes = this._internalResolution || DEFAULT_CQT_DETAILS_PER_10_OCTAVES
        const visualReq = Math.max(1, Math.floor(Number(this._visualResolution) || this._cfg.cqtDetailsPer10Octaves))
        let visualBinCount = Math.max(8, Math.min(this.binCount, Math.round(this.binCount * (visualReq / internalRes))))

        // If visual bin count is >= actual bin count, just send the full buffers.
        const shouldThin = visualBinCount < this.binCount

        if (!shouldThin) {
            if (cfg.needMagnitude || cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) payload.magnitude = this._outMagnitude
            if (cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) payload.flux = this._outFlux
            if (cfg.needPhaseDeviation) payload.phaseDeviation = this._outPhaseDeviation
            if (cfg.needPhase) payload.phase = this._outPhase
            if (cfg.needEnvelope) payload.envelope = this._outEnvelope
            if (cfg.needAttackTime) payload.attackTime = this._outAttackTime
            this.port.postMessage(payload)
            return
        }

        // Thinning via max-pooling: compress internal high-res arrays into fewer
        // visual bins by taking the maximum value in each chunk.
        const ratio = Math.ceil(this.binCount / visualBinCount)
        const outLen = Math.ceil(this.binCount / ratio)
        if (cfg.needMagnitude || cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) {
            const thinnedMag = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                let chunkMax = -Infinity
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const v = this._outMagnitude[j]
                    if (v > chunkMax) chunkMax = v
                }
                thinnedMag[out] = (chunkMax === -Infinity) ? -120 : chunkMax
            }
            payload.magnitude = thinnedMag
        }
        if (cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) {
            const thinnedFlux = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                let chunkMax = -Infinity
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const v = this._outFlux[j]
                    if (v > chunkMax) chunkMax = v
                }
                thinnedFlux[out] = (chunkMax === -Infinity) ? 0 : chunkMax
            }
            payload.flux = thinnedFlux
        }
        if (cfg.needPhaseDeviation) {
            const thinned = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                let chunkMax = -Infinity
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const v = this._outPhaseDeviation[j]
                    if (v > chunkMax) chunkMax = v
                }
                thinned[out] = (chunkMax === -Infinity) ? 0 : chunkMax
            }
            payload.phaseDeviation = thinned
        }
        if (cfg.needPhase) {
            const thinned = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                // For phase we pick the phase of the max-magnitude bin inside the chunk
                let maxMag = -Infinity
                let phaseVal = 0
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const m = this._outMagnitude[j]
                    if (m > maxMag) {
                        maxMag = m
                        phaseVal = this._outPhase[j]
                    }
                }
                thinned[out] = phaseVal
            }
            payload.phase = thinned
        }
        if (cfg.needEnvelope) {
            const thinned = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                let chunkMax = -Infinity
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const v = this._outEnvelope[j]
                    if (v > chunkMax) chunkMax = v
                }
                thinned[out] = (chunkMax === -Infinity) ? 0 : chunkMax
            }
            payload.envelope = thinned
        }
        if (cfg.needAttackTime) {
            const thinned = new Float32Array(outLen)
            for (let out = 0, i = 0; i < this.binCount; i += ratio, out++) {
                let chunkMax = -Infinity
                const end = Math.min(i + ratio, this.binCount)
                for (let j = i; j < end; j++) {
                    const v = this._outAttackTime[j]
                    if (v > chunkMax) chunkMax = v
                }
                thinned[out] = (chunkMax === -Infinity) ? 0 : chunkMax
            }
            payload.attackTime = thinned
        }

        this.port.postMessage(payload)
    }

    process(inputs, outputs) {
        const input = inputs[0]
        if (input && input.length) {
            const channelCount = input.length
            const sampleCount = input[0]?.length || 0

            // No per-sample gain ramp. The CQT ring buffers start
            // zero-filled, so Goertzel output already rises naturally
            // from 0 to full over the window duration (~9s for 16 Hz).
            // A short ramp (<1s) is invisible to the lowest bins.
            if (sampleCount > 0) {
                for (let i = 0; i < sampleCount; i++) {
                    let sum = 0
                    for (let channel = 0; channel < channelCount; channel++) {
                        sum += input[channel][i] || 0
                    }
                    this._pushRhythmSample(sum / Math.max(1, channelCount))
                }
            }
            this._pushSamples(input)
            this._analyzeAndPost()
            const brainPayload = this._analyzeBrains(sampleCount)
            if (brainPayload) this.port.postMessage(brainPayload)
        }
        return true
    }
}

registerProcessor('bin-analysis-processor', BinAnalysisProcessor)
