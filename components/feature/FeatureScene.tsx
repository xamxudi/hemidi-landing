import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

function CameraModel() {
  const { scene } = useGLTF("/models/reload_rotate_icons_refresh_loop_circular_symbol.glb");

  return (
    <primitive
      object={scene}
      scale={3}
      position={[0, -1, 0]}
    />
  );
}

export default function FeatureScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6],
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

      <CameraModel />
    </Canvas>
  );
}

useGLTF.preload("/models/reload_rotate_icons_refresh_loop_circular_symbol.glb");