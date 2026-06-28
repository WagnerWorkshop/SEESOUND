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

// When cross-origin isolated (COOP/COEP headers enable SharedArrayBuffer),
// use local /ort/ files (same-origin, supports threading).
// When NOT isolated, fall back to CDN (cross-origin, but heap is limited).
if (self.crossOriginIsolated) {
    // Single directory string — onnxruntime-web appends filenames automatically.
    // The Vite plugin in vite.config.js serves these from node_modules during dev;
    // scripts/copy-ort-wasm.mjs copies them to public/ort/ for production builds.
    ort.env.wasm.wasmPaths = '/ort/'
    ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 4)
    console.log('[StemWorker] Cross-origin isolated — WASM threads:', ort.env.wasm.numThreads)
} else {
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.27.0/dist/'
    ort.env.wasm.numThreads = 1
    console.warn('[StemWorker] NOT cross-origin isolated — heap may be insufficient')
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 2  CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

/** HT-Demucs 6-stem source names (index matches output channel). */
const SOURCES = ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano']

/** Model expects exactly this many samples per channel per segment. */
const CHUNK_LENGTH = 343980

/** Sample rate expected by the model. */
const SAMPLE_RATE = 44100

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
//  § 4  SESSION + TENSOR CLEANUP
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Release the ONNX session and all its GPU/WASM resources.
 * Must be called after all inference is done to free VRAM/WASM heap.
 */
async function releaseSession() {
    if (session) {
        try {
            // session.release() is the official ONNX Runtime Web API to free
            // the underlying backend resources (GPU buffers, WASM memory, etc.)
            await session.release()
        } catch (err) {
            console.warn('[StemWorker] session.release() error:', err)
        }
        session = null
    }
    initialized = false
    console.log('[StemWorker] Session released — VRAM/WASM heap freed')
}

/**
 * Dispose an ONNX tensor, freeing its GPU/WASM memory immediately.
 * Call after extracting the data you need from the tensor.
 * @param {ort.Tensor|null|undefined} tensor
 */
function disposeTensor(tensor) {
    if (tensor && typeof tensor.dispose === 'function') {
        try { tensor.dispose() } catch { /* ignore */ }
    }
}

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
            case 'cleanup':
                await handleCleanup(msg)
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
//  § 6  INIT  (WASM-only when isolated, WebGPU+WASM when not)
// ─────────────────────────────────────────────────────────────────────────────

/** Post a status update from the worker to the main thread. */
function postStatus(phase, message) {
    postMessage({ type: 'status', phase, message })
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 5b  PROGRESSIVE DOWNLOAD + CACHE STORAGE
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Download a model file with progress tracking via ReadableStream.
 * Returns the model as an ArrayBuffer.
 */
async function downloadModelWithProgress(url, onProgress) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`)

    const contentLength = response.headers.get('content-length')
    if (!contentLength) {
        // No content-length header — fall back to single fetch
        onProgress(50)
        const buf = await response.arrayBuffer()
        onProgress(100)
        return buf
    }

    const total = parseInt(contentLength, 10)
    let loaded = 0

    const reader = response.body.getReader()
    const chunks = []

    while (true) {
        const { done, value } = await reader.read()
        if (done) break

        chunks.push(value)
        loaded += value.length
        onProgress(Math.round((loaded / total) * 100))
    }

    // Combine chunks into one ArrayBuffer
    const allChunks = new Uint8Array(total)
    let pos = 0
    for (const chunk of chunks) {
        allChunks.set(chunk, pos)
        pos += chunk.length
    }
    return allChunks.buffer
}

/**
 * Cache name for the ONNX model file.
 */
const MODEL_CACHE = 'seesound-models-v1'

/**
 * Get the ONNX model as an ArrayBuffer, using Cache Storage for persistence.
 * On first fetch: downloads with progress, caches the result.
 * On subsequent loads: retrieves from cache in < 1 second.
 */
async function getModelBuffer(url, onProgress) {
    // Try Cache Storage first
    try {
        const cache = await caches.open(MODEL_CACHE)
        const cached = await cache.match(url)
        if (cached) {
            console.log('[StemWorker] Model found in cache — loading instantly')
            onProgress(100)
            return await cached.arrayBuffer()
        }
    } catch (err) {
        console.warn('[StemWorker] Cache open failed:', err.message)
    }

    // Download with progress
    console.log('[StemWorker] Model not cached — downloading...')
    const buffer = await downloadModelWithProgress(url, onProgress)

    // Store in cache for next time (fire-and-forget)
    try {
        const cache = await caches.open(MODEL_CACHE)
        await cache.put(url, new Response(buffer, {
            headers: { 'Content-Type': 'application/octet-stream' },
        }))
        console.log('[StemWorker] Model cached for future loads')
    } catch (err) {
        console.warn('[StemWorker] Cache put failed:', err.message)
    }

    return buffer
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 6  INIT  (fetch + cache → ArrayBuffer → InferenceSession)
// ─────────────────────────────────────────────────────────────────────────────

async function handleInit(msg) {
    const modelUrl = msg.modelPath || modelPath || '/models/htdemucs_6s/htdemucs_6s_fp16weights.onnx'
    modelPath = modelUrl

    const startTime = performance.now()
    let errors = []

    // ── Step 1: Download (or cache-load) the model with progress ──
    let modelBuffer
    try {
        modelBuffer = await getModelBuffer(modelUrl, (pct) => {
            postStatus('download', `Downloading model: ${pct}% (130 MB)`)
        })
    } catch (err) {
        errors.push(`Download: ${err.message}`)
    }

    if (modelBuffer) {
        // ── Step 2: Create InferenceSession from ArrayBuffer ──
        if (self.crossOriginIsolated) {
            // WASM-only (2 threads, SharedArrayBuffer)
            try {
                console.log('[StemWorker] Creating WASM session from buffer...')
                postStatus('compile', 'Compiling model for CPU (WASM threading)...')
                ort.env.wasm.numThreads = Math.min(2, navigator.hardwareConcurrency || 2)
                session = await ort.InferenceSession.create(modelBuffer, {
                    executionProviders: ['wasm'],
                    graphOptimizationLevel: 'basic',
                    enableCpuMemArena: false,
                    enableMemPattern: false,
                    freeDimensionOverrides: {
                        batch_size: 1,
                        channels: 2,
                        sequence_length: CHUNK_LENGTH,
                    },
                })
            } catch (err) {
                errors.push(`WASM: ${err.message}`)
            }
        } else {
            // NOT isolated: WebGPU first, WASM fallback
            const canWebGPU = typeof navigator !== 'undefined' && 'gpu' in navigator
            if (canWebGPU) {
                try {
                    console.log('[StemWorker] Creating WebGPU session from buffer...')
                    postStatus('compile', 'Compiling model for GPU (WebGPU)...')
                    session = await ort.InferenceSession.create(modelBuffer, {
                        executionProviders: [{ name: 'webgpu', deviceType: 'gpu' }],
                        graphOptimizationLevel: 'basic',
                        freeDimensionOverrides: {
                            batch_size: 1,
                            channels: 2,
                            sequence_length: CHUNK_LENGTH,
                        },
                    })
                } catch (err) {
                    errors.push(`WebGPU: ${err.message}`)
                }
            }
            if (!session) {
                try {
                    console.log('[StemWorker] Creating WASM session from buffer...')
                    postStatus('compile', 'Compiling model for CPU (WASM)...')
                    ort.env.wasm.numThreads = 1
                    session = await ort.InferenceSession.create(modelBuffer, {
                        executionProviders: ['wasm'],
                        graphOptimizationLevel: 'basic',
                        enableCpuMemArena: false,
                        enableMemPattern: false,
                        freeDimensionOverrides: {
                            batch_size: 1,
                            channels: 2,
                            sequence_length: CHUNK_LENGTH,
                        },
                    })
                } catch (err) {
                    errors.push(`WASM: ${err.message}`)
                }
            }
        }
    }

    if (!session) {
        const lines = ['Failed to load model on any backend.']
        lines.push(...errors.map(e => `  ${e}`))
        lines.push('')
        lines.push(`Model: ${modelUrl}`)
        lines.push(`Cross-origin isolated: ${!!self.crossOriginIsolated}`)
        lines.push(`WASM threads: ${ort.env.wasm.numThreads ?? 1}`)
        lines.push(`WASM path: ${String(ort.env.wasm.wasmPaths)}`)
        throw new Error(lines.join('\n'))
    }

    const elapsed = (performance.now() - startTime).toFixed(0)
    const resolvedEp = session.handler?.executionProvider || 'wasm'
    initialized = true

    postMessage({
        type: 'initialized',
        jobId: msg.jobId,
        modelPath: modelUrl,
        executionProvider: resolvedEp,
        loadTimeMs: Number(elapsed),
        sources: SOURCES,
        sampleRate: SAMPLE_RATE,
        chunkLength: CHUNK_LENGTH,
    })

    console.log(`[StemWorker] Model loaded in ${elapsed}ms (${resolvedEp})`)
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 7  CLEANUP  — release session & dispose GPU memory
// ─────────────────────────────────────────────────────────────────────────────

async function handleCleanup(msg) {
    await releaseSession()
    postMessage({ type: 'cleaned', jobId: msg.jobId })
    console.log('[StemWorker] Cleanup complete')
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 8  SINGLE-CHUNK PROCESSING  (with tensor disposal)
// ─────────────────────────────────────────────────────────────────────────────

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

    const totalSamples = audio.length / 2
    const segmentLen = Math.min(totalSamples, CHUNK_LENGTH)

    // Build input tensor
    const inputData = new Float32Array(2 * CHUNK_LENGTH)
    for (let ch = 0; ch < 2; ch++) {
        for (let i = 0; i < segmentLen; i++) {
            inputData[ch * CHUNK_LENGTH + i] = audio[i * 2 + ch]
        }
    }
    const inputTensor = new ort.Tensor('float32', inputData, [1, 2, CHUNK_LENGTH])

    // Run inference
    const startTime = performance.now()
    const results = await session.run({ mix: inputTensor })
    const elapsed = performance.now() - startTime

    // Extract stem data BEFORE disposing
    /** @type {ort.Tensor} */
    const stemsTensor = results.stems
    const stemFloat32 = stemsTensor.data instanceof Float32Array
        ? stemsTensor.data
        : new Float32Array(stemsTensor.data)

    const stems = {}
    for (let s = 0; s < SOURCES.length; s++) {
        const stemChannel = new Float32Array(segmentLen)
        for (let i = 0; i < segmentLen; i++) {
            stemChannel[i] = stemFloat32[s * 2 * CHUNK_LENGTH + i]
        }
        stems[SOURCES[s]] = stemChannel
    }

    // 🗑️ Dispose tensors to free GPU/WASM memory immediately
    disposeTensor(inputTensor)
    disposeTensor(stemsTensor)
    // Also dispose any other output tensors
    for (const key of Object.keys(results)) {
        if (key !== 'stems') disposeTensor(results[key])
    }

    postMessage(
        {
            type: 'result',
            jobId,
            stems,
            segmentLen,
            inferenceTimeMs: elapsed,
        },
        SOURCES.map((name) => stems[name].buffer),
    )
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 9  BATCH PROCESSING  (with segment-level tensor disposal)
// ─────────────────────────────────────────────────────────────────────────────

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
        const segStart = performance.now()
        const results = await session.run({ mix: inputTensor })
        const segElapsed = performance.now() - segStart
        totalTime += segElapsed

        // Extract stem data
        const stemsTensor = results.stems
        const stemFloat32 = stemsTensor.data instanceof Float32Array
            ? stemsTensor.data
            : new Float32Array(stemsTensor.data)

        const stems = {}
        for (let s = 0; s < SOURCES.length; s++) {
            const stemChannel = new Float32Array(segmentLen)
            for (let t = 0; t < segmentLen; t++) {
                stemChannel[t] = stemFloat32[s * 2 * CHUNK_LENGTH + t]
            }
            stems[SOURCES[s]] = stemChannel
        }

        // 🗑️ Dispose all tensors immediately
        disposeTensor(inputTensor)
        disposeTensor(stemsTensor)
        for (const key of Object.keys(results)) {
            if (key !== 'stems') disposeTensor(results[key])
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
        allResults.flatMap((r) => SOURCES.map((name) => r.stems[name].buffer)),
    )
}
