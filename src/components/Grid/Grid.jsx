import { Link } from "react-router-dom";
import Card from "../../commons/Card/Card";
import "./grid.styles.css";

const Grid = ({ movies }) => {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Card movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default Grid;
