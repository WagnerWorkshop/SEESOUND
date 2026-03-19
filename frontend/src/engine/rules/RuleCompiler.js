/**
 * JIT rule compiler with deterministic ordering and safe helper exposure.
 */

import {
    getInputDictionary,
    sanitizeRuleBlocks,
} from './RuleDictionary.js'

const _NOOP_SPAWN = () => { }
const _NOOP_LIVING = () => { }

const _helpers = Object.freeze({
    clamp: (x, lo, hi) => Math.max(lo, Math.min(hi, x)),
    lerp: (a, b, t) => a + (b - a) * t,
    smoothstep: (e0, e1, x) => {
        const t = Math.max(0, Math.min(1, (x - e0) / Math.max(1e-9, e1 - e0)))
        return t * t * (3 - 2 * t)
    },
    pow: Math.pow,
    min: Math.min,
    max: Math.max,
    abs: Math.abs,
})

function _usesHsbOutput(rules) {
    for (const rule of (rules || [])) {
        const actions = Array.isArray(rule?.actions) ? rule.actions : []
        for (const action of actions) {
            if (action?.output === 'hue' || action?.output === 'saturation' || action?.output === 'brightness') return true
        }
    }
    return false
}

function _usesOutput(rules, outputId) {
    for (const rule of (rules || [])) {
        const actions = Array.isArray(rule?.actions) ? rule.actions : []
        for (const action of actions) {
            if (action?.output === outputId) return true
        }
    }
    return false
}

const _allowedConditionOps = new Set(['>', '>=', '<', '<=', '==', '!='])

let _cache = {
    hash: null,
    result: {
        hash: null,
        compileStatus: 'bootstrap-pending',
        compileError: null,
        compileTimeMs: 0,
        lineMap: [],
        source: '',
        requiredInputsByTarget: {
            spawnedParticles: [],
            allParticles: [],
            background: [],
            camera: [],
        },
        requiredInputs: [],
        applySpawnRules: _NOOP_SPAWN,
        applyLivingRules: _NOOP_LIVING,
    },
}

function _extractInputIdsFromExpression(expr, inputSet) {
    if (typeof expr !== 'string' || !expr.trim()) return []
    const ids = new Set()
    const tokens = expr.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
    for (const tok of tokens) {
        if (inputSet.has(tok)) ids.add(tok)
    }
    return [...ids]
}

function _collectRuleInputs(rules, inputSet) {
    const ids = new Set()
    for (const rule of (rules || [])) {
        if (!rule?.enabled) continue
        const cond = rule.condition || {}
        if (typeof cond.input === 'string' && inputSet.has(cond.input)) ids.add(cond.input)
        if (typeof cond.valueInput === 'string' && inputSet.has(cond.valueInput)) ids.add(cond.valueInput)
        for (const id of _extractInputIdsFromExpression(cond.expression, inputSet)) ids.add(id)

        const actions = Array.isArray(rule.actions) ? rule.actions : []
        for (const action of actions) {
            if (typeof action?.input === 'string' && inputSet.has(action.input)) ids.add(action.input)
            for (const id of _extractInputIdsFromExpression(action?.expression, inputSet)) ids.add(id)
        }
    }
    return [...ids]
}

function _literal(value) {
    return JSON.stringify(value)
}

function _toRhs(action) {
    if (typeof action.expression === 'string' && action.expression.trim()) return `(${action.expression})`
    if (typeof action.input === 'string' && action.input.trim()) return action.input
    return _literal(action.value)
}

function _compileCondition(condition) {
    if (!condition || condition.operator === 'always') return 'true'
    if (typeof condition.expression === 'string' && condition.expression.trim()) {
        return `(${condition.expression})`
    }
    if (!_allowedConditionOps.has(condition.operator)) return 'false'

    const lhs = typeof condition.input === 'string' ? condition.input : '0'
    const rhs = (typeof condition.valueInput === 'string' && condition.valueInput)
        ? condition.valueInput
        : _literal(condition.value ?? 0)

    return `((${lhs}) ${condition.operator} (${rhs}))`
}

function _compileAction(action) {
    const output = action.output
    const rhs = _toRhs(action)
    switch (action.operator) {
        case 'set':
            return `target.${output} = ${rhs};`
        case 'add':
            return `target.${output} = (target.${output} ?? 0) + (${rhs});`
        case 'subtract':
            return `target.${output} = (target.${output} ?? 0) - (${rhs});`
        case 'multiply':
            return `target.${output} = (target.${output} ?? 0) * (${rhs});`
        case 'divide':
            return `if ((${rhs}) !== 0) target.${output} = (target.${output} ?? 0) / (${rhs});`
        case 'clamp':
            return `target.${output} = clamp((target.${output} ?? 0), -Math.abs(${rhs}), Math.abs(${rhs}));`
        default:
            return ''
    }
}

function _buildFunctionSource(fnName, rules, inputIds, includeParticleArg) {
    const lines = []
    const lineMap = []

    lines.push(`function ${fnName}(ctx${includeParticleArg ? ', particle' : ''}) {`)
    lines.push(`  const target = ${includeParticleArg ? '(particle ?? ctx?.particle ?? ctx)' : '(ctx?.particle ?? ctx)'};`)
    lines.push('  if (!target) return;')
    lines.push('  const i = (ctx && (ctx.inputs || ctx)) || {};')
    lines.push('  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;')
    lines.push('  const time = Number.isFinite(i.time) ? i.time : 0;')
    for (const id of inputIds) {
        if (id === 'deltaTime' || id === 'time') continue
        lines.push(`  const ${id} = Number.isFinite(i.${id}) ? i.${id} : 0;`)
    }

    rules.forEach((rule) => {
        if (!rule.enabled) return
        const cond = _compileCondition(rule.condition)
        lines.push(`  // rule ${rule.id}`)
        lines.push(`  if (${cond}) {`)
        lineMap.push({ ruleId: rule.id, functionName: fnName, sourceLine: lines.length + 1 })
        for (const action of (rule.actions ?? [])) {
            lines.push(`    ${_compileAction(action)}`)
        }
        lines.push('  }')
    })

    lines.push('}')
    return { source: lines.join('\n'), lineMap }
}

