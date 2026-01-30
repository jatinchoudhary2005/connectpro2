const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    // authMiddleware ke baad hi chalega
    if (!req.user) {
      return res.status(401).json({ msg: "Not authenticated" });
    }

    // role match check
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        msg: "Access denied: insufficient permissions",
      });
    }

    next();
  };
};

export default roleMiddleware;
