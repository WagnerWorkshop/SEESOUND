/**
 * Rename all "entity" occurrences in the codebase.
 * - entity (rule layers) → layer
 * - entity (worklet holistic metrics) → object
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

// Replacements: [searchPattern, replacement, description]
// ORDER MATTERS — more specific patterns first
const replacements = [
  // ── Category 1: entity (layer) → layer ──

  // Rule system
  [/ruleEntities/g, 'ruleLayers', 'ruleEntities→ruleLayers'],

  // Property: entityShapeType → layerShapeType
  [/\.entityShapeType/g, '.layerShapeType', '.entityShapeType→.layerShapeType'],
  [/\bentityShapeType\b/g, 'layerShapeType', 'entityShapeType→layerShapeType'],

  // Function calls
  [/\bgetRuleEntities\(\)/g, 'getRuleLayers()', 'getRuleEntities()→getRuleLayers()'],
  [/\bsetRuleEntities\(/g, 'setRuleLayers(', 'setRuleEntities(→setRuleLayers('],

  // Variable names
  [/\bentityRules\b/g, 'layerRules', 'entityRules→layerRules'],
  [/\bentityPayload\b/g, 'layerPayload', 'entityPayload→layerPayload'],
  [/\bentityIndex\b/g, 'layerIndex', 'entityIndex→layerIndex'],
  [/\benabledEntities\b/g, 'enabledLayers', 'enabledEntities→enabledLayers'],
  [/\brenderEntities\b/g, 'renderLayers', 'renderEntities→renderLayers'],

  // DOM elements
  [/\bentityList\b(?!\s*\.label)/g, 'layerList', 'entityList→layerList'],
  [/\bentityListFooter\b/g, 'layerListFooter', 'entityListFooter→layerListFooter'],
  [/\bentityGroup\b/g, 'layerGroup', 'entityGroup→layerGroup'],

  // Definition filters
  [/\bentityShapes\b/g, 'layerShapes', 'entityShapes→layerShapes'],
  [/\bentityExclude\b/g, 'layerExclude', 'entityExclude→layerExclude'],

  // Rule metadata
  [/\bentityId\b/g, 'layerId', 'entityId→layerId'],
  [/\bentityName\b/g, 'layerName', 'entityName→layerName'],

  // CSS classes
  [/cp-styles-entity-list-footer/g, 'cp-styles-layer-list-footer', 'cp-styles-entity-list-footer'],
  [/cp-styles-entity-list/g, 'cp-styles-layer-list', 'cp-styles-entity-list'],
  [/cp-styles-entity-row/g, 'cp-styles-layer-row', 'cp-styles-entity-row'],
  [/cp-styles-entity-badge/g, 'cp-styles-layer-badge', 'cp-styles-entity-badge'],
  [/cp-styles-entity-name/g, 'cp-styles-layer-name', 'cp-styles-entity-name'],
  [/cp-styles-entity-info/g, 'cp-styles-layer-info', 'cp-styles-entity-info'],
  [/cp-styles-entity-creation/g, 'cp-styles-layer-creation', 'cp-styles-entity-creation'],

  // Default layer ID string
  [/'entity-all'/g, "'layer-all'", "entity-all"],
  [/"entity-all"/g, '"layer-all"', 'entity-all (double-quote)'],

  // uiText keys
  [/entities\\\"/g, 'layers\\\"', "uiText entities"],
  [/\bentityName\\\"/g, 'layerName\\\"', "uiText entityName"],
  [/\bentityVariables\\\"/g, 'layerVariables\\\"', "uiText entityVariables"],
  [/\baddEntity\\\"/g, 'addLayer\\\"', "uiText addEntity"],
  [/\beditEntity\\\"/g, 'editLayer\\\"', "uiText editEntity"],
  [/\bremoveEntity\\\"/g, 'removeLayer\\\"', "uiText removeEntity"],
  [/\bnewEntity\\\"/g, 'newLayer\\\"', "uiText newEntity"],

  // UI text labels (in en.json etc)
  [/"entityName"/g, '"layerName"', 'JSON key entityName'],
  [/"entityVariables"/g, '"layerVariables"', 'JSON key entityVariables'],
  [/"addEntity"/g, '"addLayer"', 'JSON key addEntity'],
  [/"editEntity"/g, '"editLayer"', 'JSON key editEntity'],
  [/"removeEntity"/g, '"removeLayer"', 'JSON key removeEntity'],
  [/"newEntityPrompt"/g, '"newLayerPrompt"', 'JSON key newEntityPrompt'],
  [/"entityVariables"/g, '"layerVariables"', 'JSON key entityVariables (ruleVariables group)'],

  // ── Category 2: entity (worklet holistic metrics) → object ──
  [/\bentityCentroid\b/g, 'objectCentroid', 'entityCentroid→objectCentroid'],
  [/\bentityFlatness\b/g, 'objectFlatness', 'entityFlatness→objectFlatness'],
  [/\bentityInharmonicity\b/g, 'objectInharmonicity', 'entityInharmonicity→objectInharmonicity'],
  [/\bentityVolume\b/g, 'objectVolume', 'entityVolume→objectVolume'],
  [/\bentityAge\b/g, 'objectAge', 'entityAge→objectAge'],
  [/'entityMetrics'/g, "'objectMetrics'", 'entityMetrics msg type'],
  [/"entityMetrics"/g, '"objectMetrics"', 'entityMetrics msg type dq'],
  [/\b_entityAgeMs\b/g, '_objectAgeMs', '_entityAgeMs'],
  [/\bentityAgeSec\b/g, 'objectAgeSec', 'entityAgeSec'],

  // Labels in en.json ruleVariables
  [/"Entity Centroid"/g, '"Audio Object Centroid"', 'label'],
  [/"Entity Flatness"/g, '"Audio Object Flatness"', 'label'],
  [/"Entity Inharmonicity"/g, '"Audio Object Inharmonicity"', 'label'],
  [/"Entity Volume"/g, '"Audio Object Volume"', 'label'],
  [/"Entity Age"/g, '"Audio Object Age"', 'label'],
  [/"entityCentroid"/g, '"objectCentroid"', 'JSON key entityCentroid'],
  [/"entityFlatness"/g, '"objectFlatness"', 'JSON key entityFlatness'],
  [/"entityInharmonicity"/g, '"objectInharmonicity"', 'JSON key entityInharmonicity'],
  [/"entityVolume"/g, '"objectVolume"', 'JSON key entityVolume'],
  [/"entityAge"/g, '"objectAge"', 'JSON key entityAge'],
];

// Also do replacements in ParamStore.js specifically for the output key
const extraReplacements = [
  // ParamStore output uses ruleLayers
  [/\bout\.ruleLayers\b/g, 'out.ruleLayers', ''],
  [/\bsaved\.ruleLayers\b/g, 'saved.ruleLayers', ''],
];

let grandTotal = 0;
const fileRecords = [];

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let fileChanges = 0;
  const fileOps = [];

  for (const [pattern, replacement, desc] of replacements) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      const count = ((content.match(pattern) || []).length);
      fileChanges += count;
      grandTotal += count;
      fileOps.push(`${desc}: ${count}`);
      content = newContent;
    }
  }

  if (fileChanges > 0) {
    fs.writeFileSync(file, content, 'utf8');
    fileRecords.push(`${path.relative(srcDir, file)}: ${fileChanges} changes (${fileOps.join(', ')})`);
    console.log(`  ${path.relative(srcDir, file)}: ${fileChanges} changes`);
  }
}

console.log(`\nTotal: ${grandTotal} replacements across ${fileRecords.length} files`);
for (const r of fileRecords) console.log(`  ${r}`);
