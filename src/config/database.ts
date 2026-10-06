

import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  // ssl: true,

  entities: ["src/models/*.entity.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;