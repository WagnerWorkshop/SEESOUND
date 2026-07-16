import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/AudioEngine.js';
let content = readFileSync(PATH, 'utf8');

// Fix: remove duplicate closing brace before shape accessors
content = content.replace('    }\n    }\n\n    // ── Shape Activation Accessors', '    }\n\n    // ── Shape Activation Accessors');

// Also ensure the double-brace pattern is gone
content = content.replace(/\}\n    \}\n\n/g, '}\n\n');

writeFileSync(PATH, content);
console.log('Fixed duplicate braces');
