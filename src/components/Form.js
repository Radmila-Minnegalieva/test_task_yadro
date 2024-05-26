import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Registration from "./Registration";
import AuthCode from "./AuthCode";
import active from "../images/active.svg";

const Form = () => {
  const [activeForm, setActiveForm] = useState("registration");

  return (
    <div className="form">
      <div className="form__navlinks">
        <div
          className={`form__navlinks_active ${
            activeForm === "registration" ? "active" : ""
          }`}
        >
          <NavLink
            className="form__navlinks_navlink"
            onClick={() => setActiveForm("registration")}
          >
            Регистрация
          </NavLink>
          {activeForm === "registration" && <img src={active} alt="active" />}
        </div>
        <div
          className={`form__navlinks_active ${
            activeForm === "authcode" ? "active" : ""
          }`}
        >
          <NavLink
            className="form__navlinks_navlink"
            onClick={() => setActiveForm("authcode")}
          >
            Код доступа
          </NavLink>
          {activeForm === "authcode" && <img src={active} alt="active" />}
        </div>
      </div>
      {activeForm === "registration" ? <Registration /> : <AuthCode />}
    </div>
  );
};

export default Form;
