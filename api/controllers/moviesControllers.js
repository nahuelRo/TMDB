import moviesServices from "../services/moviesServices.js";

const getAll = async (req, res) => {
  const movies = await moviesServices.getAllMovies();
  res.json(movies);
};

const getByName = async (req, res) => {
  const { name } = req.params;
  const movie = await moviesServices.getByName(name);
  res.json(movie);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const movie = await moviesServices.getById(id);

  res.json(movie);
};

export default { getAll, getByName, getById };
