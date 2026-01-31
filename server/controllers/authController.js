import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// SIGNUP
export const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ msg: "User created" });
};

// LOGIN
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ msg: "User not found" });

  res.json({
    token: generateToken(user._id),
    user,
  });
};

// ADD THIS (ROLE SELECTION)
export const setRole = async (req, res) => {
  const { role } = req.body;

  if (!role) {
    return res.status(400).json({ msg: "Role is required" });
  }

  const user = await User.findById(req.user._id);
  user.role = role;
  await user.save();

  res.json({
    msg: "Role updated successfully",
    user,
  });
};
