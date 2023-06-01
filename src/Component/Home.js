import React, { useRef, useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { AnimationActionLoopStyles, LoopOnce } from "three";
import { Model } from "./Robot";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

import {
  Stage,
  OrbitControls,
  SpotLight,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";

import "../Css/Home.css";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(".text", {
      duration: 1,
      ease: "power4.out",
      y: "0%",
      stagger: 0,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="main">
        <h1 className="txttop">
          <span ref={textRef} className="text ">
            Hi There,
          </span>
        </h1>
        <h1 className="txttop">
          <span ref={textRef} className="text txttop">
            I'm UI/UX Engineerr
          </span>
        </h1>

        <h1 className="txtbottom">
          <span ref={textRef} className="text ">
            A Creative Designer from Sri Lanka
          </span>
        </h1>
      </div>
      <div className="main">
        <Canvas camera={{ position: [0, 10, 25], fov: 40 }} intensity={0.5}>
          <ambientLight distance={40} position={[70, 40, 10]} intensity={0.3} />
          <Model position={[0, -3.57, 0]} scale={1} />
          <Environment preset="city" intensity={0.6} />

          <ContactShadows
            position={[0, -3.57, 0]}
            scale={10}
            blur={3}
            opacity={0.25}
            far={10}
          />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
