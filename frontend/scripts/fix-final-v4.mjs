import { readFileSync, writeFileSync } from 'fs';

const BASE = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend';

// ═══════════════════════════════════════════════════════════════
// 1. SeesoundEngine.js — Insert shape classification into tick()
// ═══════════════════════════════════════════════════════════════
{
    const f = `${BASE}/src/engine/SeesoundEngine.js`;
    let lines = readFileSync(f, 'utf8').split('\r\n');

    // Find the } that closes tick(), just before getCloudNetworkPositions()
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === '}'
            && lines[i + 1]?.trim() === ''
            && lines[i + 2]?.trim().startsWith('/**')
            && lines[i + 3]?.includes('getCloudNetworkPositions()')) {

            // Insert shape classification BEFORE this closing }
            lines.splice(i, 0,
                '',
                '        // ── Supervised NMF shape classification (runs regardless of mode) ──',
                "        const harmonicObjectsAll = engine.getHarmonicObjects?.() ?? null",
                "        if (!engine._workletConfig?.needPitchBrain) {",
                "            engine._workletConfig.needPitchBrain = true",
                "            engine._postWorkletConfig()",
                "        }",
                '        if (harmonicObjectsAll && harmonicObjectsAll.length > 0) {',
                '            this._shapeSolver.classifyObjects(harmonicObjectsAll)',
                '            engine._enrichedObjects = this._shapeSolver.enrichedObjects',
                '            engine._globalShapeActivations = this._shapeSolver.globalActivations',
                '        } else {',
                '            engine._enrichedObjects = []',
                '            if (engine._globalShapeActivations) engine._globalShapeActivations.fill(0)',
                '        }'
            );

            writeFileSync(f, lines.join('\r\n'));
            console.log('SeesoundEngine.js: shape classification inserted at line ' + (i + 1));
            break;
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// 2. ParticleSystem.js — Remove iterative subtraction, add shapes
// ═══════════════════════════════════════════════════════════════
{
    const f = `${BASE}/src/engine/ParticleSystem.js`;
    let c = readFileSync(f, 'utf8');

    // 2a. Remove the iterative subtraction block
    c = c.replace(
        `        // ── Iterative Subtraction (Time-Domain Source Separation) ──────
        // Read organically-discovered tonal sources from the AudioEngine.
        // Each source has f0, volume, crest factor, symmetry — stored per-frame
        // and exposed as global rule variables so rules can react to source count
        // and the dominant source's characteristics.
        {
            const iterSources = ae.getIterativeSources?.() ?? null
            const iterCount = ae.getIterativeSourceCount?.() ?? 0
            this._iterSourceCount = iterCount
            if (Array.isArray(iterSources) && iterSources.length > 0) {
                this._iterFirstF0 = iterSources[0].f0 ?? 0
                this._iterFirstVol = iterSources[0].volume ?? 0
                this._iterFirstCrest = iterSources[0].crest ?? 0
                this._iterFirstSym = iterSources[0].symmetry ?? 0
            } else {
                                            }
        }`,
        `        // ── Supervised NMF shape activations ──────────────────────
        // Read global shape activations from AudioEngine (set by SeesoundEngine.tick)
        {
            const gsa = ae.getGlobalShapeActivations?.()
            const shapeIds = ['shapeSine','shapeTriangle','shapeSawtooth','shapeSquare','shapeNoise','shapePinkNoise','shapeTransient','shapePad','shapeBuzzy','shapeBass']
            if (gsa) {
                for (let s = 0; s < shapeIds.length; s++) {
                    this['_' + shapeIds[s]] = gsa[s] || 0
                }
            }
            const enriched = ae.getEnrichedObjects?.() ?? []
            this._shapeDominant = enriched.length > 0 ? (enriched[0].dominantShape || 'Sine') : 'Sine'
            this._shapeDominantValue = enriched.length > 0 ? (enriched[0].dominantShapeValue || 0) : 0
        }`
    );

    // 2b. Replace iterative entries in frameBinInputs with shape entries
    c = c.replace(
        `            // Iterative subtraction (time-domain source separation)
            iterativeSourceCount: this._iterSourceCount ?? 0,
            iterativeSourceF0: this._iterFirstF0 ?? 0,
            iterativeSourceVolume: this._iterFirstVol ?? 0,
            iterativeSourceCrest: this._iterFirstCrest ?? 0,
            iterativeSourceSymmetry: this._iterFirstSym ?? 0,`,
        `            // Shape activation variables (supervised NMF)
            shapeSine: this._shapeSine ?? 0,
            shapeTriangle: this._shapeTriangle ?? 0,
            shapeSawtooth: this._shapeSawtooth ?? 0,
            shapeSquare: this._shapeSquare ?? 0,
            shapeNoise: this._shapeNoise ?? 0,
            shapePinkNoise: this._shapePinkNoise ?? 0,
            shapeTransient: this._shapeTransient ?? 0,
            shapePad: this._shapePad ?? 0,
            shapeBuzzy: this._shapeBuzzy ?? 0,
            shapeBass: this._shapeBass ?? 0,
            shapeDominant: this._shapeDominant ?? 'Sine',
            shapeDominantValue: this._shapeDominantValue ?? 0,`
    );

    // 2c. Remove stale _iterSource fields from constructor if they exist
    c = c.replace('        this._iterSourceCount = 0\r\n', '');
    c = c.replace('        this._iterFirstF0 = 0\r\n', '');
    c = c.replace('        this._iterFirstVol = 0\r\n', '');
    c = c.replace('        this._iterFirstCrest = 0\r\n', '');
    c = c.replace('        this._iterFirstSym = 0\r\n', '');

    writeFileSync(f, c);
    console.log('ParticleSystem.js: replaced iterative with shape variables');
}

console.log('\nAll fixes applied. Run pnpm build to verify.');
