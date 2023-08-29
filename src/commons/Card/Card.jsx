import "./card.style.css";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="card__content">
        <img
          className="card__image"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <h2 className="card__title">{movie.title}</h2>
      </div>
    </div>
  );
};

export default Card;
