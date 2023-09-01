import express from "express";

import usersControllers from "../controllers/usersControllers.js";

const router = express.Router();

// Get All
router.get("/:userId/favorites", usersControllers.getFavoriteAll);

// Create one
router.post("/:userId/favorites/:movieId", usersControllers.createFavorite);

// Delete one
router.delete("/:userId/favorites/:movieId", usersControllers.deleteFavorite);

export default router;
