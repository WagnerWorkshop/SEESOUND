/**
 * SEESOUND v2.0 — SeesoundEngine.js
 * ═══════════════════════════════════════════════════════════════════════════
 * Lightweight passive API shell.
 *
 * In HEADLESS mode (?headless): lazy-creates its own render/audio context
 * via start() and drives its own rAF loop.
 *
 * In STANDARD mode (default): passive wrapper around main.js globals.
 * main.js calls engine.tick() from its existing loop.
 * No redundant allocations, no double rAF, no duplicate THREE.js context.
 *
 * @module SeesoundEngine
 */

import {
    params,
    set,
    setMany,
    subscribe as paramSubscribe,
    getSnapshot,
} from './ParamStore.js'
import { compileRules, collectRuleInputs } from './rules/RuleCompiler.js'
import { getInputDictionary } from './rules/RuleDictionary.js'
import { resolveDependencyGraph, buildAudioUsage, isVariableLegalInMode, AXIOMATIC_VARS } from './DependencyGraph.js'
import { GraphSolver } from './rules/GraphSolver.js'
import { EngineEvent, createDefaultConfig } from './types.js'

export class SeesoundEngine {
    /**
     * @param {Partial<import('./types').SeesoundConfig>} [config]
     */
    constructor(config = {}) {
        const cfg = createDefaultConfig(config)

        /** @type {import('./types').EngineMode} */
        this._mode = cfg.mode
        /** @type {import('./types').CloudPositioningMode} */
        this._cloudPositioning = cfg.cloudPositioning
        /** @type {GraphSolver} */
        this._graphSolver = new GraphSolver()
        /** @type {Object|null} */
        this._graphPositions = null

        this._isPlaying = false
        this._frameN = 0
        this._currentAudioFileName = ''
        this._monitorMuted = false
        this._animFrameId = null
        this._eventListeners = new Map()
        this._headless = false

        // Wrapped references (assigned via adoptExistingContext or lazy headless init)
        /** @type {import('../audio/AudioEngine').AudioEngine|null} */
        this._ae = null
        /** @type {import('../ParticleSystem').ParticleSystem|null} */
        this._ps = null
        this._exportManager = null
        this._renderer = null
        this._composer = null
        this._scene = null
        this._camera = null

        // Param subscription — recompile rules when entity/global rules change
        this._unsubscribeParams = paramSubscribe((key) => {
            if (key === 'ruleEntities' || key === 'ruleGlobalBlocks' || key === 'ruleEngineEnabled') {
                this._syncParticleRules()
            }
        })
    }

    // ────────────────────────────────────────────────────────────────────────
    //  MOUNT / ADOPT
    // ────────────────────────────────────────────────────────────────────────

    /**
     * Adopt existing main.js context (standard mode).
     * Must be called right after construction, before tick().
     */
    adoptExistingContext(ctx) {
        if (ctx?.ae) this._ae = ctx.ae
        if (ctx?.ps) this._ps = ctx.ps
        if (ctx?.exportManager) this._exportManager = ctx.exportManager
        if (ctx?.cameraController) this._cameraController = ctx.cameraController
        this._headless = false
        this._syncParticleRules()
    }

