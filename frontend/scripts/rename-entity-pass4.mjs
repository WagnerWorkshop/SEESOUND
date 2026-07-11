/**
 * Final pass: fix remaining entity occurrences in specific files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '..', 'src');

// Fix LayerManager.js
let lm = fs.readFileSync(path.join(srcDir, 'engine', 'LayerManager.js'), 'utf8');
lm = lm.replace(/l\.entity\?\./g, 'l.data?.');
lm = lm.replace(/l\.entity\./g, 'l.data.');
lm = lm.replace(/_lastEntityHash/g, '_lastLayersHash');
lm = lm.replace(/\bconst entity of sorted\b/g, 'const layerObj of sorted');
lm = lm.replace(/entity\.id \?\? entity\.name/g, 'layerObj.id ?? layerObj.name');
lm = lm.replace(/entity\.layerType/g, 'layerObj.layerType');
lm = lm.replace(/{ data: entity, ps }/g, '{ data: layerObj, ps }');
lm = lm.replace(/entity\.enabled ===/g, 'layerObj.enabled ===');
lm = lm.replace(/ruleLayers: \[entity\]/g, 'ruleLayers: [layerObj]');
lm = lm.replace(/layer\.data = entity/g, 'layer.data = layerObj');
lm = lm.replace(/entity\/layer/g, 'layer');
// Type definition
lm = lm.replace(/{\s*entity:\s*object,\s*ps:\s*ParticleSystem\s*}/g, '{ data: object, ps: ParticleSystem }');
// Comment line
lm = lm.replace(/\/\/ New entity/g, '// New layer');
lm = lm.replace(/\/\/ Index existing layers by entity/g, '// Index existing layers by layer');
fs.writeFileSync(path.join(srcDir, 'engine', 'LayerManager.js'), 'utf8', lm);
console.log('LayerManager.js fixed');

// Fix RuleEditorPanel.js
let rep = fs.readFileSync(path.join(srcDir, 'engine', 'ui', 'RuleEditorPanel.js'), 'utf8');
rep = rep.replace(/const entity = getRuleLayers\(\)\.find\(\(entry\)/g, (m) => m.replace('entity', 'layer'));
rep = rep.replace(/if \(!entity\) return/g, 'if (!layer) return');
rep = rep.replace(/if \(entity\?\.layerShapeType/g, 'if (layer?.layerShapeType');
rep = rep.replace(/return entity\?\.layerShapeType/g, 'return layer?.layerShapeType');
rep = rep.replace(/return entity\?\.spacingMode/g, 'return layer?.spacingMode');
rep = rep.replace(/return entity\?\.cloudShape/g, 'return layer?.cloudShape');
// entity variables comments
rep = rep.replace(/entity variables are cloud-only/g, 'layer variables are cloud-only');
rep = rep.replace(/per-bin \+ entity \+ overall/g, 'per-bin + layer + overall');
rep = rep.replace(/per-bin \+ entity/g, 'per-bin + layer');
// entity- template strings
rep = rep.replace(/entity-\$\{Date\.now/gs, (m) => m.replace('entity', 'layer'));
rep = rep.replace(/entity-\$\{index/g, (m) => m.replace('entity', 'layer'));
// Spread operators
rep = rep.replace(/\.\.\.entity,/g, '...layer,');
// Property access
rep = rep.replace(/\bentity\.rules\b/g, 'layer.rules');
rep = rep.replace(/\bentity\.id\b/g, 'layer.id');
rep = rep.replace(/\bentity\.name\b/g, 'layer.name');
rep = rep.replace(/\bentity\.audioTrackId\b/g, 'layer.audioTrackId');
rep = rep.replace(/\bentity\.definitions\b/g, 'layer.definitions');
rep = rep.replace(/\bentity\.enabled\b/g, 'layer.enabled');
fs.writeFileSync(path.join(srcDir, 'engine', 'ui', 'RuleEditorPanel.js'), rep, 'utf8');
console.log('RuleEditorPanel.js fixed');

// Fix ParamStore.js
let ps = fs.readFileSync(path.join(srcDir, 'engine', 'ParamStore.js'), 'utf8');
ps = ps.replace(/\.map\(\(entity\)/g, '.map((layer)');
ps = ps.replace(/return \.\.\.entity,/g, 'return { ...layer,');
ps = ps.replace(/return entity;/g, 'return layer;');
fs.writeFileSync(path.join(srcDir, 'engine', 'ParamStore.js'), ps, 'utf8');
console.log('ParamStore.js fixed');

// Fix SeesoundEngine.js
let se = fs.readFileSync(path.join(srcDir, 'engine', 'SeesoundEngine.js'), 'utf8');
se = se.replace(/entity\/global rules/g, 'layer/global rules');
se = se.replace(/entity settings/g, 'layer settings');
se = se.replace(/entity structure/g, 'layer structure');
se = se.replace(/entity params/g, 'layer params');
se = se.replace(/'EMPTY entity='/g, "'EMPTY layer='");
se = se.replace(/'entity='/g, "'layer='");
fs.writeFileSync(path.join(srcDir, 'engine', 'SeesoundEngine.js'), se, 'utf8');
console.log('SeesoundEngine.js fixed');

console.log('All remaining entity references fixed');
