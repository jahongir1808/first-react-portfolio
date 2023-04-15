import React from "react";
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
import { NavLink } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={sideImg} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light">
              <a href="index.html">Alex Smith</a>
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
                <NavLink href="#hero" className="nav-link scrollto active">
                  <i>
                    <AiOutlineHome />
                  </i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink href="#about" className="nav-link scrollto">
                  <i>
                    <BiUser />
                  </i>
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink href="#resume" className="nav-link scrollto">
                  <i>
                    <AiOutlineFile />
                  </i>
                  <span>Resume</span>
                </NavLink>
              </li>
              <li>
                <NavLink href="#portfolio" className="nav-link scrollto">
                  <i>
                    <TbNotebook />
                  </i>
                  <span>Portfolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink href="#services" className="nav-link scrollto">
                  <i>
                    <BiServer />
                  </i>
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink href="#contact" className="nav-link scrollto">
                  <i>
                    <AiOutlineMail />
                  </i>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
