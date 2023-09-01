import Models from "../models/index.js";
import sequelize from "../config/db.js";

const getFavoriteAll = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Models.User.findByPk(userId);

    if (!user) {
      res.sendStatus(404);
    }

    const favoriteMovies = await Models.Favorite.findAll({
      include: [
        {
          model: Models.User,
          where: { id: userId },
          through: { attributes: [] },
        },
      ],
    });

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
    // Verifica si el usuario y la película existen
    const user = await Models.User.findByPk(userId);
    const favorite = await Models.Favorite.findOne({
      where: { tmdbId: movieId },
    });

    if (!user || !favorite) {
      return res.sendStatus(404);
    }

    // Elimina la relación entre el usuario y la película en la tabla intermedia 'user_movie'
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
