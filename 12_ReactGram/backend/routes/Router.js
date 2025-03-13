import express from "express";
const router = express.Router();

import userRoutes from "../routes/UserRoutes.js";

router.use("/api/users", userRoutes)

// test route
router.get("/", (req, res) => {
  res.send("API Working!");
});

export default router;
