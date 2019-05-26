const ParcelManager = require("./ParcelManager.js");
const pm = new ParcelManager();
/**
 * An object which is use by Sender. Consist of items, receiver address, etc. .
 */
class Parcel {
  constructor(build) {
    this.transactionID = build.transactionID;
    this.items = build.items;
    this.weight = build.weight;
    this.price = build.price;
    this.receiverName = build.receiverName;
    this.receiverAddress = build.receiverAddress;
    this.sentDate = build.sentDate;
    this.station = build.station;
  }

  static get Builder() {
    class Builder {
      constructor() {
        this.transactionID = pm.applyTransID(); //get transID from ParcelCal
      }
      withItems(items) {
        this.items = items;
        return this;
      }
      withWeight() {
        this.weight = pm.sumWeight(this.items);
        return this;
      }
      withPrice() {
        this.price = pm.calPrice(this.items);
        return this;
      }
      withReceiverName(name) {
        this.receiverName = name;
        return this;
      }
      withReceiverAddress(address) {
        this.receiverAddress = address;
        return this;
      }
      withDate(date) {
        this.sentDate = date;
        return this;
      }
      withStation(station) {
        this.station = station;
        return this;
      }
      build() {
        return new Parcel(this);
      }
    }
    return Builder;
  }
  /**
   * Return the parcel transaction id.
   */
  getTransactionID() {
    return this.transactionID;
  }

  /**
   * Return list of items in the parcel.
   */
  getItems() {
    return this.items;
  }

  /**
   * Return the parcel weight.
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Return the parcel price.
   */
  getPrice() {
    return this.price;
  }

  /**
   * Return the parcel receiver name.
   */
  getReceiverName() {
    return this.receiverName;
  }

  /**
   * Return the parcel address.
   */
  getReceiverAddress() {
    return this.receiverAddress;
  }

  /**
   * Return the parcel sent date.
   */
  getSentDate() {
    return this.sentDate;
  }

  /**
   * Return the station that the parcel was sent.
   */
  getStation() {
    return this.station;
  }

  /**
   * String format for parcel object.
   */
  toString() {
    return `Transaction ID: ${this.transactionID}\n Item amount: ${
      this.items.length
    }\n Weight: ${this.weight}\n Price: ${this.price}\n Receiver: ${
      this.receiverName
    }\n Address: ${this.receiverAddress}\n Sent date: ${
      this.sentDate
    }\n Station: ${this.station}`;
  }
}

module.exports = Parcel;
