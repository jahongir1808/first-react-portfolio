import React from "react";
import {
  About,
  Backtop,
  Contact,
  Facts,
  Footer,
  Header,
  Hero,
  Portfolio,
  Resume,
  Services,
  Testemonials,
} from "../../components/layout/front";
import { NavLink } from "react-router-dom";
import { FiLogIn, FiHome } from "react-icons/fi";
import { FaRegRegistered } from "react-icons/fa";
import Links from "./Links";

const HomeP = () => {
  return (
    <>
      <Links />
      <Backtop />
      <Header />
      <Hero />
      <About />
      <Facts />
      <Resume />
      <Portfolio />
      <Services />
      <Testemonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeP;
