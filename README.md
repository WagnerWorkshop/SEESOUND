# SEESOUND

SEESOUND is a music visualization app that turns live or recorded audio into interactive particle-based visuals. Use a visual Rule Builder to control how particles respond to audio features (volume, frequency bands, spectral metrics, etc.) — no programming required for most edits.

Core idea
- Map audio inputs (amplitude, bass/mid/high, spectral centroid/flux/flatness, inharmonicity, etc.) to particle outputs (position, size, color, alpha, shape).
- Author rules in a low-code, row-based editor; rules compile to safe, cached JavaScript functions at runtime.
- Choose rule scope: `spawnedOnly` (affects newly spawned particles) or `allLivingFrame` (affects active particles each frame).

Main features
- Real-time music visualization with Three.js Points.
- Low-code Rule Builder: conditions → actions UI for non-coders.
- JIT RuleCompiler with hash-based caching and safe whitelisted helpers.
- Advanced audio features: spectral centroid, spectral flux, spectral flatness, inharmonicity (normalized + smoothed).
- Per-particle shapes in shader: `square` and `circle`.
- Active GPU ring buffer + archived CPU chunks with rehydration for long sessions.
- Preset persistence and schema migration support.

Quick install (short)

Prerequisites
- Node.js (LTS recommended)
- pnpm (recommended) — or npm / yarn
- Python 3.8+ (3.10+ recommended)
- Git



Clone
```
git clone https://github.com/WdgvndR/SEESOUND.git
cd SEESOUND
```

Backend (Linux / macOS)
```
# from repo root
python -m venv .venv
source .venv/bin/activate
cd backend
python -m pip install -r requirements.txt
python main.py
```

Backend (Windows)
- Activate the repo virtualenv and run backend:
```
python -m venv .venv
.\.venv\Scripts\activate.bat
cd backend
python -m pip install -r requirements.txt
python main.py
```
- Or run the convenience script: `start backend.bat` (it activates `..\.venv`, installs requirements and runs `main.py`).

Frontend (Linux / macOS / Windows)
```
cd frontend
pnpm install        # or npm install / yarn install
pnpm dev            # or npm run dev / yarn dev
# open http://localhost:5173
```
- Windows convenience: `start frontend.bat` will check/install pnpm, install dependencies and start the Vite dev server.

Ports
- Backend default: port 8000 (start script checks this port).
- Frontend dev server: port 5173 (Vite).

How to use
1. Start the backend (serve any audio endpoints, metadata or persistence).
2. Start the frontend and open http://localhost:5173.
3. Load audio (mic input or file) and play it.
4. Open the Rule Builder UI to create or edit rules:
   - Add a condition (e.g. `bass > 0.6`) and an action (e.g. `alpha += 0.2` or `shapeType = circle`).
   - Choose rule scope (`spawnedOnly` or `allLivingFrame`) to control whether the change affects only new particles or all active ones.
5. Tweak, save presets, and watch the visualization respond in real time.

Troubleshooting / tips
- If `pnpm` is not installed, the frontend helper script can install a standalone pnpm for you. You may need to re-open the terminal after pnpm installs.
- If the frontend bundle feels large, consider code-splitting or lazy-loading the Rule Builder UI.
- When editing rules, the compiler recompiles only when the rules' serialized hash changes — changes to unrelated code won’t trigger rule recompilation.
- For backend dependency issues, ensure your virtual environment is activated before running `pip install -r requirements.txt`.

Contributing
- Open issues for bugs and feature requests.
- Follow the internal `instructions.txt` checklist (contains function inventory, phase checklist, and TODO markers).
- If changing the rule schema, increment `RULE_SCHEMA_VERSION` and add a migration path.
