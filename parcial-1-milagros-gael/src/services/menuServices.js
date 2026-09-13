import { getDB } from "../config/db.js";

export async function getAllMenuItems() {
  const db = getDB();
  return db.collection("Menú").find({}).toArray();
}

export async function getMenuBySection(section) {
  const db = getDB();
  return db.collection("Menú").find({ section }).toArray();
}
