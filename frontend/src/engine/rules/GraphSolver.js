/**
 * SEESOUND v1.0 — GraphSolver.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Force-Directed Graph layout for Cloud-mode entities (network spacing).
 *
 * Three simple forces:
 *   - **Repulsion ("Personal Space")**: Every fundamental inherently pushes
 *     every other fundamental away (electrostatic / overlap prevention).
 *   - **Center Gravity ("Stage Anchor")**: A gentle pull toward (0,0,0) so
 *     nodes don't drift into the void.
 *   - **Tension ("Musical Tie")**: A spring between fundamentals that share a
 *     harmonic relationship (same fundamental ±20¢ or harmonic multiple).
 *
 * Damping, velocity clamping, soft locks — all automatic.
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
    /** Base repulsion stiffness per unit distance. */
    repulsionStiffness: 0.0015,
    /** Repulsion rest radius — nodes closer than this get pushed apart harder. */
    repulsionRadius: 30,
    /** Maximum repulsion force per pair per frame. */
    maxRepulsion: 6,
    /** Tension spring constant (shared harmonics). */
    tensionStiffness: 0.003,
    /** Tension rest length — harmonic nodes want to stay this far apart. */
    tensionRestLength: 50,
    /** Damping factor (0-1). */
    damping: 0.88,
    /** Maximum force per frame (global clamp). */
    maxForce: 10,
    /** Base center-gravity strength. */
    centerGravityBase: 0.0006,
    /** Velocity clamp per frame. */
    maxVelocity: 25,
    /** Z-spread for initial positions. */
    zSpread: 80,
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
     * Check whether two stream IDs share a musical relationship.
     * Returns true if:
     *   - They have the same fundamental frequency (same harmonic group), OR
     *   - Their pitch classes are related by a consonant musical interval
     *     (unison, perfect fifth, perfect fourth, major/minor third, or octave).
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */
    _shareHarmonics(a, b) {
        // Quick check: same harmonic group (same fundamental)
        for (const [, ids] of this._harmonicGroups) {
            if (ids.has(a) && ids.has(b)) return true
        }
        // Musical interval check: pitch class difference
        const nodeA = this.nodes.get(a)
        const nodeB = this.nodes.get(b)
        if (!nodeA || !nodeB) return false
        const pcDiff = Math.abs((nodeA.pitchClass || 0) - (nodeB.pitchClass || 0))
        const interval = Math.min(pcDiff, 12 - pcDiff)
        // Consonant intervals: unison (0), minor third (3), major third (4),
        // perfect fourth (5), perfect fifth (7), octave (0→12).
        return interval === 0 || interval === 3 || interval === 4 || interval === 5 || interval === 7
    }

    /**
     * Run one frame of the force simulation.
     * Three forces, all scaled by user-defined rules:
     *   - **Repulsion**: every node pushes every other node away.
     *   - **Center Gravity**: gentle pull toward origin.
     *   - **Tension (Musical Tie)**: spring between harmonically related nodes only.
     *
     * @param {Object} [options]
     * @param {number} [options.deltaTime] - Frame delta in seconds (default 1/60).
     * @param {number} [options.repulsion] - Rule-driven repulsion multiplier (0-1, default 1).
     * @param {number} [options.centerGravity] - Rule-driven center gravity multiplier (0-1, default 1).
     * @param {number} [options.tension] - Rule-driven tension multiplier for harmonic ties (0-1, default 1).
     */
    step(options = {}) {
        const cfg = this.config
        const dt = options.deltaTime ?? (1 / 60)
        const repMul = options.repulsion ?? 1
        const cgMul = options.centerGravity ?? 1
        const tenMul = options.tension ?? 1

        const nodes = [...this.nodes.values()]
        if (nodes.length === 0) return

        // ── Helper: apply velocity clamp + integrate ──
        const _integrate = (node) => {
            const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy + node.vz * node.vz)
            if (speed > cfg.maxVelocity) {
                const scale = cfg.maxVelocity / speed
                node.vx *= scale; node.vy *= scale; node.vz *= scale
            }
            node.x += node.vx * dt * 60
            node.y += node.vy * dt * 60
            node.z += node.vz * dt * 60
        }

        if (nodes.length < 2) {
            // Single node — only center gravity applies
            const node = nodes[0]
            node.vx += -node.x * cfg.centerGravityBase * cgMul
            node.vy += -node.y * cfg.centerGravityBase * cgMul
            node.vz += -node.z * cfg.centerGravityBase * 0.5 * cgMul
            node.vx *= cfg.damping
            node.vy *= cfg.damping
            node.vz *= cfg.damping
            _integrate(node)
            return
        }

        // ── Force computation (pairwise) ──
        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i]
            let fx = 0, fy = 0, fz = 0

            // 1. Center gravity ("Stage Anchor") — scaled by rule
            fx += -a.x * cfg.centerGravityBase * cgMul
            fy += -a.y * cfg.centerGravityBase * cgMul
            fz += -a.z * cfg.centerGravityBase * 0.5 * cgMul

            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j]
                const dx = b.x - a.x
                const dy = b.y - a.y
                const dz = b.z - a.z
                const distSq = dx * dx + dy * dy + dz * dz
                const dist = Math.sqrt(Math.max(0.001, distSq))

                // 2. Repulsion ("Personal Space") — every node vs every node
                // Inverse-linear falloff: closer = stronger push
                const repStrength = cfg.repulsionStiffness * repMul
                const repForce = repStrength * Math.max(0, (cfg.repulsionRadius - dist) / cfg.repulsionRadius)
                const clampedRep = Math.min(cfg.maxRepulsion, repForce)
                const rfx = (dx / dist) * clampedRep
                const rfy = (dy / dist) * clampedRep
                const rfz = (dz / dist) * clampedRep
                fx -= rfx; fy -= rfy; fz -= rfz
                b.vx += rfx; b.vy += rfy; b.vz += rfz

                // 3. Tension ("Musical Tie") — only between harmonically related nodes
                if (this._shareHarmonics(a.id, b.id)) {
                    // Spring: pull toward rest length
                    const displacement = dist - cfg.tensionRestLength
                    const tensionForce = displacement * cfg.tensionStiffness * tenMul
                    const clampedTension = Math.min(cfg.maxForce, Math.abs(tensionForce)) * Math.sign(tensionForce)
                    const tfx = (dx / dist) * clampedTension
                    const tfy = (dy / dist) * clampedTension
                    const tfz = (dz / dist) * clampedTension
                    fx += tfx; fy += tfy; fz += tfz
                    b.vx -= tfx; b.vy -= tfy; b.vz -= tfz
                }
                // No tension = no extra force for non-harmonic pairs (they just repel)
            }

            // Apply damping
            a.vx = (a.vx + fx) * cfg.damping
            a.vy = (a.vy + fy) * cfg.damping
            a.vz = (a.vz + fz) * cfg.damping
        }

        // ── Integrate ──
        for (const node of nodes) _integrate(node)
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
