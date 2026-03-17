/**
 * SEESOUND v1.0 — AudioPlayer.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Vanilla-JS module that owns the audio element and all transport controls.
 *
 * Renders into a container div and exports the shared <audio> element so the
 * render loop and AudioEngine can reference it.
 *
 * Features
 * ─────────
 *  • File input (open audio file)
 *  • ▶/⏸ Play-Pause, ⏹ Stop, ⏪ −10 s, ⏩ +10 s
 *  • Progress bar (input[type=range], click/drag to seek)
 *  • MM:SS / MM:SS timestamp display
 *  • Collapsible panel (single left-side chevron button)
 *  • Fires custom events: 'player:play', 'player:pause', 'player:stop',
 *    'player:fileloaded' on the container element.
 *
 * Usage
 * ─────
 *   import { initAudioPlayer } from './components/AudioPlayer.js'
 *   const { audioEl, getIsPlaying } = initAudioPlayer(
 *     document.getElementById('audio-player')
 *   )
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Format seconds → "M:SS" */
function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) return '–:––'
    const m = Math.floor(sec / 60)
    const s = String(Math.floor(sec % 60)).padStart(2, '0')
    return `${m}:${s}`
}

/** Create a DOM element with optional class and attributes */
function el(tag, cls, attrs = {}) {
    const e = document.createElement(tag)
    if (cls) e.className = cls
    for (const [k, v] of Object.entries(attrs)) {
        if (k === 'text') e.textContent = v
        else if (k === 'html') e.innerHTML = v
        else e.setAttribute(k, v)
    }
    return e
}

// ─────────────────────────────────────────────────────────────────────────────
// § 2  Public initialiser
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build the audio player UI inside `container` and return the shared audio element.
 *
 * @param {HTMLElement} container  — the #audio-player div
 * @returns {{ audioEl: HTMLAudioElement, getIsPlaying: () => boolean }}
 */
