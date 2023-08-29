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

        <div className="aside__container-links">
          <FaHeart color="white" />
          <a className="aside__link" href="#">
            Favorites
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
