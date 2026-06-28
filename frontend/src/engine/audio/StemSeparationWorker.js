/**
 * StemSeparationWorker.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Web Worker for HT-Demucs 6-stem ONNX inference.
 *
 * Runs entirely off the main thread using onnxruntime-web. The worker:
 *   1. Loads the ONNX model on startup (lazy via init message).
 *   2. Receives audio chunks as Float32Array interleaved stereo.
 *   3. Runs inference and returns separated stem audio.
 *   4. Never blocks the main thread's render loop.
 *
 * Input:  mix  — Float32Array shape [1, 2, 343980]  (stereo, 44.1 kHz, 7.8 s)
 * Output: stems — Float32Array shape [1, 6, 2, 343980]
 *         Channel order: [drums, bass, other, vocals, guitar, piano]
 *
 * @module StemSeparationWorker
 */

// ─────────────────────────────────────────────────────────────────────────────
//  § 1  IMPORTS & CONFIG
// ─────────────────────────────────────────────────────────────────────────────

import * as ort from 'onnxruntime-web'

// Point onnxruntime-web to WASM files served from CDN.
// Self-hosted files in /public/ort/ are used in production builds;
// CDN is used in dev mode where Vite blocks dynamic imports from /public.
ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.27.0/dist/'

// ─────────────────────────────────────────────────────────────────────────────
//  § 2  CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

/** HT-Demucs 6-stem source names (index matches output channel). */
const SOURCES = ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano']

/** Model expects exactly this many samples per channel per segment. */
const CHUNK_LENGTH = 343980

/** Sample rate expected by the model. */
const SAMPLE_RATE = 44100

/** Length of a single channel in a segment. */
const CHUNK_FRAMES = CHUNK_LENGTH

// ─────────────────────────────────────────────────────────────────────────────
//  § 3  STATE
// ─────────────────────────────────────────────────────────────────────────────

/** @type {ort.InferenceSession|null} */
let session = null

/** @type {string|null} */
let modelPath = null

/** @type {string[]} */
let providers = ['webgpu', 'wasm']

/** Whether the worker is ready to process chunks. */
let initialized = false

// ─────────────────────────────────────────────────────────────────────────────
//  § 4  WINDOWING / OVERLAP-ADD HELPERS (used by main thread, but here for
//        reference if we ever move chunking into the worker)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Create a Hann window of a given length.
 * @param {number} len
 * @returns {Float64Array}
 */
function hannWindow(len) {
    const w = new Float64Array(len)
    for (let i = 0; i < len; i++) {
        w[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (len - 1)))
    }
    return w
}

// Pre-computed Hann window for overlap-add
const HANN_LOOKUP = hannWindow(CHUNK_LENGTH)

// ─────────────────────────────────────────────────────────────────────────────
//  § 5  WORKER MESSAGE HANDLER
// ─────────────────────────────────────────────────────────────────────────────

