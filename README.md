# SEESOUND v1.0

SEESOUND is an interactive audio-to-visual instrument. You load a track, the app analyzes the sound in real time, and a 3D particle system reacts to both detailed frequency content and overall musical energy. You can shape the look with direct controls, then push it further with a rule engine that lets you define custom behavior without writing shaders.

This branch is a frontend-only build focused on local workflow and project files.

## What The App Does

SEESOUND turns audio into visuals in layers:

1. Audio analysis
- Uses Web Audio API analysis data per frame.
- Reads per-bin magnitude plus derived features used by the rule system.
- Maintains both detail-level and overall metrics so rules can respond to either.

2. Base visual generation
- Maps analyzed audio into particle spawn/update behavior.
- Renders with Three.js for high particle counts and smooth camera navigation.
- Supports persistent trails and time-based painting workflows.

3. Rule-based override system
- You define conditions and actions in a visual rule editor.
- Rules can target particle attributes, background behavior, and camera responses.
- Rule ordering, grouping, and enable/disable states let you build layered visual logic.

4. Playback-driven interaction
- Audio player controls drive live rendering and batch workflows.
- Paint All can process a full track pass.
- Export controls allow still image output and other production workflows supported by the current build.

5. Stateful projects and presets
- Parameters and rules are persisted as presets and project files.
- Project files carry full app state and can be reopened later.
- Autosave is supported when attached to a project file handle.

## Current Architecture

SEESOUND v1.0 is organized around a Vite app in the frontend folder.

- Entry orchestration: frontend/src/main.js
- Control panel UI: frontend/src/engine/ControlPanel.js
- Central param state and preset storage: frontend/src/engine/ParamStore.js
- Project payload schema and parsing: frontend/src/engine/project/ProjectIO.js
- Rules dictionary and sanitization: frontend/src/engine/rules/RuleDictionary.js
- Rules compilation/runtime integration: frontend/src/engine/rules modules
- Audio player component: frontend/src/components/AudioPlayer.js
- Unified styling: frontend/src/styles/ui.css

Key architectural patterns:

- ParamStore as single source of truth for runtime settings.
- Menu and settings UI are generated and synchronized from live state.
- Project save/load is event-driven through window custom events.
- Rule blocks are sanitized/compiled before execution.
- Runtime render loop reads normalized params continuously.

## Core UX Areas

### File and Project Menu

- Create/open/save project workflows.
- Save local presets.
- Save presets into the current project library.
- Project name display in UI with automatic state updates.
- Project autosave behavior when attached to a writable file handle.

### View Menu

- Canvas dimensions and zoom.
- Camera position/target and projection mode.
- Axonometric presets and perspective controls.
- Guides such as origin axes and coordinate guides.

### Settings Menu

- Input sensitivity and resolution.
- Frequency and normalization ranges.
- Geometry and motion-affecting controls.
- Additional behavior tuning controls exposed by ParamStore definitions.

### Rules Menu

- Grouped rule authoring workflow.
- Condition editor with selectable inputs and operators.
- Token-based expression builder for actions.
- Drag/drop token ordering and insertion gaps.
- Rule enable state, targeting context, and ordered evaluation.

### Audio Player

- Open local audio files.
- Play/pause/stop/seek controls.
- Speed control.
- Paint All and recording-related triggers.
- Responsive and collapsible mobile/desktop behavior.

## Data Model And Persistence

## Params

Runtime parameters are defined in ParamStore and persisted through snapshots. They include:

- input processing and normalization values
- camera and view states
- guide visibility toggles
- rule engine state and rule UI state

## Presets

Preset paths in this branch include:

- root presets bundled from presets/*.json
- user local presets stored in browser local storage
- hidden root preset state metadata in local storage

Rule presets are represented separately by naming convention and sanitization flow.

## Project Files

ProjectIO defines a schema-driven JSON payload with fields such as:

- schemaVersion
- createdAt / updatedAt
- projectName
- presetName
- params
- presetLibrary

Default extension: .ssp.json

Projects can be opened through modern file picker APIs, with fallback behavior where needed.

## How A Typical Session Works

1. Launch the app.
2. Load an audio file in the bottom player.
3. Press play to run live visual response.
4. Tune View and Settings controls for base look and motion.
5. Add rules to shape behavior by condition.
6. Save local presets for reusable parameter states.
7. Save project state to a .ssp.json file.
8. Continue working with autosave attached to that file.
9. Reopen later and resume exactly where you left off.

## Controls And Interaction Notes

Canvas and camera:

- drag/orbit, pan, zoom behavior depends on active camera control bindings
- projection switching is available in View
- fit/reset tools are available through UI actions and events

Rules:

- rules run in order
- later writes can override earlier writes on the same target property
- disabled rules remain stored but do not execute

Projects:

- New Project means no bound project file name yet
- once loaded or saved, UI displays the active project name
- name display strips the .ssp.json suffix for readability

## Repository Layout

Top-level folders/files in this repo state:

- frontend: main application code and assets
- presets: bundled root preset JSON files
- start frontend.bat: Windows bootstrap script for pnpm and Vite
- README.md: this document

## Setup

Prerequisites:

- Node.js LTS
- pnpm

Install dependencies:

1. Open terminal in repo root.
2. Change into frontend.
3. Run pnpm install.

Windows quick start:

- run start frontend.bat from repo root

Manual run:

- in frontend run pnpm dev
- open http://localhost:5173

Build for production:

- in frontend run pnpm build

Preview production build:

- in frontend run pnpm preview

## Technology Stack

- Vite
- Vanilla JavaScript modules
- Three.js
- noUiSlider
- Browser File System Access APIs with fallback handling

## Design Intent

SEESOUND is designed as both:

- an exploratory visual instrument for live interaction
- a repeatable production tool through presets and project files

The combination of direct parameter controls and a rule engine allows both fast iteration and deep customization.

## Known Operational Notes

- Large bundles may produce chunk size warnings during build; warnings are non-blocking.
- Some advanced file operations depend on browser support for picker APIs.
- Local storage is used for user defaults and local preset persistence.

## Version Note

This README documents the current SEESOUND v1.0 state in this branch (frontend-focused project and local persistence workflow).

## 11. Troubleshooting

### Frontend cannot reach backend

- Confirm backend is running on port 8000.
- Check status indicator in UI (connection text/dot).
- Verify no firewall rule blocks localhost traffic.

### pnpm not found

- Install with `npm install -g pnpm`.
- Reopen terminal after install.

### Python package errors

- Re-run:

```powershell
cd backend
python -m pip install -r requirements.txt
```

### Large scenes run slowly

- Lower max particle capacity.
- Reduce Particle Render %.
- Prefer spawned-only rules when possible.
- Use simpler blend modes and reduce expensive all-particles logic.

## 12. Development Notes

- Frontend build:

```powershell
cd frontend
pnpm build
```

- Backend stack: FastAPI, Uvicorn, librosa, numpy, soundfile.
- Frontend stack: Vite, Three.js, modular JS runtime.

## 13. Current Scope and Non-Goals

SEESOUND v1.0 is optimized for local creative exploration and iterative visual design.

It is not currently designed as:

- a hardened multi-tenant cloud service
- a long-term media asset database
- a finalized plugin/sdk product

## 14. License and Credits

Add your preferred license at repository level (MIT, Apache-2.0, etc.) if public distribution is planned.
