// fix-main-v2.mjs - Remove iterative subtraction section by line
import { readFileSync, writeFileSync } from 'fs';

const PATH = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';
let lines = readFileSync(PATH, 'utf8').split('\n');

// Find the section
let startLine = -1;
let endLine = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('// § 9  ITERATIVE SUBTRACTION TEST HOOK')) {
        startLine = i;
    }
    if (startLine >= 0 && lines[i].includes("console.log('[IterativeSubtraction] Test hooks ready.")) {
        endLine = i;
        break;
    }
}

if (startLine >= 0 && endLine >= startLine) {
    // Remove the section (inclusive) plus the blank line before it
    const removeFrom = startLine - 1; // include the separator line
    lines.splice(removeFrom, endLine - removeFrom + 1);
    writeFileSync(PATH, lines.join('\n'));
    console.log(`Removed lines ${removeFrom+1}-${endLine+1} (${endLine-removeFrom+1} lines). New length: ${lines.length} lines`);
} else {
    console.log('Section not found:', { startLine, endLine });
}
