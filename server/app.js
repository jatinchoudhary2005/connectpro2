import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/mentor", mentorRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/report", reportRoutes);

export default app;
