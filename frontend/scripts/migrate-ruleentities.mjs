// Migrate ruleEntities → ruleLayers in template presets
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = [
  'public/templates/presets/auroral-clouds.json',
  'public/templates/presets/harmonic-network.json',
  'public/templates/presets/spherical-aura.json',
  'public/templates/presets/particle-spectrum-flow.json',
  'public/templates/presets/timbre-lines.json',
];

let count = 0;
for (const rel of files) {
  const full = path.join(root, rel);
  let c = fs.readFileSync(full, 'utf8');
  const orig = c;
  const replacer = (m) => m.replace('ruleEntities', 'ruleLayers');
  c = c.replace(/"ruleEntities"/g, '"ruleLayers"');
  if (c !== orig) {
    fs.writeFileSync(full, c, 'utf8');
    count++;
    console.log(`✓ ${rel}`);
  }
}

// Also fix the SEESOUND saves folder
const savesDir = path.resolve(root, '..', '..', '..', 'SEESOUND saves');
if (fs.existsSync(savesDir)) {
  for (const f of fs.readdirSync(savesDir)) {
    if (!f.endsWith('.json') && !f.endsWith('.ssp-preset.json')) continue;
    const full = path.join(savesDir, f);
    let c = fs.readFileSync(full, 'utf8');
    const orig = c;
    c = c.replace(/"ruleEntities"/g, '"ruleLayers"');
    if (c !== orig) {
      fs.writeFileSync(full, c, 'utf8');
      count++;
      console.log(`✓ SEESOUND saves/${f}`);
    }
  }
}

// Also fix root presets
const rootPresetsDir = path.resolve(root, '..', 'presets');
if (fs.existsSync(rootPresetsDir)) {
  for (const f of fs.readdirSync(rootPresetsDir)) {
    if (!f.endsWith('.json') && !f.endsWith('.ssp-preset.json')) continue;
    const full = path.join(rootPresetsDir, f);
    let c = fs.readFileSync(full, 'utf8');
    const orig = c;
    c = c.replace(/"ruleEntities"/g, '"ruleLayers"');
    if (c !== orig) {
      fs.writeFileSync(full, c, 'utf8');
      count++;
      console.log(`✓ presets/${f}`);
    }
  }
}

console.log(`\nDone: ${count} files migrated`);
