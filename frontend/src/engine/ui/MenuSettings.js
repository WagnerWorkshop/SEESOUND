import { createSliderControl } from '../../components/SliderControl.js'
import { createRangePairControl } from '../../components/RangePairControl.js'

export function buildSettingsMenu(body, syncRegistry, deps) {
    const {
        el, UI_TEXT, params, set, resetToDefaults,
        SETTINGS_SLIDERS, SETTINGS_RANGES, BUTTON_ICON_MAP, applyButtonIcon,
        registerSync, createSelectOptions
    } = deps
    const panel = el('div', 'cp-menu-pane-inner')

    const sliderSection = el('section', 'cp-section')
    sliderSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.processing || 'Processing' }))

    for (const definition of SETTINGS_SLIDERS) {
        sliderSection.appendChild(createSliderControl(definition, syncRegistry, deps))
    }

    // ── ISO 226 Hearing Compensation slider ──
    sliderSection.appendChild(createSliderControl({
        key: 'adjustForHumanHearing',
        label: UI_TEXT.settings.adjustForHumanHearing
            || UI_TEXT.settings?.paramLabels?.adjustForHumanHearing
            || 'Hearing Compensation',
        min: 0, max: 1, step: 0.1,
        tooltip: UI_TEXT.settings?.tooltips?.adjustForHumanHearing
            || 'ISO 226 equal-loudness compensation. 0 = Off, 0.5 = moderate, 1.0 = full.',
    }, syncRegistry, deps))

    const resetButton = el('button', 'cp-btn cp-btn-wide', { text: UI_TEXT.settings.resetDefaults })
    applyButtonIcon(resetButton, BUTTON_ICON_MAP.reset, UI_TEXT.settings.resetDefaults)
    resetButton.addEventListener('click', () => {
        resetToDefaults()
    })
    sliderSection.appendChild(resetButton)

    const rangeSection = el('section', 'cp-section')
    rangeSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.normalizationRanges }))
    for (const definition of SETTINGS_RANGES) {
        rangeSection.appendChild(createRangePairControl(definition, syncRegistry, deps))
    }

    // ── Time dropdown only (engine mode is derived from layer settings) ──
    const modeSection = el('section', 'cp-section')
    modeSection.appendChild(el('h3', 'cp-section-title', { text: 'Engine Mode' }))
    const modeInfo = el('div', 'cp-setting-hint cp-mode-info', {
        text: 'Engine mode is derived automatically from layer type settings in Styles.',
    })
    modeSection.appendChild(modeInfo)

    const timeModeRow = el('div', 'cp-setting-row')
    const timeModeLabel = el('label', 'cp-setting-label', { text: 'Time Mode' })
    const timeModeSelect = el('select', 'cp-input-select')
    timeModeSelect.title = '⚠ Not yet wired — has no effect on the render pipeline.'
    timeModeSelect.appendChild(createSelectOptions([
        { value: 'immediate', label: 'Immediate' },
        { value: 'interval', label: 'Interval' },
    ], params.timeMode || 'immediate'))
    const timeModeNote = el('span', 'cp-setting-note', { text: '⚠ Not wired yet' })
    timeModeRow.append(timeModeLabel, timeModeSelect, timeModeNote)
    modeSection.appendChild(timeModeRow)

    timeModeSelect.addEventListener('change', () => set('timeMode', timeModeSelect.value))

    const syncTimeDropdown = () => {
        timeModeSelect.value = params.timeMode || 'immediate'
    }
    registerSync(syncRegistry, syncTimeDropdown, ['timeMode'])
    syncTimeDropdown()

    // ── FFT Size dropdowns ──
    const fftSection = el('section', 'cp-section')
    fftSection.appendChild(el('h3', 'cp-section-title', { text: 'FFT Resolution' }))

    const freqFftRow = el('div', 'cp-setting-row')
    const freqFftLabel = el('label', 'cp-setting-label', { text: 'Frequency FFT Size' })
    const freqFftSelect = el('select', 'cp-input-select')
    freqFftSelect.appendChild(createSelectOptions([
        { value: '1024', label: '1024' },
        { value: '2048', label: '2048' },
        { value: '4096', label: '4096' },
        { value: '8192', label: '8192' },
        { value: '16384', label: '16384' },
        { value: '32768', label: '32768' },
    ], String(params.frequencyFftSize ?? 16384)))
    freqFftRow.append(freqFftLabel, freqFftSelect)
    fftSection.appendChild(freqFftRow)

    const rhythmFftRow = el('div', 'cp-setting-row')
    const rhythmFftLabel = el('label', 'cp-setting-label', { text: 'Rhythm FFT Size' })
    const rhythmFftSelect = el('select', 'cp-input-select')
    rhythmFftSelect.appendChild(createSelectOptions([
        { value: '256', label: '256' },
        { value: '512', label: '512' },
        { value: '1024', label: '1024' },
        { value: '2048', label: '2048' },
        { value: '4096', label: '4096' },
    ], String(params.rhythmFftSize ?? 1024)))
    rhythmFftRow.append(rhythmFftLabel, rhythmFftSelect)
    fftSection.appendChild(rhythmFftRow)

    freqFftSelect.addEventListener('change', () => set('frequencyFftSize', Number(freqFftSelect.value)))
    rhythmFftSelect.addEventListener('change', () => set('rhythmFftSize', Number(rhythmFftSelect.value)))

    const syncFftDropdowns = () => {
        freqFftSelect.value = String(params.frequencyFftSize ?? 16384)
        rhythmFftSelect.value = String(params.rhythmFftSize ?? 1024)
    }
    registerSync(syncRegistry, syncFftDropdowns, ['frequencyFftSize', 'rhythmFftSize'])
    syncFftDropdowns()

    // ── Iterative Subtraction (Time-Domain Source Separation) ──
    const sepSection = el('section', 'cp-section')
    sepSection.appendChild(el('h3', 'cp-section-title', { text: 'Source Separation' }))

    const sepModeRow = el('div', 'cp-setting-row')
    const sepModeLabel = el('label', 'cp-setting-label', { text: 'Mode' })
    const sepModeSelect = el('select', 'cp-input-select')
    sepModeSelect.appendChild(createSelectOptions([
        { value: 'none', label: 'None' },
        { value: 'iterative', label: 'Iterative Subtraction' },
    ], String(params.separationMode ?? 'none')))
    sepModeRow.append(sepModeLabel, sepModeSelect)
    sepSection.appendChild(sepModeRow)

    const sepThresholdRow = el('div', 'cp-setting-row')
    sepThresholdRow.id = 'sep-threshold-row'
    const sepThresholdLabel = el('label', 'cp-setting-label', { text: 'Threshold' })
    const sepThresholdInput = el('input', 'cp-input-range')
    sepThresholdInput.type = 'range'
    sepThresholdInput.min = '0.05'
    sepThresholdInput.max = '0.5'
    sepThresholdInput.step = '0.01'
    sepThresholdInput.value = String(params.separationThreshold ?? 0.2)
    const sepThresholdVal = el('span', 'cp-setting-value', { text: sepThresholdInput.value })
    sepThresholdRow.append(sepThresholdLabel, sepThresholdInput, sepThresholdVal)
    sepSection.appendChild(sepThresholdRow)

    // Show/hide threshold based on mode
    const updateSepVisibility = () => {
        const isIter = (params.separationMode ?? 'none') === 'iterative'
        sepThresholdRow.style.display = isIter ? '' : 'none'
        sepModeSelect.value = String(params.separationMode ?? 'none')
    }
    registerSync(syncRegistry, updateSepVisibility, ['separationMode', 'separationThreshold'])
    updateSepVisibility()

    sepModeSelect.addEventListener('change', () => set('separationMode', sepModeSelect.value))
    sepThresholdInput.addEventListener('input', () => {
        sepThresholdVal.textContent = sepThresholdInput.value
        set('separationThreshold', Number(sepThresholdInput.value))
    })

    panel.append(sliderSection, modeSection, fftSection, sepSection, rangeSection)
    body.appendChild(panel)
}
