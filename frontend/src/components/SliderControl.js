/**
 * Format a value as a fraction string when fractionBase is set (e.g. 4/12 for 0.333 with base 12).
 * Rounds to the nearest whole fraction step so it stays in sync with the slider step.
 */
function _formatFraction(value, base) {
    if (!base || base <= 0) return String(value)
    const n = Math.round(Number(value) * base)
    const g = _gcd(Math.abs(n), base)
    return `${n / g}/${base / g}`
}
function _gcd(a, b) { while (b) { const t = b; b = a % b; a = t } return a }

export function createSliderControl(definition, syncRegistry, deps) {
    const { el, clamp, params, set, registerSync } = deps
    const row = el('div', 'cp-setting-row')
    const labelWrap = el('div', 'cp-setting-label-wrap')
    const label = el('label', 'cp-setting-label', { text: definition.label, title: definition.tooltip })
    labelWrap.appendChild(label)

    const controls = el('div', 'cp-setting-controls')
    const slider = el('input', 'cp-input-range', {
        type: 'range',
        min: definition.min,
        max: definition.max,
        step: definition.step,
    })

    // Use a fraction-friendly text display when fractionBase is specified
    const isFractional = Number.isFinite(definition.fractionBase) && definition.fractionBase > 0
    const number = isFractional
        ? el('input', 'cp-input-number cp-input-fraction', { type: 'text', inputMode: 'numeric', step: definition.step })
        : el('input', 'cp-input-number', { type: 'number', step: definition.step, min: definition.min, max: definition.max })

    const applyFromSlider = (raw) => {
        const value = clamp(raw, definition.min, definition.max)
        set(definition.key, value)
    }

    const applyFromNumber = (raw) => {
        const value = Number(raw)
        if (!Number.isFinite(value)) return
        set(definition.key, value)
    }

    slider.addEventListener('input', () => applyFromSlider(Number(slider.value)))
    if (isFractional) {
        number.addEventListener('change', () => {
            // Accept typed numerics or fraction strings like "4/12"
            const raw = String(number.value || '').trim()
            const slashIdx = raw.indexOf('/')
            let numVal
            if (slashIdx > 0) {
                const num = parseFloat(raw.slice(0, slashIdx))
                const den = parseFloat(raw.slice(slashIdx + 1))
                numVal = den > 0 ? (num / den) * definition.fractionBase : NaN
            } else {
                numVal = parseFloat(raw)
            }
            if (Number.isFinite(numVal)) {
                const snapped = Math.round(numVal / definition.step) * definition.step
                set(definition.key, clamp(snapped, definition.min, definition.max))
            }
        })
    } else {
        number.addEventListener('change', () => applyFromNumber(number.value))
    }

    const sync = () => {
        const value = Number(params[definition.key])
        const safeValue = Number.isFinite(value) ? value : definition.min
        slider.value = String(clamp(safeValue, definition.min, definition.max))
        if (isFractional) {
            number.value = _formatFraction(safeValue, definition.fractionBase)
        } else {
            number.value = String(safeValue)
        }
    }

    controls.append(slider, number)
    row.append(labelWrap, controls)
    registerSync(syncRegistry, sync, [definition.key])
    sync()
    return row
}
