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
