import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
let L = readFileSync(PATH, 'utf8').split('\r\n');

// Insert before line 342 (0-indexed: 341), which is the closing } of tick()
const block = [
    '',
    '        // ── Supervised NMF shape classification (runs regardless of mode) ──',
    '        const ho = engine.getHarmonicObjects?.() ?? null',
    '        if (!engine._workletConfig.needPitchBrain) {',
    '            engine._workletConfig.needPitchBrain = true',
    '            engine._postWorkletConfig()',
    '        }',
    '        if (ho && ho.length > 0) {',
    '            this._shapeSolver.classifyObjects(ho)',
    '            engine._enrichedObjects = this._shapeSolver.enrichedObjects',
    '            engine._globalShapeActivations = this._shapeSolver.globalActivations',
    '        } else {',
    '            engine._enrichedObjects = []',
    '            if (engine._globalShapeActivations) engine._globalShapeActivations.fill(0)',
    '        }',
    '',
];

L.splice(341, 0, ...block);
writeFileSync(PATH, L.join('\r\n'));
console.log('Inserted shape classification at line 342. New length:', L.length);
