import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// ── 1. SeesoundEngine.js: Add shape classification in tick() OUTSIDE isNetwork block ──
const seFile = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
let se = readFileSync(seFile, 'utf8');

// Find the end of the isNetwork block and the shape classification call there
const tickEnd = se.indexOf('    getCloudNetworkPositions()');
if (tickEnd > 0) {
    // Insert shape classification AFTER the isNetwork else block, BEFORE getCloudNetworkPositions
    const insertPoint = tickEnd;
    const shapeCode = `        // ── Supervised NMF shape classification (runs regardless of mode) ──
        const harmonicObjects = engine.getHarmonicObjects?.() ?? null
        if (harmonicObjects && harmonicObjects.length > 0) {
            this._shapeSolver.classifyObjects(harmonicObjects)
            engine._enrichedObjects = this._shapeSolver.enrichedObjects
            engine._globalShapeActivations = this._shapeSolver.globalActivations
        } else {
            engine._enrichedObjects = []
            engine._globalShapeActivations.fill(0)
        }

    `;
    se = se.slice(0, insertPoint) + shapeCode + se.slice(insertPoint);
    writeFileSync(seFile, se);
    console.log('SeesoundEngine.js: added shape classification OUTSIDE isNetwork block');
}

// ── 2. DependencyGraph.js: Add shape vars to BRAIN_TRIGGERS.pitchBrain ──
const dgFile = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/DependencyGraph.js';
let dg = readFileSync(dgFile, 'utf8');

// Expand pitchBrain to include ALL shape variables
dg = dg.replace(
    "pitchBrain: new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote']),",
    `pitchBrain: new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote',
        'shapeSine', 'shapeTriangle', 'shapeSawtooth', 'shapeSquare',
        'shapeNoise', 'shapePinkNoise', 'shapeTransient', 'shapePad',
        'shapeBuzzy', 'shapeBass', 'shapeDominant', 'shapeDominantValue']),`
);
writeFileSync(dgFile, dg);
console.log('DependencyGraph.js: shape vars added to pitchBrain trigger');

// ── 3. SeesoundEngine._syncParticleRules: always enable shape solver ──
// Find _syncParticleRules and add a call to ensure pitch brain is active
// Actually, the DependencyGraph fix above handles this — when rules reference
// shape vars, the graph will set needPitchBrain=true. But we also need to 
// force it when no rules exist yet (debug mode). Let's add a flag.

// Actually simplest: always enable pitch brain in SeesoundEngine
// Find setRuleInputUsage call in _syncParticleRules
const syncIdx = se.indexOf('_syncParticleRules()');
// Let me add a forced pitch brain to the tick method itself
// Actually, better: find where setRuleInputUsage is called and add shape
// Let me do this in a simpler way — just force it in tick()

// Read updated se
se = readFileSync(seFile, 'utf8');

// Force Pitch Brain on when we have an AudioEngine
// Find "engine.getHarmonicObjects?.()" in the new classification code
se = se.replace(
    '        // ── Supervised NMF shape classification (runs regardless of mode) ──',
    `        // ── Supervised NMF shape classification (runs regardless of mode) ──
        // Force Pitch Brain on so we get harmonic objects
        if (engine._workletConfig && !engine._workletConfig.needPitchBrain) {
            engine._workletConfig.needPitchBrain = true
            engine._postWorkletConfig()
        }`
);

writeFileSync(seFile, se);
console.log('SeesoundEngine.js: force Pitch Brain ON for shape classification');
