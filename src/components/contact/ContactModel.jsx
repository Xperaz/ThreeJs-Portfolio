import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Suspense } from "react";

const ContactModel = () => {
  return (
    <div className="w-full h-full center-model">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <OrbitControls
          enableZoom={false}
          enableDamping
          maxPolarAngle={2}
          minAzimuthAngle={-Math.PI * 0.5}
          maxAzimuthAngle={Math.PI * 0.5}
        />
        <group position-y={-1} scale={1.2}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group>
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
};

export default ContactModel;
