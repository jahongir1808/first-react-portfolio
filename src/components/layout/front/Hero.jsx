import React from "react";
import "./Hero.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Designer",
        "Jahongir",
        "Developer",
        "Freelancer",
        "Photographer",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <p>
          I'm <span ref={el}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
