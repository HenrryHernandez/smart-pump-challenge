import { Router } from "express";

import { login, logout } from "../controllers/auth.js";

export const AuthRoute = Router();

AuthRoute.post("/login", [], login);
AuthRoute.get("/logout", [], logout);
