import { readFileSync, writeFileSync } from 'fs';

const M = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';

// Bug 1: Always call tick() — remove isActuallyPlaying gate
{
    let L = readFileSync(M, 'utf8').split('\r\n');
    // Find the "if (isActuallyPlaying) {" line before the tick call
    for (let i = 0; i < L.length; i++) {
        if (L[i].trim() === 'if (isActuallyPlaying) {'
            && i + 3 < L.length
            && L[i + 3].includes('__seesoundEngine?.tick({')) {
            // Remove the 3 lines of the if-block wrapper, keep the tick call
            // The pattern is:
            // L[i+0] = "    if (isActuallyPlaying) {"
            // L[i+1] = "        // Emit probe inputs..."
            // L[i+2] = "        const cameraUnitData = ..."
            // L[i+3] = "        window.__seesoundEngine?.tick({...})"
            // L[i+4] = "    }"
            // Replace with: always run the tick (no outer if)
            L[i] = '    // Always run — shape classification needs CQT data every frame';
            L[i + 4] = '';
            break;
        }
    }
    writeFileSync(M, L.join('\r\n'));
    console.log('1. Bug fixed: render-on-pause (tick always runs)');
}

// Bug 7: Camera flickering — lerp instead of instant
{
    let L = readFileSync(M, 'utf8').split('\r\n');
    for (let i = 0; i < L.length; i++) {
        if (L[i].trim() === 'function tickCameraRules() {') {
            // The next line after the comment block is the instant assignment
            // Find the EPS check block and replace with lerp
            for (let j = i + 1; j < i + 100 && j < L.length; j++) {
                if (L[j].includes('camera.position.x = t.x') && L[j].includes('posChanged')) {
                    L[j] = '        camera.position.x += (t.x - camera.position.x) * 0.28';
                } else if (L[j].includes('camera.position.y = t.y') && L[j].includes('posChanged')) {
                    L[j] = '        camera.position.y += (t.y - camera.position.y) * 0.28';
                } else if (L[j].includes('camera.position.z = t.z') && L[j].includes('posChanged')) {
                    L[j] = '        camera.position.z += (t.z - camera.position.z) * 0.28';
                } else if (L[j].includes('orbitTarget.x = t.targetX') && L[j].includes('posChanged')) {
                    L[j] = '        orbitTarget.x += (t.targetX - orbitTarget.x) * 0.28';
                } else if (L[j].includes('orbitTarget.y = t.targetY') && L[j].includes('posChanged')) {
                    L[j] = '        orbitTarget.y += (t.targetY - orbitTarget.y) * 0.28';
                } else if (L[j].includes('orbitTarget.z = t.targetZ') && L[j].includes('posChanged')) {
                    L[j] = '        orbitTarget.z += (t.targetZ - orbitTarget.z) * 0.28';
                }
            }
            break;
        }
    }
    writeFileSync(M, L.join('\r\n'));
    console.log('2. Bug fixed: camera flickering (inst -> lerp 0.28)');
}

// Bug 5: Canvas wiped on undo
{
    let L = readFileSync(M, 'utf8').split('\r\n');
    for (let i = 0; i < L.length; i++) {
        if (L[i].includes("if (key === 'ruleBlocks' || key === 'ruleLayers' || key === 'ruleGlobalBlocks') {")) {
            // Insert skip guard before the rebuild
            L.splice(i + 1, 0,
                '        // Skip rebuild during undo intermediate empty state',
                "        const _blk = Array.isArray(params.ruleBlocks) ? params.ruleBlocks : []",
                "        const _lay = Array.isArray(params.ruleLayers) ? params.ruleLayers : []",
                '        if (_blk.length === 0 && _lay.length === 0) return'
            );
            break;
        }
    }
    writeFileSync(M, L.join('\r\n'));
    console.log('3. Bug fixed: canvas wipe on undo');
}
