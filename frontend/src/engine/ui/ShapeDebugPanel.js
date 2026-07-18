/**
 * SEESOUND v2.0 — ShapeDebugPanel.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Real-time debug overlay showing the 10 shape activation bars.
 * Fetches data from AudioEngine.getGlobalShapeActivations() each frame.
 * Toggled via keyboard shortcut (Ctrl+Shift+D) or menu toggle.
 *
 * @module ShapeDebugPanel
 */

import {
    SHAPE_IDS,
    SHAPE_COUNT,
    SHAPE_METADATA,
} from '../audio/AcousticShapeDictionary.js'

/** @type {HTMLDivElement|null} */
let _panel = null
/** @type {HTMLDivElement[]} */
let _bars = []
/** @type {boolean} */
let _visible = false
/** @type {(() => import('../audio/AudioEngine.js').AudioEngine|null)|null} */
let _aeGetter = null

/**
 * Create and mount the debug panel to the DOM.
 * @param {() => import('../audio/AudioEngine.js').AudioEngine|null} aeGetter — function returning current AudioEngine
 */
export function createShapeDebugPanel(aeGetter) {
    if (_panel) return

    _aeGetter = aeGetter

    _panel = document.createElement('div')
    _panel.id = 'shape-debug-panel'
    Object.assign(_panel.style, {
        position: 'fixed',
        bottom: '80px',
        left: '10px',
        width: '180px',
        background: 'rgba(0,0,0,0.75)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '6px',
        padding: '8px 10px',
        zIndex: '10000',
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#ccc',
        display: 'none',
        pointerEvents: 'none',
    })

    const title = document.createElement('div')
    title.textContent = 'Shape Activations'
    title.style.cssText = 'font-weight:bold;margin-bottom:4px;color:#fff;font-size:11px;text-align:center'
    _panel.appendChild(title)

    _bars = []
    for (let s = 0; s < SHAPE_COUNT; s++) {
        const shapeId = SHAPE_IDS[s]
        const meta = SHAPE_METADATA[shapeId]
        const color = meta?.colorHint || [0.5, 0.5, 0.5]

        const row = document.createElement('div')
        row.style.cssText = 'display:flex;align-items:center;margin:1px 0;height:12px'

        const label = document.createElement('span')
        label.textContent = meta?.name?.substring(0, 6) || shapeId.substring(5, 11)
        label.style.cssText = 'width:48px;text-align:right;padding-right:4px;color:#aaa;font-size:9px;overflow:hidden;white-space:nowrap'
        row.appendChild(label)

        const barOuter = document.createElement('div')
        barOuter.style.cssText = 'flex:1;height:8px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden'
        const barInner = document.createElement('div')
        barInner.style.cssText = `height:100%;width:0%;background:rgb(${Math.round(color[0] * 255)},${Math.round(color[1] * 255)},${Math.round(color[2] * 255)});border-radius:3px;transition:width 0.1s`
        barOuter.appendChild(barInner)
        row.appendChild(barOuter)

        const value = document.createElement('span')
        value.textContent = '0'
        value.style.cssText = 'width:24px;text-align:right;font-size:9px;padding-left:4px'
        row.appendChild(value)

        _panel.appendChild(row)
        _bars.push({ inner: barInner, value, shapeId })
    }

    // Top-N indicator
        // Entity list
    const entityList = document.createElement('div')
    entityList.id = 'shape-debug-entities'
    entityList.style.cssText = 'margin-top:6px;font-size:9px;color:#aaa;max-height:120px;overflow-y:auto;border-top:1px solid rgba(255,255,255,0.1);padding-top:4px'
    _panel.appendChild(entityList)

    const topN = document.createElement('div')
    topN.id = 'shape-debug-topn'
    topN.style.cssText = 'margin-top:4px;font-size:9px;color:#888;text-align:center'
    _panel.appendChild(topN)

    document.body.appendChild(_panel)
}

/**
 * Toggle the debug panel visibility.
 * @returns {boolean} new visibility state
 */
export function toggleShapeDebugPanel() {
    _visible = !_visible
    if (_panel) {
        _panel.style.display = _visible ? 'block' : 'none'
    }
    return _visible
}

/**
 * Update the debug panel with current shape activations.
 * Call this from the render loop.
 */
export function updateShapeDebugPanel() {
    if (!_visible || !_panel || !_aeGetter) return

    const ae = _aeGetter()
    if (!ae) return

    const activations = ae.getGlobalShapeActivations?.()
    if (!activations) return

    let topNCount = 0
    for (let s = 0; s < SHAPE_COUNT; s++) {
        if (s >= _bars.length) break
        const val = Math.max(0, Math.min(1, activations[s] || 0))
        _bars[s].inner.style.width = (val * 100).toFixed(0) + '%'
        _bars[s].value.textContent = val.toFixed(2)
        if (val > 0.05) topNCount++
    }

    const topN = document.getElementById('shape-debug-topn')
    if (topN) {
        topN.textContent = `Active: ${topNCount}/${SHAPE_COUNT}  |  Top-N: 3`
    }
}

/**
 * Remove the debug panel from the DOM.
 */
export function destroyShapeDebugPanel() {
    if (_panel) {
        _panel.remove()
        _panel = null
        _bars = []
        _visible = false
        _aeGetter = null
    }
}
