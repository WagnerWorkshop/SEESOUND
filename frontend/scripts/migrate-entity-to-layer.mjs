#!/usr/bin/env node
/**
 * migrate-entity-to-layer.mjs
 * ═══════════════════════════════════════════════════════════════════════════
 * Migrates old preset/project files that use "entity" terminology to the new
 * "layer" naming convention.
 *
 * Usage:
 *   node scripts/migrate-entity-to-layer.mjs <file.json>
 *
 * What it changes:
 *   - ruleEntities → ruleEntities (kept as-is, but entity id prefix changes)
 *   - entity-123 → layer-123 in entity IDs
 *   - Entity name fallback → Layer name fallback
 *   - "Element" → "Layer" in default names
 *   - Ensures schemaVersion is up to date
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

function migrateEntityToLayer(data) {
    if (!data || typeof data !== 'object') return data

    const migrated = Array.isArray(data) ? [...data] : { ...data }

    // Migrate ruleEntities → rename entity-* ids to layer-* ids
    if (Array.isArray(migrated.ruleEntities)) {
        migrated.ruleEntities = migrated.ruleEntities.map((entity) => {
            if (!entity || typeof entity !== 'object') return entity
            const e = { ...entity }
            // Rename id from entity-* to layer-*
            if (typeof e.id === 'string' && e.id.startsWith('entity-')) {
                e.id = 'layer-' + e.id.slice(7)
            }
            // Rename default name
            if (typeof e.name === 'string') {
                e.name = e.name.replace(/^Entity\b/, 'Layer').replace(/^Element\b/, 'Layer')
            }
            // Rename definition ids
            if (Array.isArray(e.definitions)) {
                e.definitions = e.definitions.map((def) => {
                    if (!def || typeof def !== 'object') return def
                    const d = { ...def }
                    if (typeof d.id === 'string' && d.id.startsWith('def-')) {
                        // Keep def- prefix as is
                    }
                    if (typeof d.name === 'string') {
                        d.name = d.name.replace(/^Entity\b/, 'Layer')
                    }
                    return d
                })
            }
            // Rename rule entityId references
            if (Array.isArray(e.rules)) {
                e.rules = e.rules.map((rule) => {
                    if (!rule || typeof rule !== 'object') return rule
                    const r = { ...rule }
                    if (typeof r.entityId === 'string' && r.entityId.startsWith('entity-')) {
                        r.entityId = 'layer-' + r.entityId.slice(7)
                    }
                    if (typeof r.entityName === 'string') {
                        r.entityName = r.entityName.replace(/^Entity\b/, 'Layer').replace(/^Element\b/, 'Layer')
                    }
                    return r
                })
            }
            return e
        })
    }

    // Update ruleGlobalBlocks entityId references
    if (migrated.ruleGlobalBlocks && typeof migrated.ruleGlobalBlocks === 'object') {
        for (const key of ['background', 'camera']) {
            if (Array.isArray(migrated.ruleGlobalBlocks[key])) {
                migrated.ruleGlobalBlocks[key] = migrated.ruleGlobalBlocks[key].map((rule) => {
                    if (!rule || typeof rule !== 'object') return rule
                    const r = { ...rule }
                    if (typeof r.entityId === 'string' && r.entityId.startsWith('entity-')) {
                        r.entityId = 'layer-' + r.entityId.slice(7)
                    }
                    if (typeof r.entityName === 'string') {
                        r.entityName = r.entityName.replace(/^Entity\b/, 'Layer').replace(/^Element\b/, 'Layer')
                    }
                    return r
                })
            }
        }
    }

    // Update schemaVersion
    if (Number.isFinite(migrated.schemaVersion)) {
        migrated.schemaVersion = Math.max(migrated.schemaVersion, 1)
    }

    return migrated
}

// CLI entry point
const filePath = process.argv[2]
if (!filePath) {
    console.error('Usage: node scripts/migrate-entity-to-layer.mjs <file.json>')
    process.exit(1)
}

const absPath = resolve(filePath)
console.log(`Migrating: ${absPath}`)

const raw = readFileSync(absPath, 'utf-8')
const data = JSON.parse(raw)
const migrated = migrateEntityToLayer(data)

writeFileSync(absPath, JSON.stringify(migrated, null, 2), 'utf-8')
console.log('Migration complete.')
