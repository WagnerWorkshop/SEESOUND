import { readFileSync, writeFileSync } from 'fs';

// Bug 2 & 3: AudioEngine cold-start and pause/restart transient
// Increase cold-start suppression from 6 to 15 frames,
// and force-sync prev buffers during cold-start so transient stays zero.
{
    const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/AudioEngine.js';
    let L = readFileSync(F, 'utf8').split('\r\n');

    // 1. Increase coldStartSuppressFrames from 6 to 15 in fadeIn()
    for (let i = 0; i < L.length; i++) {
        if (L[i].includes("this._coldStartSuppressFrames = 6")) {
            L[i] = L[i].replace('= 6', '= 15');
        }
    }

    // 2. In update(), during cold-start suppression, force-sync prev buffers
    for (let i = 0; i < L.length; i++) {
        if (L[i].includes("this._coldStartSuppressFrames > 0") && L[i + 1]?.includes("this._coldStartSuppressFrames--")) {
            // After the decrement line, add buffer sync
            L.splice(i + 2, 0,
                "                    // Force-sync prev buffers so the flux delta stays zero",
                "                    if (this._prevRhythmData && this._rhythmFrequencyData) {",
                "                        this._prevRhythmData.set(this._rhythmFrequencyData)",
                "                    }",
                "                    if (this._prevFrequencyDataBins && this.frequencyData) {",
                "                        this._prevFrequencyDataBins.set(this.frequencyData)",
                "                    }"
            );
            break;
        }
    }

    writeFileSync(F, L.join('\r\n'));
    console.log('1. AudioEngine: increased cold-start suppression to 15 frames + force-sync buffers');
}

// Bug 4: Auto-insert space after rule inline pills
{
    const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ControlPanel.js';
    let c = readFileSync(F, 'utf8');

    // Find insertVariablePillAtCursor function
    const fnStart = c.indexOf('function insertVariablePillAtCursor');
    if (fnStart > 0) {
        // Find the closing brace of the function
        let depth = 0;
        let fnEnd = fnStart;
        for (let i = fnStart; i < c.length; i++) {
            if (c[i] === '{') depth++;
            if (c[i] === '}') { depth--; if (depth === 0) { fnEnd = i + 1; break; } }
        }
        const fnBody = c.substring(fnStart, fnEnd);

        // Remove any line that inserts a space after the pill
        // Pattern: insertTextAtCursor(editor, ' ')  or similar
        const fixedBody = fnBody.replace(
            /insertTextAtCursor\s*\(\s*[^,]+,\s*'\s*'\s*\)\s*;?\s*\n/g,
            ''
        );

        c = c.substring(0, fnStart) + fixedBody + c.substring(fnEnd);
        writeFileSync(F, c);
        console.log('2. ControlPanel: removed auto-space after pills');
    } else {
        console.log('2. ControlPanel: insertVariablePillAtCursor not found — skipping');
    }
}

console.log('\nDone. Run pnpm build.');
