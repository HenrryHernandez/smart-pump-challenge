import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { createConnection } from "./database/connection.js";
import { AuthRoute } from "./routes/auth.js";
import { TestRoute } from "./routes/test.js";

export class Server {
  app;
  port;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.createDBConnection();
    this.middlewares();
    this.routes();
  }

  createDBConnection() {
    createConnection();
  }

  middlewares() {
    this.app.use(
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
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use("/api/auth", AuthRoute);
    this.app.use("/api/test", TestRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("listening on port:", this.port);
    });
  }
}
