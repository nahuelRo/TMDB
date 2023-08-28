import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class FavoriteMovie extends Model {}

FavoriteMovie.init(
  {
    tmdbId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "favoriteMovie" }
);

export default FavoriteMovie;
