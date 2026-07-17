import { readFileSync, writeFileSync } from 'fs';

const BASE = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend';

// ════════════════════════════════════════════════════════════════
// 1. ParticleSystem: Add per-bin shape variables to writeParticle
// ════════════════════════════════════════════════════════════════
{
    const f = `${BASE}/src/engine/ParticleSystem.js`;
    let c = readFileSync(f, 'utf8');

    // Add per-bin shape sampling helper right after _getCompMetricsByIndex
    const metricHelperEnd = `            return {\n                compId: comp.streamId,\n                // Pass raw centroid in Hz \u2014 users can normalize in their rules\n                compCentroid: comp.centroid || 0,\n                compFlatness: clamp01(comp.flatness),\n                compFlux: clamp01(comp.flux),\n                compOnset: clamp01(comp.onset),\n                compCount: Math.max(0, this._componentTracker.componentCount),\n            }\n        }`;

    const shapeHelper = `\n        /** Get per-bin shape activations for a specific CQT bin index. */\n        const _getBinShapeMetrics = (cqtBinIdx) => {\n            const bs = this._binShapeData\n            const bfh = this._binFundamentalHz\n            const bdv = this._binDominantValue\n            const sc = this._SHAPE_COUNT || 10\n            if (!bs || cqtBinIdx < 0 || cqtBinIdx * sc >= bs.length) {\n                return { binShapeSine: 0, binShapeTriangle: 0, binShapeSawtooth: 0, binShapeSquare: 0, binShapeNoise: 0, binShapePinkNoise: 0, binShapeTransient: 0, binShapePad: 0, binShapeBuzzy: 0, binShapeBass: 0, binFundamentalHz: 0, binDominantValue: 0 }\n            }\n            const base = cqtBinIdx * sc\n            return {\n                binShapeSine: bs[base] || 0,\n                binShapeTriangle: bs[base + 1] || 0,\n                binShapeSawtooth: bs[base + 2] || 0,\n                binShapeSquare: bs[base + 3] || 0,\n                binShapeNoise: bs[base + 4] || 0,\n                binShapePinkNoise: bs[base + 5] || 0,\n                binShapeTransient: bs[base + 6] || 0,\n                binShapePad: bs[base + 7] || 0,\n                binShapeBuzzy: bs[base + 8] || 0,\n                binShapeBass: bs[base + 9] || 0,\n                binFundamentalHz: (bfh && cqtBinIdx < bfh.length) ? (bfh[cqtBinIdx] || 0) : 0,\n                binDominantValue: (bdv && cqtBinIdx < bdv.length) ? (bdv[cqtBinIdx] || 0) : 0,\n            }\n        }\n        /** Convert Hz to CQT bin index using the worklet's CQT range. */\n        const _hzToCqtBin = (hz) => {\n            const minHz = 40, maxHz = 16000\n            const t = (Math.log2(Math.max(minHz, Math.min(maxHz, hz))) - Math.log2(minHz)) / (Math.log2(maxHz) - Math.log2(minHz))\n            const cqtBins = this._binFundamentalHz ? this._binFundamentalHz.length : this._binShapeData ? (this._binShapeData.length / (this._SHAPE_COUNT || 10)) : 0\n            return cqtBins > 0 ? Math.round(t * (cqtBins - 1)) : -1\n        }`;

    // Insert after the metric helper
    c = c.replace(metricHelperEnd, metricHelperEnd + shapeHelper);

    // Now add binShape vars to both the particle spawn inputs AND line inputs
    // Find the particle inputs block
    const particleInputBefore = `                        if (compId >= 0) o.componentId = compId\n                        if (Number.isFinite(compCentroid)) o.componentCentroid = compCentroid\n                        if (Number.isFinite(compFlatness)) o.componentFlatness = compFlatness\n                        if (Number.isFinite(compFlux)) o.componentFlux = compFlux\n                        if (Number.isFinite(compOnset)) o.componentOnset = compOnset\n                        if (compCount > 0) o.componentCount = compCount\n                        if (Number.isFinite(compBinEnergy)) o.componentBinEnergy = compBinEnergy\n                        return o`;

    const particleInputAfter = particleInputBefore + `\n                        const _sh = _getBinShapeMetrics(_hzToCqtBin(hz))\n                        o.binShapeSine = _sh.binShapeSine; o.binShapeTriangle = _sh.binShapeTriangle; o.binShapeSawtooth = _sh.binShapeSawtooth; o.binShapeSquare = _sh.binShapeSquare; o.binShapeNoise = _sh.binShapeNoise; o.binShapePinkNoise = _sh.binShapePinkNoise; o.binShapeTransient = _sh.binShapeTransient; o.binShapePad = _sh.binShapePad; o.binShapeBuzzy = _sh.binShapeBuzzy; o.binShapeBass = _sh.binShapeBass; o.binFundamentalHz = _sh.binFundamentalHz; o.binDominantValue = _sh.binDominantValue`;

    // Apply to both particle spawn and line loops (they share the same pattern)
    c = c.replace(particleInputBefore, particleInputAfter);

    writeFileSync(f, c);
    console.log('1. ParticleSystem: added per-bin shape variables');
}

