/**
 * StemSplitPanel.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Vanilla-JS UI component for triggering and monitoring stem separation.
 *
 * Renders as a collapsible section within the audio player or control panel.
 * Shows:
 *   - A [Split Stems] button (enabled when audio is loaded)
 *   - A progress bar during separation
 *   - Available stems as labelled buttons once complete
 *   - Which stems are currently selected for layer routing
 *
 * Usage:
 *   import { initStemSplitPanel } from './components/StemSplitPanel.js'
 *   const panel = initStemSplitPanel({
 *     container: document.getElementById('stem-panel'),
 *     engine: stemSeparationEngine,
 *     onStemSelected: (stemId) => { ... },
 *   })
 *
 * Events emitted on container:
 *   'stemsplit:start'     — { file } separation started
 *   'stemsplit:progress'  — { percent, segment, total }
 *   'stemsplit:complete'  — { stems } separation finished
 *   'stemsplit:error'     — { error }
 *   'stemsplit:select'    — { stemId } user clicked a stem
 *
 * @module StemSplitPanel
 */

// ─────────────────────────────────────────────────────────────────────────────
//  § 1  HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Create a DOM element with optional class and attributes. */
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
//  § 2  LABELS & ICONS
// ─────────────────────────────────────────────────────────────────────────────

const STEM_LABELS = {
    drums: '🥁 Drums',
    bass: '🎸 Bass',
    other: '🎵 Other',
    vocals: '🎤 Vocals',
    guitar: '🎸 Guitar',
    piano: '🎹 Piano',
}

const STEM_ORDER = ['drums', 'bass', 'other', 'vocals', 'guitar', 'piano']

// ─────────────────────────────────────────────────────────────────────────────
//  § 3  PUBLIC INITIALIZER
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Initialize the Stem Split panel UI.
 *
 * @param {Object} options
 * @param {HTMLElement} options.container - The DOM element to render into.
 * @param {import('../engine/audio/StemSeparationEngine').StemSeparationEngine} options.engine
 * @param {(stemId: string, blobUrl: string) => void} [options.onStemSelected]
 * @param {() => File|null} [options.getAudioFile] - Callback to retrieve the current audio File.
 * @returns {{
 *   setEnabled: (enabled: boolean) => void,
 *   reset: () => void,
 *   setAudioFile: (file: File|null) => void,
 *   element: HTMLElement,
 * }}
 */
