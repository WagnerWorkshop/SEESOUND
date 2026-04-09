/**
 * JIT rule compiler with deterministic ordering and safe helper exposure.
 */

import {
    getInputDictionary,
    sanitizeRuleBlocks,
} from './RuleDictionary.js'
import { matchLuminanceRgb255 } from '../color/ColorMath.js'

const _NOOP_SPAWN = () => { }
const _NOOP_LIVING = () => { }

function _clamp01(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return 0
    return Math.max(0, Math.min(1, n))
}

function _toByte01(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return 0
    if (Math.abs(n) > 1) return _clamp01(n / 255)
    return _clamp01(n)
}

function _hexToRgb01(hex) {
    if (typeof hex !== 'string') return null
    const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
    if (!m) return null
    const value = m[1]
    const r = parseInt(value.slice(0, 2), 16) / 255
    const g = parseInt(value.slice(2, 4), 16) / 255
    const b = parseInt(value.slice(4, 6), 16) / 255
    return [_clamp01(r), _clamp01(g), _clamp01(b)]
}

function _toColorVector(value) {
    if (Array.isArray(value)) {
        if (value.length < 3) return null
        return [_toByte01(value[0]), _toByte01(value[1]), _toByte01(value[2])]
    }
    if (typeof value === 'string') {
        const hex = _hexToRgb01(value)
        if (hex) return hex
        const parts = value.split(',').map((part) => Number(part.trim())).filter((part) => Number.isFinite(part))
        if (parts.length >= 3) return [_toByte01(parts[0]), _toByte01(parts[1]), _toByte01(parts[2])]
    }
    if (value && typeof value === 'object') {
        if (Number.isFinite(value.r) || Number.isFinite(value.g) || Number.isFinite(value.b)) {
            return [_toByte01(value.r), _toByte01(value.g), _toByte01(value.b)]
        }
        if (Number.isFinite(value.h) || Number.isFinite(value.s) || Number.isFinite(value.v)) {
            return [_toByte01(value.h), _toByte01(value.s), _toByte01(value.v)]
        }
        if (Number.isFinite(value.hue) || Number.isFinite(value.saturation) || Number.isFinite(value.brightness)) {
            return [_toByte01(value.hue), _toByte01(value.saturation), _toByte01(value.brightness)]
        }
    }
    return null
}

function _hsvToRgb01(h, s, v) {
    const rawH = Number(h)
    const unitH = Number.isFinite(rawH) ? (Math.abs(rawH) > 1 ? (rawH / 360) : rawH) : 0
    const hh = ((unitH % 1) + 1) % 1
    const ss = _clamp01(s)
    const vv = _clamp01(v)
    const i = Math.floor(hh * 6)
    const f = hh * 6 - i
    const p = vv * (1 - ss)
    const q = vv * (1 - f * ss)
    const t = vv * (1 - (1 - f) * ss)
    switch (i % 6) {
        case 0: return [vv, t, p]
        case 1: return [q, vv, p]
        case 2: return [p, vv, t]
        case 3: return [p, q, vv]
        case 4: return [t, p, vv]
        default: return [vv, p, q]
    }
}

function _rgbToHsv01(r, g, b) {
    const rr = _clamp01(r)
    const gg = _clamp01(g)
    const bb = _clamp01(b)
    const max = Math.max(rr, gg, bb)
    const min = Math.min(rr, gg, bb)
    const delta = max - min
    let h = 0
    if (delta > 1e-6) {
        if (max === rr) h = ((gg - bb) / delta) % 6
        else if (max === gg) h = ((bb - rr) / delta) + 2
        else h = ((rr - gg) / delta) + 4
        h /= 6
        if (h < 0) h += 1
    }
    const s = max <= 1e-6 ? 0 : (delta / max)
    return [h, s, max]
}