// ════════════════════════════════════════════════════════════════
// 2. RuleDictionary: Add binShape* variables to _INPUT_RANGES and _INPUT_MODES
// ════════════════════════════════════════════════════════════════
{
    const f = `${BASE}/src/engine/rules/RuleDictionary.js`;
    let c = readFileSync(f, 'utf8');

    // Add binShape ranges after componentBinEnergy
    const binShapeRanges = `
    // Per-bin shape variables from PitchFirstClassifier
    binShapeSine: [0, 1],
    binShapeTriangle: [0, 1],
    binShapeSawtooth: [0, 1],
    binShapeSquare: [0, 1],
    binShapeNoise: [0, 1],
    binShapePinkNoise: [0, 1],
    binShapeTransient: [0, 1],
    binShapePad: [0, 1],
    binShapeBuzzy: [0, 1],
    binShapeBass: [0, 1],
    binFundamentalHz: [0, 22050],
    binDominantValue: [0, 1],`;

    c = c.replace('    componentBinEnergy: [0, 1],', '    componentBinEnergy: [0, 1],' + binShapeRanges);

    // Add binShape modes — available in all modes like other per-bin variables
    const binShapeModes = `
    // Per-bin shape variables
    binShapeSine: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeTriangle: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeSawtooth: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeSquare: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeNoise: ['particle', 'cloud', 'tracing', 'lines'],
    binShapePinkNoise: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeTransient: ['particle', 'cloud', 'tracing', 'lines'],
    binShapePad: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeBuzzy: ['particle', 'cloud', 'tracing', 'lines'],
    binShapeBass: ['particle', 'cloud', 'tracing', 'lines'],
    binFundamentalHz: ['particle', 'cloud', 'tracing', 'lines'],
    binDominantValue: ['particle', 'cloud', 'tracing', 'lines'],`;

    c = c.replace(
        "    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines'],",
        "    componentBinEnergy: ['particle', 'cloud', 'tracing', 'lines']," + binShapeModes
    );

    writeFileSync(f, c);
    console.log('2. RuleDictionary: added binShape* variables');
}

// ════════════════════════════════════════════════════════════════
// 3. en.json: Add binShape* entries to ruleVariables
// ════════════════════════════════════════════════════════════════
{
    const f = `${BASE}/src/i18n/en.json`;
    const json = JSON.parse(readFileSync(f, 'utf8'));

    const binShapeEntries = [
        { id: "binShapeSine", group: "detail", label: "Bin Shape Sine", technicalName: "binShapeSine", description: "Per-bin activation of the Pure Sine shape (flute, pure tones)." },
        { id: "binShapeTriangle", group: "detail", label: "Bin Shape Triangle", technicalName: "binShapeTriangle", description: "Per-bin activation of the Triangle wave shape (warm, soft)." },
        { id: "binShapeSawtooth", group: "detail", label: "Bin Shape Sawtooth", technicalName: "binShapeSawtooth", description: "Per-bin activation of the Sawtooth shape (bright, strings)." },
        { id: "binShapeSquare", group: "detail", label: "Bin Shape Square", technicalName: "binShapeSquare", description: "Per-bin activation of the Square wave shape (hollow, clarinet)." },
        { id: "binShapeNoise", group: "detail", label: "Bin Shape Noise", technicalName: "binShapeNoise", description: "Per-bin activation of the White Noise shape (hissy, breathy)." },
        { id: "binShapePinkNoise", group: "detail", label: "Bin Shape Pink Noise", technicalName: "binShapePinkNoise", description: "Per-bin activation of the Pink Noise shape (natural rumble)." },
        { id: "binShapeTransient", group: "detail", label: "Bin Shape Transient", technicalName: "binShapeTransient", description: "Per-bin activation of the Sharp Transient shape (clicks)." },
        { id: "binShapePad", group: "detail", label: "Bin Shape Pad", technicalName: "binShapePad", description: "Per-bin activation of the Warm Pad shape (synth pads)." },
        { id: "binShapeBuzzy", group: "detail", label: "Bin Shape Buzzy", technicalName: "binShapeBuzzy", description: "Per-bin activation of the Buzzy shape (brass, distortion)." },
        { id: "binShapeBass", group: "detail", label: "Bin Shape Bass", technicalName: "binShapeBass", description: "Per-bin activation of the Sub Bass shape (kick drums)." },
        { id: "binFundamentalHz", group: "detail", label: "Bin Fundamental Hz", technicalName: "binFundamentalHz", description: "Per-bin detected fundamental frequency in Hz (0 if none)." },
        { id: "binDominantValue", group: "detail", label: "Bin Dominant Shape Value", technicalName: "binDominantValue", description: "Per-bin activation of the dominant shape (0-1)." },
    ];

    const existingIds = new Set(json.ruleVariables.map(v => v.id));
    for (const entry of binShapeEntries) {
        if (!existingIds.has(entry.id)) {
            json.ruleVariables.push(entry);
        }
    }

    writeFileSync(f, JSON.stringify(json, null, 2) + '\n');
    console.log('3. en.json: added binShape* entries');
}

console.log('\nDone. Run pnpm build.');
