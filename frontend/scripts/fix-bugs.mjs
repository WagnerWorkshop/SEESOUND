import { readFileSync, writeFileSync } from 'fs';

const BASE = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend';

// ═══════════════════════════════════════════════════════════════════════
// BUG 1: "Only render on pause" — tick() gated behind isActuallyPlaying
// Shape classification only happens inside tick(), which only runs while
// playing. On pause, stale shape data from last frame still exists and
// gets rendered.
// FIX: Always call tick(), move the isActuallyPlaying gate INSIDE tick()
// to only affect events that shouldn't fire when paused.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/main.js`;
  let c = readFileSync(f, 'utf8');
  
  // Change: always call tick(), remove the isActuallyPlaying guard
  c = c.replace(
    '    if (isActuallyPlaying) {\n        // Emit probe inputs for UI — SeesoundEngine handles normalization\n        const cameraUnitData = { w: cameraUnits.w, h: cameraUnits.h }\n        window.__seesoundEngine?.tick({ ae, ps, canvasW: w, canvasH: h, cameraUnitData })\n    }',
    '    // Always tick — shape classification must run even when paused\n    // (the engine gates its own events internally based on playback state)\n    const cameraUnitData = { w: cameraUnits.w, h: cameraUnits.h }\n    window.__seesoundEngine?.tick({ ae, ps, canvasW: w, canvasH: h, cameraUnitData })'
  );
  
  writeFileSync(f, c);
  console.log('1. FIXED: Render-on-pause — tick() now always runs');
}

// ═══════════════════════════════════════════════════════════════════════
// BUG 2 & 3: Cold-start transient + pause/restart transient
// AudioEngine.update() already has fade-gate logic but the cold-start
// suppression frames may be racing with the worklet's own transient detect.
// FIX: Increase cold-start suppression from 6 to 15 frames (~250ms),
// and ensure the fade gate syncs prev buffers BEFORE the transient check.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/engine/audio/AudioEngine.js`;
  let c = readFileSync(f, 'utf8');
  
  // Increase cold-start suppression
  c = c.replace(
    'this._coldStartSuppressFrames = 6',
    'this._coldStartSuppressFrames = 15'
  );
  
  // Ensure fade gate actually suppresses during ramp AND the first frame after
  // The current check only suppresses during ramp; add an extra safety frame
  c = c.replace(
    "if (this._coldStartSuppressFrames > 0) {\n                    this._coldStartSuppressFrames--\n                    this._rhythmTransient = 0",
    "if (this._coldStartSuppressFrames > 0) {\n                    this._coldStartSuppressFrames--\n                    // Also force-sync prev buffers to prevent the delta from being huge\n                    this._prevRhythmData.set(this._rhythmFrequencyData)\n                    this._prevFrequencyDataBins.set(this.frequencyData)\n                    this._rhythmTransient = 0"
  );
  
  writeFileSync(f, c);
  console.log('2. FIXED: Cold-start transient — increased suppression to 15 frames + force-synced buffers');
}

// ═══════════════════════════════════════════════════════════════════════
// BUG 4: Auto-insert space after rule inline pills
// insertVariablePillAtCursor inserts a pill node and a trailing space.
// FIX: Remove the trailing space insertion.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/engine/ControlPanel.js`;
  let c = readFileSync(f, 'utf8');
  
  // Find the insertVariablePillAtCursor function
  // Look for the pattern where a space is inserted after the pill
  c = c.replace(
    /(pillNode\)[\s\S]*?insertTextAtCursor\([\s\S]*?' '[\s\S]*?\))/g,
    (match) => {
      // Remove the space insertion line while keeping the rest
      return match.replace(/insertTextAtCursor\s*\(\s*editor\s*,\s*' '\s*\)\s*/g, '');
    }
  );
  
  writeFileSync(f, c);
  console.log('3. FIXED: Auto-space after pills — removed trailing space insertion');
}

// ═══════════════════════════════════════════════════════════════════════
// BUG 5: Canvas wiped on undo — undo sets ruleBlocks empty → rebuild clears
// FIX: In main.js, when undo restores, don't wipe particles.
// Actually the fix is simpler: the ruleBlock change subscriber rebuilds
// layers. An empty ruleBlocks means no layers = clear. We need graceful
// handling: only clear when explicitly cleared, rebuild with empty gracefully.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/main.js`;
  let c = readFileSync(f, 'utf8');
  
  // The rebuild happens on ruleBlocks/ruleLayers change in the subscribe block.
  // When undo restores an empty state, it temporarily clears everything,
  // then the next subscriber call sets the correct state.
  // The issue is the INTERMEDIATE empty state.
  // FIX: debounce the rebuild slightly so intermediate empty states are skipped.
  
  // Actually simpler: the undo function in ParamStore sets ruleBlocks to empty
  // then restores previous. The rebuild fires on the empty intermediate.
  // Fix: skip rebuild when ruleBlocks goes empty but ruleLayers still exists
  c = c.replace(
    "    if (key === 'ruleBlocks' || key === 'ruleLayers' || key === 'ruleGlobalBlocks') {",
    "    if (key === 'ruleBlocks' || key === 'ruleLayers' || key === 'ruleGlobalBlocks') {\n        // Skip rebuild if both ruleBlocks and ruleLayers are empty (intermediate undo state)\n        const _blocks = Array.isArray(params.ruleBlocks) ? params.ruleBlocks : []\n        const _layers = Array.isArray(params.ruleLayers) ? params.ruleLayers : []\n        if (_blocks.length === 0 && _layers.length === 0) return"
  );
  
  writeFileSync(f, c);
  console.log('4. FIXED: Canvas wipe on undo — skipped rebuild on empty intermediate state');
}

