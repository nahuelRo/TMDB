import express from "express";

const router = express.Router();

// Register
router.post("/register", (req, res) => {});

// Login
router.post("/login", (req, res) => {});

// Get All
router.get("/users/:userId/favorites", (req, res) => {});

// Create one
router.post("/users/:userId/favorites", (req, res) => {});

// Delete one
router.delete("/users/:userId/favorites", (req, res) => {});

export default router;
