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
import { createIso226CompensationLut, sampleIso226CompensationDb } from './Iso226Lut.js'

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

const FREQ_MIN_HZ = 16
const FREQ_MAX_HZ = 20000

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
        // Log-HPS CQT fundamentals from worklet
        this._cqtFundamentals = null
        // ── Rhythm brain (low FFT) per-bin arrays ──
        this._rhythmBinFlux = null
        this._rhythmBinPhaseDeviation = null
        this._rhythmBinAttackTime = null
        this._rhythmBinEnvelope = null
        this._rhythmBinPrevMag = null
        this._rhythmBinPrevPhase = null
        /** Tracks whether rhythm brain data was computed last frame */
        this._rhythmBrainActive = false
        this._harmonicObjects = null
        this.featureSmoothingAlpha = 0.2


        // ── Shape activation (supervised NMF, set by SeesoundEngine) ──
        /** @type {Float32Array} 10-shape activation vector */
        this._globalShapeActivations = new Float32Array(10)
        /** @type {Array<Object>} Enriched harmonic objects with shape activations */
        this._enrichedObjects = []


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
        // Rhythm/transient metrics from the 1024-FFT
        this.globalTransient = 0
        this._rhythmTransient = 0
        this._rhythmEnergy = 0

        this.objectAge = 0
        this.streamId = 0
        this.ctxState = 'none'
        this.monitorMuted = false

        // ── ISO 226 hearing compensation ──
        /** @type {object|null} */
        this._hearingLut = null
        /** @type {number} Cached hearing amount (0..1) */
        this._hearingAmount = 0
        /** @type {number} Last FFT size used to build LUT */
        this._hearingLutFftSize = 0

        // Max bins for buffer sizing
        this._maxBins = Math.max(this.FFT_SIZE / 2, this.RHYTHM_FFT_SIZE / 2)

        // ── Fade gain: ramps audio in/out to prevent transient artifacts ──
        this._fadeGain = null
        /** Fade ramp duration in seconds (50ms — longer for low-frequency settling) */
        this._fadeRampSeconds = 0.05
        /** Frames to ignore worklet transient messages after fade-in/out */
        this._workletTransientSuppress = 0
        /** Tracks whether we just exited a fade ramp — next non-ramp frame syncs prev */
        this._fadeRampWasActive = false
        /** Tracks cumulative suppressed transient from cold-start (cleared gradually) */
        this._coldStartSuppressFrames = 0
    }

    /** Number of frames to suppress worklet transient after fade events */
    static get TRANSIENT_SUPPRESS_FRAMES() { return 45 }

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
                if (msg.fundamentals && Array.isArray(msg.fundamentals)) this._cqtFundamentals = msg.fundamentals
                return
            }
            if (msg.type === 'objectMetrics') {
                this.fundamentalHz = Number(msg.fundamentalHz) || 0
                this.fundamentalPitch = Number(msg.fundamentalPitch) || 0
                this.fundamentalNote = Number.isFinite(msg.fundamentalNote) ? Number(msg.fundamentalNote) : 0
                // Suppress worklet transient during fade ramping — the
                // main-thread transient (globalTransient) is more reliable
                // because it respects the fade-gate.
                if (this._workletTransientSuppress <= 0) {
                    this.globalTransient = Number(msg.globalTransient) || 0
                }
                this.objectAge = Number(msg.objectAge) || 0
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
        if (!this._fadeGain) return false
        if (this._workletConnected) return true
        try {
            this._fadeGain.connect(this.binAnalysisNode)
            this._workletConnected = true
            return true
        } catch {
            return false
        }
    }


    // ── Shape Activation Accessors ───────────────────────────────────────────

    /**
     * Get the global 10-shape activation vector (frame-level, averaged across all objects).
     * Set by SeesoundEngine each frame.
     * @returns {Float32Array}
     */
    getGlobalShapeActivations() {
        return this._globalShapeActivations
    }

    /**
     * Get enriched harmonic objects with per-object shape activations.
     * Set by SeesoundEngine each frame.
     * @returns {Array<Object>}
     */
    getEnrichedObjects() {
        return this._enrichedObjects
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

    /**
     * Set ISO 226 hearing compensation amount.
     * @param {number} amount 0 = off, 0.5 = moderate, 1.0 = full 60-phon curve
     */
    setHearingCompensation(amount) {
        this._hearingAmount = Math.max(0, Math.min(1, Number(amount) || 0))
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
    }

    static _snapFftSize(value, min, max) {
        let v = Math.max(min, Math.min(max, Math.round(Number(value) || min)))
        // Round to nearest power of 2
        return Math.max(min, Math.min(max, 1 << Math.round(Math.log2(v))))
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
            // Fade gain: starts at 0 to suppress initial transient; ramped up on play
            this._fadeGain = this.ctx.createGain()
            this._fadeGain.gain.value = 0
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
                this.source.connect(this._fadeGain)
                this._fadeGain.connect(this.analyser)
                this._fadeGain.connect(this._rhythmAnalyser)
            } catch {
                const stream = (el.captureStream?.() || el.mozCaptureStream?.())
                if (stream) {
                    this.streamNode = stream
                    this.streamSource = this.ctx.createMediaStreamSource(stream)
                    this.streamSource.connect(this._fadeGain)
                    this._fadeGain.connect(this.analyser)
                    this._fadeGain.connect(this._rhythmAnalyser)
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
                if (srcNode) this._fadeGain.connect(this.splitter)
                this.splitter.connect(this.analyserL, 0)
                this.splitter.connect(this.analyserR, 1)
                this._connectSourceToWorklet()
            } catch { }

            this._connectSourceToWorklet()
        }
        if (this.ctx.state === 'suspended') this.ctx.resume()
        this.ctxState = this.ctx.state

        // ── Attach fade envelope to audio element events ────────────────
        // Remove old listeners to avoid duplicates on re-init
        this._onAudioPlay = () => this.fadeIn()
        this._onAudioPause = () => this.fadeOut()
        this._onAudioSeeking = () => this.fadeOut()
        this._onAudioSeeked = () => { if (!el.paused) this.fadeIn() }
        el.addEventListener('play', this._onAudioPlay)
        el.addEventListener('pause', this._onAudioPause)
        el.addEventListener('seeking', this._onAudioSeeking)
        el.addEventListener('seeked', this._onAudioSeeked)
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

    // ── Fade in/out envelope ────────────────────────────────────────────

    /**
     * Ramp the fade gain from its current value up to 1 over the fade window.
     * Call this when audio playback starts or resumes.
     */
    fadeIn() {
        if (!this._fadeGain || !this.ctx) return
        const now = this.ctx.currentTime
        const ramp = this._fadeRampSeconds
        try {
            this._fadeGain.gain.setValueAtTime(this._fadeGain.gain.value || 0, now)
            this._fadeGain.gain.linearRampToValueAtTime(1, now + ramp)
        } catch {
            this._fadeGain.gain.value = 1
        }
        // Mark that a fade ramp just started so the next non-ramp frame
        // will sync prev buffers to current data before computing flux.
        this._fadeRampWasActive = true
        // Suppress cold-start transient for several frames (50ms ramp + settling)
        this._coldStartSuppressFrames = 15
        // Suppress worklet transient while fade completes
        this._workletTransientSuppress = AudioEngine.TRANSIENT_SUPPRESS_FRAMES
    }

    /**
     * Ramp the fade gain from its current value down to 0 over the fade window.
     * Call this when audio playback pauses or stops.
     */
    fadeOut() {
        if (!this._fadeGain || !this.ctx) return
        const now = this.ctx.currentTime
        const ramp = this._fadeRampSeconds
        try {
            this._fadeGain.gain.setValueAtTime(this._fadeGain.gain.value, now)
            this._fadeGain.gain.linearRampToValueAtTime(0, now + ramp)
        } catch {
            this._fadeGain.gain.value = 0
        }
        // Reset previous-frame buffers so the flux/transient computation
        // starts from a clean slate when fadeIn() restores audio.
        // Without this, stale pre-pause data causes a transient spike on resume.
        this._prevRhythmData.fill(0)
        this._prevFrequencyDataBins.fill(0)
        if (this._rhythmBinPrevMag) this._rhythmBinPrevMag.fill(0)
        // Zero transient accumulators
        this._rhythmTransient = 0
        this._rhythmEnergy = 0
        this.globalTransient = 0
        this.spectralFluxAU = 0
        this.spectralFlux = 0
        // Suppress worklet transient for a few frames while reconnecting
        this._workletTransientSuppress = AudioEngine.TRANSIENT_SUPPRESS_FRAMES
    }

    update() {
        if (!this.analyser) return
        if (this.ctx?.state === 'suspended' && this.audioEl && !this.audioEl.paused) {
            this.ctx.resume()
        }
        this.ctxState = this.ctx?.state ?? 'none'

        // Decrement worklet transient suppression counter
        if (this._workletTransientSuppress > 0) this._workletTransientSuppress--

        this.analyser.getByteFrequencyData(this.frequencyData)
        this.analyser.getByteTimeDomainData(this.timeDomainData)

        // ── Fade-gate check: suppress transient/flux computations while
        //     the fade gain is actively ramping or at zero. This prevents
        //     cold-start and pause/resume transient spikes from reaching
        //     downstream features (spectral flux, rhythm transient, etc.).
        const fadeGainValue = this._fadeGain ? this._fadeGain.gain.value : 1
        const fadeRamping = fadeGainValue < 0.99

        // Read rhythm analyser (1024-FFT) for transient detection
        if (this._rhythmAnalyser) {
            this._rhythmAnalyser.getByteFrequencyData(this._rhythmFrequencyData)

            if (fadeRamping) {
                // While fade gain is ramping, suppress transient computation.
                // Keep prev buffers in sync (read data but don't let flux through)
                // so when the ramp completes the flux delta is near-zero.
                this._prevRhythmData.set(this._rhythmFrequencyData)
                this._rhythmTransient = 0
                this._rhythmEnergy = 0
                this.globalTransient = 0
                // Skip per-bin rhythm brain arrays during ramp
                this._rhythmBrainActive = false
                this._fadeRampWasActive = true
            } else {
                // ── Transition: first non-ramp frame after a ramp period ──
                // Sync prev to current so the flux delta is zero. This prevents
                // the silence→signal boundary from registering as a transient,
                // which is the root cause of cold-start and pause/restart spikes.
                if (this._fadeRampWasActive) {
                    this._fadeRampWasActive = false
                    this._prevRhythmData.set(this._rhythmFrequencyData)
                    // Also sync the high-FFT prev buffer (used by spectralFlux)
                    this._prevFrequencyDataBins.set(this.frequencyData)
                }

                // ── Cold-start transient suppression ──
                // Force transient to zero for a few frames after fade-in completes
                // so the ring buffers in ComponentTracker have time to fill.
                const alpha = Math.max(0, Math.min(1, this.featureSmoothingAlpha))
                const rhythmLen = this._rhythmFrequencyData.length
                if (this._coldStartSuppressFrames > 0) {
                    this._coldStartSuppressFrames--
                    // Force-sync prev buffers so the flux delta stays zero
                    if (this._prevRhythmData && this._rhythmFrequencyData) {
                        this._prevRhythmData.set(this._rhythmFrequencyData)
                    }
                    if (this._prevFrequencyDataBins && this.frequencyData) {
                        this._prevFrequencyDataBins.set(this.frequencyData)
                    }
                    this._rhythmTransient = 0
                    this.globalTransient = 0
                } else {
                    // Compute transient metric: spectral flux on the rhythm FFT
                    let fluxSum = 0
                    for (let i = 0; i < rhythmLen; i++) {
                        const diff = Math.abs(this._rhythmFrequencyData[i] - this._prevRhythmData[i])
                        fluxSum += diff
                    }
                    this._prevRhythmData.set(this._rhythmFrequencyData)
                    const transientNorm = fluxSum / (rhythmLen * 255)
                    this._rhythmTransient += (transientNorm - this._rhythmTransient) * alpha
                    this.globalTransient = this._rhythmTransient
                }

                // Rhythm energy = average magnitude of the 1024-FFT
                let eSum = 0
                for (let i = 0; i < rhythmLen; i++) eSum += this._rhythmFrequencyData[i]
                this._rhythmEnergy = eSum / (rhythmLen * 255)

                // ── Rhythm brain per-bin arrays (computed from low FFT) ──
                // These provide the data for binFlux, binPhaseDeviation, binAttackTime,
                // binEnvelope when the rhythm brain is active.
                const rLen = this._rhythmFrequencyData.length
                if (!this._rhythmBinFlux || this._rhythmBinFlux.length !== rLen) {
                    this._rhythmBinFlux = new Float32Array(rLen)
                    this._rhythmBinPhaseDeviation = new Float32Array(rLen)
                    this._rhythmBinAttackTime = new Float32Array(rLen)
                    this._rhythmBinEnvelope = new Float32Array(rLen)
                    this._rhythmBinPrevMag = new Float32Array(rLen)
                    this._rhythmBinPrevPhase = new Float32Array(rLen)
                }
                this._rhythmBrainActive = true
                const rNorm = 1 / 255
                for (let i = 0; i < rLen; i++) {
                    const curr = this._rhythmFrequencyData[i] * rNorm
                    const prev = this._rhythmBinPrevMag[i] || 0
                    // Flux: absolute positive change from previous frame
                    this._rhythmBinFlux[i] = Math.max(0, curr - prev)
                    // Phase deviation: simulated from frame-to-frame variance
                    const phaseShift = (curr - prev) / Math.max(0.01, curr + prev)
                    this._rhythmBinPhaseDeviation[i] = Math.max(0, Math.min(1, Math.abs(phaseShift)))
                    // Envelope: smoothed magnitude
                    this._rhythmBinEnvelope[i] = prev + (curr - prev) * alpha
                    // Attack time: rapid rise trigger (value rises quickly)
                    const rise = curr - prev
                    this._rhythmBinAttackTime[i] = Math.max(0, Math.min(1, rise * 5))
                    this._rhythmBinPrevMag[i] = curr
                }
            }
        } else {
            this._rhythmBrainActive = false
        }

        // ── Global parameters use the rhythm brain (low FFT) when available ──
        // This gives faster transient response and matches the user's intent
        // that overall/global parameters react to rhythm, not fine frequency detail.
        // Hearing compensation is applied to whichever FFT is used.
        const useHearing = this._hearingAmount > 0.001
        const rawGlobalData = this._rhythmBrainActive ? this._rhythmFrequencyData : this.frequencyData
        let globalData = rawGlobalData
        if (useHearing) {
            const srcLen = rawGlobalData.length
            if (!this._hearingLut || this._hearingLutFftSize !== srcLen) {
                this._hearingLut = createIso226CompensationLut({
                    size: Math.max(100, srcLen),
                    phon: 60,
                    minHz: FREQ_MIN_HZ,
                    maxHz: FREQ_MAX_HZ,
                    referenceHz: 1000,
                })
                this._hearingLutFftSize = srcLen
            }
            if (!this._hearingCorrectedFreq || this._hearingCorrectedFreq.length !== srcLen) {
                this._hearingCorrectedFreq = new Uint8Array(srcLen)
            }
            const hAmount = this._hearingAmount
            const sampleRate = this.ctx?.sampleRate ?? 44100
            for (let i = 0; i < srcLen; i++) {
                const hzAtBin = (i / srcLen) * sampleRate * 0.5
                const dbOffset = sampleIso226CompensationDb(this._hearingLut, hzAtBin)
                if (dbOffset < 0) {
                    const linearFactor = Math.pow(10, (dbOffset * hAmount) / 20)
                    this._hearingCorrectedFreq[i] = Math.round(Math.max(0, Math.min(255, rawGlobalData[i] * linearFactor)))
                } else {
                    this._hearingCorrectedFreq[i] = rawGlobalData[i]
                }
            }
            globalData = this._hearingCorrectedFreq
        }

        const bc = globalData.length
        const sr = this.ctx?.sampleRate ?? 44100
        const nyq = sr / 2
        const hz = (b) => (b / bc) * nyq

        let bS = 0, bC = 0, mS = 0, mC = 0, hS = 0, hC = 0, peak = 0, pb = 0
        for (let i = 0; i < bc; i++) {
            const v = globalData[i], f = hz(i)
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
        const frameCentroidHz = needsCentroidFrame ? computeSpectralCentroid(globalData, sr) : 0
        if (this._calcUsage.needSpectralCentroid) {
            this.spectralCentroidHz += (frameCentroidHz - this.spectralCentroidHz) * alpha
            this.spectralCentroid = normalizeCentroidHzToUnit(this.spectralCentroidHz, sr)
        } else {
            this.spectralCentroidHz = 0
            this.spectralCentroid = 0
        }

        if (this._calcUsage.needGlobalSpectralFlux || this._rhythmBrainActive) {
            if (fadeRamping) {
                // Suppress spectral flux while fade gain is ramping
                this.spectralFluxAU = 0
                this.spectralFlux = 0
                // Still keep prev data in sync
                this._prevFrequencyDataBins.set(this.frequencyData)
            } else if (this._coldStartSuppressFrames > 0) {
                // Cold-start: suppress spectral flux for a few frames
                this.spectralFluxAU = 0
                this.spectralFlux = 0
            } else {
                // When rhythm brain is active, spectralFlux is computed from the low FFT
                // for faster transient response. Otherwise use the high FFT.
                const fluxSrc = this._rhythmBrainActive ? this._rhythmFrequencyData : this.frequencyData
                const fluxPrev = this._rhythmBrainActive ? this._prevRhythmData : this._prevFrequencyDataBins
                const fluxNorm = computeSpectralFlux(fluxSrc, fluxPrev)
                const fluxAu = fluxNorm * 100
                this.spectralFluxAU += (fluxAu - this.spectralFluxAU) * alpha
                this.spectralFlux = Math.max(0, Math.min(1, this.spectralFluxAU / 100))
            }
        } else {
            this.spectralFluxAU = 0
            this.spectralFlux = 0
        }

        if (this._calcUsage.needSpectralFlatness) {
            const flatnessNorm = computeSpectralFlatness(globalData)
            this.spectralFlatnessRatio += (flatnessNorm - this.spectralFlatnessRatio) * alpha
            this.spectralFlatness = Math.max(0, Math.min(1, this.spectralFlatnessRatio))
        } else {
            this.spectralFlatnessRatio = 0
            this.spectralFlatness = 0
        }

        if (this._calcUsage.needInharmonicity) {
            const inharmonicityNorm = computeInharmonicity(globalData, sr)
            this.inharmonicity += (inharmonicityNorm - this.inharmonicity) * alpha
        } else {
            this.inharmonicity = 0
        }

        if (this._calcUsage.needPeakAmplitude) {
            this.peakAmplitude += (computePeakAmplitude(globalData) - this.peakAmplitude) * alpha
        } else {
            this.peakAmplitude = 0
        }

        if (this._calcUsage.needZeroCrossingRate) {
            this.zeroCrossingRate += (computeZeroCrossingRate(this.timeDomainData) - this.zeroCrossingRate) * alpha
        } else {
            this.zeroCrossingRate = 0
        }

        if (this._calcUsage.needSpectralRolloff) {
            this.spectralRolloff += (computeSpectralRolloff(globalData, sr, 0.85) - this.spectralRolloff) * alpha
        } else {
            this.spectralRolloff = 0
        }

        if (this._calcUsage.needSpectralSpread || this._calcUsage.needSpectralSkewness) {
            const spread = computeSpectralSpread(globalData, sr, frameCentroidHz)
            if (this._calcUsage.needSpectralSpread) this.spectralSpread += (spread - this.spectralSpread) * alpha
            else this.spectralSpread = 0
            if (this._calcUsage.needSpectralSkewness) {
                const skew = computeSpectralSkewness(globalData, sr, frameCentroidHz, spread)
                this.spectralSkewness += (skew - this.spectralSkewness) * alpha
            } else {
                this.spectralSkewness = 0
            }
        } else {
            this.spectralSpread = 0
            this.spectralSkewness = 0
        }

        if (this._calcUsage.needChromagram) {
            this.chromagram += (computeChromagram(globalData, sr) - this.chromagram) * alpha
        } else {
            this.chromagram = 0
        }

        this._prevFrequencyDataBins.set(this.frequencyData)

        // ── Reset iterative subtraction state if not active ──

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

    /** @returns {Array<{binIdx: number, freqHz: number, salience: number}>|null} */
    getCqtFundamentals() {
        return this._cqtFundamentals
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

    // ── Rhythm brain (low FFT) per-bin getters ──
    /** Per-bin flux from the low-FFT rhythm analyser. */
    getRhythmBinFlux() {
        return this._rhythmBrainActive ? this._rhythmBinFlux : null
    }
    /** Per-bin phase deviation from the low-FFT rhythm analyser. */
    getRhythmBinPhaseDeviation() {
        return this._rhythmBrainActive ? this._rhythmBinPhaseDeviation : null
    }
    /** Per-bin attack sharpness from the low-FFT rhythm analyser. */
    getRhythmBinAttackTime() {
        return this._rhythmBrainActive ? this._rhythmBinAttackTime : null
    }
    /** Per-bin envelope from the low-FFT rhythm analyser. */
    getRhythmBinEnvelope() {
        return this._rhythmBrainActive ? this._rhythmBinEnvelope : null
    }

    /** @returns {import('../types').HarmonicObject[]|null} */
    getHarmonicObjects() {
        return this._harmonicObjects
    }
}
