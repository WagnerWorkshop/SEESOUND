import { readFileSync, writeFileSync } from 'fs';

// ── RuleEditorPanel.js: Add 'shapeEntity' to layer type selector ──
const rePath = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ui/RuleEditorPanel.js';
let re = readFileSync(rePath, 'utf8');

re = re.replace(
    "{ value: 'line', label: UI_TEXT.rules?.shapeLine || 'Line' },\n        ], 'particle'))",
    "{ value: 'line', label: UI_TEXT.rules?.shapeLine || 'Line' },\n            { value: 'shapeEntity', label: UI_TEXT.rules?.shapeEntity || 'Shape Entity' },\n        ], 'particle'))"
);

writeFileSync(rePath, re);
console.log('RuleEditorPanel.js: added shapeEntity to type selector');

// ── ParamStore.js: Accept 'shapeEntity' as valid layerShapeType ──
const psPath = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/ParamStore.js';
let ps = readFileSync(psPath, 'utf8');

ps = ps.replace(
    "source.layerShapeType === 'line' || source.layerShapeType === 'camera' || source.layerShapeType === 'background')",
    "source.layerShapeType === 'line' || source.layerShapeType === 'shapeEntity' || source.layerShapeType === 'camera' || source.layerShapeType === 'background')"
);

writeFileSync(psPath, ps);
console.log('ParamStore.js: added shapeEntity to valid layerShapeTypes');

// ── UiText.js or en.json: Add shapeEntity label ──
const enPath = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/i18n/en.json';
let en = readFileSync(enPath, 'utf8');
const enJson = JSON.parse(en);

// Find the rules section and add shapeEntity label
if (enJson.uiText?.rules) {
    enJson.uiText.rules.shapeEntity = "Shape Entity";
}
// Also add to shapeType section if it exists
if (enJson.uiText?.rules?.shapeType === undefined) {
    // shapeType labels exist as individual entries
}

writeFileSync(enPath, JSON.stringify(enJson, null, 2) + '\n');
console.log('en.json: added shapeEntity label');

// ── SeesoundEngine.js: Accept shapeEntity in mode derivation ──
const sePath = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/SeesoundEngine.js';
let se = readFileSync(sePath, 'utf8');

// Find where layerShapeType === 'cloud' is checked for mode derivation
// shapeEntity should behave like cloud (entity mode) for rendering purposes
se = se.replace(
    "const hasCloud = renderLayers.some((e) => e?.layerShapeType === 'cloud')",
    "const hasCloud = renderLayers.some((e) => e?.layerShapeType === 'cloud' || e?.layerShapeType === 'shapeEntity')"
);

writeFileSync(sePath, se);
console.log('SeesoundEngine.js: shapeEntity treated like cloud for mode');
