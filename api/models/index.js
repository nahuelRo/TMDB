import User from "./User.js";
import Favorite from "./Favorite.js";

// One to many
User.belongsToMany(Favorite, {
  through: "user_favorite",
  foreignKey: "userId",
});
Favorite.belongsToMany(User, {
  through: "user_favorite",
  foreignKey: "favoriteId",
});

export default { User, Favorite };
