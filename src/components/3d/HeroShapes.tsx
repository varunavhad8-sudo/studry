"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function FloatingOrb({ 
  position, 
  scale = 1, 
  speed = 1,
  color = "#ffffff"
}: { 
  position: [number, number, number], 
  scale?: number, 
  speed?: number,
  color?: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          roughness={0.1}
          metalness={0.1}
          distort={0.4}
          speed={2 * speed}
        />
      </mesh>
    </Float>
  );
}

export function FloatingTorus({ 
  position, 
  scale = 1, 
  speed = 1 
}: { 
  position: [number, number, number], 
  scale?: number, 
  speed?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 * speed;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={2} floatIntensity={1.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        <torusGeometry args={[1, 0.3, 32, 100]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}
