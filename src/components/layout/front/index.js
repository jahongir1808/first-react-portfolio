import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
export { default as Header } from "./Header";
export { default as Hero } from "./Hero";
export { default as About } from "./About";
export { default as Facts } from "./Facts";
export { default as Resume } from "./Resume";
export { default as Portfolio } from "./Portfolio";
export { default as Services } from "./Services";
export { default as Testemonials } from "./Testemonials";
export { default as Contact } from "./Contact";
export { default as Backtop } from "./Backtop";

const FrontLayout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <main id="main">{children}</main>
    </div>
  );
};

export default FrontLayout;

// <NavLink to="/">Home</NavLink>
// <NavLink to="/login">Login</NavLink>
// {children}
