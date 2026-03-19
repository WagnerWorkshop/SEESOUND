# SEESOUND v1.0

SEESOUND is a real-time audio-to-visual system. It listens to music, extracts audio features, and renders them as a persistent or momentary particle field in a Three.js canvas.

In practical terms, this project lets you:

- Load audio and paint visuals from frequency energy over time.
- Control geometry, blending, camera, and persistence behavior.
- Build custom visual logic with a low-code rule builder (no hand-written shader code needed).
- Save and load full presets and complete project files.

## 1. What It Is

SEESOUND v1.0 is split into two apps:

- Frontend (Vite + Three.js): real-time rendering, control panel, rule builder, player, canvas tools.
- Backend (FastAPI): preset persistence, optional audio conversion endpoint, WebSocket bridge.

The frontend does the heavy real-time visual work. The backend stores and serves preset JSON data and broadcasts parameter changes across connected clients.

## 2. What It Does

At runtime, SEESOUND converts audio into visual state using several layers:

1. Audio analysis:
- Reads FFT bins and waveform energy from Web Audio API.
- Computes aggregate bands (bass, mid, high), peak frequency, pan.
- Computes advanced spectral metrics (centroid, flux, flatness, inharmonicity).

2. Base particle generation:
- For each eligible bin, spawns or updates particle attributes such as position, size, opacity, and color channels.

3. Rule engine overrides:
- Applies user-defined rules to spawned particles, living particles, background, or camera.
- Supports conditions, arithmetic operators, expressions, grouping, and ordering.

4. Render + interaction:
- Draws particles via Three.js points.
- Supports camera orbit/pan/look/zoom, fit-to-content, reset, and canvas resize/scale.

5. Persistence:
- Saves full parameter snapshots and rule sets as named presets.
- Saves full projects including audio blob + parameters into a downloadable JSON package.

## 3. How It Works (Architecture)

### Frontend flow

Main orchestration is in `frontend/src/main.js`:

- Initializes renderer, scene, and orthographic/perspective cameras.
- Creates `ParticleSystem` and feeds it live audio features every animation frame.
- Wires control panel state to runtime updates.
- Handles PNG export and project save/load events.

Core modules:

- `frontend/src/engine/ParticleSystem.js`: particle buffer management, spawn/living passes, render path.
- `frontend/src/engine/ControlPanel.js`: dynamic UI for all controls and rule builder.
- `frontend/src/engine/ParamStore.js`: canonical params, snapshots, local defaults, preset REST calls.
- `frontend/src/engine/rules/RuleCompiler.js`: compiles rule blocks into executable JS functions.
- `frontend/src/engine/rules/RuleDictionary.js`: allowed inputs, outputs, operators, validation.

### Backend flow

Backend server is in `backend/main.py`:

- REST:
  - `GET /api/presets`
  - `GET /api/presets/{name}`
  - `POST /api/presets`
  - `DELETE /api/presets/{name}`
  - `POST /api/audio/convert`
- WebSocket:
  - `WS /ws` for subscription, chunk analysis messages, and params broadcast.

Preset files are stored as JSON in `backend/presets`.

## 4. Main Concepts

### Rule targets and scopes

Targets define what a rule can affect:

- spawnedParticles
- allParticles
- background
- camera

Scopes define when particle rules apply:

- spawnedOnly: applies to newly created particles.
- allLivingFrame: re-applies across currently visible particles each frame.

### Rule structure

A rule block is composed of:

- metadata: id, group, subgroup, enabled, order
- condition: input/operator/value or expression
- actions: output/operator/value or expression

Rules execute in order. If two rules conflict on a set operation, later rules win.

### Preset types

- Main presets: complete param snapshots.
- Rule presets: stored with the `rule__` name prefix and used for selected-rule workflows in the rule builder.

## 5. Project Structure

Top-level files/folders in v1.0:

- `backend/`: FastAPI server, audio analyzer, presets, requirements.
- `frontend/`: Vite app, renderer/runtime engine, UI modules, styles.
- `start backend.bat`: starts backend on port 8000 (and installs missing Python deps).
- `start frontend.bat`: starts frontend dev server on port 5173.

## 6. Setup and Installation (Windows)

## Prerequisites

- Python 3.10+ available on PATH.
- Node.js LTS.
- pnpm (global install recommended).

Install pnpm globally if needed:

```powershell
npm install -g pnpm
```

### Install backend dependencies

From `SEESOUND v1.0` root:

```powershell
cd backend
python -m pip install -r requirements.txt
```

### Install frontend dependencies

From `SEESOUND v1.0` root:

```powershell
cd frontend
pnpm install
```

## 7. Running the App

### Option A: batch scripts

Run in two separate terminals:

1. `start backend.bat`
2. `start frontend.bat`

Then open:

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

### Option B: manual commands

Backend:

```powershell
cd backend
python main.py
```

Frontend:

```powershell
cd frontend
pnpm dev
```

## 8. Usage Guide

### Basic workflow

1. Start backend and frontend.
2. Load an audio file in the player (bottom overlay).
3. Press play to render live, or use Paint All to process the full track quickly.
4. Adjust parameters in the right control panel.
5. Optionally add rules in Rule Builder.
6. Save a main preset and/or project file.
7. Export PNG from the player controls.

### Camera and canvas controls

- Left drag: orbit around origin.
- Middle drag: pan.
- Right drag: look/rotate view.
- Mouse wheel: zoom/dolly.
- HUD buttons:
  - reset camera
  - fit to visible particles
  - clear canvas

Canvas has explicit width, height, and scale controls. Scale changes on-screen display size, not render resolution.

### Rule builder workflow

1. Create rules with condition + action.
2. Group/subgroup rules for organization.
3. Drag and reorder to control evaluation order.
4. Select rules and save/load selected rule presets.
5. Use delete key for selected items.

## 9. Data and Persistence

### Presets

- Stored on backend as JSON under `backend/presets`.
- Payload shape:

```json
{
  "name": "preset-name",
  "params": {
    "inputGain": 1.0,
    "maxParticles": 262144,
    "ruleBlocks": []
  }
}
```

### Projects

Project save includes:

- current parameter snapshot
- optional preset name
- embedded audio data URL and file name

This lets a project file restore both settings and source audio.

## 10. API Summary

### REST

- `GET /api/presets`: list preset names.
- `GET /api/presets/{name}`: load one preset.
- `POST /api/presets`: save/overwrite preset.
- `DELETE /api/presets/{name}`: remove preset.
- `POST /api/audio/convert`: convert uploaded audio to WAV PCM16.

### WebSocket messages

Common message types on `WS /ws`:

- `subscribe`
- `audio_chunk`
- `params_update`
- `pong`

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
