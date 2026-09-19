import { createPage } from "../page/utils.js"

export function indexView() {
  let html = ""
  html += `
    <p style="color: #B59A6A; letter-spacing: 0.38em; text-transform: uppercase; font-size: 0.72rem; margin-bottom: 1.25rem;">Restaurante</p>
    <p style="color: #D8CCB5; margin-bottom: 2.75rem;">Carta de temporada. Una selección de platos de autor, servida en cinco capítulos.</p>
    <div>
      <div>
        <a href="/entradas" class="btn btn-secondary my-3" style="background: transparent; border: none; border-bottom: 1px solid #6E1F2A; border-radius: 0; letter-spacing: 0.28em; text-transform: uppercase; color: #F1E7D0; padding-left: 0; padding-right: 0;" >Entradas</a>
      </div>
      <div>
        <a href="/plato-principal" class="btn btn-secondary my-3" style="background: transparent; border: none; border-bottom: 1px solid #6E1F2A; border-radius: 0; letter-spacing: 0.28em; text-transform: uppercase; color: #F1E7D0; padding-left: 0; padding-right: 0;" >Plato principal</a>
      </div>
      <div>
        <a href="/acompanamientos" class="btn btn-secondary my-3" style="background: transparent; border: none; border-bottom: 1px solid #6E1F2A; border-radius: 0; letter-spacing: 0.28em; text-transform: uppercase; color: #F1E7D0; padding-left: 0; padding-right: 0;" >Acompañamientos</a>
      </div>
      <div>
        <a href="/postres" class="btn btn-secondary my-3" style="background: transparent; border: none; border-bottom: 1px solid #6E1F2A; border-radius: 0; letter-spacing: 0.28em; text-transform: uppercase; color: #F1E7D0; padding-left: 0; padding-right: 0;" >Postres</a>
      </div>
      <div>
        <a href="/bebidas" class="btn btn-secondary my-3" style="background: transparent; border: none; border-bottom: 1px solid #6E1F2A; border-radius: 0; letter-spacing: 0.28em; text-transform: uppercase; color: #F1E7D0; padding-left: 0; padding-right: 0;" >Bebidas</a>
      </div>
    </div>
    <div style="margin-top: 2.75rem; padding-top: 1.5rem; border-top: 1px solid #4A151D;">
      <a href="/menu" class="btn btn-primary my-3" >Administrar menú</a>
    </div>
  `
  return createPage("Menú", html)
}
