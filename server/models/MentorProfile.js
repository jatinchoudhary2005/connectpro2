import mongoose from "mongoose";

const mentorProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profession: String,
  experience: Number,
  bio: String,
  verified: { type: Boolean, default: false },
});

export default mongoose.model("MentorProfile", mentorProfileSchema);
