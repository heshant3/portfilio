import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
    },
    {
      id: "works",
      path: "/works",
      label: "Works",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
          <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
        </svg>
      ),
    },
    {
      id: "about",
      path: "/about",
      label: "About",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
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
