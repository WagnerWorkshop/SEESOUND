import { readFileSync, writeFileSync } from 'fs';

const file = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
let content = readFileSync(file, 'utf8');

// 1. Remove iterative source variables from frameBinInputs
content = content.replace(
    `            // Iterative subtraction (time-domain source separation)
            iterativeSourceCount: this._iterSourceCount ?? 0,
            iterativeSourceF0: this._iterFirstF0 ?? 0,
            iterativeSourceVolume: this._iterFirstVol ?? 0,
            iterativeSourceCrest: this._iterFirstCrest ?? 0,
            iterativeSourceSymmetry: this._iterFirstSym ?? 0,`,
    `            // Shape activation variables (supervised NMF)
            shapeSine: 0,
            shapeTriangle: 0,
            shapeSawtooth: 0,
            shapeSquare: 0,
            shapeNoise: 0,
            shapePinkNoise: 0,
            shapeTransient: 0,
            shapePad: 0,
            shapeBuzzy: 0,
            shapeBass: 0,
            shapeDominant: 'Sine',
            shapeDominantValue: 0,`
);

// 2. Add shape activation population after frameBinInputs definition
// Find the line "let writeIndex" and add shape population before it
content = content.replace(
    `        let writeIndex = (persistMode === 1 && emitLightParticles)`,
    `        // ── Populate shape activations from AudioEngine ──
        const shapeActivations = ae.getGlobalShapeActivations?.()
        if (shapeActivations) {
            const shapeIds = ['shapeSine','shapeTriangle','shapeSawtooth','shapeSquare','shapeNoise','shapePinkNoise','shapeTransient','shapePad','shapeBuzzy','shapeBass']
            for (let s = 0; s < shapeIds.length; s++) {
                frameBinInputs[shapeIds[s]] = shapeActivations[s] || 0
            }
            // Dominant shape
            const enriched = ae.getEnrichedObjects?.()
            if (enriched && enriched.length > 0) {
                frameBinInputs.shapeDominant = enriched[0].dominantShape?.replace('shape','') || 'Sine'
                frameBinInputs.shapeDominantValue = enriched[0].dominantShapeValue || 0
            }
        }

        // ── Entity-mode shape-driven spawning (for cloud layers) ──
        const enrichedObjects = ae.getEnrichedObjects?.()
        if (enrichedObjects && enrichedObjects.length > 0 && this._activeEntityLayers?.length > 0) {
            // Spawn proxy particles for each enriched object (max 3 from sparsity gate)
            // These get picked up by cloud-layer entity rules
            this._shapeEntities = enrichedObjects.map(obj => ({
                fundamentalHz: obj.fundamentalHz || 440,
                dominantShape: obj.dominantShape || 'shapeSine',
                dominantShapeValue: obj.dominantShapeValue || 0,
                volume: obj.volume || 0,
                streamId: obj.streamId || 0,
                pitchClass: obj.pitchClass ?? 0,
                shapeActivations: obj.shapeActivations,
            }))
        } else {
            this._shapeEntities = []
        }

        let writeIndex = (persistMode === 1 && emitLightParticles)`
);

writeFileSync(file, content);
console.log('ParticleSystem.js: added shape activations + entity mode');
