import express from "express";
import routes from "./routes/index.js";
import models from "./models/index.js";
import db from "./config/db.js";

const app = express();

app.use("/api", routes);

const PORT = 3000;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