function _normalizePaletteColor(color) {
    if (Array.isArray(color)) {
        if (color.length < 3) return null
        return [_toByte01(color[0]), _toByte01(color[1]), _toByte01(color[2])]
    }
    if (typeof color === 'string') return _hexToRgb01(color)
    if (!color || typeof color !== 'object') return null

    if (Array.isArray(color.rgb) && color.rgb.length >= 3) {
        return [_toByte01(color.rgb[0]), _toByte01(color.rgb[1]), _toByte01(color.rgb[2])]
    }
    if (Number.isFinite(color.r) || Number.isFinite(color.g) || Number.isFinite(color.b)) {
        return [_toByte01(color.r), _toByte01(color.g), _toByte01(color.b)]
    }
    if (Number.isFinite(color.h) || Number.isFinite(color.s) || Number.isFinite(color.v)) {
        return [_toByte01(color.h), _toByte01(color.s), _toByte01(color.v)]
    }
    if (Number.isFinite(color.hue) || Number.isFinite(color.saturation) || Number.isFinite(color.brightness)) {
        return [_toByte01(color.hue), _toByte01(color.saturation), _toByte01(color.brightness)]
    }
    return null
}

function _getPaletteFromCtx(ctx, id) {
    const palettes = Array.isArray(ctx?.params?.palettes) ? ctx.params.palettes : []
    if (palettes.length === 0) return null
    if (typeof id === 'string') {
        return palettes.find((palette) => palette && palette.id === id) || null
    }
    if (Number.isFinite(id)) {
        const index = Math.max(0, Math.floor(id))
        return palettes[index] || null
    }
    return null
}

function _paletteLookup(ctx, id, index) {
    const palette = _getPaletteFromCtx(ctx, id)
    if (!palette || !Array.isArray(palette.colors) || palette.colors.length === 0) return null
    const count = palette.colors.length
    const idx = Number.isFinite(index) ? Math.floor(index) : 0
    const wrapped = ((idx % count) + count) % count
    return _normalizePaletteColor(palette.colors[wrapped])
}

function _gradientLookup(ctx, id, normalizedValue) {
    const palette = _getPaletteFromCtx(ctx, id)
    if (!palette || !Array.isArray(palette.colors) || palette.colors.length === 0) return null
    if (palette.colors.length === 1) return _normalizePaletteColor(palette.colors[0])

    const t = _clamp01(normalizedValue)
    const scaled = t * (palette.colors.length - 1)
    const left = Math.floor(scaled)
    const right = Math.min(palette.colors.length - 1, left + 1)
    const frac = scaled - left
    const c0 = _normalizePaletteColor(palette.colors[left])
    const c1 = _normalizePaletteColor(palette.colors[right])
    if (!c0 && !c1) return null
    if (!c0) return c1
    if (!c1) return c0
    return [
        _clamp01(c0[0] + (c1[0] - c0[0]) * frac),
        _clamp01(c0[1] + (c1[1] - c0[1]) * frac),
        _clamp01(c0[2] + (c1[2] - c0[2]) * frac),
    ]
}

const _helpers = Object.freeze({
    clamp: (x, lo, hi) => Math.max(lo, Math.min(hi, x)),
    lerp: (a, b, t) => a + (b - a) * t,
    smoothstep: (e0, e1, x) => {
        const t = Math.max(0, Math.min(1, (x - e0) / Math.max(1e-9, e1 - e0)))
        return t * t * (3 - 2 * t)
    },
    pow: Math.pow,
    mod: (value, max) => {
        const v = Number(value)
        const m = Number(max)
        if (!Number.isFinite(v) || !Number.isFinite(m) || Math.abs(m) < 1e-9) return 0
        return ((v % m) + m) % m
    },
    sin: Math.sin,
    cos: Math.cos,
    step: (edge, value) => (value < edge ? 0 : 1),
    iif: (condition, trueVal, falseVal) => (condition ? trueVal : falseVal),
    min: Math.min,
    max: Math.max,
    abs: Math.abs,
    rgb: (r, g, b) => [_toByte01(r), _toByte01(g), _toByte01(b)],
    hsv: (h, s, v) => [_toByte01(h), _toByte01(s), _toByte01(v)],
    palette: (ctx, id, index) => _paletteLookup(ctx, id, index),
    gradient: (ctx, id, normalizedValue) => _gradientLookup(ctx, id, normalizedValue),
    matchLuma: (r, g, b, targetLuma) => {
        const [rr, gg, bb] = matchLuminanceRgb255(r, g, b, targetLuma)
        return [rr / 255, gg / 255, bb / 255]
    },
    hsvToRgbColor: (h, s, v) => _hsvToRgb01(h, s, v),
    rgbToHsvColor: (r, g, b) => _rgbToHsv01(r, g, b),
    toColorVector: (value) => _toColorVector(value),
})

