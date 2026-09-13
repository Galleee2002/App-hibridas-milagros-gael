function createPage(title, content) {
    let html = ""
    html += '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'
    html += `<title>${title}</title></head><body>`
    html += `<h1>${title}</h1>`
    html += content
    html += "</body></html>"
    return html
}

function createSectionList(items) {
    let html = ""
    html += '<a href="/">Volver</a>'
    items.forEach(item => {
        html += `
            <div>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Precio: $${item.price}</p>
                <p>Ingredientes: ${item.ingredients}</p>
                <p>Link: <a href="${item.link}">${item.link}</a></p>
                <img src="${item.img}" alt="${item.name}" width="400" />
            </div>
            <hr />
        `
    })
    return html
}

export function sectionList(section, items) {
    return createPage(section, createSectionList(items))
}

export function page404() {
    return createPage("404", "pagina no encontrada")
}
