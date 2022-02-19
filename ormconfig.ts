import { SnakeNamingStrategy } from "./src/common/snake-naming.strategy";
import * as dotenv from "dotenv";

dotenv.config({
 path: `.${process.env.NODE_ENV}.env`,
});
console.log(process.env.DB_HOST, "<=============");
module.exports = {
 entities: ["src/infrastructure/database/**/*.entity{.ts,.js}"],
 migrationsTableName: "migration",
 migrations: ["src/infrastructure/database/migration/*{.ts,.js}"],
 cli: {
  migrationsDir: "src/infrastructure/database/migration",
 },
 keepConnectionAlive: true,
 type: "mysql",
 host: process.env.DB_HOST,
 port: +process.env.DB_PORT,
 username: process.env.DB_USERNAME,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_DATABASE,
 migrationsRun: true,
 synchronize:false,
 namingStrategy: new SnakeNamingStrategy()
};
