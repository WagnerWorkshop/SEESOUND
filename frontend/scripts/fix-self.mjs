import { readFileSync, writeFileSync } from 'fs';

const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
let c = readFileSync(F, 'utf8');

// Fix `self` → `this` in the newly inserted helpers
c = c.replace(/self\._binShapeData/g, 'this._binShapeData');
c = c.replace(/self\._binFundamentalHz/g, 'this._binFundamentalHz');
c = c.replace(/self\._binDominantValue/g, 'this._binDominantValue');
c = c.replace(/self\._SHAPE_COUNT/g, 'this._SHAPE_COUNT');

writeFileSync(F, c);
console.log('Fixed self -> this in helpers');
