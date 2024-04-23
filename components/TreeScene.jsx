import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TreeModel from './Tree';

export default function TreeScene() {
  return (
    <Canvas shadows camera={{ position: [1.5, 1.5, 3.5], fov: 30 }}>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[2, 1, 2]} intensity={1} />
      <group position={[0, -1, 0]}>
        <TreeModel />
      </group>
    </Canvas>
  );
}
