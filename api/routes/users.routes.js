import express from "express";

import usersControllers from "../controllers/usersControllers.js";

const router = express.Router();

// Get All
router.get("/users/:userId/favorites", usersControllers.getFavoriteAll);

// Create one
router.post("/users/:userId/favorites", usersControllers.createFavorite);

// Delete one
router.delete("/users/:userId/favorites", usersControllers.deleteFavorite);

export default router;
