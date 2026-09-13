import { Router } from "express";
import { home } from "../controllers/homeController.js";

const router = Router();

router.get("/", home);

router.get("/entradas", (req, res) => {
  res.send("Página de entradas");
});

router.get("/plato-principal", (req, res) => {
  res.send("Página de platos principales");
});

router.get("/acompanamientos", (req, res) => {
  res.send("Página de acompañamientos");
});

router.get("/postres", (req, res) => {
  res.send("Página de postres");
});

router.get("/bebidas", (req, res) => {
  res.send("Página de bebidas");
});

export default router;
