import JSZip from 'jszip'

export const PROJECT_SCHEMA_VERSION = 1
export const PROJECT_FILE_EXTENSION = '.ssp'

export function buildProjectPayload({ params, presetName = '', presetLibrary = [], projectName = '' }) {
    return {
        schemaVersion: PROJECT_SCHEMA_VERSION,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        projectName: String(projectName || ''),
        presetName: String(presetName || ''),
        params: params && typeof params === 'object' ? params : {},
        presetLibrary: Array.isArray(presetLibrary) ? presetLibrary : [],
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
    return {
        schemaVersion: Number.isFinite(Number(payload.schemaVersion)) ? Number(payload.schemaVersion) : PROJECT_SCHEMA_VERSION,
        createdAt: payload.createdAt || null,
        updatedAt: payload.updatedAt || null,
        projectName: String(payload.projectName || ''),
        presetName: String(payload.presetName || ''),
        params: payload.params,
        presetLibrary: Array.isArray(payload.presetLibrary) ? payload.presetLibrary : [],
    }
}

export function triggerProjectDownload(payload, fileName = 'seesound-project.ssp') {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    triggerBlobDownload(blob, fileName)
}

export function triggerBlobDownload(blob, fileName = 'download.bin') {
    if (!(blob instanceof Blob)) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
}

function normalizePackageManifest(manifest, fallbackProjectName = '') {
    const source = (manifest && typeof manifest === 'object') ? manifest : {}
    return {
        schemaVersion: Number.isFinite(Number(source.schemaVersion))
            ? Number(source.schemaVersion)
            : PROJECT_PACKAGE_SCHEMA_VERSION,
        exportedAt: String(source.exportedAt || new Date().toISOString()),
        projectName: String(source.projectName || fallbackProjectName || ''),
        payloadFile: String(source.payloadFile || 'project.json'),
        audioFile: source.audioFile ? {
            name: String(source.audioFile.name || 'audio.bin'),
            path: String(source.audioFile.path || 'audio.bin'),
            type: String(source.audioFile.type || 'audio/*'),
        } : null,
        thumbnailFile: source.thumbnailFile ? {
            name: String(source.thumbnailFile.name || 'thumbnail.png'),
            path: String(source.thumbnailFile.path || 'thumbnail.png'),
            type: String(source.thumbnailFile.type || 'image/png'),
        } : null,
    }
}

export async function parseProjectFile(file) {
    if (!(file instanceof File)) {
        throw new Error('Project file is invalid.')
    }
    // Treat project files as JSON payloads only (.ssp). We no longer support
    // project packages containing audio or thumbnails (previously .sspp).
    const payload = parseProjectText(await file.text())
    return {
        kind: 'json',
        payload,
        audioFile: null,
        thumbnailBlob: null,
        manifest: null,
    }
}
