import express from "express";
const router = express.Router();

// controller
import { insertPhoto } from "../controllers/PhotoController.js";

// Middlewares
import { photInsertValidation } from "../middlewares/photoValidation.js";
import authGuard from "../middlewares/authGuard.js";
import validate from "../middlewares/handleValidation.js";
import { imageUpload } from "../middlewares/imageUpload.js";

// Routes
const photoRoutes = router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photInsertValidation(),
  validate,
  insertPhoto
);

export default photoRoutes;
