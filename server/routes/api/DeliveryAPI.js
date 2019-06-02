require("dotenv").config();

const express = require("express");
const mongodb = require("mongodb");
const SQLCover = require("../backend/SQLCover");
var sql;
var currentDateID;
var currentParcelID;
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

// Post parcel into the database.
// /api/delivery/parcel/<weight>/<firstname>/<lastname>/<EMS/REG>
router.post("/parcel/:weight/:firstname/:lastname/:type", async (req, res) => {
  const db = await loadData("parcel");
  const pmax = sql.getParcelMax();
  var parcel_id = parseInt(pmax) + 1;
  currentParcelID = parcel_id + "";
  const parcel = {
    _id: currentParcelID,
    weight: req.params.weight,
    first_name: req.params.firstname,
    last_name: req.params.lastname
  };
  res.send(await db.insert(parcel));
});

// Post transaction-date into the database.
// /api/delivery/transaction-date/<MMDDYY>/<DD>/<MM>/<YY>/<0-15>
router.post(
  "/transaction-date/:dateid/:day/:month/:year/:duration",
  async (req, res) => {
    const db2 = await loadData("transaction_date");
    currentDateID = req.params.dateid + "";
    const date = {
      _id: currentDateID,
      day: req.params.day,
      month: req.params.month,
      year: req.params.year,
      duration: req.params.duration
    };
    res.send(await db2.insert(date));
  }
);

// Post transaction into the database.
// /api/delivery/transaction/<100-108>/<NAN>
router.post("/transaction/:branch/:location", async (req, res) => {
  const db3 = await loadData("transaction");
  const tmax = sql.getTransMax();
  var trans_id = parseInt(tmax) + 1;
  const trans = {
    _id: trans_id + "",
    parcel: currentParcelID,
    transaction_date: currentDateID,
    branch: req.params.branch,
    location: req.params.location
  };
  res.send(await db3.insert(trans));
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
