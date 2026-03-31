export const SEMANTIC_AUDIO_TRIGGERS = Object.freeze([
    {
        id: 'bassWeight',
        label: 'Bass Weight',
        description: 'How heavy the low-end feels. Strong kick and sub-bass produce higher values.',
        input: 'bass',
        threshold: 0.55,
        engineToken: 'bassWeight',
    },
    {
        id: 'trebleBrightness',
        label: 'Treble Brightness',
        description: 'How bright the sound feels. More hi-hats and upper harmonics push this up.',
        input: 'spectralCentroid',
        threshold: 0.58,
        engineToken: 'trebleBrightness',
    },
    {
        id: 'rhythmicPunch',
        label: 'Rhythmic Punch',
        description: 'How hard each hit feels, especially attack transients and accents.',
        input: 'binFlux',
        threshold: 0.52,
        engineToken: 'rhythmicPunch',
    },
    {
        id: 'sonicChaos',
        label: 'Sonic Chaos',
        description: 'How noisy and turbulent the texture is compared to a pure tone.',
        input: 'spectralFlatness',
        threshold: 0.57,
        engineToken: 'sonicChaos',
    },
    {
        id: 'overallVolume',
        label: 'Overall Volume',
        description: 'Global loudness level of the current moment.',
        input: 'amplitude',
        threshold: 0.5,
        engineToken: 'overallVolume',
    },
])

export const SEMANTIC_VISUAL_ELEMENTS = Object.freeze([
    {
        id: 'particleSize',
        label: 'Particle Size',
        description: 'The visual body size of particles.',
        output: 'size',
        target: 'spawnedParticles',
        visualToken: 'particleSize',
    },
    {
        id: 'coreBrightness',
        label: 'Core Brightness',
        description: 'How bright each particle appears.',
        output: 'brightness',
        target: 'spawnedParticles',
        visualToken: 'coreBrightness',
    },
    {
        id: 'trailLength',
        label: 'Trail Length',
        description: 'How long motion feels sustained across living particles.',
        output: 'opacity',
        target: 'allParticles',
        visualToken: 'trailLength',
    },
    {
        id: 'geometrySharpness',
        label: 'Geometry Sharpness',
        description: 'How crisp and edgy forms feel by tightening contrast and saturation.',
        output: 'saturation',
        target: 'spawnedParticles',
        visualToken: 'geometrySharpness',
    },
    {
        id: 'cameraShake',
        label: 'Camera Shake',
        description: 'How much camera position reacts to strong events.',
        output: 'x',
        target: 'camera',
        visualToken: 'cameraShake',
    },
])

export const SEMANTIC_ACTIONS = Object.freeze([
    {
        id: 'pulseViolently',
        label: 'Pulse violently',
        description: 'Strong, dramatic spikes and aggressive motion.',
    },
    {
        id: 'increaseSmoothly',
        label: 'Increase smoothly',
        description: 'Slow and stable growth without harsh spikes.',
    },
    {
        id: 'randomize',
        label: 'Randomize',
        description: 'Introduce controlled unpredictability.',
    },
    {
        id: 'shiftColors',
        label: 'Shift colors',
        description: 'Steer hue transitions based on the trigger.',
    },
])

function _byId(list, id, fallback) {
    return list.find((entry) => entry.id === id) || fallback
}

function _byInput(inputId) {
    return SEMANTIC_AUDIO_TRIGGERS.find((entry) => entry.input === inputId) || null
}

function _byOutput(outputId, targetId) {
    return SEMANTIC_VISUAL_ELEMENTS.find((entry) => entry.output === outputId && entry.target === targetId)
        || SEMANTIC_VISUAL_ELEMENTS.find((entry) => entry.output === outputId)
        || null
}

