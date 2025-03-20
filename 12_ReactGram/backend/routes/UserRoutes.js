import express from "express";
const router = express.Router();

// Controller
import { register, login, getCurrentUser } from "../controllers/UserController.js";

// Middlewares
import validate from "../middlewares/handleValidation.js";
import {
  userCreateValidation,
  loginValidation,
} from "../middlewares/userValidations.js";
import authGuard from "../middlewares/authGuard.js";

// Routes
const userRoutes = router.post(
  "/register",
  userCreateValidation(),
  validate,
  register
);

router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);

export default userRoutes;
