import noUiSlider from 'nouislider'

export function createRangePairControl(definition, syncRegistry, deps) {
    const { el, clamp, registerSync } = deps
    const row = el('div', 'cp-setting-row cp-setting-range')
    const labelWrap = el('div', 'cp-setting-label-wrap')
    const label = el('label', 'cp-setting-label', { text: definition.label, title: definition.tooltip })
    labelWrap.appendChild(label)

    const controls = el('div', 'cp-setting-range-controls')
    const rangeContainer = el('div', 'cp-range-container cp-range-slider')
    const minInput = el('input', 'cp-input-number', { type: 'number', step: definition.step })
    const maxInput = el('input', 'cp-input-number', { type: 'number', step: definition.step })

    noUiSlider.create(rangeContainer, {
        start: [definition.min, definition.max],
        connect: true,
        range: {
            min: definition.min,
            max: definition.max,
        },
        step: definition.step,
        behaviour: 'tap-drag',
    })

    const sliderApi = rangeContainer.noUiSlider
    // Keep initial noUiSlider update from writing min/max into ParamStore before we sync defaults.
    let suppressCommit = true
    let suppressInputSync = false

    const updateNumberInputs = (minValue, maxValue) => {
        minInput.value = String(minValue)
        maxInput.value = String(maxValue)
    }

    sliderApi.on('update', (values) => {
        const minValue = Number(values[0])
        const maxValue = Number(values[1])
        if (!suppressInputSync) updateNumberInputs(minValue, maxValue)
        if (suppressCommit) return
        definition.set(minValue, maxValue)
    })

    const applyFromNumbers = () => {
        let minValue = Number(minInput.value)
        let maxValue = Number(maxInput.value)
        if (!Number.isFinite(minValue)) minValue = definition.min
        if (!Number.isFinite(maxValue)) maxValue = definition.max
        if (minValue > maxValue) {
            const temp = minValue
            minValue = maxValue
            maxValue = temp
        }

        const sliderMin = clamp(minValue, definition.min, definition.max)
        const sliderMax = clamp(maxValue, definition.min, definition.max)
        const keepTypedValues = sliderMin !== minValue || sliderMax !== maxValue

        suppressCommit = true
        suppressInputSync = keepTypedValues
        sliderApi.set([sliderMin, sliderMax])
        suppressInputSync = false
        suppressCommit = false
        updateNumberInputs(minValue, maxValue)
        definition.set(minValue, maxValue)
    }

    minInput.addEventListener('input', applyFromNumbers)
    maxInput.addEventListener('input', applyFromNumbers)
    minInput.addEventListener('change', applyFromNumbers)
    maxInput.addEventListener('change', applyFromNumbers)

    const sync = () => {
        const current = definition.get()
        const nextMin = Number(current.min)
        const nextMax = Number(current.max)
        const safeMin = Number.isFinite(nextMin) ? nextMin : definition.min
        const safeMax = Number.isFinite(nextMax) ? nextMax : definition.max
        const sliderMin = clamp(safeMin, definition.min, definition.max)
        const sliderMax = clamp(safeMax, definition.min, definition.max)
        const keepTypedValues = sliderMin !== safeMin || sliderMax !== safeMax

        suppressCommit = true
        suppressInputSync = keepTypedValues
        sliderApi.set([sliderMin, sliderMax])
        suppressInputSync = false
        suppressCommit = false
        updateNumberInputs(safeMin, safeMax)
    }

    controls.append(rangeContainer, minInput, maxInput)
    row.append(labelWrap, controls)
    registerSync(syncRegistry, sync, definition.syncKeys)
    sync()
    suppressCommit = false
    return row
}
