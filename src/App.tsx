import React, { useRef } from 'react';
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useHelper } from '@react-three/drei';
import { GridHelper, PointLightHelper } from 'three';
import './App.css'

function Scene() {
  const pointLightRef = useRef();

  useHelper(pointLightRef, PointLightHelper, 1, "hotpink")

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[10, 0, 0]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial />
      </mesh>

      <ambientLight ref={pointLightRef} intensity={1.00} />

      <gridHelper args={[200, 50]} />
    </>
  );
}

function App() {
  return (
    <>
      <h1>Hello</h1>
      <div id="canvas-container">
        <Canvas>
          <Scene />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>
    </>
  )
}

export default App
