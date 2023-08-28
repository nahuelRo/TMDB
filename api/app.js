import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("TMDB");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
