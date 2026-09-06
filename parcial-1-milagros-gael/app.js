
const express = require("express");
const app = express();
const { connectDB } = require("./src/config/db.js");
const routes = require("./src/routes/routes");

app.use(routes);

async function start() {
    await connectDB();
    app.listen(3333, () => console.log("OK en :3333"));
  }
  start();

