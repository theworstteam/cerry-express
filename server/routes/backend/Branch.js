class Branch {
  constructor(id, branch, cbi, sbi) {
    this.id = id;
    this.name = branch;
    this.car_branch_id = cbi;
    this.staff_branch_id = sbi;
  }

  getBranchID() {
    return this.id;
  }

  getBranchName() {
    return this.name;
  }

  getCarBranchID() {
    return this.car_branch_id;
  }

  getStaffBranchID() {
    return this.staff_branch_id;
  }
}
module.exports = Branch;
