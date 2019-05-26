/**
 * An object representing the person who owns and send those parcel(s).
 */
class Sender {
  constructor(name, parcels) {
    this.name = name;
    this.parcels = parcels;
  }

  /**
   * Return name of sender.
   */
  getName() {
    return this.name;
  }

  /**
   * Return list of parcel.
   */
  getParcels() {
    return this.parcels;
  }
}

module.exports = Sender;
