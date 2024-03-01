import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  if (!process.env.JWT_ACCESS_SECRET_SEED) {
    throw new Error("No Access JWT seed - check environment variable");
  }

  const payload = { uid: id };

  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET_SEED, {
    expiresIn: "30d",
  });
};
