import { FaSearch } from "react-icons/fa";
import "./header.style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__search">
        <input className="header__input" type="text" id="search" />
        <label className="header__container-icon" htmlFor="search">
          <FaSearch className="header__icon" color="white" />
        </label>
      </div>

      <div className="header__register">
        <a className="header__link" href="#">
          Login
        </a>
        <a className="header__link" href="#">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
