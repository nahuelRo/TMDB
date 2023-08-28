import express from "express";
const router = express.Router();

// Get all movies
router.get("/", (req, res) => {});

// Search movie by name
router.get("/:name", (req, res) => {});

// One movie by id
router.get("/:id", (req, res) => {});

export default router;
