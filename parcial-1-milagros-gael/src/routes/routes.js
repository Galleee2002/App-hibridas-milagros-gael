import { Router } from "express";
import { home } from "../controllers/homeController.js";
import { getSection } from "../controllers/menuController.js";

const router = Router();

router.get("/", home);
router.get("/:section", getSection);

export default router;
