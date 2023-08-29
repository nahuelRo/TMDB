import { FaHome, FaYoutube, FaHeart } from "react-icons/fa";
import "./aside.style.css";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container-logo">
        <h2 className="aside__logo">TMDB</h2>
      </div>
      <nav className="aside__nav">
        <div className="aside__container-links">
          <FaHome color="white" />
          <a className="aside__link" href="#">
            Home
          </a>
        </div>
        <div className="aside__container-links">
          <FaYoutube color="white" />
          <a className="aside__link" href="#">
            Movies
          </a>
        </div>
        <div className="aside__container-links">
          <FaHeart color="white" />
          <a className="aside__link" href="#">
            Home
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
