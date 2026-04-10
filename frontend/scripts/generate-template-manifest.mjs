import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const presetsDir = path.join(rootDir, 'public', 'templates', 'presets')
const thumbnailsDir = path.join(rootDir, 'public', 'templates', 'thumbnails')
const manifestPath = path.join(rootDir, 'public', 'templates', 'factory-templates.json')

function toSlug(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/\.[^.]+$/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

function toTitle(value) {
    const raw = String(value || '').trim().replace(/\.[^.]+$/g, '')
    if (!raw) return 'Template'
    return raw
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (m) => m.toUpperCase())
}

async function exists(filePath) {
    try {
        await fs.access(filePath)
        return true
    } catch {
        return false
    }
}

async function readPresetTitleAndName(filePath) {
    try {
        const text = await fs.readFile(filePath, 'utf8')
        const parsed = JSON.parse(text)
        const presetName = typeof parsed?.name === 'string' ? parsed.name.trim() : ''
        return {
            title: presetName ? toTitle(presetName) : '',
            presetName,
        }
    } catch {
        return { title: '', presetName: '' }
    }
}

async function generateTemplateManifest() {
    await fs.mkdir(presetsDir, { recursive: true })

    const dirEntries = await fs.readdir(presetsDir, { withFileTypes: true })
    const presetFiles = dirEntries
        .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.json'))
        .map((entry) => entry.name)
        .sort((a, b) => a.localeCompare(b))

    const templates = []
    for (const fileName of presetFiles) {
        const presetFilePath = path.join(presetsDir, fileName)
        const baseName = fileName.replace(/\.json$/i, '')
        const id = toSlug(baseName)
        const parsedInfo = await readPresetTitleAndName(presetFilePath)
        const title = parsedInfo.title || toTitle(baseName)

        const template = {
            id,
            title,
            presetPath: `/templates/presets/${encodeURIComponent(fileName)}`,
        }

        if (parsedInfo.presetName) {
            template.presetName = parsedInfo.presetName
        }

        const thumbnailName = `${id}.svg`
        if (await exists(path.join(thumbnailsDir, thumbnailName))) {
            template.thumbnail = `/templates/thumbnails/${thumbnailName}`
        }

        templates.push(template)
    }

    const payload = { templates }
    await fs.writeFile(manifestPath, `${JSON.stringify(payload, null, 4)}\n`, 'utf8')

    console.log(`[templates] generated ${templates.length} template entries`)
}

generateTemplateManifest().catch((err) => {
    console.error('[templates] manifest generation failed:', err)
    process.exitCode = 1
})