export function initAudioPlayer(container) {
    if (!container) {
        console.warn('[AudioPlayer] No container element.')
        const audioEl = new Audio()
        audioEl.crossOrigin = 'anonymous'
        return { audioEl, getIsPlaying: () => false }
    }

    // ── Shared <audio> element ─────────────────────────────────────────────
    const audioEl = new Audio()
    audioEl.crossOrigin = 'anonymous'

    let isPlaying = false
    let collapsed = false

    // ── DOM construction ───────────────────────────────────────────────────

    const collapseBtn = el('button', 'audio-player__collapse-btn', {
        'aria-label': 'Collapse audio player', 'title': 'Collapse player'
    })
    collapseBtn.textContent = '<'

    // Body
    const body = el('div', 'audio-player__body')

    // File row
    const fileRow = el('div', 'audio-player__file-row')
    const fileInput = el('input', '', { type: 'file', accept: 'audio/*', id: 'audio-file-input' })
    fileInput.style.display = 'none'
    const fileLabel = el('label', 'audio-player__file-label', {
        'for': 'audio-file-input', 'title': 'Open audio file'
    })
    fileLabel.innerHTML = '📂 Open'
    const fileName = el('span', 'audio-player__file-name', { text: 'No file loaded' })
    fileRow.append(fileInput, fileLabel, fileName)

    // Transport buttons
    const transport = el('div', 'audio-player__transport')

    const btnPlayPause = el('button', 'audio-player__btn audio-player__btn--play', {
        id: 'btn-play-pause', 'aria-label': 'Play', disabled: 'true'
    })
    btnPlayPause.textContent = '▶  Play'

    const btnStop = el('button', 'audio-player__btn', {
        id: 'btn-stop', 'aria-label': 'Stop', disabled: 'true', title: 'Stop (return to start)'
    })
    btnStop.textContent = '⏹'

    const btnBack = el('button', 'audio-player__btn', {
        id: 'btn-back', 'aria-label': '−10 seconds', disabled: 'true', title: '−10 s'
    })
    btnBack.textContent = '−10s'

    const btnFwd = el('button', 'audio-player__btn', {
        id: 'btn-fwd', 'aria-label': '+10 seconds', disabled: 'true', title: '+10 s'
    })
    btnFwd.textContent = '+10s'

    transport.append(btnPlayPause, btnStop, btnBack, btnFwd)

    // Progress row
    const progressRow = el('div', 'audio-player__progress-row')

    const seekBar = el('input', 'audio-player__seek', {
        type: 'range', min: '0', max: '100', step: '0.01',
        value: '0', id: 'audio-seek', 'aria-label': 'Seek position'
    })

    // Dynamic track fill via CSS custom property
    function _updateSeekTrack(pct) {
        seekBar.style.background =
            `linear-gradient(90deg, var(--color-accent) ${pct}%, var(--color-border) ${pct}%)`
    }
    _updateSeekTrack(0)

    const timestamp = el('div', 'audio-player__timestamp', {
        id: 'audio-time', text: '–:–– / –:––', 'aria-live': 'polite'
    })

    progressRow.append(seekBar, timestamp)
    body.append(fileRow, transport, progressRow)
    container.append(collapseBtn, body)

    // ── Enable controls after file load ──────────────────────────────────
    function _enableControls() {
        btnPlayPause.disabled = false
        btnStop.disabled = false
        btnBack.disabled = false
        btnFwd.disabled = false
    }

    // ── File input handler ────────────────────────────────────────────────
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0]
        if (!file) return
        // Clean up previous object URL if any
        if (audioEl.src.startsWith('blob:')) URL.revokeObjectURL(audioEl.src)
        audioEl.src = URL.createObjectURL(file)
        audioEl.load()
        fileName.textContent = file.name
        // Reset UI
        isPlaying = false
        btnPlayPause.textContent = '▶  Play'
        btnPlayPause.classList.remove('audio-player__btn--active')
        seekBar.value = '0'
        _updateSeekTrack(0)
        timestamp.textContent = '0:00 / –:––'
        _enableControls()
        container.dispatchEvent(new CustomEvent('player:fileloaded', {
            detail: { file, audioEl }, bubbles: true
        }))
    })

    // ── Play / Pause ──────────────────────────────────────────────────────
    btnPlayPause.addEventListener('click', async () => {
        // Fire custom event so main.js can init AudioContext (user gesture)
        container.dispatchEvent(new CustomEvent('player:playpause', {
            detail: { audioEl }, bubbles: true
        }))
        if (isPlaying) {
            audioEl.pause()
        } else {
            try { await audioEl.play() }
            catch (err) { console.warn('[AudioPlayer] play() failed:', err.message) }
        }
    })

    audioEl.addEventListener('play', () => {
        isPlaying = true
        btnPlayPause.textContent = '⏸  Pause'
        btnPlayPause.classList.add('audio-player__btn--active')
        container.dispatchEvent(new CustomEvent('player:play', { detail: { audioEl }, bubbles: true }))
    })

    audioEl.addEventListener('pause', () => {
        isPlaying = false
        btnPlayPause.textContent = '▶  Play'
        btnPlayPause.classList.remove('audio-player__btn--active')
        container.dispatchEvent(new CustomEvent('player:pause', { detail: { audioEl }, bubbles: true }))
    })

    audioEl.addEventListener('ended', () => {
        isPlaying = false
        btnPlayPause.textContent = '▶  Play'
        btnPlayPause.classList.remove('audio-player__btn--active')
    })

    // ── Stop (return to 0) ────────────────────────────────────────────────
    btnStop.addEventListener('click', () => {
        audioEl.pause()
        audioEl.currentTime = 0
        seekBar.value = '0'
        _updateSeekTrack(0)
        timestamp.textContent = `0:00 / ${fmtTime(audioEl.duration)}`
        container.dispatchEvent(new CustomEvent('player:stop', { detail: { audioEl }, bubbles: true }))
    })

    // ── ±10 s jump ────────────────────────────────────────────────────────
    btnBack.addEventListener('click', () => {
        audioEl.currentTime = Math.max(0, audioEl.currentTime - 10)
    })
    btnFwd.addEventListener('click', () => {
        audioEl.currentTime = Math.min(audioEl.duration || 0, audioEl.currentTime + 10)
    })

    // ── Seek bar (user interaction) ───────────────────────────────────────
    let _seeking = false
    seekBar.addEventListener('mousedown', () => { _seeking = true })
    seekBar.addEventListener('touchstart', () => { _seeking = true }, { passive: true })
    seekBar.addEventListener('input', () => {
        const pct = parseFloat(seekBar.value)
        _updateSeekTrack(pct)
        if (audioEl.duration) {
            timestamp.textContent = `${fmtTime(audioEl.duration * pct / 100)} / ${fmtTime(audioEl.duration)}`
        }
    })
    seekBar.addEventListener('change', () => {
        if (audioEl.duration) {
            audioEl.currentTime = (parseFloat(seekBar.value) / 100) * audioEl.duration
        }
        _seeking = false
    })

    // ── Time update (from audio playback) ────────────────────────────────
    audioEl.addEventListener('timeupdate', () => {
        if (_seeking) return
        const cur = audioEl.currentTime
        const dur = audioEl.duration
        if (!isFinite(dur) || dur === 0) return
        const pct = (cur / dur) * 100
        seekBar.value = String(pct)
        _updateSeekTrack(pct)
        timestamp.textContent = `${fmtTime(cur)} / ${fmtTime(dur)}`
    })

    // ── Canvas size on file load (1px = 1s for Linear mode) ──────────────
    audioEl.addEventListener('loadedmetadata', () => {
        timestamp.textContent = `0:00 / ${fmtTime(audioEl.duration)}`
        container.dispatchEvent(new CustomEvent('player:metadata', {
            detail: { duration: audioEl.duration }, bubbles: true
        }))
    })

    // ── Collapse / expand ─────────────────────────────────────────────────
    collapseBtn.addEventListener('click', () => {
        collapsed = !collapsed
        container.classList.toggle('audio-player--collapsed', collapsed)
        collapseBtn.textContent = collapsed ? '>' : '<'
        collapseBtn.title = collapsed ? 'Expand player' : 'Collapse player'
    })

    return {
        audioEl,
        getIsPlaying: () => isPlaying,
    }
}
