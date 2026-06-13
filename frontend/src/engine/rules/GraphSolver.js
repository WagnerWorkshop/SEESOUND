/**
 * SEESOUND v1.0 — GraphSolver.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Force-Directed Graph layout for Cloud-mode entities.
 *
 * When cloud spacing is set to "network", the GraphSolver assigns
 * pairwise forces between harmonic objects:
 *   - PULL force between objects that share harmonics (same fundamental
 *     or harmonic multiple relationship).
 *   - PUSH force between everything else.
 *
 * Positions are updated via simple spring-damper integration each frame.
 *
 * @module GraphSolver
 */

/**
 * A node in the force graph.
 * @typedef {Object} GraphNode
 * @property {number} id - Unique object ID (streamId).
 * @property {number} fundamentalHz - Fundamental frequency.
 * @property {number} pitchClass - MIDI pitch class (0-11).
 * @property {number} volume - Object loudness (0-1).
 * @property {number} x - Current X position.
 * @property {number} y - Current Y position.
 * @property {number} z - Current Z position.
 * @property {number} vx - Current X velocity.
 * @property {number} vy - Current Y velocity.
 * @property {number} vz - Current Z velocity.
 */

const DEFAULT_CONFIG = Object.freeze({
    /** Spring constant for pull (shared harmonics). */
    pullStiffness: 0.002,
    /** Spring constant for push (no shared harmonics). */
    pushStiffness: 0.0008,
    /** Rest length for pull connections. */
    pullRestLength: 40,
    /** Rest length for push connections (push wants separation). */
    pushRestLength: 120,
    /** Damping factor (0-1). */
    damping: 0.85,
    /** Maximum force per frame to prevent explosion. */
    maxForce: 8,
    /** Center-attractor strength (pulls all nodes toward origin). */
    centerGravity: 0.0005,
    /** Velocity clamp per frame. */
    maxVelocity: 20,
    /** Z-spread range. */
    zSpread: 60,
    /** Repulsion at very short distances (avoid overlap). */
    repulsionRadius: 15,
    repulsionStrength: 0.01,
})

export class GraphSolver {
    /**
     * @param {Partial<typeof DEFAULT_CONFIG>} [config]
     */
    constructor(config = {}) {
        /** @type {typeof DEFAULT_CONFIG} */
        this.config = { ...DEFAULT_CONFIG, ...config }

        /** @type {Map<number, GraphNode>} */
        this.nodes = new Map()

        /** Pre-computed harmonic relationship cache: fundamentalHz → Set<streamId> */
        this._harmonicGroups = new Map()
    }

    /**
     * Synchronise the graph with the latest harmonic objects from the worklet.
     * Adds new nodes, removes stale ones, and updates existing node properties.
     * @param {Array<import('../types').HarmonicObject>} harmonicObjects
     */
    sync(harmonicObjects) {
        const incoming = Array.isArray(harmonicObjects) ? harmonicObjects : []
        const incomingIds = new Set()

        // Rebuild harmonic groups
        this._harmonicGroups.clear()

        for (const obj of incoming) {
            const sid = obj.streamId || 0
            incomingIds.add(sid)

            // Track harmonic groups: objects with same fundamental ±5 cents
            const hz = obj.fundamentalHz || 0
            if (hz > 0) {
                // Quantize to 20-cent bins for grouping
                const bin = Math.round(hz * 20) / 20
                if (!this._harmonicGroups.has(bin)) {
                    this._harmonicGroups.set(bin, new Set())
                }
                this._harmonicGroups.get(bin).add(sid)
            }

            if (!this.nodes.has(sid)) {
                // New node — initialise with random position around origin
                const angle = Math.random() * Math.PI * 2
                const radius = 20 + Math.random() * 60
                this.nodes.set(sid, {
                    id: sid,
                    fundamentalHz: hz,
                    pitchClass: obj.pitchClass ?? 0,
                    volume: obj.volume ?? 0.5,
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    z: (Math.random() - 0.5) * this.config.zSpread,
                    vx: 0,
                    vy: 0,
                    vz: 0,
                })
            } else {
                // Update existing node
                const node = this.nodes.get(sid)
                node.fundamentalHz = hz
                node.pitchClass = obj.pitchClass ?? node.pitchClass
                node.volume = obj.volume ?? node.volume
            }
        }

        // Remove stale nodes
        for (const sid of this.nodes.keys()) {
            if (!incomingIds.has(sid)) {
                this.nodes.delete(sid)
            }
        }
    }

    /**
     * Check whether two stream IDs share a harmonic relationship.
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */
    _shareHarmonics(a, b) {
        for (const [, ids] of this._harmonicGroups) {
            if (ids.has(a) && ids.has(b)) return true
        }
        return false
    }

