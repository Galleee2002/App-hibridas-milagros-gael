const { MongoClient } = require("mongodb");
const MONGODB_URI =
  "mongodb+srv://MiliGael_user:GaelMili20022003@ah20232cp1.eijooye.mongodb.net/AH20232CP1?appName=AH20232CP1";

  const client = new MongoClient(MONGODB_URI);
  async function connectDB() {
    await client.connect();
    return client.db("AH20232CP1"); 
  }
  function getDB() {
    return client.db("AH20232CP1");
  }

  module.exports = { connectDB, getDB };
