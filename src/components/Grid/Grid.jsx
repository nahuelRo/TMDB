import Card from "../../commons/Card/Card";
import "./grid.styles.css";

const Grid = ({ movies }) => {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Grid;
