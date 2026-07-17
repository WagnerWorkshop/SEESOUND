import { readFileSync, writeFileSync } from 'fs';

// ════════════════════════════════════════════════════════════════
// 1. SeesoundEngine: Replace SupervisedNMF with PitchFirstClassifier
//    Remove force objectMode='cloud' — worklet stays in particle mode
// ════════════════════════════════════════════════════════════════
{
  const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
  let c = readFileSync(f, 'utf8');

  // Replace import
  c = c.replace(
    "import { SupervisedNMF } from './audio/SupervisedNMF.js'",
    "import { PitchFirstClassifier } from './audio/PitchFirstClassifier.js'"
  );

  // Replace type + constructor
  c = c.replace(
    "/** @type {SupervisedNMF} */",
    "/** @type {PitchFirstClassifier} */"
  );
  c = c.replace(
    "this._shapeSolver = new SupervisedNMF()",
    "this._shapeSolver = new PitchFirstClassifier()"
  );

  // Replace the tick() shape classification block — use CQT data instead of harmonic objects
  const oldBlock = `        // ── Supervised NMF shape classification (runs regardless of mode) ──
        const ho = engine.getHarmonicObjects?.() ?? null
        if (!engine._workletConfig.needPitchBrain || engine._workletConfig.objectMode !== 'cloud') {
            engine._workletConfig.needPitchBrain = true
            engine._workletConfig.objectMode = 'cloud'
            engine._postWorkletConfig()
        }
        if (ho && ho.length > 0) {
            this._shapeSolver.classifyObjects(ho)
            engine._enrichedObjects = this._shapeSolver.enrichedObjects
            engine._globalShapeActivations = this._shapeSolver.globalActivations
        } else {
            engine._enrichedObjects = []
            if (engine._globalShapeActivations) engine._globalShapeActivations.fill(0)
        }`;

  const newBlock = `        // ── Pitch-first shape classification from CQT data (main thread, no worklet overhead) ──
        const cqtMags = engine.getBinMagnitude?.() ?? null
        if (cqtMags && cqtMags.length > 0) {
            const result = this._shapeSolver.classifyCqtFrame(cqtMags)
            // Store per-bin shape arrays on AudioEngine for ParticleSystem access
            engine._binShapeData = result.binShapeData
            engine._binFundamentalHz = result.binFundamentalHz
            engine._binDominantValue = result.binDominantValue
            engine._globalShapeActivations = result.globalActivations
            engine._enrichedObjects = []  // no longer used, but keep for debug panel compat
        } else {
            engine._binShapeData = null
            engine._binFundamentalHz = null
            engine._binDominantValue = null
            if (engine._globalShapeActivations) engine._globalShapeActivations.fill(0)
            engine._enrichedObjects = []
        }`;

  c = c.replace(oldBlock, newBlock);

  writeFileSync(f, c);
  console.log('1. SeesoundEngine: switched to PitchFirstClassifier, removed worklet overhead');
}

// ════════════════════════════════════════════════════════════════
// 2. ParticleSystem: Replace shape variable reading with per-bin data
// ════════════════════════════════════════════════════════════════
{
  const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
  let c = readFileSync(f, 'utf8');

  // Replace the "Supervised NMF shape activations" block 
  const oldBlock = `        // ── Supervised NMF shape activations ──────────────────────
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
        }`;

  const newBlock = `        // ── Pitch-first shape classification ─────────────────────
        // Per-bin shape data is computed by PitchFirstClassifier from CQT data.
        // Each bin has its own 10-shape activation vector + fundamental frequency.
        {
            this._binShapeData = ae._binShapeData ?? null
            this._binFundamentalHz = ae._binFundamentalHz ?? null
            this._binDominantValue = ae._binDominantValue ?? null
            const gsa = ae.getGlobalShapeActivations?.()
            const shapeIds = ['shapeSine','shapeTriangle','shapeSawtooth','shapeSquare','shapeNoise','shapePinkNoise','shapeTransient','shapePad','shapeBuzzy','shapeBass']
            if (gsa) {
                for (let s = 0; s < shapeIds.length; s++) {
                    this['_' + shapeIds[s]] = gsa[s] || 0
                }
            }
            // Global dominant from global averages
            this._shapeDominant = 'Sine'
            this._shapeDominantValue = 0
            if (gsa) {
                for (let s = 0; s < shapeIds.length; s++) {
                    if (gsa[s] > this._shapeDominantValue) {
                        this._shapeDominantValue = gsa[s]
                        this._shapeDominant = shapeIds[s].substring(5)  // 'shapeSine' → 'Sine'
                    }
                }
            }
            // Also expose SHAPE_COUNT for per-bin access
            this._SHAPE_COUNT = 10
        }`;

  c = c.replace(oldBlock, newBlock);

  writeFileSync(f, c);
  console.log('2. ParticleSystem: switched to per-bin shape data');
}

// ════════════════════════════════════════════════════════════════
// 3. Update ShapeDebugPanel to read from PitchFirstClassifier
// ════════════════════════════════════════════════════════════════
{
  const f = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ui/ShapeDebugPanel.js';
  let c = readFileSync(f, 'utf8');
  
  // updateShapeDebugPanel already uses ae.getGlobalShapeActivations() — works fine
  // No changes needed

  console.log('3. ShapeDebugPanel: no changes needed (uses getGlobalShapeActivations)');
}

console.log('\nAll done. Run pnpm build.');
