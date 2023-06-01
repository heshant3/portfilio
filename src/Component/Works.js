import React from "react";
import "../Css/Works.css";

const works = () => {
  return (
    <div className="containerr">
      <a href="https://example.com" rel="noopener noreferrer">
        <div className="left">
          <p>
            Project
            <br />
            <span>Innovative</span>
          </p>
        </div>
      </a>
      <a
        href="https://www.behance.net/heshantharindu"
        rel="noopener noreferrer"
      >
        <div className="right">
          <p>
            Design
            <br />
            <span>Creative </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default works;
