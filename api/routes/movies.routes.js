import express from "express";
import moviesController from "../controllers/moviesControllers.js";

const router = express.Router();

// Get all movies
router.get("/", moviesController.getAll);

// Search movie by name
router.get("/:name", moviesController.getByName);

// One movie by id
router.get("/search/:id", moviesController.getById);

export default router;
