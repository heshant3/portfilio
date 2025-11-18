import React, { useEffect, useState, useMemo, Suspense } from "react";
import { ContactShadows } from "@react-three/drei";
import { Model } from "../Robot";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { Hand } from "lucide-react";

import { OrbitControls } from "@react-three/drei";

import "../Css/Home.css";
import LoadingScreen from "./LoadingScreen";

export default function Home() {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showLoadingGuide, setShowLoadingGuide] = useState(true);
  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Creative Designer",
      "AI Enthusiast",
      "Tech Innovator",
    ],
    []
  );

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
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

  // Auto-hide guide card after 6 seconds
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setShowGuide(false);
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, []);

  // Show guide card after model loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingGuide(false);
      setShowGuide(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

          <p className="tagline">Unlock Innovation with AI-Driven Technology</p>
        </div>
      </div>
      <div className="main robot">
        <Suspense fallback={<LoadingScreen />}>
          <Canvas camera={{ position: [0, 10, 25], fov: 40 }} intensity={0.5}>
            {/* Custom lights keep the scene lit without remote HDR fetches */}
            <ambientLight
              distance={40}
              position={[70, 40, 10]}
              intensity={0.35}
            />
            <directionalLight
              position={[15, 25, 10]}
              intensity={0.8}
              castShadow
            />
            <Model
              position={[0, -5.2, 0]}
              rotation={[0.1, -0.05, 0]}
              scale={0.9}
            />
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
        </Suspense>
        {(showLoadingGuide || showGuide) && (
          <div className="click-guide">
            <Hand size={20} className="hand-icon" />
            <span>{showLoadingGuide ? "Loading" : "Touch me"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
