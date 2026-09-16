export function createPage(title, content) {
    let html = ""
    html += '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'
    html += `<title>${title}</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
 </head><body>`
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

export function createDetailPage(item) {
    let html = ""
    html += `<p>Description: ${item.description}</p>`
    html += `<p>Price: ${item.price}</p>`
    html += `<p>Ingredients: ${item.ingredients}</p>`
    html += `<p>Section: ${item.section}</p>`
    html += `<p>Link: <a href="${item.link}">${item.link}</a></p>`
    html += `<img src="${item.img}" alt="${item.name}" width="400" />`
    html += "<a href='/menu' >Volver</a>"
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
    html += "<a href='/menu' >Volver</a>"
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
    html += "<a href='/menu' >Volver</a>"
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
    html += "<a href='/menu' >Volver</a>"
    return html
}

export function createSectionList(items) {
    let html = ""
    html += '<a href="/" class="btn btn-secondary my-3" >Volver</a>'
    items.forEach(item => {
        html += `
            <div>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Precio: ${item.price}</p>
                <p>Ingredientes: ${item.ingredients}</p>
                <p>Link: <a href="${item.link}">${item.link}</a></p>
                <img src="${item.img}" alt="${item.name}" width="400" />
            </div>
            <hr />
        `
    })
    return html
}

export default { createPage, createListPage }