function _parseInputMultiplier(expression, inputId) {
    const raw = String(expression || '').trim()
    const escapedInput = String(inputId || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const match = raw.match(new RegExp(`^\\(\\s*${escapedInput}\\s*\\)\\s*\\*\\s*(-?\\d+(?:\\.\\d+)?)$`))
    if (!match) return null
    const n = Number(match[1])
    return Number.isFinite(n) ? n : null
}

function _inferActionId({ output, expression, triggerInput }) {
    const expr = String(expression || '')
    if (output === 'hue') return 'shiftColors'
    if (/abs\s*\(\s*sin\s*\(/i.test(expr)) return 'randomize'
    const mul = _parseInputMultiplier(expr, triggerInput)
    if (Number.isFinite(mul)) return mul >= 1.2 ? 'pulseViolently' : 'increaseSmoothly'
    return 'increaseSmoothly'
}

function _expressionForAction(actionId, triggerInput, visualId) {
    if (actionId === 'pulseViolently') {
        if (visualId === 'cameraShake') return `sin(time * 48) * (${triggerInput}) * 0.07`
        return `(${triggerInput}) * 1.75`
    }
    if (actionId === 'increaseSmoothly') {
        if (visualId === 'cameraShake') return `sin(time * 12) * (${triggerInput}) * 0.02`
        return `(${triggerInput}) * 0.85`
    }
    if (actionId === 'randomize') {
        if (visualId === 'cameraShake') return `sin(time * 32 + (${triggerInput}) * 11) * 0.05`
        return `abs(sin(time * 6 + (${triggerInput}) * 12))`
    }
    if (actionId === 'shiftColors') {
        return `(${triggerInput}) * 0.33`
    }
    return `(${triggerInput})`
}

export function buildSemanticSentenceRuleRow({ triggerId, visualId, actionId, index = 0 }) {
    const trigger = _byId(SEMANTIC_AUDIO_TRIGGERS, triggerId, SEMANTIC_AUDIO_TRIGGERS[0])
    const visual = _byId(SEMANTIC_VISUAL_ELEMENTS, visualId, SEMANTIC_VISUAL_ELEMENTS[0])
    const action = _byId(SEMANTIC_ACTIONS, actionId, SEMANTIC_ACTIONS[0])

    const output = action.id === 'shiftColors' ? 'hue' : visual.output
    const expression = _expressionForAction(action.id, trigger.input, visual.id)

    const ruleBlock = {
        id: `semantic-${index + 1}`,
        group: 'Semantic',
        subgroup: `${trigger.label} > ${visual.label}`,
        enabled: true,
        target: visual.target,
        scope: visual.target === 'allParticles' ? 'allLivingFrame' : 'spawnedOnly',
        condition: {
            operator: '>',
            input: trigger.input,
            value: Number(trigger.threshold),
        },
        actions: [{
            operator: 'set',
            output,
            expression,
        }],
        order: index,
    }

    const generatedCode = generateProCodeFromRuleBlock(ruleBlock)

    return {
        ruleBlock,
        generatedCode,
        sentence: `When ${trigger.label} is high, make ${visual.label} ${action.label}.`,
    }
}

export function inferSemanticSentenceFromRuleBlock(ruleBlock) {
    if (!ruleBlock || typeof ruleBlock !== 'object') return null
    const trigger = _byInput(ruleBlock?.condition?.input)
    if (!trigger) return null

    const firstAction = Array.isArray(ruleBlock.actions) ? ruleBlock.actions[0] : null
    const output = String(firstAction?.output || '').trim()
    const visual = _byOutput(output, String(ruleBlock?.target || ''))
    if (!visual) return null

    const expression = String(firstAction?.expression || firstAction?.value || '').trim()
    const actionId = _inferActionId({
        output,
        expression,
        triggerInput: trigger.input,
    })
    const action = _byId(SEMANTIC_ACTIONS, actionId, SEMANTIC_ACTIONS[0])

    return {
        triggerId: trigger.id,
        visualId: visual.id,
        actionId: action.id,
        sentence: `When ${trigger.label} is high, make ${visual.label} ${action.label}.`,
    }
}

export function generateProCodeFromRuleBlock(ruleBlock) {
    if (!ruleBlock || typeof ruleBlock !== 'object') return '// Pro console\n// No rule selected.'
    const condition = ruleBlock?.condition || { operator: 'always' }
    const action = Array.isArray(ruleBlock.actions) && ruleBlock.actions[0] ? ruleBlock.actions[0] : null
    if (!action) return '// Pro console\n// Rule has no action.'

    const lhs = String(condition?.input || 'signal')
    const op = String(condition?.operator || 'always')
    const rhs = Number.isFinite(Number(condition?.value)) ? Number(condition.value) : 0
    const out = String(action?.output || 'value')
    const expr = String(action?.expression || action?.value || '0')
    const target = String(ruleBlock?.target || 'spawnedParticles')

    if (op === 'always') {
        return [
            `// Target: ${target}`,
            `visual.${out} = ${expr};`,
        ].join('\n')
    }

    return [
        `// Target: ${target}`,
        `if (engine.${lhs} ${op} ${rhs}) {`,
        `  visual.${out} = ${expr};`,
        '}',
    ].join('\n')
}
