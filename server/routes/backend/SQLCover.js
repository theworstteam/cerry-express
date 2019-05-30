const Transcation = require("./Transaction");
const Parcel = require("./Parcel");
const Branch = require("./Branch");
const Location = require("./Location");
const TranscationDate = require("./TransactionDate");
const Service = require("./Service");
const Data = require("./Data");
const d = new Data();

class SQLCover {
  constructor() {
    console.log("enter constructor");
    this.fact_table = this.setFact();
    this.parcel_table = this.setParcel();
    this.date_table = this.setDate();
    this.branch_tabel = this.setBranch();
    this.location_table = this.setLocation();
  }

  setParcel() {
    console.log("enter set parcel");
    var parcels = [];
    for (var k = 0; k < d.getParcel().length; k++) {
      var p_table = d.getParcel()[k];
      var id = p_table["_id"];
      var w = p_table["weight"];
      var f = p_table["first_name"];
      var l = p_table["last_name"];
      var s = p_table["send_type"];
      var tmpParcel = new Parcel(id, w, f, l, s);
      parcels.push(tmpParcel);
    }
    return parcels;
  }

  setBranch() {
    console.log("enter set branch");
    var branches = [];
    for (let z = 0; z < d.getBranch().length; z++) {
      var b_table = d.getBranch()[z];
      var id = b_table["_id"];
      var b = b_table["branch"];
      var br = new Branch(id, b);
      branches.push(br);
    }
    return branches;
  }

  setDate() {
    console.log("enter set date");
    var dates = [];
    for (let h = 0; h < d.getDate().length; h++) {
      var d_table = d.getDate()[h];
      var id = d_table["_id"];
      var day = d_table["day"];
      var mo = d_table["month"];
      var ya = d_table["year"];
      var dur = d_table["duration"];
      var da = new TranscationDate(id, day, mo, ya, dur);
      dates.push(da);
    }
    return dates;
  }

  setLocation() {
    console.log("enter set location");
    var locations = [];
    for (let o = 0; o < d.getLocation().length; o++) {
      var l_table = d.getLocation()[o];
      var id = l_table[o];
      var na = l_table["name"];
      var loca = new Location(id, na);
      locations.push(loca);
    }
    return locations;
  }

  setFact() {
    console.log("enter set fact");
    var temp_fact = [];
    for (var i = 0; i < d.getFact().length; i++) {
      var temp_table = d.getFact()[i];
      var temp_fact_id = temp_table["_id"];
      var temp_id_parcel = temp_table["parcel"];
      var temp_id_date = temp_table["transaction_date"];
      var temp_id_branch = temp_table["branch"];
      var temp_id_location = temp_table["location"];
      var trans = new Transcation(
        temp_fact_id,
        temp_id_parcel,
        temp_id_date,
        temp_id_branch,
        temp_id_location
      );
      temp_fact.push(trans);
    }
    return temp_fact;
  }

  getTotalSendType(month) {
    var ems = 0;
    var reg = 0;
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var parcel_id = trans.getParcelID();
      var date_id = trans.getDateID();
      var parcel;
      var date;
      for (let j = 0; j < this.parcel_table.length; j++) {
        var tempParcel = this.parcel_table[j];
        if (parcel_id === tempParcel.getParcelID()) {
          parcel = tempParcel;
          break;
        }
      }
      for (let k = 0; k < this.date_table.length; k++) {
        var tempDate = this.date_table[k];
        if (date_id === tempDate.getID()) {
          date = tempDate;
          break;
        }
      }
      if (date.getMonth() === month) {
        if (parcel.getSendType() === "EMS") {
          ems++;
        } else {
          reg++;
        }
      }
    }
    const data = {
      Month: month,
      Year: 2019,
      EMS: ems,
      REG: reg
    };
    return data;
  }

  getAVGWeightPerMonth(month) {
    var weight = 0;
    var count = 0;
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var parcel = trans.getParcelID();
      var date = trans.getDateID();
      for (let j = 0; j < this.parcel_table.length; j++) {
        var tempParcel = this.parcel_table[j];
        if (parcel === tempParcel.getParcelID()) {
          parcel = tempParcel;
          break;
        }
      }
      for (let k = 0; k < this.date_table.length; k++) {
        var tempDate = this.date_table[k];
        if (date === tempDate.getID()) {
          date = tempDate;
          break;
        }
      }
      if (date.getMonth() === month) {
        weight += parcel.getParcelWeight();
        count++;
      }
    }
    var data = {
      Month: month,
      Year: 2019,
      Average: weight / count
    };
    return data;
  }

  getServiceUsedPerMonth(month) {
    var service = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var branch_id = trans.getBranchID();
      var date_id = trans.getDateID();
      var date;
      for (let k = 0; k < this.date_table.length; k++) {
        var tempDate = this.date_table[k];
        if (date_id === tempDate.getID()) {
          date = tempDate;
          break;
        }
      }
      if (date.getMonth() === month) {
        if (branch_id === "100") {
          service[0] = 1 + service[0];
        } else if (branch_id === "101") {
          service[1] = 1 + service[1];
        } else if (branch_id === "102") {
          service[2] = 1 + service[2];
        } else if (branch_id === "103") {
          service[3] = 1 + service[3];
        } else if (branch_id === "104") {
          service[4] = 1 + service[4];
        } else if (branch_id === "105") {
          service[5] = 1 + service[5];
        } else if (branch_id === "106") {
          service[6] = 1 + service[6];
        } else if (branch_id === "107") {
          service[7] = 1 + service[7];
        } else if (branch_id === "108") {
          service[8] = 1 + service[8];
        }
      }
    }
    const data = {
      Month: month,
      Year: 2019,
      ChiangRai: service[0],
      Bangkok: service[1],
      Nan: service[2],
      Chonburi: service[3],
      Kanchanaburi: service[4],
      Yala: service[5],
      Nonthaburi: service[6],
      Krabi: service[7],
      Tak: service[8]
    };
    return data;
  }
}

module.exports = SQLCover;
