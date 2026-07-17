import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend';

// ─────────────────────────────────────────────────────────────
// 1. Remove stale _syncIterativeConfig from SeesoundEngine.js
// ─────────────────────────────────────────────────────────────
{
    const f = join(BASE, 'src/engine/SeesoundEngine.js');
    let c = readFileSync(f, 'utf8');
    c = c.replace("            if (key === 'separationMode' || key === 'separationThreshold') {\r\n                this._syncIterativeConfig()\r\n            }\r\n", '');
    writeFileSync(f, c);
    console.log('Fixed: SeesoundEngine.js - removed stale _syncIterativeConfig');
}

// ─────────────────────────────────────────────────────────────
// 2. Gate GraphSolver fallback nodes (max 8, only when audio playing)
// ─────────────────────────────────────────────────────────────
{
    const f = join(BASE, 'src/engine/rules/GraphSolver.js');
    let c = readFileSync(f, 'utf8');
    // Cap fallback nodes at 8 instead of 50
    c = c.replace('const needed = Math.min(visibleCount - this.nodes.size, 50)', 'const needed = Math.min(visibleCount - this.nodes.size, 8)');
    writeFileSync(f, c);
    console.log('Fixed: GraphSolver.js - capped fallback nodes at 8');
}

// ─────────────────────────────────────────────────────────────
// 3. Re-add shapeEntity to RuleEditorPanel.js layer type dropdown
// ─────────────────────────────────────────────────────────────
{
    const f = join(BASE, 'src/engine/ui/RuleEditorPanel.js');
    let c = readFileSync(f, 'utf8');
    c = c.replace(
        "{ value: 'line', label: UI_TEXT.rules?.shapeLine || 'Line' },\n        ], 'particle'))",
        "{ value: 'line', label: UI_TEXT.rules?.shapeLine || 'Line' },\n            { value: 'shapeEntity', label: UI_TEXT.rules?.shapeEntity || 'Shape Entity' },\n        ], 'particle'))"
    );
    writeFileSync(f, c);
    console.log('Fixed: RuleEditorPanel.js - added shapeEntity option');
}

// ─────────────────────────────────────────────────────────────
// 4. Add shape variables to all i18n ruleVariables arrays
//    AND remove iterative subtraction entries
// ─────────────────────────────────────────────────────────────
const shapeVarEntries = [
    { id: "shapeSine", group: "overall", label: "Shape Sine", technicalName: "shapeSine", description: "Activation of the Pure Sine acoustic shape (flute, pure tones)." },
    { id: "shapeTriangle", group: "overall", label: "Shape Triangle", technicalName: "shapeTriangle", description: "Activation of the Triangle wave shape (warm, soft, gentle tones)." },
    { id: "shapeSawtooth", group: "overall", label: "Shape Sawtooth", technicalName: "shapeSawtooth", description: "Activation of the Sawtooth wave shape (bright, buzzy strings)." },
    { id: "shapeSquare", group: "overall", label: "Shape Square", technicalName: "shapeSquare", description: "Activation of the Square wave shape (hollow, clarinet-like)." },
    { id: "shapeNoise", group: "overall", label: "Shape Noise", technicalName: "shapeNoise", description: "Activation of the White Noise shape (hissy, breathy)." },
    { id: "shapePinkNoise", group: "overall", label: "Shape Pink Noise", technicalName: "shapePinkNoise", description: "Activation of the Pink Noise shape (natural rumble, ambience)." },
    { id: "shapeTransient", group: "overall", label: "Shape Transient", technicalName: "shapeTransient", description: "Activation of the Sharp Transient shape (clicks, drum attacks)." },
    { id: "shapePad", group: "overall", label: "Shape Pad", technicalName: "shapePad", description: "Activation of the Warm Pad shape (synth pads, soft voices)." },
    { id: "shapeBuzzy", group: "overall", label: "Shape Buzzy", technicalName: "shapeBuzzy", description: "Activation of the Buzzy shape (brass, distorted guitar)." },
    { id: "shapeBass", group: "overall", label: "Shape Bass", technicalName: "shapeBass", description: "Activation of the Sub Bass shape (kick drums, sub bass)." },
    { id: "shapeDominant", group: "overall", label: "Shape Dominant", technicalName: "shapeDominant", description: "Name of the most active acoustic shape this frame." },
    { id: "shapeDominantValue", group: "overall", label: "Shape Dominant Value", technicalName: "shapeDominantValue", description: "Activation strength of the dominant shape (0-1)." },
];

const iterativeKeys = ['iterativeSourceCount', 'iterativeSourceF0', 'iterativeSourceVolume', 'iterativeSourceCrest', 'iterativeSourceSymmetry'];

const i18nDir = join(BASE, 'src/i18n');
const i18nFiles = readdirSync(i18nDir).filter(f => f.endsWith('.json'));

i18nFiles.forEach(f => {
    const filePath = join(i18nDir, f);
    let content = readFileSync(filePath, 'utf8');

    // Parse JSON, modify, and re-stringify
    try {
        const json = JSON.parse(content);

        let modified = false;

        // Remove iterative entries from ruleVariables
        if (Array.isArray(json.ruleVariables)) {
            const before = json.ruleVariables.length;
            json.ruleVariables = json.ruleVariables.filter(v => !iterativeKeys.includes(v.id));
            if (json.ruleVariables.length < before) modified = true;
        }

        // Add shape variables (only if not already present)
        if (Array.isArray(json.ruleVariables)) {
            const existingIds = new Set(json.ruleVariables.map(v => v.id));
            const toAdd = shapeVarEntries.filter(s => !existingIds.has(s.id));
            if (toAdd.length > 0) {
                json.ruleVariables.push(...toAdd);
                modified = true;
            }
        }

        if (modified) {
            writeFileSync(filePath, JSON.stringify(json, null, 2) + '\n');
            console.log('Fixed: i18n/' + f + ' - removed iterative, added shape vars');
        } else {
            console.log('Skipped: i18n/' + f + ' - already ok');
        }
    } catch (e) {
        console.error('ERROR: i18n/' + f + ' - ' + e.message);
    }
});

console.log('\nAll fixes applied!');
