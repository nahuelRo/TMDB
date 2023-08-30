import express from "express";
import authController from "../controllers/authControllers.js";
import checkAuth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/secret", checkAuth, authController.secret);

router.post("/logout", authController.logout);

export default router;
