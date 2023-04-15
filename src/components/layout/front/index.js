import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Hero from "./Hero";
import Facts from "./Facts";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testemonials from "./Testemonials";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
const FrontLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Facts />
        <Resume />
        <Portfolio />
        <Services />
        <Testemonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default FrontLayout;

// <NavLink to="/">Home</NavLink>
// <NavLink to="/login">Login</NavLink>
// {children}
