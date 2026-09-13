import { Router } from "express"
import { home } from "../controllers/homeController.js"
import * as menuController from "../controllers/menuController.js"

const router = Router()

router.get("/", home)
router.get("/menu", menuController.getMenu)
router.get("/menu/nuevo", menuController.newItemForm)
router.get("/menu/editar/:id", menuController.editItemForm)
router.post("/menu/editar/:id", menuController.editItem)
router.get("/menu/borrar/:id", menuController.deleteItemForm)
router.post("/menu/borrar/:id", menuController.deleteItem)
router.post("/menu/nuevo", menuController.saveItem)
router.get("/menu/:id", menuController.getItemById)
router.get("/:section", menuController.getSection)

export default router
