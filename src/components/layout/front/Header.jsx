import React, { useEffect, useState } from "react";
import sideImg from "../../../assets/img/profile-img.jpg";
import { AiOutlineHome, AiOutlineFile, AiOutlineMail } from "react-icons/ai";
import { BiUser, BiServer } from "react-icons/bi";
import { TbNotebook } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  let { hash } = useLocation();
  console.log(hash);
  useEffect(() => {
    if (!hash) {
      hash = "";
    }
  }, [hash]);
  const showNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <div
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-delay="0"
      className={activeNav ? "mobile-nav-active" : ""}
    >
      <div
        id="toggle"
        className={activeNav ? "active" : ""}
        onClick={showNav}
      ></div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={sideImg} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Axtamov Jahongir</a>
            </h1>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a
                  className={
                    hash === "" ? "active" : hash === "#hero" ? "active" : ""
                  }
                  href="#hero"
                >
                  <i>
                    <AiOutlineHome />
                  </i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a className={hash === "#about" ? "active" : ""} href="#about">
                  <i>
                    <BiUser />
                  </i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  className={hash === "#resume" ? "active" : ""}
                  href="#resume"
                >
                  <i>
                    <AiOutlineFile />
                  </i>
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  className={hash === "#portfolio" ? "active" : ""}
                  href="#portfolio"
                >
                  <i>
                    <TbNotebook />
                  </i>
                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  className={hash === "#services" ? "active" : ""}
                  href="#services"
                >
                  <i>
                    <BiServer />
                  </i>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  className={hash === "#contact" ? "active" : ""}
                  href="#contact"
                >
                  <i>
                    <AiOutlineMail />
                  </i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
