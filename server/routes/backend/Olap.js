const Transcation = require("./Transaction");
const Parcel = require("./Parcel");
const Branch = require("./Branch");
const Location = require("./Location");
const TranscationDate = require("./TransactionDate");
const Service = require("./Service");
const Data = require("./Data");
const d = new Data();

class Olap {
  constructor() {
    // console.log("enter Olap constructor");
    this.olap = this.setOlap();
  }

  setOlap() {
    // console.log("enter set olap");
    var temp_olap = [];

    //create parcel
    var parcels = [];
    // console.log("parcel data size " + d.getParcel().length + " expect: 4");
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
    // console.log("created parcels with size " + parcels.length + " expect: 4");

    //create branch
    var branches = [];
    // console.log("branch data size " + d.getBranch().length + " expect: 7");
    for (let z = 0; z < d.getBranch().length; z++) {
      var b_table = d.getBranch()[z];
      var id = b_table["_id"];
      var b = b_table["branch"];
      var br = new Branch(id, b);
      branches.push(br);
    }
    // console.log("created branches with size " + branches.length + " expect: 7");

    //create date
    var dates = [];
    // console.log("date data size " + d.getDate().length + " expect: 3");
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
    // console.log("created dates with size " + dates.length + " expect: 3");

    //create location
    var locations = [];
    // console.log(
    //   "location with data size " + d.getLocation().length + " expect: 3"
    // );
    for (let o = 0; o < d.getLocation().length; o++) {
      var l_table = d.getLocation()[o];
      var id = l_table[o];
      var na = l_table["name"];
      var loca = new Location(id, na);
      locations.push(loca);
    }
    // console.log(
    //   "created locations with size " + locations.length + " expect: 3"
    // );

    //create Transaction
    for (var i = 0; i < d.getFact().length; i++) {
      var temp_table = d.getFact()[i];
      var temp_fact_id = temp_table["_id"];
      var temp_id_parcel = temp_table["parcel"];
      var temp_id_date = temp_table["transaction_date"];
      var temp_id_branch = temp_table["branch"];
      var temp_id_location = temp_table["location"];
      var temp_parcel;
      var temp_branch;
      var temp_date;
      var temp_location;
      for (let i = 0; i < parcels.length; i++) {
        var element = parcels[i];
        if (temp_id_parcel === element.getParcelID()) {
          //   console.log(
          //     "match " + temp_id_parcel + " and " + element.getParcelID()
          //   );
          temp_parcel = element;
        }
      }
      for (let f = 0; f < dates.length; f++) {
        var element = dates[f];
        if (temp_id_date === element.getID()) {
          // console.log(
          //     "match " + temp_id_date + " and " + element.getID()
          //   );
          temp_date = element;
        }
      }
      for (let g = 0; g < branches.length; g++) {
        var element = branches[g];
        if (temp_id_branch === element.getBranchID()) {
          // console.log(
          //     "match " + temp_id_branch + " and " + element.getBranchID()
          //   );
          temp_branch = element;
        }
      }
      for (let q = 0; q < locations.length; q++) {
        var element = locations[q];
        if (temp_id_location === element.getLocationID()) {
          // console.log(
          //     "match " + temp_id_location + " and " + element.getLocationID()
          //   );
          temp_location = element;
        }
      }
      var temp_data = [temp_parcel, temp_date, temp_branch, temp_location];
      var trans = new Transcation(temp_fact_id, temp_data);
      temp_olap.push(trans);
    }
    // console.log("created transaction with " + temp_olap.length + " expect:4");
    return temp_olap;
  }

  getOlap() {
    return this.olap;
  }

  getTotalSendType() {
    var ems = 0;
    var reg = 0;
    for (let i = 0; i < this.olap.length; i++) {
      var trans = this.olap[i];
      var parcel = trans.getData()[0];
      var type = parcel.getSendType();
      if (type === "EMS") {
        ems++;
      } else {
        reg++;
      }
    }
    const data = {
      EMS: ems,
      REG: reg
    };
    return data;
  }

  getTotalSendType(month) {
    var ems = 0;
    var reg = 0;
    for (let i = 0; i < this.olap.length; i++) {
      var trans = this.olap[i];
      var parcel = trans.getData()[0];
      var date = trans.getData()[1];
      var type = parcel.getSendType();
      if (date.getMonth() === month) {
        if (type === "EMS") {
          ems++;
        } else {
          reg++;
        }
      }
    }
    const data = {
      Month: date.getMonth(),
      Year: date.getYear(),
      EMS: ems,
      REG: reg
    };
    return data;
  }

  getAVGWeightPerMonth(month, year) {
    var weight = 0;
    var count = 0;
    for (let i = 0; i < this.olap.length; i++) {
      var trans = this.olap[i];
      var parcel = trans.getData()[0];
      var date = trans.getData()[1];
      if (date.getMonth() === month) {
        count++;
        weight += parcel.getParcelWeight();
      }
    }
    var data = {
      Month: month,
      Year: year,
      Average: weight / count
    };
    return data;
  }

  getStationServices() {
    var temp = [];
    for (let i = 0; i < this.olap.length; i++) {
      var trans = this.olap[i];
      var branch = trans.getData()[2];
      var station = branch.getBranchName();
      for (let j = 0; j < temp.length; j++) {
        if (j === 0) {
          console.log("first push "+station);
          temp.push(new Service(station, 1));
        } else {
          if (temp[j].getStation() === station) {
              console.log(temp[j].getStation()+ " = "+station)
            temp[j].setAmount(temp[j].getAmount() + 1);
          } else {
            console.log("else push "+station);
            temp.push(new Service(station, 1));
          }
        }
      }
    }
    return temp;
  }
}

module.exports = Olap;
