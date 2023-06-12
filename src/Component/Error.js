import React from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/404.json";
import "../Css/Error.css";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Animation JSON data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="error">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={400}
        width={400}
      />
    </div>
  );
}
