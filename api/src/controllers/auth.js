import { request, response } from "express";

import { getConnection } from "../database/connection.js";
import { generateToken } from "../helpers/generate-jwt.js";

export const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Missing password or email.", data: null, success: false });
  }

  const db = getConnection();

  const user = db.data.users.find((user) => user.email === email);

  if (!user || !user.isActive) {
    return res
      .status(404)
      .json({ msg: "User does not exist.", data: null, success: false });
  }

  if (user.password !== password) {
    return res
      .status(404)
      .json({ msg: "Incorrect password.", data: null, success: false });
  }

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 30 * 24 * 60 * 60 * 1000, // one month in milliseconds
  });

  // remove data we don't want to send, the data we want is in "userData"
  const { guid, isActive, password: pswd, ...userData } = user;

  res.status(200).json({ msg: "", data: { user: userData }, success: true });
};

export const logout = (req = request, res = response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.status(200).json({ msg: "", data: null, success: true });
};
