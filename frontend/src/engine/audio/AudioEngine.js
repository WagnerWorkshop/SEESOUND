import {
    computeSpectralCentroid,
    computeSpectralFlux,
    computeSpectralFlatness,
    computeInharmonicity,
    computePeakAmplitude,
    computeZeroCrossingRate,
    computeSpectralRolloff,
    computeSpectralSpread,
    computeSpectralSkewness,
    computeChromagram,
    normalizeCentroidHzToUnit,
} from './AudioFeatures.js'

function defaultUsage() {
    return {
        worklet: {
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            needPitchBrain: false,
            needTextureBrain: false,
            needRhythmBrain: false,
            needTrackerBrain: false,
            objectMode: 'particle',
        },
        engine: {
            needRms: true,
            needSpectralCentroid: false,
            needGlobalSpectralFlux: false,
            needSpectralFlatness: false,
            needInharmonicity: false,
            needPeakAmplitude: false,
            needZeroCrossingRate: false,
            needSpectralRolloff: false,
            needSpectralSpread: false,
            needSpectralSkewness: false,
            needChromagram: false,
        },
    }
}

export function snapCqtDetailsPer10Octaves(value) {
    const n = Math.round(Number(value))
    if (!Number.isFinite(n)) return 1000
    const clamped = Math.max(100, Math.min(1000, n))
    const snapped = Math.round(clamped / 100) * 100
    return Math.max(100, Math.min(1000, snapped))
}

export class AudioEngine {
    constructor({
        initialCqtDetailsPer10Octaves = 1000,
        deriveAudioUsage,
    } = {}) {
        this._deriveAudioUsage = typeof deriveAudioUsage === 'function' ? deriveAudioUsage : defaultUsage
        this._snapCqtDetailsPer10Octaves = snapCqtDetailsPer10Octaves

        this.ctx = null; this.analyser = null; this.source = null
        this.outputGain = null
        this.streamSource = null; this.streamNode = null
        this.audioEl = null; this.splitter = null
        this.analyserL = null; this.analyserR = null
        this.binAnalysisNode = null
        this._workletConnected = false
        this._workletReady = false
        this._workletLoadPromise = null
        this._workletConfig = {
            enabled: true,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            needPitchBrain: false,
            needTextureBrain: false,
            // Rhythm brain always on for transient detection
            needRhythmBrain: true,
            needTrackerBrain: false,
            objectMode: 'particle',
            fluxWindowFrames: 10,
            attackThreshold: 0.0005,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
            cqtDetailsPer10Octaves: this._snapCqtDetailsPer10Octaves(initialCqtDetailsPer10Octaves),
            cqtMinHz: 16,
            cqtMaxHz: 20000,
            pitchMinHz: 40,
            pitchMaxHz: 4000,
        }
        this._cqtUpdateTimeout = null
        this._calcUsage = {
            needRms: true,
            needSpectralCentroid: false,
            needGlobalSpectralFlux: false,
            needSpectralFlatness: false,
            needInharmonicity: false,
            needPeakAmplitude: false,
            needZeroCrossingRate: false,
            needSpectralRolloff: false,
            needSpectralSpread: false,
            needSpectralSkewness: false,
            needChromagram: false,
        }

        // High-resolution frequency FFT (16384 → 8192 bins)
        this.FFT_SIZE = 16384
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._freqL = new Uint8Array(128)
        this._freqR = new Uint8Array(128)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)

        // Rhythm/transient FFT (1024 → 512 bins, always on)
        this.RHYTHM_FFT_SIZE = 1024
        this._rhythmAnalyser = null
        this._rhythmFrequencyData = new Uint8Array(this.RHYTHM_FFT_SIZE / 2)
        this._prevRhythmData = new Uint8Array(this.RHYTHM_FFT_SIZE / 2)
        this._binMagnitude = null
        this._binFlux = null
        this._binPhaseDeviation = null
        this._binPhase = null
        this._binEnvelope = null
        this._binAttackTime = null
        this._harmonicObjects = null
        this.featureSmoothingAlpha = 0.2

