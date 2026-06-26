/**
 * SEESOUND — LayerManager.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Manages multiple independent ParticleSystem instances, one per enabled
 * entity/layer. Each layer compiles and runs its own rules independently
 * and renders its own particles into the shared Three.js scene.
 *
 * Exposes a compatible subset of the ParticleSystem API so main.js calling
 * code (ps.update(), ps.getBackgroundColor(), etc.) works unchanged.
 */

import * as THREE from 'three'
import { ParticleSystem } from './ParticleSystem.js'

/**
 * @typedef {import('../main').ParticleSystem} ParticleSystem
 * @typedef {import('./types').RuleEntity} RuleEntity
 */

export class LayerManager {
    /**
     * @param {import('three').Scene} scene - Shared Three.js scene
     * @param {object} [opts]
     * @param {number} [opts.maxParticlesPerLayer=262144]
     */
    constructor(scene, opts = {}) {
        this._scene = scene
        this._maxParticles = Math.max(1, Math.floor(opts.maxParticlesPerLayer ?? 262144))

        /** @type {{ entity: object, ps: ParticleSystem }[]} */
        this._layers = []

        /** @type {string|null} Cache of last entity hash to avoid redundant rebuilds */
        this._lastEntityHash = null

        // Background state — read from primary layer or fallback
        this._fallbackBackground = new THREE.Color(0, 0, 0)

        // Camera output — from the last layer with camera rules, or null
        this._cameraOutput = {
            x: null, y: null, z: null,
            zoom: null,
            targetX: null, targetY: null, targetZ: null,
            angleOfView: null,
        }

        // Global background/camera rule systems (apply once per frame, not per layer)
        /** @type {import('./rules/RuleCompiler').CompileResult} */
        this._globalBgRules = null
        /** @type {import('./rules/RuleCompiler').CompileResult} */
        this._globalCamRules = null
        this._bgParticleSystem = null // dummy PS for applyBackgroundRules

        /** Compile state for UI — compiled from first layer or merged */
        this._lastCompileState = null
    }

    /**
     * Rebuild all layers from the current param state.
     * Called whenever ruleEntities or ruleGlobalBlocks changes.
     * @param {object} param0
     * @param {object[]} [param0.ruleEntities]
     * @param {object} [param0.ruleGlobalBlocks]
     */
    rebuild({ ruleEntities = [], ruleGlobalBlocks = { background: [], camera: [] } } = {}) {
        // Build a hash to detect changes quickly
        const hash = JSON.stringify({ entities: ruleEntities, globals: ruleGlobalBlocks })
        if (hash === this._lastEntityHash) return
        this._lastEntityHash = hash

        // Remove all existing layer meshes from the scene
        for (const layer of this._layers) {
            this._scene.remove(layer.ps._mesh)
            this._scene.remove(layer.ps._lineMesh)
        }
        this._layers = []

        // Sort entities by order
        const sorted = [...ruleEntities]
            .filter((e) => e && typeof e === 'object')
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

        // Create a layer for each enabled entity.
        // The FIRST enabled layer also receives the global background/camera rules
        // so its ParticleSystem handles them natively in ps.update().
        let primaryAssigned = false
        for (const entity of sorted) {
            const isDisabled = entity.enabled === false
            const isModifier = entity.layerType === 'modifier'
            const ps = new ParticleSystem(this._scene, {
                maxParticles: this._maxParticles,
                isModifier,
            })

            // Compile rules for this entity
            const entityRules = {
                ruleEntities: [entity],
                // First enabled layer gets global blocks so camera/background rules compile in
                ruleGlobalBlocks: (!isDisabled && !primaryAssigned)
                    ? (ruleGlobalBlocks || { background: [], camera: [] })
                    : { background: [], camera: [] },
            }
            const compiled = ps.onRulesChanged(entityRules)

            this._layers.push({ entity, ps })

            if (!isDisabled && !primaryAssigned) {
                primaryAssigned = true
                this._lastCompileState = compiled
            }
        }

        if (!this._lastCompileState) {
            this._lastCompileState = { compileStatus: 'compiled', spawnRuleCount: 0, livingRuleCount: 0, lineRuleCount: 0, backgroundRuleCount: 0, cameraRuleCount: 0 }
        }

        if (this._layers.length === 0) {
            const ps = new ParticleSystem(this._scene, { maxParticles: this._maxParticles })
            this._layers.push({ entity: {}, ps })
        }
    }

