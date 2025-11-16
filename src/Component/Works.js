import React, { useEffect } from "react";
import "../Css/Works.css";
import balloon1 from "../Image/balloon-1.png";
import balloon2 from "../Image/balloon-2.png";
import { gsap } from "gsap";

const Works = () => {
  useEffect(() => {
    gsap.from(".left", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "expo",
    });
    gsap.from(".right", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "expo",
    });

    gsap.from(".lefttxt", {
      y: 100,
      opacity: 0,
      duration: 0.9,
      ease: "expo",
    });
    gsap.from(".righttxt", {
      y: -100,
      opacity: 0,
      duration: 0.9,
      ease: "expo",
    });

    gsap.from(".image1", {
      duration: 1.5,
      ease: "none",
      y: "120",
      stagger: 0,
    });

    gsap.to(".image1", {
      duration: 90,
      ease: "none",
      y: "-400",
      stagger: 0,
    });

    gsap.from(".image2", {
      duration: 1.5,
      ease: "none",
      y: "100",
      stagger: 0,
    });

    gsap.to(".image2", {
      duration: 200,
      ease: "none",
      y: "-400",
      stagger: 0,
    });
  }, []);

  return (
    <div className="containerr">
      <a href="https://blog.heshan.dev" rel="noopener noreferrer">
        <div className="left">
          <p className="lefttxt">
            Project
            <br />
            <span>Innovative</span>
          </p>
          <img className="image1" src={balloon1} alt="ballon1" />
        </div>
      </a>
      <a
        href="https://www.behance.net/heshantharindu"
        rel="noopener noreferrer"
      >
        <div className="right">
          <p className="righttxt">
            Design
            <br />
            <span>Creative</span>
          </p>
          <img className="image2" src={balloon2} alt="ballon1" />
        </div>
      </a>
    </div>
  );
};

export default Works;
