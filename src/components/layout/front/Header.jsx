import React, { useEffect, useState } from "react";
import sideImg from "../../../assets/img/profile-img.jpg";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillSkype,
  AiOutlineHome,
  AiOutlineFile,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
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
  const [activeLink, setActiveLink] = useState("");

  function handleClick(event) {
    console.log(event);
    event.preventDefault();
    setActiveLink(event.target.getAttribute("href"));
  }
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
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <i>
                  <AiOutlineTwitter />
                </i>
              </a>
              <a href="#" className="facebook">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#" className="instagram">
                <i>
                  <AiOutlineInstagram />
                </i>
              </a>
              <a href="#" className="google-plus">
                <i>
                  <AiFillSkype />
                </i>
              </a>
              <a href="#" className="linkedin">
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a className={hash === "" ? "active" : ""} href="">
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
