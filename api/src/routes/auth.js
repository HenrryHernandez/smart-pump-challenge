import { Router } from "express";

import { login } from "../controllers/auth.js";

export const AuthRoute = Router();

AuthRoute.post("/login", [], login);
