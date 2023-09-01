import { FaYoutube, FaHeart } from "react-icons/fa";
import "./aside.style.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container-logo">
        <h2 className="aside__logo">TMDB</h2>
      </div>
      <nav className="aside__nav">
        <NavLink className="aside__container-links" to="/">
          <FaYoutube color="white" />
          <h3 className="aside__link">Movies</h3>
        </NavLink>

        <NavLink className="aside__container-links" to="/favorites">
          <FaHeart color="white" />
          <h3 className="aside__link">Favorites</h3>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
