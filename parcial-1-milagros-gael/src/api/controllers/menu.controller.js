import * as menuService from "../../services/menuServices.js"

export async function getMenuItems(req, res) {
    try {
        const filtros = req.query
        const items = await menuService.getAllMenuItems(filtros)
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getMenuItemById(req, res) {
    try {
        const id = req.params.id
        const item = await menuService.getItemById(id)
        if (!item) return res.status(404).json({ message: "Plato no encontrado" })
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function saveMenuItem(req, res) {
    try {
        const item = await menuService.saveItem(req.body)
        res.status(201).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function replaceMenuItem(req, res) {
    try {
        const id = req.params.id
        const item = await menuService.editItem(id, req.body)
        res.status(202).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateMenuItem(req, res) {
    try {
        const id = req.params.id
        const item = await menuService.updateItem(id, req.body)
        res.status(202).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteMenuItem(req, res) {
    try {
        const id = req.params.id
        const item = await menuService.deleteItemLogico(id)
        res.status(202).json(item)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