    /**
     * Compile background and camera rules from global blocks.
     */
    /**
     * Reorder existing layers without destroying particle state.
     * Called when only the order of entities changes (move up/down, drag-drop).
     * @param {object[]} reorderedEntities - Entities in the new order
     */
    reorderEntities(reorderedEntities) {
        const newOrder = [...reorderedEntities]
            .filter((e) => e && typeof e === 'object')
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

        // Rebuild _layers array preserving existing ParticleSystem instances
        const oldLayers = this._layers
        this._layers = []

        // Remove all meshes from scene first (will re-add in order)
        for (const layer of oldLayers) {
            this._scene.remove(layer.ps._mesh)
            this._scene.remove(layer.ps._lineMesh)
        }

        for (const entity of newOrder) {
            const existing = oldLayers.find((l) => l.entity?.id === entity.id)
            if (existing) {
                // Preserve existing ParticleSystem — just update the entity ref
                this._layers.push({ entity, ps: existing.ps })
                // Re-add meshes to scene in new order
                this._scene.add(existing.ps._mesh)
                if (existing.ps._lineMesh) this._scene.add(existing.ps._lineMesh)
            } else {
                // New entity (shouldn't happen in pure reorder, but handle gracefully)
                const ps = new ParticleSystem(this._scene, {
                    maxParticles: this._maxParticles,
                    isModifier: entity.layerType === 'modifier',
                })
                const entityRules = {
                    ruleEntities: [entity],
                    ruleGlobalBlocks: { background: [], camera: [] },
                }
                ps.onRulesChanged(entityRules)
                this._layers.push({ entity, ps })
            }
        }

        // Dispose any old layers that are no longer in the new order
        for (const layer of oldLayers) {
            if (!newOrder.find((e) => e.id === layer.entity?.id)) {
                // Entity removed — meshes already removed, ParticleSystem will GC
            }
        }

        // Update hash so rebuild() doesn't redo work
        this._lastEntityHash = JSON.stringify({
            entities: reorderedEntities,
            globals: this._globalBgRules || { background: [], camera: [] },
        })
    }

    /**
     * Compat alias — calls rebuild(). Accepts { ruleBlocks, ruleEntities, ruleGlobalBlocks }.
     */
    onRulesChanged(rules) {
        if (rules && typeof rules === 'object') {
            this.rebuild({
                ruleEntities: Array.isArray(rules.ruleEntities) ? rules.ruleEntities : [],
                ruleGlobalBlocks: rules.ruleGlobalBlocks || { background: [], camera: [] },
            })
        }
        return this.getRuleCompileState()
    }

    /**
     * Call update on every active layer.
     * Compatible with the existing ps.update() signature.
     * @param {object} ae - AudioEngine instance
     * @param {object} params - Live param snapshot
     * @param {number} canvasW - Renderer width
     * @param {number} canvasH - Renderer height
     */
    update(ae, params, canvasW, canvasH) {
        if (!ae?.analyser) return

        // Two-pass update: generators first (spawn particles), then modifiers (overlay)
        // Within each pass, layers are processed in their user-defined order
        // (lower order = lower in the stack, rendered first).
        let hasCamRules = false

        for (const pass of ['generator', 'modifier']) {
            for (const layer of this._layers) {
                if (layer.entity?.enabled === false) continue
                const isModifier = layer.entity?.layerType === 'modifier'
                if (pass === 'generator' && isModifier) continue
                if (pass === 'modifier' && !isModifier) continue
                layer.ps.update(ae, params, canvasW, canvasH)
                if (layer.ps._compiledRules?.cameraRuleCount > 0) hasCamRules = true
            }
        }

        // Forward camera output from whichever layer has camera rules
        if (hasCamRules) {
            const camLayer = this._layers.find((l) => l.entity?.enabled !== false && l.ps._compiledRules?.cameraRuleCount > 0)
            if (camLayer) this._cameraOutput = camLayer.ps.getCameraOutput()
        } else {
            this._cameraOutput = {
                x: null, y: null, z: null,
                zoom: null,
                targetX: null, targetY: null, targetZ: null,
                angleOfView: null,
            }
        }
    }

