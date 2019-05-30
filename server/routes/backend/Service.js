class Service {
  constructor(st, a) {
    this.station = st;
    this.amount = a;
  }

  getStation() {
    return this.station;
  }

  setAmount(input) {
    this.amount = input;
  }

  getAmount(){
      return this.amount;
  }
}

module.exports = Service;