    /**
     * Lazy-initialize headless mode resources (THREE.js, AudioEngine, etc.).
     * Called once by start() if in headless mode.
     * Uses dynamic import() so THREE.js is code-split out of the standard bundle.
     * @param {Element} container
     */
    async _initHeadless(container) {
        if (this._headless) return
        this._headless = true

        const THREE = await import('three')
        const { EffectComposer } = await import('three/examples/jsm/postprocessing/EffectComposer.js')
        const { RenderPass } = await import('three/examples/jsm/postprocessing/RenderPass.js')
        const { UnrealBloomPass } = await import('three/examples/jsm/postprocessing/UnrealBloomPass.js')
        const { ParticleSystem } = await import('./ParticleSystem.js')
        const { AudioEngine } = await import('./audio/AudioEngine.js')
        const { CameraController } = await import('./renderer/CameraController.js')
        const { ExportManager } = await import('./project/ExportManager.js')
        const { triggerBlobDownload } = await import('./project/ProjectIO.js')

        // Build minimal DOM
        const canvas = document.createElement('canvas')
        canvas.id = 'three-canvas'
        const wrapper = document.createElement('div')
        wrapper.id = 'canvas-wrapper'
        wrapper.className = 'canvas-wrapper'
        wrapper.appendChild(canvas)
        const col = document.createElement('div')
        col.id = 'canvas-col'
        col.appendChild(wrapper)
        container.appendChild(col)

        // Renderer
        this._renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
        this._renderer.setPixelRatio(window.devicePixelRatio)
        this._composer = new EffectComposer(this._renderer)
        this._scene = new THREE.Scene()
        this._scene.add(new THREE.AxesHelper(250))

        // Cameras
        const MIN_FAR = 20000
        this._cameraOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.001, MIN_FAR)
        this._cameraPerspective = new THREE.PerspectiveCamera(55, 1, 0.001, MIN_FAR)
        this._camera = this._cameraOrtho
        this._orbitTarget = new THREE.Vector3(0, 0, 420)
        for (const c of [this._cameraOrtho, this._cameraPerspective]) {
            c.position.copy(this._orbitTarget); c.lookAt(0, 0, 0)
        }
        this._composer.addPass(new RenderPass(this._scene, this._camera))
        const bp = new UnrealBloomPass(new THREE.Vector2(1, 1), 1.15, 0.7, 0.18)
        this._composer.addPass(bp)

        // Audio engine
        this._ae = new AudioEngine({
            initialCqtDetailsPer10Octaves: params.cqtDetailsPer10Octaves,
            deriveAudioUsage: (r) => this._deriveAudioUsage(r),
        })
        this._ae.setFluxWindowFrames(params.fluxWindowFrames)

        // Particle system
        this._ps = new ParticleSystem(this._scene, { maxParticles: 262144 })
        this._syncParticleRules()

        // Camera controller
        this._cameraController = new CameraController({
            getCamera: () => this._camera, orbitTarget: this._orbitTarget,
            orbitState: { radius: 420, azimuth: 0, elevation: 0 },
            renderer: this._renderer, col, canvas, wrapper,
            pointerState: {}, wrapperState: {},
            updateWrapperTransform: () => { },
            setCanvasScale: (v) => set('canvasScale', v),
        })

