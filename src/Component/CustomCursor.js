import React, { useEffect } from "react";
import "../Css/CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const handleMouseDown = () => {
      if (!cursor.classList.contains("click")) {
        cursor.classList.add("click");
        setTimeout(() => {
          cursor.classList.remove("click");
        }, 800);
      }
    };

    const handleMouseMove = (event) => {
      let x = event.pageX - cursor.offsetWidth / 2;
      let y = event.pageY - cursor.offsetHeight / 2;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div className="custom-cursor-before"></div>
    </div>
  );
};

export default CustomCursor;
