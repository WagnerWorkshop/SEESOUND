import * as THREE from 'three';

import {
    calculateStereoSpacing
}

from './physics/StereoSpacing.js';

import {
    calculateLinearSpacing
}

from './physics/LinearSpacing.js';

export class ParticleEngine {
    constructor(scene, maxParticles=100000) {
        this.scene=scene;
        this.maxParticles=maxParticles;
        this.currentCount=0;

        // Physics state container
        this.physicsState= {}

        ;
        this.spacingMode='stereo'; // 'stereo' | 'linear'
        this.momentaryPainting=false; // fade out particles over time

        // Setup instanced mesh
        const geometry=new THREE.PlaneGeometry(1, 1); // Simple planar particle

        // Multi-dimensional Shader material
        this.material=new THREE.ShaderMaterial( {
                uniforms: {
                    time: {
                        value: 0
                    }

                    ,
                    defaultSize: {
                        value: 1.0
                    }

                    , // Default particle size setting

                    amplitudeToBrightness: {
                        value: 1.0
                    }

                    , // Amplitude to brightness slider

                    textureSmoothness: {
                        value: 0.5
                    }

                    , // Texture is particle smoothness

                    momentaryPainting: {
                        value: 0.0
                    }

                    , // 0 = false, 1 = true

                    resolution: {
                        value: new THREE.Vector2(window.innerWidth, window.innerHeight)
                    }
                }

                ,
                vertexShader: ` uniform float time;
                uniform float defaultSize;

                attribute vec3 instancePosition; // x = pan, y = freq, z = depth
                attribute float instanceFreq; // size is frequency
                attribute float instanceAmp; // brightness
                attribute float birthTime;

                varying float vBrightness;
                varying float vSmoothness;
                varying float vAge;

                void main() {
                    // Spacing is driven by moduler logic mapping to instancePosition
                    vec3 pos=position * (defaultSize * (1.0 + instanceFreq * 5.0)); // Size is frequency
                    pos +=instancePosition;

                    vec4 mvPosition=modelViewMatrix * vec4(pos, 1.0);
                    gl_Position=projectionMatrix * mvPosition;

                    vBrightness=instanceAmp;
                    vAge=time - birthTime;
                }

                `,
                fragmentShader: ` uniform float amplitudeToBrightness;
                uniform float textureSmoothness;
                uniform float momentaryPainting;

                varying float vBrightness;
                varying float vAge;

                void main() {
                    float dist=length(vec2(0.5, 0.5));
                    float alpha=smoothstep(0.5, 0.5 - (textureSmoothness * 0.4), dist);

                    // Momentary painting logic
                    float lifeAlpha=1.0;

                    if (momentaryPainting > 0.5) {
                        lifeAlpha=max(0.0, 1.0 - (vAge * 0.5)); // Fade out over 2 seconds
                    }

                    vec3 color=vec3(1.0) * (vBrightness * amplitudeToBrightness);

                    gl_FragColor=vec4(color, alpha * lifeAlpha);
                }

                `,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending
            }

        );

        // Initialize InstancedMesh
        this.mesh=new THREE.InstancedMesh(geometry, this.material, this.maxParticles);

        // Attributes
        this.dummy=new THREE.Object3D();
        this.positions=new Float32Array(this.maxParticles * 3);
        this.freqs=new Float32Array(this.maxParticles);
        this.amps=new Float32Array(this.maxParticles);
        this.birthTimes=new Float32Array(this.maxParticles);

        this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        // Custom attributes for Shader
        geometry.setAttribute('instancePosition', new THREE.InstancedBufferAttribute(this.positions, 3));
        geometry.setAttribute('instanceFreq', new THREE.InstancedBufferAttribute(this.freqs, 1));
        geometry.setAttribute('instanceAmp', new THREE.InstancedBufferAttribute(this.amps, 1));
        geometry.setAttribute('birthTime', new THREE.InstancedBufferAttribute(this.birthTimes, 1));

        this.scene.add(this.mesh);
    }

    addParticle(frameData) {
        if (this.currentCount >=this.maxParticles) return; // Over-budget

        const idx=this.currentCount;

        // Modular Router
        let pos;

        if (this.spacingMode==='linear') {
            pos=calculateLinearSpacing(frameData, this.physicsState);
        }

        else {
            pos=calculateStereoSpacing(frameData, this.physicsState);
        }

        this.positions[idx * 3]=pos.x;
        this.positions[idx * 3+1]=pos.y;
        this.positions[idx * 3+2]=pos.z;

        // Size is frequency (e.g., centroid mapped)
        this.freqs[idx]=frameData.centroid / 5000.0;

        // Amplitude and Time
        this.amps[idx]=frameData.amplitude;
        this.birthTimes[idx]=this.material.uniforms.time.value;

        // We use dummy to just set the identity matrix since position is handled in shader via instancePosition
        this.dummy.position.set(0, 0, 0);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(idx, this.dummy.matrix);

        this.currentCount++;
        this.mesh.count=this.currentCount;

        // Update buffers
        this.mesh.instanceMatrix.needsUpdate=true;
        this.mesh.geometry.attributes.instancePosition.needsUpdate=true;
        this.mesh.geometry.attributes.instanceFreq.needsUpdate=true;
        this.mesh.geometry.attributes.instanceAmp.needsUpdate=true;
        this.mesh.geometry.attributes.birthTime.needsUpdate=true;
    }

    updateUniforms(params, dt=0.016) {
        if (params.defaultSize !==undefined) this.material.uniforms.defaultSize.value=params.defaultSize;
        if (params.ampToBrightness !==undefined) this.material.uniforms.amplitudeToBrightness.value=params.ampToBrightness;
        if (params.textureSmoothness !==undefined) this.material.uniforms.textureSmoothness.value=params.textureSmoothness;

        if (params.spacingMode !==undefined) this.spacingMode=params.spacingMode;

        if (params.momentaryPainting !==undefined) {
            this.momentaryPainting=params.momentaryPainting;
            this.material.uniforms.momentaryPainting.value=this.momentaryPainting ? 1.0: 0.0;
        }

        this.material.uniforms.time.value+=dt;
    }
}