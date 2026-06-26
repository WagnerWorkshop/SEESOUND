/**
 * download-stem-model.mjs
 * ═══════════════════════════════════════════════════════════════════════════
 * Downloads the HT-Demucs 6-stem ONNX model from Hugging Face Hub into
 * the public folder so it can be served as a static asset.
 *
 * Usage:
 *   node scripts/download-stem-model.mjs
 *   node scripts/download-stem-model.mjs --small-only          # fp16 only (136 MB)
 *   node scripts/download-stem-model.mjs --local <path>       # copy from local file
 *   node scripts/download-stem-model.mjs --small-only --local <path>
 *
 * Downloads fp32 (258 MB) + fp16 (136 MB) from Hugging Face Hub by default.
 * The model repo requires authentication (gated).
 *   Set HF_TOKEN env var, or use --local <path> to copy a model you already have.
 *
 * The model files are placed in:
 *   frontend/public/models/htdemucs_6s/
 */

import { copyFileSync, createWriteStream, existsSync, mkdirSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import https from 'node:https'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', 'public', 'models', 'htdemucs_6s')

const HF_BASE = 'https://huggingface.co/stemsplit/htdemucs-6s-onnx/resolve/main'

// Optional: set HF_TOKEN environment variable for gated model access.
// The model repo may require authentication.
// Get a token at https://huggingface.co/settings/tokens
const HF_TOKEN = process.env.HF_TOKEN || ''

const VARIANTS = [
    {
        filename: 'htdemucs_6s.onnx',
        url: `${HF_BASE}/htdemucs_6s.onnx`,
        sizeMB: 258,
        description: 'fp32 full-precision model',
    },
    {
        filename: 'htdemucs_6s_fp16weights.onnx',
        url: `${HF_BASE}/htdemucs_6s_fp16weights.onnx`,
        sizeMB: 136,
        description: 'fp16-stored-weights model',
    },
]

/**
 * Download a file from a URL to a local path, with progress reporting.
 */
function download(url, dest, label) {
    return new Promise((resolve, reject) => {
        if (existsSync(dest)) {
            console.log(`  ✓ ${label} — already exists, skipping`)
            resolve()
            return
        }

        const file = createWriteStream(dest)
        let receivedBytes = 0
        let lastLoggedPct = 0

        const options = { headers: {} }
        if (HF_TOKEN) {
            options.headers['Authorization'] = `Bearer ${HF_TOKEN}`
        }
        https.get(url, options, (response) => {
            const total = parseInt(response.headers['content-length'] || '0', 10)

            if (response.statusCode === 401) {
                reject(new Error(
                    'HTTP 401 — model requires authentication.\n' +
                    '  1. Visit https://huggingface.co/stemsplit/htdemucs-6s-onnx and accept terms.\n' +
                    '  2. Create a token at https://huggingface.co/settings/tokens\n' +
                    '  3. Run: $env:HF_TOKEN="hf_your_token_here"; node scripts/download-stem-model.mjs'
                ))
                return
            }
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP ${response.statusCode} for ${url}`))
                return
            }

            response.on('data', (chunk) => {
                receivedBytes += chunk.length
                file.write(chunk)
                if (total > 0) {
                    const pct = Math.round((receivedBytes / total) * 100)
                    if (pct >= lastLoggedPct + 5) {
                        lastLoggedPct = pct
                        const mb = (receivedBytes / 1024 / 1024).toFixed(1)
                        const totalMB = (total / 1024 / 1024).toFixed(1)
                        process.stdout.write(`\r  ${label}: ${pct}% (${mb} MB / ${totalMB} MB)`)
                    }
                }
            })

            response.on('end', () => {
                file.end()
                process.stdout.write('\n')
                console.log(`  ✓ ${label} — complete`)
                resolve()
            })
        }).on('error', (err) => {
            file.close()
            // Remove partial download
            try { import('node:fs').then(fs => fs.unlinkSync(dest)) } catch { }
            reject(err)
        })
    })
}

async function main() {
    const args = process.argv.slice(2)
    const smallOnly = args.includes('--small-only')

    // Support --local <path> to copy model from a local file instead of downloading
    const localIdx = args.indexOf('--local')
    const localPath = localIdx >= 0 && localIdx + 1 < args.length ? args[localIdx + 1] : null
    if (localPath) {
        const { writeFileSync } = await import('node:fs')
        console.log(`── Using local model from: ${localPath} ──`)
        if (!existsSync(localPath)) {
            console.error(`  ✗ File not found: ${localPath}`)
            process.exit(1)
        }
        if (!existsSync(ROOT)) mkdirSync(ROOT, { recursive: true })
        const filename = smallOnly ? 'htdemucs_6s_fp16weights.onnx' : 'htdemucs_6s.onnx'
        const dest = join(ROOT, filename)
        copyFileSync(localPath, dest)
        const stats = statSync(dest)
        const sizeMB = (stats.size / 1024 / 1024).toFixed(1)
        console.log(`  ✓ Copied ${filename} (${sizeMB} MB)`)
        const manifest = {
            model: 'htdemucs_6s',
            sources: ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano'],
            sampleRate: 44100,
            chunkSize: 343980,
            chunkDurationMs: 7800,
            variants: [{
                filename,
                sizeMB: Number(sizeMB),
                description: smallOnly ? 'fp16-stored-weights model' : 'fp32 full-precision model',
            }],
        }
        writeFileSync(join(ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2))
        console.log('  ✓ manifest.json written')
        console.log('\n── Done ──')
        return
    }

    console.log('── HT-Demucs 6-Stem ONNX Model Download ──')
    console.log(`  Target: ${ROOT}`)
    console.log(`  Variants: ${smallOnly ? 'fp16 only' : 'fp32 + fp16'}\n`)

    if (!existsSync(ROOT)) {
        mkdirSync(ROOT, { recursive: true })
    }

    const selected = smallOnly
        ? VARIANTS.filter((v) => v.filename.includes('fp16'))
        : VARIANTS

    for (const variant of selected) {
        const dest = join(ROOT, variant.filename)
        console.log(`Downloading ${variant.description} (${variant.sizeMB} MB)...`)
        try {
            await download(variant.url, dest, variant.filename)
        } catch (err) {
            console.error(`  ✗ Failed to download ${variant.filename}:`, err.message)
        }
    }

    console.log('\n── Download complete ──')

    // Write a manifest so the app knows which models are available
    const manifest = {
        model: 'htdemucs_6s',
        sources: ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano'],
        sampleRate: 44100,
        chunkSize: 343980,
        chunkDurationMs: 7800,
        variants: selected.map((v) => ({
            filename: v.filename,
            sizeMB: v.sizeMB,
            description: v.description,
        })),
    }
    const { writeFileSync } = await import('node:fs')
    writeFileSync(join(ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2))
    console.log('  ✓ manifest.json written')
}

main().catch((err) => {
    console.error('Download failed:', err)
    process.exit(1)
})
