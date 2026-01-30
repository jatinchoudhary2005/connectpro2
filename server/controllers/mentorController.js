import MentorProfile from "../models/MentorProfile.js";

export const verifyProfile = async (req, res) => {
  await MentorProfile.create({ user: req.user._id });
  res.json({ msg: "Verification sent" });
};

export const getMentors = async (req, res) => {
  const mentors = await MentorProfile.find().populate("user");
  res.json(mentors);
};
