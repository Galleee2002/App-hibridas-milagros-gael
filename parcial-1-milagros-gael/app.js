import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./src/config/db.js";
import routes from "./src/routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(routes);

async function start() {
  await connectDB();
  app.listen(3333, () => console.log("Terminal escuchando el 3333..."));
}
start();
