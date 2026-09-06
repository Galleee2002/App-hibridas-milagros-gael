function indexView() {
    return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Menú</title>
        </head>
        <body>
          <h1>Menú</h1>
          <nav>
            <ul>
              <li><a href="/entradas">Entradas</a></li>
              <li><a href="/plato-principal">Plato principal</a></li>
              <li><a href="/acompanamientos">Acompañamientos</a></li>
              <li><a href="/postres">Postres</a></li>
              <li><a href="/bebidas">Bebidas</a></li>
            </ul>
          </nav>
        </body>
      </html>
    `;
  }
  
  module.exports = { indexView };