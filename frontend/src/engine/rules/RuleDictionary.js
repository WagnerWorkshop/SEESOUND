/**
 * Canonical dictionaries and validation helpers for the low-code rule engine.
 */

import { RULE_VARIABLES } from '../ui/UiText.js'

const _INPUT_RANGES = Object.freeze({
    binMagnitude: [0, 1],
    binPhase: [0, 1],
    binFlux: [-1, 1],
    binPhaseDeviation: [0, 1],
    binAttackTime: [0, 1],
    binEnvelope: [0, 3],
    binEnvelopeState: [0, 3],
    binRMSEnergy: [0, 1],
    frequencyHz: [0, 22050],
    notePitchClass: [0, 11],
    octave: [-2, 12],
    normFreq: [0, 1],
    pan: [-1, 1],
    amplitude: [0, 1],
    bass: [0, 1],
    mid: [0, 1],
    high: [0, 1],
    peakFreq: [0, 22050],
    globalRmsEnergy: [0, 1],
    peakAmplitude: [0, 1],
    zeroCrossingRate: [0, 1],
    spectralCentroid: [0, 1],
    spectralFlux: [0, 1],
    spectralFlatness: [0, 1],
    spectralRolloff: [0, 1],
    spectralSpread: [0, 1],
    spectralSkewness: [0, 1],
    chromagram: [0, 1],
    inharmonicity: [0, 1],
    time: [0, Number.POSITIVE_INFINITY],
    deltaTime: [0, 1],
    canvasWidthPx: [0, Number.POSITIVE_INFINITY],
    canvasHeightPx: [0, Number.POSITIVE_INFINITY],
    canvasWidthUnits: [0, Number.POSITIVE_INFINITY],
    canvasHeightUnits: [0, Number.POSITIVE_INFINITY],
    canvasWidth: [0, Number.POSITIVE_INFINITY],
    canvasHeight: [0, Number.POSITIVE_INFINITY],
    audioLengthSec: [0, Number.POSITIVE_INFINITY],
})

const _legacyInputAliases = [
    {
        id: 'canvasWidth',
        group: 'overall',
        label: 'Canvas Width',
        technicalName: 'canvasWidth',
        description: 'Legacy alias of canvasWidthPx.',
    },
    {
        id: 'canvasHeight',
        group: 'overall',
        label: 'Canvas Height',
        technicalName: 'canvasHeight',
        description: 'Legacy alias of canvasHeightPx.',
    },
]

const _inputEntries = RULE_VARIABLES.concat(_legacyInputAliases).map((entry) => ({
    id: entry.id,
    type: 'number',
    range: _INPUT_RANGES[entry.id] || [0, 1],
    category: entry.group,
    label: entry.label,
    technicalName: entry.technicalName,
    description: entry.description,
}))

const _outputEntries = [
    { id: 'x', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'lines', 'camera'] },
    { id: 'y', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'lines', 'camera'] },
    { id: 'z', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'lines', 'camera'] },
    { id: 'zoom', type: 'number', range: [0.05, 32], targets: ['camera'] },
    { id: 'targetX', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['camera'] },
    { id: 'targetY', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['camera'] },
    { id: 'targetZ', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['camera'] },
    { id: 'angleOfView', type: 'number', range: [20, 120], targets: ['camera'] },
    { id: 'size', type: 'number', range: [0, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles'] },
    { id: 'red', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'green', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'blue', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'yellow', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'luma', type: 'number', range: [0, 255], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'rgb', type: 'vector', size: 3, targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'hue', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'saturation', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'brightness', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'hsv', type: 'vector', size: 3, targets: ['spawnedParticles', 'allParticles', 'lines', 'background'] },
    { id: 'opacity', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'lines'] },
    { id: 'particleCount', type: 'number', range: [0, 1], targets: ['spawnedParticles'] },
    // Legacy disabled: physical material outputs are intentionally removed from active targets.
    { id: 'shapeType', type: 'enum', values: ['square', 'circle'], targets: ['spawnedParticles', 'allParticles'] },
    { id: 'length', type: 'number', range: [0, Number.POSITIVE_INFINITY], targets: ['lines'] },
    { id: 'direction', type: 'enum', values: ['x', 'y', 'z'], targets: ['lines'] },
    // Legacy disabled: endpoint outputs are replaced by midpoint + length + direction.
    { id: 'thickness', type: 'number', range: [0, 64], targets: ['lines'] },
    { id: 'lineCount', type: 'number', range: [0, 1], targets: ['lines'] },
]

