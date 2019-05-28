const fact = [
  {
    _id: "10000",
    parcel: "1000",
    transaction_date: "031819",
    branch: "102",
    location: "BKK"
  },
  {
    _id: "10001",
    parcel: "1002",
    transaction_date: "052619",
    branch: "105",
    location: "CMI"
  },
  {
    _id: "10002",
    parcel: "1001",
    transaction_date: "031819",
    branch: "103",
    location: "PKT"
  },
  {
    _id: "10003",
    parcel: "1003",
    transaction_date: "010419",
    branch: "104",
    location: "NBI"
  }
];

const parcel = [
  {
    _id: "1000",
    weight: 1000,
    first_name: "Naruto",
    last_name: "Uzumaki",
    send_type: "REG"
  },
  {
    _id: "1001",
    weight: 500,
    first_name: "Piyawat",
    last_name: "Setthitikun",
    send_type: "REG"
  },
  {
    _id: "1002",
    weight: 275,
    first_name: "Kim",
    last_name: "Vichaphol",
    send_type: "EMS"
  },
  {
    _id: "1003",
    weight: 750,
    first_name: "Sasuke",
    last_name: "Uchiha",
    send_type: "REG"
  }
];

const branch = [
  { _id: "100", branch: "Chiang Rai" },
  { _id: "101", branch: "Bangkok" },
  { _id: "102", branch: "Nan" },
  { _id: "103", branch: "Chonburi" },
  { _id: "105", branch: "Kanchanaburi" },
  { _id: "106", branch: "Yala" },
  { _id: "104", branch: "Nonthaburi" }
];

const date = [
  {
    _id: "052619",
    day: "26",
    month: "May",
    year: "2019",
    duration: 2
  },
  {
    _id: "010419",
    day: "4",
    month: "January",
    year: "2019",
    duration: 7
  },
  {
    _id: "031819",
    day: "18",
    month: "March",
    year: "2019",
    duration: 4
  }
];

const location = [
  { _id: "BKK", name: "Bangkok" },
  { _id: "CMI", name: "Chiang Mai" },
  { _id: "NBI", name: "Nonthaburi" },
  { _id: "PKT", name: "Phuket" },
  { _id: "STI", name: "Sukhothai" }
];

class Data {
  constructor() {
    console.log("created sample data");
    this.fact = fact;
    this.branch = branch;
    this.parcel = parcel;
    this.date = date;
    this.location = location;
  }
  getFact() {
    return this.fact;
  }
  getBranch() {
    return this.branch;
  }
  getParcel() {
    return this.parcel;
  }
  getDate() {
    return this.date;
  }
  getLocation() {
    return this.location;
  }
}
module.exports = Data;
