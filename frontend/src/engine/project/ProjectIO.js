export const PROJECT_SCHEMA_VERSION = 1

function _toBase64(bytes) {
    let out = ''
    const chunk = 0x8000
    for (let i = 0; i < bytes.length; i += chunk) {
        const slice = bytes.subarray(i, i + chunk)
        out += String.fromCharCode(...slice)
    }
    return btoa(out)
}

function _fromBase64(base64) {
    const binary = atob(base64)
    const out = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i)
    return out
}

export async function blobToDataUrl(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer())
    const mime = blob.type || 'application/octet-stream'
    return `data:${mime};base64,${_toBase64(bytes)}`
}

export function dataUrlToFile(dataUrl, fileName = 'audio.bin') {
    if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) {
        throw new Error('Invalid embedded audio payload.')
    }
    const comma = dataUrl.indexOf(',')
    if (comma < 0) throw new Error('Malformed data URL.')
    const head = dataUrl.slice(0, comma)
    const body = dataUrl.slice(comma + 1)
    const mimeMatch = head.match(/^data:([^;]+);base64$/)
    const mime = mimeMatch?.[1] || 'application/octet-stream'
    const bytes = _fromBase64(body)
    return new File([bytes], fileName, { type: mime })
}

export function buildProjectPayload({ params, presetName = '', audioDataUrl = '', audioFileName = '' }) {
    return {
        schemaVersion: PROJECT_SCHEMA_VERSION,
        createdAt: new Date().toISOString(),
        presetName: String(presetName || ''),
        params: params && typeof params === 'object' ? params : {},
        audio: audioDataUrl
            ? {
                fileName: audioFileName || 'audio.bin',
                dataUrl: audioDataUrl,
            }
            : null,
    }
}

export function parseProjectText(text) {
    const payload = JSON.parse(String(text || '{}'))
    if (!payload || typeof payload !== 'object') {
        throw new Error('Project file is invalid.')
    }
    if (!payload.params || typeof payload.params !== 'object') {
        throw new Error('Project file has no params object.')
    }
    return payload
}

export function triggerProjectDownload(payload, fileName = 'seesound-project.json') {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
}
