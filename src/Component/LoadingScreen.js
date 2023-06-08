import React from "react";
import animationData from "../Lotties/Pre-Robo.json";
import Lottie from "react-lottie";
import "../Css/LoadingScreen.css";

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div className="loadingmain">
      <div className="loading-screen">
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </div>
    </div>
  );
};

export default LoadingScreen;
