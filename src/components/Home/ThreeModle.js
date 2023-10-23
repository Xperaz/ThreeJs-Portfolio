"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { AmbientLight } from "three";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar />
      </group>
      <ambientLight intensity={2} />
    </>
  );
};

const ThreeModle = () => {
  return (
    <div className="-z-1 center-model w-full h-full">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <Experience />
      </Canvas>
    </div>
  );
};

export default ThreeModle;
