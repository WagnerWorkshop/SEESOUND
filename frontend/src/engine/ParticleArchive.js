export class ParticleArchive {
    constructor() {
        this._chunks = []
        this._pointCount = 0
        this._offloadBatch = 256
    }

    updateOffloadBatch(capacity) {
        this._offloadBatch = Math.max(256, Math.floor(capacity * 0.1))
    }

    get pointCount() {
        return this._pointCount
    }

    get chunks() {
        return this._chunks
    }

    prune(params, nowSec) {
        const maxArchivedPoints = Math.max(0, Math.floor(params?.archiveMaxPoints ?? 1500000))
        const maxAgeSec = Math.max(0, Number(params?.archiveMaxAgeSec ?? 0))

        while (this._pointCount > maxArchivedPoints && this._chunks.length > 0) {
            const drop = this._chunks.shift()
            this._pointCount -= drop.count
        }

        if (maxAgeSec > 0) {
            while (this._chunks.length > 0) {
                const age = nowSec - this._chunks[0].timestampSec
                if (age <= maxAgeSec) break
                const drop = this._chunks.shift()
                this._pointCount -= drop.count
            }
        }

        if (this._pointCount < 0) this._pointCount = 0
    }

    archiveAndCompactOldest(removeCount, activeCount, params, nowSec, buffers) {
        const n = Math.max(0, Math.min(removeCount, activeCount))
        if (n <= 0) return 0

        const { pos, col, sz, alpha, shape, pan, binRms } = buffers

        const chunk = {
            count: n,
            timestampSec: nowSec,
            pos: pos.slice(0, n * 3),
            col: col.slice(0, n * 3),
            sz: sz.slice(0, n),
            alpha: alpha.slice(0, n),
            shape: shape.slice(0, n),
            pan: pan.slice(0, n),
            binRms: binRms.slice(0, n),
        }
        this._chunks.push(chunk)
        this._pointCount += n
        this.prune(params, nowSec)

        const remain = activeCount - n
        for (let i = 0; i < remain; i++) {
            const src = i + n
            pos[i * 3] = pos[src * 3]
            pos[i * 3 + 1] = pos[src * 3 + 1]
            pos[i * 3 + 2] = pos[src * 3 + 2]
            col[i * 3] = col[src * 3]
            col[i * 3 + 1] = col[src * 3 + 1]
            col[i * 3 + 2] = col[src * 3 + 2]
            sz[i] = sz[src]
            alpha[i] = alpha[src]
            shape[i] = shape[src]
            pan[i] = pan[src]
            binRms[i] = binRms[src]
        }

        return n
    }

    rehydrateArchivedToActive(request = {}, buffers, capacityN) {
        if (this._chunks.length === 0) return { rehydrated: 0, mode: request.mode ?? 'latest' }

        const mode = request.mode === 'oldest' ? 'oldest' : 'latest'
        const target = Math.max(0, Math.min(capacityN, Math.floor(request.maxPoints ?? capacityN)))
        if (target <= 0) return { rehydrated: 0, mode }

        const { pos, col, sz, alpha, shape, pan, binRms } = buffers
        let cursor = 0

        if (mode === 'oldest') {
            for (let c = 0; c < this._chunks.length && cursor < target; c++) {
                const chunk = this._chunks[c]
                const take = Math.min(chunk.count, target - cursor)
                for (let i = 0; i < take; i++) {
                    pos[(cursor + i) * 3] = chunk.pos[i * 3]
                    pos[(cursor + i) * 3 + 1] = chunk.pos[i * 3 + 1]
                    pos[(cursor + i) * 3 + 2] = chunk.pos[i * 3 + 2]
                    col[(cursor + i) * 3] = chunk.col[i * 3]
                    col[(cursor + i) * 3 + 1] = chunk.col[i * 3 + 1]
                    col[(cursor + i) * 3 + 2] = chunk.col[i * 3 + 2]
                    sz[cursor + i] = chunk.sz[i]
                    alpha[cursor + i] = chunk.alpha[i]
                    shape[cursor + i] = chunk.shape[i]
                    pan[cursor + i] = chunk.pan ? chunk.pan[i] : 0
                    binRms[cursor + i] = chunk.binRms ? chunk.binRms[i] : 0
                }
                cursor += take
            }
        } else {
            for (let c = this._chunks.length - 1; c >= 0 && cursor < target; c--) {
                const chunk = this._chunks[c]
                const take = Math.min(chunk.count, target - cursor)
                const start = chunk.count - take
                for (let i = 0; i < take; i++) {
                    const src = start + i
                    const dst = target - cursor - take + i
                    pos[dst * 3] = chunk.pos[src * 3]
                    pos[dst * 3 + 1] = chunk.pos[src * 3 + 1]
                    pos[dst * 3 + 2] = chunk.pos[src * 3 + 2]
                    col[dst * 3] = chunk.col[src * 3]
                    col[dst * 3 + 1] = chunk.col[src * 3 + 1]
                    col[dst * 3 + 2] = chunk.col[src * 3 + 2]
                    sz[dst] = chunk.sz[src]
                    alpha[dst] = chunk.alpha[src]
                    shape[dst] = chunk.shape[src]
                    pan[dst] = chunk.pan ? chunk.pan[src] : 0
                    binRms[dst] = chunk.binRms ? chunk.binRms[src] : 0
                }
                cursor += take
            }
        }

        return { rehydrated: cursor, mode }
    }

    scaleAllParticleSizes(ratio) {
        const r = Number(ratio)
        if (!Number.isFinite(r) || r <= 0) return

        for (const chunk of this._chunks) {
            const count = Math.max(0, Number(chunk?.count) || 0)
            if (!chunk?.sz) continue
            for (let i = 0; i < count; i++) {
                chunk.sz[i] = Math.max(0, chunk.sz[i] * r)
            }
        }
    }

    clear() {
        this._chunks = []
        this._pointCount = 0
    }
}
