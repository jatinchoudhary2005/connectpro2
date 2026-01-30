import express from "express";
import protect from "../middleware/authMiddleware.js";
import { verifyProfile, getMentors } from "../controllers/mentorController.js";

const router = express.Router();

router.post("/verify", protect, verifyProfile);
router.get("/all", getMentors);

export default router;
