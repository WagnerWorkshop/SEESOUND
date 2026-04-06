import en from '../../i18n/en.json'
import de from '../../i18n/de.json'
import fr from '../../i18n/fr.json'
import es from '../../i18n/es.json'
import it from '../../i18n/it.json'
import hu from '../../i18n/hu.json'

const SUPPORTED_LANGUAGES = Object.freeze(['en', 'de', 'fr', 'es', 'it', 'hu'])
const LOCALE_MAP = Object.freeze({ en, de, fr, es, it, hu })
const LANGUAGE_STORAGE_KEY = 'seesound_language'

function normalizeLanguage(raw) {
    const value = String(raw || '').trim().toLowerCase()
    if (!value) return 'en'
    const base = value.split('-')[0]
    return SUPPORTED_LANGUAGES.includes(base) ? base : 'en'
}

function resolvePreferredLanguage() {
    if (typeof window === 'undefined') return 'en'

    const urlLang = normalizeLanguage(new URLSearchParams(window.location.search).get('lang'))
    const hasUrlLang = SUPPORTED_LANGUAGES.includes(urlLang)
    if (hasUrlLang && urlLang !== 'en') {
        try { localStorage.setItem(LANGUAGE_STORAGE_KEY, urlLang) } catch { }
        return urlLang
    }

    const stored = normalizeLanguage((() => {
        try { return localStorage.getItem(LANGUAGE_STORAGE_KEY) } catch { return '' }
    })())
    if (SUPPORTED_LANGUAGES.includes(stored) && stored !== 'en') return stored

    const browser = normalizeLanguage(navigator.language || navigator.languages?.[0] || 'en')
    if (SUPPORTED_LANGUAGES.includes(browser)) {
        try { localStorage.setItem(LANGUAGE_STORAGE_KEY, browser) } catch { }
        return browser
    }

    return 'en'
}

export const ACTIVE_LANGUAGE = resolvePreferredLanguage()
const locale = LOCALE_MAP[ACTIVE_LANGUAGE] || en

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