export function buildSpawnFunction(blocks, inputIds) {
    return _buildFunctionSource('applySpawnRules', blocks, inputIds, false)
}

export function buildLivingFunction(blocks, inputIds) {
    return _buildFunctionSource('applyLivingRules', blocks, inputIds, true)
}

export function hashRules(ruleBlocks) {
    const text = JSON.stringify(ruleBlocks ?? [])
    let hash = 2166136261
    for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i)
        hash = Math.imul(hash, 16777619)
    }
    return (hash >>> 0).toString(16)
}

export function compileRules(ruleBlocks, dictionaries) {
    const t0 = performance.now()
    const sanitized = sanitizeRuleBlocks(ruleBlocks, dictionaries)
    const normalizedRules = sanitized.ruleBlocks
    const sortedRules = [...normalizedRules].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    const spawnedRules = sortedRules.filter((rule) => rule.target === 'spawnedParticles')
    const livingRules = sortedRules.filter((rule) => rule.target === 'allParticles')
    const backgroundRules = sortedRules.filter((rule) => rule.target === 'background')
    const cameraRules = sortedRules.filter((rule) => rule.target === 'camera')
    const hash = hashRules(sortedRules)

    if (_cache.hash === hash) return _cache.result

    const inputIds = getInputDictionary().entries.map((entry) => entry.id)
    const inputIdSet = new Set(inputIds)
    const requiredInputsByTarget = {
        spawnedParticles: _collectRuleInputs(spawnedRules, inputIdSet),
        allParticles: _collectRuleInputs(livingRules, inputIdSet),
        background: _collectRuleInputs(backgroundRules, inputIdSet),
        camera: _collectRuleInputs(cameraRules, inputIdSet),
    }
    const requiredInputs = [...new Set([
        ...requiredInputsByTarget.spawnedParticles,
        ...requiredInputsByTarget.allParticles,
        ...requiredInputsByTarget.background,
        ...requiredInputsByTarget.camera,
    ])]
    const spawnBuild = buildSpawnFunction(spawnedRules, inputIds)
    const livingBuild = buildLivingFunction(livingRules, inputIds)
    const bgBuild = _buildFunctionSource('applyBackgroundRules', backgroundRules, inputIds, true)
    const camBuild = _buildFunctionSource('applyCameraRules', cameraRules, inputIds, true)

    const source = [
        `'use strict';`,
        'const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;',
        spawnBuild.source,
        livingBuild.source,
        bgBuild.source,
        camBuild.source,
        'return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };',
    ].join('\n\n')

    try {
        const factory = new Function('helpers', source)
        const compiled = factory(_helpers)
        const result = {
            hash,
            compileStatus: sanitized.rejected.length > 0 ? 'compiled-with-rejections' : 'compiled',
            compileError: null,
            compileTimeMs: Math.max(0, performance.now() - t0),
            spawnRuleCount: spawnedRules.length,
            livingRuleCount: livingRules.length,
            backgroundRuleCount: backgroundRules.length,
            cameraRuleCount: cameraRules.length,
            usesParticleHsb: _usesHsbOutput([...spawnedRules, ...livingRules]),
            usesBackgroundHsb: _usesHsbOutput(backgroundRules),
            usesLivingShapeType: _usesOutput(livingRules, 'shapeType'),
            rejected: sanitized.rejected,
            requiredInputsByTarget,
            requiredInputs,
            lineMap: [...spawnBuild.lineMap, ...livingBuild.lineMap, ...bgBuild.lineMap, ...camBuild.lineMap],
            source,
            applySpawnRules: typeof compiled.applySpawnRules === 'function' ? compiled.applySpawnRules : _NOOP_SPAWN,
            applyLivingRules: typeof compiled.applyLivingRules === 'function' ? compiled.applyLivingRules : _NOOP_LIVING,
            applyBackgroundRules: typeof compiled.applyBackgroundRules === 'function' ? compiled.applyBackgroundRules : _NOOP_LIVING,
            applyCameraRules: typeof compiled.applyCameraRules === 'function' ? compiled.applyCameraRules : _NOOP_LIVING,
        }
        _cache = { hash, result }
        return result
    } catch (err) {
        const lineHint = Number.isFinite(err?.lineNumber) ? Number(err.lineNumber) : null
        const fallback = {
            ..._cache.result,
            hash,
            compileStatus: 'error',
            compileError: err?.message || String(err),
            compileLine: lineHint,
            compileTimeMs: Math.max(0, performance.now() - t0),
            spawnRuleCount: spawnedRules.length,
            livingRuleCount: livingRules.length,
            backgroundRuleCount: backgroundRules.length,
            cameraRuleCount: cameraRules.length,
            usesParticleHsb: _usesHsbOutput([...spawnedRules, ...livingRules]),
            usesBackgroundHsb: _usesHsbOutput(backgroundRules),
            usesLivingShapeType: _usesOutput(livingRules, 'shapeType'),
            requiredInputsByTarget,
            requiredInputs,
            lineMap: [...spawnBuild.lineMap, ...livingBuild.lineMap, ...bgBuild.lineMap, ...camBuild.lineMap],
            source,
            rejected: sanitized.rejected,
        }
        return fallback
    }
}
