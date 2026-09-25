import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasErrorBoundary from './CanvasErrorBoundary';

// ─── Custom GLSL Caustic River Light Shader ───
const CausticShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColor: { value: new THREE.Color('#D4AF37') },
    uDeepColor: { value: new THREE.Color('#1A1208') },
    uOpacity: { value: 0.22 },
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
    uniform vec2 uMouse;
    uniform vec3 uColor;
    uniform vec3 uDeepColor;
    uniform float uOpacity;
    varying vec2 vUv;

    // Organic caustic ripple calculation
    float caustic(vec2 p, float t) {
      vec2 p1 = p * 4.5 + vec2(t * 0.12, t * 0.08);
      vec2 p2 = p * 6.0 - vec2(t * 0.15, t * 0.09);
      
      float c1 = sin(p1.x + sin(p1.y + t * 0.4)) * cos(p1.y * 1.2);
      float c2 = cos(p2.x * 0.9 + cos(p2.y * 0.8 - t * 0.3));
      float c3 = sin((p.x + p.y) * 8.0 + t * 0.6) * 0.35;
      
      float val = pow(abs(c1 + c2 + c3) * 0.45, 2.2);
      return clamp(val, 0.0, 1.0);
    }

    void main() {
      vec2 uv = vUv;
      
      // Gentle mouse interaction pull
      vec2 toMouse = uv - uMouse;
      float distToMouse = length(toMouse);
      float mouseInfluence = smoothstep(0.45, 0.0, distToMouse) * 0.25;
      
      float c = caustic(uv + toMouse * mouseInfluence * 0.05, uTime);
      
      // Vignette to keep corners gentle and unobtrusive
      float vignette = smoothstep(0.0, 0.3, uv.x) * smoothstep(1.0, 0.7, uv.x) *
                       smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.7, uv.y);
      
      vec3 finalColor = mix(uDeepColor, uColor, c + mouseInfluence * 0.4);
      float finalAlpha = (c * 0.75 + mouseInfluence * 0.3) * uOpacity * vignette;
      
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `,
};

function CausticPlane() {
  const meshRef = useRef();
  const { pointer } = useThree();
  const smoothedMouse = useRef(new THREE.Vector2(0.5, 0.5));

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(CausticShader.uniforms),
      vertexShader: CausticShader.vertexShader,
      fragmentShader: CausticShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, []);

  useFrame((state, delta) => {
    if (!material) return;
    material.uniforms.uTime.value = state.clock.getElapsedTime();

    // Smooth cursor interpolation (0 to 1 range)
    const targetX = (pointer.x + 1) * 0.5;
    const targetY = (pointer.y + 1) * 0.5;
    smoothedMouse.current.x = THREE.MathUtils.damp(smoothedMouse.current.x, targetX, 3.0, delta);
    smoothedMouse.current.y = THREE.MathUtils.damp(smoothedMouse.current.y, targetY, 3.0, delta);
    material.uniforms.uMouse.value.copy(smoothedMouse.current);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} material={material}>
      <planeGeometry args={[16, 10]} />
    </mesh>
  );
}

// ─── Procedural Bokeh Light Particles (Sacred Swarna Dust) ───
function SwarnaBokehParticles({ count = 48 }) {
  const pointsRef = useRef();

  // Procedural soft radial circular texture (zero network request)
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 230, 160, 1.0)');
    grad.addColorStop(0.35, 'rgba(212, 175, 55, 0.45)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  const [positions, speeds, opacities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    const op = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      sp[i] = 0.15 + Math.random() * 0.35;
      op[i] = 0.2 + Math.random() * 0.6;
    }
    return [pos, sp, op];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Gentle upwards convection drift
      pos[i * 3 + 1] += speeds[i] * 0.004;
      pos[i * 3] += Math.sin(t * 0.4 + i) * 0.002;

      // Wrap around gently
      if (pos[i * 3 + 1] > 4.5) {
        pos[i * 3 + 1] = -4.5;
        pos[i * 3] = (Math.random() - 0.5) * 14;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.42}
        map={circleTexture}
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ─── MASTER AMBIENT HERO REFINEMENT OVERLAY ───
// Placed directly over the high-resolution corporate photography hero
// to impart rich photographic depth, river caustics, and subtle sacred particles
export default function RefinedHeroAmbience() {
  return (
    <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
      <CanvasErrorBoundary>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Subtle Caustic River Light Shader */}
          <CausticPlane />

          {/* Organic Floating Swarna Bokeh Particles */}
          <SwarnaBokehParticles count={52} />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
