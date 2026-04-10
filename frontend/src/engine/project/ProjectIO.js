import JSZip from 'jszip'

export const PROJECT_SCHEMA_VERSION = 1
export const PROJECT_FILE_EXTENSION = '.ssp'
export const PROJECT_PACKAGE_EXTENSION = '.sspp'
export const PROJECT_PACKAGE_SCHEMA_VERSION = 1

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

export async function buildProjectPackageBlob({ payload, projectName = '', audioFile = null, thumbnailBlob = null }) {
    const zip = new JSZip()
    const safePayload = payload && typeof payload === 'object' ? payload : {}
    const manifest = normalizePackageManifest({
        projectName,
        payloadFile: 'project.json',
        audioFile: (audioFile instanceof Blob)
            ? {
                name: String(audioFile.name || 'audio.bin'),
                path: 'audio.bin',
                type: String(audioFile.type || 'audio/*'),
            }
            : null,
        thumbnailFile: (thumbnailBlob instanceof Blob)
            ? {
                name: 'thumbnail.png',
                path: 'thumbnail.png',
                type: String(thumbnailBlob.type || 'image/png'),
            }
            : null,
    }, projectName)

    zip.file(manifest.payloadFile, JSON.stringify(safePayload, null, 2))
    zip.file('manifest.json', JSON.stringify(manifest, null, 2))

    if (audioFile instanceof Blob && manifest.audioFile?.path) {
        zip.file(manifest.audioFile.path, audioFile)
    }
    if (thumbnailBlob instanceof Blob && manifest.thumbnailFile?.path) {
        zip.file(manifest.thumbnailFile.path, thumbnailBlob)
    }

    return zip.generateAsync({ type: 'blob' })
}

export async function parseProjectFile(file) {
    if (!(file instanceof File)) {
        throw new Error('Project file is invalid.')
    }
    const lowerName = String(file.name || '').trim().toLowerCase()
    if (!lowerName.endsWith(PROJECT_PACKAGE_EXTENSION)) {
        const payload = parseProjectText(await file.text())
        return {
            kind: 'json',
            payload,
            audioFile: null,
            thumbnailBlob: null,
            manifest: null,
        }
    }

    const zip = await JSZip.loadAsync(await file.arrayBuffer())
    const manifestEntry = zip.file('manifest.json')
    let manifest = normalizePackageManifest(null)
    if (manifestEntry) {
        try {
            const rawManifest = JSON.parse(await manifestEntry.async('string'))
            manifest = normalizePackageManifest(rawManifest)
        } catch {
            manifest = normalizePackageManifest(null)
        }
    }

    const payloadEntry = zip.file(manifest.payloadFile) || zip.file('project.json')
    if (!payloadEntry) throw new Error('Project package is missing project payload.')
    const payload = parseProjectText(await payloadEntry.async('string'))

    let audioFile = null
    if (manifest.audioFile?.path) {
        const audioEntry = zip.file(manifest.audioFile.path)
        if (audioEntry) {
            const audioBlob = await audioEntry.async('blob')
            audioFile = new File([audioBlob], manifest.audioFile.name || 'audio.bin', {
                type: manifest.audioFile.type || 'audio/*',
                lastModified: Date.now(),
            })
        }
    }

    let thumbnailBlob = null
    if (manifest.thumbnailFile?.path) {
        const thumbEntry = zip.file(manifest.thumbnailFile.path)
        if (thumbEntry) thumbnailBlob = await thumbEntry.async('blob')
    }

    return {
        kind: 'package',
        payload,
        audioFile,
        thumbnailBlob,
        manifest,
    }
}