export const RULE_TARGETS = Object.freeze(['spawnedParticles', 'allParticles', 'lines', 'background', 'camera'])

export const RULE_SCOPES = Object.freeze(['spawnedOnly', 'allLivingFrame'])

export const RULE_ACTION_OPERATORS = Object.freeze([
    'set',
    'add',
    'subtract',
    'multiply',
    'divide',
    'clamp',
])

export const RULE_CONDITION_OPERATORS = Object.freeze([
    'always',
    '>',
    '>=',
    '<',
    '<=',
    '==',
    '!=',
])

export const inputDictionary = Object.freeze({
    version: 1,
    entries: Object.freeze(_inputEntries.map((entry) => Object.freeze({ ...entry }))),
})

export const outputDictionary = Object.freeze({
    version: 1,
    entries: Object.freeze(_outputEntries.map((entry) => Object.freeze({ ...entry }))),
})

const _inputMap = new Map(inputDictionary.entries.map((entry) => [entry.id, entry]))
const _outputMap = new Map(outputDictionary.entries.map((entry) => [entry.id, entry]))

export function getInputDictionary() {
    return inputDictionary
}

export function getOutputDictionary() {
    return outputDictionary
}

function _isAlwaysCondition(condition) {
    if (!condition) return true
    if (condition.type === 'always') return true
    if (condition.operator === 'always') return true
    return false
}

function _hasBalancedParens(text) {
    let depth = 0
    for (let i = 0; i < text.length; i++) {
        const c = text[i]
        if (c === '(') depth++
        if (c === ')') {
            depth--
            if (depth < 0) return false
        }
    }
    return depth === 0
}

function _normalizeExpressionSyntax(expr) {
    if (typeof expr !== 'string') return ''
    let out = expr.trim()
    if (!out) return ''

    // Allow concise human-friendly syntax and normalize to JS operators.
    out = out.replace(/×/g, '*').replace(/÷/g, '/')
    out = out.replace(/\band\b/gi, '&&')
    out = out.replace(/\bor\b/gi, '||')
    out = out.replace(/\bnot\b/gi, '!')
    out = out.replace(/\bif\s*\(/gi, 'iif(')
    return out
}

function _validateExpression(expr, inMap) {
    if (typeof expr !== 'string') return null
    const value = _normalizeExpressionSyntax(expr)
    if (!value) return 'Expression cannot be empty.'
    if (!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(value)) {
        return 'Expression contains unsupported characters.'
    }
    if (!_hasBalancedParens(value)) {
        return 'Expression has unbalanced parentheses.'
    }

    const allowed = new Set([
        ...inMap.keys(),
        'clamp',
        'lerp',
        'smoothstep',
        'pow',
        'mod',
        'sin',
        'cos',
        'step',
        'iif',
        'min',
        'max',
        'abs',
        'palette',
        'gradient',
        'matchLuma',
        'rgb',
        'hsv',
        'PI',
        'E',
        'true',
        'false',
    ])
    const withoutStrings = value
        .replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g, ' ')
        .replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g, ' ')
    const tokens = withoutStrings.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
    for (const token of tokens) {
        if (!allowed.has(token)) {
            return `Expression references unknown identifier: ${token}`
        }
    }
    return null
}

function _normalizeTarget(rule) {
    if (rule?.target === 'physicalParticles') return '__legacy_physical_particles__'
    if (RULE_TARGETS.includes(rule?.target)) return rule.target
    if (String(rule?.context || '').toLowerCase().includes('line')) return 'lines'
    if (rule?.scope === 'spawnedOnly') return 'spawnedParticles'
    if (rule?.scope === 'allLivingFrame') return 'allParticles'
    return 'spawnedParticles'
}

