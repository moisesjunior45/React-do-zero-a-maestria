import express from "express";
const router = express.Router();

// Controller
import {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
} from "../controllers/UserController.js";

// Middlewares
import validate from "../middlewares/handleValidation.js";
import {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
} from "../middlewares/userValidations.js";
import authGuard from "../middlewares/authGuard.js";
import { imageUpload } from "../middlewares/imageUpload.js";

// Routes
const userRoutes = router.post(
  "/register",
  userCreateValidation(),
  validate,
  register
);

router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
router.get("/:id", getUserById);

export default userRoutes;