self.onmessage = async (event) => {
    const msg = event.data
    if (!msg || typeof msg !== 'object') return

    try {
        switch (msg.type) {
            case 'init':
                await handleInit(msg)
                break
            case 'process':
                await handleProcess(msg)
                break
            case 'processBatch':
                await handleProcessBatch(msg)
                break
            default:
                postMessage({ type: 'error', error: `Unknown message type: ${msg.type}` })
        }
    } catch (err) {
        postMessage({
            type: 'error',
            error: err instanceof Error ? err.message : String(err),
            jobId: msg.jobId,
        })
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 6  INIT
// ─────────────────────────────────────────────────────────────────────────────

async function handleInit(msg) {
    const modelUrl = msg.modelPath || modelPath || '/models/htdemucs_6s/htdemucs_6s_fp16weights.onnx'
    const ep = Array.isArray(msg.providers) ? msg.providers : providers

    modelPath = modelUrl
    providers = ep

    // Try WebGPU first, fall back to WASM
    const resolvedProviders = []
    const preferred = ep[0] || 'webgpu'

    if (preferred === 'webgpu') {
        resolvedProviders.push({ name: 'webgpu', deviceType: 'gpu' })
        resolvedProviders.push({ name: 'wasm' })
    } else {
        resolvedProviders.push({ name: 'wasm' })
    }

    const startTime = performance.now()

    session = await ort.InferenceSession.create(modelUrl, {
        executionProviders: resolvedProviders,
        graphOptimizationLevel: 'all',
        enableCpuMemArena: true,
        enableMemPattern: true,
    })

    const elapsed = (performance.now() - startTime).toFixed(0)
    const resolvedEp = session.handler?.executionProvider || resolvedProviders[0].name

    initialized = true

    postMessage({
        type: 'initialized',
        modelPath: modelUrl,
        executionProvider: resolvedEp,
        loadTimeMs: Number(elapsed),
        sources: SOURCES,
        sampleRate: SAMPLE_RATE,
        chunkLength: CHUNK_LENGTH,
    })

    console.log(`[StemWorker] Model loaded in ${elapsed}ms (EP: ${resolvedEp})`)
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 7  SINGLE-CHUNK PROCESSING
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Process a single 7.8s audio segment.
 *
 * Input audio must be Float32Array of length 2 * CHUNK_LENGTH (interleaved stereo).
 * If shorter, it will be zero-padded.
 */
async function handleProcess(msg) {
    if (!session) {
        postMessage({ type: 'error', error: 'Worker not initialized', jobId: msg.jobId })
        return
    }

    const { jobId, audio } = msg
    if (!audio || !(audio instanceof Float32Array) || audio.length === 0) {
        postMessage({ type: 'error', error: 'Invalid audio data', jobId })
        return
    }

    // Convert interleaved stereo to separate channels
    const totalSamples = audio.length / 2
    const segmentLen = Math.min(totalSamples, CHUNK_LENGTH)

    // Create [1, 2, CHUNK_LENGTH] input tensor
    // ort expects float32 data
    const inputData = new Float32Array(2 * CHUNK_LENGTH)
    for (let ch = 0; ch < 2; ch++) {
        for (let i = 0; i < segmentLen; i++) {
            inputData[ch * CHUNK_LENGTH + i] = audio[i * 2 + ch]
        }
        // Remaining samples stay zero (zero-padded)
    }

    const inputTensor = new ort.Tensor('float32', inputData, [1, 2, CHUNK_LENGTH])

    const startTime = performance.now()
    const results = await session.run({ mix: inputTensor })
    const elapsed = performance.now() - startTime

    /** @type {ort.Tensor} */
    const stemsTensor = results.stems
    // stemsTensor is [1, 6, 2, CHUNK_LENGTH]

    // Extract each stem as Float32Array and send back
    const stemData = stemsTensor.data
    const stemFloat32 = stemData instanceof Float32Array ? stemData : new Float32Array(stemData)

    const stems = {}
    for (let s = 0; s < SOURCES.length; s++) {
        const stemChannel = new Float32Array(segmentLen)
        for (let i = 0; i < segmentLen; i++) {
            // Stems layout: [batch=1, source, channel, time]
            // Source s, channel 0 (left)
            stemChannel[i] = stemFloat32[s * 2 * CHUNK_LENGTH + i]
        }
        stems[SOURCES[s]] = stemChannel
    }

    postMessage(
        {
            type: 'result',
            jobId,
            stems,
            segmentLen,
            inferenceTimeMs: elapsed,
        },
        // Transfer the stem arrays (zero-copy)
        SOURCES.map((name) => stems[name].buffer),
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 8  BATCH PROCESSING (multiple segments)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Process multiple segments in sequence and return all results.
 * Used for long audio files that span many segments.
 */
async function handleProcessBatch(msg) {
    if (!session) {
        postMessage({ type: 'error', error: 'Worker not initialized', jobId: msg.jobId })
        return
    }

    const { jobId, segments } = msg
    if (!Array.isArray(segments) || segments.length === 0) {
        postMessage({ type: 'error', error: 'No segments provided', jobId })
        return
    }

    const allResults = []
    let totalTime = 0

    for (let i = 0; i < segments.length; i++) {
        const audio = segments[i]
        if (!(audio instanceof Float32Array)) {
            postMessage({ type: 'error', error: `Invalid segment ${i}`, jobId })
            return
        }

        const totalSamples = audio.length / 2
        const segmentLen = Math.min(totalSamples, CHUNK_LENGTH)

        const inputData = new Float32Array(2 * CHUNK_LENGTH)
        for (let ch = 0; ch < 2; ch++) {
            for (let s = 0; s < segmentLen; s++) {
                inputData[ch * CHUNK_LENGTH + s] = audio[s * 2 + ch]
            }
        }

        const inputTensor = new ort.Tensor('float32', inputData, [1, 2, CHUNK_LENGTH])
        const startTime = performance.now()
        const results = await session.run({ mix: inputTensor })
        const elapsed = performance.now() - startTime
        totalTime += elapsed

        const stemFloat32 = new Float32Array(results.stems.data)

        const stems = {}
        for (let s = 0; s < SOURCES.length; s++) {
            const stemChannel = new Float32Array(segmentLen)
            for (let t = 0; t < segmentLen; t++) {
                stemChannel[t] = stemFloat32[s * 2 * CHUNK_LENGTH + t]
            }
            stems[SOURCES[s]] = stemChannel
        }

        allResults.push({ stems, segmentLen })
    }

    postMessage(
        {
            type: 'batchResult',
            jobId,
            results: allResults,
            totalInferenceTimeMs: totalTime,
            segmentCount: segments.length,
        },
        // Transfer all stem buffers
        allResults.flatMap((r) => SOURCES.map((name) => r.stems[name].buffer)),
    )
}
