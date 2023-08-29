import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.styles.css";

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

  return (
    <article className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=""
        width="50%"
        height="auto"
      />
      <div className="movie__details">
        <h2>{movie.title}</h2>
        <ul>
          {movie.genres?.map((genre, index) => {
            return <li key={index}>{genre.name}</li>;
          })}
        </ul>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>

        <ul>
          {movie.spoken_languages?.map((language, index) => (
            <li key={index}>{language.name}</li>
          ))}
        </ul>

        {movie.production_companies?.map((company, index) => {
          return (
            <figure key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                alt={company.name}
                width="50%"
                height="auto"
              />
              <figcaption>{company.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </article>
  );
};

export default MovieDetails;
