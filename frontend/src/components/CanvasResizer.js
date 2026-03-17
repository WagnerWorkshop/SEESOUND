/**
 * SEESOUND v1.0 — CanvasResizer.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Adds drag-resize handles to the canvas wrapper and pinforms the renderer
 * when the canvas dimensions change.
 *
 * Handles
 * ───────
 *  Right edge  — drag left/right to resize width
 *  Bottom edge — drag up/down to resize height
 *  Corner      — drag to resize both dimensions
 *
 * When the canvas is resized, all existing particle positions are scaled
 * proportionally so the visualization does not jump or clip.
 *
 * Usage
 * ─────
 *   import { initCanvasResizer } from './components/CanvasResizer.js'
 *   initCanvasResizer({
 *     wrapper:    document.getElementById('canvas-wrapper'),
 *     column:     document.getElementById('canvas-col'),
 *     onResize:   (w, h, scaleX, scaleY) => { /* update renderer, rescale particles *\/ }
 *   })
 */

// ─────────────────────────────────────────────────────────────────────────────
// § 1  DOM helpers
// ─────────────────────────────────────────────────────────────────────────────

function el(tag, cls) {
    const e = document.createElement(tag)
    if (cls) e.className = cls
    return e
}

// ─────────────────────────────────────────────────────────────────────────────
// § 2  Public initialiser
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {object}      opts
 * @param {HTMLElement} opts.wrapper   — .canvas-wrapper element
 * @param {HTMLElement} opts.column    — #canvas-col element (the flex parent)
 * @param {Function}    opts.onResize  — (w, h, scaleX, scaleY) => void
 */
export function initCanvasResizer({ wrapper, column, onResize }) {
    if (!wrapper || !column) {
        console.warn('[CanvasResizer] wrapper or column element missing.')
        return
    }

    // Track current explicit size (starts at natural fill)
    let _w = wrapper.clientWidth || column.clientWidth
    let _h = wrapper.clientHeight || column.clientHeight

    // ── Build handles ─────────────────────────────────────────────────────
    const handleRight  = el('div', 'canvas-wrapper__resize-handle-right')
    const handleBottom = el('div', 'canvas-wrapper__resize-handle-bottom')
    const handleCorner = el('div', 'canvas-wrapper__resize-handle-corner')

    wrapper.append(handleRight, handleBottom, handleCorner)

    // ── Drag state ────────────────────────────────────────────────────────
    let _drag = null   // { type, startX, startY, startW, startH, handle }

    function _startDrag(e, type, handle) {
        e.preventDefault()
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const clientY = e.touches ? e.touches[0].clientY : e.clientY
        _drag = {
            type,
            startX: clientX,
            startY: clientY,
            startW: wrapper.clientWidth,
            startH: wrapper.clientHeight,
            handle,
        }
        handle.classList.add('dragging')
        document.body.style.cursor =
            type === 'right'  ? 'ew-resize' :
            type === 'bottom' ? 'ns-resize' : 'nwse-resize'
        document.body.style.userSelect = 'none'
    }

    function _onMove(e) {
        if (!_drag) return
        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const clientY = e.touches ? e.touches[0].clientY : e.clientY
        const dx = clientX - _drag.startX
        const dy = clientY - _drag.startY

        // Minimum size clamps
        const minW = 160, minH = 120
        const colRect = column.getBoundingClientRect()

        let newW = _drag.startW, newH = _drag.startH

        if (_drag.type === 'right' || _drag.type === 'corner') {
            newW = Math.max(minW, Math.min(_drag.startW + dx, colRect.width - 4))
        }
        if (_drag.type === 'bottom' || _drag.type === 'corner') {
            newH = Math.max(minH, Math.min(_drag.startH + dy, window.innerHeight - 4))
        }

        // Compute scale factors for particle repositioning
        const scaleX = _w > 0 ? newW / _w : 1
        const scaleY = _h > 0 ? newH / _h : 1

        _w = newW; _h = newH

        // Apply to wrapper
        wrapper.style.width  = `${newW}px`
        wrapper.style.height = `${newH}px`

        onResize(newW, newH, scaleX, scaleY)
    }

    function _stopDrag() {
        if (!_drag) return
        _drag.handle.classList.remove('dragging')
        _drag = null
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
    }

    // ── Pointer event listeners ───────────────────────────────────────────
    handleRight.addEventListener('mousedown',  e => _startDrag(e, 'right',  handleRight))
    handleBottom.addEventListener('mousedown', e => _startDrag(e, 'bottom', handleBottom))
    handleCorner.addEventListener('mousedown', e => _startDrag(e, 'corner', handleCorner))

    handleRight.addEventListener('touchstart',  e => _startDrag(e, 'right',  handleRight), { passive: false })
    handleBottom.addEventListener('touchstart', e => _startDrag(e, 'bottom', handleBottom), { passive: false })
    handleCorner.addEventListener('touchstart', e => _startDrag(e, 'corner', handleCorner), { passive: false })

    document.addEventListener('mousemove', _onMove)
    document.addEventListener('mouseup',   _stopDrag)
    document.addEventListener('touchmove', _onMove, { passive: false })
    document.addEventListener('touchend',  _stopDrag)

    // ── Window resize: if canvas is filling the column, keep it in sync ───
    window.addEventListener('resize', () => {
        // Only auto-update if no explicit size has been set
        if (!wrapper.style.width) {
            const newW = column.clientWidth
            const newH = column.clientHeight
            const scaleX = _w > 0 ? newW / _w : 1
            const scaleY = _h > 0 ? newH / _h : 1
            _w = newW; _h = newH
            onResize(newW, newH, scaleX, scaleY)
        }
    })

    // ── Expose setSize() for programmatic resize (e.g., Linear mode: 1px=1s) ──
    return {
        /**
         * Programmatically set the canvas size.
         * @param {number} w
         * @param {number} h
         */
        setSize(w, h) {
            const scaleX = _w > 0 ? w / _w : 1
            const scaleY = _h > 0 ? h / _h : 1
            _w = w; _h = h
            wrapper.style.width  = `${w}px`
            wrapper.style.height = `${h}px`
            onResize(w, h, scaleX, scaleY)
        },
        /**
         * Get current tracked canvas size.
         * @returns {{ w: number, h: number }}
         */
        getSize() { return { w: _w, h: _h } },
    }
}