function _normalizeExpressionSyntax(expr) {
    if (typeof expr !== 'string') return ''
    let out = expr.trim()
    if (!out) return ''

    // Accept a compact non-JS style while compiling to JS-safe operators.
    out = out.replace(/×/g, '*').replace(/÷/g, '/')
    out = out.replace(/\band\b/gi, '&&')
    out = out.replace(/\bor\b/gi, '||')
    out = out.replace(/\bnot\b/gi, '!')
    out = out.replace(/\bif\s*\(/gi, 'iif(')
    return out
}

function _usesHsbOutput(rules) {
    for (const rule of (rules || [])) {
        if (rule?.enabled === false || rule?.sectionDisabled === true) continue
        const actions = Array.isArray(rule?.actions) ? rule.actions : []
        for (const action of actions) {
            if (action?.output === 'hue' || action?.output === 'saturation' || action?.output === 'brightness' || action?.output === 'hsv') return true
        }
    }
    return false
}

function _usesOutput(rules, outputId) {
    for (const rule of (rules || [])) {
        if (rule?.enabled === false || rule?.sectionDisabled === true) continue
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
            physicalParticles: [],
            lines: [],
            background: [],
            camera: [],
        },
        requiredInputs: [],
        applySpawnRules: _NOOP_SPAWN,
        applyLivingRules: _NOOP_LIVING,
        applyPhysicalRules: _NOOP_LIVING,
        applyLineRules: _NOOP_LIVING,
    },
}

function _extractInputIdsFromExpression(expr, inputSet) {
    const normalized = _normalizeExpressionSyntax(expr)
    if (!normalized) return []
    const ids = new Set()
    const tokens = normalized.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? []
    for (const tok of tokens) {
        if (inputSet.has(tok)) ids.add(tok)
    }
    return [...ids]
}

