import { Router } from "express";

import { getConnection } from "../database/connection.js";

export const TestRoute = Router();

TestRoute.put("/", (req, res) => {
  const db = getConnection();
  const id = "5410953eb0e0c0ae25608277";
  const testFound = db.data.tests.find((test) => test._id === id);
  testFound.name = "asd2";

  const tests = db.data.tests.map((test) =>
    test._id === id ? testFound : test
  );

  db.data = {
    tests,
  };

  db.write();

  res.status(200).json({ msg: "cool!" });
});
