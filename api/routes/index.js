import express from "express";

import moviesRouter from "./movies.routes.js";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";

const router = express.Router();

// Movies
router.use("/movies", moviesRouter);

// Users
router.use("/users", usersRouter);

// Auth
router.use("/auth", authRouter);

export default router;
