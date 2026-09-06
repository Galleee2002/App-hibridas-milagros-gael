const express = require("express");
const app = express();

const routes = require("./src/routes/routes");

app.use(routes);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});