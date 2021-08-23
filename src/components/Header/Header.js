import "./Header.css";
import logo from "../../images/header__logo.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="https://www.datreg.com/">
        <img src={logo} className="header__logo" alt="logo" />
      </a>
      <ul className="header__links">
        <li className="header__link">
          <a className="header__link_item" href="https://www.datreg.com/auth/login">Вход</a>
        </li>
        <li className="header__link">
          <a className="header__link_item" href="https://www.datreg.com/auth/registration">Регистрация</a>
        </li>
      </ul>
    </header>
  );
}
