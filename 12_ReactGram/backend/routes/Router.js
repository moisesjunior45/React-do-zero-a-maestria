import express from "express";
const router = express.Router();

import userRoutes from "../routes/UserRoutes.js";
import PhotoRoutes from "../routes/PhotoRoutes.js";

router.use("/api/users", userRoutes)
router.use("/api/photos", PhotoRoutes);

// test route
router.get("/", (req, res) => {
  res.send("API Working!");
});

export default router;
