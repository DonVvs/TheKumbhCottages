import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CanvasErrorBoundary from './CanvasErrorBoundary';

// ─── Silk / Liquid Wave Distortion GLSL Shader ───
const LiquidImageShader = {
  uniforms: {
    uTexture: { value: null },
    uHover: { value: 0 },
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  },
  vertexShader: `
    varying vec2 vUv;
    uniform float uHover;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Subtle ripple displacement on hover
      float dist = length(uv - uMouse);
      float wave = sin(dist * 18.0 - uTime * 4.0) * exp(-dist * 4.0) * uHover * 0.04;
      pos.z += wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Liquid refraction offset based on mouse distance
      float dist = length(uv - uMouse);
      vec2 dir = normalize(uv - uMouse);
      float strength = sin(dist * 16.0 - uTime * 3.5) * exp(-dist * 3.5) * uHover * 0.018;

      vec2 distortedUv = uv + dir * strength;

      // RGB lens dispersion on hover
      float r = texture2D(uTexture, distortedUv + vec2(strength * 0.5, 0.0)).r;
      float g = texture2D(uTexture, distortedUv).g;
      float b = texture2D(uTexture, distortedUv - vec2(strength * 0.5, 0.0)).b;

      // Warm antique gold vignette
      float vignette = smoothstep(0.0, 0.05, uv.x) * smoothstep(1.0, 0.95, uv.x) *
                       smoothstep(0.0, 0.05, uv.y) * smoothstep(1.0, 0.95, uv.y);
      
      vec3 color = vec3(r, g, b);
      // Soft warmth boost on hover
      color = mix(color, color * vec3(1.04, 1.01, 0.96), uHover * 0.5);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

function LiquidPlane({ imageSrc, isHovered, mousePos }) {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);

  // Load texture cleanly
  useMemo(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imageSrc,
      (tex) => {
        tex.generateMipmaps = true;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        setTexture(tex);
      },
      undefined,
      (err) => console.warn('Could not load WebGL texture:', err)
    );
  }, [imageSrc]);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(LiquidImageShader.uniforms),
      vertexShader: LiquidImageShader.vertexShader,
      fragmentShader: LiquidImageShader.fragmentShader,
    });
  }, []);

  useFrame((state, delta) => {
    if (!material || !texture) return;
    material.uniforms.uTexture.value = texture;
    material.uniforms.uTime.value = state.clock.getElapsedTime();

    // Smooth hover lerp
    const targetHover = isHovered ? 1.0 : 0.0;
    material.uniforms.uHover.value = THREE.MathUtils.damp(
      material.uniforms.uHover.value,
      targetHover,
      4.0,
      delta
    );

    // Pointer update
    material.uniforms.uMouse.value.set(mousePos.x, mousePos.y);
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[2, 1.25, 48, 48]} />
    </mesh>
  );
}

export default function RefinedLiquidImage({
  src,
  alt,
  className = '',
  aspectRatio = '16/10',
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; // invert for WebGL UV
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group ${className}`}
      style={{ aspectRatio }}
    >
      {/* Fallback & Base Image (Loaded immediately for SEO and zero layout shift) */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* WebGL Silk Liquid Shader Canvas (activates gracefully on desktop hover) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CanvasErrorBoundary fallback={null}>
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 1.1], fov: 60 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          >
            <LiquidPlane
              imageSrc={src}
              isHovered={isHovered}
              mousePos={mousePos}
            />
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* Children overlays (Badges, gradients, text) */}
      {children}
    </div>
  );
}
