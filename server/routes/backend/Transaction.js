class Transaction {
  constructor(id, data) {
    this.id = id;
    this.data = data;
  }

  getId() {
    return this.id;
  }

  getData() {
    return this.data;
  }
}

module.exports = Transaction;
