import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reportedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reason: String,
  description: String,
});

export default mongoose.model("Report", reportSchema);
