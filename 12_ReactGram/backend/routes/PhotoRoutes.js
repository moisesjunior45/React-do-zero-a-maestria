import express from "express";
const router = express.Router();

// controller
import {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
} from "../controllers/PhotoController.js";

// Middlewares
import { photInsertValidation, photoUpdateValidation } from "../middlewares/photoValidation.js";
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

router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);

export default photoRoutes;
