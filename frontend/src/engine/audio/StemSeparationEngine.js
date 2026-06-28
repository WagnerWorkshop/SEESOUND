/**
 * StemSeparationEngine.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Main-thread manager for HT-Demucs 6-stem audio source separation.
 *
 * Two modes:
 *   1. FULL ANALYSIS — decode entire file, process all chunks, reconstruct
 *      full-length stems. Best for pre-processing before playback.
 *   2. ROLLING (real-time) — process individual PCM chunks as they arrive
 *      from a playing audio element. Each chunk covers ~7.8 seconds.
 *      No overlap-add, no full-song decode. Emits stem chunks immediately.
 *
 * Usage (rolling):
 *   const sse = new StemSeparationEngine()
 *   await sse.initialize()
 *   const stems = await sse.processChunk(pcmFloat32Array)
 *   // stems = { drums: Float32Array, bass: Float32Array, ... }
 *
 * Events (on the StemSeparationEngine instance):
 *   'initialized'     — Model loaded, ready to process
 *   'error'           — { error } something went wrong
 *   'trackIdsChanged' — { trackIds: string[] } available stems updated
 *
 * @module StemSeparationEngine
 */

// ─────────────────────────────────────────────────────────────────────────────
//  § 1  CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

/** The 6 stem IDs in the order the model outputs them. */
const SOURCE_IDS = ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano']

/** Model segment length in samples (7.8 s at 44.1 kHz). */
const CHUNK_LENGTH = 343980

/** Model sample rate. */
const SAMPLE_RATE = 44100

/** Overlap ratio for the Hann-windowed overlap-add. 0.5 = 50% overlap. */
const OVERLAP_RATIO = 0.5

/** Hop size in samples. */
const HOP = Math.round(CHUNK_LENGTH * (1 - OVERLAP_RATIO))

/** Cross-fade samples at segment boundaries (512 samples ≈ 12 ms). */
const CROSSFADE_SAMPLES = 512

// ─────────────────────────────────────────────────────────────────────────────
//  § 2  HANN WINDOW (pre-computed)
// ─────────────────────────────────────────────────────────────────────────────

function buildHannWindow(len) {
    const w = new Float64Array(len)
    for (let i = 0; i < len; i++) {
        w[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (len - 1)))
    }
    return w
}

const HANN_WINDOW = buildHannWindow(CHUNK_LENGTH)

// ─────────────────────────────────────────────────────────────────────────────
//  § 3  STEM SEPARATION ENGINE
// ─────────────────────────────────────────────────────────────────────────────

export class StemSeparationEngine extends EventTarget {
    /**
     * @param {Object} [options]
     * @param {string} [options.modelPath] - URL/path to the ONNX model.
     *   Default: '/models/htdemucs_6s/htdemucs_6s_fp16weights.onnx'
     * @param {string[]} [options.providers] - ONNX Runtime execution providers.
     *   Default: ['webgpu', 'wasm']
     */
    constructor(options = {}) {
        super()

        /** @type {string} */
        this._modelPath = options.modelPath ||
            '/models/htdemucs_6s/htdemucs_6s_fp16weights.onnx'

        /** @type {string[]} */
        this._providers = Array.isArray(options.providers)
            ? options.providers
            : ['webgpu', 'wasm']

        /** @type {Worker|null} */
        this._worker = null

        /** @type {boolean} */
        this._initialized = false

        /** @type {boolean} */
        this._processing = false

        /** @type {Map<string, { resolve: Function, reject: Function }>} */
        this._pendingJobs = new Map()

        /** @type {number} */
        this._jobCounter = 0

        /** @type {string|null} */
        this._executionProvider = null

        /** @type {number} */
        this._loadTimeMs = 0

        /** @type {string[]} */
        this._availableSources = [...SOURCE_IDS]

        /** @type {Map<string, { audioBuffer: AudioBuffer, blobUrl: string, duration: number }>|null} */
        this._lastStems = null

        /** @type {Map<string, Float32Array>|null} Latest rolling stem chunks */
        this._latestChunks = null

        /** @type {boolean} Whether trackIdsChanged was already emitted */
        this._emittedTrackIds = false
    }

    // ── Public accessors ──────────────────────────────────────────────────

