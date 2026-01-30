import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
  status: {
    type: String,
    default: "requested", // requested | accepted | completed
  },
  date: Date,
});

export default mongoose.model("Booking", bookingSchema);
