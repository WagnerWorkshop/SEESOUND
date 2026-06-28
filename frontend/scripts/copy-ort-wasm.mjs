/**
 * copy-ort-wasm.mjs
 * ═══════════════════════════════════════════════════════════════════════════
 * Copies onnxruntime-web WASM + .mjs glue files from node_modules to the
 * public/ort directory so they can be served as static assets.
 *
 * Copies ALL .wasm and .mjs files from the ort dist directory to give
 * onnxruntime-web full freedom to select the best variant at runtime
 * (threaded, SIMD, basic, with/without jsep).
 *
 * Usage: node scripts/copy-ort-wasm.mjs
 */

import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const ORT_DIST = join(ROOT, 'node_modules', 'onnxruntime-web', 'dist')
const ORT_PUBLIC = join(ROOT, 'public', 'ort')

if (!existsSync(ORT_DIST)) {
    console.error(`onnxruntime-web dist not found at ${ORT_DIST}`)
    console.error('Run "pnpm install" first.')
    process.exit(1)
}

if (!existsSync(ORT_PUBLIC)) {
    mkdirSync(ORT_PUBLIC, { recursive: true })
}

// Copy ALL .wasm and their .mjs glue files from ORT dist
const allFiles = readdirSync(ORT_DIST)
let copied = 0

for (const file of allFiles) {
    if (file.endsWith('.wasm') || file.endsWith('.mjs')) {
        const src = join(ORT_DIST, file)
        const dest = join(ORT_PUBLIC, file)
        copyFileSync(src, dest)
        copied++
        console.log(`  ✓ ${file}`)
    }
}

console.log(`\nCopied ${copied} files to ${ORT_PUBLIC}`)
