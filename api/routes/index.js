import express from "express";
import trendingRoutes from "./trending.routes.js";
import moviesRoutes from "./movies.routes.js";
import tvRoutes from "./tv.routes.js";
const routes = express.Router();

routes.use("/trending", trendingRoutes);
routes.use("/movies", moviesRoutes);
routes.use("/tv", tvRoutes);

export default routes;