export function initStemSplitPanel(options) {
    const { container, engine, onStemSelected, getAudioFile } = options

    /** @type {File|null} */
    let currentAudioFile = null

    /** Whether the panel is enabled (audio loaded). */
    let enabled = false

    /** Currently processing. */
    let processing = false

    /** @type {Map<string, { blobUrl: string, audioBuffer: AudioBuffer }>|null} */
    let currentStems = null

    // ── DOM Construction ─────────────────────────────────────────────────
    const root = el('div', 'stem-split-panel')
    root.style.display = 'none'

    // Header row
    const header = el('div', 'stem-split-panel__header')
    const title = el('span', 'stem-split-panel__title', { text: 'Stem Separation' })
    header.appendChild(title)

    // Split button
    const splitBtn = el('button', 'stem-split-panel__btn cp-btn cp-btn-primary', {
        type: 'button',
        text: '🧬 Split Stems',
        disabled: 'true',
        title: 'Separate audio into individual stems (drums, bass, vocals, guitar, piano, other)',
    })

    // Cancel button (hidden initially)
    const cancelBtn = el('button', 'stem-split-panel__btn cp-btn cp-btn-danger', {
        type: 'button',
        text: '✕ Cancel',
        style: 'display:none',
    })

    // Progress section
    const progressSection = el('div', 'stem-split-panel__progress', { style: 'display:none' })
    const progressBar = el('div', 'stem-split-panel__progress-bar')
    const progressFill = el('div', 'stem-split-panel__progress-fill', { style: 'width:0%' })
    progressBar.appendChild(progressFill)
    const progressLabel = el('div', 'stem-split-panel__progress-label', { text: '0%' })
    const progressStatus = el('div', 'stem-split-panel__progress-status', {
        text: 'Initializing...',
    })
    progressSection.append(progressBar, progressLabel, progressStatus)

    // Stems grid (populated after separation)
    const stemsGrid = el('div', 'stem-split-panel__stems', { style: 'display:none' })
    const stemsTitle = el('div', 'stem-split-panel__stems-title', { text: 'Available Stems' })
    const stemsGridInner = el('div', 'stem-split-panel__stems-grid')
    const stemsHint = el('div', 'stem-split-panel__stems-hint', {
        text: 'Click a stem to preview. Use in layer editor to select which stem a layer reacts to.',
    })
    stemsGrid.append(stemsTitle, stemsGridInner, stemsHint)

    root.append(header, splitBtn, cancelBtn, progressSection, stemsGrid)
    container.appendChild(root)

    // ── Event Wiring ─────────────────────────────────────────────────────

    /**
     * Enable/disable the split button.
     * @param {boolean} val
     */
    function setEnabled(val) {
        enabled = !!val
        splitBtn.disabled = !enabled || processing
        root.style.display = enabled ? '' : 'none'
    }

    /**
     * Set the current audio file reference.
     * @param {File|null} file
     */
    function setAudioFile(file) {
        currentAudioFile = file
        setEnabled(file instanceof File)
    }

    /**
     * Reset the panel to its initial state.
     */
    function reset() {
        processing = false
        splitBtn.disabled = !enabled
        splitBtn.style.display = ''
        cancelBtn.style.display = 'none'
        progressSection.style.display = 'none'
        progressFill.style.width = '0%'
        progressLabel.textContent = '0%'
        stemsGrid.style.display = 'none'
        stemsGridInner.innerHTML = ''
        currentStems = null
    }

    // ── Split Button Click ───────────────────────────────────────────────
    splitBtn.addEventListener('click', async () => {
        const file = currentAudioFile || (typeof getAudioFile === 'function' ? getAudioFile() : null)
        if (!file) return

        processing = true
        splitBtn.disabled = true
        splitBtn.textContent = '⏳ Splitting...'
        cancelBtn.style.display = ''
        progressSection.style.display = ''
        progressFill.style.width = '0%'
        progressLabel.textContent = '0%'
        progressStatus.textContent = 'Decoding audio...'
        stemsGrid.style.display = 'none'

        container.dispatchEvent(new CustomEvent('stemsplit:start', {
            detail: { file }, bubbles: true,
        }))

        // AbortController for cancellation
        const abortController = new AbortController()
        const abortHandler = () => {
            abortController.abort()
            reset()
            splitBtn.textContent = '🧬 Split Stems'
            container.dispatchEvent(new CustomEvent('stemsplit:error', {
                detail: { error: 'Cancelled' }, bubbles: true,
            }))
        }
        cancelBtn.addEventListener('click', abortHandler, { once: true })

        // Progress listener
        const onProgress = (e) => {
            const pct = e.detail?.percent ?? 0
            const segment = e.detail?.segment ?? 0
            const total = e.detail?.total ?? 0
            progressFill.style.width = `${pct}%`
            progressLabel.textContent = `${pct}%`
            if (total > 0) {
                progressStatus.textContent = `Processing segment ${segment} of ${total}...`
            } else if (pct >= 95) {
                progressStatus.textContent = 'Building stem outputs...'
            } else if (pct === 0) {
                progressStatus.textContent = 'Decoding audio...'
            }
            container.dispatchEvent(new CustomEvent('stemsplit:progress', {
                detail: { percent: pct, segment, total }, bubbles: true,
            }))
        }
        engine.addEventListener('progress', onProgress)

        try {
            const result = await engine.separate(file, {
                signal: abortController.signal,
            })

            // Store results
            currentStems = result

            // Populate stems grid
            stemsGridInner.innerHTML = ''
            for (const stemId of STEM_ORDER) {
                if (!result.has(stemId)) continue
                const stem = result.get(stemId)
                const label = STEM_LABELS[stemId] || stemId

                const stemBtn = el('button', 'stem-split-panel__stem-btn cp-btn', {
                    type: 'button',
                })
                const labelSpan = el('span', 'stem-split-panel__stem-label', { text: label })
                const playIcon = el('span', 'stem-split-panel__stem-play', { text: '▶' })
                stemBtn.append(playIcon, labelSpan)

                stemBtn.addEventListener('click', () => {
                    // Toggle play
                    container.dispatchEvent(new CustomEvent('stemsplit:select', {
                        detail: { stemId, blobUrl: stem.blobUrl, audioBuffer: stem.audioBuffer },
                        bubbles: true,
                    }))
                    if (typeof onStemSelected === 'function') {
                        onStemSelected(stemId, stem.blobUrl)
                    }
                })

                stemsGridInner.appendChild(stemBtn)
            }

            stemsGrid.style.display = ''
            splitBtn.textContent = '🧬 Split Stems'
            splitBtn.disabled = false
            cancelBtn.style.display = 'none'
            progressFill.style.width = '100%'
            progressLabel.textContent = '100%'
            progressStatus.textContent = 'Complete!'

            container.dispatchEvent(new CustomEvent('stemsplit:complete', {
                detail: { stems: result }, bubbles: true,
            }))
        } catch (err) {
            if (err.name === 'AbortError') {
                reset()
                splitBtn.textContent = '🧬 Split Stems'
                return
            }
            console.error('[StemSplitPanel] Separation failed:', err)
            progressStatus.textContent = `Error: ${err.message || 'Unknown'}`
            progressStatus.style.color = 'var(--color-danger, #f44)'
            splitBtn.textContent = '🧬 Retry Split'
            splitBtn.disabled = false
            cancelBtn.style.display = 'none'

            container.dispatchEvent(new CustomEvent('stemsplit:error', {
                detail: { error: err.message || String(err) }, bubbles: true,
            }))
        } finally {
            processing = false
            engine.removeEventListener('progress', onProgress)
            cancelBtn.removeEventListener('click', abortHandler)
        }
    })

    // ── Engine events ────────────────────────────────────────────────────

    engine.addEventListener('initialized', () => {
        console.log('[StemSplitPanel] Engine initialized')
    })

    engine.addEventListener('error', (e) => {
        if (!processing) return
        console.error('[StemSplitPanel] Engine error:', e.detail?.error)
    })

    // ── Return public API ────────────────────────────────────────────────
    return {
        setEnabled,
        reset,
        setAudioFile,
        element: root,
    }
}
