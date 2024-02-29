import { Router } from "express";

import { userInformation } from "../controllers/user.js";

export const UserRoute = Router();

UserRoute.get("/:id", [], userInformation);
