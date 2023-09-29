import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(password, email);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }


  return (
    <section className="register">
      <div className="register__wrapper">
        <form className="register__form" name="register" onSubmit={handleSubmit}>
          <h2 className="register__title">Регистрация</h2>
          <div className="register__container">
            <input
              className="register__input register__input_type_email"
              id="register__email"
              name="email"
              type="email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              value={email}
              required={true}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="register__container">
            <input
              className="register__input register__input_type_password"
              id="popup__password"
              name="password"
              type="password"
              placeholder="Пароль"
              minLength="8"
              maxLength="16"
              value={password}
              required={true}
              onChange={handleChangePassword}
            />
          </div>
          <button
            type="submit"
            className="register__submit-button register__submit-button_valid"
          >
            Зарегистрироваться
          </button>
          <Link to="/sign-in" className="register__way">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
    </section>
  );
}
