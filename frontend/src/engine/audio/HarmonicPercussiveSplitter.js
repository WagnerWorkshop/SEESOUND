/**
 * SEESOUND v2.0 — HarmonicPercussiveSplitter.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Phase 1: HPSS (Harmonic-Percussive Source Separation) via median filtering
 * on the 2D spectrogram grid.
 *
 * Maintains a running buffer of past log-frequency frames and applies:
 *   - Horizontal median filter (across time) → Harmonic stream
 *   - Vertical   median filter (across bins) → Percussive stream
 *
 * Both streams are Float64Arrays of the same length as the input frame.
 */

// ── Fast median via quickselect (O(n) expected) ────────────────────────────

function quickselect(arr, k, left = 0, right = arr.length - 1) {
    while (left < right) {
        const pivotIdx = Math.floor((left + right) / 2);
        const pivot = arr[pivotIdx];
        let i = left;
        let j = right;
        do {
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--;
            }
        } while (i <= j);
        if (k <= j) right = j;
        else left = i;
    }
    return arr[k];
}

function medianOf(arr, count) {
    if (count <= 0) return 0;
    if (count === 1) return arr[0];
    // Copy only the filled portion to avoid sorting garbage
    const copy = new Float64Array(count);
    for (let i = 0; i < count; i++) copy[i] = arr[i];
    const mid = Math.floor(count / 2);
    if (count % 2 === 0) {
        const a = quickselect(copy, mid - 1);
        const b = quickselect(copy, mid);
        return (a + b) / 2;
    }
    return quickselect(copy, mid);
}

// ── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_BUFFER_MS = 200;       // ~200 ms history at 50-60 fps
const DEFAULT_VERTICAL_HALF_WIN = 3; // 7-bin vertical window

// ── HarmonicPercussiveSplitter ──────────────────────────────────────────────

export class HarmonicPercussiveSplitter {
    /**
     * @param {object} [opts]
     * @param {number} [opts.bufferMs=200]  – History window in milliseconds
     * @param {number} [opts.frameRate=60]  – Expected frame rate for buffer sizing
     * @param {number} [opts.verticalHalfWin=3] – Half-window for vertical median (total = 2*this+1)
     */
    constructor(opts = {}) {
        const bufferMs = opts.bufferMs ?? DEFAULT_BUFFER_MS;
        const frameRate = opts.frameRate ?? 60;
        this._bufferCapacity = Math.max(3, Math.ceil((bufferMs / 1000) * frameRate));

        /** @type {Float64Array[]} Ring buffer of past frames */
        this._buffer = [];
        this._writeIdx = 0;
        this._frameCount = 0;
        this._binCount = 0;

        this._verticalHalfWin = opts.verticalHalfWin ?? DEFAULT_VERTICAL_HALF_WIN;

        /** @type {Float64Array|null} Current harmonic output (read by ParticleSystem) */
        this.harmonicData = null;
        /** @type {Float64Array|null} Current percussive output (read by ParticleSystem) */
        this.percussiveData = null;
    }

    /**
     * Process a single log-frequency magnitude frame.
     * @param {Float64Array|Float32Array|number[]|ArrayBufferView} frame
     * @returns {{ harmonic: Float64Array, percussive: Float64Array }}
     */
    processFrame(frame) {
        const binCount = frame.length;
        this._binCount = binCount;

        // Lazy-init output arrays
        if (!this.harmonicData || this.harmonicData.length !== binCount) {
            this.harmonicData = new Float64Array(binCount);
        }
        if (!this.percussiveData || this.percussiveData.length !== binCount) {
            this.percussiveData = new Float64Array(binCount);
        }

        // ── Normalize frame to 0-1 range before median filtering ──
        // Raw CQT magnitudes are tiny floats; the median of tiny floats
        // is still tiny. Normalizing ensures HPSS outputs are in [0,1]
        // and usable as rule variables without further scaling.
        let frameMax = 0;
        for (let i = 0; i < binCount; i++) {
            const v = frame[i];
            if (v > frameMax) frameMax = v;
        }
        const invMax = frameMax > 1e-10 ? 1 / frameMax : 1;

        // ── Ring buffer store (store normalized values) ──
        if (this._buffer.length < this._bufferCapacity) {
            // Grow until full
            const buf = new Float64Array(binCount);
            for (let i = 0; i < binCount; i++) buf[i] = frame[i] * invMax;
            this._buffer.push(buf);
        } else {
            const buf = this._buffer[this._writeIdx];
            for (let i = 0; i < binCount; i++) buf[i] = frame[i] * invMax;
            this._writeIdx = (this._writeIdx + 1) % this._bufferCapacity;
        }
        this._frameCount++;

        const filled = Math.min(this._buffer.length, this._bufferCapacity);
        if (filled < 3) {
            // Not enough history — pass normalized frame through both streams
            for (let i = 0; i < binCount; i++) {
                this.harmonicData[i] = frame[i] * invMax;
            }
            this.percussiveData.fill(0);
            return { harmonic: this.harmonicData, percussive: this.percussiveData };
        }

        // ── Horizontal median filter (across time) → Harmonic ──
        // For each frequency bin, take the median over the time history
        // to preserve sustained (harmonic) energy and suppress transients.
        const tempTime = new Float64Array(filled);
        for (let b = 0; b < binCount; b++) {
            for (let t = 0; t < filled; t++) {
                tempTime[t] = this._buffer[t][b];
            }
            this.harmonicData[b] = medianOf(tempTime, filled);
        }

        // ── Vertical median filter (across bins) → Percussive ──
        // Use the newest frame from the ring buffer.
        const newestIdx = filled < this._bufferCapacity
            ? filled - 1
            : (this._writeIdx - 1 + this._bufferCapacity) % this._bufferCapacity;
        const currentFrame = this._buffer[newestIdx];
        const halfWin = this._verticalHalfWin;
        const maxWin = halfWin * 2 + 1;
        const tempFreq = new Float64Array(maxWin);

        for (let b = 0; b < binCount; b++) {
            let k = 0;
            const lo = Math.max(0, b - halfWin);
            const hi = Math.min(binCount - 1, b + halfWin);
            for (let d = lo; d <= hi; d++) {
                tempFreq[k++] = currentFrame[d];
            }
            this.percussiveData[b] = medianOf(tempFreq, k);
        }

        return { harmonic: this.harmonicData, percussive: this.percussiveData };
    }

    /**
     * Reset all tracked state (call on audio context changes / file load).
     */
    reset() {
        this._buffer = [];
        this._writeIdx = 0;
        this._frameCount = 0;
    }
}
