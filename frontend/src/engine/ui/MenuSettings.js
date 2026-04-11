import { createSliderControl } from '../../components/SliderControl.js'
import { createRangePairControl } from '../../components/RangePairControl.js'

export function buildSettingsMenu(body, syncRegistry, deps) {
    const {
        el, UI_TEXT, FFT_OPTIONS, params, set, resetToDefaults,
        SETTINGS_SLIDERS, SETTINGS_RANGES, BUTTON_ICON_MAP, applyButtonIcon,
        createSelectOptions, registerSync
    } = deps
    const panel = el('div', 'cp-menu-pane-inner')

    const sliderSection = el('section', 'cp-section')
    sliderSection.appendChild(el('h3', 'cp-section-title', { text: UI_TEXT.settings.processing || 'Processing' }))

    const resolutionRow = el('div', 'cp-setting-row')
    const resolutionLabelWrap = el('div', 'cp-setting-label-wrap')
    resolutionLabelWrap.appendChild(el('label', 'cp-setting-label', {
        text: UI_TEXT.settings.audioResolution,
        title: 'Technical term: FFT Size. Frequency-domain analysis resolution.',
    }))
    const resolutionSelect = el('select', 'cp-input-select')
    resolutionSelect.appendChild(createSelectOptions(
        FFT_OPTIONS.map((value) => ({ value, label: String(value) })),
        params.fftSize,
    ))
    resolutionSelect.addEventListener('change', () => {
        set('fftSize', Number(resolutionSelect.value))
    })
    resolutionRow.append(resolutionLabelWrap, resolutionSelect)
    sliderSection.appendChild(resolutionRow)

    const hearingToggle = el('input', 'cp-input-toggle', { type: 'checkbox' })
    const hearingLabel = UI_TEXT.settings.adjustForHumanHearing
        || UI_TEXT.settings?.paramLabels?.adjustForHumanHearing
        || 'Adjust for human hearing'
    const hearingTooltip = UI_TEXT.settings?.tooltips?.adjustForHumanHearing
        || 'Apply ISO 226 equal-loudness compensation to per-frequency volume.'
    const hearingRow = el('label', 'cp-toggle-row')
    hearingRow.title = hearingTooltip
    hearingRow.append(
        hearingToggle,
        el('span', 'cp-setting-label', { text: hearingLabel, title: hearingTooltip }),
    )
    hearingToggle.addEventListener('change', () => {
        set('adjustForHumanHearing', hearingToggle.checked ? 1 : 0)
    })
    sliderSection.appendChild(hearingRow)

    for (const definition of SETTINGS_SLIDERS) {
        sliderSection.appendChild(createSliderControl(definition, syncRegistry, deps))
    }

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

    const syncResolution = () => {
        resolutionSelect.value = String(params.fftSize || 2048)
    }
    const syncHearingToggle = () => {
        hearingToggle.checked = Number(params.adjustForHumanHearing ?? 0) >= 0.5
    }
    registerSync(syncRegistry, syncResolution, ['fftSize'])
    registerSync(syncRegistry, syncHearingToggle, ['adjustForHumanHearing'])
    syncResolution()
    syncHearingToggle()

    panel.append(sliderSection, rangeSection)
    body.appendChild(panel)
}
