'use client';

import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useLoader, useThree } from '@react-three/fiber';

function Model() {
  const gltf = useLoader(GLTFLoader, 'tree.glb');
  const { camera } = useThree();

  camera.position.z = 5;
  camera.updateProjectionMatrix();

  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(0, 0, 0);
  gltf.scene.rotation.set(0, 0, 0);

  return <primitive object={gltf.scene} />;
}

const ThreeRenderer = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 1, 1]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeRenderer;
