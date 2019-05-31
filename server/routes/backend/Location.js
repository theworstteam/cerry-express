class Location {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getLocationID() {
    return this.id;
  }

  getLocationName() {
    return this.name;
  }
}

module.exports = Location;
