import User from "./User.js";
import FavoriteMovie from "./FavoritesMovie.js";

User.hasMany(FavoriteMovie, { onDelete: "CASCADE" });

export default { User, FavoriteMovie };