function _isOutputAllowedForTarget(outputMeta, target) {
    const allowed = Array.isArray(outputMeta?.targets) ? outputMeta.targets : RULE_TARGETS
    return allowed.includes(target)
}

/**
 * Validates a single rule block against canonical dictionaries.
 * Unknown ids are rejected with hard errors.
 */
export function validateRuleBlock(rule, dictionaries = { input: inputDictionary, output: outputDictionary }) {
    const errors = []
    const warnings = []
    const contradictions = []
    const inMap = new Map((dictionaries.input?.entries ?? []).map((entry) => [entry.id, entry]))
    const outMap = new Map((dictionaries.output?.entries ?? []).map((entry) => [entry.id, entry]))

    if (!rule || typeof rule !== 'object') {
        return { ok: false, errors: ['Rule must be an object.'], warnings, contradictions }
    }

    if (!RULE_SCOPES.includes(rule.scope)) {
        errors.push(`Unknown scope: ${String(rule.scope)}`)
    }

    const target = _normalizeTarget(rule)
    if (!RULE_TARGETS.includes(target)) {
        errors.push(`Unknown target: ${String(rule?.target)}`)
    }

    if (rule.condition?.operator && !RULE_CONDITION_OPERATORS.includes(rule.condition.operator)) {
        errors.push(`Unknown condition operator: ${String(rule.condition.operator)}`)
    }

    if (rule.condition?.expression !== undefined) {
        const exprErr = _validateExpression(rule.condition.expression, inMap)
        if (exprErr) errors.push(`Condition expression invalid: ${exprErr}`)
    }

    const conditionInput = rule.condition?.input
    if (conditionInput && !inMap.has(conditionInput)) {
        errors.push(`Unknown condition input: ${conditionInput}`)
    }

    const actions = Array.isArray(rule.actions) ? rule.actions : []
    const setTargets = new Map()
    actions.forEach((action, actionIndex) => {
        const output = action?.output
        if (!output || !outMap.has(output)) {
            errors.push(`Unknown action output at index ${actionIndex}: ${String(output)}`)
            return
        }

        const outputMeta = outMap.get(output)
        if (!_isOutputAllowedForTarget(outputMeta, target)) {
            errors.push(`Output ${output} is not valid for target ${target} at index ${actionIndex}`)
        }
        if (action?.operator && !RULE_ACTION_OPERATORS.includes(action.operator)) {
            errors.push(`Unknown action operator at index ${actionIndex}: ${String(action.operator)}`)
        }
        if (outputMeta.type === 'enum' && action?.value !== undefined && !outputMeta.values.includes(action.value)) {
            errors.push(
                `Invalid enum value for ${output} at index ${actionIndex}: ${String(action.value)}. Allowed: ${outputMeta.values.join('|')}`
            )
        }

        if (action?.operator === 'set') {
            const prior = setTargets.get(output)
            if (prior !== undefined) {
                contradictions.push({
                    type: 'sameRuleSetConflict',
                    color: 'red',
                    output,
                    overriddenActionIndex: prior,
                    winningActionIndex: prior,
                    resolution: 'first-executes',
                })
                warnings.push(`Contradiction on ${output}: action ${prior} takes precedence; later action ${actionIndex} is ignored.`)
            }
            setTargets.set(output, actionIndex)
        }

        const actionInput = action?.input
        if (actionInput && !inMap.has(actionInput)) {
            errors.push(`Unknown action input at index ${actionIndex}: ${actionInput}`)
        }

        if (action?.expression !== undefined) {
            const exprErr = _validateExpression(action.expression, inMap)
            if (exprErr) errors.push(`Action expression invalid at index ${actionIndex}: ${exprErr}`)
        }
    })

    return {
        ok: errors.length === 0,
        errors,
        warnings,
        contradictions,
    }
}

/**
 * Annotates cross-rule contradictions for UI coloring while preserving order.
 * Deterministic resolution: first rule wins.
 */
