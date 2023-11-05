import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useTimer } from "use-timer";
import { SpotLight } from "@react-three/drei";
import { PointLight } from "three";

const Light = ({vec = new Vector3(), ...props}) => {
    const light = useRef(null);
  
    useFrame((state) => {
      // Calculate the light's position based on the mouse position
      const mousePosition = new Vector3(state.mouse.x, state.mouse.y, 0);
      const lightPosition = mousePosition.clone().normalize().multiplyScalar(2);
  
      // Update the light's position and target
      light.current.position.copy(lightPosition);
      light.current.target.position.copy(mousePosition);
    });
  
    return (
      <spotLight
        ref={light}
        castShadow
        penumbra={1}
        distance={10}
        angle={0.35}
        intensity={3}
        decay={2}
        {...props}
      />
    );
  };

// const Light = ({vec = new Vector3(), ...props}) => {
//     const light = useRef(null);
  
//     useFrame((state) => {
//       light.current?.target.position.lerp(vec.set(state.mouse.x, state.mouse.y, 0), 0.1);
//     });
  
//     return (
        
//         <SpotLight ref={light} 
//         castShadow
//         penumbra={1}
//         distance={7}
//         angle={0.35}
//         attenuation={5}
//         anglePower={10}
//         intensity={10}
//         rotateZ={10}
//         {...props}
//         />
//     );
//   }


export function Avatar() {
    const [whenAnimate, setWhenAnimate] = useState(0);
    const [pauseAnimation, setPauseAnimation] = useState(false);
    const { time, start, pause, reset, status } = useTimer();
    const group = useRef();
    const { nodes, materials } = useGLTF("models/650c6588e560d493958e1428.glb");
    const {animations: greetingAnimation} = useFBX('animations/Greeting.fbx');

    greetingAnimation[0].name = "Greeting";

    const { actions } = useAnimations(greetingAnimation, group);

    useFrame((state) => {
        let target = new Vector3(state.mouse.x, state.mouse.y, 1);
        if (target.x === 0 && target.y === 0){
            target = new Vector3(0, 0.8159999999999999, 1);
        }
        group.current.getObjectByName("Head").lookAt(target);
    });

    
    useEffect(() => {
        if (!pauseAnimation) {
            start();
            setWhenAnimate(-Math.PI / 2);
            actions["Greeting"].reset().fadeIn(0.5).play();
        }
        if (pauseAnimation) {
            actions["Greeting"].reset().fadeOut(0.5).stop();
        }
    }, [pauseAnimation]);

    useEffect(() => {
        if (status === "RUNNING" && time >= 4) {
            setPauseAnimation(true);
            pause();
            setWhenAnimate(0);
        }
    }, [time, status]);
    
    return (
        <>
    <group ref={group} dispose={null} >
        <group rotation-x={whenAnimate} >
            {/* <group position-y={1}>
                <Light />
            </group> */}
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Top"
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Bottom"
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Outfit_Footwear"
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                morphTargetDictionary={
                nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
                }
                morphTargetInfluences={
                nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
                }
            />
            <skinnedMesh
                name="Wolf3D_Body"
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
            />

        </group>
    </group>
    </>
  );
}

useGLTF.preload("models/650c6588e560d493958e1428.glb");
