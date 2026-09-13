import { createDetailDelete, createDetailPage, createItemFormEditPage, createItemFormPage, createListPage, createPage, createSectionList } from "../page/utils.js"

export function itemList(items) {
    return createPage("menu", createListPage(items))
}

export function item(item) {
    return createPage(item.name, createDetailPage(item))
}

export function page404() {
    return createPage("404", "pagina no encontrada")
}

export function newItemForm() {
    return createPage("Nuevo item", createItemFormPage())
}

export function editItemForm(item) {
    return createPage("Editar item", createItemFormEditPage(item))
}

export function createDetailDeletePage(item) {
    return createPage("Desea borrar: " + item.name, createDetailDelete(item))
}

export function sectionList(section, items) {
    return createPage(section, createSectionList(items))
}
