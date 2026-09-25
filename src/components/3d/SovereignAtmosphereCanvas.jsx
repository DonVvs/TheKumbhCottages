import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasErrorBoundary from './CanvasErrorBoundary';

// ─── Subtle Sandstone & Golden Light Gradient Shader ───
const SandstoneGlowShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#FAF7F2') }, // Soft alabaster cream
    uColorB: { value: new THREE.Color('#EFE8DC') }, // Soft warm sandstone
    uGold: { value: new THREE.Color('#C5A059') },   // Antique Gold
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uGold;
    varying vec2 vUv;

    // Smooth simplex-like pseudo noise
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec2 uv = vUv;
      
      // Slow organic golden light wave
      float t = uTime * 0.08;
      float n1 = noise(uv * 2.2 + vec2(t * 0.5, t * 0.3));
      float n2 = noise(uv * 4.0 - vec2(t * 0.4, t * 0.6));
      float combined = (n1 * 0.65 + n2 * 0.35);

      vec3 base = mix(uColorA, uColorB, combined * 0.5);
      
      // Extremely subtle gold illumination peak
      float goldSheen = pow(combined, 3.5) * 0.15;
      vec3 finalColor = mix(base, uGold, goldSheen);

      gl_FragColor = vec4(finalColor, 0.08); // Whisper subtle
    }
  `,
};

function AtmospherePlane() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(SandstoneGlowShader.uniforms),
      vertexShader: SandstoneGlowShader.vertexShader,
      fragmentShader: SandstoneGlowShader.fragmentShader,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  useFrame((state) => {
    if (material) {
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh position={[0, 0, 0]} material={material}>
      <planeGeometry args={[12, 12]} />
    </mesh>
  );
}

export default function SovereignAtmosphereCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
          style={{ width: '100%', height: '100%' }}
        >
          <AtmospherePlane />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
