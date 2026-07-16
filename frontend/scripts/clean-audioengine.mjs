import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/AudioEngine.js';
let lines = readFileSync(PATH, 'utf8').split('\r\n');

// Track changes
let changes = [];

// 1. Remove iterative fields from constructor (this._iterativeSources through _iterativeWorkletLoadPromise)
const iterativeFieldStart = lines.findIndex(l => l.includes('// ── Iterative subtraction'));
const iterativeFieldEnd = iterativeFieldStart + 8; // 1 comment + 7 field lines
if (iterativeFieldStart > 0) {
    changes.push(`Removed iterative fields at lines ${iterativeFieldStart+1}-${iterativeFieldEnd+1}`);
    lines.splice(iterativeFieldStart, iterativeFieldEnd - iterativeFieldStart);
    // Add shape activation fields in their place
    lines.splice(iterativeFieldStart, 0,
        '',
        '        // ── Shape activation (supervised NMF, set by SeesoundEngine) ──',
        '        /** @type {Float32Array} 10-shape activation vector */',
        '        this._globalShapeActivations = new Float32Array(10)',
        '        /** @type {Array<Object>} Enriched harmonic objects with shape activations */',
        '        this._enrichedObjects = []',
        ''
    );
}

// 2. Remove _initIterativeSubtractionNode through _connectSourceToIterativeWorklet
const methodStart = lines.findIndex(l => l.includes('// ── Iterative Subtraction Worklet'));
const methodEnd = lines.findIndex((l, i) => i > methodStart && l.trim() === '}// ── Iterative Subtraction Worklet ──'.substring(0, 3));
// Find the actual end: the closing brace of _connectSourceToIterativeWorklet
let endIdx = methodStart;
for (let i = methodStart; i < lines.length; i++) {
    if (lines[i].trim() === '}' && i > methodStart + 5 && lines[i+1]?.trim() === '') {
        // Check if this looks like the end of the method section
        const nextNonEmpty = lines.slice(i+1).findIndex(l => l.trim());
        if (nextNonEmpty > 0 && lines[i+1+nextNonEmpty].includes('setRuleInputUsage')) {
            endIdx = i;
            break;
        }
    }
}
if (endIdx > methodStart) {
    changes.push(`Removed iterative methods at lines ${methodStart+1}-${endIdx+1}`);
    lines.splice(methodStart, endIdx - methodStart + 1);
    // Add shape accessors in their place
    lines.splice(methodStart, 0,
        '',
        '    // ── Shape Activation Accessors ───────────────────────────────────────────',
        '',
        '    /**',
        '     * Get the global 10-shape activation vector (frame-level, averaged across all objects).',
        '     * Set by SeesoundEngine each frame.',
        '     * @returns {Float32Array}',
        '     */',
        '    getGlobalShapeActivations() {',
        '        return this._globalShapeActivations',
        '    }',
        '',
        '    /**',
        '     * Get enriched harmonic objects with per-object shape activations.',
        '     * Set by SeesoundEngine each frame.',
        '     * @returns {Array<Object>}',
        '     */',
        '    getEnrichedObjects() {',
        '        return this._enrichedObjects',
        '    }',
        ''
    );
}

// 3. Remove needIterativeSubtraction from defaultUsage
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === 'needIterativeSubtraction: false,') {
        lines.splice(i, 1);
        i--; // adjust index after splice
    }
}

// 4. Remove _ensureIterativeWorkletLoaded call from init
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('this._ensureIterativeWorkletLoaded()')) {
        lines.splice(i, 1);
        break;
    }
}

// 5. Remove needIterativeSubtraction from setRuleInputUsage
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('this._workletConfig.needIterativeSubtraction')) {
        lines.splice(i, 1);
        break;
    }
}

// 6. Remove _postIterativeConfig call from setRuleInputUsage
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('this._postIterativeConfig()')) {
        lines.splice(i, 1);
        break;
    }
}

// 7. Remove iterative gate from update
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('if (!this._calcUsage?.needIterativeSubtraction)')) {
        // Remove the if block (5 lines)
        lines.splice(i, 5);
        break;
    }
}

// 8. Remove Iterative Subtraction Getters section
const gettersStart = lines.findIndex(l => l.includes('// ── Iterative Subtraction Getters'));
if (gettersStart > 0) {
    // Find end of setIterativeConfig method
    let gettersEnd = gettersStart;
    for (let i = gettersStart; i < lines.length; i++) {
        if (lines[i].trim() === '}' && i > gettersStart + 5) {
            const nextNonEmpty = lines.slice(i+1).findIndex(l => l.trim() !== '');
            if (nextNonEmpty < 0 || nextNonEmpty > 5) {
                gettersEnd = i;
                break;
            }
        }
    }
    if (gettersEnd > gettersStart) {
        lines.splice(gettersStart, gettersEnd - gettersStart + 1);
    }
}

writeFileSync(PATH, lines.join('\r\n'));
console.log('AudioEngine.js cleaned. Changes:');
changes.forEach(c => console.log(' - ' + c));
console.log('Total lines:', lines.length);