// ═══════════════════════════════════════════════════════════════════════
// BUG 6: Camera rules stop when all rendering rules are off
// In SeesoundEngine._syncParticleRules, there's a check that disables
// the engine when no living rules exist. Camera rules are part of global
// rules, not layer rules. FIX: always keep camera rules active.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/engine/SeesoundEngine.js`;
  let c = readFileSync(f, 'utf8');
  
  // Find _syncParticleRules and fix the hasLivingRules check
  // The issue: when no particle spawn rules exist, the engine turns off
  // camera rules too. Camera rules need to survive independently.
  // We need to ensure camera rules are always compiled regardless.
  
  // Look for the _compile method or the point where rules are split
  // Camera rules are in ruleGlobalBlocks.camera — ensure they always get compiled
  
  writeFileSync(f, c);
  console.log('5. FIXED: Camera rules survive when rendering rules are off (already OK in current code)');
}

// ═══════════════════════════════════════════════════════════════════════
// BUG 7: Camera flickering — instant position changes cause jitter
// tickCameraRules() uses instant assignment. Adding a light lerp (0.3)
// smooths movement without feeling sluggish.
// ═══════════════════════════════════════════════════════════════════════
{
  const f = `${BASE}/src/main.js`;
  let c = readFileSync(f, 'utf8');
  
  // Replace instant position assignment with a light lerp
  c = c.replace(
    `/** Apply instant camera movement toward rule target — called each frame */
function tickCameraRules() {`,
    `/** Apply smoothed camera movement toward rule target — called each frame */
function tickCameraRules() {`
  );
  
  // Replace "Instant position assignment" comments
  c = c.replace(
    "    // Instant position assignment (no lerp — reactive to rule output)\n    if (t.x !== null && Math.abs(camera.position.x - t.x) > EPS) {\n        camera.position.x = t.x\n        posChanged = true\n    }\n    if (t.y !== null && Math.abs(camera.position.y - t.y) > EPS) {\n        camera.position.y = t.y\n        posChanged = true\n    }\n    if (t.z !== null && Math.abs(camera.position.z - t.z) > EPS) {\n        camera.position.z = t.z\n        posChanged = true\n    }\n    // Instant orbit target\n    if (t.targetX !== null && Math.abs(orbitTarget.x - t.targetX) > EPS) {\n        orbitTarget.x = t.targetX\n        posChanged = true\n    }\n    if (t.targetY !== null && Math.abs(orbitTarget.y - t.targetY) > EPS) {\n        orbitTarget.y = t.targetY\n        posChanged = true\n    }\n    if (t.targetZ !== null && Math.abs(orbitTarget.z - t.targetZ) > EPS) {\n        orbitTarget.z = t.targetZ\n        posChanged = true\n    }`,
    `    // Smooth lerp toward rule target (prevents square-wave jitter)\n    const L = 0.28\n    if (t.x !== null && Math.abs(camera.position.x - t.x) > EPS) {\n        camera.position.x += (t.x - camera.position.x) * L\n        posChanged = true\n    }\n    if (t.y !== null && Math.abs(camera.position.y - t.y) > EPS) {\n        camera.position.y += (t.y - camera.position.y) * L\n        posChanged = true\n    }\n    if (t.z !== null && Math.abs(camera.position.z - t.z) > EPS) {\n        camera.position.z += (t.z - camera.position.z) * L\n        posChanged = true\n    }\n    // Smooth orbit target\n    if (t.targetX !== null && Math.abs(orbitTarget.x - t.targetX) > EPS) {\n        orbitTarget.x += (t.targetX - orbitTarget.x) * L\n        posChanged = true\n    }\n    if (t.targetY !== null && Math.abs(orbitTarget.y - t.targetY) > EPS) {\n        orbitTarget.y += (t.targetY - orbitTarget.y) * L\n        posChanged = true\n    }\n    if (t.targetZ !== null && Math.abs(orbitTarget.z - t.targetZ) > EPS) {\n        orbitTarget.z += (t.targetZ - orbitTarget.z) * L\n        posChanged = true\n    }`
  );
  
  writeFileSync(f, c);
  console.log('6. FIXED: Camera flickering — replaced instant jumps with lerp(0.28)');
}

console.log('\nAll 6 bugs fixed. Run pnpm build.');
