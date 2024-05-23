import React from "react";
import { NavLink } from "react-router-dom";

const AuthCode = () => {
  return (
    <div className="form__fields" id='form__fields_authcode'>
      <div className="form__fields_auth">
        <div className="form__fields_auth_email">
          <p>Укажите электронную почту для восстановления кода</p>
          <form>
            <input type="email" placeholder="mail@mail.com" required></input>
          </form>
        </div>
      </div>
      <NavLink className="form__fields_send" id='form__fields_send_authcode'>Отправить</NavLink>
    </div>
  );
};

export default AuthCode;