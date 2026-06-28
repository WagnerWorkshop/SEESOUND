/**
 * LoadingOverlay.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Thin status bar pinned to the absolute top of the viewport.
 *
 * Shows a compact line of text (icon + message) when a long operation is
 * running. Sits below the camera HUD if that is enabled.
 *
 * Usage:
 *   import { showLoadingOverlay, hideLoadingOverlay } from './components/LoadingOverlay.js'
 *
 *   showLoadingOverlay('🧬', 'Analysing instruments...', 'Separating stems...')
 *   // ... long async operation ...
 *   hideLoadingOverlay()
 *
 * @module LoadingOverlay
 */

// ─────────────────────────────────────────────────────────────────────────────
//  § 1  STATE
// ─────────────────────────────────────────────────────────────────────────────

/** @type {HTMLElement|null} */
let barEl = null

/** @type {number} Counter to support nested show/hide calls. */
let showCount = 0

// ─────────────────────────────────────────────────────────────────────────────
//  § 2  DOM BUILD
// ─────────────────────────────────────────────────────────────────────────────

function _buildBar() {
    const bar = document.createElement('div')
    bar.id = 'seesound-status-bar'
    bar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99999;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: rgba(12, 18, 16, 0.92);
        backdrop-filter: blur(6px);
        border-bottom: 1px solid rgba(74, 222, 128, 0.2);
        font-family: 'Quicksand', 'Roboto', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.85);
        transition: opacity 0.25s ease;
        opacity: 0;
        pointer-events: none;
        user-select: none;
    `

    const icon = document.createElement('span')
    icon.id = 'seesound-status-icon'
    icon.textContent = '🧬'

    const msg = document.createElement('span')
    msg.id = 'seesound-status-message'
    msg.textContent = ''

    const sub = document.createElement('span')
    sub.id = 'seesound-status-sub'
    sub.style.cssText = `
        font-size: 11px;
        color: rgba(255, 255, 255, 0.45);
    `
    sub.textContent = ''

    bar.append(icon, msg, sub)

    bar.addEventListener('transitionend', () => {
        if (bar.style.opacity === '0' && bar.parentNode) {
            bar.parentNode.removeChild(bar)
        }
    })

    return bar
}

// ─────────────────────────────────────────────────────────────────────────────
//  § 3  PUBLIC API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Show the status bar with a message.
 * @param {string} [icon='🧬'] - Emoji / icon.
 * @param {string} [message=''] - Main text.
 * @param {string} [sub=''] - Secondary text (smaller, dimmer).
 */
export function showLoadingOverlay(icon = '🧬', message = '', sub = '') {
    showCount++

    if (!barEl) barEl = _buildBar()

    const iconEl = barEl.querySelector('#seesound-status-icon')
    const msgEl = barEl.querySelector('#seesound-status-message')
    const subEl = barEl.querySelector('#seesound-status-sub')
    if (iconEl) iconEl.textContent = icon
    if (msgEl) msgEl.textContent = message
    if (subEl) subEl.textContent = sub

    if (!barEl.parentNode) {
        document.body.appendChild(barEl)
        void barEl.offsetHeight
        barEl.style.opacity = '1'
    }
}

/**
 * Hide the status bar. Safe to call multiple times.
 */
export function hideLoadingOverlay() {
    showCount = Math.max(0, showCount - 1)
    if (showCount > 0) return
    if (barEl && barEl.parentNode) barEl.style.opacity = '0'
}

/**
 * Force-hide regardless of nesting.
 */
export function forceHideLoadingOverlay() {
    showCount = 0
    if (barEl && barEl.parentNode) barEl.style.opacity = '0'
}

/**
 * @returns {boolean}
 */
export function isLoadingOverlayVisible() {
    if (!barEl || !barEl.parentNode) return false
    return barEl.style.opacity !== '0'
}
