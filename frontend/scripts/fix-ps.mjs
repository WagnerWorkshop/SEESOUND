import { readFileSync, writeFileSync } from 'fs';

const F = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParticleSystem.js';
let L = readFileSync(F, 'utf8').split('\r\n');

// 1. Remove iterative subtraction block — find the lines
let iterStart = -1, iterEnd = -1;
for (let i = 0; i < L.length; i++) {
    if (L[i].includes('// ── Iterative Subtraction (Time-Domain Source Separation) ──────')) {
        iterStart = i;
    }
    if (iterStart >= 0 && L[i].includes('Adjust Three.js blending mode')) {
        // Back up to the blank line + closing }
        iterEnd = i - 1;
        while (iterEnd > iterStart && L[iterEnd].trim() === '') iterEnd--;
        break;
    }
}
if (iterStart >= 0 && iterEnd > iterStart) {
    const count = iterEnd - iterStart + 1;
    L.splice(iterStart, count);
    console.log('Removed iterative block: ' + count + ' lines at ' + (iterStart + 1));
}

// 2. Replace iterativeSource entries in frameBinInputs with shape entries
for (let i = 0; i < L.length; i++) {
    if (L[i].includes('// Iterative subtraction (time-domain source separation)')) {
        // Replace the next 6 lines
        L.splice(i, 6,
            '            // Shape activation variables (supervised NMF)',
            '            shapeSine: this._shapeSine ?? 0,',
            '            shapeTriangle: this._shapeTriangle ?? 0,',
            '            shapeSawtooth: this._shapeSawtooth ?? 0,',
            '            shapeSquare: this._shapeSquare ?? 0,',
            '            shapeNoise: this._shapeNoise ?? 0,',
            '            shapePinkNoise: this._shapePinkNoise ?? 0,',
            '            shapeTransient: this._shapeTransient ?? 0,',
            '            shapePad: this._shapePad ?? 0,',
            '            shapeBuzzy: this._shapeBuzzy ?? 0,',
            '            shapeBass: this._shapeBass ?? 0,',
            '            shapeDominant: this._shapeDominant ?? \'Sine\',',
            '            shapeDominantValue: this._shapeDominantValue ?? 0,'
        );
        console.log('Replaced iterativeSource with shape entries at line ' + (i + 1));
        break;
    }
}

writeFileSync(F, L.join('\r\n'));
console.log('Done. Lines: ' + L.length);
