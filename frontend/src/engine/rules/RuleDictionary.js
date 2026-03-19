/**
 * Canonical dictionaries and validation helpers for the low-code rule engine.
 */

const _inputEntries = [
    { id: 'amplitude', type: 'number', range: [0, 1], category: 'base' },
    { id: 'binEnergy', type: 'number', range: [0, 1], category: 'base' },
    { id: 'frequencyHz', type: 'number', range: [0, 22050], category: 'base' },
    { id: 'normFreq', type: 'number', range: [0, 1], category: 'base' },
    { id: 'bass', type: 'number', range: [0, 1], category: 'base' },
    { id: 'mid', type: 'number', range: [0, 1], category: 'base' },
    { id: 'high', type: 'number', range: [0, 1], category: 'base' },
    { id: 'peakFreq', type: 'number', range: [0, 22050], category: 'base' },
    { id: 'pan', type: 'number', range: [-1, 1], category: 'base' },
    { id: 'time', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'base' },
    { id: 'deltaTime', type: 'number', range: [0, 1], category: 'base' },
    { id: 'spectralCentroid', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'spectralFlux', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'spectralFlatness', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'inharmonicity', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'binMagnitude', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'binFlux', type: 'number', range: [-1, 1], category: 'advanced' },
    { id: 'binPhaseDeviation', type: 'number', range: [0, 1], category: 'advanced' },
    { id: 'binEnvelope', type: 'number', range: [0, 3], category: 'advanced' },
    { id: 'canvasWidthPx', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'context' },
    { id: 'canvasHeightPx', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'context' },
    { id: 'canvasWidthUnits', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'context' },
    { id: 'canvasHeightUnits', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'context' },
    { id: 'audioLengthSec', type: 'number', range: [0, Number.POSITIVE_INFINITY], category: 'context' },
]

const _outputEntries = [
    { id: 'x', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'camera'] },
    { id: 'y', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'camera'] },
    { id: 'z', type: 'number', range: [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles', 'camera'] },
    { id: 'zoom', type: 'number', range: [0.05, 32], targets: ['camera'] },
    { id: 'size', type: 'number', range: [0, Number.POSITIVE_INFINITY], targets: ['spawnedParticles', 'allParticles'] },
    { id: 'red', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'green', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'blue', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'hue', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'saturation', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'brightness', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles', 'background'] },
    { id: 'opacity', type: 'number', range: [0, 1], targets: ['spawnedParticles', 'allParticles'] },
    { id: 'particleCount', type: 'number', range: [0, 1], targets: ['spawnedParticles'] },
    { id: 'shapeType', type: 'enum', values: ['square', 'circle'], targets: ['spawnedParticles', 'allParticles'] },
]

const _legacyOutputAliases = Object.freeze({
    r: 'red',
    g: 'green',
    b: 'blue',
    a: 'opacity',
    backgroundRed: 'red',
    backgroundGreen: 'green',
    backgroundBlue: 'blue',
})

const _legacyBackgroundOutputs = Object.freeze(new Set(['backgroundRed', 'backgroundGreen', 'backgroundBlue']))

export const RULE_BLOCK_FIELDS = Object.freeze([
    'id',
    'group',
    'subgroup',
    'enabled',
    'target',
    'scope',
    'condition',
    'actions',
    'order',
])

export const RULE_TARGETS = Object.freeze(['spawnedParticles', 'allParticles', 'background', 'camera'])

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

function _validateExpression(expr, inMap) {
    if (typeof expr !== 'string') return null
    const value = expr.trim()
    if (!value) return 'Expression cannot be empty.'
    if (!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(value)) {
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
        'min',
        'max',
        'abs',
        'PI',
        'E',
        'true',
        'false',
    ])
    const tokens = value.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
    for (const token of tokens) {
        if (!allowed.has(token)) {
            return `Expression references unknown identifier: ${token}`
        }
    }
    return null
}

function _normalizeOutputId(id) {
    if (typeof id !== 'string') return id
    return _legacyOutputAliases[id] || id
}

function _normalizeTarget(rule) {
    if (RULE_TARGETS.includes(rule?.target)) return rule.target
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
        const output = _normalizeOutputId(action?.output)
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
                    winningActionIndex: actionIndex,
                    resolution: 'latter-executes',
                })
                warnings.push(`Contradiction on ${output}: action ${actionIndex} overrides action ${prior}.`)
            }
            setTargets.set(output, actionIndex)
        }

        if (action?.input && !inMap.has(action.input)) {
            errors.push(`Unknown action input at index ${actionIndex}: ${action.input}`)
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
 * Deterministic resolution: latter rule wins.
 */
export function annotateRuleContradictions(ruleBlocks) {
    const input = Array.isArray(ruleBlocks) ? ruleBlocks : []
    const seen = new Map()
    const redRuleIds = new Set()
    const notes = []

    input.forEach((rule, index) => {
        if (!rule?.enabled) return
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
                    winningRuleId: ruleId,
                    resolution: 'latter-executes',
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

export function isKnownInputId(id) {
    return _inputMap.has(id)
}

export function isKnownOutputId(id) {
    return _outputMap.has(id)
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

        // Keep legacy scope for compatibility, derive from target for deterministic runtime.
        coerced.scope = coerced.target === 'spawnedParticles' ? 'spawnedOnly' : 'allLivingFrame'

        coerced.actions = coerced.actions
            .filter((action) => action && typeof action === 'object')
            .map((action) => {
                const rawOutput = action.output
                if (_legacyBackgroundOutputs.has(rawOutput) && !rule?.target) {
                    coerced.target = 'background'
                    coerced.scope = 'allLivingFrame'
                }
                return {
                    operator: RULE_ACTION_OPERATORS.includes(action.operator) ? action.operator : 'set',
                    output: _normalizeOutputId(rawOutput),
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
