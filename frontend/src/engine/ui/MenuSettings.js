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

    const syncHearingToggle = () => {
        hearingToggle.checked = Number(params.adjustForHumanHearing ?? 0) >= 0.5
    }
    registerSync(syncRegistry, syncHearingToggle, ['adjustForHumanHearing'])
    syncHearingToggle()

    // ── Time dropdown only (engine mode is derived from entity settings) ──
    const modeSection = el('section', 'cp-section')
    modeSection.appendChild(el('h3', 'cp-section-title', { text: 'Engine Mode' }))
    const modeInfo = el('div', 'cp-setting-hint cp-mode-info', {
        text: 'Engine mode is derived automatically from entity type settings in Styles.',
    })
    modeSection.appendChild(modeInfo)

    const timeModeRow = el('div', 'cp-setting-row')
    const timeModeLabel = el('label', 'cp-setting-label', { text: 'Time Mode' })
    const timeModeSelect = el('select', 'cp-input-select')
    timeModeSelect.appendChild(createSelectOptions([
        { value: 'immediate', label: 'Immediate' },
        { value: 'interval', label: 'Interval' },
    ], params.timeMode || 'immediate'))
    timeModeRow.append(timeModeLabel, timeModeSelect)
    modeSection.appendChild(timeModeRow)

    timeModeSelect.addEventListener('change', () => set('timeMode', timeModeSelect.value))

    const syncTimeDropdown = () => {
        timeModeSelect.value = params.timeMode || 'immediate'
    }
    registerSync(syncRegistry, syncTimeDropdown, ['timeMode'])
    syncTimeDropdown()

    panel.append(sliderSection, modeSection, rangeSection)
    body.appendChild(panel)
}
