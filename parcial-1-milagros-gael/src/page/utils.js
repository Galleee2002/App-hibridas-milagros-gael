export function createPage(title, content) {
    let html = ""
    html += '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'
    html += '<meta name="viewport" content="width=device-width, initial-scale=1">'
    html += `<title>${title}</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">`
    html += '<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap" rel="stylesheet">'
    html += `<style>
        body { background-color: #171413; color: #D8CCB5; font-family: Georgia, "Palatino Linotype", Palatino, "Times New Roman", serif; }
        .container-fluid { max-width: 1040px; margin: 0 auto; padding: 2.75rem 1.25rem 4.5rem; }
        h1 { color: #F1E7D0; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; font-size: 2.35rem; border-bottom: 1px solid #6E1F2A; padding-bottom: 1rem; margin: 0 0 1.75rem; }
        h2 { color: #F1E7D0; font-weight: 500; font-size: 1.7rem; letter-spacing: 0.02em; }
        p { color: #D8CCB5; }
        .precio { color: #F1E7D0; font-family: "Cormorant Garamond", Georgia, serif; font-weight: 300; font-size: 1.35rem; font-variant-numeric: lining-nums tabular-nums; }
        a { color: #6E1F2A; }
        a:hover { color: #4A151D; }
        hr { border: 0; border-top: 1px solid #6E1F2A; opacity: 0.7; margin: 2.5rem 0; }
        .btn { border-radius: 0; letter-spacing: 0.12em; }
        .btn-primary { background-color: #6E1F2A; border-color: #6E1F2A; color: #F1E7D0; }
        .btn-primary:hover, .btn-primary:focus { background-color: #4A151D; border-color: #4A151D; color: #F1E7D0; }
        .btn-secondary { background-color: #211B1A; border-color: #D8CCB5; color: #F1E7D0; }
        .btn-secondary:hover, .btn-secondary:focus { background-color: #4A151D; border-color: #4A151D; color: #F1E7D0; }
        .btn-warning { background-color: #211B1A; border-color: #B59A6A; color: #F1E7D0; }
        .btn-warning:hover, .btn-warning:focus { background-color: #4A151D; border-color: #4A151D; color: #F1E7D0; }
        .btn-danger { background-color: #6E1F2A; border-color: #6E1F2A; color: #F1E7D0; }
        .btn-danger:hover, .btn-danger:focus { background-color: #4A151D; border-color: #4A151D; color: #F1E7D0; }
        .table { --bs-table-bg: transparent; --bs-table-color: #F1E7D0; --bs-table-border-color: #4A151D; --bs-table-striped-bg: #211B1A; --bs-table-hover-bg: #211B1A; color: #F1E7D0; }
        .table th { color: #F1E7D0; font-weight: 500; letter-spacing: 0.06em; }
        .form-label { color: #D8CCB5; }
        .form-control { background-color: #211B1A; border: 1px solid #4A151D; color: #F1E7D0; border-radius: 0; }
        .form-control:focus { background-color: #211B1A; color: #F1E7D0; border-color: #6E1F2A; box-shadow: none; }
        .form-control::placeholder { color: #D8CCB5; opacity: 0.55; }
    </style>`
    html += "</head><body>"
    html += "<div class='container-fluid' >"
    html += `<h1>${title}</h1>`
    html += content
    html += "</div></body></html>"
    return html
}

export function createListPage(lista) {
    let html = ""
    html += `
    <a href="/menu/nuevo" class="btn btn-primary my-3" >Nuevo Item</a>
    <a href="/" class="btn btn-secondary my-3" >Inicio</a>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Section</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
  `
    lista.forEach(item => {
        if (item._id) html += `    
    <tr>
      <th scope="row">${item._id}</th>
      <td>${item.name}</td>
      <td>${item.section}</td>
      <td>${item.price}</td>
      <td class="d-flex" >
        <a class="btn btn-secondary mx-1" href="/menu/${item._id}" >Ver</a>
        <a class="btn btn-warning mx-1" href="/menu/editar/${item._id}" >Editar</a>
        <a class="btn btn-danger mx-2" href="/menu/borrar/${item._id}" >Borrar</a>
      </td>
    </tr>`
}
    )
    html += "</tbody></table>"
    return html
}

