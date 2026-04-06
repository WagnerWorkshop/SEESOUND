# SEESOUND Engine

SEESOUND is a browser-first audio-to-visual engine for turning music into particle-based motion graphics.

This document is a developer handoff guide. It explains the architecture, runtime data flow, extension points, persistence model, and practical maintenance workflow so future contributors can continue confidently.

## 1. Repository Scope

Top-level folders:

- backend: FastAPI service and preset JSON corpus.
- frontend: Vite app containing renderer, audio analysis, rule engine, UI, and project lifecycle.

Current product direction:

- Primary runtime is frontend-first and static-host compatible.
- Presets and projects are handled locally in-browser.
- Backend remains available for legacy workflows, migration, and offline preset corpus authoring.

Current UX/runtime status (April 2026):

- Post-processing is bloom-only. Bokeh has been removed from UI, params, and runtime.
- Audio transport now uses play/pause/stop, seek +/-10s, mute toggle, and a speed popover (0.25x-4.0x slider with quick presets).
- Paint-all has been removed from UI and runtime.
- Rule duplication now creates independent rule cards (editable conditions/expressions, independent collapse state).
- Rule-card contradiction highlighting is active, while runtime execution resolves conflicts as first-rule-wins.
- Line rules use midpoint + length + axis direction semantics; default line spawning no longer silently fails.
- Canvas width/height aliases used by rules are pixel-based (`canvasWidthPx` / `canvasHeightPx`).
- Fit-to-canvas camera behavior is tight framing with no intentional margin.

## 2. Runtime Architecture

At runtime, the app runs as a single orchestrated loop in frontend/src/main.js.

Flow per frame:

1. Audio extraction from Web Audio graph.
2. Feature calculation (bin + global metrics).
3. Spawn/update particle attributes.
4. Rule engine mutation pass on spawned and/or living particles.
5. Three.js render.
6. UI event dispatch for readouts and tooling.

High-level modules:

- frontend/src/main.js: Composition root and event wiring.
- frontend/src/engine/audio/AudioEngine.js: FFT + audio analysis state.
- frontend/src/engine/audio/AudioFeatures.js: feature math helpers.
- frontend/src/engine/ParticleSystem.js: geometry buffers, particle life, render data.
- frontend/src/engine/ParamStore.js: canonical params, undo/redo, persistence API.
- frontend/src/engine/ControlPanel.js: control panel and rule-builder UI.
- frontend/src/engine/rules/RuleCompiler.js: compiles rule blocks into executable functions.
- frontend/src/engine/rules/RuleDictionary.js: schema and allowed inputs/outputs/operators.
- frontend/src/components/AudioPlayer.js: bottom transport and export controls (mute + speed popover).
- frontend/src/engine/project/ProjectIO.js: project payload build/parse/download utilities.

## 3. Data Model

### 3.1 Params

The live state object is params from ParamStore.

It includes:

- Analysis normalization ranges.
- Canvas and camera settings.
- Particle generation limits and blending behavior.
- Rule system state: ruleBlocks, palettes, ruleEngineEnabled, ruleUiState.

Guideline:

- Any new render behavior should be parameterized through ParamStore first, then consumed in main or ParticleSystem.

### 3.2 Rule Blocks

A rule block generally contains:

- id, group, subgroup, enabled, order.
- target and scope.
- condition.
- actions array.

Targets in current schema:

- spawnedParticles
- allParticles
- background
- camera

Scopes (particle targets):

- spawnedOnly
- allLivingFrame

### 3.3 Presets

Preset storage in current frontend mode is localStorage.

Key behavior:

- listPresets, savePreset, loadPreset, deletePreset are async wrappers around local map storage.
- Presets are canonicalized through migration/sanitization before use.
- Rule presets use names prefixed with rule__.

Storage keys are defined in ParamStore (for defaults, disabled controls, and preset map).

### 3.4 Projects

Project payload shape is created by buildProjectPayload in ProjectIO.

Core fields:

- schemaVersion
- createdAt, updatedAt
- projectName
- presetName
- params
- presetLibrary

Important behavior in main.js:

- Project load replaces preset library to enforce project-file source-of-truth.
- Autosave writes only when a File System Access file handle is attached.
- Save writes to attached handle; Save As attaches a new handle.
- If no handle exists, fallback is download-based project export.

## 4. Default Project Bootstrapping

Default startup project is defined in frontend/src/config/DefaultProject.js.

Current bundled default presets:

- linear basic
- linear colors
- linear timbre colors
- textured timbre colors

Preset JSON source for startup bundle:

