import React from "react";
import { NavLink } from "react-router-dom";
import necessary from "../images/necessary.svg";

const Registration = () => {
  return (
    <div className="form__fields">
      <div className="form__fields_auth">
        <p>Данные для авторизации</p>
        <div className="form__fields_auth_email">
          <p>Электронная почта</p>
          <form>
            <input type="email" placeholder="Ваша почта" required></input>
            <div className="form__fields_auth_img">
              <img src={necessary} alt="necessary"></img>
            </div>
          </form>
        </div>
      </div>
      <div className="form__fields_auth" id='form__fields_auth_other'>
        <p>Прочие данные</p>
        <div className="form__fields_auth_email">
          <p>Фамилия</p>
          <form>
            <input type="email" placeholder="Ваша фамилия" required></input>
            <div className="form__fields_auth_img">
              <img src={necessary} alt="necessary"></img>
            </div>
          </form>
        </div>
        <div className="form__fields_auth_email">
          <p>Имя</p>
          <form>
            <input type="email" placeholder="Ваше имя" required></input>
            <div className="form__fields_auth_img">
              <img src={necessary} alt="necessary"></img>
            </div>
          </form>
        </div>
      </div>
      <NavLink className="form__fields_send">Отправить</NavLink>
      <p className="form__p">* поле, обязательное для заполнения</p>
    </div>
  );
};

export default Registration;
