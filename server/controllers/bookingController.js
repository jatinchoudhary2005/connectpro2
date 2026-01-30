import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const booking = await Booking.create({
    mentor: req.body.mentorId,
    mentee: req.user._id,
    price: req.body.price,
  });
  res.json(booking);
};