export function createDetailPage(item, volver = "/") {
    let html = ""
    const imagen = item.img
        ? `<img src="${item.img}" alt="${item.name}" class="img-fluid" style="max-height: 380px;" />`
        : ""
    html += `
        <div class="row align-items-center my-3" >
            <div class="col-md-6" >
                ${imagen}
            </div>
            <div class="col-md-6" >
                <p>Description: ${item.description}</p>
                <p class="precio">Price: ${item.price}</p>
                <p>Ingredients: ${item.ingredients}</p>
                <p>Section: ${item.section}</p>
                ${item.link ? `<p>Link: <a href="${item.link}">${item.link}</a></p>` : ""}
            </div>
        </div>
    `
    html += `<a href='${volver}' class='btn btn-secondary my-3' >Volver</a>`
    return html
}

export function createItemFormPage() {
    let html = ""
    html += "<form action='/menu/nuevo' method='POST' >"
    html += `
        <div class="my-2" >
            <label class="form-label" >Nombre: </label>
            <input class="form-control" name="name" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Descripcion: </label>
            <input class="form-control" name="description" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Precio: </label>
            <input class="form-control" name="price" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Ingredientes: </label>
            <input class="form-control" name="ingredients" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Link: </label>
            <input class="form-control" name="link" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Img (ruta en /public, ej: /foto.jpg): </label>
            <input class="form-control" name="img" placeholder="/foto.jpg" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Section: </label>
            <input class="form-control" name="section" />
        </div>   
        <button type="submit" class="btn btn-primary" >Guardar</button>                                             
    `
    html += "</form>"
    html += "<a href='/menu' class='btn btn-secondary my-3' >Volver</a>"
    return html
}

export function createItemFormEditPage(item) {
    let html = ""
    html += `<form action='/menu/editar/${item._id}' method='POST' >`
    html += `
        <div class="my-2" >
            <label class="form-label" >Nombre: </label>
            <input class="form-control" name="name" value="${item.name}" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Descripcion: </label>
            <input class="form-control" name="description" value="${item.description}" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Precio: </label>
            <input class="form-control" name="price" value="${item.price}"/>
        </div>
        <div class="my-2" >
            <label class="form-label" >Ingredientes: </label>
            <input class="form-control" name="ingredients" value="${item.ingredients}" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Link: </label>
            <input class="form-control" name="link" value="${item.link}" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Img (ruta en /public, ej: /foto.jpg): </label>
            <input class="form-control" name="img" value="${item.img}" placeholder="/foto.jpg" />
        </div>
        <div class="my-2" >
            <label class="form-label" >Section: </label>
            <input class="form-control" name="section" value="${item.section}"/>
        </div>   
        <button type="submit" class="btn btn-primary" >Guardar</button>                                             
    `
    html += "</form>"
    html += "<a href='/menu' class='btn btn-secondary my-3' >Volver</a>"
    return html
}

export function createDetailDelete(item) {
    let html = `<form action='/menu/borrar/${item._id}' method="POST" >`
    html += `<p>Description: ${item.description}</p>`
    html += `<p>Price: ${item.price}</p>`
    html += `<p>Ingredients: ${item.ingredients}</p>`
    html += `<p>Section: ${item.section}</p>`
    html += `<p>Link: ${item.link}</p>`
    html += `<button type="submit" class="btn btn-danger" >Borrar</button>`
    html += "</form>"
    html += "<a href='/menu' class='btn btn-secondary my-3' >Volver</a>"
    return html
}

export function createSectionList(items) {
    let html = ""
    html += '<a href="/" class="btn btn-secondary my-3" >Volver</a>'
    items.forEach((item, index) => {
        const imagenIzquierda = index % 2 === 0
        const imagen = item.img
            ? `<img src="${item.img}" alt="${item.name}" style="max-width: 48%; max-height: 380px; width: auto; height: auto; display: block; margin: 1.5rem 0; flex-shrink: 0;" />`
            : ""
        const precio = item.price
            ? `<p class="precio mt-3">${item.price}</p>`
            : ""
        html += `
            <div class="my-2" style="padding: 1.25rem 0 0.5rem; display: flex; flex-direction: ${imagenIzquierda ? "row" : "row-reverse"}; align-items: center; gap: 1.5rem;" >
                ${imagen}
                <div style="flex: 1; text-align: center;" >
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    ${precio}
                    <a class="btn btn-secondary mx-1" href="/menu/${item._id}" >Ver</a>
                </div>
            </div>
            <hr />
        `
    })
    return html
}

export default { createPage, createListPage }
