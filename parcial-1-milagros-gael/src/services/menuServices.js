const { getDB } = require("../config/db.js");

async function getAllMenuItems() {
  const db = getDB();
  return db.collection("Menú").find({}).toArray();
}

async function getMenuBySection(section) {
  const db = getDB();
  return db.collection("Menú").find({ section }).toArray();
}

module.exports = { getAllMenuItems, getMenuBySection };