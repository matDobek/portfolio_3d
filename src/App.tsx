import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls, useHelper } from '@react-three/drei';
import { GridHelper, PointLightHelper } from 'three';
import { randInSphere } from '../utils/math.ts';
import './App.css'

function Scene() {
  // const pointLightRef = useRef();
  // useHelper(pointLightRef, PointLightHelper, 1, "hotpink")
  // <ambientLight ref={pointLightRef} intensity={1.00} />
  // <gridHelper args={[200, 50]} />
  //

  let positions = randInSphere(5000, 100);

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  });

  return (
    <>
      <group rotation={[50, 50, Math.PI / 4]}>
        <Points ref={ref} positions={positions} >
          <PointMaterial size={0.1} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>

      <ambientLight intensity={1.00} />
    </>
  );
}

function App() {
  return (
    <>
      <h1>Hello</h1>
      <div id="canvas-container">
        <Canvas camera={{position: [50, 50, 50]}}>
          <Scene />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </>
  )
}

export default App
