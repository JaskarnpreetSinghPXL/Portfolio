import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BirdModel from './Bird';

export default function BirdScene() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 5], fov: 30 }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotateY={false}
      />
      <ambientLight />
      <directionalLight position={[2, 1, 2]} intensity={1} />
      <BirdModel />
    </Canvas>
  );
}
