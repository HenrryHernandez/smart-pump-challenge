import { config } from "dotenv";

config();

import { Server } from "./src/server.js";

const server = new Server();

server.listen();
