class BinAnalysisProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super()
        const opts = options?.processorOptions || {}
        this.fftSize = this._snapFftSize(opts.fftSize)
        this.hopSize = this._sanitizeHopSize(opts.hopSize)
        this.binCount = this.fftSize >> 1

        this._ring = new Float32Array(this.fftSize)
        this._writePos = 0
        this._filled = 0
        this._hopCounter = 0

        this._window = new Float32Array(this.fftSize)
        for (let i = 0; i < this.fftSize; i++) {
            this._window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / Math.max(1, this.fftSize - 1)))
        }

        this._re = new Float32Array(this.fftSize)
        this._im = new Float32Array(this.fftSize)
        this._bitRev = this._buildBitReverse(this.fftSize)

        this._prevMag = new Float32Array(this.binCount)
        this._prevPhase = new Float32Array(this.binCount)
        this._prevPhaseDelta = new Float32Array(this.binCount)
        this._attackElapsedMs = new Float32Array(this.binCount)
        this._attackLastMs = new Float32Array(this.binCount)
        this._attackActive = new Uint8Array(this.binCount)

        this._outMagnitude = new Float32Array(this.binCount)
        this._outFlux = new Float32Array(this.binCount)
        this._outPhaseDeviation = new Float32Array(this.binCount)
        this._outPhase = new Float32Array(this.binCount)
        this._outEnvelope = new Float32Array(this.binCount)
        this._outAttackTime = new Float32Array(this.binCount)

        this._cfg = {
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needPhase: false,
            needEnvelope: false,
            needAttackTime: false,
            fluxWindowFrames: this._sanitizeFluxWindowFrames(opts.fluxWindowFrames),
            attackThreshold: 0.0005,
            attackRatio: 3.0,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
        }

        this._fluxWindowFrames = this._cfg.fluxWindowFrames
        this._fluxHistory = new Float32Array(this.binCount * this._fluxWindowFrames)
        this._fluxHistorySums = new Float32Array(this.binCount)
        this._fluxHistoryWritePos = 0
        this._fluxHistoryFill = 0

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
            const nextFluxWindow = this._sanitizeFluxWindowFrames(cfg.fluxWindowFrames)
            if (nextFluxWindow !== this._fluxWindowFrames) {
                this._cfg.fluxWindowFrames = nextFluxWindow
                this._fluxWindowFrames = nextFluxWindow
                this._fluxHistory = new Float32Array(this.binCount * this._fluxWindowFrames)
                this._fluxHistorySums.fill(0)
                this._fluxHistoryWritePos = 0
                this._fluxHistoryFill = 0
            }
            this._cfg.attackThreshold = Number.isFinite(cfg.attackThreshold) ? cfg.attackThreshold : this._cfg.attackThreshold
            this._cfg.attackRatio = Number.isFinite(cfg.attackRatio) ? cfg.attackRatio : this._cfg.attackRatio
            this._cfg.sustainFluxEps = Number.isFinite(cfg.sustainFluxEps) ? cfg.sustainFluxEps : this._cfg.sustainFluxEps
            this._cfg.sustainMagThreshold = Number.isFinite(cfg.sustainMagThreshold) ? cfg.sustainMagThreshold : this._cfg.sustainMagThreshold
            this._cfg.decayThreshold = Number.isFinite(cfg.decayThreshold) ? cfg.decayThreshold : this._cfg.decayThreshold
        }
    }

    _snapFftSize(value) {
        const allowed = [512, 1024, 2048, 4096, 8192, 16384]
        const n = Number(value)
        if (!Number.isFinite(n)) return 2048
        let best = allowed[0]
        let bestDist = Math.abs(n - best)
        for (let i = 1; i < allowed.length; i++) {
            const candidate = allowed[i]
            const dist = Math.abs(n - candidate)
            if (dist < bestDist) {
                best = candidate
                bestDist = dist
            }
        }
        return best
    }

    _sanitizeHopSize(value) {
        const n = Math.floor(Number(value))
        const fallback = Math.floor(this.fftSize / 4)
        if (!Number.isFinite(n)) return Math.max(64, fallback)
        return Math.max(64, Math.min(this.fftSize, n))
    }

    _sanitizeFluxWindowFrames(value) {
        const n = Math.floor(Number(value))
        if (!Number.isFinite(n)) return 10
        return Math.max(1, Math.min(64, n))
    }

    _buildBitReverse(n) {
        const out = new Uint32Array(n)
        const bits = Math.round(Math.log2(n))
        for (let i = 0; i < n; i++) {
            let x = i
            let y = 0
            for (let b = 0; b < bits; b++) {
                y = (y << 1) | (x & 1)
                x >>= 1
            }
            out[i] = y
        }
        return out
    }

    _fftInPlace(re, im) {
        const n = re.length
        const bitRev = this._bitRev

        for (let i = 0; i < n; i++) {
            const j = bitRev[i]
            if (j > i) {
                let tr = re[i]
                re[i] = re[j]
                re[j] = tr
                tr = im[i]
                im[i] = im[j]
                im[j] = tr
            }
        }

        for (let len = 2; len <= n; len <<= 1) {
            const half = len >> 1
            const step = (-2 * Math.PI) / len
            for (let i = 0; i < n; i += len) {
                for (let j = 0; j < half; j++) {
                    const angle = step * j
                    const wr = Math.cos(angle)
                    const wi = Math.sin(angle)

                    const even = i + j
                    const odd = even + half

                    const or = re[odd]
                    const oi = im[odd]
                    const tr = wr * or - wi * oi
                    const ti = wr * oi + wi * or

                    re[odd] = re[even] - tr
                    im[odd] = im[even] - ti
                    re[even] += tr
                    im[even] += ti
                }
            }
        }
    }

    _pushMonoSamples(input) {
        const channels = input.length
        if (channels === 0) return
        const len = input[0].length
        for (let i = 0; i < len; i++) {
            let mono = 0
            for (let c = 0; c < channels; c++) mono += input[c][i] || 0
            mono /= channels
            this._ring[this._writePos] = mono
            this._writePos = (this._writePos + 1) % this.fftSize
            this._filled = Math.min(this.fftSize, this._filled + 1)
            this._hopCounter++
        }
    }

    _copyWindowedFrame() {
        // Oldest sample starts at writePos in ring buffer.
        const start = this._writePos
        for (let i = 0; i < this.fftSize; i++) {
            const idx = (start + i) % this.fftSize
            this._re[i] = this._ring[idx] * this._window[i]
            this._im[i] = 0
        }
    }

    _dbfsFromComplex(re, im) {
        const mag = Math.sqrt(re * re + im * im) / Math.max(1, this.fftSize)
        const db = 20 * Math.log10(Math.max(1e-12, mag))
        return Math.max(-120, Math.min(0, db))
    }

    _phaseDelta(curr, prev) {
        let d = curr - prev
        while (d > Math.PI) d -= 2 * Math.PI
        while (d < -Math.PI) d += 2 * Math.PI
        return d
    }

    _analyzeAndPost() {
        const cfg = this._cfg
        const needsAny = cfg.needMagnitude || cfg.needFlux || cfg.needPhaseDeviation || cfg.needPhase || cfg.needEnvelope || cfg.needAttackTime
        if (!cfg.enabled || !needsAny || this._filled < this.fftSize || this._hopCounter < this.hopSize) return
        this._hopCounter = 0
        const hopMs = (this.hopSize / Math.max(1, sampleRate)) * 1000

        this._copyWindowedFrame()
        this._fftInPlace(this._re, this._im)

        const needsMagnitude = cfg.needMagnitude || cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime
        const needsFlux = cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime
        const needsPhaseDeviation = cfg.needPhaseDeviation
        const needsPhase = cfg.needPhase
        const needsEnvelope = cfg.needEnvelope
        const needsAttackTime = cfg.needAttackTime
        const historyDenom = Math.max(1, this._fluxHistoryFill)
        const attackRatio = Math.max(1.0, Number(cfg.attackRatio) || 3.0)
        const minAttackThreshold = Math.max(1e-6, Number(cfg.attackThreshold) || 0.0005)
        const fluxWindow = this._fluxWindowFrames
        const fluxPos = this._fluxHistoryWritePos

        for (let k = 0; k < this.binCount; k++) {
            const re = this._re[k]
            const im = this._im[k]
            const magNowDb = this._dbfsFromComplex(re, im)
            const magNowLin = Math.max(0, Math.pow(10, magNowDb / 20))

            if (needsMagnitude) this._outMagnitude[k] = magNowDb

            const prevMag = this._prevMag[k]
            const rise = magNowLin - prevMag
            // Scale linear rise so defaults produce useful 0..1-ish values.
            const fluxValue = Math.max(0, rise) * 64
            if (needsFlux) this._outFlux[k] = fluxValue

            const prevAvgFlux = this._fluxHistorySums[k] / historyDenom
            const dynamicAttackThreshold = Math.max(minAttackThreshold, prevAvgFlux * attackRatio)

            const fluxIndex = k * fluxWindow + fluxPos
            const oldFlux = this._fluxHistory[fluxIndex]
            this._fluxHistory[fluxIndex] = fluxValue
            const sumFlux = this._fluxHistorySums[k] - oldFlux + fluxValue
            this._fluxHistorySums[k] = sumFlux

            if (needsPhaseDeviation || needsPhase) {
                const phase = Math.atan2(im, re)
                if (needsPhase) this._outPhase[k] = phase
            }

            if (needsPhaseDeviation) {
                const phase = needsPhase ? this._outPhase[k] : Math.atan2(im, re)
                const d1 = this._phaseDelta(phase, this._prevPhase[k])
                const d2 = this._phaseDelta(d1, this._prevPhaseDelta[k])
                this._outPhaseDeviation[k] = Math.max(0, Math.min(Math.PI, Math.abs(d2)))
                this._prevPhase[k] = phase
                this._prevPhaseDelta[k] = d1
            }

            if (needsAttackTime) {
                const isRising = fluxValue > dynamicAttackThreshold
                if (isRising) {
                    this._attackActive[k] = 1
                    this._attackElapsedMs[k] += hopMs
                } else if (this._attackActive[k]) {
                    this._attackActive[k] = 0
                    this._attackLastMs[k] = Math.max(hopMs, this._attackElapsedMs[k])
                    this._attackElapsedMs[k] = 0
                }
                this._outAttackTime[k] = this._attackActive[k] ? this._attackElapsedMs[k] : this._attackLastMs[k]
            }

            if (needsEnvelope) {
                let state = 0
                if (fluxValue > dynamicAttackThreshold) state = 1
                else if (Math.abs(rise) <= cfg.sustainFluxEps && magNowLin >= cfg.sustainMagThreshold) state = 2
                else if (rise < -cfg.decayThreshold) state = 3
                this._outEnvelope[k] = state
            }

            this._prevMag[k] = magNowLin
        }

        this._fluxHistoryWritePos = (fluxPos + 1) % fluxWindow
        if (this._fluxHistoryFill < fluxWindow) this._fluxHistoryFill += 1

        const payload = { type: 'binMetrics' }
        if (needsMagnitude) payload.magnitude = this._outMagnitude
        if (needsFlux) payload.flux = this._outFlux
        if (needsPhaseDeviation) payload.phaseDeviation = this._outPhaseDeviation
        if (needsPhase) payload.phase = this._outPhase
        if (needsEnvelope) payload.envelope = this._outEnvelope
        if (needsAttackTime) payload.attackTime = this._outAttackTime
        this.port.postMessage(payload)
    }

    process(inputs) {
        const input = inputs[0]
        if (input && input.length) {
            this._pushMonoSamples(input)
            this._analyzeAndPost()
        }
        return true
    }
}

registerProcessor('bin-analysis-processor', BinAnalysisProcessor)
