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
 *  • [MUTE] monitor mute toggle
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
import speedIcon from '../icons/speed.svg?raw'
import muteIcon from '../icons/mute.svg?raw'
import loudIcon from '../icons/loud.svg?raw'
import { UI_TEXT } from '../engine/ui/UiText.js'

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

function getAudioPlayerText(key, fallback = '') {
    const value = UI_TEXT?.audioPlayer?.[key]
    if (typeof value === 'string' && value.trim()) return value
    return fallback
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
        'aria-label': getAudioPlayerText('collapsePlayerAria', 'Collapse audio player'),
        'title': getAudioPlayerText('collapsePlayerTitle', 'Collapse player'),
    })
    collapseBtn.textContent = '«'

    const appRoot = document.getElementById('app')

    function setAudioLoadedState(hasAudio) {
        container.classList.toggle('audio-player--has-audio', !!hasAudio)
        if (appRoot) appRoot.classList.toggle('app-awaiting-audio', !hasAudio)
    }

    function setCollapseButtonVisual(isCollapsed) {
        collapseBtn.classList.toggle('audio-player__collapse-btn--icon', isCollapsed)
        if (isCollapsed) {
            applyIcon(collapseBtn, audioIcon, getAudioPlayerText('expandPlayerAria', 'Expand player'))
            collapseBtn.title = getAudioPlayerText('expandPlayerTitle', 'Expand player')
        } else {
            collapseBtn.textContent = '«'
            collapseBtn.setAttribute('aria-label', getAudioPlayerText('collapsePlayerAria', 'Collapse audio player'))
            collapseBtn.title = getAudioPlayerText('collapsePlayerTitle', 'Collapse player')
        }
        if (appRoot) appRoot.classList.toggle('audio-player-collapsed', isCollapsed)
    }

    setCollapseButtonVisual(false)
    setAudioLoadedState(false)

    // Body
    const body = el('div', 'audio-player__body')

    // File row
    const fileRow = el('div', 'audio-player__file-row')
    const fileInput = el('input', '', { type: 'file', accept: 'audio/*', id: 'audio-file-input' })
    fileInput.style.display = 'none'
    const fileLabel = el('label', 'audio-player__file-label', {
        'for': 'audio-file-input',
        'title': getAudioPlayerText('openAudioFileTitle', 'Open audio file'),
    })
    const openAudioFileLabel = getAudioPlayerText('openAudioFileLabel', 'Open Audio File')
    applyIcon(fileLabel, audioIcon, getAudioPlayerText('openAudioFileAria', 'Open audio file'))
    fileLabel.appendChild(el('span', 'audio-player__file-label-text', { text: openAudioFileLabel }))
    const fileName = el('span', 'audio-player__file-name', { text: getAudioPlayerText('noFileLoaded', 'No file loaded') })
    fileRow.append(fileInput, fileLabel)

    // Transport buttons
    const transport = el('div', 'audio-player__transport')

    const btnPlayPause = el('button', 'audio-player__btn audio-player__btn--play cp-btn cp-btn-icon', {
        id: 'btn-play-pause',
        'aria-label': getAudioPlayerText('playAria', 'Play'),
        disabled: 'true',
    })
    applyIcon(btnPlayPause, playIcon, getAudioPlayerText('playAria', 'Play'))

    const btnStop = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-stop',
        'aria-label': getAudioPlayerText('stopAria', 'Stop'),
        disabled: 'true',
        title: getAudioPlayerText('stopTitle', 'Stop (return to start)'),
    })
    applyIcon(btnStop, stopIcon, getAudioPlayerText('stopAria', 'Stop'))

    const btnBack = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-back',
        'aria-label': getAudioPlayerText('backAria', '−10 seconds'),
        disabled: 'true',
        title: getAudioPlayerText('backTitle', '−10 s'),
    })
    applyIcon(btnBack, rewindIcon, getAudioPlayerText('backAria', '−10 seconds'))

    const btnFwd = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-fwd',
        'aria-label': getAudioPlayerText('forwardAria', '+10 seconds'),
        disabled: 'true',
        title: getAudioPlayerText('forwardTitle', '+10 s'),
    })
    applyIcon(btnFwd, rewindForwardIcon, getAudioPlayerText('forwardAria', '+10 seconds'))

    const btnMute = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-mute',
        'aria-label': getAudioPlayerText('muteAria', 'Mute output'),
        disabled: 'true',
        title: getAudioPlayerText('muteTitle', 'Mute output'),
    })
    applyIcon(btnMute, muteIcon, getAudioPlayerText('muteAria', 'Mute output'))

    const btnPng = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-png',
        'aria-label': getAudioPlayerText('savePngAria', 'Save PNG'),
        title: getAudioPlayerText('savePngTitle', 'Save canvas as PNG'),
    })
    applyIcon(btnPng, imageIcon, getAudioPlayerText('savePngAria', 'Save PNG'))

    const btnRecord = el('button', 'audio-player__btn cp-btn cp-btn-icon', {
        id: 'btn-record',
        'aria-label': getAudioPlayerText('recordVideoAria', 'Record video'),
        disabled: 'true',
        title: getAudioPlayerText('recordVideoTitle', 'Record canvas and audio'),
    })
    applyIcon(btnRecord, recordIcon, getAudioPlayerText('recordVideoAria', 'Record video'))

    const SPEED_MIN = 0.25
    const SPEED_MAX = 4
    const SPEED_STEP = 0.05
    const SPEED_PRESETS = [1.0, 1.5, 2.0, 3.0]

    const speedWrap = el('div', 'audio-player__speed-wrap')
    const btnSpeed = el('button', 'audio-player__btn cp-btn cp-btn-icon audio-player__speed-btn', {
        id: 'btn-speed',
        'aria-label': getAudioPlayerText('playbackSpeedAria', 'Playback speed'),
        title: getAudioPlayerText('playbackSpeedTitle', 'Playback speed'),
        disabled: 'true',
        type: 'button',
    })
    applyIcon(btnSpeed, speedIcon, getAudioPlayerText('playbackSpeedAria', 'Playback speed'))

    const speedPopover = el('div', 'audio-player__speed-popover', {
        role: 'dialog',
        'aria-label': getAudioPlayerText('playbackSpeedControlsAria', 'Playback speed controls'),
    })
    speedPopover.hidden = true
    const speedSlider = el('input', 'audio-player__speed-slider cp-input-range', {
        type: 'range',
        min: String(SPEED_MIN),
        max: String(SPEED_MAX),
        step: String(SPEED_STEP),
        value: '1',
        'aria-label': getAudioPlayerText('playbackSpeedMultiplierAria', 'Playback speed multiplier'),
    })
    const speedValue = el('div', 'audio-player__speed-value', { text: '1.00x' })
    const speedPresets = el('div', 'audio-player__speed-presets')
    const speedPresetButtons = SPEED_PRESETS.map((value) => {
        const btn = el('button', 'cp-btn audio-player__speed-preset', {
            type: 'button',
            text: `${value.toFixed(1)}x`,
        })
        speedPresets.appendChild(btn)
        return { value, btn }
    })
    speedPopover.append(speedSlider, speedValue, speedPresets)
    speedWrap.append(btnSpeed, speedPopover)

    transport.append(btnBack, btnPlayPause, btnStop, btnFwd, btnMute, btnPng, btnRecord, speedWrap)

    // Progress row
    const progressRow = el('div', 'audio-player__progress-row')

    const seekBar = el('input', 'audio-player__seek', {
        type: 'range', min: '0', max: '100', step: '0.01',
        value: '0', id: 'audio-seek', 'aria-label': getAudioPlayerText('seekPositionAria', 'Seek position')
    })

    // Dynamic track fill via CSS custom property
    function _updateSeekTrack(pct) {
        seekBar.style.background =
            `linear-gradient(90deg, var(--color-slider-fill) ${pct}%, var(--color-bg-2) ${pct}%)`
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
        applyIcon(
            btnPlayPause,
            playing ? pauseIcon : playIcon,
            playing ? getAudioPlayerText('pauseAria', 'Pause') : getAudioPlayerText('playAria', 'Play'),
        )
    }

    function setRecordButtonVisual(running) {
        applyIcon(
            btnRecord,
            running ? stopIcon : recordIcon,
            running ? getAudioPlayerText('stopRecordingAria', 'Stop recording') : getAudioPlayerText('recordVideoAria', 'Record video'),
        )
    }

    function setMuteButtonVisual(muted) {
        applyIcon(
            btnMute,
            muted ? loudIcon : muteIcon,
            muted ? getAudioPlayerText('unmuteAria', 'Unmute output') : getAudioPlayerText('muteAria', 'Mute output'),
        )
        btnMute.classList.toggle('audio-player__btn--active', !!muted)
        btnMute.title = muted ? getAudioPlayerText('unmuteTitle', 'Unmute output') : getAudioPlayerText('muteTitle', 'Mute output')
    }

    function _setBusy(busy, text = '') {
        fileInput.disabled = busy
        btnPlayPause.disabled = busy || !audioEl.src
        btnStop.disabled = busy || !audioEl.src
        btnBack.disabled = busy || !audioEl.src
        btnFwd.disabled = busy || !audioEl.src
        btnMute.disabled = busy || !audioEl.src
        btnRecord.disabled = busy || !audioEl.src
        btnSpeed.disabled = busy || !audioEl.src
        speedSlider.disabled = busy || !audioEl.src
        for (const entry of speedPresetButtons) entry.btn.disabled = busy || !audioEl.src
        if (busy || !audioEl.src) speedPopover.hidden = true
        if (busy && text) fileName.textContent = text
    }

    function _applyPlaybackRate(raw) {
        const next = Math.max(SPEED_MIN, Math.min(SPEED_MAX, Number(raw)))
        if (!Number.isFinite(next)) return
        audioEl.playbackRate = next
        const formatted = Number(next.toFixed(2))
        speedSlider.value = String(formatted)
        speedValue.textContent = `${formatted.toFixed(2)}x`
        for (const entry of speedPresetButtons) {
            entry.btn.classList.toggle('is-active', Math.abs(formatted - entry.value) < 0.001)
        }
        container.dispatchEvent(new CustomEvent('player:playbackrate', {
            detail: { rate: next }, bubbles: true,
        }))
    }

    function _loadAudioFile(file, labelText = file?.name || getAudioPlayerText('audioLoaded', 'Audio loaded')) {
        if (!file) return
        if (audioEl.src.startsWith('blob:')) URL.revokeObjectURL(audioEl.src)
        audioEl.src = URL.createObjectURL(file)
        audioEl.load()
        setAudioLoadedState(true)
        fileName.textContent = labelText
        isPlaying = false
        setPlayButtonVisual(false)
        btnPlayPause.classList.remove('audio-player__btn--active')
        seekBar.value = '0'
        _updateSeekTrack(0)
        timestamp.textContent = getAudioPlayerText('timestampInitial', '0:00 / –:––')
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
        btnMute.disabled = false
        btnRecord.disabled = false
        btnSpeed.disabled = false
        speedSlider.disabled = false
        for (const entry of speedPresetButtons) entry.btn.disabled = false
    }

    // ── File input handler ────────────────────────────────────────────────
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0]
        if (!file) return
        _setBusy(true, `${getAudioPlayerText('loadingPrefix', 'Loading')} ${file.name}...`)
        try {
            fileName.textContent = `${getAudioPlayerText('decodingPrefix', 'Decoding')} ${file.name}...`
            const prepared = await decodeAudioFileInBrowser(file)
            _loadAudioFile(prepared, prepared.name)
        } catch (err) {
            console.warn('[AudioPlayer] decode failed:', err)
            fileName.textContent = getAudioPlayerText('decodeFailed', 'Decode failed. Try another file.')
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

    btnMute.addEventListener('click', () => {
        if (btnMute.disabled) return
        container.dispatchEvent(new CustomEvent('player:mute-toggle', {
            detail: { audioEl }, bubbles: true,
        }))
    })

    container.addEventListener('player:mute-state', (e) => {
        const muted = !!e?.detail?.muted
        setMuteButtonVisual(muted)
    })

    container.addEventListener('player:recordvideo-state', (e) => {
        const running = !!e?.detail?.running
        setRecordButtonVisual(running)
        btnRecord.classList.toggle('audio-player__btn--active', running)
        btnMute.disabled = running || !audioEl.src
        if (!running && audioEl.src) btnRecord.disabled = false
        btnSpeed.disabled = running || !audioEl.src
        speedSlider.disabled = running || !audioEl.src
        for (const entry of speedPresetButtons) entry.btn.disabled = running || !audioEl.src
        if (running) speedPopover.hidden = true
    })

    btnSpeed.addEventListener('click', (event) => {
        event.stopPropagation()
        if (btnSpeed.disabled) return
        speedPopover.hidden = !speedPopover.hidden
    })

    speedSlider.addEventListener('input', () => {
        _applyPlaybackRate(speedSlider.value)
    })

    for (const entry of speedPresetButtons) {
        entry.btn.addEventListener('click', () => {
            _applyPlaybackRate(entry.value)
        })
    }

    document.addEventListener('click', (event) => {
        if (speedPopover.hidden) return
        const target = event.target
        if (target instanceof Node && speedWrap.contains(target)) return
        speedPopover.hidden = true
    })

    container.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') speedPopover.hidden = true
    })

    _applyPlaybackRate(1)
    setMuteButtonVisual(false)

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
        if (collapsed) speedPopover.hidden = true
    })

    function loadFile(file, labelText = file?.name || getAudioPlayerText('audioLoaded', 'Audio loaded')) {
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
