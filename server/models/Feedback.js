import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
  rating: Number,
  comment: String,
});

export default mongoose.model("Feedback", feedbackSchema);
