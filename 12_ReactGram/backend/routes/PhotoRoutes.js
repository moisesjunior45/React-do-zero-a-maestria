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
  commentPhoto,
  searchPhotos,
  unlikePhoto,
} from "../controllers/PhotoController.js";

// Middlewares
import {
  commentValidation,
  photInsertValidation,
  photoUpdateValidation,
} from "../middlewares/photoValidation.js";
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
router.get("/search", authGuard, searchPhotos);
router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put("/unlike/:id", authGuard, unlikePhoto);
router.put(
  "/comment/:id",
  authGuard,
  commentValidation(),
  validate,
  commentPhoto
);

export default photoRoutes;
