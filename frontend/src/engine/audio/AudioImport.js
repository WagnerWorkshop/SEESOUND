function _audioCtxCtor() {
    return window.AudioContext || window.webkitAudioContext
}

export async function decodeAudioFileInBrowser(file) {
    // Validate decode in-browser and return the original file.
    if (!file) throw new Error('No file provided for decoding.')
    const Ctx = _audioCtxCtor()
    if (!Ctx) throw new Error('Web Audio API is not supported in this browser.')

    const ctx = new Ctx()
    try {
        const srcBuffer = await file.arrayBuffer()
        const decoded = await ctx.decodeAudioData(srcBuffer.slice(0))
        if (!decoded || !Number.isFinite(decoded.duration) || decoded.duration <= 0) {
            throw new Error('Audio decode produced no playable data.')
        }
        return file
    } finally {
        try {
            await ctx.close()
        } catch {
            // No-op; some browsers throw when closing already-closed contexts.
        }
    }
}
