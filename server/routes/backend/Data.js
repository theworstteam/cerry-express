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
    transaction_date: "091519",
    branch: "103",
    location: "PKT"
  },
  {
    _id: "10003",
    parcel: "1003",
    transaction_date: "010419",
    branch: "104",
    location: "NBI"
  },
  {
    _id: "10004",
    parcel: "1004",
    transaction_date: "020519",
    branch: "102",
    location: "TAK"
  },
  {
    _id: "10005",
    parcel: "1005",
    transaction_date: "041119",
    branch: "108",
    location: "PRE"
  },
  {
    _id: "10006",
    parcel: "1006",
    transaction_date: "070219",
    branch: "104",
    location: "CMI"
  },
  {
    _id: "10007",
    parcel: "1007",
    transaction_date: "060119",
    branch: "101",
    location: "NBI"
  },
  {
    _id: "10008",
    parcel: "1008",
    transaction_date: "081219",
    branch: "106",
    location: "PKT"
  },
  {
    _id: "10009",
    parcel: "1009",
    transaction_date: "121019",
    branch: "103",
    location: "CMI"
  },
  {
    _id: "10010",
    parcel: "1010",
    transaction_date: "111019",
    branch: "106",
    location: "KBI"
  },
  {
    _id: "10011",
    parcel: "1011",
    transaction_date: "100419",
    branch: "107",
    location: "SKN"
  },
  {
    _id: "10012",
    parcel: "1012",
    transaction_date: "031219",
    branch: "101",
    location: "CMI"
  },
  {
    _id: "10013",
    parcel: "1013",
    transaction_date: "060819",
    branch: "102",
    location: "SKN"
  },
  {
    _id: "10014",
    parcel: "1014",
    transaction_date: "072619",
    branch: "105",
    location: "PRE"
  },
  {
    _id: "10015",
    parcel: "1015",
    transaction_date: "012919",
    branch: "108",
    location: "BKK"
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
  },
  {
    _id: "1004",
    weight: 350,
    first_name: "Ufufuai",
    last_name: "Osas",
    send_type: "EMS"
  },
  {
    _id: "1005",
    weight: 1200,
    first_name: "Yumyum",
    last_name: "Waiwai",
    send_type: "EMS"
  },
  {
    _id: "1006",
    weight: 600,
    first_name: "Inuyacha",
    last_name: "Samuel",
    send_type: "REG"
  },
  {
    _id: "1007",
    weight: 400,
    first_name: "Kittin",
    last_name: "Vatabutr",
    send_type: "REG"
  },
  {
    _id: "1008",
    weight: 250,
    first_name: "Kittin",
    last_name: "Vatabutr",
    send_type: "EMS"
  },
  {
    _id: "1009",
    weight: 650,
    first_nmae: "Vataboy",
    last_name: "Lastepisode",
    send_type: "REG"
  },
  {
    _id: "1010",
    weight: 1000,
    first_name: "Umami",
    last_name: "Aroy",
    send_type: "EMS"
  },
  {
    _id: "1011",
    weight: 1100,
    first_name: "Foo",
    last_name: "Inupopp",
    send_type: "REG"
  },
  {
    _id: "1012",
    weight: 150,
    first_name: "Kim",
    last_name: "Vichapol",
    send_type: "EMS"
  },
  {
    _id: "1013",
    weight: 1150,
    first_name: "Gungntym",
    last_name: "Style",
    send_type: "EMS"
  },
  {
    _id: "1014",
    weight: 300,
    first_name: "Piyawat",
    last_name: "Setthitikul",
    send_type: "REG"
  },
  {
    _id: "1015",
    weight: 550,
    first_name: "Tanasorn",
    last_name: "Jeendang",
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
  { _id: "104", branch: "Nonthaburi" },
  { _id: "107", branch: "Krabi" },
  { _id: "108", branch: "Tak" }
];

const date = [
  { _id: "052619", day: "26", month: "May", year: "2019", duration: 2 },
  { _id: "010419", day: "4", month: "January", year: "2019", duration: 7 },
  { _id: "031819", day: "18", month: "March", year: "2019", duration: 4 },
  { _id: "020519", day: "5", month: "February", year: "2019", duration: 5 },
  { _id: "041119", day: "11", month: "April", year: "2019", duration: 6 },
  { _id: "070219", day: "2", month: "July", year: "2019", duration: 1 },
  { _id: "060119", day: "1", month: "June", year: "2019", duration: 10 },
  { _id: "081219", day: "12", month: "August", year: "2019", duration: 15 },
  { _id: "121019", day: "10", month: "December", year: "2019", duration: 4 },
  { _id: "111019", day: "10", month: "November", year: "2019", duration: 7 },
  { _id: "091519", day: "15", month: "September", year: "2019", duration: 12 },
  { _id: "100419", day: "4", month: "October", year: "2019", duration: 2 },
  { _id: "031219", day: "12", month: "March", year: "2019", duration: 3 },
  { _id: "060819", day: "8", month: "June", year: "2019", duration: 1 },
  { _id: "072619", day: "26", month: "July", year: "2019", duration: 2 },
  { _id: "012919", day: "29", month: "January", year: "2019", duration: 3 }
];

const location = [
  { _id: "BKK", name: "Bangkok" },
  { _id: "CMI", name: "Chiang Mai" },
  { _id: "NBI", name: "Nonthaburi" },
  { _id: "PKT", name: "Phuket" },
  { _id: "STI", name: "Sukhothai" },
  { _id: "KBI", name: "Krabi" },
  { _id: "TAK", name: "Tak" },
  { _id: "STN", name: "Satun" },
  { _id: "PRE", name: "Phrae" }
];

class Data {
  constructor() {
    // console.log("created sample data");
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
