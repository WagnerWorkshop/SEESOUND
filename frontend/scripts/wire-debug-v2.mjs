// wire-debug-v2.mjs - Add debug panel to main.js
import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';
let lines = readFileSync(PATH, 'utf8').split('\n');

// 1. Add import after magnifierMinusIcon
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("import magnifierMinusIcon from")) {
        lines.splice(i + 1, 0, "import { createShapeDebugPanel, updateShapeDebugPanel, toggleShapeDebugPanel } from './engine/ui/ShapeDebugPanel.js'");
        break;
    }
}

// 2. Add init before the ready console.log
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("console.log('%c SEESOUND v1.0 ready '")) {
        lines.splice(i, 0,
            "// Shape debug panel (Ctrl+Shift+D to toggle)",
            "createShapeDebugPanel(() => ae)",
            "window.addEventListener('keydown', (e) => { if (e.ctrlKey && e.shiftKey && e.key === 'D') { e.preventDefault(); toggleShapeDebugPanel(); } })",
            ""
        );
        break;
    }
}

// 3. Add update call in animate function after ae.update()
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === 'ae.update()' && lines[i + 1].trim().startsWith('const isActuallyPlaying')) {
        lines.splice(i + 1, 0, '    updateShapeDebugPanel()');
        break;
    }
}

writeFileSync(PATH, lines.join('\n'));
console.log('Debug panel wired. New length:', lines.length, 'lines');
