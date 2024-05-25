import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import registration from "../images/registration.svg";
import exit from "../images/exit.svg";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className='header__logo'></img>
      </NavLink>
      {location.pathname !== "/registration" && location.pathname !== "/user" && (
        <div className="header__registration">
          <p>Регистрация</p>
          <NavLink to="/registration">
            <img src={registration} alt="registration"></img>
          </NavLink>
        </div>
      )}
      {location.pathname !== "/registration" && location.pathname !== "/" &&(
        <div className="header__registration">
          <p>Имя пользователя</p>
          <NavLink to="/registration">
            <img src={registration} alt="registration"></img>
          </NavLink>
          <NavLink to="/registration">
            <img
              src={exit}
              alt="exit"
              className="header__registration_exit"
            ></img>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