    /** @returns {boolean} Whether the model is loaded and ready. */
    get initialized() { return this._initialized }

    /** @returns {boolean} Whether a separation is currently running. */
    get processing() { return this._processing }

    /** @returns {string[]} Available stem track IDs. */
    get trackIds() { return [...this._availableSources] }

    /** @returns {string|null} Resolved execution provider name. */
    get executionProvider() { return this._executionProvider }

    /** @returns {Map<string, object>|null} Last separated stems, if any. */
    get lastStems() { return this._lastStems }

    // ──────────────────────────────────────────────────────────────────────
    //  § 4  INITIALIZATION
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Create the Web Worker and load the ONNX model.
     * Call once before any separate() calls.
     * Throws with a clear message if loading exceeds 50 seconds.
     */
    async initialize() {
        if (this._initialized) return

        // Create the Web Worker
        this._worker = new Worker(
            new URL('./StemSeparationWorker.js', import.meta.url),
            { type: 'module' },
        )

        this._worker.onmessage = (event) => this._handleWorkerMessage(event)
        this._worker.onerror = (event) => {
            console.error('[StemSeparation] Worker error:', event.message || 'Worker error')
            this.dispatchEvent(new CustomEvent('error', {
                detail: { error: event.message || 'Worker error' },
            }))
            // Reject ALL pending jobs so nothing hangs forever
            for (const [jid, pending] of this._pendingJobs) {
                pending.reject(new Error(event.message || 'Worker error'))
            }
            this._pendingJobs.clear()
        }

        // Race: init vs timeout. With tracked download + Cache Storage, the
        // first load downloads 130 MB which may take minutes on slow connections.
        // Subsequent loads from cache take < 1 second.
        const initPromise = this._sendMessage({
            type: 'init',
            modelPath: this._modelPath,
            providers: this._providers,
        })
        const initResult = await Promise.race([
            initPromise,
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error(
                    'Model loading timed out.\n' +
                    'The 130 MB neural network download may be too slow.\n' +
                    'Check your network speed. Once downloaded, it is cached and loads instantly.\n' +
                    'Try disabling Stem Separation in Settings, or use Chrome/Edge with WebGPU enabled.'
                )), 180000) // 3 minutes for first download
            ),
        ])

        this._initialized = true
        this._executionProvider = initResult.executionProvider || 'unknown'
        this._loadTimeMs = initResult.loadTimeMs || 0

        console.log(
            `[StemSeparation] Initialized — EP: ${this._executionProvider}, ` +
            `load time: ${this._loadTimeMs}ms, ` +
            `sources: ${this._availableSources.join(', ')}`,
        )

        this.dispatchEvent(new CustomEvent('initialized', {
            detail: {
                executionProvider: this._executionProvider,
                loadTimeMs: this._loadTimeMs,
                trackIds: this._availableSources,
            },
        }))

        return initResult
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 5  PUBLIC API — SEPARATE
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Separate an audio file into stems.
     *
     * @param {File|Blob} audioFile - An audio file (mp3, wav, flac, etc.).
     * @param {Object} [options]
     * @param {string[]} [options.stems] - Subset of stems to return.
     *   Default: all 6 stems.
     * @param {AbortSignal} [options.signal] - Optional AbortSignal to cancel.
     * @returns {Promise<Map<string, { audioBuffer: AudioBuffer, blobUrl: string, duration: number }>>}
     */
    async separate(audioFile, options = {}) {
        if (!this._initialized) {
            await this.initialize()
            if (!this._initialized) {
                throw new Error('Stem separation engine failed to initialize. Check console for details.')
            }
        }
        if (this._processing) {
            throw new Error('A separation is already in progress.')
        }

        const signal = options.signal || null
        const wantStems = Array.isArray(options.stems) && options.stems.length > 0
            ? options.stems.filter((s) => SOURCE_IDS.includes(s))
            : [...SOURCE_IDS]

        this._processing = true

        try {
            // Step 1: Decode audio file to raw PCM at 44.1 kHz
            this._emitProgress(0, 0, 0)
            const pcmData = await this._decodeAudioFile(audioFile, signal)
            const totalSamples = pcmData.length / 2  // interleaved stereo
            const durationSec = totalSamples / SAMPLE_RATE

            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Step 2: Split into overlapping segments
            const segments = this._createSegments(pcmData)
            const totalSegments = segments.length

            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Step 3: Process each segment through the worker
            const jobPromises = segments.map((seg, index) => {
                return this._sendMessage({
                    type: 'process',
                    jobId: `seg-${index}`,
                    audio: seg, // Float32Array interleaved
                }, signal)
            })

            // Progress updates as each segment completes
            const results = []
            for (let i = 0; i < jobPromises.length; i++) {
                const result = await jobPromises[i]
                results.push(result)
                const pct = Math.round(((i + 1) / totalSegments) * 90) // 0-90% for inference
                this._emitProgress(pct, i + 1, totalSegments)
            }

            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Step 4: Overlap-add reconstruct each stem
            this._emitProgress(92, 0, 0)
            const stemBuffers = this._overlapAddReconstruct(results, totalSamples, wantStems)

            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Step 5: Convert each stem to AudioBuffer + Blob URL
            this._emitProgress(95, 0, 0)
            const resultMap = await this._buildStemOutput(stemBuffers, durationSec, signal)

            this._lastStems = resultMap

            this._emitProgress(100, totalSegments, totalSegments)

            this.dispatchEvent(new CustomEvent('complete', {
                detail: { stems: resultMap, duration: durationSec },
            }))

            // Notify any listeners that track IDs have changed
            this.dispatchEvent(new CustomEvent('trackIdsChanged', {
                detail: { trackIds: this._availableSources },
            }))

            // Gracefully release the worker (sends cleanup → waits for session.release())
            await this._releaseWorker()

            return resultMap
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('[StemSeparation] Cancelled by user')
            } else {
                console.error('[StemSeparation] Separation failed:', err)
                this.dispatchEvent(new CustomEvent('error', {
                    detail: { error: err.message || String(err) },
                }))
            }
            throw err
        } finally {
            this._processing = false
        }
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 6  ROLLING REAL-TIME: process a single PCM chunk
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Process a single 7.8-second chunk of interleaved stereo PCM audio
     * and return stem data. Does NOT decode files or reconstruct stems
     * across multiple chunks — use this for rolling real-time analysis.
     *
     * The audio MUST be at 44.1 kHz. If shorter than CHUNK_LENGTH samples,
     * it will be zero-padded automatically.
     *
     * @param {Float32Array} interleavedPcm - Stereo PCM data [-1, 1].
     * @returns {Promise<Object<string, Float32Array>>} Stem name → mono Float32Array.
     */
    async processChunk(interleavedPcm) {
        if (!this._initialized) {
            await this.initialize()
            if (!this._initialized) {
                throw new Error('Stem separation engine failed to initialize.')
            }
        }

        // Build a segment (zero-pad if needed)
        const totalSamples = interleavedPcm.length / 2
        const seg = new Float32Array(2 * CHUNK_LENGTH)
        for (let i = 0; i < Math.min(totalSamples, CHUNK_LENGTH); i++) {
            seg[i * 2] = interleavedPcm[i * 2] || 0
            seg[i * 2 + 1] = interleavedPcm[i * 2 + 1] || 0
        }

        // Send to worker
        const result = await this._sendMessage({
            type: 'process',
            jobId: `chunk-${Date.now()}`,
            audio: seg,
        })

        // Extract stem data
        const stems = {}
        for (const stemId of SOURCE_IDS) {
            stems[stemId] = result.stems[stemId] || new Float32Array(0)
        }

        // Store as latest chunks
        this._latestChunks = stems

        // Emit track IDs on first successful chunk
        if (!this._emittedTrackIds) {
            this._emittedTrackIds = true
            this.dispatchEvent(new CustomEvent('trackIdsChanged', {
                detail: { trackIds: this._availableSources },
            }))
        }

        return stems
    }

    /** @returns {Object<string, Float32Array>|null} Latest rolling stem chunk data. */
    get latestChunks() { return this._latestChunks }

    // ──────────────────────────────────────────────────────────────────────
    //  § 7  AUDIO DECODING
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Decode an audio File/Blob to 44.1 kHz interleaved stereo Float32Array.
     * Uses Web Audio API's decodeAudioData, then resamples if needed.
     *
     * @param {Blob|File} file
     * @param {AbortSignal|null} signal
     * @returns {Promise<Float32Array>} Interleaved stereo PCM at 44.1 kHz.
     */
    async _decodeAudioFile(file, signal) {
        const arrayBuffer = await file.arrayBuffer()

        // Create a temporary AudioContext at the target sample rate
        const ctx = new (window.AudioContext || window.webkitAudioContext)({
            sampleRate: SAMPLE_RATE,
        })

        try {
            const audioBuffer = await ctx.decodeAudioData(arrayBuffer.slice(0))

            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Resample to 44.1 kHz if needed, and mix to stereo
            const channelData = []
            const numChannels = audioBuffer.numberOfChannels

            for (let ch = 0; ch < Math.min(numChannels, 2); ch++) {
                channelData.push(audioBuffer.getChannelData(ch))
            }

            // If mono, duplicate to stereo
            if (numChannels === 1) {
                channelData.push(channelData[0])
            }

            const length = audioBuffer.length
            const interleaved = new Float32Array(length * 2)

            for (let i = 0; i < length; i++) {
                interleaved[i * 2] = channelData[0]?.[i] || 0       // Left
                interleaved[i * 2 + 1] = channelData[1]?.[i] || 0   // Right
            }

            return interleaved
        } finally {
            try { await ctx.close() } catch { /* ignore */ }
        }
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 7  SEGMENTATION (overlap-add chunking)
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Split interleaved stereo PCM into overlapping segments for the model.
     * Each segment is CHUNK_LENGTH frames (7.8 s).
     *
     * @param {Float32Array} pcmData - Interleaved stereo PCM.
     * @returns {Float32Array[]} Array of segments, each Float32Array (2*CHUNK_LENGTH).
     */
    _createSegments(pcmData) {
        const totalFrames = pcmData.length / 2
        if (totalFrames <= 0) return []

        if (totalFrames <= CHUNK_LENGTH) {
            // Single segment — zero-pad if needed
            const seg = new Float32Array(2 * CHUNK_LENGTH)
            seg.set(pcmData)
            return [seg]
        }

        const segments = []
        let offset = 0

        while (offset < totalFrames) {
            const seg = new Float32Array(2 * CHUNK_LENGTH)
            const framesAvailable = totalFrames - offset
            const framesToCopy = Math.min(framesAvailable, CHUNK_LENGTH)

            // Copy interleaved samples
            for (let i = 0; i < framesToCopy; i++) {
                const srcIdx = (offset + i) * 2
                seg[i * 2] = pcmData[srcIdx]
                seg[i * 2 + 1] = pcmData[srcIdx + 1]
            }

            // Apply Hann window to the valid portion
            for (let i = 0; i < CHUNK_LENGTH; i++) {
                const idx = i * 2
                seg[idx] *= HANN_WINDOW[i]
                seg[idx + 1] *= HANN_WINDOW[i]
            }

            segments.push(seg)
            offset += HOP
        }

        return segments
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 8  OVERLAP-ADD RECONSTRUCTION
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Reconstruct full-length stem audio from overlapping segment results.
     *
     * @param {Array<{ stems: Object<string,Float32Array>, segmentLen: number }>} results
     * @param {number} totalSamples - Total number of frames (per channel).
     * @param {string[]} wantStems - Which stems to reconstruct.
     * @returns {Map<string, Float32Array>} Stem name → mono Float32Array.
     */
    _overlapAddReconstruct(results, totalSamples, wantStems) {
        const stemBuffers = new Map()

        for (const stemId of wantStems) {
            // Accumulation buffer (float64 for precision during overlap-add)
            const accum = new Float64Array(totalSamples)
            const weight = new Float64Array(totalSamples) // normalization factor

            for (let segIdx = 0; segIdx < results.length; segIdx++) {
                const { stems, segmentLen } = results[segIdx]
                const stemData = stems[stemId]
                if (!stemData) continue

                const offset = segIdx * HOP

                for (let i = 0; i < segmentLen && (offset + i) < totalSamples; i++) {
                    accum[offset + i] += stemData[i] * HANN_WINDOW[i]
                    weight[offset + i] += HANN_WINDOW[i]
                }
            }

            // Normalize by weight and convert to float32
            const out = new Float32Array(totalSamples)
            for (let i = 0; i < totalSamples; i++) {
                out[i] = weight[i] > 0.001
                    ? Math.max(-1, Math.min(1, accum[i] / weight[i]))
                    : 0
            }

            stemBuffers.set(stemId, out)
        }

        return stemBuffers
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 9  BUILD STEM OUTPUT (AudioBuffer + Blob URL)
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Convert reconstructed stem Float32Arrays into playable objects.
     *
     * @param {Map<string, Float32Array>} stemBuffers
     * @param {number} durationSec
     * @param {AbortSignal|null} signal
     * @returns {Promise<Map<string, { audioBuffer: AudioBuffer, blobUrl: string, duration: number }>>}
     */
    async _buildStemOutput(stemBuffers, durationSec, signal) {
        const result = new Map()

        for (const [stemId, floatData] of stemBuffers) {
            if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')

            // Create an AudioBuffer for this stem (mono)
            const ctx = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: SAMPLE_RATE,
            })
            let audioBuffer
            try {
                audioBuffer = ctx.createBuffer(1, floatData.length, SAMPLE_RATE)
                const channelData = audioBuffer.getChannelData(0)
                channelData.set(floatData)
            } finally {
                try { await ctx.close() } catch { /* ignore */ }
            }

            // Convert AudioBuffer to WAV Blob for playable URL
            const wavBlob = this._audioBufferToWav(audioBuffer)
            const blobUrl = URL.createObjectURL(wavBlob)

            result.set(stemId, {
                audioBuffer,
                blobUrl,
                duration: durationSec,
            })
        }

        return result
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 10  WAV ENCODING
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Convert an AudioBuffer (mono) to a WAV Blob.
     * This allows the <audio> element to play the stem directly.
     *
     * @param {AudioBuffer} audioBuffer
     * @returns {Blob}
     */
    _audioBufferToWav(audioBuffer) {
        const numChannels = audioBuffer.numberOfChannels
        const sampleRate = audioBuffer.sampleRate
        const format = 1 // PCM
        const bitsPerSample = 16
        const byteRate = sampleRate * numChannels * (bitsPerSample / 8)
        const blockAlign = numChannels * (bitsPerSample / 8)
        const dataSize = audioBuffer.length * numChannels * (bitsPerSample / 8)
        const bufferSize = 44 + dataSize

        const buffer = new ArrayBuffer(bufferSize)
        const view = new DataView(buffer)

        const writeStr = (offset, str) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i))
            }
        }

        // RIFF header
        writeStr(0, 'RIFF')
        view.setUint32(4, 36 + dataSize, true)
        writeStr(8, 'WAVE')

        // fmt chunk
        writeStr(12, 'fmt ')
        view.setUint32(16, 16, true) // chunk size
        view.setUint16(20, format, true)
        view.setUint16(22, numChannels, true)
        view.setUint32(24, sampleRate, true)
        view.setUint32(28, byteRate, true)
        view.setUint16(32, blockAlign, true)
        view.setUint16(34, bitsPerSample, true)

        // data chunk
        writeStr(36, 'data')
        view.setUint32(40, dataSize, true)

        let offset = 44
        const channelData = []
        for (let ch = 0; ch < numChannels; ch++) {
            channelData.push(audioBuffer.getChannelData(ch))
        }

        for (let i = 0; i < audioBuffer.length; i++) {
            for (let ch = 0; ch < numChannels; ch++) {
                const sample = Math.max(-1, Math.min(1, channelData[ch][i]))
                const int16 = sample < 0
                    ? Math.max(-32768, Math.round(sample * 32768))
                    : Math.min(32767, Math.round(sample * 32767))
                view.setInt16(offset, int16, true)
                offset += 2
            }
        }

        return new Blob([buffer], { type: 'audio/wav' })
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 11  WORKER COMMUNICATION
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Send a message to the worker and wait for the matching response.
     *
     * @param {Object} message
     * @param {AbortSignal|null} [signal]
     * @returns {Promise<any>}
     */
    _sendMessage(message, signal) {
        return new Promise((resolve, reject) => {
            if (!this._worker) {
                reject(new Error('Worker not created'))
                return
            }

            const jobId = message.jobId || `job-${this._jobCounter++}`
            const msg = { ...message, jobId }

            const abortHandler = signal
                ? () => {
                    this._pendingJobs.delete(jobId)
                    reject(new DOMException('Aborted', 'AbortError'))
                }
                : null

            if (signal) {
                signal.addEventListener('abort', abortHandler, { once: true })
            }

            this._pendingJobs.set(jobId, {
                resolve: (value) => {
                    if (abortHandler) signal?.removeEventListener('abort', abortHandler)
                    resolve(value)
                },
                reject: (err) => {
                    if (abortHandler) signal?.removeEventListener('abort', abortHandler)
                    reject(err)
                },
            })

            this._worker.postMessage(msg)
        })
    }

    /**
     * Handle messages from the Web Worker.
     * @param {MessageEvent} event
     */
    _handleWorkerMessage(event) {
        const msg = event.data
        if (!msg || typeof msg !== 'object') return

        const { jobId, type } = msg

        switch (type) {
            case 'initialized':
                this._resolveJob(jobId, msg)
                break

            case 'status':
                // Forward worker status updates as events (no jobId needed)
                this.dispatchEvent(new CustomEvent('status', {
                    detail: { phase: msg.phase, message: msg.message },
                }))
                break

            case 'result':
                this._resolveJob(jobId, {
                    stems: msg.stems,
                    segmentLen: msg.segmentLen,
                    inferenceTimeMs: msg.inferenceTimeMs,
                })
                break

            case 'batchResult':
                this._resolveJob(jobId, {
                    results: msg.results,
                    totalInferenceTimeMs: msg.totalInferenceTimeMs,
                })
                break

            case 'cleaned':
                this._resolveJob(jobId, msg)
                break

            case 'error':
                this._rejectJob(jobId, new Error(msg.error || 'Unknown worker error'))
                this.dispatchEvent(new CustomEvent('error', {
                    detail: { error: msg.error },
                }))
                break

            default:
                console.warn('[StemSeparation] Unknown worker message:', type)
        }
    }

    /**
     * @param {string} jobId
     * @param {any} value
     */
    _resolveJob(jobId, value) {
        const pending = this._pendingJobs.get(jobId)
        if (pending) {
            pending.resolve(value)
            this._pendingJobs.delete(jobId)
        }
    }

    /**
     * @param {string} jobId
     * @param {Error} err
     */
    _rejectJob(jobId, err) {
        const pending = this._pendingJobs.get(jobId)
        if (pending) {
            pending.reject(err)
            this._pendingJobs.delete(jobId)
        }
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 12  PROGRESS EMISSION
    // ──────────────────────────────────────────────────────────────────────

    /**
     * @param {number} percent
     * @param {number} segment
     * @param {number} total
     */
    _emitProgress(percent, segment, total) {
        this.dispatchEvent(new CustomEvent('progress', {
            detail: { percent, segment, total },
        }))
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 13  CLEANUP
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Gracefully release the worker: send cleanup → wait for session.release()
     * → then terminate. This ensures GPU VRAM / WASM heap is freed.
     * The worker will be re-created on the next initialize() call.
     */
    async _releaseWorker() {
        if (this._worker) {
            try {
                // Ask the worker to release the ONNX session (frees GPU/WASM memory).
                // Add a 5s timeout so we don't hang if the worker is unresponsive.
                const cleanupPromise = this._sendMessage({ type: 'cleanup' })
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Cleanup timeout')), 5000)
                )
                await Promise.race([cleanupPromise, timeoutPromise])
            } catch (err) {
                console.warn('[StemSeparation] Cleanup signal failed:', err.message)
            }
            this._worker.terminate()
            this._worker = null
        }
        this._initialized = false
        this._pendingJobs.clear()
        this._jobCounter = 0
        console.log('[StemSeparation] Worker released — GPU/WASM memory freed')
    }

    // ──────────────────────────────────────────────────────────────────────
    //  § 13  CLEANUP
    // ──────────────────────────────────────────────────────────────────────

    /**
     * Terminate the worker and release all resources.
     * Call when the engine is no longer needed.
     */
    dispose() {
        this._releaseWorker()

        // Revoke any blob URLs from last stems
        if (this._lastStems) {
            for (const [, stem] of this._lastStems) {
                if (stem.blobUrl) URL.revokeObjectURL(stem.blobUrl)
            }
            this._lastStems = null
        }

        this._processing = false

        console.log('[StemSeparation] Disposed')
    }
}