    /**
     * Get the background color from the primary (first enabled) layer.
     */
    getBackgroundColor() {
        const primary = this._layers.find((l) => l.entity?.enabled !== false)?.ps
        if (primary) return primary.getBackgroundColor()
        const first = this._layers[0]?.ps
        if (first) return first.getBackgroundColor()
        return this._fallbackBackground
    }

    /**
     * Get camera output (from global camera rules).
     */
    getCameraOutput() {
        return this._cameraOutput
    }

    /**
     * Set fog state on all layers.
     */
    setFogState(state) {
        for (const layer of this._layers) {
            layer.ps.setFogState(state)
        }
    }

    /**
     * Set viewport height on all layers.
     */
    setViewportHeight(pxHeight) {
        for (const layer of this._layers) {
            layer.ps.setViewportHeight(pxHeight)
        }
    }

    /**
     * Get total visible count across all layers.
     */
    getVisibleCount() {
        let total = 0
        for (const layer of this._layers) {
            if (layer.entity?.enabled === false) continue
            total += layer.ps.getVisibleCount()
        }
        return total
    }

    /**
     * Get total line visible count across all layers.
     */
    getLineVisibleCount() {
        let total = 0
        for (const layer of this._layers) {
            if (layer.entity?.enabled === false) continue
            total += layer.ps.getLineVisibleCount()
        }
        return total
    }

    /**
     * Get compiled state from the primary layer (for UI).
     */
    getRuleCompileState() {
        const primary = this._layers.find((l) => l.entity?.enabled !== false)?.ps
        if (primary) return primary.getRuleCompileState()
        return this._lastCompileState || { compileStatus: 'empty', spawnRuleCount: 0, livingRuleCount: 0 }
    }

    /**
     * Clear all layer particles.
     */
    clear() {
        for (const layer of this._layers) {
            layer.ps.clear()
        }
    }

    /**
     * Scale all particle sizes across layers.
     */
    scaleAllParticleSizes(ratio) {
        for (const layer of this._layers) {
            layer.ps.scaleAllParticleSizes(ratio)
        }
    }

    /**
     * Get visible bounds (union across all layers).
     */
    getVisibleBounds() {
        for (const layer of this._layers) {
            if (layer.entity?.enabled === false) continue
            const bounds = layer.ps.getVisibleBounds()
            if (!bounds.empty) return bounds
        }
        return { empty: true }
    }

    /**
     * Set max particles per layer.
     */
    setMaxParticles(nextMax) {
        for (const layer of this._layers) {
            layer.ps.setMaxParticles(nextMax)
        }
    }

    /**
     * Number of enabled layers.
     */
    getLayerCount() {
        return this._layers.filter((l) => l.entity?.enabled !== false).length
    }

    /**
     * Get all layer particle systems (for advanced access).
     */
    getAllSystems() {
        return this._layers.map((l) => l.ps)
    }

    /**
     * Get primary (first enabled) ParticleSystem for direct access.
     * Used by SeesoundEngine for cloud network graph access.
     */
    getPrimarySystem() {
        // Prefer generator layers over modifiers for direct access (cloud graph, position data)
        const layer = this._layers.find((l) => l.entity?.enabled !== false && l.entity?.layerType !== 'modifier')
            || this._layers.find((l) => l.entity?.enabled !== false)
        return layer ? layer.ps : null
    }

    /** @type {number} Forwarded visible_count from primary system */
    get _visible_count() {
        const sys = this.getPrimarySystem()
        return sys ? sys._visible_count : 0
    }
    /** @type {Float32Array|null} Forwarded _pos from primary system */
    get _pos() {
        const sys = this.getPrimarySystem()
        return sys ? sys._pos : null
    }
    /** @type {object|null} Forwarded cloudNetworkModifiers from primary system */
    get cloudNetworkModifiers() {
        const sys = this.getPrimarySystem()
        return sys ? sys.cloudNetworkModifiers : null
    }
    _markPointRangeDirty(a, b) {
        const sys = this.getPrimarySystem()
        if (sys && typeof sys._markPointRangeDirty === 'function') sys._markPointRangeDirty(a, b)
    }
}
