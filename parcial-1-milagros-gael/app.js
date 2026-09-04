const express = require("express");

const app = express();
const PORT = 3000;

// Permite recibir JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "Hola desde Express "
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
