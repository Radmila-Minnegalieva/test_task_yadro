import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import registration from "../images/registration.svg";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <NavLink to='/'>
        <img src={logo} alt="logo"></img>
      </NavLink>
      {location.pathname !== '/registration' && (
        <div className="header__registration">
          <p>Регистрация</p>
          <NavLink to='/registration'>
            <img src={registration} alt="registration"></img>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
