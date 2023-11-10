"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Vector3 } from "three";
import { Suspense, useRef } from "react";

export const Light = ({ vec = new Vector3(), ...props }) => {
  const light = useRef(null);

  useFrame((state) => {
    // Calculate the light's position based on the mouse position
    const mousePosition = new Vector3(state.mouse.x, state.mouse.y, 0);
    const lightPosition = mousePosition.clone().normalize().multiplyScalar(2);

    // Update the light's position and target
    if (light.current) {
      light.current.position.copy(lightPosition);
      light.current.target.position.copy(mousePosition);
    }
  });

  return (
    <spotLight
      ref={light}
      castShadow
      penumbra={1}
      distance={8}
      angle={0.4}
      intensity={5}
      decay={2}
      {...props}
    />
  );
};

const Experience = () => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enableDamping
        maxPolarAngle={2}
        minAzimuthAngle={-Math.PI * 0.5}
        maxAzimuthAngle={Math.PI * 0.5}
      />
      <group position-y={-1.6} scale={1.4}>
        <group position-y={1.2}>
          <Light />
        </group>
        <Avatar />
      </group>
      <ambientLight intensity={0.1} />
    </>
  );
};

const ThreeModle = () => {
  return (
    <div className="center-model w-full h-full">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ThreeModle;
