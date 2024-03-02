import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { createConnection } from "./database/connection.js";
import { AuthRoute } from "./routes/auth.js";
import { UserRoute } from "./routes/user.js";
import { TestRoute } from "./routes/routett.js";

const app = express();

// DB connection
createConnection();

// middlewares
app.use(
  cors({
    origin: (origin = "", cb) => {
      const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
      ];
      if (allowedOrigins.includes(origin) || !origin) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/test", TestRoute);

export default app;
