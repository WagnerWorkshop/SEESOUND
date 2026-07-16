import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

// ── main.js ──
let mj = readFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js', 'utf8');
mj = mj.replace(/(\n\s*)?\/\/ \u2500+[\s\S]*?§ 9  ITERATIVE SUBTRACTION TEST HOOK[\s\S]*?console\.log\('\[IterativeSubtraction\] Test hooks ready.*?'\);?(\r?\n)?/, '');
writeFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js', mj);
console.log('main.js: cleaned');

// ── types.js ──
let tp = readFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/types.js', 'utf8');
tp = tp.replace(/ \* @typedef \{Object\} IterativeSource[\s\S]*? \*\//, '');
writeFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/types.js', tp);
console.log('types.js: cleaned');

// ── i18n files ──
const base = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/i18n';
const files = readdirSync(base).filter(f => f.endsWith('.json'));

const iterativeKeys = [
  'iterativeSourceCount',
  'iterativeSourceF0',
  'iterativeSourceVolume',
  'iterativeSourceCrest',
  'iterativeSourceSymmetry',
];

files.forEach(f => {
  let content = readFileSync(join(base, f), 'utf8');
  for (const key of iterativeKeys) {
    // Match the JSON entry with surrounding comma/whitespace
    const re = new RegExp(`("${key}"\\s*:\\s*"[^"]*",?\\s*\\r?\\n)`, 'g');
    content = content.replace(re, '');
  }
  // Clean up any double commas from removal
  content = content.replace(/,(\s*\n\s*\})/g, '$1');
  content = content.replace(/,(\s*\n\s*")/g, '\n  "$1');
  writeFileSync(join(base, f), content);
  console.log('i18n/' + f + ': cleaned');
});

console.log('Phase 0 cleanup complete!');