        this.bass = 0; this.mid = 0; this.high = 0
        this.amplitude = 0; this.peakFreq = 0; this.peakByte = 0; this.pan = 0
        this.rmsDbfs = -96
        this.spectralCentroidHz = 0
        this.spectralFluxAU = 0
        this.spectralFlatnessRatio = 0
        this.spectralCentroid = 0
        this.spectralFlux = 0
        this.spectralFlatness = 0
        this.inharmonicity = 0
        this.peakAmplitude = 0
        this.zeroCrossingRate = 0
        this.spectralRolloff = 0
        this.spectralSpread = 0
        this.spectralSkewness = 0
        this.chromagram = 0
        this.fundamentalHz = 0
        this.fundamentalPitch = 0
        this.fundamentalNote = 0
        this.entityCentroid = 0
        this.entityFlatness = 0
        this.entityInharmonicity = 0
        this.entityVolume = 0
        // Rhythm/transient metrics from the 1024-FFT
        this.globalTransient = 0
        this._rhythmTransient = 0
        this._rhythmEnergy = 0

        this.entityAge = 0
        this.streamId = 0
        this.ctxState = 'none'
        this.monitorMuted = false

        // Warmup frame counter — prevents first-frame impulse
        this._warmupFrames = 0
        this._warmupFrameCount = 5

        // Lookahead buffer size auto-calculated from FFT sizes
        this._lookaheadFrames = 0

