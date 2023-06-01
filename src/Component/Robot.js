import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationActionLoopStyles, LoopOnce } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { gsap } from "gsap";

export function Model(props) {
  const ref = useRef();
  const head = useRef();
  const group = useRef();
  const robot = useRef();
  const tl = useRef();
  const { nodes, materials, animations } = useGLTF("/Robot.glb");
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      //   .to(robot.current.rotation, { y: -1 }, 2)
      //   .to(robot.current.position, { x: 10 }, 2)
      .from(robot.current.position, { x: 29 }, 4)
      .to(robot.current.position, { z: -20 }, 4)
      .to(robot.current.position, { z: 20 }, 6)
      .from(robot.current.rotation, { y: 4 }, 6)
      .to(robot.current.rotation, { y: 0 }, 6)
      .to(robot.current.position, { x: 0 }, 6)
      .to(robot.current.position, { z: 0 }, 6);
  }, []);

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   ref.current.position.y = (2 + Math.sin(t / 1)) / 1;
  //   ref.current.rotation.y = (4.5 + Math.sin(t / 1.5)) / 5;
  // });

  // useFrame((state, delta) => {
  //   const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
  //   easing.dampE(
  //     head.current.rotation,
  //     [0, state.pointer.x * (state.camera.position.z > 1 ? 0.3 : -1), 0],
  //     0.4,
  //     delta
  //   );
  // });

  // useEffect(() => {
  //   // Log the available animation clip names
  //   console.log(Object.keys(animations));

  //   const action = actions['middle'];
  //   const action2 = actions['blink'];

  //   // Set the repetitions to 1 (play one time)
  //   // action.setLoop(LoopOnce, 5);

  //   // Set clampWhenFinished to true (pause on last keyframe)
  //   // action.clampWhenFinished = true;
  //   action.timeScale = 1;
  //   // Play the animation
  //   action.play();
  //   action2.play();
  // }, []);

  return (
    <group ref={group} ref={ref} {...props} dispose={null}>
      <group name="Scene" ref={robot}>
        <group name="Armature">
          <primitive object={nodes.Bone} />
        </group>
        <group ref={head}>
          <mesh
            name="Frame"
            castShadow
            receiveShadow
            geometry={nodes.Frame.geometry}
            material={materials.Material}
            position={[-0.09, 8.38, -1.05]}
            scale={[2.87, 2.21, 2.87]}
            transmission={1.1}
            material-roughness={0.13}
          />
          <mesh
            name="Head"
            castShadow
            receiveShadow
            geometry={nodes.Head.geometry}
            material={materials["EVE.002"]}
            position={[0.52, -3.2, -1.05]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={1.38}
          />
          <mesh
            name="Eyes"
            castShadow
            receiveShadow
            geometry={nodes.Eyes.geometry}
            material={materials.Eyes}
            morphTargetDictionary={nodes.Eyes.morphTargetDictionary}
            morphTargetInfluences={nodes.Eyes.morphTargetInfluences}
            position={[-0.09, 8.2, 0.21]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.82, 0.03, 1.82]}
            material-emissiveIntensity={10}
            toneMapped={false}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Robot.glb");
