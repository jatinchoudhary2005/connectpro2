import Feedback from "../models/Feedback.js";

export const giveFeedback = async (req, res) => {
  const feedback = await Feedback.create(req.body);
  res.json(feedback);
};
