import React, { useEffect, useState } from "react";
import "./Backtop.scss";
import { HiArrowSmUp } from "react-icons/hi";
const Backtop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className={`back-to-top ${showButton ? "active" : ""}`}
      onClick={handleClick}
    >
      <i>
        <HiArrowSmUp />
      </i>
    </button>
  );
};

export default Backtop;
