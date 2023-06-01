import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Css/List.css";

const List = () => {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || ""
  );

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeLink === "works") {
      localStorage.setItem("activeLink", "works");
    }
  }, [activeLink]);

  return (
    <div className="navbar">
      <nav>
        <NavLink
          className={`listItem ${activeLink === "home" ? "active" : ""}`}
          exact
          to="/"
          onClick={() => handleNavLinkClick("home")}
        >
          Home
        </NavLink>

        <NavLink
          className={`listItem ${activeLink === "works" ? "active" : ""}`}
          to="/works"
          onClick={() => handleNavLinkClick("works")}
        >
          Works
        </NavLink>

        <NavLink
          className={`listItem ${
            activeLink === "works" || activeLink === "about" ? "pinkk" : ""
          }`}
          to="/about"
          onClick={() => handleNavLinkClick("about")}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default List;
