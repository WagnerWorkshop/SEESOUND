"""
SEESOUND v1.0 — backend/main.py
FastAPI server with:
 • WebSocket bridge for real-time audio analysis
 • REST API for preset persistence (stored as JSON files)
"""

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from pathlib import Path
import time
import numpy as np
import json
import asyncio
import base64
from io import BytesIO
import soundfile as sf
import librosa

from audio_analyzer import AudioAnalyzer

app = FastAPI(title="SEESOUND v1.0 Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

analyzer = AudioAnalyzer()
connections: list[WebSocket] = []

# ─────────────────────────────────────────────────────────────────────────────
#  PRESETS DIRECTORY
# ─────────────────────────────────────────────────────────────────────────────

PRESETS_DIR = Path(__file__).parent / "presets"
PRESETS_DIR.mkdir(exist_ok=True)


class PresetPayload(BaseModel):
    name: str
    params: dict  # flat dict of all settings — no whitelist; future keys included


# ─────────────────────────────────────────────────────────────────────────────
#  PRESET REST ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────

@app.get("/api/presets")
async def list_presets():
    """Return a list of saved preset names (no extension)."""
    names = sorted(p.stem for p in PRESETS_DIR.glob("*.json"))
    return {"presets": names}


@app.get("/api/presets/{name}")
async def get_preset(name: str):
    """Load a preset by name."""
    path = PRESETS_DIR / f"{name}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Preset '{name}' not found.")
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    return data


@app.post("/api/presets")
async def save_preset(payload: PresetPayload):
    """Save or overwrite a preset. All params keys are stored verbatim."""
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=400, detail="Preset name must not be empty.")
    # Sanitise filename — allow alphanumeric, spaces, underscores, dashes
    safe = "".join(c for c in name if c.isalnum() or c in " _-")
    if not safe:
        raise HTTPException(status_code=400, detail="Preset name contains no valid characters.")
    path = PRESETS_DIR / f"{safe}.json"
    data = {"name": name, "params": payload.params}
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    return {"ok": True, "name": safe}


@app.delete("/api/presets/{name}")
async def delete_preset(name: str):
    """Delete a preset by name."""
    path = PRESETS_DIR / f"{name}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Preset '{name}' not found.")
    path.unlink()
    return {"ok": True, "deleted": name}


# ─────────────────────────────────────────────────────────────────────────────
#  WEBSOCKET — real-time audio analysis
# ─────────────────────────────────────────────────────────────────────────────

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connections.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)

            if message.get("type") == "subscribe":
                job_id = message.get("jobId")
                print(f"[WS] Subscribed to job: {job_id}")

            elif message.get("type") == "audio_chunk":
                try:
                    chunk_bytes = base64.b64decode(message["data"])
                    audio_data, sr = sf.read(BytesIO(chunk_bytes))
                    frame_data = analyzer.process_frame(audio_data)
                    frame_data["type"] = "analysis_frame"
                    await websocket.send_text(json.dumps(frame_data))
                except Exception as e:
                    print(f"[WS] Error processing audio chunk: {e}")

            elif message.get("type") == "params_update":
                # Forward to all other connected clients (multi-window sync)
                payload = message.get("payload", {})
                for ws in connections:
                    if ws is not websocket:
                        try:
                            await ws.send_text(json.dumps({"type": "params_update", "payload": payload}))
                        except Exception:
                            pass

            elif message.get("type") == "pong":
                pass  # keepalive reply

    except WebSocketDisconnect:
        if websocket in connections:
            connections.remove(websocket)


@app.post("/upload")
async def process_file(file: bytes):
    """Stub endpoint for full-song analysis."""
    return {"jobId": "stubbed-analyze-job"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
