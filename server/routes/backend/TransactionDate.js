class TransactionDate {
  constructor(id, da, m, y, d) {
    this.id = id;
    this.day = da;
    this.month = m;
    this.year = y;
    this.duration = d;
  }

  getID() {
    return this.id;
  }

  getDay() {
    return this.day;
  }
  
  getMonth() {
    return this.month;
  }

  getYear() {
    return this.year;
  }

  getDuration() {
    return this.duration;
  }
}

module.exports = TransactionDate;
