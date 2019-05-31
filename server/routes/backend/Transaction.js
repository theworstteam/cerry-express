class Transaction {
  constructor(t_id, p_id,d_id,b_id,l_id) {
    this.transaction_id = t_id;
    this.parcel_id = p_id;
    this.date_id = d_id;
    this.branch_id = b_id;
    this.location_id=l_id;
  }

  getTransactionID() {
    return this.transaction_id;
  }

  getParcelID() {
    return this.parcel_id;
  }

  getDateID(){
      return this.date_id;
  }

  getBranchID(){
      return this.branch_id;
  }

  getLocationID(){
      return this.location_id;
  }
}

module.exports = Transaction;
