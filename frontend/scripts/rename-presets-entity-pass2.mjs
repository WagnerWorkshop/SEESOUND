/**
 * Final cleanup: patch remaining entity references in template presets.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const files = [
  'public/templates/presets/auroral-clouds.json',
  'public/templates/presets/harmonic-network.json',
  'public/templates/presets/spherical-aura.json',
  'public/templates/presets/timbre-lines.json',
  'public/templates/presets/particle-spectrum-flow.json',
];

for (const rel of files) {
  const full = path.join(root, rel);
  let c = fs.readFileSync(full, 'utf8');
  const orig = c;
  c = c.replace(/-entity"/g, '-layer"');
  c = c.replace(/-entity\\"/g, '-layer\\"');
  c = c.replace(/\bentityVolume\b/g, 'componentVolume');
  c = c.replace(/\bentityFlatness\b/g, 'componentFlatness');
  if (c !== orig) {
    fs.writeFileSync(full, c, 'utf8');
    console.log('✓', rel);
  } else {
    console.log('  (no change)', rel);
  }
}
