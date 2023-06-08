import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Adjust the delay as needed
    };

    scrollToTop();
  }, [pathname]);

  return null;
}
