import { Link, useLocation } from "react-router-dom";
import logo from "../../images/header-logo.svg";

export default function Header({ loggedIn, email, exit }) {
  const location = useLocation();
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="header__logo" />
      {loggedIn ? (
        <div className="header__wrapper">
          <p className="header__email">{email}</p>
          <Link className="header__url" to="/sign-in" onClick={exit}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link
          className="header__button"
          to={location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
        >
          {location.pathname === "/sign-in" ? "Регистрация" : "Войти"}
        </Link>
      )}
    </header>
  );
}


