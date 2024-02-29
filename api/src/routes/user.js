import { Router } from "express";

import { updateUserInformation, userInformation } from "../controllers/user.js";

export const UserRoute = Router();

UserRoute.get("/:id", [], userInformation);
UserRoute.put("/:id", [], updateUserInformation);
