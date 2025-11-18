import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Briefcase, User } from "lucide-react";
import "../Css/List.css";

const List = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const navListRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("home");
    else if (path === "/works") setActiveLink("works");
    else if (path === "/about") setActiveLink("about");
  }, [location]);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Move indicator smoothly based on active link
  useEffect(() => {
    const moveIndicator = () => {
      if (!navListRef.current || !indicatorRef.current || !activeLink) return;

      const activeElement = navListRef.current.querySelector(".nav-active");
      if (!activeElement) return;

      const listRect = navListRef.current.getBoundingClientRect();
      const iconElement = activeElement.querySelector(".nav-icon");
      const iconRect = iconElement
        ? iconElement.getBoundingClientRect()
        : activeElement.getBoundingClientRect();

      const lightWidth = 40; // Your indicator width
      const iconCenterRelToList =
        iconRect.left - listRect.left + iconRect.width / 2;
      const newLeft = iconCenterRelToList - lightWidth / 2;

      indicatorRef.current.style.width = `${lightWidth}px`;
      indicatorRef.current.style.left = `${newLeft}px`;
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(moveIndicator, 50);

    // Recalculate on resize
    const handleResize = () => {
      clearTimeout(timer);
      setTimeout(moveIndicator, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeLink]);

  const navItems = [
    {
      id: "home",
      path: "/",
      label: "Home",
      icon: <Home size={24} />,
    },
    {
      id: "works",
      path: "/works",
      label: "Works",
      icon: <Briefcase size={24} />,
    },
    {
      id: "about",
      path: "/about",
      label: "About",
      icon: <User size={24} />,
    },
  ];

  return (
    <div className="modern-navbar">
      <nav className="nav-container" ref={navListRef}>
        <div className="nav-background"></div>
        <div className="nav-indicator-line" ref={indicatorRef}></div>
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            exact={item.path === "/"}
            to={item.path}
            className={`nav-item ${activeLink === item.id ? "nav-active" : ""}`}
            onClick={() => handleNavLinkClick(item.id)}
          >
            <div className="nav-icon">{item.icon}</div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default List;
