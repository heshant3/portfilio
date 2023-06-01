import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/designing.json";

const HoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: false, // Disable autoplay to control animation with hover
    animationData: animationData,
  };

  useEffect(() => {
    const container = document.getElementById("animation-container");

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <div id="animation-container"></div>;
};

export default HoverAnimation;
