import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

import JsonDB from "./../database/test.json" assert { type: "json" };

let db;

export function createConnection() {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  const file = join(__dirname, "../database/test.json");
  db = new LowSync(new JSONFileSync(file), {});

  db.data = { ...JsonDB };
}

export const getConnection = () => db;