export function annotateRuleContradictions(ruleBlocks) {
    const input = Array.isArray(ruleBlocks) ? ruleBlocks : []
    const seen = new Map()
    const redRuleIds = new Set()
    const notes = []

    input.forEach((rule, index) => {
        if (!rule?.enabled || rule?.sectionDisabled === true) return
        const scope = rule.scope || 'spawnedOnly'
        const ruleId = rule.id || `rule-${index}`
        const actions = Array.isArray(rule.actions) ? rule.actions : []
        const always = _isAlwaysCondition(rule.condition)
        if (!always) return

        actions.forEach((action) => {
            if (action?.operator !== 'set' || !_outputMap.has(action?.output)) return
            const target = _normalizeTarget(rule)
            const key = `${target}:${scope}:${action.output}`
            const prior = seen.get(key)
            if (prior) {
                redRuleIds.add(prior.ruleId)
                redRuleIds.add(ruleId)
                notes.push({
                    color: 'red',
                    type: 'crossRuleConflict',
                    scope,
                    target,
                    output: action.output,
                    overriddenRuleId: prior.ruleId,
                    winningRuleId: prior.ruleId,
                    resolution: 'first-executes',
                })
            }
            seen.set(key, { ruleId, index })
        })
    })

    const rules = input.map((rule, index) => {
        const id = rule?.id || `rule-${index}`
        return {
            ...rule,
            uiState: redRuleIds.has(id) ? 'red' : 'normal',
        }
    })

    return {
        rules,
        notes,
        redRuleIds: [...redRuleIds],
    }
}

/**
 * Coerces incoming rule blocks to the canonical shape and rejects invalid items.
 * Returns only valid rules to keep runtime deterministic.
 */
export function sanitizeRuleBlocks(ruleBlocks, dictionaries = { input: inputDictionary, output: outputDictionary }) {
    const input = Array.isArray(ruleBlocks) ? ruleBlocks : []
    const sanitized = []
    const rejected = []

    input.forEach((rule, index) => {
        const coerced = {
            id: typeof rule?.id === 'string' && rule.id.trim() ? rule.id.trim() : `rule-${index}`,
            group: typeof rule?.group === 'string' ? rule.group : '',
            subgroup: typeof rule?.subgroup === 'string' ? rule.subgroup : '',
            enabled: rule?.enabled !== false,
            sectionDisabled: rule?.sectionDisabled === true,
            target: _normalizeTarget(rule),
            scope: RULE_SCOPES.includes(rule?.scope) ? rule.scope : 'spawnedOnly',
            condition: (rule?.condition && typeof rule.condition === 'object')
                ? { ...rule.condition }
                : { operator: 'always' },
            actions: Array.isArray(rule?.actions) ? rule.actions.map((action) => ({ ...action })) : [],
            order: Number.isFinite(rule?.order) ? Number(rule.order) : index,
        }

        if (!coerced.condition.operator) coerced.condition.operator = 'always'
        if (!RULE_CONDITION_OPERATORS.includes(coerced.condition.operator)) {
            coerced.condition.operator = 'always'
        }
        if (coerced.condition?.input) coerced.condition.input = String(coerced.condition.input)
        if (coerced.condition?.valueInput) coerced.condition.valueInput = String(coerced.condition.valueInput)
        if (typeof coerced.condition?.expression === 'string') coerced.condition.expression = coerced.condition.expression

        coerced.scope = (coerced.target === 'spawnedParticles' || coerced.target === 'lines') ? 'spawnedOnly' : 'allLivingFrame'

        coerced.actions = coerced.actions
            .filter((action) => action && typeof action === 'object')
            .map((action) => {
                return {
                    operator: RULE_ACTION_OPERATORS.includes(action.operator) ? action.operator : 'set',
                    output: action.output,
                    value: action.value,
                    input: action.input,
                    expression: action.expression,
                }
            })

        const verdict = validateRuleBlock(coerced, dictionaries)
        if (verdict.ok) {
            sanitized.push(coerced)
        } else {
            rejected.push({ id: coerced.id, index, errors: verdict.errors })
        }
    })

    return {
        ruleBlocks: sanitized,
        rejected,
    }
}
