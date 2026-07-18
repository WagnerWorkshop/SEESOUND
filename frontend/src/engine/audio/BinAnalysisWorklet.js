import { CascadedDecimator, processInputBlockToDecimator } from './RawAudioProcessing.js'

const DEFAULT_LEVEL_COUNT = 7
const DEFAULT_CQT_MIN_HZ = 16
const DEFAULT_CQT_MAX_HZ = 20000
const DEFAULT_CQT_DETAILS_PER_10_OCTAVES = 1000
const PITCH_WINDOW_SAMPLES = 16384
const TEXTURE_WINDOW_SAMPLES = 4096
const RHYTHM_WINDOW_SAMPLES = 1024
const PITCH_HOP_SAMPLES = 2048
const TEXTURE_HOP_SAMPLES = 1024
const RHYTHM_HOP_SAMPLES = 512
const DEFAULT_PITCH_MIN_HZ = 40
const DEFAULT_PITCH_MAX_HZ = 4000
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
            needPitchBrain: false,
            needRhythmBrain: false,
            needTrackerBrain: false,
            objectMode: 'particle',
            fluxWindowFrames: this._sanitizeFluxWindowFrames(opts.fluxWindowFrames),
            attackThreshold: 0.0005,
            attackRatio: 3.0,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
            cqtDetailsPer10Octaves: this._sanitizeCqtDetails(opts.cqtDetailsPer10Octaves),
            cqtMinHz: this._sanitizeHz(opts.cqtMinHz, DEFAULT_CQT_MIN_HZ),
            cqtMaxHz: this._sanitizeHz(opts.cqtMaxHz, DEFAULT_CQT_MAX_HZ),
            pitchMinHz: this._sanitizeHz(opts.pitchMinHz, DEFAULT_PITCH_MIN_HZ),
            pitchMaxHz: this._sanitizeHz(opts.pitchMaxHz, DEFAULT_PITCH_MAX_HZ),
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
        this._outMagnitudeLin = new Float32Array(0)
        this._outFlux = new Float32Array(0)
        this._outPhaseDeviation = new Float32Array(0)
        this._outPhase = new Float32Array(0)
        this._outEnvelope = new Float32Array(0)
        this._outAttackTime = new Float32Array(0)

        this._brainRing = new Float32Array(PITCH_WINDOW_SAMPLES)
        this._brainWritePos = 0
        this._brainFill = 0
        this._pitchHopCounter = 0
        this._textureHopCounter = 0
        this._rhythmHopCounter = 0
        this._pitchWindow = new Float32Array(PITCH_WINDOW_SAMPLES)
        this._textureWindow = new Float32Array(TEXTURE_WINDOW_SAMPLES)
        this._rhythmWindow = new Float32Array(RHYTHM_WINDOW_SAMPLES)
        this._pitchFftCache = this._createFftCache(PITCH_WINDOW_SAMPLES)
        this._textureFftCache = this._createFftCache(TEXTURE_WINDOW_SAMPLES)
        this._rhythmEnergyAvg = 0
        this._lastFundamentalHz = 0
        this._lastTransientFrame = 0
        this._objectAgeMs = 0

        this._fluxHistory = new Float32Array(0)
        this._fluxHistorySums = new Float32Array(0)
        this._fluxHistoryWritePos = new Uint16Array(0)
        this._fluxHistoryFill = new Uint8Array(0)

        this._framesUntilNextAnalysis = 0
        this.rampGain = 0.0
        this.rampStep = 1.0 / (sampleRate * 0.1)
        // Suppress transient reporting for ~200ms after ramp completes
        // to let the energy baseline stabilize. The ramp-gain causes the
        // running average to accumulate at near-zero, so when full-volume
        // audio arrives after the ramp, (energy - baseline)/baseline spikes.
        this._transientSuppressFrames = Math.ceil(0.2 * sampleRate / 128)
        this._transientSuppressRemaining = 0

        // Internal math resolution is locked once at startup. UI changes to
        // `cqtDetailsPer10Octaves` will only affect the visual thinning layer
        // and will not trigger a plan rebuild. This avoids mid-stream buffer
        // reallocations that cause audio artifacts.
        this._internalResolution = DEFAULT_CQT_DETAILS_PER_10_OCTAVES
        this._visualResolution = this._cfg.cqtDetailsPer10Octaves

        // Boot muzzle timer: block sending unstable initial data to the UI
        // for ~150 worklet blocks (~400ms at 44.1kHz).
        this.bootTimer = 150

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
            this._cfg.needPitchBrain = !!cfg.needPitchBrain
            this._cfg.needRhythmBrain = !!cfg.needRhythmBrain
            this._cfg.needTrackerBrain = !!cfg.needTrackerBrain
            this._cfg.objectMode = (cfg.objectMode === 'cloud' || cfg.objectMode === 'tracing' || cfg.objectMode === 'lines')
                ? cfg.objectMode
                : 'particle'

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

            const nextPitchMax = this._sanitizeHz(cfg.pitchMaxHz, this._cfg.pitchMaxHz)
            if (nextPitchMax !== this._cfg.pitchMaxHz) this._cfg.pitchMaxHz = nextPitchMax

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

    _createFftCache(size) {
        const n = Math.max(2, Math.floor(size))
        const rev = new Uint32Array(n)
        const bits = Math.round(Math.log2(n))
        for (let i = 0; i < n; i++) {
            let x = i
            let r = 0
            for (let b = 0; b < bits; b++) {
                r = (r << 1) | (x & 1)
                x >>= 1
            }
            rev[i] = r
        }
        return {
            size: n,
            rev,
            re: new Float32Array(n),
            im: new Float32Array(n),
            mag: new Float32Array(n / 2),
        }
    }

    _copyBrainWindow(target) {
        const size = target.length
        const ring = this._brainRing
        const ringSize = ring.length
        let start = this._brainWritePos - size
        if (start < 0) start += ringSize
        for (let i = 0; i < size; i++) {
            target[i] = ring[start]
            start += 1
            if (start >= ringSize) start = 0
        }
    }

    _fftMagnitudes(cache, samples) {
        const n = cache.size
        const re = cache.re
        const im = cache.im
        const rev = cache.rev
        const mag = cache.mag

        for (let i = 0; i < n; i++) {
            re[i] = samples[i]
            im[i] = 0
        }
        for (let i = 0; i < n; i++) {
            const j = rev[i]
            if (j > i) {
                const tr = re[i]
                re[i] = re[j]
                re[j] = tr
                const ti = im[i]
                im[i] = im[j]
                im[j] = ti
            }
        }

        for (let size = 2; size <= n; size <<= 1) {
            const half = size >> 1
            const step = (-2 * Math.PI) / size
            for (let i = 0; i < n; i += size) {
                for (let j = 0; j < half; j++) {
                    const angle = step * j
                    const wr = Math.cos(angle)
                    const wi = Math.sin(angle)
                    const k = i + j
                    const l = k + half
                    const tr = (wr * re[l]) - (wi * im[l])
                    const ti = (wr * im[l]) + (wi * re[l])
                    re[l] = re[k] - tr
                    im[l] = im[k] - ti
                    re[k] += tr
                    im[k] += ti
                }
            }
        }

        const scale = 1 / Math.max(1, n)
        for (let i = 0; i < mag.length; i++) {
            const v = Math.sqrt((re[i] * re[i]) + (im[i] * im[i])) * scale
            mag[i] = v
        }
        return mag
    }

    _findFundamental(mags, sampleRate, minHz, maxHz) {
        const n = mags.length * 2
        const minIndex = Math.max(1, Math.floor((minHz / sampleRate) * n))
        const maxIndex = Math.min(mags.length - 2, Math.floor((maxHz / sampleRate) * n))
        if (maxIndex <= minIndex) return 0

        let peakIndex = minIndex
        let peakValue = 0
        for (let i = minIndex; i <= maxIndex; i++) {
            const v = mags[i]
            if (v > peakValue) {
                peakValue = v
                peakIndex = i
            }
        }
        if (peakValue <= 0) return 0

        const m1 = mags[peakIndex - 1] || 0
        const m2 = mags[peakIndex]
        const m3 = mags[peakIndex + 1] || 0
        const denom = (m1 - (2 * m2) + m3)
        const delta = Math.abs(denom) > 1e-9 ? (0.5 * (m1 - m3) / denom) : 0
        const refinedIndex = peakIndex + Math.max(-0.5, Math.min(0.5, delta))
        return (refinedIndex * sampleRate) / n
    }

    /**
     * Find all harmonic objects in the pitch-FFT magnitudes.
     * Scans for local maxima (peak-picking), applies parabolic interpolation,
     * then groups overtones (k·f0) under each fundamental via comb filtering.
     * @param {Float32Array} mags - FFT magnitudes from the Pitch brain.
     * @param {number} sampleRate - Sample rate in Hz.
     * @param {number} minHz - Minimum fundamental frequency.
     * @param {number} maxHz - Maximum fundamental frequency.
     * @param {Object} [opts]
     * @param {number} [opts.noiseThreshold=0.01] - Minimum peak magnitude to qualify.
     * @param {number} [opts.maxObjects=12] - Max harmonic objects to emit.
     * @param {number} [opts.maxHarmonics=8] - Max overtones per object.
     * @returns {Array<Object>} harmonic objects array.
     */
    _findHarmonicObjects(mags, sampleRate, minHz, maxHz, opts = {}) {
        const n = mags.length * 2
        const minIndex = Math.max(1, Math.floor((minHz / sampleRate) * n))
        const maxIndex = Math.min(mags.length - 2, Math.floor((maxHz / sampleRate) * n))
        const noiseThreshold = opts.noiseThreshold ?? 0.01
        const maxObjects = opts.maxObjects ?? 12
        const maxHarmonics = opts.maxHarmonics ?? 8

        if (maxIndex <= minIndex) return []

        // ── Step 1: Peak picking ───────────────────────────────────────────
        const peaks = []
        for (let i = minIndex; i <= maxIndex; i++) {
            const v = mags[i]
            if (v <= noiseThreshold) continue
            if (v >= (mags[i - 1] || 0) && v > (mags[i + 1] || 0)) {
                const m1 = mags[i - 1] || 0
                const m2 = mags[i]
                const m3 = mags[i + 1] || 0
                const denom = (m1 - (2 * m2) + m3)
                let subBinDelta = 0
                if (Math.abs(denom) > 1e-12) {
                    subBinDelta = 0.5 * (m1 - m3) / denom
                    subBinDelta = Math.max(-0.49, Math.min(0.49, subBinDelta))
                }
                const refinedIndex = i + subBinDelta
                const freqHz = (refinedIndex * sampleRate) / n
                peaks.push({ index: refinedIndex, freqHz, magnitude: v })
            }
        }
        if (peaks.length === 0) return []

        // Sort by magnitude descending and take top candidates
        peaks.sort((a, b) => b.magnitude - a.magnitude)
        const candidates = peaks.slice(0, maxObjects * 2)

        // ── Step 2: Harmonic Association (Comb Filter) ────────────────────
        const objects = []
        const assigned = new Set()

        for (const peak of candidates) {
            if (objects.length >= maxObjects) break

            const f0 = peak.freqHz
            // Skip if this peak is an integer multiple of an already-chosen fundamental
            let isHarmonic = false
            for (const obj of objects) {
                const ratio = f0 / obj.fundamentalHz
                if (ratio > 1.9 && ratio < 2.1) { isHarmonic = true; break }
                if (ratio > 2.9 && ratio < 3.1) { isHarmonic = true; break }
                if (Math.abs(Math.round(ratio) - ratio) < 0.04) { isHarmonic = true; break }
            }
            if (isHarmonic) continue

            // ── Accumulate harmonic energy ─────────────────────────────────
            let harmonicEnergy = peak.magnitude * peak.magnitude
            const harmonics = []
            const harmonicIndices = []

            for (let k = 2; k <= maxHarmonics + 1; k++) {
                const harmonicHz = f0 * k
                if (harmonicHz > sampleRate * 0.49) break
                const harmonicIndex = (harmonicHz / sampleRate) * n
                const hi = Math.round(harmonicIndex)
                if (hi < 1 || hi >= mags.length) break

                const hMag = mags[hi] || 0
                harmonicEnergy += hMag * hMag
                harmonics.push({
                    multiple: k,
                    magnitude: hMag,
                    phase: 0, // phase not computed from magnitude-only FFT
                })
                harmonicIndices.push(hi)
            }

            // ── Localized texture metrics ──────────────────────────────────
            // Recompute centroid, flatness, inharmonicity over harmonic bins only
            let centroid = 0
            let sumMag = 0
            let sumLog = 0
            let flatnessCount = 0
            let inharmSum = 0
            let inharmWeight = 0

            for (const hi of harmonicIndices) {
                const hz = (hi * sampleRate) / n
                const hMag = mags[hi] || 0
                if (hMag > 0) {
                    sumMag += hMag
                    centroid += hz * hMag
                    const v = Math.max(1e-12, hMag)
                    sumLog += Math.log(v)
                    flatnessCount++
                    const nearestHarmonic = Math.round(hz / f0) * f0
                    const dev = Math.abs(hz - nearestHarmonic) / Math.max(1e-6, nearestHarmonic)
                    inharmSum += dev * hMag
                    inharmWeight += hMag
                }
            }

            // Add the fundamental bin itself to centroid/flatness
            const f0Mag = Math.max(1e-12, peak.magnitude)
            sumMag += peak.magnitude
            centroid += f0 * peak.magnitude
            sumLog += Math.log(f0Mag)
            flatnessCount++
            const nearestF0Harmonic = Math.round(f0 / f0) * f0
            const devF0 = Math.abs(f0 - nearestF0Harmonic) / Math.max(1e-6, nearestF0Harmonic)
            inharmSum += devF0 * peak.magnitude
            inharmWeight += peak.magnitude

            const localCentroid = sumMag > 0 ? centroid / sumMag : 0
            const geoMean = flatnessCount > 0 ? Math.exp(sumLog / flatnessCount) : 0
            const arithMean = sumMag / Math.max(1, flatnessCount)
            const localFlatness = arithMean > 0 ? Math.max(0, Math.min(1, geoMean / arithMean)) : 0
            const localInharmonicity = inharmWeight > 0 ? Math.min(1, inharmSum / inharmWeight) : 0
            const objVolume = Math.min(1, Math.sqrt(harmonicEnergy) / Math.max(1, 1 + harmonics.length))

            // MIDI note
            const midi = 69 + 12 * Math.log2(f0 / 440)
            const pitchMidi = Number.isFinite(midi) ? midi : 0
            const pitchClass = ((Math.round(pitchMidi) % 12) + 12) % 12

            objects.push({
                fundamentalHz: f0,
                pitchClass,
                pitchMidi,
                volume: objVolume,
                harmonicEnergy,
                harmonics,
                centroid: localCentroid,
                flatness: localFlatness,
                inharmonicity: localInharmonicity,
                temporalGroupId: 0, // assigned by rhythm brain
                streamId: 0,        // assigned by tracker brain
                objectAge: 0,
            })
        }

        return objects
    }

    _computeCentroid(mags, sampleRate) {
        const n = mags.length * 2
        let sumMag = 0
        let sumWeighted = 0
        for (let i = 1; i < mags.length; i++) {
            const mag = mags[i]
            sumMag += mag
            sumWeighted += mag * ((i * sampleRate) / n)
        }
        if (sumMag <= 0) return 0
        return sumWeighted / sumMag
    }

    _computeFlatness(mags) {
        let sum = 0
        let sumLog = 0
        let count = 0
        for (let i = 1; i < mags.length; i++) {
            const v = Math.max(1e-12, mags[i])
            sum += v
            sumLog += Math.log(v)
            count += 1
        }
        if (count === 0) return 0
        const mean = sum / count
        const geo = Math.exp(sumLog / count)
        return mean > 0 ? Math.max(0, Math.min(1, geo / mean)) : 0
    }

    _computeInharmonicity(mags, sampleRate, fundamentalHz) {
        if (!(fundamentalHz > 0)) return 0
        const n = mags.length * 2
        let sum = 0
        let sumWeight = 0
        for (let i = 1; i < mags.length; i++) {
            const mag = mags[i]
            if (!(mag > 0)) continue
            const freq = (i * sampleRate) / n
            const harmonic = Math.max(1, Math.round(freq / fundamentalHz)) * fundamentalHz
            const deviation = Math.abs(freq - harmonic) / Math.max(1e-6, harmonic)
            sum += deviation * mag
            sumWeight += mag
        }
        if (sumWeight <= 0) return 0
        return Math.max(0, Math.min(1, sum / sumWeight))
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
        const objectMode = cfg.objectMode || 'particle'

        // Always run Quad-Brain when any brain is needed, regardless of objectMode.
        // The particle/cloud distinction only matters for harmonic object output,
        // not for object-level holistic metrics like fundamentalHz, etc.
        const needPitch = cfg.needPitchBrain || cfg.needTrackerBrain
        const needRhythm = cfg.needRhythmBrain
        if (!needPitch && !needRhythm) return null
        if (this._brainFill < RHYTHM_WINDOW_SAMPLES) return null

        const sr = sampleRate
        let fundamentalHz = 0
        let fundamentalPitch = 0
        let fundamentalNote = 0
        let globalTransient = 0
        let objectAgeSec = 0
        let streamId = 0
        /** @type {Array} */
        let harmonicObjects = null

        if (needPitch) {
            this._pitchHopCounter += sampleCount
            if (this._pitchHopCounter >= PITCH_HOP_SAMPLES) {
                this._pitchHopCounter = 0
                if (this._brainFill >= PITCH_WINDOW_SAMPLES) {
                    this._copyBrainWindow(this._pitchWindow)
                    const mags = this._fftMagnitudes(this._pitchFftCache, this._pitchWindow)
                    const minHz = Math.min(cfg.pitchMinHz, cfg.pitchMaxHz)
                    const maxHz = Math.max(cfg.pitchMinHz, cfg.pitchMaxHz)

                    // Primary fundamental (kept for backward compat with layerMetrics)
                    fundamentalHz = this._findFundamental(mags, sr, minHz, maxHz)
                    this._lastFundamentalHz = fundamentalHz

                    // Harmonic Association: find all objects (Cloud mode)
                    harmonicObjects = this._findHarmonicObjects(mags, sr, minHz, maxHz, {
                        maxObjects: 12,
                        maxHarmonics: 8,
                    })
                }
            } else {
                fundamentalHz = this._lastFundamentalHz
            }
        }

        // Rhythm Brain: transient detection + temporal grouping
        if (needRhythm) {
            this._rhythmHopCounter += sampleCount
            if (this._rhythmHopCounter >= RHYTHM_HOP_SAMPLES) {
                this._rhythmHopCounter = 0
                this._copyBrainWindow(this._rhythmWindow)
                const energy = this._computeRms(this._rhythmWindow)
                if (this._rhythmEnergyAvg <= 0) {
                    // First frame after reset: prime the average to avoid a transient spike
                    this._rhythmEnergyAvg = energy
                } else {
                    this._rhythmEnergyAvg = (this._rhythmEnergyAvg * 0.9) + (energy * 0.1)
                }
                const baseline = Math.max(1e-6, this._rhythmEnergyAvg)
                globalTransient = Math.max(0, (energy - baseline) / baseline)

                // Suppress transient while the post-ramp suppression counter is active
                if (this._transientSuppressRemaining > 0) {
                    globalTransient = 0
                }

                // Temporal grouping: if transient detected, assign a time-based group ID
                if (globalTransient > 2.0) {
                    this._lastTransientFrame = this._brainWritePos
                }
            }
        }

        // Tracker Brain: frame-to-frame tracking of harmonic objects
        if (cfg.needTrackerBrain && harmonicObjects) {
            // Simple persistence: match objects by closest fundamental
            for (const obj of harmonicObjects) {
                if (obj.fundamentalHz > 0) {
                    this._objectAgeMs += (PITCH_HOP_SAMPLES / Math.max(1, sr)) * 1000
                    obj.streamId = 1
                    obj.objectAge = this._objectAgeMs / 1000
                } else {
                    obj.streamId = 0
                    obj.objectAge = 0
                }

                // Temporal group assignment
                if (this._lastTransientFrame > 0) {
                    const framesSinceTransient = (this._brainWritePos - this._lastTransientFrame + this._brainRing.length) % this._brainRing.length
                    if (framesSinceTransient < PITCH_HOP_SAMPLES * 2) {
                        obj.temporalGroupId = this._lastTransientFrame
                    }
                }
            }
            if (fundamentalHz > 0) {
                this._objectAgeMs += (PITCH_HOP_SAMPLES / Math.max(1, sr)) * 1000
                streamId = 1
            } else {
                this._objectAgeMs = 0
                streamId = 0
            }
            objectAgeSec = this._objectAgeMs / 1000
        }

        if (fundamentalHz > 0) {
            const midi = 69 + 12 * Math.log2(fundamentalHz / 440)
            fundamentalPitch = Number.isFinite(midi) ? midi : 0
            fundamentalNote = ((Math.round(fundamentalPitch) % 12) + 12) % 12
        }

        // Build payload
        const payload = { type: 'objectMetrics' }
        payload.fundamentalHz = fundamentalHz
        payload.fundamentalPitch = fundamentalPitch
        payload.fundamentalNote = fundamentalNote
        payload.globalTransient = globalTransient
        payload.objectAge = objectAgeSec
        payload.streamId = streamId

        // In Cloud mode, also send the full harmonic objects array
        if (harmonicObjects && harmonicObjects.length > 0) {
            this.port.postMessage({ type: 'harmonicObjects', objects: harmonicObjects })
        }

        return payload
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
        this._outMagnitudeLin = new Float32Array(binCount)
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

        // Precompute Log-HPS harmonic shift offsets for fundamental detection.
        // In log-frequency CQT space, the k-th harmonic is a constant BIN OFFSET
        // (not a multiplier): shift_k = binsPerOctave × log2(k)
        const lastHarmonic = 5
        this._hpsHarmonicShifts = new Uint16Array(lastHarmonic)
        for (let k = 2; k <= lastHarmonic; k++) {
            this._hpsHarmonicShifts[k - 2] = Math.round(binsPerOctave * Math.log2(k))
        }
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

    _pushBrainSample(sample) {
        const ring = this._brainRing
        const len = ring.length
        ring[this._brainWritePos] = sample
        this._brainWritePos += 1
        if (this._brainWritePos >= len) this._brainWritePos = 0
        this._brainFill = Math.min(len, this._brainFill + 1)
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
        if (needsMagnitude) { this._outMagnitude[binIndex] = magNowDb; this._outMagnitudeLin[binIndex] = magNowLin }

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

    /**
     * Log-domain Harmonic Product Spectrum (Log-HPS) fundamental detector.
     *
     * In log-frequency CQT space, harmonics are constant integer bin OFFSETS,
     * not multipliers. For each candidate bin i, salience is:
     *   salience[i] = mag[i] + mag[i + shift_2] + mag[i + shift_3] + ...
     *
     * The true fundamental's harmonics STACK at its bin: mag[bin_f0] already has
     * the fundamental energy, and mag[bin_f0 + shift_2] has the 2nd harmonic
     * shifted back onto it. Overtones do NOT stack — their harmonics land at
     * different bins — so they get crushed. Peak-picking on the salience array
     * yields only true fundamentals.
     *
     * Assumes `linMags` is linear amplitude [0..1], not dB.
     *
     * @param {Float32Array} linMags - CQT linear magnitudes
     * @param {number} binCount
     * @param {number} minHz
     * @param {number} maxHz
     * @param {number} binsPerOctave
     * @returns {Array<{binIdx: number, freqHz: number, salience: number}>}
     */
    _computeLogHpsFundamentals(linMags, binCount, minHz, maxHz, binsPerOctave) {
        const shifts = this._hpsHarmonicShifts
        if (!shifts || !linMags || binCount === 0) return []

        // ── Step 1: Generate salience array ──
        const salience = new Float32Array(binCount)
        const numShifts = shifts.length

        for (let i = 0; i < binCount; i++) {
            let sum = linMags[i]
            for (let s = 0; s < numShifts; s++) {
                const j = i + shifts[s]
                if (j < binCount) sum += linMags[j]
            }
            salience[i] = sum
        }

        // ── Step 2: Peak picking on salience ──
        const threshold = 0.05
        const peaks = []

        for (let i = 1; i < binCount - 1; i++) {
            const v = salience[i]
            if (v < threshold) continue
            if (v < salience[i - 1] || v < salience[i + 1]) continue

            // Parabolic interpolation for sub-bin precision
            const m1 = salience[i - 1], m2 = v, m3 = salience[i + 1]
            const denom = m1 - 2 * m2 + m3
            let subBin = 0
            if (Math.abs(denom) > 1e-9) {
                subBin = 0.5 * (m1 - m3) / denom
                subBin = Math.max(-0.49, Math.min(0.49, subBin))
            }
            const refinedBin = i + subBin
            const freqHz = minHz * Math.pow(2, refinedBin / binsPerOctave)

            peaks.push({ binIdx: i, refinedBin, freqHz, salience: v })

            if (peaks.length >= 12) break
        }

        return peaks
    }

    _analyzeAndPost() {
        const cfg = this._cfg
        const needsAny = cfg.needMagnitude || cfg.needFlux || cfg.needPhaseDeviation || cfg.needPhase || cfg.needEnvelope || cfg.needAttackTime
        if (!cfg.enabled || !needsAny || this.binCount === 0) return

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

        // ── Log-HPS fundamental detection on CQT linear magnitudes ──
        if (cfg.needMagnitude && this._outMagnitudeLin && this.binCount > 0) {
            const binsPerOctave = (this._internalResolution || DEFAULT_CQT_DETAILS_PER_10_OCTAVES) / 10
            const f0List = this._computeLogHpsFundamentals(
                this._outMagnitudeLin, this.binCount, this._cfg.cqtMinHz || 40, this._cfg.cqtMaxHz || 16000, binsPerOctave
            )
            if (f0List.length > 0) {
                payload.fundamentals = f0List
            }
        }

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
            for (let channel = 0; channel < input.length; channel++) {
                const channelData = input[channel]
                if (!channelData) continue
                for (let i = 0; i < channelData.length; i++) {
                    if (this.rampGain < 1.0) {
                        this.rampGain += this.rampStep
                        if (this.rampGain > 1.0) this.rampGain = 1.0
                    }
                    channelData[i] *= this.rampGain
                }
            }
            // When the ramp gain reaches 1.0, start the post-ramp transient
            // suppression counter so the energy baseline can stabilize before
            // we report any transient events.
            if (this.rampGain >= 1.0 && this._transientSuppressRemaining <= 0) {
                this._transientSuppressRemaining = this._transientSuppressFrames
                // Reset the running energy average to avoid a transient when
                // full-volume audio arrives after the ramp-up.
                this._rhythmEnergyAvg = 0
                this._lastTransientFrame = 0
            }
            // Decrement transient suppression counter
            if (this._transientSuppressRemaining > 0) {
                this._transientSuppressRemaining--
            }
            if (sampleCount > 0) {
                for (let i = 0; i < sampleCount; i++) {
                    let sum = 0
                    for (let channel = 0; channel < channelCount; channel++) {
                        sum += input[channel][i] || 0
                    }
                    this._pushBrainSample(sum / Math.max(1, channelCount))
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
