import Models from "../models/index.js";
import sequelize from "../config/db.js";
import axios from "axios";

const headersConfig = {
  Accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjlkMGZlNmFlZjE1ZDE2MGQ5Y2Y4YWJkN2MzNDhmOSIsInN1YiI6IjY0ZWM5N2M5YzYxM2NlMDBlYWFhMGJlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._yPF8Sc_KiDZCZ_RuJ0P6rjT3mnGD24gQI8KE_SfdEs",
};

const getFavoriteAll = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await Models.User.findByPk(userId);

    if (!user) {
      res.sendStatus(404);
      return;
    }

    const favoriteMovies = await user.getFavorites();

    const tmdbIds = favoriteMovies.map((favorite) => favorite.tmdbId);

    const movieDetailsPromises = tmdbIds.map(async (tmdbId) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${tmdbId}`,
          {
            headers: headersConfig,
          }
        );

        return response.data;
      } catch (error) {
        console.error(
          `Error al obtener detalles de la película con tmdbId ${tmdbId}:`,
          error
        );
        return null;
      }
    });

    const movieDetails = await Promise.all(movieDetailsPromises);

    const validMovieDetails = movieDetails.filter((movie) => movie !== null);

    res.status(200).json(validMovieDetails);

    res.status(200).json(favoriteMovies);
  } catch (error) {
    res.status(500);
  }
};

const createFavorite = async (req, res) => {
  const { userId, movieId } = req.params;

  try {
    const user = await Models.User.findByPk(userId);

    if (!user) {
      res.sendStatus(404);
    }

    let favorite = await Models.Favorite.findOne({
      where: {
        tmdbId: movieId,
      },
    });

    if (!favorite) {
      favorite = await Models.Favorite.create({
        tmdbId: movieId,
      });
    }

    await user.addFavorite(favorite);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteFavorite = async (req, res) => {
  const { userId, movieId } = req.params;

  try {
    const user = await Models.User.findByPk(userId);
    const favorite = await Models.Favorite.findOne({
      where: { tmdbId: movieId },
    });

    if (!user || !favorite) {
      return res.sendStatus(404);
    }

    await sequelize.transaction(async (t) => {
      await user.removeFavorite(favorite, { transaction: t });
    });

    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
};

export default {
  getFavoriteAll,
  createFavorite,
  deleteFavorite,
};
