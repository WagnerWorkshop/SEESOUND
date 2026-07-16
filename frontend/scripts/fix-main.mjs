import { readFileSync, writeFileSync } from 'fs';

const file = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';
let content = readFileSync(file, 'utf8');

// 1. Remove iterative subtraction test hooks (exact section)
content = content.replace(
`// ─────────────────────────────────────────────────────────────────────────────
// § 9  ITERATIVE SUBTRACTION TEST HOOK
// ─────────────────────────────────────────────────────────────────────────────
//
// Usage from browser console:
//   1. Load an audio file via the normal UI
//   2. Call: await window.testIterativeSubtraction()
//   3. Check console for per-iteration separation log
//   4. Inspect result.sources array for extracted waveforms
//
import { iterativeSubtraction, runOnAudioBuffer } from './engine/audio/IterativeSubtraction.prototype.js'

window.testIterativeSubtraction = async (opts = {}) => {
    const audioEl = ae?.audioEl
    if (!audioEl?.src) {
        console.warn('[IterativeSubtraction] No audio loaded. Load a file first.')
        return null
    }

    // Fetch the audio file data
    const resp = await fetch(audioEl.src)
    const arrayBuffer = await resp.arrayBuffer()

    // Decode using a temporary AudioContext
    const tempCtx = new (window.AudioContext || window.webkitAudioContext)()
    let result
    try {
        const audioBuffer = await tempCtx.decodeAudioData(arrayBuffer.slice(0))
        console.log(`[IterativeSubtraction] Decoded: \${audioBuffer.duration.toFixed(1)}s, \${audioBuffer.numberOfChannels}ch, \${audioBuffer.sampleRate}Hz`)

        // Override default opts with console-configurable threshold
        const settings = {
            terminationThreshold: opts.threshold ?? 0.2,
            maxSources: opts.maxSources ?? 16,
            verbose: opts.verbose ?? true,
            ...opts,
        }

        result = runOnAudioBuffer(audioBuffer, settings)
    } finally {
        try { tempCtx.close() } catch {}
    }

    // Render summary
    if (result.success && result.sources.length > 0) {
        console.log('─'.repeat(60))
        console.log(\`EXTRACTED \${result.sources.length} SOURCES:\`)
        result.sources.forEach((s, i) => {
            console.log(\`  [\${i}] f₀=\${s.f0.toFixed(2)}Hz (period=\${s.period.toFixed(2)}samp) confidence=\${s.confidence.toFixed(3)} vol=\${s.volume.toFixed(6)} crest=\${s.crest.toFixed(3)} sym=\${s.symmetry.toFixed(3)}\`)
            console.log(\`       waveform: \${s.waveform.length} samples, peak=\${Math.max(...s.waveform.map(Math.abs)).toFixed(6)}\`)
        })
        console.log(\`Residual RMS: \${Math.sqrt(result.residual.reduce((s, v) => s + v*v, 0) / Math.max(1, result.residual.length)).toFixed(8)}\`)
        console.log('─'.repeat(60))
    } else {
        console.log('[IterativeSubtraction] No tonal sources found (residual is noise or silent).')
    }

    // Store result on window for inspection
    window.__iterativeSubtractionResult = result

    // Return the raw result for programmatic inspection
    return result
}

// Quick test with a synthetic tone (no file needed) — just for algorithm validation
window.testIterativeSubtractionSynthetic = () => {
    const sampleRate = 44100
    const duration = 1.0
    const len = Math.floor(sampleRate * duration)
    const buf = new Float32Array(len)

    // Mix: 440Hz sine (loud) + 660Hz sine (softer) + noise (quiet)
    for (let i = 0; i < len; i++) {
        const t = i / sampleRate
        buf[i] = 0.5 * Math.sin(2 * Math.PI * 440 * t)
               + 0.25 * Math.sin(2 * Math.PI * 660 * t)
               + (Math.random() - 0.5) * 0.02
    }

    console.log('[IterativeSubtraction] Running on synthetic 440Hz+660Hz+noise...')
    const result = iterativeSubtraction(buf, sampleRate, { verbose: true, maxSources: 4 })
    window.__iterativeSubtractionResult = result
    return result
}

console.log('[IterativeSubtraction] Test hooks ready. Call window.testIterativeSubtraction() or testIterativeSubtractionSynthetic()')
`, '');

// Clean up blank lines
content = content.replace(/\n{3,}\}/g, '\n}');

// 2. Add shape debug panel import
content = content.replace(
    "import magnifierMinusIcon from './icons/magnifier-minus.svg?raw'",
    "import magnifierMinusIcon from './icons/magnifier-minus.svg?raw'\nimport { createShapeDebugPanel, updateShapeDebugPanel, toggleShapeDebugPanel } from './engine/ui/ShapeDebugPanel.js'"
);

// 3. Add debug panel init before the ready console.log
content = content.replace(
    "console.log('%c SEESOUND v1.0 ready '",
    "// Shape debug panel (Ctrl+Shift+D to toggle)\ncreateShapeDebugPanel(() => ae)\nwindow.addEventListener('keydown', (e) => { if (e.ctrlKey && e.shiftKey && e.key === 'D') { e.preventDefault(); toggleShapeDebugPanel(); } })\n\nconsole.log('%c SEESOUND v1.0 ready '"
);

// 4. Add update call in animate function
content = content.replace(
    '    ae.update()\n    const isActuallyPlaying',
    '    ae.update()\n    updateShapeDebugPanel()\n    const isActuallyPlaying'
);

writeFileSync(file, content);
console.log('main.js: cleaned + debug panel wired');
