import { ObjectId } from "mongodb"
import { getDB } from "../config/db.js"

export async function getChefs() {
    const db = getDB()
    return await db.collection("chefs").find().toArray()
}

export async function getChefById(id) {
    const db = getDB()
    return await db.collection("chefs").findOne({ _id: new ObjectId(id) })
}

export async function saveChef(chef) {
    const db = getDB()
    await db.collection("chefs").insertOne(chef)
    return chef
}

export async function getPlatosByChef(id) {
    const db = getDB()
    return await db.collection("Menú")
        .find({ chefId: new ObjectId(id), eliminado: { $ne: true } })
        .toArray()
}

export async function assignPlato(chefId, platoId) {
    const db = getDB()
    const plato = await db.collection("Menú").findOne({ _id: new ObjectId(platoId) })
    if (!plato) return null
    await db.collection("Menú").updateOne(
        { _id: new ObjectId(platoId) },
        { $set: { chefId: new ObjectId(chefId) } }
    )
    plato.chefId = new ObjectId(chefId)
    return plato
}
