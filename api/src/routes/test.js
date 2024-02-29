import Router from "express";

export const TestRoute = Router();

TestRoute.get("/", (req, res) => {
  res.status(200).json({ msg: "cool!" });
});
