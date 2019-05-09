require("dotenv").config();

var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

//Get all parcels.
// /api/delivery/parcels
router.get("/parcels/", async (req, res) => {
    const posts = await loadData();
    res.send(await posts.find({}).toArray());
  });

//Open connection with the database, function returns client for further interaction.
async function loadData() {
    const client = await mongodb.MongoClient.connect(
      "mongodb+srv://" +
        process.env.DB_USER +
        ":" +
        process.env.DB_PASS +
        process.env.DB_URL,
      {
        useNewUrlParser: true
      }
    );
  
    return client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);
  }
  
  module.exports = router;