    /**
     * Run one frame of the force simulation.
     * Updates the X/Y/Z coordinates of all nodes in-place.
     * @param {Object} [options]
     * @param {number} [options.deltaTime] - Frame delta in seconds (default 1/60).
     * @param {number} [options.centralGravity] - Rule-driven center pull (0-1, default 1).
     * @param {number} [options.lowGravity] - Rule-driven downward pull (0-1, default 0).
     * @param {number} [options.highGravity] - Rule-driven upward pull (0-1, default 0).
     * @param {number} [options.leftGravity] - Rule-driven left pull (0-1, default 0).
     * @param {number} [options.rightGravity] - Rule-driven right pull (0-1, default 0).
     * @param {number} [options.pullForce] - Rule-driven tension for shared-harmonics nodes (0-1, default 1).
     * @param {number} [options.pushForce] - Rule-driven repulsion for non-shared nodes (0-1, default 1).
     */
    step(options = {}) {
        const cfg = this.config
        const dt = options.deltaTime ?? (1 / 60)
        const cGrav = options.centralGravity ?? 1
        const lowGrav = options.lowGravity ?? 0
        const highGrav = options.highGravity ?? 0
        const leftGrav = options.leftGravity ?? 0
        const rightGrav = options.rightGravity ?? 0
        const pullMul = options.pullForce ?? 1
        const pushMul = options.pushForce ?? 1

        const nodes = [...this.nodes.values()]
        if (nodes.length < 2) {
            // Single node or none — just apply gravity modifiers
            for (const node of nodes) {
                node.vx += -node.x * cfg.centerGravity * cGrav
                node.vy += -node.y * cfg.centerGravity * cGrav + lowGrav * 0.5 - highGrav * 0.5
                node.vz += -node.z * cfg.centerGravity * 0.5 * cGrav
                // Directional gravity
                node.vx += (rightGrav - leftGrav) * 2
                node.vy += (highGrav - lowGrav) * 2
                // Clamp velocity (automatic)
                const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy + node.vz * node.vz)
                if (speed > cfg.maxVelocity) {
                    const scale = cfg.maxVelocity / speed
                    node.vx *= scale; node.vy *= scale; node.vz *= scale
                }
                node.x += node.vx * dt * 60
                node.y += node.vy * dt * 60
                node.z += node.vz * dt * 60
            }
            return
        }

        // Compute pairwise forces
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i]
            let fx = 0, fy = 0, fz = 0

            // Center gravity (scaled by rule)
            fx += -a.x * cfg.centerGravity * cGrav
            fy += -a.y * cfg.centerGravity * cGrav
            fz += -a.z * cfg.centerGravity * 0.5 * cGrav
            // Directional gravity (scaled by rules)
            fx += (rightGrav - leftGrav) * 4
            fy += (highGrav - lowGrav) * 4

            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j]
                const dx = b.x - a.x
                const dy = b.y - a.y
                const dz = b.z - a.z
                const distSq = dx * dx + dy * dy + dz * dz
                const dist = Math.sqrt(Math.max(0.001, distSq))

                // Short-range repulsion (prevent overlap) — automatic
                if (dist < cfg.repulsionRadius) {
                    const repForce = cfg.repulsionStrength * (cfg.repulsionRadius - dist) / cfg.repulsionRadius * pushMul
                    const rfx = (dx / dist) * repForce
                    const rfy = (dy / dist) * repForce
                    const rfz = (dz / dist) * repForce
                    fx -= rfx; fy -= rfy; fz -= rfz
                    b.vx += rfx; b.vy += rfy; b.vz += rfz
                    continue
                }

                const shareHarmonics = this._shareHarmonics(a.id, b.id)

                if (shareHarmonics) {
                    // PULL: spring toward rest length (scaled by pullForce rule)
                    const displacement = dist - cfg.pullRestLength
                    const force = displacement * cfg.pullStiffness * pullMul
                    const f = Math.min(cfg.maxForce, Math.abs(force)) * Math.sign(force)
                    const ffx = (dx / dist) * f
                    const ffy = (dy / dist) * f
                    const ffz = (dz / dist) * f
                    fx += ffx; fy += ffy; fz += ffz
                    // Equal and opposite
                    b.vx -= ffx; b.vy -= ffy; b.vz -= ffz
                } else {
                    // PUSH: spring away from rest length (negative)
                    const displacement = cfg.pushRestLength - dist
                    const force = -displacement * cfg.pushStiffness * pushMul
                    const f = Math.min(cfg.maxForce, Math.abs(force)) * Math.sign(force)
                    const ffx = (dx / dist) * f
                    const ffy = (dy / dist) * f
                    const ffz = (dz / dist) * f
                    fx += ffx; fy += ffy; fz += ffz
                    b.vx -= ffx; b.vy -= ffy; b.vz -= ffz
                }
            }

            // Apply accumulated force
            a.vx = (a.vx + fx) * cfg.damping
            a.vy = (a.vy + fy) * cfg.damping
            a.vz = (a.vz + fz) * cfg.damping

            // Clamp velocity
            const speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy + a.vz * a.vz)
            if (speed > cfg.maxVelocity) {
                const scale = cfg.maxVelocity / speed
                a.vx *= scale; a.vy *= scale; a.vz *= scale
            }
        }

        // Integrate positions
        for (const node of nodes) {
            node.x += node.vx * dt * 60
            node.y += node.vy * dt * 60
            node.z += node.vz * dt * 60
        }
    }

    /**
     * Get the current position of a specific stream ID.
     * @param {number} streamId
     * @returns {{x: number, y: number, z: number}|null}
     */
    getPosition(streamId) {
        const node = this.nodes.get(streamId)
        if (!node) return null
        return { x: node.x, y: node.y, z: node.z }
    }

    /**
     * Get all current positions as a map of streamId → {x, y, z}.
     * @returns {Map<number, {x: number, y: number, z: number}>}
     */
    getAllPositions() {
        const positions = new Map()
        for (const [sid, node] of this.nodes) {
            positions.set(sid, { x: node.x, y: node.y, z: node.z })
        }
        return positions
    }

    /**
     * Reset all nodes (clear the graph).
     */
    reset() {
        this.nodes.clear()
        this._harmonicGroups.clear()
    }
}
