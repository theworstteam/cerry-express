require("dotenv").config();

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();
var facts = "";

//Get all parcels.
// /api/delivery/data/<collection-name>
router.get("/data/:data", async (req, res) => {
    const data = await loadData(req.params.data);
    facts = data.find({}).toArray();
    res.send(await facts);
    facts = await facts;
    console.log(facts);
  });

// router.get("/data/:data", async (req, res) => {
//     const data = await loadData(req.params.data);
//     res.send(await data.find({}).toArray());
//   });

//Open connection with the database, function returns client for further interaction.
async function loadData(collection) {
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
  
    return client.db(process.env.DB_NAME).collection(collection);
  }
  
module.exports = router;