import React from "react";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink>
        <img src={logo} alt="logo"></img>
      </NavLink>
    </div>
  );
};

export default Header;
