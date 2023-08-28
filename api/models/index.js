import User from "./User.js";
import Favorite from "./Favorite.js";

// One to many
User.hasMany(Favorite, { onDelete: "CASCADE" });

export default { User, Favorite };
