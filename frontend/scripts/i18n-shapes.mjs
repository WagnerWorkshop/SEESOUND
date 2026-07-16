import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const i18nBase = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/i18n';
const files = readdirSync(i18nBase).filter(f => f.endsWith('.json'));

const shapeLabels = {
    shapeSine: "Pure Sine",
    shapeTriangle: "Triangle Wave", 
    shapeSawtooth: "Sawtooth Wave",
    shapeSquare: "Square Wave",
    shapeNoise: "White Noise",
    shapePinkNoise: "Pink Noise",
    shapeTransient: "Sharp Transient",
    shapePad: "Warm Pad",
    shapeBuzzy: "Buzzy",
    shapeBass: "Sub Bass",
    shapeDominant: "Dominant Shape",
    shapeDominantValue: "Dominant Shape Value",
};

files.forEach(f => {
    let content = readFileSync(join(i18nBase, f), 'utf8');
    // Find the variables section - it's typically the last object before closing
    // Just parse, add, and re-stringify
    try {
        const json = JSON.parse(content);
        // Add shape variables to a ruleVariables section or similar
        // For now, add them as top-level entries or find the right section
        // Iterate through the JSON to find the input variable section
        if (json.ruleVariables?.inputs) {
            Object.assign(json.ruleVariables.inputs, shapeLabels);
        } else if (json.inputs) {
            Object.assign(json.inputs, shapeLabels);
        }
        // Also try common i18n patterns
        const output = JSON.stringify(json, null, 2) + '\n';
        writeFileSync(join(i18nBase, f), output);
        console.log('i18n/' + f + ': OK');
    } catch (e) {
        console.error('i18n/' + f + ': ERROR -', e.message);
        // Don't modify if parse fails
    }
});

console.log('i18n: shape variables added safely');
