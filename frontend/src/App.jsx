import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ParticleEngine } from './engine/ParticleEngine.js';
import ControlPanel from './components/ControlPanel.jsx';
import './App.css';

function App() {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    
    const [params, setParams] = useState({
        spacingMode: 'stereo',
        momentaryPainting: false,
        defaultSize: 1.0,
        ampToBrightness: 1.0,
        textureSmoothness: 0.5
    });

    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x050505);

        const engine = new ParticleEngine(scene);
        engineRef.current = engine;

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        const clock = new THREE.Clock();
        let frameCount = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            const dt = clock.getDelta();
            
            if (engineRef.current) {
                engineRef.current.updateUniforms(params, dt);
                
                // Demo data injector
                frameCount++;
                if (frameCount % 2 === 0) {
                    engineRef.current.addParticle({
                        pan: (Math.random() * 2 - 1),
                        peak_freq: Math.random() * 5000,
                        centroid: Math.random() * 5000,
                        amplitude: Math.random()
                    });
                }
            }

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        if (engineRef.current) {
             engineRef.current.updateUniforms(params, 0);
        }
    }, [params]);

    return (
        <div className="app-container">
            <canvas ref={canvasRef} className="webgl-canvas" />
            <ControlPanel params={params} setParams={setParams} />
        </div>
    );
}

export default App;

