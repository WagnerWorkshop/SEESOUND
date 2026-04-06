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
 *  • > / || Play-Pause, [] Stop, <<10 / 10>> seek
 *  • [PNG] save trigger
 *  • [REC] record canvas + audio trigger
 *  • [PAINT ALL] full-audio paint trigger
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

import { decodeAudioFileInBrowser } from '../engine/audio/AudioImport.js'
import audioIcon from '../icons/audio.svg?raw'
import playIcon from '../icons/play.svg?raw'
import pauseIcon from '../icons/pause.svg?raw'
import stopIcon from '../icons/stop.svg?raw'
import rewindIcon from '../icons/rewind.svg?raw'
import rewindForwardIcon from '../icons/rewind-forward.svg?raw'
import imageIcon from '../icons/image.svg?raw'
import recordIcon from '../icons/record.svg?raw'
import paintIcon from '../icons/paint.svg?raw'

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

function applyIcon(node, svgMarkup, ariaLabel) {
    if (!node || !svgMarkup) return
    node.innerHTML = ''
    node.append(el('span', 'audio-player__icon', { html: svgMarkup }))
    if (ariaLabel) node.setAttribute('aria-label', ariaLabel)
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
    collapseBtn.textContent = '«'

    const appRoot = document.getElementById('app')

    function setCollapseButtonVisual(isCollapsed) {
        collapseBtn.classList.toggle('audio-player__collapse-btn--icon', isCollapsed)
        if (isCollapsed) {
            applyIcon(collapseBtn, audioIcon, 'Expand player')
            collapseBtn.title = 'Expand player'
        } else {
            collapseBtn.textContent = '«'
            collapseBtn.setAttribute('aria-label', 'Collapse audio player')
            collapseBtn.title = 'Collapse player'
        }
        if (appRoot) appRoot.classList.toggle('audio-player-collapsed', isCollapsed)
    }

    setCollapseButtonVisual(false)

    // Body
    const body = el('div', 'audio-player__body')

    // File row
    const fileRow = el('div', 'audio-player__file-row')
    const fileInput = el('input', '', { type: 'file', accept: 'audio/*', id: 'audio-file-input' })
    fileInput.style.display = 'none'
    const fileLabel = el('label', 'audio-player__file-label', {
        'for': 'audio-file-input', 'title': 'Open audio file'
    })
    applyIcon(fileLabel, audioIcon, 'Open audio file')
    const fileName = el('span', 'audio-player__file-name', { text: 'No file loaded' })
    fileRow.append(fileInput, fileLabel)

    // Transport buttons
    const transport = el('div', 'audio-player__transport')

    const btnPlayPause = el('button', 'audio-player__btn audio-player__btn--play', {
        id: 'btn-play-pause', 'aria-label': 'Play', disabled: 'true'
    })
    applyIcon(btnPlayPause, playIcon, 'Play')

    const btnStop = el('button', 'audio-player__btn', {
        id: 'btn-stop', 'aria-label': 'Stop', disabled: 'true', title: 'Stop (return to start)'
    })
    applyIcon(btnStop, stopIcon, 'Stop')

    const btnBack = el('button', 'audio-player__btn', {
        id: 'btn-back', 'aria-label': '−10 seconds', disabled: 'true', title: '−10 s'
    })
    applyIcon(btnBack, rewindIcon, '−10 seconds')

    const btnFwd = el('button', 'audio-player__btn', {
        id: 'btn-fwd', 'aria-label': '+10 seconds', disabled: 'true', title: '+10 s'
    })
    applyIcon(btnFwd, rewindForwardIcon, '+10 seconds')

    const btnPng = el('button', 'audio-player__btn', {
        id: 'btn-png', 'aria-label': 'Save PNG', title: 'Save canvas as PNG'
    })
    applyIcon(btnPng, imageIcon, 'Save PNG')

    const btnRecord = el('button', 'audio-player__btn', {
        id: 'btn-record', 'aria-label': 'Record video', disabled: 'true', title: 'Record canvas and audio'
    })
    applyIcon(btnRecord, recordIcon, 'Record video')

    const btnPaintAll = el('button', 'audio-player__btn', {
        id: 'btn-paint-all', 'aria-label': 'Paint all', disabled: 'true', title: 'Run through full audio and stop'
    })
    applyIcon(btnPaintAll, paintIcon, 'Paint all')

    const speedWrap = el('div', 'audio-player__speed-wrap')
    const speedInput = el('input', 'audio-player__speed-input', {
        type: 'number', min: '0.1', max: '16', step: '0.1', value: '1', 'aria-label': 'Playback speed multiplier',
        title: 'Playback speed multiplier (0.1 to 16)'
    })
    const speedSuffix = el('span', 'audio-player__speed-suffix', { text: 'x' })
    speedWrap.append(speedInput, speedSuffix)

    transport.append(btnBack, btnPlayPause, btnStop, btnFwd, btnPng, btnRecord, btnPaintAll, speedWrap)

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

    const progressMeta = el('div', 'audio-player__progress-meta')
    progressMeta.append(fileName, timestamp)

    progressRow.append(seekBar, progressMeta)
    body.append(fileRow, transport, progressRow)
    container.append(collapseBtn, body)

    function setPlayButtonVisual(playing) {
        applyIcon(btnPlayPause, playing ? pauseIcon : playIcon, playing ? 'Pause' : 'Play')
    }

    function setRecordButtonVisual(running) {
        applyIcon(btnRecord, running ? stopIcon : recordIcon, running ? 'Stop recording' : 'Record video')
    }

    function setPaintButtonVisual() {
        applyIcon(btnPaintAll, paintIcon, 'Paint all')
    }

    function _setBusy(busy, text = '') {
        fileInput.disabled = busy
        btnPlayPause.disabled = busy || !audioEl.src
        btnStop.disabled = busy || !audioEl.src
        btnBack.disabled = busy || !audioEl.src
        btnFwd.disabled = busy || !audioEl.src
        btnRecord.disabled = busy || !audioEl.src
        btnPaintAll.disabled = busy || !audioEl.src
        speedInput.disabled = busy || !audioEl.src
        if (busy && text) fileName.textContent = text
    }

    function _applyPlaybackRate(raw) {
        const next = Math.max(0.1, Math.min(16, Number(raw)))
        if (!Number.isFinite(next)) return
        audioEl.playbackRate = next
        speedInput.value = String(Number(next.toFixed(2)))
        container.dispatchEvent(new CustomEvent('player:playbackrate', {
            detail: { rate: next }, bubbles: true,
        }))
    }

    function _loadAudioFile(file, labelText = file?.name || 'Audio loaded') {
        if (!file) return
        if (audioEl.src.startsWith('blob:')) URL.revokeObjectURL(audioEl.src)
        audioEl.src = URL.createObjectURL(file)
        audioEl.load()
        fileName.textContent = labelText
        isPlaying = false
        setPlayButtonVisual(false)
        btnPlayPause.classList.remove('audio-player__btn--active')
        seekBar.value = '0'
        _updateSeekTrack(0)
        timestamp.textContent = '0:00 / –:––'
        _enableControls()
        container.dispatchEvent(new CustomEvent('player:fileloaded', {
            detail: { file, audioEl }, bubbles: true,
        }))
    }

    // ── Enable controls after file load ──────────────────────────────────
    function _enableControls() {
        btnPlayPause.disabled = false
        btnStop.disabled = false
        btnBack.disabled = false
        btnFwd.disabled = false
        btnRecord.disabled = false
        btnPaintAll.disabled = false
        speedInput.disabled = false
    }

    // ── File input handler ────────────────────────────────────────────────
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0]
        if (!file) return
        _setBusy(true, `Loading ${file.name}...`)
        try {
            fileName.textContent = `Decoding ${file.name}...`
            const prepared = await decodeAudioFileInBrowser(file)
            _loadAudioFile(prepared, prepared.name)
        } catch (err) {
            console.warn('[AudioPlayer] decode failed:', err)
            fileName.textContent = 'Decode failed. Try another file.'
        } finally {
            _setBusy(false)
            fileInput.value = ''
        }
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
        setPlayButtonVisual(true)
        btnPlayPause.classList.add('audio-player__btn--active')
        container.dispatchEvent(new CustomEvent('player:play', { detail: { audioEl }, bubbles: true }))
    })

    audioEl.addEventListener('pause', () => {
        isPlaying = false
        setPlayButtonVisual(false)
        btnPlayPause.classList.remove('audio-player__btn--active')
        container.dispatchEvent(new CustomEvent('player:pause', { detail: { audioEl }, bubbles: true }))
    })

    audioEl.addEventListener('ended', () => {
        isPlaying = false
        setPlayButtonVisual(false)
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

    btnPng.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent('player:savepng', {
            detail: { audioEl }, bubbles: true
        }))
    })

    btnRecord.addEventListener('click', () => {
        if (btnRecord.disabled) return
        container.dispatchEvent(new CustomEvent('player:recordvideo-toggle', {
            detail: { audioEl }, bubbles: true
        }))
    })

    btnPaintAll.addEventListener('click', () => {
        if (btnPaintAll.disabled) return
        container.dispatchEvent(new CustomEvent('player:paintall', {
            detail: { audioEl }, bubbles: true
        }))
    })

    container.addEventListener('player:paintall-state', (e) => {
        const running = !!e?.detail?.running
        btnPaintAll.disabled = running || !audioEl.src
        btnRecord.disabled = running || !audioEl.src
        speedInput.disabled = running || !audioEl.src
        setPaintButtonVisual()
        btnPaintAll.classList.toggle('audio-player__btn--active', running)
    })

    container.addEventListener('player:recordvideo-state', (e) => {
        const running = !!e?.detail?.running
        setRecordButtonVisual(running)
        btnRecord.classList.toggle('audio-player__btn--active', running)
        btnPaintAll.disabled = running || !audioEl.src
        if (!running && !btnPaintAll.disabled && audioEl.src) btnRecord.disabled = false
        speedInput.disabled = running || !audioEl.src
    })

    speedInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return
        e.preventDefault()
        _applyPlaybackRate(speedInput.value)
        speedInput.blur()
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
        setCollapseButtonVisual(collapsed)
    })

    function loadFile(file, labelText = file?.name || 'Audio loaded') {
        if (!(file instanceof File)) return false
        _loadAudioFile(file, labelText)
        return true
    }

    return {
        audioEl,
        getIsPlaying: () => isPlaying,
        loadFile,
    }
}
