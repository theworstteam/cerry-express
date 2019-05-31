require("dotenv").config();

const express = require("express");
const mongodb = require("mongodb");
const SQLCover = require("../backend/SQLCover");
const sql = new SQLCover();
const router = express.Router();
var facts = "";

//Get requested data.
// /api/delivery/data/<collection-name>
router.get("/data/:data", async (req, res) => {
  const data = await loadData(req.params.data);
  facts = data.find({}).toArray();
  res.send(await facts);
  facts = await facts;
  console.log(facts);
});

// Get average send Type with requested month.
// /api/delivery/average/send-type/<month>
router.get("/average/send-type/:month", async (req, res) => {
  const data = sql.getTotalSendType(req.params.month);
  res.send(data);
});

// Get average weight with requested month.
// /api/delivery/average/weight/<month>
router.get("/average/weight/:month", async (req, res) => {
  const data = sql.getAVGWeightPerMonth(req.params.month);
  res.send(data);
});

// Get average service per station.
// /api/delivery/average/service/<month>
router.get("/average/service/:month", async (req, res) => {
  const data = sql.getServiceUsedPerMonth(req.params.month);
  res.send(data);
});

// Get average location sent per station.
// /api/delivery/average/location/<month>
router.get("/average/location/:month", async (req, res) => {
  const data = sql.getLocationSentPerMonth(req.params.month);
  res.send(data);
});

// Get average weight sent to each location in requested month.
// /api/delivery/average/weight-location/<month>
router.get("/average/weight-location/:month", async (req, res) => {
  const data = sql.getAverageWeightPerLocation(req.params.month);
  res.send(data);
});

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
