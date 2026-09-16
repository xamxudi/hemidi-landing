"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/management.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0.5, 0]}
    />
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 35,
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[3, 5, 3]}
        intensity={2}
      />

      <Environment preset="studio" />

      <Model />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

useGLTF.preload("/models/management.glb");