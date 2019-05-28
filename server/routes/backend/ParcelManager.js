/**
 * A singleton class for managing parcels.
 */
class ParcelManager {
  constructor() {
    this.id = 0;

    if (!!ParcelManager.instance) {
      return ParcelManager.instance;
    }

    ParcelManager.instance = this;

    return this;
  }

  /**
   * Applys the transaction id to the parcel.
   */
  applyTransID() {
    this.id++;
    return this.id;
  }

  /**
   * Calculate total weight of parcel.
   * @param {Array[Item]} items
   */
  sumWeight(items) {
    var weight = 0;
    for (let i = 0; i < items.length; i++) {
      weight += items[i].getWeight();
    }
    return weight;
  }

  /**
   * Calculate the price of parcel.
   * @param {Array[Item]} items
   */
  calPrice(items) {
    var weight = this.sumWeight(items);
    return (weight / 100) * 10;
  }
}

module.exports = ParcelManager;
