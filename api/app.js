import { config } from "dotenv";

config();

import server from "./src/server.js";

const port = process.env.PORT;

server.listen(port, () => {
  console.log("listening on port:", port);
});
