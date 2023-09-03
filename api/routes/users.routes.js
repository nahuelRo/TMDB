import express from "express";

import usersControllers from "../controllers/usersControllers.js";

import authCheck from "../middleware/auth.js";

const router = express.Router();

// Get all favorites
router.get("/:userId/favorites", authCheck, usersControllers.getFavoriteAll);

// Create one favorite
router.post(
  "/:userId/favorites/:movieId",
  authCheck,
  usersControllers.createFavorite
);

// Delete one favorite
router.delete(
  "/:userId/favorites/:movieId",
  authCheck,
  usersControllers.deleteFavorite
);

export default router;
