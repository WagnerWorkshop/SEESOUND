/**
 * Third pass: comprehensive entity→layer/object cleanup.
 * Handles loop variables, property names, comments, etc.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '..', 'src');

const allFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(js|css|json)$/.test(entry.name)) allFiles.push(full);
  }
}
walk(srcDir);

// File-specific replacement sets
const fileReplacements = {
  // LayerManager.js — the entity property on wrappers
  'engine\\LayerManager.js': [
    // Construction of layer wrapper
    [/entity, ps\b/g, 'data: entity, ps', 'entity, ps in layer'],
    [/layer\.data = entity/g, 'layer.data = entity', 'keep as-is'],
    [/{ entity: \{\}, ps/g, '{ data: {}, ps', 'entity: {}->data: {}'],
    [/Cache of last entity hash/g, 'Cache of last layers hash', 'comment'],
    [/\/\/ entity\/layer/g, '// layer', 'comment'],
    [/entity id\/name/g, 'layer id/name', 'comment'],
    [/\/\/ New entity/g, '// New layer', 'comment'],
    [/entity ref/g, 'layer ref', 'comment'],
    [/on same entity/g, 'on same layer', 'comment'],
  ],

  // RuleCompiler.js — loop variables
  'engine\\rules\\RuleCompiler.js': [
    [/\bentity\.definitions\b/g, 'layer.definitions', 'entity.definitions'],
    [/\bentity\.rules\b/g, 'layer.rules', 'entity.rules'],
    [/\bentity\.enabled\b/g, 'layer.enabled', 'entity.enabled'],
    [/\bentity\.id\b/g, 'layer.id', 'entity.id'],
    [/\bentity\.name\b/g, 'layer.name', 'entity.name'],
    // The forEach variable name
    [/(\bordered\.forEach\()(\()?(\s*)(entity)/g, '$1$2$3layer', 'entity var in forEach'],
    [/(if\s*\()\s*(!entity|\|\||&&)/g, (m, start, rest) => m.replace('entity', 'layer'), 'entity in if'],
    [/(!\s*entity\b)/g, '!layer', '!entity'],
    [/(entity\s*\|\|)/g, 'layer ||', 'entity ||'],
    [/(\|\|\s*entity\b)/g, '|| layer', '|| entity'],
    [/(typeof\s+entity\b)/g, 'typeof layer', 'typeof entity'],
  ],

  // ParamStore.js — loop variables and function
  'engine\\ParamStore.js': [
    // _splitLegacyRuleBlocks uses entity as var
    [/\bconst entity = _coerceRuleLayer/g, 'const layer = _coerceRuleLayer', 'entity var'],
    [/\bentities:\s*\[entity\]/g, 'layers: [layer]', 'entities: [entity]'],
    [/ordered\.forEach\(\(entity/g, 'ordered.forEach((layer', 'entity var forEach'],
    [/\bentity\.rules\b/g, 'layer.rules', 'entity.rules in forEach'],
    [/\bentity\.id\b/g, 'layer.id', 'entity.id'],
    [/\bentity\.name\b/g, 'layer.name', 'entity.name'],
    [/\bentity\.enabled\b/g, 'layer.enabled', 'entity.enabled'],
    [/typeof entity !==/g, 'typeof layer !==', 'typeof entity'],
    [/\bentity\b(?=\s*\|\|)/g, 'layer', 'entity || ...'],
    [/if \(!entity\b/g, 'if (!layer', 'if (!entity'],
    [/\bentity === undefined\b/g, 'layer === undefined', 'entity === undefined'],
    // The ruleEntities function uses entities = [] and .forEach(entity ...)
    // These need careful handling
    // Also the _coerceRuleLayer function already renamed
    // Comment fixes  
    [/entity rules, and/g, 'layer rules, and', 'comment'],
    [/entity-level rules/g, 'layer-level rules', 'comment'],
    [/entity settings/g, 'layer settings', 'comment'],
    [/: `entity-\${/g, ': `layer-${', 'entity- template string'],
    // Rule entity variable group
    [/object with entity-level/g, 'object with layer-level', 'comment'],
  ],

  // RuleEditorPanel.js — the big one
  'engine\\ui\\RuleEditorPanel.js': [
    // CSS class
    [/is-entity-owner/g, 'is-layer-owner', 'is-entity-owner class'],
    // activeOwner type
    [/'entity'/g, "'layer'", "'entity' string"],
    [/"entity"/g, '"layer"', '"entity" string dq'],
    // Function call rename
    [/\bgetActiveEntityShapeType\b/g, 'getActiveLayerShapeType', 'getActiveEntityShapeType'],
    // The entity variable in forEach loops
    [/\bentities\.forEach\(\(entity/g, 'layers.forEach((layer', 'entities.forEach entity'],
    [/\bentities\.find\(\(entity/g, 'layers.find((layer', 'entities.find entity'],
    [/\bentities\.map\(\(entity/g, 'layers.map((layer', 'entities.map entity'],
    [/\bentities\.filter\(\(entry/g, 'layers.filter((entry', 'entities.filter entry'],
    [/\bentities\[0\]/g, 'layers[0]', 'entities[0]'],
    // The variable that holds getRuleLayers() result
    [/\bconst entities\b(?=\s*=\s*getRuleLayers)/g, 'const layers', 'const entities = getRuleLayers'],
    [/\bconst entities\b(?=\s*=\s*\[\.\.\.getRuleLayers)/g, 'const layers', 'const entities = [...getRuleLayers]'],
    // Then entity.property → layer.property (for the loop variable)
    [/\.entityShapeType\b/g, '.layerShapeType', '.entityShapeType leftover'],
    [/\bentity\.id\b/g, 'layer.id', 'entity.id'],
    [/\bentity\.name\b/g, 'layer.name', 'entity.name'],
    [/\bentity\.enabled\b/g, 'layer.enabled', 'entity.enabled'],
    [/\bentity\.layerType\b/g, 'layer.layerType', 'entity.layerType'],
    [/\bentity\.layerShapeType\b/g, 'layer.layerShapeType', 'entity.layerShapeType'],
    [/\bentity\.spacingMode\b/g, 'layer.spacingMode', 'entity.spacingMode'],
    [/\bentity\.cloudShape\b/g, 'layer.cloudShape', 'entity.cloudShape'],
    [/\bentity\.audioTrackId\b/g, 'layer.audioTrackId', 'entity.audioTrackId'],
    [/\bentity\.definitions\b/g, 'layer.definitions', 'entity.definitions'],
    [/\bentity\.rules\b/g, 'layer.rules', 'entity.rules'],
    // Fallback text
    [/`Entity \$\{/g, '`Layer ${', 'Entity in template string'],
  ],

  // SeesoundEngine.js
  'engine\\SeesoundEngine.js': [
    [/(\bordered\.forEach\()\(entity/g, '$1(layer', 'entity var in forEach'],
    [/\bentity\.name\b/g, 'layer.name', 'entity.name'],
    [/\bentity\.id\b/g, 'layer.id', 'entity.id'],
    [/\bentity\.layerShapeType\b/g, 'layer.layerShapeType', 'entity.layerShapeType'],
    [/\bentity\.enabled\b/g, 'layer.enabled', 'entity.enabled'],
    [/\bentity\.definitions\b/g, 'layer.definitions', 'entity.definitions'],
    [/\bentity\.rules\b/g, 'layer.rules', 'entity.rules'],
    [/typeof entity !==/g, 'typeof layer !==', 'typeof entity'],
    [/if \(!entity/g, 'if (!layer', 'if (!entity'],
  ],

  // ControlPanel.js
  'engine\\ControlPanel.js': [
    [/\bgetRuleVariablesByGroup\('entity'\)/g, "getRuleVariablesByGroup('layer')", "byGroup('entity')"],
    [/\bgetRuleVariablesByGroup\\(\"entity\"\\)/g, 'getRuleVariablesByGroup("layer")', 'byGroup("entity")'],
  ],

  // types.js
  'engine\\types.js': [
    [/\bentity metadata\b/g, 'layer metadata', 'comment'],
    [/\bOwning entity\b/g, 'Owning layer', 'comment'],
    [/.*`direct`.*entity.*xyz.*rules\./g, (m) => m.replace('entity', 'layer'), 'comment in types'],
    [/\bentity xyz/g, 'layer xyz', 'comment'],
  ],

  // DependencyGraph.js
  'engine\\DependencyGraph.js': [
    [/\bentity-level variables\b/g, 'layer-level variables', 'comment'],
    [/\bentity variable\b/g, 'layer variable', 'comment'],
  ],

  // en.json
  'i18n\\en.json': [
    [/"entity"/g, '"layer"', 'entity key'],
    [/"entity_window/g, '"audio_object_window', 'entity window'],
    [/entity window/g, 'audio object', 'entity window description'],
    [/of the entity/g, 'of the audio object', 'of the entity'],
    [/the entity began/g, 'the audio object began', 'entity began'],
    [/entity began/g, 'object began', 'entity began'],
  ],

  // main.js
  'main.js': [
    [/entity definitions/g, 'layer definitions', 'comment'],
  ],

  // MenuSettings.js
  'engine\\ui\\MenuSettings.js': [
    [/\bentity settings\b/g, 'layer settings', 'comment'],
    [/\bentity type\b/g, 'layer type', 'comment'],
  ],

  // RuleDictionary.js
  'engine\\rules\\RuleDictionary.js': [
    [/\bentity variables\b/g, 'layer variables', 'comment'],
  ],

  // ParticleSystem.js — comments only
  'engine\\ParticleSystem.js': [
    [/\bentity centroid\b/g, 'layer centroid', 'comment'],
    [/\bCompute entity\b/g, 'Compute layer', 'comment'],
  ],

  // BinAnalysisWorklet.js
  'engine\\audio\\BinAnalysisWorklet.js': [
    [/entity-level metrics/g, 'object-level holistic metrics', 'comment'],
  ],
};

let grandTotal = 0;
const fileStats = [];

for (const file of allFiles) {
  const rel = path.relative(srcDir, file);
  const rules = fileReplacements[rel];
  if (!rules) continue;

  let content = fs.readFileSync(file, 'utf8');
  let fileChanges = 0;
  const ops = [];

  for (const [pattern, replacement, desc] of rules) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      const count = ((content.match(pattern) || []).length);
      fileChanges += count;
      grandTotal += count;
      ops.push(`${desc}: ${count}`);
      content = newContent;
    }
  }

  if (fileChanges > 0) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  ${rel}: ${fileChanges} changes (${ops.join(', ')})`);
    fileStats.push(`${rel}: ${fileChanges}`);
  }
}

console.log(`\nThird pass total: ${grandTotal} replacements across ${fileStats.length} files`);
for (const s of fileStats) console.log(`  ${s}`);
