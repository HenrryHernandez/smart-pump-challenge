import { response } from "express";

import { getConnection } from "../database/connection.js";

export const login = async (req, res = response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Missing password or email", data: null, success: false });
  }

  const db = getConnection();

  const user = db.data.users.find((user) => user.email === email);

  if (!user) {
    return res
      .status(404)
      .json({ msg: "User does not exist", data: null, success: false });
  }

  res.status(200).json({ msg: "", data: user, success: true });
};
