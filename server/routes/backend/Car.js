class Car {
  constructor(id, cid, t) {
    this.id = id;
    this.car_branch_id = cid;
    this.type = t;
  }

  getCarID() {
    return this.id;
  }

  getCarBranchID() {
    return this.car_branch_id;
  }

  getCarType() {
    return this.type;
  }
}

module.exports = Car;
