import React, { useRef, useEffect } from "react";
import { Environment, ContactShadows } from "@react-three/drei";
import { Model } from "../Robot";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

import { OrbitControls } from "@react-three/drei";

import "../Css/Home.css";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(".text", {
      duration: 1.8,
      ease: "power4.out",
      y: "0%",
      stagger: 0,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="main txt">
        <h1 className="txttop2">
          <span ref={textRef} className="text ">
            Hi There,
          </span>
        </h1>
        <h1 className="txttop">
          <span ref={textRef} className="text txttop rp1">
            I'm a front-end developer
          </span>
        </h1>

        <h1>
          <span ref={textRef} className="text txtbottom">
            Unlock Innovation with AI-Driven Design
          </span>
        </h1>
      </div>
      <div className="main robot">
        <Canvas camera={{ position: [0, 10, 25], fov: 40 }} intensity={0.5}>
          <ambientLight distance={40} position={[70, 40, 10]} intensity={0.2} />
          <Model
            position={[0, -5.2, 0]}
            rotation={[0.1, -0.05, 0]}
            scale={0.9}
          />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -5.2, 0]}
            scale={30}
            blur={3}
            opacity={0.25}
            far={10}
          />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
}
