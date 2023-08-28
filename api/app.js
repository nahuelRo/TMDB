import express from "express";
import models from "./models/index.js";
import db from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
  res.send("TMDB");
});

const PORT = 3000;

db.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