- frontend/src/presets/default-project/*.json

Bootstrap behavior:

- On startup, app loads this default project payload.
- It seeds params and preset library before normal interaction.
- Default file label is seesound-default-project.ssp.json until user binds a handle.

## 5. UI Event Contract

The app relies on window CustomEvent messages between UI modules and orchestrator.

Key project/preset events:

- seesound:preset-library-changed
- seesound:project-save-request
- seesound:project-save-as-request
- seesound:project-load-request
- seesound:project-open-request
- seesound:project-new-request
- seesound:project-file-state
- seesound:project-autosaved
- seesound:project-loaded

Player module events used between `AudioPlayer` and `main`:

- player:playpause
- player:play
- player:pause
- player:stop
- player:playbackrate
- player:mute-toggle
- player:mute-state
- player:recordvideo-toggle
- player:recordvideo-state

When extending UI:

- Reuse existing event names where possible.
- Keep event detail payloads stable.
- Avoid direct module coupling if event contract already exists.

## 6. Build and Run

### Frontend only (recommended day-to-day)

From repository root:

```powershell
cd frontend
pnpm install
pnpm dev
```

Production build:

```powershell
cd frontend
pnpm build
pnpm preview
```

### Backend (optional / legacy support)

```powershell
cd backend
python -m pip install -r requirements.txt
python main.py
```

Batch helpers are available in repository root:

- start backend.bat
- start frontend.bat

## 7. Directory Guide

Frontend folders of interest:

- src/components: UI primitives and player controls.
- src/config: constants and default project config.
- src/engine: renderer/runtime logic and state.
- src/engine/audio: analysis pipeline.
- src/engine/rules: rule schema + compiler.
- src/engine/project: project file serialization.
- src/presets/default-project: startup preset bundle.

Backend folders of interest:

- backend/main.py: API entrypoint.
- backend/audio_analyzer.py: server-side analysis utilities.
- backend/presets: preset JSON corpus used for migration/defaults.

## 8. Extension Playbook

### Add a new parameter

1. Define it in ParamStore PARAMS.
2. Add default and migration-safe behavior.
3. Consume it in render/audio logic.
4. Ensure it survives snapshot/save/load round-trip.
5. Verify undo/redo and project save/load.

### Add a new rule input/output/operator

1. Update RuleDictionary schema.
2. Extend RuleCompiler logic.
3. Validate UI controls in ControlPanel.
4. Confirm expression and non-expression paths.
5. Test with existing presets and empty state.

### Add a new export format

1. Implement in main.js orchestration or dedicated module.
2. Reuse current snapshot/project helpers when possible.
3. Ensure deterministic filenames and metadata.

## 9. Known Risks and Guardrails

1. Partial setMany updates can accidentally wipe schema-heavy state if not merged before migration.
2. Rule/palette context must include params when evaluating palette or gradient helpers.
3. Any change that merges preset libraries on project load can reintroduce cross-project contamination.
4. Browser APIs for file handles require secure context constraints and user gestures.

## 10. Testing Checklist (Manual)

Minimum smoke tests before merge:

1. Launch app and load an audio file.
2. Verify play/pause/stop, mute toggle, speed popover slider, and speed presets.
3. Change key params and observe live render updates.
4. Save preset, reload preset, verify parity.
5. Save project, modify state, reload project, verify full restoration.
6. Attach file handle and verify autosave triggers after edits.
7. Export PNG and verify file output.

Post-processing checks:

1. Enable post-processing and bloom; confirm bloom is applied.
2. Disable post-processing; confirm bloom is not applied.
3. Save preset with post-processing off, reload preset, confirm post-processing and bloom checkboxes reflect saved state.

Rule engine checks:

1. Create spawned-only rule and observe effect.
2. Create allLivingFrame rule and verify persistent frame-by-frame influence.
3. Test color logic using palette helpers.

## 11. Release Workflow

Typical publish path when this engine is embedded by seesound-platform:

1. Build frontend dist in this repository.
2. Sync dist into platform public assets.
3. Build platform.
4. Deploy platform.

Keep source-of-truth discipline:

- Engine source changes belong here.
- Vendored build artifacts belong in seesound-platform.

## 12. Troubleshooting

### App opens but audio analysis is silent

- Confirm user interaction occurred before playback (browser autoplay policy).
- Check AudioContext state and resume path.
- Verify supported audio format and successful decode.

### Project autosave does not fire

- Ensure a file handle is attached via open/save-as picker.
- Confirm no active project-load transaction is in progress.

### Presets missing after reload

- Inspect localStorage for preset map key.
- Confirm load path is project payload replacement (not merge) behavior.

### Visual performance is low

- Reduce max particles and particle render percent.
- Lower canvas resolution.
- Simplify rules that run every living frame.

## 13. Contribution Guidelines

1. Keep changes modular and local to one subsystem when possible.
2. Preserve parameter schema compatibility; add migrations, do not silently break.
3. Prefer small, testable event-contract changes over global rewrites.
4. Document any new runtime event names in this README.
5. If adding dependencies, justify runtime impact.

## 14. Roadmap Suggestions

Potential next milestones:

1. Add automated unit tests for rule compilation and project payload migration.
2. Add end-to-end browser tests for project save/load/autosave behavior.
3. Separate render pipeline stages into testable micro-modules.
4. Add optional worker/off-main-thread processing for heavy analysis/rule-evaluation flows.
5. Introduce explicit schema migration registry for project payload versions.

## 15. Quick Start for New Developers

1. Read this file fully once.
2. Open frontend/src/main.js and trace startup to first render.
3. Inspect ParamStore and RuleDictionary to understand the state contract.
4. Run frontend dev server and validate one full preset + project save/load loop.
5. Make one small feature branch change and ensure no project persistence regressions.
