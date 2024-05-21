import React from "react";
import { NavLink } from "react-router-dom";
import Registration from "./Registration";
import active from "../images/active.svg";

const Form = () => {
  return (
    <div className="form">
      <div className="form__navlinks">
        <div className="form__navlinks_active">
          <NavLink className="form__navlinks_navlink">Регистрация</NavLink>
          <img src={active} alt="active"></img>
        </div>
        <NavLink className="form__navlinks_navlink">Код доступа</NavLink>
      </div>
      <Registration />
    </div>
  );
};

export default Form;
