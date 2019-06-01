const Transcation = require("./Transaction");
const Parcel = require("./Parcel");
const Branch = require("./Branch");
const Location = require("./Location");
const TranscationDate = require("./TransactionDate");
const Car = require("./Car");
const Staff = require("./Staff");

class SQLCover {
  constructor(fact, parcel, date, location, branch, car, staff) {
    this.temp_f = fact;
    this.temp_p = parcel;
    this.temp_d = date;
    this.temp_l = location;
    this.temp_b = branch;
    this.temp_c = car;
    this.temp_s = staff;
    this.car_table = this.setCar();
    this.staff_table = this.setStaff();
    this.fact_table = this.setFact();
    this.parcel_table = this.setParcel();
    this.date_table = this.setDate();
    this.branch_table = this.setBranch();
    this.location_table = this.setLocation();
  }

  setCar() {
    var cars = [];
    for (let i = 0; i < this.temp_c.length; i++) {
      var c_table = this.temp_c[i];
      var id = c_table["_id"];
      var cid = c_table["car_branch_id"];
      var t = c_table["type"];
      var tempCar = new Car(id, cid, t);
      cars.push(tempCar);
    }
    return cars;
  }

  setStaff() {
    var staffs = [];
    for (let i = 0; i < this.temp_s.length; i++) {
      var s_table = this.temp_s[i];
      var id = s_table["_id"];
      var branch = s_table["staff_branch_id"];
      var f = s_table["first_name"];
      var l = s_table["last_name"];
      var tempStaff = new Staff(id, branch, f, l);
      staffs.push(tempStaff);
    }
    return staffs;
  }

