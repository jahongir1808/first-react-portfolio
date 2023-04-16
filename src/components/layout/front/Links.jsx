import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Links;
