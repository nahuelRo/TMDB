import express from "express";
const routes = express.Router();

// Search movie by name
routes.get("/:name", (req, res) => {
  res.send("search movie name");
});

// One movie by id
routes.get("/:id", (req, res) => {
  res.send("search movie id");
});

export default routes;
