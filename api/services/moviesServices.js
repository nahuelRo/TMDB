import axios from "axios";

const headersConfig = {
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjlkMGZlNmFlZjE1ZDE2MGQ5Y2Y4YWJkN2MzNDhmOSIsInN1YiI6IjY0ZWM5N2M5YzYxM2NlMDBlYWFhMGJlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._yPF8Sc_KiDZCZ_RuJ0P6rjT3mnGD24gQI8KE_SfdEs",
};

const getAllMovies = async () => {
  const movies = await axios(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    {
      headers: headersConfig,
    }
  );

  const data = await movies.data;

  return data;
};

const getByName = async (name) => {
  const movie = await axios(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${name}`,
    { headers: headersConfig }
  );

  return movie.data;
};

const getById = async (id) => {
  const movie = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: headersConfig,
  });

  return movie.data;
};

export default { getAllMovies, getByName, getById };
