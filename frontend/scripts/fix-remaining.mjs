import { readFileSync, writeFileSync } from 'fs';

// ════════════════════════════════════════════════════
// 1. Remove _syncIterativeConfig call + method from SeesoundEngine
// ════════════════════════════════════════════════════
{
    const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
    let c = readFileSync(f, 'utf8');

    // Remove the call
    c = c.replace("        // Sync iterative subtraction config after every rule sync\r\n        this._syncIterativeConfig()\r\n", '');

    // Remove the method
    c = c.replace(
        `\r\n    /** Sync iterative subtraction worklet config with current param values. */\r\n    _syncIterativeConfig() {\r\n        if (!this._ae) return\r\n        const mode = String(params.separationMode ?? 'none').trim()\r\n        if (mode === 'iterative') {\r\n            const threshold = Number(params.separationThreshold ?? 0.2)\r\n            console.log('[Engine] iterative subtraction: ENABLED, threshold=' + threshold.toFixed(2))\r\n            // Force-enable the worklet and configure threshold\r\n            if (!this._ae._calcUsage) this._ae._calcUsage = {}\r\n            this._ae._calcUsage.needIterativeSubtraction = true\r\n            this._ae.setIterativeConfig({ threshold, maxSources: 16 })\r\n            // Ensure worklet is loading if context exists\r\n            if (this._ae.ctx && !this._ae._iterativeWorkletReady) {\r\n                this._ae._ensureIterativeWorkletLoaded()\r\n            }\r\n        } else {\r\n            if (this._ae._calcUsage) {\r\n                this._ae._calcUsage.needIterativeSubtraction = false\r\n            }\r\n            this._ae.setIterativeConfig({ enabled: false })\r\n            // Clear stale data\r\n            this._ae._iterativeSources = null\r\n            this._ae._iterativeSourceCount = 0\r\n        }\r\n    }`,
        ''
    );

    writeFileSync(f, c);
    console.log('1. Removed _syncIterativeConfig from SeesoundEngine');
}

// ════════════════════════════════════════════════════
// 2. Remove stale _iterSource fields from ParticleSystem constructor
// ════════════════════════════════════════════════════
{
    const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
    let c = readFileSync(f, 'utf8');

    c = c.replace('        this._iterSourceCount = 0\r\n', '');
    c = c.replace('        this._iterFirstF0 = 0\r\n', '');
    c = c.replace('        this._iterFirstVol = 0\r\n', '');
    c = c.replace('        this._iterFirstCrest = 0\r\n', '');
    c = c.replace('        this._iterFirstSym = 0\r\n', '');

    writeFileSync(f, c);
    console.log('2. Removed _iterSource fields from ParticleSystem constructor');
}

console.log('\nDone. Run pnpm build.');
