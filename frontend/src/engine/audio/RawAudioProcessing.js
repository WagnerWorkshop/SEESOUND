export function mixInputChannelsToMonoSample(inputChannels, frameIndex) {
    const channels = Array.isArray(inputChannels) ? inputChannels : []
    const count = channels.length
    if (count === 0) return 0

    let mono = 0
    for (let c = 0; c < count; c++) {
        mono += Number(channels[c]?.[frameIndex] || 0)
    }
    return mono / Math.max(1, count)
}

// Cascaded 2x decimator with a lightweight anti-aliasing stage.
export class CascadedDecimator {
    constructor(levelCount = 7) {
        this.levelCount = Math.max(1, Math.floor(Number(levelCount) || 1))
        this._stages = Array.from({ length: this.levelCount }, () => ({
            hasFirst: false,
            first: 0,
        }))
    }

    reset() {
        for (let i = 0; i < this._stages.length; i++) {
            this._stages[i].hasFirst = false
            this._stages[i].first = 0
        }
    }

    pushSample(sample, onLevelSample) {
        if (typeof onLevelSample !== 'function') return

        let current = Number(sample) || 0
        onLevelSample(0, current)

        for (let level = 1; level < this.levelCount; level++) {
            const stage = this._stages[level]
            if (!stage.hasFirst) {
                stage.hasFirst = true
                stage.first = current
                return
            }

            const lowPassed = 0.5 * (stage.first + current)
            stage.hasFirst = false
            stage.first = 0

            onLevelSample(level, lowPassed)
            current = lowPassed
        }
    }
}

export function processInputBlockToDecimator(input, decimator, onLevelSample) {
    const channels = Array.isArray(input) ? input : []
    if (channels.length === 0) return 0
    const frameCount = channels[0]?.length || 0
    if (!Number.isFinite(frameCount) || frameCount <= 0) return 0

    for (let i = 0; i < frameCount; i++) {
        const mono = mixInputChannelsToMonoSample(channels, i)
        decimator.pushSample(mono, onLevelSample)
    }
    return frameCount
}