  setParcel() {
    var parcels = [];
    for (var k = 0; k < this.temp_p.length; k++) {
      var p_table = this.temp_p[k];
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
    var branches = [];
    for (let z = 0; z < this.temp_b.length; z++) {
      var b_table = this.temp_b[z];
      var id = b_table["_id"];
      var b = b_table["branch"];
      var br = new Branch(id, b);
      branches.push(br);
    }
    return branches;
  }

  setDate() {
    var dates = [];
    for (let h = 0; h < this.temp_d.length; h++) {
      var d_table = this.temp_d[h];
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
    var locations = [];
    for (let o = 0; o < this.temp_l.length; o++) {
      var l_table = this.temp_l[o];
      var id = l_table[o];
      var na = l_table["name"];
      var loca = new Location(id, na);
      locations.push(loca);
    }
    return locations;
  }

  setFact() {
    var temp_fact = [];
    for (var i = 0; i < this.temp_f.length; i++) {
      var temp_table = this.temp_f[i];
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

  getParcelByID(id) {
    for (let j = 0; j < this.parcel_table.length; j++) {
      var tempParcel = this.parcel_table[j];
      if (id === tempParcel.getParcelID()) {
        return tempParcel;
      }
    }
  }

  getDateByID(id) {
    for (let j = 0; j < this.date_table.length; j++) {
      var tempDate = this.date_table[j];
      if (id === tempDate.getID()) {
        return tempDate;
      }
    }
  }

  getBranchByID(id) {
    for (let j = 0; j < this.branch_table.length; j++) {
      var tempBranch = this.branch_table[j];
      if (id === tempBranch.getBranchID()) {
        return tempBranch;
      }
    }
  }

  getLocationByID(id) {
    for (let j = 0; j < this.location_table.length; j++) {
      var tempLocation = this.location_table[j];
      if (id === tempLocation.getLocationID()) {
        return tempLocation;
      }
    }
  }

  getTotalSendType(month) {
    var ems = 0;
    var reg = 0;
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var parcel = this.getParcelByID(trans.getParcelID());
      var date = this.getDateByID(trans.getDateID());
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
      var parcel = this.getParcelByID(trans.getParcelID());
      var date = this.getDateByID(trans.getDateID());
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
      var date = this.getDateByID(trans.getDateID());
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

  getLocationSentPerMonth(month) {
    var bkk = 0;
    var cmi = 0;
    var nbi = 0;
    var pkt = 0;
    var sti = 0;
    var kbi = 0;
    var tak = 0;
    var stn = 0;
    var pre = 0;
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var location = trans.getLocationID();
      var date = this.getDateByID(trans.getDateID());
      if (date.getMonth() === month) {
        if (location === "BKK") {
          bkk++;
        } else if (location === "CMI") {
          cmi++;
        } else if (location === "NBI") {
          nbi++;
        } else if (location === "PKT") {
          pkt++;
        } else if (location === "STI") {
          sti++;
        } else if (location === "KBI") {
          kbi++;
        } else if (location === "TAK") {
          tak++;
        } else if (location === "STN") {
          stn++;
        } else if (location === "PRE") {
          pre++;
        }
      }
    }
    const data = {
      Month: month,
      Year: 2019,
      BKK: bkk,
      CMI: cmi,
      NBI: nbi,
      PKT: pkt,
      STI: sti,
      KBI: kbi,
      TAK: tak,
      STN: stn,
      PRE: pre
    };
    return data;
  }

  getAverageWeightPerLocation(month) {
    var bkk = 0;
    var bkkw = 0;
    var cmi = 0;
    var cmiw = 0;
    var nbi = 0;
    var nbiw = 0;
    var pkt = 0;
    var pktw = 0;
    var sti = 0;
    var stiw = 0;
    var kbi = 0;
    var kbiw = 0;
    var tak = 0;
    var takw = 0;
    var stn = 0;
    var stnw = 0;
    var pre = 0;
    var prew = 0;
    for (let i = 0; i < this.fact_table.length; i++) {
      var trans = this.fact_table[i];
      var parcel = this.getParcelByID(trans.getParcelID());
      var date = this.getDateByID(trans.getDateID());
      var location = trans.getLocationID();
      if (date.getMonth() === month) {
        if (location === "BKK") {
          bkk++;
          bkkw += parcel.getParcelWeight();
        } else if (location === "CMI") {
          cmi++;
          cmiw += parcel.getParcelWeight();
        } else if (location === "NBI") {
          nbi++;
          nbiw += parcel.getParcelWeight();
        } else if (location === "PKT") {
          pkt++;
          pktw += parcel.getParcelWeight();
        } else if (location === "STI") {
          sti++;
          stiw += parcel.getParcelWeight();
        } else if (location === "KBI") {
          kbi++;
          kbiw += parcel.getParcelWeight();
        } else if (location === "TAK") {
          tak++;
          takw += parcel.getParcelWeight();
        } else if (location === "STN") {
          stn++;
          stnw += parcel.getParcelWeight();
        } else if (location === "PRE") {
          pre++;
          prew += parcel.getParcelWeight();
        }
      }
    }
    const data = {
      Month: month,
      Year: 2019,
      BKK: bkkw / bkk,
      CMI: cmiw / cmi,
      NBI: nbiw / nbi,
      PKT: pktw / pkt,
      STI: stiw / sti,
      KBI: kbiw / kbi,
      TAK: takw / tak,
      STN: stnw / stn,
      PRE: prew / pre
    };
    return data;
  }

  getCarPerBranch() {
    var cars = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.car_table.length; i++) {
      var car = this.car_table[i];
      if (car.getCarBranchID() === "2000") {
        cars[0] = 1 + cars[0];
      } else if (car.getCarBranchID() === "2001") {
        cars[1] = 1 + cars[1];
      } else if (car.getCarBranchID() === "2002") {
        cars[2] = 1 + cars[2];
      } else if (car.getCarBranchID() === "2003") {
        cars[3] = 1 + cars[3];
      } else if (car.getCarBranchID() === "2004") {
        cars[4] = 1 + cars[4];
      } else if (car.getCarBranchID() === "2005") {
        cars[5] = 1 + cars[5];
      } else if (car.getCarBranchID() === "2006") {
        cars[6] = 1 + cars[6];
      } else if (car.getCarBranchID() === "2007") {
        cars[7] = 1 + cars[7];
      } else if (car.getCarBranchID() === "2008") {
        cars[8] = 1 + cars[8];
      }
    }
    const data = {
      ChiangRai: cars[0],
      Bangkok: cars[1],
      Nan: cars[2],
      Chonburi: cars[3],
      Kanchanaburi: cars[4],
      Yala: cars[5],
      Nonthaburi: cars[6],
      Krabi: cars[7],
      Tak: cars[8]
    };
    return data;
  }

  getStaffsPerBranch() {
    var staffs = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < this.staff_table.length; i++) {
      var staff = this.staff_table[i];
      if (staff.getStaffBranchID() === "3000") {
        staffs[0] = 1 + staffs[0];
      } else if (staff.getStaffBranchID() === "3001") {
        staffs[1] = 1 + staffs[1];
      } else if (staff.getStaffBranchID() === "3002") {
        staffs[2] = 1 + staffs[2];
      } else if (staff.getStaffBranchID() === "3003") {
        staffs[3] = 1 + staffs[3];
      } else if (staff.getStaffBranchID() === "3004") {
        staffs[4] = 1 + staffs[4];
      } else if (staff.getStaffBranchID() === "3005") {
        staffs[5] = 1 + staffs[5];
      } else if (staff.getStaffBranchID() === "3006") {
        staffs[6] = 1 + staffs[6];
      } else if (staff.getStaffBranchID() === "3007") {
        staffs[7] = 1 + staffs[7];
      } else if (staff.getStaffBranchID() === "3008") {
        staffs[8] = 1 + staffs[8];
      }
    }
    const data = {
      ChiangRai: staffs[0],
      Bangkok: staffs[1],
      Nan: staffs[2],
      Chonburi: staffs[3],
      Kanchanaburi: staffs[4],
      Yala: staffs[5],
      Nonthaburi: staffs[6],
      Krabi: staffs[7],
      Tak: staffs[8]
    };
    return data;
  }
}

module.exports = SQLCover;
