import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/engine/audio/AudioEngine.js';
let content = readFileSync(PATH, 'utf8');

// Fix: remove duplicate closing brace (Windows \r\n line endings)
content = content.replace('    }\r\n    }\r\n\r\n    // ── Shape Activation Accessors', '    }\r\n\r\n    // ── Shape Activation Accessors');

// Also catch any other double-brace patterns
content = content.replace(/}\r\n    }\r\n\r\n/g, '}\r\n\r\n');

writeFileSync(PATH, content);
console.log('Fixed duplicate braces (Windows line endings)');
