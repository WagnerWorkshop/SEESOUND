/**
 * Shared color math helpers used by rule compilation and color-design UI.
 */

export function clamp(value, lo, hi) {
    return Math.min(hi, Math.max(lo, value))
}

function _toByte(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return 0
    return Math.round(clamp(n, 0, 255))
}

/**
 * Recolor [r, g, b] to match target luma (BT.601), preserving hue as much
 * as possible and desaturating only when clipping would occur.
 *
 * Inputs and outputs are byte-domain values (0..255).
 */
export function matchLuminanceRgb255(r, g, b, targetLuma) {
    const rr = _toByte(r)
    const gg = _toByte(g)
    const bb = _toByte(b)
    const tt = _toByte(targetLuma)

    const currentLuma = 0.299 * rr + 0.587 * gg + 0.114 * bb
    if (currentLuma <= 1e-9) return [tt, tt, tt]

    const ratio = tt / currentLuma
    let rs = rr * ratio
    let gs = gg * ratio
    let bs = bb * ratio

    const maxChannel = Math.max(rs, gs, bs)
    if (maxChannel > 255) {
        const compressRatio = (255 - tt) / Math.max(1e-9, maxChannel - tt)
        rs = tt + compressRatio * (rs - tt)
        gs = tt + compressRatio * (gs - tt)
        bs = tt + compressRatio * (bs - tt)
    }

    return [_toByte(rs), _toByte(gs), _toByte(bs)]
}
