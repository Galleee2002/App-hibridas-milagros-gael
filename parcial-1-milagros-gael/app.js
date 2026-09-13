import express from "express";
import { connectDB } from "./src/config/db.js";
import routes from "./src/routes/routes.js";

const app = express();

app.use(routes);

async function start() {
  await connectDB();
  app.listen(3333, () => console.log("Terminal escuchando el 3333..."));
}
start();
