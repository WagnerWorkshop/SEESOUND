import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const base = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine';

// ── DependencyGraph.js ──
let dg = readFileSync(join(base, 'DependencyGraph.js'), 'utf8');

// Add shape variables to MODE_GATED_VARS (after the iterative vars were removed)
const shapeVars = [
    'shapeSine', 'shapeTriangle', 'shapeSawtooth', 'shapeSquare',
    'shapeNoise', 'shapePinkNoise', 'shapeTransient', 'shapePad',
    'shapeBuzzy', 'shapeBass', 'shapeDominant', 'shapeDominantValue',
];
const modeGateEntries = shapeVars.map(v => `    ['${v}', new Set(['particle', 'cloud', 'tracing', 'lines'])],`).join('\n');

// Insert after the iterative-block removal point (before 'isFundamental' comment)
dg = dg.replace(
    "    // isFundamental is legal in all modes",
    `${modeGateEntries}\n    // Shape activation variables — available in all modes\n    // isFundamental is legal in all modes`
);

// Add needShapeActivations to ENGINE_FEATURE_TRIGGERS
dg = dg.replace(
    "    needChromagram: new Set(['chromagram']),",
    "    needChromagram: new Set(['chromagram']),\n    needShapeActivations: new Set(['shapeSine', 'shapeTriangle', 'shapeSawtooth', 'shapeSquare', 'shapeNoise', 'shapePinkNoise', 'shapeTransient', 'shapePad', 'shapeBuzzy', 'shapeBass', 'shapeDominant', 'shapeDominantValue']),"
);

// Add shapeDominant to BRAIN_TRIGGERS or leave as engine-side
// (Shape activation runs on main thread, not in worklet, so no brain trigger needed)

writeFileSync(join(base, 'DependencyGraph.js'), dg);
console.log('DependencyGraph.js: added shape variables');

// ── RuleDictionary.js ──
let rd = readFileSync(join(base, 'rules/RuleDictionary.js'), 'utf8');

// Add shape variables to _INPUT_RANGES
const shapeRanges = shapeVars.map(v => {
    if (v === 'shapeDominant') return `    ${v}: ['Sine','Triangle','Sawtooth','Square','Noise','PinkNoise','Transient','Pad','Buzzy','Bass'],`;
    return `    ${v}: [0, 1],`;
}).join('\n');

// Insert after componentBinEnergy
rd = rd.replace(
    "    componentBinEnergy: [0, 1],",
    `    componentBinEnergy: [0, 1],\n    // Shape activation variables\n${shapeRanges}`
);

// Add to _INPUT_MODES
const shapeModes = shapeVars.map(v => `    ${v}: ['particle', 'cloud', 'tracing', 'lines'],`).join('\n');
rd = rd.replace(
    "    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines'],",
    `    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines'],\n    // Shape activation variables\n${shapeModes}`
);

// Add per-object cloud variables
const objVars = ['objectFundamentalHz', 'objectShapeSine', 'objectShapeTriangle', 'objectShapeSawtooth',
    'objectShapeSquare', 'objectShapeNoise', 'objectShapePinkNoise', 'objectShapeTransient',
    'objectShapePad', 'objectShapeBuzzy', 'objectShapeBass', 'objectDominantShape', 'objectVolume'];
const objRanges = objVars.map(v => {
    if (v === 'objectDominantShape') return `    ${v}: ['Sine','Triangle','Sawtooth','Square','Noise','PinkNoise','Transient','Pad','Buzzy','Bass'],`;
    if (v === 'objectFundamentalHz') return `    ${v}: [0, 22050],`;
    return `    ${v}: [0, 1],`;
}).join('\n');
const objModes = objVars.map(v => `    ${v}: ['cloud'],`).join('\n');

rd = rd.replace(
    "    componentBinEnergy: [0, 1],",
    `    componentBinEnergy: [0, 1],\n    // Shape activation variables\n${shapeRanges}\n    // Per-object variables (cloud mode only)\n${objRanges}`
);

rd = rd.replace(
    "    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines'],",
    `    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines'],\n    // Shape activation variables\n${shapeModes}\n    // Per-object variables (cloud mode only)\n${objModes}`
);

writeFileSync(join(base, 'rules/RuleDictionary.js'), rd);
console.log('RuleDictionary.js: added shape + per-object variables');

// ── ParamStore.js ──
let ps = readFileSync(join(base, 'ParamStore.js'), 'utf8');

// Add shapeSparsityTopN and shapeSmoothingAlpha params
// Insert before the closing of PARAMS_BASE array (before the last element which is timeMode)
ps = ps.replace(
    "        key: 'timeMode', group: 'mixing', label: 'Time Mode',",
    `        key: 'shapeSparsityTopN', group: 'inputProcessing', label: 'Shape Sparsity Top N',
        min: 1, max: 10, step: 1, default: 3, unit: '',
        desc: 'Number of dominant shapes to keep per frame. Prevents visual mud during complex audio.',
        isDropdown: true,
        dropdownOptions: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '5', value: 5 },
            { label: 'All (10)', value: 10 },
        ],
    },
    {
        key: 'shapeSmoothingAlpha', group: 'inputProcessing', label: 'Shape Smoothing',
        min: 0.05, max: 0.5, step: 0.01, default: 0.18, unit: '',
        desc: 'EMA smoothing for shape activations. Lower = smoother, less responsive.',
        canDisable: false,
    },
    {
        key: 'timeMode', group: 'mixing', label: 'Time Mode',`
);

writeFileSync(join(base, 'ParamStore.js'), ps);
console.log('ParamStore.js: added shape params');

// ── i18n files ──
const i18nBase = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/i18n';
const files = readdirSync(i18nBase).filter(f => f.endsWith('.json'));

files.forEach(f => {
    let content = readFileSync(join(i18nBase, f), 'utf8');
    // Add shape variable labels near existing variable entries
    // Find the last entry in the variables section and add shape vars
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

    // Insert before the closing of the variable section
    let entries = '';
    for (const [key, label] of Object.entries(shapeLabels)) {
        if (content.includes(`"${key}"`)) continue; // skip if already exists
        entries += `,\n    "${key}": "${label}"`;
    }

    // Find the last variable entry before a closing brace
    content = content.replace(/(\n)(\s*\})/, entries + '\n$1$2');
    writeFileSync(join(i18nBase, f), content);
    console.log('i18n/' + f + ': added shape variables');
});

console.log('Phase 3 integration complete!');
