import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";

class Favorite extends Model {}

Favorite.init(
  {
    tmdbId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "favorite" }
);

export default Favorite;
