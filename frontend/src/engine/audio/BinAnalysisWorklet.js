class BinAnalysisProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super()
        const opts = options?.processorOptions || {}
        this.fftSize = Math.max(256, Number(opts.fftSize) || 2048)
        this.hopSize = Math.max(64, Number(opts.hopSize) || Math.floor(this.fftSize / 4))
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

        this._cfg = {
            enabled: false,
            needMagnitude: false,
            needFlux: false,
            needPhaseDeviation: false,
            needEnvelope: false,
            needAttackTime: false,
            attackThreshold: 0.03,
            sustainFluxEps: 0.004,
            sustainMagThreshold: 0.08,
            decayThreshold: 0.008,
        }

        this.port.onmessage = (event) => {
            const msg = event.data || {}
            if (msg.type !== 'config') return
            const cfg = msg.config || {}
            this._cfg.enabled = !!cfg.enabled
            this._cfg.needMagnitude = !!cfg.needMagnitude
            this._cfg.needFlux = !!cfg.needFlux
            this._cfg.needPhaseDeviation = !!cfg.needPhaseDeviation
            this._cfg.needEnvelope = !!cfg.needEnvelope
            this._cfg.needAttackTime = !!cfg.needAttackTime
            this._cfg.attackThreshold = Number.isFinite(cfg.attackThreshold) ? cfg.attackThreshold : this._cfg.attackThreshold
            this._cfg.sustainFluxEps = Number.isFinite(cfg.sustainFluxEps) ? cfg.sustainFluxEps : this._cfg.sustainFluxEps
            this._cfg.sustainMagThreshold = Number.isFinite(cfg.sustainMagThreshold) ? cfg.sustainMagThreshold : this._cfg.sustainMagThreshold
            this._cfg.decayThreshold = Number.isFinite(cfg.decayThreshold) ? cfg.decayThreshold : this._cfg.decayThreshold
        }
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
        const needsAny = cfg.needMagnitude || cfg.needFlux || cfg.needPhaseDeviation || cfg.needEnvelope || cfg.needAttackTime
        if (!cfg.enabled || !needsAny || this._filled < this.fftSize || this._hopCounter < this.hopSize) return
        this._hopCounter = 0
        const hopMs = (this.hopSize / Math.max(1, sampleRate)) * 1000

        this._copyWindowedFrame()
        this._fftInPlace(this._re, this._im)

        const magnitude = (cfg.needMagnitude || cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) ? new Float32Array(this.binCount) : null
        const flux = (cfg.needFlux || cfg.needEnvelope || cfg.needAttackTime) ? new Float32Array(this.binCount) : null
        const phaseDeviation = cfg.needPhaseDeviation ? new Float32Array(this.binCount) : null
        const envelope = cfg.needEnvelope ? new Float32Array(this.binCount) : null
        const attackTime = cfg.needAttackTime ? new Float32Array(this.binCount) : null

        for (let k = 0; k < this.binCount; k++) {
            const re = this._re[k]
            const im = this._im[k]
            const magNowDb = this._dbfsFromComplex(re, im)
            const magNowLin = Math.max(0, Math.pow(10, magNowDb / 20))

            if (magnitude) magnitude[k] = magNowDb

            const prevMag = this._prevMag[k]
            const f = Math.max(0, magNowLin - prevMag)
            if (flux) flux[k] = f

            if (phaseDeviation) {
                const phase = Math.atan2(im, re)
                const d1 = this._phaseDelta(phase, this._prevPhase[k])
                const d2 = this._phaseDelta(d1, this._prevPhaseDelta[k])
                phaseDeviation[k] = Math.max(0, Math.min(Math.PI, Math.abs(d2)))
                this._prevPhase[k] = phase
                this._prevPhaseDelta[k] = d1
            }

            if (attackTime) {
                const isRising = f > Math.max(1e-6, cfg.attackThreshold)
                if (isRising) {
                    this._attackActive[k] = 1
                    this._attackElapsedMs[k] += hopMs
                } else if (this._attackActive[k]) {
                    this._attackActive[k] = 0
                    this._attackLastMs[k] = Math.max(hopMs, this._attackElapsedMs[k])
                    this._attackElapsedMs[k] = 0
                }
                attackTime[k] = this._attackActive[k] ? this._attackElapsedMs[k] : this._attackLastMs[k]
            }

            if (envelope) {
                let state = 0
                if (f > cfg.attackThreshold) state = 1
                else if (Math.abs(f) <= cfg.sustainFluxEps && magNowLin >= cfg.sustainMagThreshold) state = 2
                else if (f < -cfg.decayThreshold) state = 3
                envelope[k] = state
            }

            this._prevMag[k] = magNowLin
        }

        const payload = { type: 'binMetrics' }
        const transfers = []
        if (magnitude) {
            payload.magnitude = magnitude.buffer
            transfers.push(magnitude.buffer)
        }
        if (flux) {
            payload.flux = flux.buffer
            transfers.push(flux.buffer)
        }
        if (phaseDeviation) {
            payload.phaseDeviation = phaseDeviation.buffer
            transfers.push(phaseDeviation.buffer)
        }
        if (envelope) {
            payload.envelope = envelope.buffer
            transfers.push(envelope.buffer)
        }
        if (attackTime) {
            payload.attackTime = attackTime.buffer
            transfers.push(attackTime.buffer)
        }
        this.port.postMessage(payload, transfers)
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
