import express from "express";

import moviesRouter from "./movies.routes.js";
import usersRouter from "./users.routes.js";

const router = express.Router();

// Movies
router.use("/movies", moviesRouter);

// Users
router.use("/users", usersRouter);

export default router;
