const express = require("express");
const router = express.Router();

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

module.exports = router;