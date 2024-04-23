import { Canvas } from '@react-three/fiber';
import DisplayGroup from './DisplayGroup';

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [1.5, 1.5, 3.5], fov: 30 }}>
      <DisplayGroup />
    </Canvas>
  );
}
