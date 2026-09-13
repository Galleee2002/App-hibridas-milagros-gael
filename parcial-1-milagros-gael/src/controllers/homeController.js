import { indexView } from "../views/index.js";
import { getAllMenuItems } from "../services/menuServices.js";

export async function home(req, res) {
  try {
    const items = await getAllMenuItems();
    res.send(indexView(items));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el menú");
  }
}
