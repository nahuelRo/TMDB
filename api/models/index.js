import User from "./User.js";
import Favorite from "./Favorite.js";

// One to many
User.belongsToMany(Favorite, {
  through: "user_favorite",
});
Favorite.belongsToMany(User, {
  through: "user_favorite",
});

export default { User, Favorite };
