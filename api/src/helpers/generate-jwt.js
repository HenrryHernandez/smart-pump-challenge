import jwt from "jsonwebtoken";

export const generateToken = (id, email) => {
  if (!process.env.JWT_ACCESS_SECRET_SEED) {
    throw new Error("No Access JWT seed - check environment variable");
  }

  return jwt.sign({ id, email }, process.env.JWT_ACCESS_SECRET_SEED, {
    expiresIn: "30d",
  });
};
