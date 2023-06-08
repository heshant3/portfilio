import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce } from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { gsap } from "gsap";

export function Model(props) {
  const dd = useRef();
  const head = useRef();
  const group = useRef();
  const robot = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const { nodes, materials, animations } = useGLTF("/Robot.glb");
  const { actions } = useAnimations(animations, group);

  const handleMouseEnter = () => {
    actions.middle.play().reset().setLoop(LoopOnce, 1).clampWhenFinished = true;
    actions.middle2.stop().reset();
  };

  const handleMouseLeave = () => {
    actions.middle.stop().reset();
    actions.middle2
      .play()
      .reset()
      .setLoop(LoopOnce, 1).clampWhenFinished = true;
    // const action2 = actions["middle2"];
    // action2.reset();
    // action2.clampWhenFinished = true;
    // action2.setLoop(LoopOnce, 1);
    // action2.timeScale = 1;
    // action2.play();
  };

  const handleClick = () => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.9, ease: "power1.inOut" },
    });

    tl.current
      //   .to(robot.current.rotation, { y: -1 }, 2)
      //   .to(robot.current.position, { x: 10 }, 2)
      .from(robot.current.rotation, { y: 0 }, 0)
      .to(robot.current.rotation, { y: 6.5 }, 0);
    // const action2 = actions["middle"];
    // action2.reset();
    // action2.clampWhenFinished = true;
    // action2.setLoop(LoopOnce, 1);
    // action2.timeScale = 1;
    // action2.play();
  };

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power4.out" },
    });

    tl.current
      //   .to(robot.current.rotation, { y: -1 }, 2)
      //   .to(robot.current.position, { x: 10 }, 2)
      .from(robot.current.position, { x: 29 }, 0)
      .to(robot.current.position, { z: -20 }, 0)
      .to(robot.current.position, { z: 20 }, 1)
      .from(robot.current.rotation, { y: 4 }, 1)
      .to(robot.current.rotation, { y: 0 }, 1)
      .to(robot.current.position, { x: 0 }, 1)
      .to(robot.current.position, { z: 0 }, 1);

    tl2.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut", repeat: -1, yoyo: true },
    });

    tl2.current.from(robot.current.position, { y: 2 }, 1);
    tl2.current.to(robot.current.position, { y: 0 }, 1);
    tl.current.delay(0);
    tl2.current.delay(3);
  }, []);

  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   dd.current.position.y = (0.5 + Math.sin(t / 1)) / 1;
  //   dd.current.rotation.y = (1 + Math.sin(t / 1.5)) / 3;
  // });

  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    easing.dampE(
      head.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 0.6 : -1), 0],
      0.4,
      delta
    );
  });

  useEffect(() => {
    // Log the available animation clip names

    // // Set the repetitions to 1 (play one time)
    // // action.setLoop(LoopOnce, 5);

    // // Set clampWhenFinished to true (pause on last keyframe)
    // // action.clampWhenFinished = true;
    // action.timeScale = 1;
    // // Play the animation
    actions.blink.play();
    // actions.middle.play();
    // action2.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        ref={head}
        onClick={handleClick}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
      >
        <group name="Scene" ref={robot}>
          <group name="Armature">
            <primitive object={nodes.Bone} />
          </group>
          <group>
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
      </group>{" "}
    </group>
  );
}

useGLTF.preload("/Robot.glb");
