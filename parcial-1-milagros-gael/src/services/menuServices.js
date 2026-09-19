import { ObjectId } from "mongodb"
import { getDB } from "../config/db.js"

export async function getAllMenuItems(filtros = {}) {
    const db = getDB()
    const filter = { eliminado: { $ne: true } }

    const page = parseInt(filtros.page) || 1
    const limit = parseInt(filtros.limit) || 10
    const skip = (page - 1) * limit

    const sortBy = filtros.sort_by || "name"
    const sortOrder = filtros.sort_order == "asc" ? 1 : -1
    const orderOptions = { [sortBy]: sortOrder }

    if (filtros?.section) filter.section = { $eq: filtros.section }
    if (filtros?.name) filter.name = { $eq: filtros.name }

    const items = await db.collection("Menú")
        .find(filter)
        .sort(orderOptions)
        .skip(skip)
        .limit(limit)
        .toArray()

    const documentos = await db.collection("Menú").countDocuments(filter)
    items.push({ documentos, totalPages: Math.ceil(documentos / limit), currentPage: page })
    return items
}

export async function getMenuBySection(section) {
    const db = getDB()
    return db.collection("Menú").find({ section, eliminado: { $ne: true } }).toArray()
}

export async function getItemById(id) {
    const db = getDB()
    const item = await db.collection("Menú").findOne({ _id: new ObjectId(id) })
    return item
}

export async function saveItem(item) {
    const db = getDB()
    await db.collection("Menú").insertOne(item)
    return item
}

export async function editItem(id, item) {
    const db = getDB()
    await db.collection("Menú").replaceOne({ _id: new ObjectId(id) }, item)
    return item
}

export async function updateItem(id, item) {
    const db = getDB()
    await db.collection("Menú").updateOne(
        { _id: new ObjectId(id) }, { $set: item }
    )
    return item
}

export async function deleteItemLogico(id) {
    const db = getDB()
    const item = await getItemById(id)
    await db.collection("Menú").updateOne(
        { _id: new ObjectId(id) }, { $set: { eliminado: true } }
    )
    return item
}
