import { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    if (window.pageYOffset < 300) setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={goTop}
      className="scroll-top"
      style={{ display: isVisible ? "inline-block" : "none" }}
    >
      &uarr;
    </button>
  );
}

export default ScrollTop;
