import jwt from "jsonwebtoken";

import { getConnection } from "../database/connection.js";

export const validateToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({
      success: false,
      data: null,
      msg: "Token not found.",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_ACCESS_SECRET_SEED);

    const db = getConnection();

    const user = db.data.users.find((user) => user._id === uid);

    if (!user || !user.isActive) {
      return res
        .status(404)
        .json({ msg: "User not found", data: null, success: false });
    }

    req.body.id = uid;
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: null,
      msg: "Not a valid token",
    });
  }

  next();
};
