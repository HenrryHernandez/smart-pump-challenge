import { request, response } from "express";

import { getConnection } from "../database/connection.js";

export const userInformation = async (req = request, res = response) => {
  const { id } = req.params;

  const db = getConnection();

  const user = db.data.users.find((user) => user._id === id);

  if (!user) {
    return res
      .status(404)
      .json({ msg: "User not found", data: null, success: false });
  }

  res.status(200).json({ msg: "", data: user, success: true });
};

export const updateUserInformation = async (req = request, res = response) => {
  const { id } = req.params;
  const body = req.body;

  // here we are removing the data the user (in my opinion) should not be
  // able to change and leaving the data allowed to change in "...data"
  const { _id, guid, isActive, email, ...data } = body;

  const db = getConnection();

  const user = db.data.users.find((user) => user._id === id);

  if (!user) {
    return res
      .status(404)
      .json({ msg: "User not found", data: null, success: false });
  }

  const modifiedUser = { ...user, ...data };

  const users = db.data.users.map((user) =>
    user._id === id ? modifiedUser : user
  );

  db.data = {
    users,
  };

  db.write();

  res
    .status(200)
    .json({ msg: "User modified successfully!", data: null, success: true });
};
