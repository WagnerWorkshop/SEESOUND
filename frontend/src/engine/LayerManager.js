/**
 * SEESOUND — LayerManager.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Manages multiple independent ParticleSystem instances, one per enabled
 * layer. Each layer compiles and runs its own rules independently
 * and renders its own particles into the shared Three.js scene.
 *
 * Exposes a compatible subset of the ParticleSystem API so main.js calling
 * code (ps.update(), ps.getBackgroundColor(), etc.) works unchanged.
 */

import * as THREE from 'three'
import { ParticleSystem } from './ParticleSystem.js'

/**
 * @typedef {import('../main').ParticleSystem} ParticleSystem
 * @typedef {Object} RuleLayer
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

        /** @type {{ data: object, ps: ParticleSystem }[]} */
        this._layers = []

        /** @type {string|null} Cache of last layers hash to avoid redundant rebuilds */
        this._lastLayerHash = null

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
     * Called whenever ruleLayers or ruleGlobalBlocks changes.
     * @param {object} param0
     * @param {object[]} [param0.ruleLayers]
     * @param {object} [param0.ruleGlobalBlocks]
     */
    rebuild({ ruleLayers = [], ruleGlobalBlocks = { background: [], camera: [] } } = {}) {
        // Build a hash to detect changes quickly
        const hash = JSON.stringify({ layers: ruleLayers, globals: ruleGlobalBlocks })
        if (hash === this._lastLayerHash) return
        this._lastLayerHash = hash

        // Index existing layers by layer id/name for reuse — preserves particles
        const oldLayers = new Map()
        for (const layer of this._layers) {
            const key = layer.data?.id ?? layer.data?.name ?? null
            if (key !== null) oldLayers.set(key, layer)
        }

        // Sort layers by order
        const sorted = [...ruleLayers]
            .filter((e) => e && typeof e === 'object')
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

        const newLayers = []
        let primaryAssigned = false

        for (const layerObj of sorted) {
            const key = layerObj.id ?? layerObj.name ?? null
            let layer = key !== null ? oldLayers.get(key) : null
            oldLayers.delete(key) // don't dispose, we keep it

            if (!layer) {
                // New layer — create a fresh ParticleSystem
                const isModifier = layerObj.layerType === 'modifier'
                const ps = new ParticleSystem(this._scene, {
                    maxParticles: this._maxParticles,
                    isModifier,
                })
                this._scene.add(ps._mesh)
                this._scene.add(ps._lineMesh)
                layer = { data: layerObj, ps }
            }

            // Recompile rules on the (existing or new) layer
            const isDisabled = layerObj.enabled === false
            const layerRules = {
                ruleLayers: [layerObj],
                ruleGlobalBlocks: (!isDisabled && !primaryAssigned)
                    ? (ruleGlobalBlocks || { background: [], camera: [] })
                    : { background: [], camera: [] },
            }
            const compiled = layer.ps.onRulesChanged(layerRules)
            // Update stored layer ref (rules may have changed on same layer)
            layer.data = layerObj

            newLayers.push(layer)

            if (!isDisabled && !primaryAssigned) {
                primaryAssigned = true
                this._lastCompileState = compiled
            }
        }

        // Dispose orphaned layers (entities that were removed)
        for (const [key, layer] of oldLayers) {
            this._scene.remove(layer.ps._mesh)
            this._scene.remove(layer.ps._lineMesh)
        }

        this._layers = newLayers

        if (!this._lastCompileState) {
            this._lastCompileState = { compileStatus: 'compiled', spawnRuleCount: 0, livingRuleCount: 0, lineRuleCount: 0, backgroundRuleCount: 0, cameraRuleCount: 0 }
        }

        if (this._layers.length === 0) {
            const ps = new ParticleSystem(this._scene, { maxParticles: this._maxParticles })
            this._layers.push({ data: {}, ps })
        }
    }

    /**
     * Compile background and camera rules from global blocks.
     */
    /**
     * Compat alias — calls rebuild(). Accepts { ruleBlocks, ruleLayers, ruleGlobalBlocks }.
     */
    onRulesChanged(rules) {
        if (rules && typeof rules === 'object') {
            this.rebuild({
                ruleLayers: Array.isArray(rules.ruleLayers) ? rules.ruleLayers : [],
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
                if (layer.data?.enabled === false) {
                    // Hide disabled layer's geometry so its particles don't render
                    if (layer.ps._geo) layer.ps._geo.setDrawRange(0, 0)
                    if (layer.ps._lineGeo) layer.ps._lineGeo.setDrawRange(0, 0)
                    continue
                }
                const isModifier = layer.data?.layerType === 'modifier'
                if (pass === 'generator' && isModifier) continue
                if (pass === 'modifier' && !isModifier) continue
                // Pass curve-fitting setting to the particle system
                layer.ps.setCurveFitting(layer.data?.curveFitting === true)
                // Pass layer source directly — no stateful property to go stale
                layer.ps.update(ae, params, canvasW, canvasH, layer.data?.layerSource || 'spectrum')
                if (layer.ps._compiledRules?.cameraRuleCount > 0) hasCamRules = true
            }
        }

        // Forward camera output from whichever layer has camera rules
        if (hasCamRules) {
            const camLayer = this._layers.find((l) => l.data?.enabled !== false && l.ps._compiledRules?.cameraRuleCount > 0)
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
        const primary = this._layers.find((l) => l.data?.enabled !== false)?.ps
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
            if (layer.data?.enabled === false) continue
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
            if (layer.data?.enabled === false) continue
            total += layer.ps.getLineVisibleCount()
        }
        return total
    }

    /**
     * Get compiled state from the primary layer (for UI).
     */
    getRuleCompileState() {
        const primary = this._layers.find((l) => l.data?.enabled !== false)?.ps
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
            if (layer.data?.enabled === false) continue
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
        return this._layers.filter((l) => l.data?.enabled !== false).length
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
        const activeLayer = this._layers.find((l) => l.data?.enabled !== false && l.data?.layerType !== 'modifier')
            || this._layers.find((l) => l.data?.enabled !== false)
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
