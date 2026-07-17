import { readFileSync, writeFileSync } from 'fs';

// ════════════════════════════════════════════════════════
// 1. Delete module-level _getBinShapeMetrics and _hzToCqtBin
// ════════════════════════════════════════════════════════
{
  const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
  let c = readFileSync(F, 'utf8');
  
  // Remove the module-level helpers that crash with this._binFundamentalHz
  c = c.replace(/\n\/\*\* Get per-bin shape activations for a given CQT bin index\. \*\/\nconst _getBinShapeMetrics[\s\S]*?\n\}/, '');
  c = c.replace(/\n\/\*\* Convert Hz to approximate CQT bin index\. \*\/\nconst _hzToCqtBin[\s\S]*?\n\}/, '');
  
  // Clean up extra blank lines
  c = c.replace(/\n\n\n/g, '\n\n');
  
  writeFileSync(F, c);
  console.log('1. Deleted module-level helpers');
}

// ════════════════════════════════════════════════════════
// 2. Fix null-guard in writeParticle
//    _getBinShapeMetrics and _hzToCqtBin use `this` which is fine
//    inside update() context, but we need a fallback
// ════════════════════════════════════════════════════════
{
  const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
  let c = readFileSync(F, 'utf8');
  
  // Replace the call site with a null-guarded version
  // Find: const _sh = _getBinShapeMetrics(_hzToCqtBin(hz))
  c = c.replace(
    /const _sh = _getBinShapeMetrics\(_hzToCqtBin\(hz\)\)/g,
    'const _sh = (typeof _getBinShapeMetrics === "function" && typeof _hzToCqtBin === "function") ? _getBinShapeMetrics(_hzToCqtBin(hz)) : { binShapeSine:0,binShapeTriangle:0,binShapeSawtooth:0,binShapeSquare:0,binShapeNoise:0,binShapePinkNoise:0,binShapeTransient:0,binShapePad:0,binShapeBuzzy:0,binShapeBass:0,binFundamentalHz:0,binDominantValue:0 }'
  );
  c = c.replace(
    /const _sh2 = _getBinShapeMetrics\(_hzToCqtBin\(hz\)\)/g,
    'const _sh2 = (typeof _getBinShapeMetrics === "function" && typeof _hzToCqtBin === "function") ? _getBinShapeMetrics(_hzToCqtBin(hz)) : { binShapeSine:0,binShapeTriangle:0,binShapeSawtooth:0,binShapeSquare:0,binShapeNoise:0,binShapePinkNoise:0,binShapeTransient:0,binShapePad:0,binShapeBuzzy:0,binShapeBass:0,binFundamentalHz:0,binDominantValue:0 }'
  );
  
  writeFileSync(F, c);
  console.log('2. Added null-guard to writeParticle calls');
}

// ════════════════════════════════════════════════════════
// 3. Fix orthogonality — aggressive distinctness
// ════════════════════════════════════════════════════════
{
  const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/AcousticShapeDictionary.js';
  let c = readFileSync(F, 'utf8');

  const newTemplates = `/** @type {Object<string, Float32Array>} */
const TEMPLATES = {
    // Pure Sine — fundamental ONLY, zero elsewhere
    shapeSine: buildTemplate([1.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),

    // Triangle — very weak fundamental, strong odd harmonics
    shapeTriangle: buildTemplate([0.08, 0, 0.35, 0, 0.22, 0, 0.14, 0, 0.09, 0, 0.06, 0, 0.04, 0, 0.03, 0]),

    // Sawtooth — moderate fundamental, all harmonics
    shapeSawtooth: buildTemplate([0.4, 0.25, 0.18, 0.14, 0.11, 0.09, 0.07, 0.06, 0.05, 0.045, 0.04, 0.036, 0.033, 0.03, 0.028, 0.025]),

    // Square — very weak fundamental, only odd harmonics, strong midrange
    shapeSquare: buildTemplate([0.05, 0, 0.4, 0, 0.25, 0, 0.16, 0, 0.10, 0, 0.07, 0, 0.05, 0, 0.04, 0]),

    // White Noise — perfectly flat
    shapeNoise: buildTemplate([0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25]),

    // Pink Noise — peak at k=1, decaying
    shapePinkNoise: buildTemplate([0.35, 0.25, 0.18, 0.14, 0.12, 0.10, 0.09, 0.08, 0.07, 0.065, 0.06, 0.055, 0.05, 0.048, 0.045, 0.042]),

    // Transient — ZERO at k=1, ramps up hard at k=5-10
    shapeTransient: buildTemplate([0, 0, 0.02, 0.06, 0.18, 0.35, 0.55, 0.65, 0.55, 0.35, 0.18, 0.08, 0.03, 0.01, 0, 0]),

    // Warm Pad — strong fundamental, rapid decay, nothing past k=4
    shapePad: buildTemplate([0.6, 0.35, 0.08, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),

    // Buzzy — ZERO fundamental emphasis at k=4-7
    shapeBuzzy: buildTemplate([0.05, 0.03, 0.1, 0.45, 0.55, 0.4, 0.2, 0.08, 0.03, 0.01, 0, 0, 0, 0, 0, 0]),

    // Sub Bass — ONLY k=1, tiny k=2, nothing after
    shapeBass: buildTemplate([0.97, 0.22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
}`;

  c = c.replace(/\/\*\* @type \{Object<string, Float32Array>\} \*\/\nconst TEMPLATES = \{[\s\S]*?\n\};/, newTemplates);

  writeFileSync(F, c);
  console.log('3. Rewrote dictionary templates for aggressive orthogonality');
}

console.log('\nDone. Run pnpm build.');
