import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Ball = (props) => {
  const [decal] = useLoader(TextureLoader, [props.imgUrl.src]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      {/* Test this in build if smooth  */}
      {/* <Suspense fallback={null}> */}
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
      {/* </Suspense> */}

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
