import React, { useEffect, useState, useMemo } from "react";
import { Environment, ContactShadows } from "@react-three/drei";
import { Model } from "../Robot";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

import { OrbitControls } from "@react-three/drei";

import "../Css/Home.css";

export default function Home() {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = useMemo(
    () => ["Full Stack Developer", "UI/UX Designer", "AI Enthusiast"],
    []
  );

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(".greeting", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".role-container",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".tagline",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".decorative-line",
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentRole = roles[roleIndex];

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex];
        setDisplayedRole(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Wait 2 seconds then move to next role
        setTimeout(() => {
          // Erase animation
          const eraseInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setDisplayedRole(currentText);
            } else {
              clearInterval(eraseInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex, roles]);

  return (
    <div className="wrapper">
      <div className="main txt">
        <div className="text-content">
          <div className="decorative-line"></div>

          <h2 className="greeting">
            Hi There,
            <span className="wave">👋</span>
          </h2>

          <div className="role-container">
            <h1 className="role-prefix">I'm a</h1>
            <h1 className="role-text">
              {displayedRole}
              <span className="cursor">|</span>
            </h1>
          </div>

          <p className="tagline">Unlock Innovation with AI-Driven Design</p>
        </div>
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
