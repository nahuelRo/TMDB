import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index.js";

import models from "./models/index.js";
import db from "./config/db.js";
dotenv.config();

// Initial app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// Api
app.use("/api", routes);

// PORT
const PORT = 3000;

// Sync & Server listening
db.sync({ force: false }).then(() => {
  console.log("Db connected");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
