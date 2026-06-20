'use client';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedGradientMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    // Animate rotation
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.0002;
        meshRef.current.rotation.y += 0.0003;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <mesh ref={meshRef} scale={1.2}>
      <icosahedronGeometry args={[2, 64]} />
      <meshPhongMaterial
        color={0xffffff}
        emissive={0xe5e7eb}
        shininess={60}
        wireframe={false}
      />
    </mesh>
  );
};

const FloatingOrbs = () => {
  const orbRefs = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    orbRefs.current.forEach((orb, i) => {
      if (!orb) return;
      
      const animate = () => {
        if (!orb) return;
        orb.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.001;
        orb.position.x += Math.cos(Date.now() * 0.0003 + i) * 0.001;
        orb.rotation.x += 0.002;
        orb.rotation.y += 0.001;
        requestAnimationFrame(animate);
      };
      animate();
    });
  }, []);

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            orbRefs.current[i] = el;
          }}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 8,
          ]}
          scale={Math.random() * 0.5 + 0.3}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            color={0xd97706}
            emissive={0xd97706}
            opacity={0.3}
            transparent
          />
        </mesh>
      ))}
    </>
  );
};

export const Hero3DCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 50 }}
    style={{ background: '#ffffff', width: '100%', height: '100%' }}
  >
    <ambientLight intensity={0.6} />
    <pointLight position={[5, 5, 5]} intensity={0.8} color={0xd97706} />
    <AnimatedGradientMesh />
    <FloatingOrbs />
  </Canvas>
);
