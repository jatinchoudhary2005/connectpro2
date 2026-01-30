import Report from "../models/Report.js";

export const reportUser = async (req, res) => {
  await Report.create({
    reportedBy: req.user._id,
    ...req.body,
  });
  res.json({ msg: "Report submitted" });
};
