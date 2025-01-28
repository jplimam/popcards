import express from "express";
import cors from "cors";
import routes from "./routes.js";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";

config();

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

(async function mongo() {
  const mongoConnection = await Mongo.connect({
    mongoConnectionString: process.env.MONGO_CS,
    mongoDbName: process.env.MONGO_DB_NAME,
  });
  console.log(mongoConnection);
})();

export default new App().server;
