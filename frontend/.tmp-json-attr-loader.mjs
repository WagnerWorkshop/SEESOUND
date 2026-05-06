import fs from 'node:fs/promises'

export async function load(url, context, defaultLoad) {
  if (url.endsWith('/src/engine/ui/UiText.js')) {
    const source = await fs.readFile(new URL(url), 'utf8')
    const patched = source.replace(/from\s+(['"])(\.\.\/\.\.\/i18n\/[^'"]+\.json)\1/g, "from '$2' with { type: 'json' }")
    return { format: 'module', source: patched, shortCircuit: true }
  }
  return defaultLoad(url, context, defaultLoad)
}
