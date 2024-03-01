import { Router } from "express";

import { updateUserInformation, userInformation } from "../controllers/user.js";
import { validateToken } from "../middlewares/validate-token.js";

export const UserRoute = Router();

UserRoute.get("/", [validateToken], userInformation);
UserRoute.put("/:id", [], updateUserInformation);
