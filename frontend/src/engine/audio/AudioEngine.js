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

const ALLOWED_FFT_SIZES = Object.freeze([1024, 2048, 4096, 8192, 16384])

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

export function snapFftSize(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return 2048
    let best = ALLOWED_FFT_SIZES[0]
    let bestDist = Math.abs(n - best)
    for (let i = 1; i < ALLOWED_FFT_SIZES.length; i++) {
        const candidate = ALLOWED_FFT_SIZES[i]
        const dist = Math.abs(n - candidate)
        if (dist < bestDist) {
            best = candidate
            bestDist = dist
        }
    }
    return best
}

export class AudioEngine {
    constructor({ initialFftSize = 2048, snapFftSizeFn = snapFftSize, deriveAudioUsage } = {}) {
        this._snapFftSize = typeof snapFftSizeFn === 'function' ? snapFftSizeFn : snapFftSize
        this._deriveAudioUsage = typeof deriveAudioUsage === 'function' ? deriveAudioUsage : defaultUsage

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
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            attackThreshold: 0.0005,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
        }
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

        this.FFT_SIZE = this._snapFftSize(initialFftSize)
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._freqL = new Uint8Array(128)
        this._freqR = new Uint8Array(128)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)
        this._binMagnitude = null
        this._binFlux = null
        this._binPhaseDeviation = null
        this._binPhase = null
        this._binEnvelope = null
        this._binAttackTime = null
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
        this.ctxState = 'none'
        this.monitorMuted = false
    }

    _createBinAnalysisNode() {
        if (!this.ctx) return null
        const node = new AudioWorkletNode(this.ctx, 'bin-analysis-processor', {
            numberOfInputs: 1,
            numberOfOutputs: 0,
            processorOptions: {
                fftSize: this.FFT_SIZE,
                hopSize: Math.floor(this.FFT_SIZE / 4),
            },
        })
        node.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type !== 'binMetrics') return
            if (msg.magnitude) this._binMagnitude = new Float32Array(msg.magnitude)
            if (msg.flux) this._binFlux = new Float32Array(msg.flux)
            if (msg.phaseDeviation) this._binPhaseDeviation = new Float32Array(msg.phaseDeviation)
            if (msg.phase) this._binPhase = new Float32Array(msg.phase)
            if (msg.envelope) this._binEnvelope = new Float32Array(msg.envelope)
            if (msg.attackTime) this._binAttackTime = new Float32Array(msg.attackTime)
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
        this._workletConfig.enabled = usage.worklet.enabled
        this._workletConfig.needMagnitude = usage.worklet.needMagnitude
        this._workletConfig.needFlux = usage.worklet.needFlux
        this._workletConfig.needPhaseDeviation = usage.worklet.needPhaseDeviation
        this._workletConfig.needPhase = usage.worklet.needPhase
        this._workletConfig.needEnvelope = usage.worklet.needEnvelope
        this._workletConfig.needAttackTime = usage.worklet.needAttackTime
        this._calcUsage = usage.engine
        this._postWorkletConfig()
    }

    setFftSize(nextValue) {
        const nextSize = this._snapFftSize(nextValue)
        if (nextSize === this.FFT_SIZE) return
        this.FFT_SIZE = nextSize
        this.frequencyData = new Uint8Array(this.FFT_SIZE / 2)
        this.timeDomainData = new Uint8Array(this.FFT_SIZE)
        this._prevFrequencyDataBins = new Uint8Array(this.FFT_SIZE / 2)
        this._binMagnitude = null
        this._binFlux = null
        this._binPhaseDeviation = null
        this._binPhase = null
        this._binEnvelope = null
        this._binAttackTime = null

        if (this.analyser) {
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.minDecibels = -140
        }

        if (this.binAnalysisNode) {
            try {
                this.source?.disconnect(this.binAnalysisNode)
            } catch { }
            try {
                this.streamSource?.disconnect(this.binAnalysisNode)
            } catch { }
            try {
                this.binAnalysisNode.disconnect()
            } catch { }
            this.binAnalysisNode = null
            this._workletConnected = false
        }

        if (this.ctx && this._workletReady) {
            this.binAnalysisNode = this._createBinAnalysisNode()
            this._connectSourceToWorklet()
            this._postWorkletConfig()
        }
    }

    init(el) {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)()
            this.analyser = this.ctx.createAnalyser()
            this.analyser.fftSize = this.FFT_SIZE
            this.analyser.smoothingTimeConstant = 0
            this.analyser.minDecibels = -140
            this.outputGain = this.ctx.createGain()
            this.outputGain.gain.value = this.monitorMuted ? 0 : 1
            this.analyser.connect(this.outputGain)
            this.outputGain.connect(this.ctx.destination)
            this._ensureWorkletLoaded()
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
            } catch {
                const stream = (el.captureStream?.() || el.mozCaptureStream?.())
                if (stream) {
                    this.streamNode = stream
                    this.streamSource = this.ctx.createMediaStreamSource(stream)
                    this.streamSource.connect(this.analyser)
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
        this.analyser.getByteFrequencyData(this.frequencyData)
        this.analyser.getByteTimeDomainData(this.timeDomainData)

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
}
