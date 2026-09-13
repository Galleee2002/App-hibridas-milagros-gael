import * as menuService from "../services/menuServices.js"
import * as menuView from "../views/menuViews.js"

const seccionesValidas = ["entradas", "plato-principal", "acompanamientos", "postres", "bebidas"]

export async function getSection(req, res) {
    try {
        const section = req.params.section
        if (!seccionesValidas.includes(section)) {
            res.send(menuView.page404())
            return
        }
        const items = await menuService.getMenuBySection(section)
        res.send(menuView.sectionList(section, items))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function getMenu(req, res) {
    try {
        const items = await menuService.getAllMenuItems()
        res.send(menuView.itemList(items))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function getItemById(req, res) {
    try {
        const id = req.params?.id
        const item = await menuService.getItemById(id)
        res.send(menuView.item(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export function newItemForm(req, res) {
    try {
        res.send(menuView.newItemForm())
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function editItemForm(req, res) {
    try {
        const id = req.params?.id
        const item = await menuService.getItemById(id)
        res.send(menuView.editItemForm(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function saveItem(req, res) {
    try {
        const item = await menuService.saveItem(req.body)
        res.send(menuView.item(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function editItem(req, res) {
    try {
        const id = req.params?.id
        const item = await menuService.editItem(id, req.body)
        res.send(menuView.item(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function deleteItemForm(req, res) {
    try {
        const id = req.params?.id
        const item = await menuService.getItemById(id)
        res.send(menuView.createDetailDeletePage(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}

export async function deleteItem(req, res) {
    try {
        const id = req.params?.id
        const item = await menuService.deleteItemLogico(id)
        res.send(menuView.item(item))
    } catch (error) {
        res.send(menuView.page404())
    }
}
