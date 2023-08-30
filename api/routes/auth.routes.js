import express from "express";
import authController from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", authController.register);

export default router;
