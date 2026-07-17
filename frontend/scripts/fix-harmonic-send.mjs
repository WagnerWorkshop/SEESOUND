import { readFileSync, writeFileSync } from 'fs';

// ════════════════════════════════════════════════════
// Fix: Worklet only sends harmonicObjects when objectMode === 'cloud'
// Remove that guard so objects are ALWAYS sent when Pitch Brain runs.
// ════════════════════════════════════════════════════
{
    const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/BinAnalysisWorklet.js';
    let c = readFileSync(f, 'utf8');

    c = c.replace(
        "if (objectMode === 'cloud' && harmonicObjects && harmonicObjects.length > 0) {",
        "if (harmonicObjects && harmonicObjects.length > 0) {"
    );

    writeFileSync(f, c);
    console.log('1. BinAnalysisWorklet.js: always send harmonicObjects (removed cloud-only guard)');
}

// ════════════════════════════════════════════════════
// Also fix: set objectMode to 'cloud' in tick() force code for safety
// ════════════════════════════════════════════════════
{
    const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
    let c = readFileSync(f, 'utf8');

    c = c.replace(
        "if (!engine._workletConfig.needPitchBrain) {\r\n            engine._workletConfig.needPitchBrain = true\r\n            engine._postWorkletConfig()\r\n        }",
        "if (!engine._workletConfig.needPitchBrain || engine._workletConfig.objectMode !== 'cloud') {\r\n            engine._workletConfig.needPitchBrain = true\r\n            engine._workletConfig.objectMode = 'cloud'\r\n            engine._postWorkletConfig()\r\n        }"
    );

    writeFileSync(f, c);
    console.log('2. SeesoundEngine.js: also force objectMode=cloud in tick()');
}

console.log('\nDone. Run pnpm build.');
