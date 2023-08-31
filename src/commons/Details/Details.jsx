import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.styles.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const response = await axios(
          `http://localhost:3000/api/movies/search/${id}`
        );

        const movie = await response.data;
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [id]);

  const filledStars = Math.round(movie.vote_average);

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar color="yellow" />);
  }

  return (
    <article className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
        className="movie__img"
      />

      <div className="movie__details">
        <h2 className="movie__title">{movie.title}</h2>
        <p className="movie__date">{movie.release_date}</p>

        <div className="movie__stars">{stars}</div>

        <ul className="movie__genres">
          {movie.genres?.map((genre, index) => {
            return (
              <li key={index} className="movie__genre">
                {genre.name}
              </li>
            );
          })}
        </ul>

        <p className="movie__overview">{movie.overview}</p>

        <ul className="movie__lenguages">
          {movie.spoken_languages?.map((language, index) => (
            <li key={index} className="movie__lenguage">
              {language.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MovieDetails;
