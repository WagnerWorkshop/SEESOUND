/**
 * Check current structure of template preset files.
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
  'public/templates/presets/particle-spectrum-flow.json',
  'public/templates/presets/timbre-lines.json',
  'public/templates/presets/the-vortex.json',
  'public/templates/presets/transient-web.json',
  'public/templates/presets/conversation-dual-clouds.json',
  'public/templates/presets/Dolby.json',
  'public/templates/presets/linear-basic.json',
  'public/templates/presets/linear-colors.json',
  'public/templates/presets/linear-timbre-colors.json',
  'public/templates/presets/linear-textured.json',
  'public/templates/factory-templates.json',
];

for (const rel of files) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) continue;
  const json = JSON.parse(fs.readFileSync(full, 'utf8'));
  const params = json.params || {};
  const keys = Object.keys(params);
  const hasRuleLayers = 'ruleLayers' in params;
  const hasRuleEntities = 'ruleEntities' in params;
  const hasRuleBlocks = 'ruleBlocks' in params;
  const hasEntities = 'entities' in params;
  console.log(`${rel.replace('public/templates/', '')}:`);
  if (hasRuleLayers) console.log('  ✓ has ruleLayers (', params.ruleLayers.length, ')');
  if (hasRuleEntities) console.log('  ✗ has ruleEntities (', params.ruleEntities.length, ') — needs migration');
  if (hasRuleBlocks) console.log('  ✓ has ruleBlocks');
  if (hasEntities) console.log('  ✗ has entities — needs migration');
  if (!hasRuleLayers && !hasRuleEntities && !hasRuleBlocks && !hasEntities) console.log('  no layer data found');
}
