import { readFileSync, writeFileSync } from 'fs';

const dgPath = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/DependencyGraph.js';
let dg = readFileSync(dgPath, 'utf8');

const oldBrain = "pitchBrain: new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote'])";
const newBrain = "pitchBrain: new Set(['fundamentalHz', 'fundamentalPitch', 'fundamentalNote', 'shapeSine', 'shapeTriangle', 'shapeSawtooth', 'shapeSquare', 'shapeNoise', 'shapePinkNoise', 'shapeTransient', 'shapePad', 'shapeBuzzy', 'shapeBass', 'shapeDominant', 'shapeDominantValue'])";

if (dg.includes(oldBrain)) {
    dg = dg.replace(oldBrain, newBrain);
    writeFileSync(dgPath, dg);
    console.log('DependencyGraph.js: pitchBrain expanded to include shape vars');
} else {
    console.log('DependencyGraph.js: old pattern not found, checking current...');
    const idx = dg.indexOf('pitchBrain:');
    if (idx > 0) console.log(dg.substring(idx, idx + 200));
}
