import express from "express";
const routes = express.Router();

// Trending All movies & tv
routes.get("/all", (req, res) => {
  res.send("Trending all");
});

export default routes;
