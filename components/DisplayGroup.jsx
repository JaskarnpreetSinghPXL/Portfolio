import React from 'react';
import Model from './Tree';
import { OrbitControls } from '@react-three/drei';

export default function DisplayGroup() {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[2, 1, 2]} intensity={1} />
      <group position={[0, -1, 0]}>
        <Model />
      </group>
    </>
  );
}
