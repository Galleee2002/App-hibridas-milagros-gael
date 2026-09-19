import { Router } from "express"
import * as menuController from "../controllers/menu.controller.js"

const router = Router()

router.get("/api/menu", menuController.getMenuItems)
router.get("/api/menu/:id", menuController.getMenuItemById)
router.post("/api/menu", menuController.saveMenuItem)
router.put("/api/menu/:id", menuController.replaceMenuItem)
router.patch("/api/menu/:id", menuController.updateMenuItem)
router.delete("/api/menu/:id", menuController.deleteMenuItem)

export default router
