import { ObjectId } from "mongodb"
import { getDB } from "../config/db.js"

export async function getAllMenuItems() {
    const db = getDB()
    return db.collection("Menú").find({ eliminado: { $ne: true } }).toArray()
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

export async function deleteItemLogico(id) {
    const db = getDB()
    const item = await getItemById(id)
    await db.collection("Menú").updateOne(
        { _id: new ObjectId(id) }, { $set: { eliminado: true } }
    )
    return item
}
