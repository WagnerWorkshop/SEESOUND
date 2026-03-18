const API = 'http://localhost:8000'

const WAV_MIME = 'audio/wav'
const NEEDS_CONVERSION_EXT = new Set(['m4a', 'aac', 'flac', 'alac', 'aiff'])

function _extOf(fileName) {
    const dot = String(fileName || '').lastIndexOf('.')
    if (dot < 0) return ''
    return fileName.slice(dot + 1).toLowerCase()
}

function _swapExt(fileName, nextExt) {
    const name = String(fileName || 'audio').replace(/[\\/:*?"<>|]+/g, '_')
    const dot = name.lastIndexOf('.')
    if (dot < 0) return `${name}.${nextExt}`
    return `${name.slice(0, dot)}.${nextExt}`
}

export function shouldConvertAudioFile(file) {
    const ext = _extOf(file?.name)
    if (!ext) return false
    return NEEDS_CONVERSION_EXT.has(ext)
}

export async function convertAudioFileToWav(file) {
    const form = new FormData()
    form.append('file', file)

    const res = await fetch(`${API}/api/audio/convert`, {
        method: 'POST',
        body: form,
    })

    if (!res.ok) {
        const detail = await res.text().catch(() => '')
        throw new Error(detail || `Audio conversion failed (${res.status}).`)
    }

    const blob = await res.blob()
    if (!blob || blob.size === 0) {
        throw new Error('Converted audio is empty.')
    }

    const outName = _swapExt(file?.name || 'audio', 'wav')
    return new File([blob], outName, { type: WAV_MIME })
}