        // Export manager
        this._exportManager = new ExportManager({
            getCamera: () => this._camera, renderer: this._renderer, canvas,
            scene: this._scene, ps: this._ps, params,
            platformConfig: { tier: 'free', maxExportResolution: Infinity, canExportObj: true, canCloudRender: false },
            emitToPlatform: () => { }, ae: this._ae, triggerBlobDownload,
            shouldUsePostProcessing: () => true,
            getCurrentAudioTitle: () => this._currentAudioFileName,
            getCurrentPresetTitle: () => 'preset',
            sanitizeFilePart: (v, f) => String(v || '').trim() || f,
        })
    }

    // ────────────────────────────────────────────────────────────────────────
    //  PUBLIC API
    // ────────────────────────────────────────────────────────────────────────

    /** Start/resume playback. In headless mode, also starts rAF. */
    async start(container) {
        if (this._headless && !this._animFrameId) {
            await this._initHeadless(container)
            this._animFrameId = requestAnimationFrame(this._animateLoop.bind(this))
        }
        this._isPlaying = true
        if (this._ae?.ctx?.state === 'suspended') await this._ae.ctx.resume()
        this._emit(EngineEvent.PLAY)
    }

    /** Pause playback. */
    pause() {
        this._isPlaying = false
        this._ae?.audioEl?.pause()
        this._emit(EngineEvent.PAUSE)
    }

    /** Stop playback and reset. */
    stop() {
        this._isPlaying = false
        if (this._ae?.audioEl) {
            this._ae.audioEl.pause()
            this._ae.audioEl.currentTime = 0
        }
        this._emit(EngineEvent.STOP)
    }

    /**
     * Load audio file.
     * @param {File|string} file
     */
    async loadAudio(file) {
        if (!this._ae) return
        try {
            const url = file instanceof File ? URL.createObjectURL(file) : file
            const audio = new Audio()
            audio.crossOrigin = 'anonymous'
            await new Promise((resolve, reject) => {
                audio.addEventListener('canplaythrough', () => resolve(), { once: true })
                audio.addEventListener('error', reject, { once: true })
                audio.src = url; audio.load()
            })
            this._ae.audioEl = audio
            this._ae.init(audio)
            this._currentAudioFileName = file instanceof File ? file.name : ''
            this._emit(EngineEvent.AUDIO_LOADED)
        } catch (err) {
            this._emit(EngineEvent.ERROR, { message: err.message })
        }
    }

    /** Load a preset JSON object. */
    loadPreset(json) {
        if (!json || typeof json !== 'object') return
        const p = json.params || json
        if (p && typeof p === 'object') setMany(p)
        this._syncParticleRules()
        this._emit(EngineEvent.PRESET_LOADED)
    }

    /** Snapshot of current state. */
    getState() {
        return {
            params: getSnapshot(), mode: this._mode,
            cloudPositioning: this._cloudPositioning,
            audioFileName: this._currentAudioFileName,
            isPlaying: this._isPlaying, frameN: this._frameN,
            visibleCount: this._ps?.getVisibleCount?.() ?? 0,
            compileState: this._ps?.getRuleCompileState?.() ?? null,
        }
    }

    subscribe(event, cb) {
        if (!this._eventListeners.has(event)) this._eventListeners.set(event, new Set())
        this._eventListeners.get(event).add(cb)
    }
    unsubscribe(event, cb) {
        this._eventListeners.get(event)?.delete(cb)
    }

    /** Switch engine mode (particle | cloud | tracing | lines). */
    setMode(mode) {
        if (mode === this._mode || !['particle', 'cloud', 'tracing', 'lines'].includes(mode)) return
        const prev = this._mode
        this._mode = mode
        this._syncParticleRules()
        this._emit(EngineEvent.MODE_CHANGE, { prevMode: prev, mode })
    }
    getEngineMode() { return this._mode }

    setCloudPositioning(pos) {
        if (this._mode === 'cloud' && (pos === 'direct' || pos === 'network')) this._cloudPositioning = pos
    }
    getCloudPositioning() { return this._cloudPositioning }

    /**
     * Call once per frame from main.js's animate() (standard mode).
     * Emits FRAME event with normalized probe inputs for UI consumption.
     * Also drives the cloud network graph solver if network mode is active.
     */
    tick({ ae, ps, canvasW, canvasH, cameraUnitData } = {}) {
        this._frameN++
        const engine = ae || this._ae
        const sys = ps || this._ps
        if (!engine || !sys) return
        const unit = cameraUnitData || { w: 0, h: 0 }
        const inputs = this._buildProbeInputs(engine, canvasW || 0, canvasH || 0, unit)
        this._emit(EngineEvent.FRAME, {
            frameN: this._frameN, inputs,
            time: engine.audioEl?.currentTime ?? 0, deltaTime: 1 / 60,
        })
        window.dispatchEvent(new CustomEvent('seesound:rule-probe', { detail: { inputs } }))

        // ── Cloud network graph solver ──
        if (this._cloudPositioning === 'network') {
            const harmonicObjects = engine.getHarmonicObjects?.() ?? null
            if (harmonicObjects) {
                this._graphSolver.sync(harmonicObjects)
                // Read modifier outputs from the particle system's compiled rule state
                let repMul = 1, cgMul = 1, tenMul = 1
                if (sys.cloudNetworkModifiers) {
                    const m = sys.cloudNetworkModifiers
                    if (Number.isFinite(m.repulsion)) repMul = Math.max(0, Math.min(1, m.repulsion))
                    if (Number.isFinite(m.centerGravity)) cgMul = Math.max(0, Math.min(1, m.centerGravity))
                    if (Number.isFinite(m.tension)) tenMul = Math.max(0, Math.min(1, m.tension))
                }
                this._graphSolver.step({
                    deltaTime: 1 / 60,
                    repulsion: repMul,
                    centerGravity: cgMul,
                    tension: tenMul,
                })
                this._graphPositions = this._graphSolver.getAllPositions()
                // Emit positions for main.js / particle system to consume
                window.dispatchEvent(new CustomEvent('seesound:cloud-network-positions', {
                    detail: { positions: this._graphPositions, count: this._graphPositions.size },
                }))
            }
        }
    }

    /**
     * Get the current cloud network graph positions.
     * @returns {Map<number, {x: number, y: number, z: number}>|null}
     */
    getCloudNetworkPositions() {
        return this._graphPositions
    }

    /** Build normalized probe inputs. */
    _buildProbeInputs(ae, cw, ch, cu) {
        const ba = ae.getBinMagnitude?.() || null
        const bf = ae.getBinFlux?.() || null
        const bpd = ae.getBinPhaseDeviation?.() || null
        const bp = ae.getBinPhase?.() || null
        const bat = ae.getBinAttackTime?.() || null
        const be = ae.getBinEnvelope?.() || null
        const nyq = ae.ctx?.sampleRate ? ae.ctx.sampleRate * 0.5 : 22050
        const _n = (v, mn, mx) => {
            const lo = Number(mn), hi = Number(mx), x = Number(v)
            return Number.isFinite(x) && Number.isFinite(lo) && Number.isFinite(hi) && hi > lo
                ? Math.max(0, Math.min(1, (x - lo) / (hi - lo))) : 0
        }
        const _avg = (arr, fn) => { if (!arr?.length) return 0; let s = 0; for (let i = 0; i < arr.length; i++) s += fn(arr[i]); return s / arr.length }
        return {
            amplitude: _n(ae.rmsDbfs, params.globalRmsNormMin ?? -60, params.globalRmsNormMax ?? 0),
            globalRmsEnergy: _n(ae.rmsDbfs, params.globalRmsNormMin ?? -60, params.globalRmsNormMax ?? 0),
            binEnergy: _avg(ba, (v) => _n(v, params.binMagnitudeNormMin ?? -70, params.binMagnitudeNormMax ?? 0)),
            frequencyHz: ae.peakFreq ?? 0, normFreq: Math.min(1, (ae.peakFreq ?? 0) / Math.max(1e-6, nyq)),
            bass: ae.bass ?? 0, mid: ae.mid ?? 0, high: ae.high ?? 0, peakFreq: ae.peakFreq ?? 0, pan: ae.pan ?? 0,
            spectralCentroid: _n(ae.spectralCentroidHz, params.spectralCentroidNormMin ?? 150, params.spectralCentroidNormMax ?? 8000),
            spectralFlux: _n(ae.spectralFluxAU, params.globalSpectralFluxNormMin ?? 0, params.globalSpectralFluxNormMax ?? 100),
            spectralFlatness: _n(ae.spectralFlatnessRatio, params.spectralFlatnessNormMin ?? 0, params.spectralFlatnessNormMax ?? 1),
            inharmonicity: ae.inharmonicity ?? 0, peakAmplitude: ae.peakAmplitude ?? 0,
            zeroCrossingRate: ae.zeroCrossingRate ?? 0, spectralRolloff: ae.spectralRolloff ?? 0,
            spectralSpread: ae.spectralSpread ?? 0, spectralSkewness: ae.spectralSkewness ?? 0,
            chromagram: ae.chromagram ?? 0,
            binMagnitude: _avg(ba, (v) => _n(v, params.binMagnitudeNormMin ?? -70, params.binMagnitudeNormMax ?? 0)),
            binFlux: _avg(bf, (v) => _n(v, params.binFluxNormMin ?? 0, params.binFluxNormMax ?? 0.5)),
            binPhaseDeviation: _avg(bpd, (v) => _n(v, params.binPhaseDeviationNormMin ?? 0, params.binPhaseDeviationNormMax ?? Math.PI)),
            binPhase: _avg(bp, (v) => _n(v, -Math.PI, Math.PI)),
            binAttackTime: _avg(bat, (v) => _n(v, params.binAttackTimeNormMin ?? 5, params.binAttackTimeNormMax ?? 500)),
            binEnvelope: _avg(be, (v) => _n(v, 0, 3)), binEnvelopeState: _avg(be, (v) => _n(v, 0, 3)),
            binRMSEnergy: _n(ae.rmsDbfs, params.globalRmsNormMin ?? -60, params.globalRmsNormMax ?? 0),
            time: ae.audioEl?.currentTime ?? 0, deltaTime: 1 / 60,
            canvasWidthPx: cw, canvasHeightPx: ch,
            canvasWidthUnits: cu.w, canvasHeightUnits: cu.h,
            canvasWidth: Number(params.canvasWidth ?? cu.w), canvasHeight: Number(params.canvasHeight ?? cu.h),
            audioLengthSec: ae.audioEl?.duration ?? 0,
        }
    }

    /** Headless rAF loop. */
    _animateLoop() {
        this._animFrameId = requestAnimationFrame(this._animateLoop.bind(this))
        this._frameN++
        this._ae?.update()
        const playing = !!(this._ae?.audioEl && !this._ae.audioEl.paused && !this._ae.audioEl.ended)
        if (playing && !this._ae.analyser && this._ae.audioEl) this._ae.init(this._ae.audioEl)
        if (this._isPlaying !== playing) { this._isPlaying = playing; this._emit(playing ? EngineEvent.PLAY : EngineEvent.PAUSE) }
        if (!playing) return
        const dpr = window.devicePixelRatio || 1
        const w = this._renderer.domElement.width / dpr
        const h = this._renderer.domElement.height / dpr
        this._ps?.update(this._ae, params, w, h)
        this.tick({ ae: this._ae, ps: this._ps, canvasW: w, canvasH: h, cameraUnitData: { w: 0, h: 0 } })
        const bg = this._ps.getBackgroundColor()
        this._renderer.setClearColor(bg, 1)
        this._ps.setViewportHeight(this._renderer.domElement.height)
        this._composer?.render()
    }

    /** Free resources. */
    destroy() {
        if (this._animFrameId) cancelAnimationFrame(this._animFrameId)
        this._animFrameId = null
        this._unsubscribeParams?.()
        if (this._headless) { this._cameraController?.dispose?.(); this._renderer?.dispose() }
        this._eventListeners.clear()
    }

    // ────────────────────────────────────────────────────────────────────────
    //  RULE SYNC
    // ────────────────────────────────────────────────────────────────────────

    _syncParticleRules() {
        if (!this._ps) return
        // Derive engine mode from entity settings
        const entities = Array.isArray(params.ruleEntities) ? params.ruleEntities : []
        const hasCloud = entities.some((e) => e?.entityShapeType === 'cloud')
        const hasNetwork = entities.some((e) => e?.spacingMode === 'network' && e?.entityShapeType === 'cloud')

        const derivedMode = hasCloud ? 'cloud' : 'particle'
        const derivedPositioning = hasNetwork ? 'network' : 'direct'

        // Only emit mode change if it actually changed
        if (derivedMode !== this._mode) {
            const prev = this._mode
            this._mode = derivedMode
            // Keep params.objectMode in sync so UI reads the derived mode
            if (params.objectMode !== derivedMode) {
                set('objectMode', derivedMode)
            }
            this._emit(EngineEvent.MODE_CHANGE, { prevMode: prev, mode: derivedMode })
        } else if (params.objectMode !== derivedMode) {
            set('objectMode', derivedMode)
        }
        this._cloudPositioning = derivedPositioning

        const rules = params.ruleEngineEnabled !== false
            ? this._flattenRules(entities, params.ruleGlobalBlocks ?? {})
            : []
        const graph = resolveDependencyGraph(rules, this._mode, { cloudNetwork: this._cloudPositioning === 'network' })
        const byTarget = this._buildRequiredInputsByTarget(rules)
        this._ae?.setRuleInputUsage(byTarget)
        const cr = this._ps.onRulesChanged({ ruleBlocks: rules, requiredInputsByTarget: byTarget })
        if (cr) this._emit(EngineEvent.COMPILE_STATE, cr)
        this._emit(EngineEvent.GRAPH_UPDATED, { referencedInputs: [...graph.referencedInputs], mode: this._mode })
    }

    _flattenRules(entities, globals) {
        const blocks = []
        const ordered = [...(entities ?? [])].sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
        ordered.forEach((entity, ei) => {
            if (!entity || typeof entity !== 'object') return
            const base = ei * 10000
            const defs = (Array.isArray(entity.definitions) ? entity.definitions : [])
                .map((d) => String(d?.expression || '').trim()).filter(Boolean)
            const defExpr = defs.length ? defs.map((e) => `(${e})`).join(' && ') : ''
                ; (Array.isArray(entity.rules) ? entity.rules : []).forEach((rule, ri) => {
                    blocks.push({
                        ...rule, entityId: entity.id, entityName: entity.name,
                        sectionDisabled: rule?.sectionDisabled === true || entity.enabled === false,
                        order: base + (Number.isFinite(rule?.order) ? rule.order : ri),
                        definitionExpression: defExpr
                    })
                })
        })
        for (const g of ['background', 'camera']) {
            ; (Array.isArray(globals?.[g]) ? globals[g] : []).forEach((rule, i) => {
                blocks.push({ ...rule, order: Number.isFinite(rule?.order) ? rule.order : 900000 + i })
            })
        }
        return blocks
    }

    _buildRequiredInputsByTarget(rules) {
        const byTarget = { spawnedParticles: [], allParticles: [], physicalParticles: [], lines: [], background: [], camera: [] }
        const allIds = new Set(getInputDictionary().entries.map((e) => e.id))
        for (const rule of (rules || [])) {
            if (!rule?.enabled || rule?.sectionDisabled) continue
            const t = rule.target || 'spawnedParticles'
            if (!byTarget[t]) continue
            for (const id of collectRuleInputs([rule], allIds)) {
                if (!byTarget[t].includes(id)) byTarget[t].push(id)
            }
        }
        return byTarget
    }

    _deriveAudioUsage(requiredInputsByTarget) {
        const used = new Set([
            ...(requiredInputsByTarget?.spawnedParticles ?? []),
            ...(requiredInputsByTarget?.allParticles ?? []),
            ...(requiredInputsByTarget?.physicalParticles ?? []),
            ...(requiredInputsByTarget?.lines ?? []),
            ...(requiredInputsByTarget?.background ?? []),
            ...(requiredInputsByTarget?.camera ?? []),
        ])
        for (const v of AXIOMATIC_VARS) used.add(v)
        return buildAudioUsage(used, this._mode)
    }

    // ────────────────────────────────────────────────────────────────────────
    //  EVENTS
    // ────────────────────────────────────────────────────────────────────────

    _emit(event, detail = {}) {
        for (const cb of (this._eventListeners.get(event) ?? [])) {
            try { cb(detail) } catch (err) { console.warn('[SeesoundEngine]', err) }
        }
    }

    // ────────────────────────────────────────────────────────────────────────
    //  ACCESSORS
    // ────────────────────────────────────────────────────────────────────────

    set monitorMuted(v) { this._monitorMuted = !!v; this._ae?.setMonitorMuted(this._monitorMuted) }
    get monitorMuted() { return this._monitorMuted }
    get isPlaying() { return this._isPlaying }
    get mode() { return this._mode }
    get audioEngine() { return this._ae }
    get particleSystem() { return this._ps }
    get exportManager() { return this._exportManager }
}

export default SeesoundEngine
