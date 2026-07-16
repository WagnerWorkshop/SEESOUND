import { readFileSync, writeFileSync } from 'fs';

const file = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
let content = readFileSync(file, 'utf8');

// 1. Add import
content = content.replace(
  "import { EngineEvent, createDefaultConfig } from './types.js'",
  "import { EngineEvent, createDefaultConfig } from './types.js'\nimport { SupervisedNMF } from './audio/SupervisedNMF.js'"
);

// 2. Add _shapeSolver in constructor after _graphSolver
content = content.replace(
  'this._graphSolver = new GraphSolver()',
  'this._graphSolver = new GraphSolver()\n        /** @type {SupervisedNMF} */\n        this._shapeSolver = new SupervisedNMF()'
);

// 3. Add param subscription for shape settings
content = content.replace(
  "if (key === 'ruleLayers' || key === 'ruleGlobalBlocks' || key === 'ruleEngineEnabled') {",
  "if (key === 'shapeSparsityTopN' || key === 'shapeSmoothingAlpha') {\n                this._shapeSolver.setParams(params.shapeSparsityTopN, params.shapeSmoothingAlpha)\n            }\n            if (key === 'ruleLayers' || key === 'ruleGlobalBlocks' || key === 'ruleEngineEnabled') {"
);

// 4. Add shape classification in tick() after getHarmonicObjects
content = content.replace(
  'const harmonicObjects = engine.getHarmonicObjects?.() ?? null\n            const visibleCount = sys._visible_count || 0',
  `const harmonicObjects = engine.getHarmonicObjects?.() ?? null

            // ── Supervised NMF shape classification ──
            if (harmonicObjects && harmonicObjects.length > 0) {
                this._shapeSolver.classifyObjects(harmonicObjects)
                // Store enriched objects and global activations on AudioEngine for ParticleSystem access
                engine._enrichedObjects = this._shapeSolver.enrichedObjects
                engine._globalShapeActivations = this._shapeSolver.globalActivations
            } else {
                engine._enrichedObjects = []
                engine._globalShapeActivations.fill(0)
            }

            const visibleCount = sys._visible_count || 0`
);

writeFileSync(file, content);
console.log('SeesoundEngine.js: integrated SupervisedNMF');
