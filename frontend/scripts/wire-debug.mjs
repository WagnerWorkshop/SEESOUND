import { readFileSync, writeFileSync } from 'fs';

const file = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';
let content = readFileSync(file, 'utf8');

// 1. Add import near the end of the import section
content = content.replace(
    "import magnifierMinusIcon from './icons/magnifier-minus.svg?raw'",
    "import magnifierMinusIcon from './icons/magnifier-minus.svg?raw'\nimport { createShapeDebugPanel, updateShapeDebugPanel, toggleShapeDebugPanel } from './engine/ui/ShapeDebugPanel.js'"
);

// 2. Initialize the debug panel (after ae is created, near the end of init)
// Find "// ── Initialize UI ──" or similar marker, or find "console.log('%c SEESOUND"
content = content.replace(
    "console.log('%c SEESOUND v1.0 ready '",
    "// ── Shape debug panel (Ctrl+Shift+D to toggle) ──\ncreateShapeDebugPanel(() => ae)\nwindow.addEventListener('keydown', (e) => {\n    if (e.ctrlKey && e.shiftKey && e.key === 'D') {\n        e.preventDefault()\n        toggleShapeDebugPanel()\n    }\n})\n\nconsole.log('%c SEESOUND v1.0 ready '"
);

// 3. Add update call in animate function after ae.update()
content = content.replace(
    '    ae.update()\n    const isActuallyPlaying',
    '    ae.update()\n    updateShapeDebugPanel()\n    const isActuallyPlaying'
);

writeFileSync(file, content);
console.log('main.js: debug panel wired');