function _collectRuleInputs(rules, inputSet) {
    const ids = new Set()
    for (const rule of (rules || [])) {
        if (!rule?.enabled || rule?.sectionDisabled === true) continue
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
    const normalized = _normalizeExpressionSyntax(action.expression)
    if (normalized) return `(${normalized})`
    if (typeof action.input === 'string' && action.input.trim()) return action.input
    return _literal(action.value)
}

function _hasTopLevelComma(expr) {
    if (typeof expr !== 'string' || !expr) return false
    let parenDepth = 0
    let bracketDepth = 0
    let inSingleQuote = false
    let inDoubleQuote = false

    for (let i = 0; i < expr.length; i++) {
        const ch = expr[i]
        const prev = i > 0 ? expr[i - 1] : ''

        if (!inDoubleQuote && ch === '\'' && prev !== '\\') {
            inSingleQuote = !inSingleQuote
            continue
        }
        if (!inSingleQuote && ch === '"' && prev !== '\\') {
            inDoubleQuote = !inDoubleQuote
            continue
        }
        if (inSingleQuote || inDoubleQuote) continue

        if (ch === '(') parenDepth++
        else if (ch === ')') parenDepth = Math.max(0, parenDepth - 1)
        else if (ch === '[') bracketDepth++
        else if (ch === ']') bracketDepth = Math.max(0, bracketDepth - 1)
        else if (ch === ',' && parenDepth === 0 && bracketDepth === 0) return true
    }

    return false
}

function _toVectorRhs(action) {
    const normalized = _normalizeExpressionSyntax(action.expression)
    if (normalized) {
        if (_hasTopLevelComma(normalized)) return `[${normalized}]`
        return `(${normalized})`
    }
    if (typeof action.input === 'string' && action.input.trim()) return action.input
    return _literal(action.value)
}

function _compileVectorAction(action, channels) {
    const rhs = _toVectorRhs(action)
    const [c0, c1, c2] = channels
    switch (action.operator) {
        case 'set':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { target.${c0} = __vec[0]; target.${c1} = __vec[1]; target.${c2} = __vec[2]; }`,
            ].join(' ')
        case 'add':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { target.${c0} = (target.${c0} ?? 0) + __vec[0]; target.${c1} = (target.${c1} ?? 0) + __vec[1]; target.${c2} = (target.${c2} ?? 0) + __vec[2]; }`,
            ].join(' ')
        case 'subtract':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { target.${c0} = (target.${c0} ?? 0) - __vec[0]; target.${c1} = (target.${c1} ?? 0) - __vec[1]; target.${c2} = (target.${c2} ?? 0) - __vec[2]; }`,
            ].join(' ')
        case 'multiply':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { target.${c0} = (target.${c0} ?? 0) * __vec[0]; target.${c1} = (target.${c1} ?? 0) * __vec[1]; target.${c2} = (target.${c2} ?? 0) * __vec[2]; }`,
            ].join(' ')
        case 'divide':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { if (__vec[0] !== 0) target.${c0} = (target.${c0} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${c1} = (target.${c1} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${c2} = (target.${c2} ?? 0) / __vec[2]; }`,
            ].join(' ')
        case 'clamp':
            return [
                `const __vec = toColorVector(${rhs});`,
                `if (__vec) { target.${c0} = clamp((target.${c0} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${c1} = clamp((target.${c1} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${c2} = clamp((target.${c2} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`,
            ].join(' ')
        default:
            return ''
    }
}

function _compileLumaAction(action) {
    const rhs = _toRhs(action)

    const resolveBaseRgb = [
        'const __r = Number.isFinite(target.red) ? target.red : target.r;',
        'const __g = Number.isFinite(target.green) ? target.green : target.g;',
        'const __b = Number.isFinite(target.blue) ? target.blue : target.b;',
        'const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);',
        'const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;',
        'const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;',
        'const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;',
        'const __yIn = Number.isFinite(target.yellow) ? target.yellow : 0;',
        'let __baseRgb = null;',
        'if (__hasRgb) {',
        '__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];',
        '} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {',
        'const __h = Number.isFinite(__hIn) ? __hIn : 0;',
        'const __s = Number.isFinite(__sIn) ? __sIn : 0;',
        'const __v = Number.isFinite(__vIn) ? __vIn : 0;',
        '__baseRgb = hsvToRgbColor(__h, __s, __v);',
        '}',
        'if (!__baseRgb) __baseRgb = [0, 0, 0];',
        'if (Number.isFinite(__yIn)) {',
        '__baseRgb = [clamp((__baseRgb[0] ?? 0) + __yIn, 0, 1), clamp((__baseRgb[1] ?? 0) + __yIn, 0, 1), clamp(__baseRgb[2] ?? 0, 0, 1)];',
        '}',
        'const __baseR255 = __baseRgb[0] * 255;',
        'const __baseG255 = __baseRgb[1] * 255;',
        'const __baseB255 = __baseRgb[2] * 255;',
        'const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);',
    ].join(' ')

    const applyMatchedColor = [
        'const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);',
        'if (__matched) {',
        'target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];',
        'target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];',
        'const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);',
        'if (__hsv) {',
        'target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];',
        'target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];',
        '}',
        '}',
    ].join(' ')

    switch (action.operator) {
        case 'set':
            return [
                resolveBaseRgb,
                `const __nextLuma = Number(${rhs});`,
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        case 'add':
            return [
                resolveBaseRgb,
                `const __nextLuma = __baseLuma + Number(${rhs});`,
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        case 'subtract':
            return [
                resolveBaseRgb,
                `const __nextLuma = __baseLuma - Number(${rhs});`,
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        case 'multiply':
            return [
                resolveBaseRgb,
                `const __nextLuma = __baseLuma * Number(${rhs});`,
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        case 'divide':
            return [
                resolveBaseRgb,
                `const __divisor = Number(${rhs});`,
                'const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;',
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        case 'clamp':
            return [
                resolveBaseRgb,
                `const __bound = Math.abs(Number(${rhs}));`,
                'const __nextLuma = clamp(__baseLuma, -__bound, __bound);',
                'if (Number.isFinite(__nextLuma)) {',
                applyMatchedColor,
                '}',
            ].join(' ')
        default:
            return ''
    }
}

function _compileCondition(condition) {
    if (!condition || condition.operator === 'always') return 'true'
    const normalized = _normalizeExpressionSyntax(condition.expression)
    if (normalized) {
        return `(${normalized})`
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
    if (output === 'rgb') {
        return _compileVectorAction(action, ['red', 'green', 'blue'])
    }
    if (output === 'hsv') {
        return _compileVectorAction(action, ['hue', 'saturation', 'brightness'])
    }
    if (output === 'luma') {
        return _compileLumaAction(action)
    }
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
    const seenConditionOutput = new Set()

    lines.push(`function ${fnName}(ctx${includeParticleArg ? ', particle' : ''}) {`)
    lines.push(`  const target = ${includeParticleArg ? '(particle ?? ctx?.particle ?? ctx)' : '(ctx?.particle ?? ctx)'};`)
    lines.push('  if (!target) return;')
    lines.push('  const i = (ctx && (ctx.inputs || ctx)) || {};')
    lines.push('  const palette = (id, index) => helpers.palette(ctx, id, index);')
    lines.push('  const gradient = (id, value) => helpers.gradient(ctx, id, value);')
    lines.push('  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);')
    lines.push('  const rgb = (r, g, b) => helpers.rgb(r, g, b);')
    lines.push('  const hsv = (h, s, v) => helpers.hsv(h, s, v);')
    lines.push('  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);')
    lines.push('  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);')
    lines.push('  const toColorVector = (value) => helpers.toColorVector(value);')
    lines.push('  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;')
    lines.push('  const time = Number.isFinite(i.time) ? i.time : 0;')
    for (const id of inputIds) {
        if (id === 'deltaTime' || id === 'time') continue
        lines.push(`  const ${id} = Number.isFinite(i.${id}) ? i.${id} : 0;`)
    }

    rules.forEach((rule) => {
        if (!rule.enabled || rule.sectionDisabled === true) return
        const cond = _compileCondition(rule.condition)
        const actions = Array.isArray(rule.actions) ? rule.actions : []
        const emittedActions = []
        for (const action of actions) {
            const out = String(action?.output || '')
            if (!out) continue
            const conflictKey = `${cond}::${out}`
            if (seenConditionOutput.has(conflictKey)) continue
            seenConditionOutput.add(conflictKey)
            emittedActions.push(action)
        }
        if (emittedActions.length === 0) return
        lines.push(`  // rule ${rule.id}`)
        lines.push(`  if (${cond}) {`)
        lineMap.push({ ruleId: rule.id, functionName: fnName, sourceLine: lines.length + 1 })
        for (const action of emittedActions) {
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
    // Legacy disabled: physical/sphere rules are intentionally not compiled.
    const physicalRules = []
    const lineRules = sortedRules.filter((rule) => rule.target === 'lines')
    const backgroundRules = sortedRules.filter((rule) => rule.target === 'background')
    const cameraRules = sortedRules.filter((rule) => rule.target === 'camera')
    const isActiveRule = (rule) => {
        if (!rule || rule.enabled === false || rule.sectionDisabled === true) return false
        return Array.isArray(rule.actions) && rule.actions.length > 0
    }
    const activeSpawnedRuleCount = spawnedRules.filter(isActiveRule).length
    const activeLivingRuleCount = livingRules.filter(isActiveRule).length
    const activePhysicalRuleCount = physicalRules.filter(isActiveRule).length
    const activeLineRuleCount = lineRules.filter(isActiveRule).length
    const activeBackgroundRuleCount = backgroundRules.filter(isActiveRule).length
    const activeCameraRuleCount = cameraRules.filter(isActiveRule).length
    const hash = hashRules(sortedRules)

    if (_cache.hash === hash) return _cache.result

    const inputIds = getInputDictionary().entries.map((entry) => entry.id)
    const inputIdSet = new Set(inputIds)
    const requiredInputsByTarget = {
        spawnedParticles: _collectRuleInputs(spawnedRules, inputIdSet),
        allParticles: _collectRuleInputs(livingRules, inputIdSet),
        physicalParticles: _collectRuleInputs(physicalRules, inputIdSet),
        lines: _collectRuleInputs(lineRules, inputIdSet),
        background: _collectRuleInputs(backgroundRules, inputIdSet),
        camera: _collectRuleInputs(cameraRules, inputIdSet),
    }
    const requiredInputs = [...new Set([
        ...requiredInputsByTarget.spawnedParticles,
        ...requiredInputsByTarget.allParticles,
        ...requiredInputsByTarget.physicalParticles,
        ...requiredInputsByTarget.lines,
        ...requiredInputsByTarget.background,
        ...requiredInputsByTarget.camera,
    ])]
    const spawnBuild = buildSpawnFunction(spawnedRules, inputIds)
    const livingBuild = buildLivingFunction(livingRules, inputIds)
    const physicalBuild = _buildFunctionSource('applyPhysicalRules', physicalRules, inputIds, true)
    const lineBuild = _buildFunctionSource('applyLineRules', lineRules, inputIds, true)
    const bgBuild = _buildFunctionSource('applyBackgroundRules', backgroundRules, inputIds, true)
    const camBuild = _buildFunctionSource('applyCameraRules', cameraRules, inputIds, true)

    const source = [
        `'use strict';`,
        'const { clamp, lerp, smoothstep, pow, mod, sin, cos, step, iif, min, max, abs } = helpers;',
        spawnBuild.source,
        livingBuild.source,
        physicalBuild.source,
        lineBuild.source,
        bgBuild.source,
        camBuild.source,
        'return { applySpawnRules, applyLivingRules, applyPhysicalRules, applyLineRules, applyBackgroundRules, applyCameraRules };',
    ].join('\n\n')

    try {
        const factory = new Function('helpers', source)
        const compiled = factory(_helpers)
        const result = {
            hash,
            compileStatus: sanitized.rejected.length > 0 ? 'compiled-with-rejections' : 'compiled',
            compileError: null,
            compileTimeMs: Math.max(0, performance.now() - t0),
            spawnRuleCount: activeSpawnedRuleCount,
            livingRuleCount: activeLivingRuleCount,
            physicalRuleCount: activePhysicalRuleCount,
            lineRuleCount: activeLineRuleCount,
            backgroundRuleCount: activeBackgroundRuleCount,
            cameraRuleCount: activeCameraRuleCount,
            usesParticleHsb: _usesHsbOutput([...spawnedRules, ...livingRules]),
            usesPhysicalHsb: _usesHsbOutput(physicalRules),
            usesLineHsb: _usesHsbOutput(lineRules),
            usesBackgroundHsb: _usesHsbOutput(backgroundRules),
            usesLivingShapeType: _usesOutput(livingRules, 'shapeType'),
            rejected: sanitized.rejected,
            requiredInputsByTarget,
            requiredInputs,
            lineMap: [...spawnBuild.lineMap, ...livingBuild.lineMap, ...physicalBuild.lineMap, ...lineBuild.lineMap, ...bgBuild.lineMap, ...camBuild.lineMap],
            source,
            applySpawnRules: typeof compiled.applySpawnRules === 'function' ? compiled.applySpawnRules : _NOOP_SPAWN,
            applyLivingRules: typeof compiled.applyLivingRules === 'function' ? compiled.applyLivingRules : _NOOP_LIVING,
            applyPhysicalRules: typeof compiled.applyPhysicalRules === 'function' ? compiled.applyPhysicalRules : _NOOP_LIVING,
            applyLineRules: typeof compiled.applyLineRules === 'function' ? compiled.applyLineRules : _NOOP_LIVING,
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
            spawnRuleCount: activeSpawnedRuleCount,
            livingRuleCount: activeLivingRuleCount,
            physicalRuleCount: activePhysicalRuleCount,
            lineRuleCount: activeLineRuleCount,
            backgroundRuleCount: activeBackgroundRuleCount,
            cameraRuleCount: activeCameraRuleCount,
            usesParticleHsb: _usesHsbOutput([...spawnedRules, ...livingRules]),
            usesPhysicalHsb: _usesHsbOutput(physicalRules),
            usesLineHsb: _usesHsbOutput(lineRules),
            usesBackgroundHsb: _usesHsbOutput(backgroundRules),
            usesLivingShapeType: _usesOutput(livingRules, 'shapeType'),
            requiredInputsByTarget,
            requiredInputs,
            lineMap: [...spawnBuild.lineMap, ...livingBuild.lineMap, ...physicalBuild.lineMap, ...lineBuild.lineMap, ...bgBuild.lineMap, ...camBuild.lineMap],
            source,
            rejected: sanitized.rejected,
        }
        return fallback
    }
}
