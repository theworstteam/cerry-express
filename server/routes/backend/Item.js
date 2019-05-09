/**
 * An object consist of name and weight.
 */
class Item {
  constructor(name, weight) {
    this.itemName = name;
    this.weight = weight;
  }

  /**
   * Return name of the item.
   */
  getName(){
      return this.itemName;
  }

  /**
   * Return weight of the item.
   */
  getWeight(){
      return this.weight;
  }

  /**
   * Return string of Item in format of Item name: foo, Item weight: bar
   */
  toString(){
    return `Item name: ${this.itemName}, Item weight: ${this.weight}`;
  }
}

module.exports = Item;
