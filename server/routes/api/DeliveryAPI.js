require("dotenv").config();

const express = require("express");
const mongodb = require("mongodb");
const SQLCover = require("../backend/SQLCover");
var sql;
const router = express.Router();

//Get requested data.
// /api/delivery/data
router.get("/data", async (req, res) => {
  var trans = await loadData("transaction");
  var t = await trans.find({}).toArray();
  var parcel = await loadData("parcel");
  var p = await parcel.find({}).toArray();
  var branch = await loadData("branch");
  var b = await branch.find({}).toArray();
  var date = await loadData("transaction_date");
  var d = await date.find({}).toArray();
  var loca = await loadData("location");
  var l = await loca.find({}).toArray();
  var ca = await loadData("car");
  var c = await ca.find({}).toArray();
  var st = await loadData("staff");
  var s = await st.find({}).toArray();
  sql = new SQLCover(t, p, d, l, b, c, s);
  res.send("ok");
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

// Get car amount in each branch.
// /api/delivery/branch/car/
router.get("/branch/car", async (req, res) => {
  const data = sql.getCarPerBranch();
  res.send(data);
});

// Get staffs in each branch.
// /api/delivery/branch/staff/
router.get("/branch/staff", async (req, res) => {
  const data = sql.getStaffsPerBranch();
  res.send(data);
});

// Get average weight sent to each location in requested month.
// /api/delivery/average/weight-location/<month>
router.get("/average/weight-location/:month", async (req, res) => {
  const data = sql.getAverageWeightPerLocation(req.params.month);
  res.send(data);
});

router.post(
  "/parcel/:weight/:firstname/:lastname/:type/:dateid/:day/:month/:year/:duration",
  async (req, res) => {
    var db = await loadData("parcel");
    const pmax = sql.getParcelMax();
    const tmax = sql.getTransMax();
    const parcel = {
      _id: pmax + 1,
      weight: req.params.weight,
      first_name: req.params.firstname,
      last_name: req.params.lastname
    };
    res.send(await db.post(parcel));
    db = await loadData("transaction_date");
    const date = {
      _id: req.params.dateid,
      day: req.params.day,
      month: req.params.month,
      year: req.params.year,
      duration: req.params.duration
    };
    res.send(await db.post(date));
    db = loadData("transaction");
    const trans = {
      _id: tmax + 1,
      parcel: parcel["_id"],
      transaction_date: date["_id"],
      branch: "100",
      location: "BKK"
    };
    res.send(await db.post(trans));
  }
);

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
