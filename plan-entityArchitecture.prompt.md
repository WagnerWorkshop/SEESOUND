## Plan: The Harmonic Object Algorithm & Quad-Brain Pipeline

**TL;DR**
Rewrite the audio pipeline to use a Quad-Brain architecture (Pitch, Rhythm, Texture, Tracker) in an AudioWorklet, mapping raw spectrograms into Harmonic Objects via Sub-Bin Parabolic Interpolation and Comb Filtering. Introduce 'Entity Mode' vs 'Particle Mode', and update the UI with a new drag-and-drop "Styles" menu for Entities/Definitions/Rules, ensuring strict audio parameter optimization.

**Steps**

*Phase 1: AudioWorklet Quad-Brain Implementation*
1. **Remove Existing Fixed FFT Size**: Remove single FFT size in UI and `AudioEngine.js`
2. **Implement Pitch Brain**: Add 16384 window FFT in `BinAnalysisWorklet.js` to run sub-bin parabolic interpolation for extreme-accuracy fundamental frequency extraction.
3. **Implement Texture Brain**: Add 4096 window FFT to calculate timbral descriptors (Flatness, Centroid, Inharmonicity). 
4. **Implement Rhythm Brain**: Add 1024 window FFT aimed at detecting `globalTransient` (broadband energy spikes).
5. **Implement Tracker Brain & Comb Filter (Harmonic Association)**: Add logic in the worklet/engine to group peaks logically with their multiple harmonics ($2f, 3f, 4f...$) and trace matching overtone ratios frame-to-frame to emit persistent `streamID`s and `entityAge`.

*Phase 2: Styles & UI Reconstruction*
1. **Styles Menu Transformation**: Refactor `RuleEditorPanel.js` into a target-based **Styles menu** (replacing the Rules menu). Use style.svg as menu icon
2. **Background**: Opens up a popup window rules list for the background with the rules that apply to the background (already existing in the rules tab). 
3. **Camera**: Opens up a popup window rules list for the camera with the rules that apply to the camera (already existing in the rules tab).
4. **Entities List**: The root of the Styles menu is a list of Entities. This list is modifiable with add/remove, rename, and drag-and-drop reordering.
5. **Definitions & Rules Popup**: Clicking an Entity opens a dedicated popup window containing:
   - **Definitions List**: Modifiable (add/remove, rename, drag-and-drop). Includes an option to choose from "All (no specific definitions)" vs "Special (modular list of definitions)".
   - **Rules List**: The very first rule defines the **shape type** (particle, cloud, or line). The rest of the rules in this list are dynamically curated and restricted based on the chosen shape type.

*Phase 3: Add audio parametres*
1. **Per-entity parametres**: `fundamentalNote`, `fundamentalPitch`, `entityCentroid`, `entityFlatness`, `entityInharmonicity`, `entityVolume`
2. **Curate audio parametres**: available inside the rules and definitions themselves based on whether it is background, camera, entity: only per-frame parametres for background and camera, but allow per-frame, per-bin, and per-entity parametres for entities. Also curate available audio parametres based on the shape type of the entity (only use per-entity parametres for clouds), have per-frame, per-bin parametres for all shape-types.

*Phase 4: Entity vs Particle Mode & System Optimizations*
7. **Optimized Execution & New Variables**: Inject `entity*` and `global*` audio variables into the compiler. Ensure the framework explicitly maps dependencies so that **only audio parameters that are actively used in the current styles/rules are calculated** to guarantee performance.



*Phase 5: Save System Enhancements*
1. **New Project Flow**: Modify `MenuFile.js` and `main.js`. 
   - Provide a popup asking for the project name on "New Project".
   - Instantiate intervals to automatically autosave over that filename locally.
   - Map this as the default label when user selects manual Native File System API save.

**Relevant files**
- `frontend/src/engine/audio/BinAnalysisWorklet.js` — Sub-Bin Interpolation, multiple FFT allocs, comb filter, tracker.
- `frontend/src/engine/audio/AudioEngine.js` — Dynamically filter parameters; handle 'particle' float arrays vs 'entity' JSON.
- `frontend/src/engine/rules/RuleCompiler.js` — Add new `entity*` and `global*` variables; tree-shake unused variables to skip heavy audio calcs.
- `frontend/src/engine/ParticleSystem.js` — Apply entity data spacing across rendered WebGL meshes based on shape types (cloud/line/particle).
- `frontend/src/engine/ui/RuleEditorPanel.js` — Complete rebuild into Styles list, drag-and-drop entity items, and the definitions/rules popup.
- `frontend/src/engine/ui/MenuSettings.js` — Remove FFT size, add modes and times.
- `frontend/src/engine/ui/MenuFile.js` — New project popup.

**Verification**
1. Output `console.log()` representing extracted `entityRootPitch` in the console during music playback to verify Parabolic Interpolation.
2. Verify visual UI: "New project" prompts for name.
3. Verify visual UI: Styles menu contains a drag/drop capable Entities list.
4. Verify visual UI: Definitions/Rules popup limits available rules based on the selected Shape Type.
5. Test Audio Engine logic to ensure FFT/Features skip derivations entirely if no Entity/Rule uses them.

**Decisions**
- The system rigidly enforces laziness: if an audio metric is not in the compiled UI rule expressions, its calculation is completely skipped in the AudioEngine/Worklet.
- Brain resolutions are fixed and hidden from frontend user controls.
- Sub-bin interpolation occurs strictly at the Pitch brain (16384).
- The Texture brain calculates localized inharmonicity/flatness tightly on a peak and its specific overtones instead of globally evaluating the track.
- Always ensure that the UI is structured (js) and styled (css) as presently, meaning, use the existing CSS classes and DOM structure as much as possible, only adding new elements where necessary for the new features.