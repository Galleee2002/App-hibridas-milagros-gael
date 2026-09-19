import { Router } from "express"
import * as chefController from "../controllers/chef.controller.js"

const router = Router()

router.get("/api/chefs", chefController.getChefs)
router.post("/api/chefs", chefController.saveChef)
router.get("/api/chefs/:id/menu", chefController.getPlatosByChef)

export default router
