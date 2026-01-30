import express from "express";
import { signup, login, setRole } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// 👉 ROLE SELECTION ROUTE
router.post("/role", protect, setRole);

export default router;
