import en from '../../i18n/en.json'

const locale = en

export const RULE_VARIABLES = Object.freeze(locale.ruleVariables || [])
export const UI_TEXT = Object.freeze(locale.uiText || {})

export function getText(path, fallback = '') {
    if (!path) return fallback
    const parts = String(path).split('.')
    let cursor = UI_TEXT
    for (const part of parts) {
        if (!cursor || typeof cursor !== 'object' || !(part in cursor)) return fallback
        cursor = cursor[part]
    }
    return typeof cursor === 'string' ? cursor : fallback
}

export function getRuleVariablesByGroup(group) {
    return RULE_VARIABLES.filter((entry) => entry.group === group)
}

export function getRuleVariableById(id) {
    return RULE_VARIABLES.find((entry) => entry.id === id) || null
}
