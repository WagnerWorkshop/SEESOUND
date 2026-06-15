# SEESOUND Engine — Audio-to-Visual Particle System

**SEESOUND** is a browser-first audio-to-visual engine that transforms music into real-time, rule-driven particle motion graphics. It runs entirely in the browser (Chrome/Edge/Firefox) with no plugins or backend dependencies.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Features Overview](#features-overview)
3. [User Interface](#user-interface)
4. [Entity & Rule System](#entity--rule-system)
5. [Element Types](#element-types)
6. [Spacing Modes](#spacing-modes)
7. [Cloud Shapes](#cloud-shapes)
8. [Rule Variables](#rule-variables)
9. [Rule Outputs](#rule-outputs)
10. [Presets & Templates](#presets--templates)
11. [Settings Reference](#settings-reference)
12. [Known Bugs & Limitations](#known-bugs--limitations)
13. [Architecture & Programming Model](#architecture--programming-model)
14. [Development Setup](#development-setup)

---

## Quick Start

1. Open the built app in a browser (or run `pnpm dev` in the `frontend/` directory)
2. Click the **Styles** menu (gear icon) on the left rail
3. Click **Add Element** to create your first entity
4. Choose a **Type** (Particle, Cloud, or Line)
5. For Cloud elements, choose **Spacing** (Coordinates or Network) and **Cloud Shape** (Cylindrical, Spherical, Random 3D)
6. Open an audio file using the player at the bottom
7. Press Play — particles will appear based on the default frequency-based positions
8. Add rules in the entity editor to control position, size, color, opacity, and more
9. Every rule change recompiles instantly — new particles use the new rules

---

## Features Overview

| Feature | Description |
|---|---|
| **Audio Analysis** | Dual FFT: 16384-bin high-resolution (default) + 1024-bin rhythm/transient FFT |
| **Quad-Brain Worklet** | Pitch detection, texture analysis, rhythm/transient detection, harmonic tracking |
| **Rule Engine** | Low-code visual rule builder with conditions and math expressions |
| **Particle Modes** | Momentary (fresh particles each frame) and Painting (accumulate trails) |
| **Bloom Post-Processing** | Configurable bloom with strength, radius, threshold |
| **Exponential Fog** | Distance-based fog matching background color |
| **Camera Controls** | Orbit (left-drag), pan (middle-drag/middle-click), right-drag rotation, scroll zoom |
| **Perspective/Ortho** | Toggle between perspective and axonometric camera projections |
| **Force Graph** | Network spacing mode with physics simulation (nodes repel/attract via harmonics) |
| **3D Cloud Shapes** | Cylindrical, Spherical, and Random 3D harmonic particle distributions |
| **Tuners** | Right-click any rule slider to expose it as a real-time tuner in the Start menu |
| **Presets** | Save/load user presets; factory templates included |
| **Projects** | Save/load .ssp project files with full state, presets, and audio references |
| **Export** | PNG (with/without background), OBJ mesh, project file, settings JSON |
| **Video Recording** | Record canvas + audio to WebM video |
| **Multi-language** | English, German, French, Spanish, Italian, Hungarian |

---

## User Interface

### Layout

```
┌─────────────────────────────────────────────────────────┐
│  Canvas (Three.js)                                       │
│                                                          │
│  ┌──────────┐  ┌──────────────────────────────────┐     │
│  │ Menu     │  │ Control Panel (right side)        │     │
│  │ Rail     │  │ - Start (File/Presets/Tuners)     │     │
│  │          │  │ - View (Camera/Canvas/Blend)      │     │
│  │ 🏠 File  │  │ - Settings (FFT/Normalization)   │     │
│  │ 🎨 View  │  │ - Styles (Elements/Rules)        │     │
│  │ ⚙️ Setngs│  └──────────────────────────────────┘     │
│  │ 🎚 Styles│                                            │
│  └──────────┘  ┌──────────────────────────────────┐     │
│                │ Audio Player (bottom bar)         │     │
│                │ [🎵] ▶ ⏹ ⏪ ⏩ 🔇 🖼 🎥 1.00x   │     │
│                │ [████████████░░░░░░] 1:23 / 4:56 │     │
│                └──────────────────────────────────┘     │
└─────────────────────────────────────────────────────────┘
```

### Menu Panels

- **Start** — New/save/open projects, preset library, tuner controls, template gallery
- **View** — Camera position/target, canvas size/scale, background color, blend mode, bloom, fog, projection
- **Settings** — Input gain, CQT resolution, FFT sizes, normalization ranges, warmup frames
- **Styles** — Elements list, rule builder popup, background/camera global rules

### Audio Player

- File open, play/pause, stop, ±10s seek, mute, PNG capture, video recording
- Playback speed slider (0.25x – 4.0x) with quick presets

---

## Entity & Rule System

The core of SEESOUND is the **entity-rule** model:

1. **Entities** represent visual elements (particles, clouds, lines)
2. Each entity contains **rules** that control its behavior
3. Rules are compiled into executable JavaScript functions in real-time
4. Rule changes recompile instantly — new spawned particles use the latest rules

### Anatomy of a Rule

Each rule has:
- **Target** — which particle group to affect (`spawnedParticles`, `allParticles`, `lines`, `background`, `camera`)
- **Condition** — when to apply (always, or an audio variable comparison)
- **Actions** — what to set (position, color, size, shape, etc.)
- **Expression** — math formula using audio variables as inputs

### Condition Types

| Type | Example | Effect |
|---|---|---|
| Always | `always` | Rule applies to every particle |
| Comparison | `binAttackTime >= 0.5` | Only when condition is true |
| Expression | `amplitude > 0.2` | Dynamic thresholding |

### Operators

| Operator | Action |
|---|---|
| `set` | Overwrite the output value |
| `add` | Add to existing value |
| `subtract` | Subtract from existing value |
| `multiply` | Multiply existing value |
| `divide` | Divide existing value |
| `clamp` | Clamp to ±absolute value |

### Spawn Rules vs Living Rules

- **`spawnedParticles`** — runs once per particle when it's created. Use for initial position, size, color
- **`allParticles`** — runs every frame on every visible particle. Use for real-time animation, color cycling
- **`lines`** — runs once per line segment at spawn time
- **`background`** — runs every frame to set background color
- **`camera`** — runs every frame to modify camera position/zoom

---

## Element Types

### Particle (default)

Standard light particles. Each particle is a small point or circle that can move in 3D space.

**Available outputs:** `x`, `y`, `z`, `size`, `red`, `green`, `blue`, `hue`, `saturation`, `brightness`, `opacity`, `shapeType`, `particleCount`

**Typical use:** Frequency-based Y positioning, time-based X scrolling, amplitude-driven size/opacity

### Cloud

Cloud elements use audio analysis to create harmonic "entities" — groups of fundamentals and overtones that move together as a cloud. Cloud mode enables the full Quad-Brain pipeline for pitch/texture/rhythm/tracker analysis.

**Sub-types by spacing:**
- **Coordinates mode:** Fundamentals have XYZ rules; harmonics are distributed via aura around fundamentals
- **Network mode:** No direct XYZ rules — fundamentals are positioned by a force-directed graph solver

### Line

Line segments that connect frequency bins. Each line has a midpoint position, length, direction axis, and thickness.

**Available outputs:** `x`, `y`, `z`, `length`, `direction`, `thickness`, `lineCount`, `red`, `green`, `blue`, `hue`, `saturation`, `brightness`, `opacity`

---

## Spacing Modes

### Coordinates Mode

The user explicitly controls particle positions via XYZ rules. Fundamentals (spawnedParticles rules) get positioned in 3D space. For cloud elements, harmonics are distributed around their fundamental's position using the aura system.

### Network Mode (Cloud only)

A force-directed graph layout replaces manual XYZ positioning. The GraphSolver computes pairwise forces between harmonic objects each frame:

| Force | Description | Rule Variable |
|---|---|---|
| **Repulsion** | Every node pushes every other node away ("personal space") | `repulsion` (0-1) |
| **Center Gravity** | Gentle pull toward the (0,0,0) origin | `centerGravity` (0-1) |
| **Tension** | Spring between fundamentals sharing a musical relationship (unison, third, fourth, fifth, octave) | `tension` (0-1) |

Damping, velocity clamping, and force limiting are automatic. Positions are scaled to canvas units.

---

## Cloud Shapes

When `entityShapeType == 'cloud'` and `spacingMode == 'coordinates'`, the aura system distributes harmonic particles around the fundamental position:

| Shape | Parameters | Description |
|---|---|---|
| **Cylindrical** | `auraDistance`, `auraAngle`, `auraElevation` | Particles in a cylinder around Y axis |
| **Spherical** | `auraDistance`, `auraAngle` (longitude), `auraLatitude` | Particles on a sphere surface |
| **Random 3D** | `cloudSize` only | Random positions in a spherical volume |

All shapes are scaled by `cloudSize` (0-1).

---

## Rule Variables

### Audio Feature Variables (available in all modes)

| Variable | Range | Description |
|---|---|---|
| `amplitude` | 0–1 | Frame-wide RMS amplitude (normalized) |
| `globalRmsEnergy` | 0–1 | Frame-wide RMS energy |
| `frequencyHz` | 0–22050 | Peak frequency in Hz |
| `normFreq` | 0–1 | Normalized log-frequency |
| `peakFreq` | 0–22050 | Peak frequency bin |
| `bass` | 0–1 | Energy below 250 Hz |
| `mid` | 0–1 | Energy 250–4000 Hz |
| `high` | 0–1 | Energy above 4000 Hz |
| `pan` | -1–1 | Stereo pan position |
| `spectralCentroid` | 0–1 | Normalized spectral centroid |
| `spectralFlux` | 0–1 | Spectral change between frames |
| `spectralFlatness` | 0–1 | Noise vs tone ratio (0=tone, 1=noise) |
| `inharmonicity` | 0–1 | Inharmonicity measure |
| `peakAmplitude` | 0–1 | Peak amplitude |
| `zeroCrossingRate` | 0–1 | Zero-crossing rate |
| `spectralRolloff` | 0–1 | Spectral rolloff point |
| `spectralSpread` | 0–1 | Spectral spread |
| `spectralSkewness` | 0–1 | Spectral skewness |
| `chromagram` | 0–1 | Chroma energy |
| `time` | 0–∞ | Current audio time in seconds |
| `deltaTime` | 0–1 | Time since last frame |
| `audioLengthSec` | 0–∞ | Total audio duration |
| `canvasWidth` | 0–∞ | Canvas width in units |
| `canvasHeight` | 0–∞ | Canvas height in units |
| `canvasWidthPx` | 0–∞ | Canvas width in pixels |
| `canvasHeightPx` | 0–∞ | Canvas height in pixels |
| `isFundamental` | 0–1 | 1 if bin is a fundamental, 0 if harmonic |

### Time-Domain Variables (per-bin, particle mode)

| Variable | Range | Description |
|---|---|---|
| `binMagnitude` | 0–1 | Per-bin magnitude |
| `binPhase` | 0–1 | Per-bin phase |
| `binFlux` | -1–1 | Per-bin spectral flux |
| `binPhaseDeviation` | 0–1 | Per-bin phase deviation |
| `binAttackTime` | 0–1 | Per-bin attack time |
| `binEnvelope` | 0–3 | Per-bin envelope |
| `binEnvelopeState` | 0–3 | Envelope state |
| `binRMSEnergy` | 0–1 | Per-bin RMS energy |
| `notePitchClass` | 0–11 | MIDI pitch class |
| `octave` | -2–12 | MIDI octave |

### Entity Variables (cloud mode only)

| Variable | Range | Description |
|---|---|---|
| `fundamentalHz` | 0–22050 | Detected fundamental frequency |
| `fundamentalPitch` | 0–127 | MIDI pitch of fundamental |
| `fundamentalNote` | 0–11 | Pitch class of fundamental |
| `entityCentroid` | 0–22050 | Spectral centroid of entity |
| `entityFlatness` | 0–1 | Spectral flatness of entity |
| `entityInharmonicity` | 0–1 | Inharmonicity of entity |
| `entityVolume` | 0–1 | Volume of entity |
| `entityAge` | 0–∞ | Age in seconds |
| `streamId` | 0–1 | Tracking stream ID |
| `globalTransient` | 0–10 | Transient intensity |

---

## Rule Outputs

| Output | Range | Targets | Description |
|---|---|---|---|
| `x` | -∞–∞ | spawnedParticles, allParticles, lines, camera | X position |
| `y` | -∞–∞ | spawnedParticles, allParticles, lines, camera | Y position |
| `z` | -∞–∞ | spawnedParticles, allParticles, lines, camera | Z position |
| `size` | 0–∞ | spawnedParticles, allParticles | Particle size |
| `particleCount` | 0–1 | spawnedParticles | Spawn probability (0=never, 1=always) |
| `shapeType` | enum | spawnedParticles, allParticles | square or circle |
| `red` | 0–1 | all | Red channel |
| `green` | 0–1 | all | Green channel |
| `blue` | 0–1 | all | Blue channel |
| `hue` | 0–1 | all | Hue (HSB) |
| `saturation` | 0–1 | all | Saturation (HSB) |
| `brightness` | 0–1 | all | Brightness (HSB) |
| `opacity` | 0–1 | spawnedParticles, allParticles, lines | Alpha |
| `length` | 0–∞ | lines | Line segment length |
| `direction` | enum | lines | x, y, or z axis |
| `thickness` | 0–64 | lines | Line thickness |
| `lineCount` | 0–1 | lines | Line spawn probability |
| `spread` | 0–1 | allParticles (cloud) | Cloud scatter radius |
| `zoom` | 0.05–32 | camera | Camera zoom |
| `targetX/Y/Z` | -∞–∞ | camera | Camera target |
| `angleOfView` | 20–120 | camera | Perspective FOV |

### Cloud-Specific Outputs

| Output | Range | Spacing Mode | Description |
|---|---|---|---|
| `cloudSize` | 0–1 | all | Master cloud scale multiplier |
| `auraDistance` | 0–1 | coordinates | Distance from fundamental center |
| `auraAngle` | 0–1 | coordinates | Angle around Y (cylindrical) / longitude (spherical) |
| `auraElevation` | 0–1 | coordinates | Z height (cylindrical only) |
| `auraLatitude` | 0–1 | coordinates | Latitude (spherical only) |
| `repulsion` | 0–1 | network | Node repulsion strength |
| `centerGravity` | 0–1 | network | Attraction to origin |
| `tension` | 0–1 | network | Spring between harmonic nodes |

### Helper Functions

Available in expressions:

- `clamp(value, min, max)` — Clamp a value
- `lerp(a, b, t)` — Linear interpolation
- `smoothstep(edge0, edge1, value)` — Smooth threshold
- `pow(base, exp)` — Power
- `abs(value)` — Absolute value
- `min(a, b)` / `max(a, b)` — Min/max
- `mod(value, max)` — Modulo
- `sin(rad)` / `cos(rad)` — Trigonometric
- `step(edge, value)` — Step function
- `iif(condition, trueVal, falseVal)` — Ternary conditional
- `avg(...values)` — Average of values

---

## Presets & Templates

### User Presets
- Save current settings via **Start → Presets → +**
- Load via left-click on preset card
- Right-click for rename, set thumbnail, delete
- Presets are stored in browser localStorage

### Factory Templates
- Pre-built templates shipped with the app
- Loaded from `public/templates/factory-templates.json`
- Fallback built-in list hard-coded in `MenuFile.js`
- Click a template to load; click + to copy to My Presets

### Included Templates

| Template | Element Type | Spacing | Shape | Description |
|---|---|---|---|---|
| **Spectrum Flow** | Particles | Coordinates | — | Full-spectrum visualization with time-based X, frequency Y, hue by centroid |
| **Auroral Clouds** | Cloud | Coordinates | Cylindrical | Cloud with aura positioning, entity-level coloring |
| **Harmonic Network** | Cloud | Network | Spherical | Force-directed graph with tension between harmonic nodes |
| **Spherical Aura** | Cloud | Coordinates | Spherical | Full 3D sphere distribution with latitude/longitude |
| **Timbre Lines** | Particles + Lines | Coordinates | — | Hybrid scene with particles and timbre-driven line segments |
| Linear Basic | Particles | Coordinates | — | Classic frequency-based scrolling |
| Linear Colors | Particles | Coordinates | — | Colorful frequency spectrum |
| Holistic 3D | Cloud | Coordinates | — | 3D harmonic cloud |
| Conversation Dual Clouds | Cloud | Coordinates | — | Two-cloud harmonic scene |
| The Vortex | Particles | Coordinates | — | Spiraling particle vortex |
| The Transient Web | Particles | Coordinates | — | Transient-driven web patterns |

---

## Settings Reference

### Audio Processing
| Setting | Default | Range | Description |
|---|---|---|---|
| Input Gain | 1.0 | 0–3 | Amplitude scaling before analysis |
| Frequency FFT Size | 16384 | 1024–32768 | Main FFT resolution |
| Rhythm FFT Size | 1024 | 256–4096 | Transient detection FFT |
| CQT Detail Resolution | 1000 | 100–5000 | Log-spaced bins per 10 octaves |
| Activity Interval | 10 | 1–64 | Flux smoothing window (frames) |
| Warmup Frames | 5 | 0–60 | Initial mute frames to prevent play-click impulse |

### Normalization Ranges
| Range | Description |
|---|---|
| Frequency Range | Min/Max Hz for log-frequency normalization |
| Volume (dBFS) | Per-bin magnitude normalization |
| Instability (rad) | Phase deviation normalization |
| Attack Sharpness (ms) | Attack time normalization |
| Energy (dBFS) | Global RMS normalization |
| Sharpness (Hz) | Spectral centroid normalization |
| Activity (AU) | Spectral flux normalization |
| Noisiness (ratio) | Spectral flatness normalization |

### Blend Modes
- **Screen** (default) — Additive glow, good for particle effects
- **Alpha** — Standard alpha blending
- **Multiply** — Darken blend

### Persistence
- **Momentary** — Fresh particles each frame (trails fade instantly)
- **Painting** — Accumulate particles, trails persist

### Projection
- **Perspective** — 3D perspective camera with configurable FOV
- **Axonometric** — Orthographic camera with preset angles (orthoXY, isometric, fortyFive, topXZ, orthoYZ)

---

## Known Bugs & Limitations

### Current Bugs

1. **`globalTransient` variable may report 0 in particle mode** — The quad-brain rhythm detection needs sufficient samples to stabilize. Warmup frames help but the initial value may be 0.

2. **Audio playback interruption on rapid play/pause** — The AudioContext security model can suspend the context if media elements are rapidly cycled.

3. **Network mode fallback nodes have random pitch classes** — When no harmonic objects exist yet, the GraphSolver creates fallback nodes with random pitch assignments. This means the initial layout may not reflect actual audio relationships.

4. **`canvasWidth`/`canvasHeight` in rules use fixed View-menu values** — These are set in the View menu and do NOT automatically match the canvas unit-size from camera zoom/pan.

5. **First-frame impulse on audio play** — The warmup frame counter (default 5) prevents most of the initial FFT burst, but very low warmup values (0-2) may still show a brief visual flash.

6. **Eraser (clear canvas) button resets all particles** — It does NOT re-spawn them. Only new audio frames will repopulate.

### Known Limitations

1. **16384-bin FFT at 44100 Hz provides 2.7 Hz per bin** — This is adequate for music visualization but not for scientific-precision pitch detection.

2. **Browser AudioContext autoplay policy** — Audio cannot start until a user gesture (click) has occurred. The play button triggers this automatically.

3. **Chrome extension message warning** — The console warning "A listener indicated an asynchronous response..." is from a browser extension, not from SEESOUND.

4. **No MIDI or external control** — All parameters are controlled via the UI only.

5. **GPU particle count is limited by browser/device** — 2M particles works on modern GPUs; older devices may experience lag above 500K.

6. **LocalStorage quota** — Presets and project drafts are stored in localStorage (~5-10 MB limit). Large projects with many presets may hit this limit.

---

## Architecture & Programming Model

### High-Level Architecture

```
┌──────────────────────────────────────────────────────────┐
│ main.js (Orchestrator)                                    │
│  ┌──────────┐ ┌─────────────┐ ┌──────────────────────┐  │
│  │AudioEng. │ │ParticleSys. │ │SeesoundEngine (API)  │  │
│  │          │ │             │ │                      │  │
│  │16384 FFT │ │GPU buffers  │ │Mode derivation       │  │
│  │1024 FFT  │ │Rule compile │ │GraphSolver           │  │
│  │QuadBrain │ │Aura→XYZ    │ │Audio usage routing   │  │
│  │Spectral  │ │Living rules │ │                      │  │
│  └────┬─────┘ └──────┬──────┘ └──────────┬───────────┘  │
│       │              │                   │              │
│       └──────────────┴───────────────────┘              │
│                          │                              │
│                    ┌─────┴──────┐                       │
│                    │Three.js    │                       │
│                    │Renderer    │                       │
│                    │+Composer   │                       │
│                    └────────────┘                       │
└──────────────────────────────────────────────────────────┘
```

### Key Files

| File | Purpose |
|---|---|
| `frontend/src/main.js` | Application bootstrap, animation loop, event wiring |
| `frontend/src/engine/ParamStore.js` | Central parameter state, undo/redo, localStorage persistence |
| `frontend/src/engine/ControlPanel.js` | UI control panel and rule builder (shared deps) |
| `frontend/src/engine/ParticleSystem.js` | Three.js GPU buffers, particle lifecycle, rule application |
| `frontend/src/engine/SeesoundEngine.js` | Headless API, mode derivation, graph solver integration |
| `frontend/src/engine/audio/AudioEngine.js` | Web Audio API: FFT, spectral features, rhythm detection |
| `frontend/src/engine/audio/BinAnalysisWorklet.js` | AudioWorklet: CQT, pitch brain, texture brain, harmonic objects |
| `frontend/src/engine/audio/AudioFeatures.js` | Main-thread spectral math helpers |
| `frontend/src/engine/rules/RuleCompiler.js` | Compiles rule blocks into executable JS functions |
| `frontend/src/engine/rules/RuleDictionary.js` | Canonical input/output schemas and validation |
| `frontend/src/engine/rules/GraphSolver.js` | Force-directed graph for network spacing mode |
| `frontend/src/engine/rules/RuleCompiler.js` | Rule expression parsing and function generation |
| `frontend/src/engine/ui/MenuFile.js` | Start menu: projects, presets, tuners, templates |
| `frontend/src/engine/ui/MenuView.js` | View menu: camera, canvas, post-processing |
| `frontend/src/engine/ui/MenuSettings.js` | Settings menu: FFT sizes, normalization, time mode |
| `frontend/src/engine/ui/RuleEditorPanel.js` | Rules/stylesheet popup: entity list, rule cards |
| `frontend/src/components/AudioPlayer.js` | Transport controls, file loading, playback speed |
| `frontend/src/components/SliderControl.js` | Reusable slider UI component |
| `frontend/src/components/RangePairControl.js` | Reusable min/max range control |

### Frame Loop (main.js animate)

Each frame (~16.7ms at 60fps):

1. `ae.update()` — Read FFT data, compute spectral features, rhythm transient
2. Check `isActuallyPlaying` — if so, call `ps.update()`
3. `ps.update()` — Iterate frequency bins, spawn particles with defaults, apply spawn rules
4. Apply living rules to all visible particles
5. Apply background/camera rules
6. Render Three.js scene (with optional bloom compositing)
7. Sync camera state to UI
8. Tick SeesoundEngine (graph solver, probe inputs)

### Rule Compilation Pipeline

```
Rule Entity (JSON)
    ↓
_normalizeRuleSource() — Flatten entities + globals into flat rule array
    ↓
sanitizeRuleBlocks() — Validate inputs/outputs, coerce types
    ↓
compileRules() — Filter by target, generate JS function source code
    ↓
new Function() — Compile source into callable functions
    ↓
applySpawnRules / applyLivingRules — Called per particle per frame
```

---

## Development Setup

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Install
```bash
cd frontend
pnpm install
```

### Development Server
```bash
pnpm dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
pnpm build
```
Output in `frontend/dist/`

### Adding a New Template
1. Create a JSON preset file in `frontend/public/templates/presets/`
2. (Optional) Add a thumbnail SVG in `frontend/public/templates/thumbnails/`
3. Register in `frontend/public/templates/factory-templates.json`

### Adding a New Rule Variable
1. Add the variable to the i18n locale file (`frontend/src/i18n/en.json`, `ruleVariables` array)
2. Add its range and mode gating in `frontend/src/engine/rules/RuleDictionary.js`
3. Add mode gating in `frontend/src/engine/DependencyGraph.js`
4. Add gating in `frontend/src/engine/ui/RuleEditorPanel.js` (particleOnly/cloudOnly sets)
5. Wire the actual value in `ParticleSystem.js` or `AudioEngine.js`

### Adding a New Rule Output
1. Add the output to `RuleDictionary.js` (`_outputEntries` array)
2. Add to `DependencyGraph.js` (`MODE_GATED_VARS` and `getOutputsForMode()`)
3. Add to `ControlPanel.js` (`FIXED_RULE_ROWS`)
4. Add to `RuleEditorPanel.js` (output description case)


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

- Project load restores incoming presets additively so factory/default presets remain available.
- Autosave writes only when a File System Access file handle is attached and no project-load transaction is in progress.
- Save writes only to an already attached file handle; without a handle the user is prompted to use Save As first.
- Save As attaches a new handle via `showSaveFilePicker` when available.
- Open uses `showOpenFilePicker` when available and falls back to hidden file-input selection otherwise.

## 4. Default Project Bootstrapping

Default startup project state is currently defined by `getDefaultProjectDefinition()` in `frontend/src/main.js`.

Bootstrap behavior:

- On startup, app loads this default project payload.
- Default payload uses current params snapshot, `presetName: default`, and an empty `presetLibrary`.
- If no standard preset exists, the app creates a `default` preset from the current snapshot.
- Local draft recovery is checked first; if found, a recovery prompt is emitted and the user can restore or dismiss.
- Default file label is `New Project.ssp` until a handle is attached.

Template bootstrapping:

- Start menu templates are fetched from `frontend/public/templates/factory-templates.json`.
- If manifest fetch fails or is empty, a built-in fallback template list is rendered.

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
