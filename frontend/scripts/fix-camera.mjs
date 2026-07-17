import { readFileSync, writeFileSync } from 'fs';

const M = 'd:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js';

// ═══════════════════════════════════════════════════════════════
// FIX 1: Revert camera lerp — go back to instant position.
// The lerp causes camera.lookAt() to fight orbit state every frame.
// ═══════════════════════════════════════════════════════════════
{
  let L = readFileSync(M, 'utf8').split('\r\n');
  for (let i = 0; i < L.length; i++) {
    if (L[i].includes('camera.position.x += (t.x - camera.position.x) * 0.28'))
      L[i] = '        camera.position.x = t.x';
    if (L[i].includes('camera.position.y += (t.y - camera.position.y) * 0.28'))
      L[i] = '        camera.position.y = t.y';
    if (L[i].includes('camera.position.z += (t.z - camera.position.z) * 0.28'))
      L[i] = '        camera.position.z = t.z';
    if (L[i].includes('orbitTarget.x += (t.targetX - orbitTarget.x) * 0.28'))
      L[i] = '        orbitTarget.x = t.targetX';
    if (L[i].includes('orbitTarget.y += (t.targetY - orbitTarget.y) * 0.28'))
      L[i] = '        orbitTarget.y = t.targetY';
    if (L[i].includes('orbitTarget.z += (t.targetZ - orbitTarget.z) * 0.28'))
      L[i] = '        orbitTarget.z = t.targetZ';
  }
  // Also revert comment
  for (let i = 0; i < L.length; i++) {
    if (L[i].includes('Apply smoothed camera movement toward rule target'))
      L[i] = '/** Apply instant camera movement toward rule target — called each frame */';
    if (L[i].includes('Smooth lerp toward rule target'))
      L[i] = '    // Instant position assignment (no lerp — reactive to rule output)';
  }
  writeFileSync(M, L.join('\r\n'));
  console.log('1. Camera: reverted lerp, back to instant position');
}

// ═══════════════════════════════════════════════════════════════
// FIX 2: Remove the isActuallyPlaying gate COMPLETELY from tick
// and remove any duplicate (leave only one clean tick() call)
// ═══════════════════════════════════════════════════════════════
{
  let L = readFileSync(M, 'utf8').split('\r\n');
  // Find all lines with __seesoundEngine?.tick
  let tickLines = [];
  for (let i = 0; i < L.length; i++) {
    if (L[i].includes('__seesoundEngine?.tick({')) {
      tickLines.push(i);
    }
  }
  console.log('2. Found', tickLines.length, 'tick() calls');
  
  // If there are duplicates, remove all but the last one
  if (tickLines.length >= 2) {
    // Keep the last one, remove the rest (the guarded one inside isActuallyPlaying)
    for (let i = 0; i < tickLines.length - 1; i++) {
      const idx = tickLines[i];
      // Also remove surrounding if-block lines
      // Look backward for the if() line and forward for the closing }
      let start = idx;
      while (start > 0 && !L[start].includes('if (isActuallyPlaying)') && !L[start].includes('Always run')) start--;
      // Remove from the if/comment line through the tick() call
      if (L[start].includes('if (isActuallyPlaying)')) {
        // Remove 5 lines: if(, // comment, const cameraUnitData, tick(), }
        L.splice(start, 5);
      } else if (L[start].includes('Always run')) {
        // Remove 4 lines: comment, const cameraUnitData, tick(), blank
        L.splice(start, 4);
      }
    }
  }
  writeFileSync(M, L.join('\r\n'));
  console.log('2. Removed duplicate tick() calls');
}

// ═══════════════════════════════════════════════════════════════
// FIX 3: Make camera tick call respect the isActuallyPlaying guard
// (We need to ensure the tick() above runs always, but the one
//  calling camera is already guarded by !pointerState.active)
// ═══════════════════════════════════════════════════════════════
// No change needed — already works

console.log('\nDone.');