        // Max bins for buffer sizing
        this._maxBins = Math.max(this.FFT_SIZE / 2, this.RHYTHM_FFT_SIZE / 2)
    }

    _createBinAnalysisNode() {
        if (!this.ctx) return null
        const node = new AudioWorkletNode(this.ctx, 'bin-analysis-processor', {
            numberOfInputs: 1,
            numberOfOutputs: 0,
            processorOptions: {
                fluxWindowFrames: this._workletConfig.fluxWindowFrames,
                cqtDetailsPer10Octaves: this._workletConfig.cqtDetailsPer10Octaves,
                cqtMinHz: this._workletConfig.cqtMinHz,
                cqtMaxHz: this._workletConfig.cqtMaxHz,
                pitchMinHz: this._workletConfig.pitchMinHz,
                pitchMaxHz: this._workletConfig.pitchMaxHz,
                objectMode: this._workletConfig.objectMode || 'particle',
            },
        })
        node.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type === 'binMetrics') {
                if (msg.magnitude) this._binMagnitude = new Float32Array(msg.magnitude)
                if (msg.flux) this._binFlux = new Float32Array(msg.flux)
                if (msg.phaseDeviation) this._binPhaseDeviation = new Float32Array(msg.phaseDeviation)
                if (msg.phase) this._binPhase = new Float32Array(msg.phase)
                if (msg.envelope) this._binEnvelope = new Float32Array(msg.envelope)
                if (msg.attackTime) this._binAttackTime = new Float32Array(msg.attackTime)
                return
            }
            if (msg.type === 'entityMetrics') {
                this.fundamentalHz = Number(msg.fundamentalHz) || 0
                this.fundamentalPitch = Number(msg.fundamentalPitch) || 0
                this.fundamentalNote = Number.isFinite(msg.fundamentalNote) ? Number(msg.fundamentalNote) : 0
                this.entityCentroid = Number(msg.entityCentroid) || 0
                this.entityFlatness = Number(msg.entityFlatness) || 0
                this.entityInharmonicity = Number(msg.entityInharmonicity) || 0
                this.entityVolume = Number(msg.entityVolume) || 0
                this.globalTransient = Number(msg.globalTransient) || 0
                this.entityAge = Number(msg.entityAge) || 0
                this.streamId = Number(msg.streamId) || 0
            }
            if (msg.type === 'harmonicObjects') {
                this._harmonicObjects = msg.objects || null
            }
        }
        return node
    }

    _ensureWorkletLoaded() {
        if (!this.ctx || this._workletReady) return
        if (!this._workletLoadPromise) {
            const moduleUrl = new URL('./BinAnalysisWorklet.js', import.meta.url)
            this._workletLoadPromise = this.ctx.audioWorklet.addModule(moduleUrl)
                .then(() => {
                    this.binAnalysisNode = this._createBinAnalysisNode()
                    this._workletReady = true
                    this._connectSourceToWorklet()
                    this._postWorkletConfig()
                })
                .catch((err) => {
                    console.warn('[AudioWorklet] Failed to load bin analysis worklet:', err)
                })
        }
    }

    _postWorkletConfig() {
        if (!this.binAnalysisNode) return
        this.binAnalysisNode.port.postMessage({
            type: 'config',
            config: this._workletConfig,
        })
    }

    _connectSourceToWorklet() {
        if (!this.binAnalysisNode) return false
        const srcNode = this.source || this.streamSource
        if (!srcNode) return false
        if (this._workletConnected) return true
        try {
            srcNode.connect(this.binAnalysisNode)
            this._workletConnected = true
            return true
        } catch {
            return false
        }
    }

    setRuleInputUsage(requiredInputsByTarget = null) {
        const usage = this._deriveAudioUsage(requiredInputsByTarget)
        this._workletConfig.enabled = true // always enabled
        this._workletConfig.needMagnitude = usage.worklet.needMagnitude
        this._workletConfig.needFlux = usage.worklet.needFlux
        this._workletConfig.needPhaseDeviation = usage.worklet.needPhaseDeviation
        this._workletConfig.needPhase = usage.worklet.needPhase
        this._workletConfig.needEnvelope = usage.worklet.needEnvelope
        this._workletConfig.needAttackTime = usage.worklet.needAttackTime
        this._workletConfig.needPitchBrain = usage.worklet.needPitchBrain
        this._workletConfig.needTextureBrain = usage.worklet.needTextureBrain
        this._workletConfig.needRhythmBrain = true // always on for transient detection
        this._workletConfig.needTrackerBrain = usage.worklet.needTrackerBrain
        this._workletConfig.objectMode = usage.worklet.objectMode || 'particle'
        this._calcUsage = usage.engine
        this._postWorkletConfig()
    }

    setFluxWindowFrames(nextValue) {
        const next = Math.max(1, Math.min(64, Math.floor(Number(nextValue) || 10)))
        if (this._workletConfig.fluxWindowFrames === next) return
        this._workletConfig.fluxWindowFrames = next
        this._postWorkletConfig()
    }

    setCqtDetailsPer10Octaves(nextValue) {
        const next = this._snapCqtDetailsPer10Octaves(nextValue)
        if (this._workletConfig.cqtDetailsPer10Octaves === next) return
        this._workletConfig.cqtDetailsPer10Octaves = next
        if (this._cqtUpdateTimeout) clearTimeout(this._cqtUpdateTimeout)
        this._cqtUpdateTimeout = setTimeout(() => {
            this._cqtUpdateTimeout = null
            this._postWorkletConfig()
        }, 150)
    }

    setCqtFrequencyRange(minHz, maxHz) {
        const nextMin = Math.max(8, Math.min(22050, Number(minHz) || 16))
        const nextMaxRaw = Math.max(8, Math.min(22050, Number(maxHz) || 20000))
        const nextMax = Math.max(nextMin * 1.05, nextMaxRaw)

        const changed = this._workletConfig.cqtMinHz !== nextMin || this._workletConfig.cqtMaxHz !== nextMax
        if (!changed) return

        this._workletConfig.cqtMinHz = nextMin
        this._workletConfig.cqtMaxHz = nextMax
        this._postWorkletConfig()
    }

    /**
     * Set FFT sizes dynamically. Recreates analyser nodes if context is active.
     * @param {number} freqSize - Frequency FFT size (1024-32768, power of 2).
     * @param {number} rhythmSize - Rhythm FFT size (256-4096, power of 2).
     */
    setFftSizes(freqSize, rhythmSize) {
        const fft = AudioEngine._snapFftSize(freqSize, 1024, 32768)
        const rfft = AudioEngine._snapFftSize(rhythmSize, 256, 4096)
        if (fft === this.FFT_SIZE && rfft === this.RHYTHM_FFT_SIZE) return
        this.FFT_SIZE = fft
        this.RHYTHM_FFT_SIZE = rfft
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)
        this._rhythmFrequencyData = new Uint8Array(this.RHYTHM_FFT_SIZE / 2)
        this._prevRhythmData = new Uint8Array(this.RHYTHM_FFT_SIZE / 2)
        if (this.analyser) this.analyser.fftSize = this.FFT_SIZE
        if (this._rhythmAnalyser) this._rhythmAnalyser.fftSize = this.RHYTHM_FFT_SIZE
        this._computeLookahead()
        this._warmupFrames = 0
    }

    static _snapFftSize(value, min, max) {
        let v = Math.max(min, Math.min(max, Math.round(Number(value) || min)))
        // Round to nearest power of 2
        return Math.max(min, Math.min(max, 1 << Math.round(Math.log2(v))))
    }

    _computeLookahead() {
        // Lookahead = how many frames it takes for the FFT to stabilize
        // Roughly 1.5x the FFT size / sampleRate in frames at 60fps
        const sr = this.ctx?.sampleRate ?? 44100
        const freqFrames = Math.ceil((this.FFT_SIZE / sr) * 60 * 1.5)
        const rhythmFrames = Math.ceil((this.RHYTHM_FFT_SIZE / sr) * 60 * 1.5)
        this._lookaheadFrames = Math.max(freqFrames, rhythmFrames, this._warmupFrameCount)
    }

    init(el) {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)()
            this.analyser = this.ctx.createAnalyser()
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.minDecibels = -140
            // Rhythm analyser for transient detection
            this._rhythmAnalyser = this.ctx.createAnalyser()
            this._rhythmAnalyser.fftSize = this.RHYTHM_FFT_SIZE
            this._rhythmAnalyser.smoothingTimeConstant = 0
            this._rhythmAnalyser.minDecibels = -140
            this.outputGain = this.ctx.createGain()
            this.outputGain.gain.value = this.monitorMuted ? 0 : 1
            this.analyser.connect(this.outputGain)
            this.outputGain.connect(this.ctx.destination)
            this._ensureWorkletLoaded()
        }
        // If already connected to this audio element, skip reconnection
        if (el === this.audioEl && (this.source || this.streamSource)) {
            return
        }
        if (this.audioEl !== el || (!this.source && !this.streamSource)) {
            this.source?.disconnect()
            this.streamSource?.disconnect()
            this.splitter?.disconnect()
            this.analyserL?.disconnect()
            this.analyserR?.disconnect()
            this.audioEl = el
            this.source = null
            this.streamSource = null
            this.streamNode = null
            this._workletConnected = false

            try {
                this.source = this.ctx.createMediaElementSource(el)
                this.source.connect(this.analyser)
                this.source.connect(this._rhythmAnalyser)
            } catch {
                const stream = (el.captureStream?.() || el.mozCaptureStream?.())
                if (stream) {
                    this.streamNode = stream
                    this.streamSource = this.ctx.createMediaStreamSource(stream)
                    this.streamSource.connect(this.analyser)
                    this.streamSource.connect(this._rhythmAnalyser)
                }
            }
            try {
                this.splitter = this.ctx.createChannelSplitter(2)
                this.analyserL = this.ctx.createAnalyser()
                this.analyserR = this.ctx.createAnalyser()
                for (const a of [this.analyserL, this.analyserR]) {
                    a.fftSize = 256
                    a.minDecibels = -140
                }
                const srcNode = this.source || this.streamSource
                srcNode?.connect(this.splitter)
                this.splitter.connect(this.analyserL, 0)
                this.splitter.connect(this.analyserR, 1)
                this._connectSourceToWorklet()
            } catch { }

            this._connectSourceToWorklet()
        }
        if (this.ctx.state === 'suspended') this.ctx.resume()
        this.ctxState = this.ctx.state

        // Reset warmup counter on fresh init (new audio source)
        this._warmupFrames = 0
        this._warmupFrameCount = 5
        this._computeLookahead()
    }

    setMonitorMuted(muted) {
        this.monitorMuted = !!muted
        if (!this.outputGain) return
        const next = this.monitorMuted ? 0 : 1
        try {
            this.outputGain.gain.setValueAtTime(next, this.ctx?.currentTime ?? 0)
        } catch {
            this.outputGain.gain.value = next
        }
    }

    update() {
        if (!this.analyser) return
        if (this.ctx?.state === 'suspended' && this.audioEl && !this.audioEl.paused) {
            this.ctx.resume()
        }
        this.ctxState = this.ctx?.state ?? 'none'

        // Warmup: fill buffers with real data but zero out outputs
        const isWarmup = this._warmupFrames < this._warmupFrameCount
        if (isWarmup) {
            // Read real FFT data to fill history buffers
            this.analyser.getByteFrequencyData(this.frequencyData)
            this.analyser.getByteTimeDomainData(this.timeDomainData)
            if (this._rhythmAnalyser) {
                this._rhythmAnalyser.getByteFrequencyData(this._rhythmFrequencyData)
                this._prevRhythmData.set(this._rhythmFrequencyData)
            }
            this._prevFrequencyDataBins.set(this.frequencyData)
            // Zero out derived features during warmup
            this.bass = 0; this.mid = 0; this.high = 0
            this.peakFreq = 0; this.peakByte = 0; this.amplitude = 0
            this.rmsDbfs = -96; this.pan = 0
            this.spectralCentroidHz = 0; this.spectralCentroid = 0
            this.spectralFluxAU = 0; this.spectralFlux = 0
            this.spectralFlatnessRatio = 0; this.spectralFlatness = 0
            this.inharmonicity = 0; this.peakAmplitude = 0
            this.zeroCrossingRate = 0; this.spectralRolloff = 0
            this.spectralSpread = 0; this.spectralSkewness = 0
            this.chromagram = 0
            this._rhythmTransient = 0; this._rhythmEnergy = 0
            this.globalTransient = 0
            this.frequencyData.fill(0)
            this._warmupFrames++
            return
        }

        this.analyser.getByteFrequencyData(this.frequencyData)
        this.analyser.getByteTimeDomainData(this.timeDomainData)

        // Read rhythm analyser (1024-FFT) for transient detection
        if (this._rhythmAnalyser) {
            this._rhythmAnalyser.getByteFrequencyData(this._rhythmFrequencyData)
            // Compute transient metric: spectral flux on the rhythm FFT
            let fluxSum = 0
            const len = this._rhythmFrequencyData.length
            for (let i = 0; i < len; i++) {
                const diff = Math.abs(this._rhythmFrequencyData[i] - this._prevRhythmData[i])
                fluxSum += diff
            }
            this._prevRhythmData.set(this._rhythmFrequencyData)
            const transientNorm = fluxSum / (len * 255)
            const alpha = Math.max(0, Math.min(1, this.featureSmoothingAlpha))
            this._rhythmTransient += (transientNorm - this._rhythmTransient) * alpha
            this.globalTransient = this._rhythmTransient
            // Rhythm energy = average magnitude of the 1024-FFT
            let eSum = 0
            for (let i = 0; i < len; i++) eSum += this._rhythmFrequencyData[i]
            this._rhythmEnergy = eSum / (len * 255)
        }

        const bc = this.frequencyData.length
        const sr = this.ctx?.sampleRate ?? 44100
        const nyq = sr / 2
        const hz = (b) => (b / bc) * nyq

        let bS = 0, bC = 0, mS = 0, mC = 0, hS = 0, hC = 0, peak = 0, pb = 0
        for (let i = 0; i < bc; i++) {
            const v = this.frequencyData[i], f = hz(i)
            if (f < 250) { bS += v; bC++ } else if (f < 4000) { mS += v; mC++ } else { hS += v; hC++ }
            if (v > peak) { peak = v; pb = i }
        }
        this.bass = bC ? bS / bC / 255 : 0
        this.mid = mC ? mS / mC / 255 : 0
        this.high = hC ? hS / hC / 255 : 0
        this.peakFreq = Math.round(hz(pb))
        this.peakByte = peak

        const alpha = Math.max(0, Math.min(1, this.featureSmoothingAlpha))
        const needsCentroidFrame = this._calcUsage.needSpectralCentroid || this._calcUsage.needSpectralSpread || this._calcUsage.needSpectralSkewness
        const frameCentroidHz = needsCentroidFrame ? computeSpectralCentroid(this.frequencyData, sr) : 0
        if (this._calcUsage.needSpectralCentroid) {
            this.spectralCentroidHz += (frameCentroidHz - this.spectralCentroidHz) * alpha
            this.spectralCentroid = normalizeCentroidHzToUnit(this.spectralCentroidHz, sr)
        } else {
            this.spectralCentroidHz = 0
            this.spectralCentroid = 0
        }

        if (this._calcUsage.needGlobalSpectralFlux) {
            const fluxNorm = computeSpectralFlux(this.frequencyData, this._prevFrequencyDataBins)
            const fluxAu = fluxNorm * 100
            this.spectralFluxAU += (fluxAu - this.spectralFluxAU) * alpha
            this.spectralFlux = Math.max(0, Math.min(1, this.spectralFluxAU / 100))
        } else {
            this.spectralFluxAU = 0
            this.spectralFlux = 0
        }

        if (this._calcUsage.needSpectralFlatness) {
            const flatnessNorm = computeSpectralFlatness(this.frequencyData)
            this.spectralFlatnessRatio += (flatnessNorm - this.spectralFlatnessRatio) * alpha
            this.spectralFlatness = Math.max(0, Math.min(1, this.spectralFlatnessRatio))
        } else {
            this.spectralFlatnessRatio = 0
            this.spectralFlatness = 0
        }

        if (this._calcUsage.needInharmonicity) {
            const inharmonicityNorm = computeInharmonicity(this.frequencyData, sr)
            this.inharmonicity += (inharmonicityNorm - this.inharmonicity) * alpha
        } else {
            this.inharmonicity = 0
        }

        if (this._calcUsage.needPeakAmplitude) {
            this.peakAmplitude += (computePeakAmplitude(this.frequencyData) - this.peakAmplitude) * alpha
        } else {
            this.peakAmplitude = 0
        }

        if (this._calcUsage.needZeroCrossingRate) {
            this.zeroCrossingRate += (computeZeroCrossingRate(this.timeDomainData) - this.zeroCrossingRate) * alpha
        } else {
            this.zeroCrossingRate = 0
        }

        if (this._calcUsage.needSpectralRolloff) {
            this.spectralRolloff += (computeSpectralRolloff(this.frequencyData, sr, 0.85) - this.spectralRolloff) * alpha
        } else {
            this.spectralRolloff = 0
        }

        if (this._calcUsage.needSpectralSpread || this._calcUsage.needSpectralSkewness) {
            const spread = computeSpectralSpread(this.frequencyData, sr, frameCentroidHz)
            if (this._calcUsage.needSpectralSpread) this.spectralSpread += (spread - this.spectralSpread) * alpha
            else this.spectralSpread = 0
            if (this._calcUsage.needSpectralSkewness) {
                const skew = computeSpectralSkewness(this.frequencyData, sr, frameCentroidHz, spread)
                this.spectralSkewness += (skew - this.spectralSkewness) * alpha
            } else {
                this.spectralSkewness = 0
            }
        } else {
            this.spectralSpread = 0
            this.spectralSkewness = 0
        }

        if (this._calcUsage.needChromagram) {
            this.chromagram += (computeChromagram(this.frequencyData, sr) - this.chromagram) * alpha
        } else {
            this.chromagram = 0
        }

        this._prevFrequencyDataBins.set(this.frequencyData)

        let sq = 0; for (const b of this.timeDomainData) sq += ((b - 128) / 128) ** 2
        this.amplitude = Math.sqrt(sq / this.timeDomainData.length)
        this.rmsDbfs = 20 * Math.log10(Math.max(1e-6, this.amplitude))

        if (this.analyserL && this.analyserR) {
            this.analyserL.getByteFrequencyData(this._freqL)
            this.analyserR.getByteFrequencyData(this._freqR)
            let sL = 0, sR = 0
            for (let j = 0; j < this._freqL.length; j++) { sL += this._freqL[j]; sR += this._freqR[j] }
            this.pan = (sR - sL) / (sL + sR + 1)
        }
    }

    getBinPan(bin) {
        if (!this.analyserL || !this.analyserR) return this.pan
        const i = Math.min(bin, this._freqL.length - 1)
        const l = this._freqL[i], r = this._freqR[i]
        return (r - l) / (l + r + 1)
    }

    getPrevFrequencyData() {
        return this._prevFrequencyDataBins
    }

    getBinMagnitude() {
        return this._binMagnitude
    }

    getBinFlux() {
        return this._binFlux
    }

    getBinPhaseDeviation() {
        return this._binPhaseDeviation
    }

    getBinPhase() {
        return this._binPhase
    }

    getBinEnvelope() {
        return this._binEnvelope
    }

    getBinAttackTime() {
        return this._binAttackTime
    }

    /** @returns {import('../types').HarmonicObject[]|null} */
    getHarmonicObjects() {
        return this._harmonicObjects
    }
}
