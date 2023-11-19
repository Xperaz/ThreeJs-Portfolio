import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useTimer } from "use-timer";

export function Avatar() {
  const [whenAnimate, setWhenAnimate] = useState(0);
  const [pauseAnimation, setPauseAnimation] = useState(false);
  const { time, start, pause, reset, status } = useTimer();
  const group = useRef();
  const { nodes, materials } = useGLTF("models/650c6588e560d493958e1428.glb");
  const { animations: greetingAnimation } = useFBX("animations/Greeting.fbx");

  greetingAnimation[0].name = "Greeting";

  const { actions } = useAnimations(greetingAnimation, group);

  useFrame((state) => {
    let target = new Vector3(state.mouse.x, state.mouse.y, 1);
    if (target.x === 0 && target.y === 0) {
      target = new Vector3(0, 0.8159999999999999, 1);
    }
    group.current.getObjectByName("Head").lookAt(target);
    group.current.getObjectByName("Neck").lookAt(target);
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
  }, [pauseAnimation, actions, start]);

  useEffect(() => {
    if (status === "RUNNING" && time >= 4) {
      setPauseAnimation(true);
      pause();
      setWhenAnimate(0);
    }
  }, [time, status, pause]);

  return (
    <>
      <group ref={group} dispose={null}>
        <group rotation-x={whenAnimate} position-y={-0.22}>
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
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("models/650c6588e560d493958e1428.glb");
