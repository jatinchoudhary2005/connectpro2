import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["mentor", "mentee"] },
  verificationStatus: {
    type: String,
    default: "not_verified",
  },
});

export default mongoose.model("User", userSchema);
