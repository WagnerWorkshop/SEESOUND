export const PROJECT_SCHEMA_VERSION = 1
export const PROJECT_FILE_EXTENSION = '.ssp.json'

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
