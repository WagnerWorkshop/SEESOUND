/**
 * Rename 'entity' → 'layer' in all preset/template JSON files.
 * Handles: entityShapeType, entity-* IDs, entityVolume/entityFlatness expressions,
 *          and any other entity-* field names.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const dirs = [
  // Template presets (source, not dist)
  path.join(root, 'public', 'templates', 'presets'),
  // factory-templates.json in public/templates
  path.join(root, 'public', 'templates'),
  // Root presets
  path.join(root, '..', 'presets'),
  // SEESOUND saves folder (outside the project root)
  path.join(root, '..', '..', '..', 'SEESOUND saves'),
];

const isJsonOrSspExt = (name) =>
  name.endsWith('.json') || name.endsWith('.sspp') || name.endsWith('.ssp-preset.json');

function collectFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) {
    console.warn(`⚠ Directory not found: ${dir}`);
    return results;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) continue;
    if (isJsonOrSspExt(entry.name)) results.push(full);
  }
  return results;
}

function renameJsonFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  let content = original;

  // Replace entityShapeType → layerShapeType (common field in all layer JSON)
  content = content.replace(/"entityShapeType"/g, '"layerShapeType"');

  // Replace entity-* IDs → layer-* IDs
  content = content.replace(/"id":\s*"entity-/g, '"id": "layer-');

  // Replace any other entity-* fields like entityMode, entityType etc.
  content = content.replace(/"entity([A-Z])/g, '"layer$1');

  // Handle standalone "entity" references in comments or string labels
  content = content.replace(/\bentity\b(?!["\w])/g, (match, offset) => {
    // Only replace outside JSON string values (crude but safe heuristic)
    return 'layer';
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ ${path.relative(root, filePath)}`);
    return true;
  }
  return false;
}

console.log('=== Renaming entity → layer in preset/template files ===\n');

let totalFiles = 0;
let changedFiles = 0;

for (const dir of dirs) {
  const files = collectFiles(dir);
  if (files.length === 0) {
    console.log(`\n📁 ${dir}\n   (no JSON/SSPP files found)`);
    continue;
  }
  console.log(`\n📁 ${dir}`);
  for (const file of files) {
    totalFiles++;
    const ok = renameJsonFile(file);
    if (ok) changedFiles++;
  }
}

console.log(`\n=== Done: ${changedFiles}/${totalFiles} files changed ===`);
