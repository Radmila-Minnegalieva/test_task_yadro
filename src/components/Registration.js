import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import necessary from "../images/necessary.svg";
import error from "../images/error.svg";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);

  const [errorCount, setErrorCount] = useState(0);

  const handleValidation = (e) => {
    const isEmailValid = email !== "";
    const isLastNameValid = lastName !== "";
    const isFirstNameValid = firstName !== "";

    setEmailValid(isEmailValid);
    setLastNameValid(isLastNameValid);
    setFirstNameValid(isFirstNameValid);

    const errors = [!isEmailValid, !isLastNameValid, !isFirstNameValid];
    const count = errors.filter((error) => error).length;
    setErrorCount(count);

    if (count > 0) {
      e.preventDefault();
    } else {
      window.location.href = "/user";
    }
  };

  const getImgSrc = (isValid) => {
    return isValid ? necessary : error;
  };

  useEffect(() => {
    const formFields = document.querySelector(".form__fields");
    if (formFields) {
      formFields.style.height = `${545 + errorCount * 30}px`;
    }
  }, [errorCount]);

  return (
    <div className="form__fields">
      <div className="form__fields_auth">
        <p>Данные для авторизации</p>
        <div className="form__fields_auth_email">
          <p>Электронная почта</p>
          <form className={!emailValid ? "invalid" : ""}>
            <input
              type="email"
              placeholder="Ваша почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="form__fields_auth_img">
              <img src={getImgSrc(emailValid)} alt="img" />
            </div>
          </form>
          {!emailValid && (
            <p style={{ fontSize: "14px", fontWeight: 300, color: "#E93D5C" }}>
              Пустое поле
            </p>
          )}
        </div>
      </div>
      <div className="form__fields_auth" id="form__fields_auth_other">
        <p>Прочие данные</p>
        <div
          className="form__fields_auth_email"
          id="form__fields_auth_other_email"
        >
          <p>Фамилия</p>
          <form className={!lastNameValid ? "invalid" : ""}>
            <input
              type="text"
              placeholder="Ваша фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className="form__fields_auth_img">
              <img src={getImgSrc(lastNameValid)} alt="img" />
            </div>
          </form>
          {!lastNameValid && (
            <p style={{ fontSize: "14px", fontWeight: 300, color: "#E93D5C" }}>
              Пустое поле
            </p>
          )}
        </div>
        <div
          className="form__fields_auth_email"
          id="form__fields_auth_other_name"
        >
          <p>Имя</p>
          <form className={!firstNameValid ? "invalid" : ""}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div className="form__fields_auth_img">
              <img src={getImgSrc(firstNameValid)} alt="img" />
            </div>
          </form>
          {!firstNameValid && (
            <p style={{ fontSize: "14px", fontWeight: 300, color: "#E93D5C" }}>
              Пустое поле
            </p>
          )}
        </div>
      </div>
      <NavLink to="#" className="form__fields_send" onClick={handleValidation}>
        Отправить
      </NavLink>
      <p className="form__p">* поле, обязательное для заполнения</p>
    </div>
  );
};

export default Registration;
