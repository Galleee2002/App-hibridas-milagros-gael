const { indexView } = require("../views/index.js");
const { getAllMenuItems } = require("../services/menuServices.js");

async function home(req, res) {
  try {
    const items = await getAllMenuItems();
    res.send(indexView(items));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el menú");
  }
}

module.exports = { home };