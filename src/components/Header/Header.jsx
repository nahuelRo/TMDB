import { FaSearch } from "react-icons/fa";
import "./header.style.css";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearchMovies }) => {
  const search = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios(`http://localhost:3000/api/movies/${search.value}`).then(
      ({ data }) => {
        console.log(data);
        setSearchMovies(data.results);
        navigate("/search");
      }
    );

    search.onChange("");
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit} className="header__search">
        <input
          {...search}
          className="header__input"
          type="text"
          id="search"
          placeholder="Search movie ..."
        />
        <label className="header__container-icon" htmlFor="search">
          <FaSearch className="header__icon" size={20} />
        </label>
      </form>

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
