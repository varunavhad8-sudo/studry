"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import { ReactNode, Suspense } from "react";

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
}

export default function SceneWrapper({ 
  children, 
  className = "",
  cameraPosition = [0, 0, 5],
  fov = 45
}: SceneWrapperProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 ${className}`} aria-hidden>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // Cap dpr to 1.5 to save performance on high-DPI screens
        style={{ pointerEvents: "none" }} // Ensure canvas doesn't block interactions unless specifically needed
      >
        <Suspense fallback={null}>
          {/* Ambient lighting is provided by the environment preset */}
          <Environment preset="city" />
          {/* Subtle directional light for depth */}
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <ambientLight intensity={0.5} />
          
          {children}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
