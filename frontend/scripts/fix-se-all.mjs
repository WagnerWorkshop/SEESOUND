import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
let lines = readFileSync(PATH, 'utf8').split('\r\n');

// ── 1. Add import ──
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("import { EngineEvent, createDefaultConfig } from './types.js'")) {
        if (!lines[i+1]?.includes("import { SupervisedNMF }")) {
            lines.splice(i + 1, 0, "import { SupervisedNMF } from './audio/SupervisedNMF.js'");
        }
        break;
    }
}

// ── 2. Add _shapeSolver in constructor ──
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('this._graphSolver = new GraphSolver()')) {
        if (!lines[i+1]?.includes('this._shapeSolver')) {
            lines.splice(i + 1, 0, '        /** @type {SupervisedNMF} */', '        this._shapeSolver = new SupervisedNMF()');
        }
        break;
    }
}

// ── 3. Add param subscription for shape settings ──
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("if (key === 'ruleLayers' || key === 'ruleGlobalBlocks' || key === 'ruleEngineEnabled')")) {
        lines.splice(i, 0,
            "            if (key === 'shapeSparsityTopN' || key === 'shapeSmoothingAlpha') {",
            "                this._shapeSolver.setParams(params.shapeSparsityTopN, params.shapeSmoothingAlpha)",
            "            }"
        );
        break;
    }
}

// ── 4. Insert shape classification INSIDE tick() method, BEFORE its closing } ──
// Find the end of the tick() method: it's the closing brace before getCloudNetworkPositions()
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '}' 
        && lines[i+1]?.trim() === '' 
        && lines[i+2]?.includes('getCloudNetworkPositions()')) {
        // This is the closing brace of tick(). Insert shape code BEFORE it.
        lines.splice(i, 0,
            '',
            '        // ── Supervised NMF shape classification (runs regardless of mode) ──',
            '        // Force Pitch Brain on so we get harmonic objects',
            "        if (engine._workletConfig && !engine._workletConfig.needPitchBrain) {",
            '            engine._workletConfig.needPitchBrain = true',
            '            engine._postWorkletConfig()',
            '        }',
            '        const harmonicObjectsAll = engine.getHarmonicObjects?.() ?? null',
            '        if (harmonicObjectsAll && harmonicObjectsAll.length > 0) {',
            '            this._shapeSolver.classifyObjects(harmonicObjectsAll)',
            '            engine._enrichedObjects = this._shapeSolver.enrichedObjects',
            '            engine._globalShapeActivations = this._shapeSolver.globalActivations',
            '        } else {',
            '            engine._enrichedObjects = []',
            '            engine._globalShapeActivations.fill(0)',
            '        }'
        );
        break;
    }
}

// ── 5. Add shapeEntity mode ──
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("e?.layerShapeType === 'cloud'") && lines[i].includes('hasCloud')) {
        lines[i] = lines[i].replace("e?.layerShapeType === 'cloud'", "e?.layerShapeType === 'cloud' || e?.layerShapeType === 'shapeEntity'");
        break;
    }
}

// Save
writeFileSync(PATH, lines.join('\r\n'));
console.log('SeesoundEngine.js: all changes applied. Lines:', lines.length);
