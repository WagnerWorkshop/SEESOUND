/**
 * Second pass: catch remaining "entity" occurrences the regex missed.
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

const replacements = [
  // Property name on layer wrapper: .entity → .data
  [/\blayer\.entity\b/g, 'layer.data', 'layer.entity→layer.data'],

  // Owner type string
  [/'entity'/g, "'layer'", "'entity'→'layer'"],
  [/"entity"/g, '"layer"', '"entity"→"layer"'],

  // Functions
  [/\bgetActiveEntityShapeType\(\)/g, 'getActiveLayerShapeType()', 'getActiveEntityShapeType'],
  [/\b_coerceRuleEntity\b/g, '_coerceRuleLayer', '_coerceRuleEntity'],

  // CSS: cp-entity-creation-... (no -styles- prefix)
  [/cp-entity-creation-panel/g, 'cp-layer-creation-panel', 'cp-entity-creation-panel'],
  [/cp-entity-creation-header/g, 'cp-layer-creation-header', 'cp-entity-creation-header'],
  [/cp-entity-creation-title/g, 'cp-layer-creation-title', 'cp-entity-creation-title'],
  [/cp-entity-creation-body/g, 'cp-layer-creation-body', 'cp-entity-creation-body'],
  [/cp-entity-creation-close/g, 'cp-layer-creation-close', 'cp-entity-creation-close'],

  // Comments containing "entity" → "layer"
  // These are trickier — we do comment-like patterns
  [/\/\/.*\bentity\b/g, (match) => match.replace(/\bentity\b/g, (m) => m === 'entity' ? 'layer' : m), 'entity in comments'],
  [/\/\*[\s\S]*?\*\//g, (match) => match.replace(/\bentity\b/g, (m) => m === 'entity' ? 'layer' : m), 'entity in block comments'],
];

// Second pass: more targeted
const replacements2 = [
  // CSS entity classes that don't have -styles- prefix
  [/\bentity-creation\b/g, 'layer-creation', 'entity-creation→layer-creation'],
  [/\bEntity Variables\b/g, 'Layer Variables', 'Entity Variables label'],
  [/\b'entity'\b/g, "'layer'", "'entity' string"],
  [/"entity"/g, '"layer"', '"entity" string double'],
  [/\bgetActiveEntity\b/g, 'getActiveLayer', 'getActiveEntity'],
  [/\b_coerceRuleEntity\b/g, '_coerceRuleLayer', '_coerceRuleEntity'],
  [/\blayer\.entity\b/g, 'layer.data', 'layer.entity→layer.data'],
  // CSS class with entity-creation
  [/cp-entity-creation/g, 'cp-layer-creation', 'cp-entity-creation→cp-layer-creation'],
  // group === 'entity' → group === 'layer'
  [/\bgroup\s*===\s*'entity'/g, "group === 'layer'", "group==='entity'"],
  [/\bgroup\s*===\s*\"entity\"/g, 'group === "layer"', 'group==="entity"'],
  [/\binputMeta\?\.group\s*===\s*'entity'/g, "inputMeta?.group === 'layer'", "inputMeta?.group==='entity'"],
];

let grandTotal = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let fileChanges = 0;
  const ops = [];

  for (const [pattern, replacement, desc] of replacements2) {
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
    console.log(`  ${path.relative(srcDir, file)}: ${fileChanges} changes (${ops.join(', ')})`);
  }
}

console.log(`\nSecond pass total: ${grandTotal} replacements`);
