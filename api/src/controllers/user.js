import { request, response } from "express";

import { getConnection } from "../database/connection.js";

export const userInformation = async (req = request, res = response) => {
  const { id } = req.body;

  const db = getConnection();

  const user = db.data.users.find((user) => user._id === id);

  const { guid, isActive, balance, password: pswd, ...userData } = user;

  res.status(200).json({ msg: "", data: { user: userData }, success: true });
};

export const updateUserInformation = async (req = request, res = response) => {
  const body = req.body;
  const { id } = body;

  // here we are removing the data the user (in my opinion) should not be
  // able to change and leaving the data allowed to change in "...data"
  const { _id, guid, isActive, email, balance, ...data } = body;

  const db = getConnection();

  const user = db.data.users.find((user) => user._id === id);

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
