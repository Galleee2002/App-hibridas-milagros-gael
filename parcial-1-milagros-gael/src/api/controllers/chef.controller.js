import * as chefService from "../../services/chefServices.js"

export async function getChefs(req, res) {
    try {
        const chefs = await chefService.getChefs()
        res.status(200).json(chefs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function saveChef(req, res) {
    try {
        const { nombre, foto, descripcion } = req.body
        if (!nombre || !foto || !descripcion) {
            return res.status(400).json({
                message: "Se requieren los campos: nombre, foto y descripcion"
            })
        }
        const chef = await chefService.saveChef({ nombre, foto, descripcion })
        res.status(201).json(chef)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getPlatosByChef(req, res) {
    try {
        const id = req.params.id
        const chef = await chefService.getChefById(id)
        if (!chef) return res.status(404).json({ message: "Chef no encontrado" })
        const platos = await chefService.getPlatosByChef(id)
        res.status(200).json(platos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function assignPlato(req, res) {
    try {
        const id = req.params.id
        const platoId = req.params.platoId
        const chef = await chefService.getChefById(id)
        if (!chef) return res.status(404).json({ message: "Chef no encontrado" })
        const plato = await chefService.assignPlato(id, platoId)
        if (!plato) return res.status(404).json({ message: "Plato no encontrado" })
        res.status(200).json(plato)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
