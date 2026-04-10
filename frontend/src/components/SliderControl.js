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
    const number = el('input', 'cp-input-number', {
        type: 'number',
        step: definition.step,
        min: definition.min,
        max: definition.max,
    })

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
    number.addEventListener('change', () => applyFromNumber(number.value))

    const sync = () => {
        const value = Number(params[definition.key])
        const safeValue = Number.isFinite(value) ? value : definition.min
        slider.value = String(clamp(safeValue, definition.min, definition.max))
        number.value = String(safeValue)
    }

    controls.append(slider, number)
    row.append(labelWrap, controls)
    registerSync(syncRegistry, sync, [definition.key])
    sync()
    return row
}
