import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(password, email);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
  }

  return (
    <section className="login">
      <div className="register__wrapper">
        <form
          className="register__form"
          name="registerForm"
          onSubmit={handleSubmit}
        >
          <h2 className="register__title">Вход</h2>
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
            Войти
          </button>
        </form>
      </div>
    </section>
  );
}
