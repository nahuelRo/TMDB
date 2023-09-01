import { FaSearch } from "react-icons/fa";
import "./header.style.css";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = ({ setSearchMovies, setFavoritesMovies }) => {
  const search = useInput();
  const navigate = useNavigate();

  const { toggleAuth, user, isAuthenticated } = useContext(AuthContext);

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

  const handleClick = () => {
    axios
      .post("http://localhost:3000/api/auth/logout", null, {
        withCredentials: true,
      })
      .then(() => {
        toggleAuth();
        setFavoritesMovies([]);
        navigate("/");
      })
      .catch((error) => console.log(error));
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
        {isAuthenticated ? (
          <>
            <p style={{ color: "white" }}>Welcome {user.name}</p>
            <button onClick={handleClick}>Log out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="header__link">
              Login
            </Link>
            <Link to="/register" className="header__link">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
