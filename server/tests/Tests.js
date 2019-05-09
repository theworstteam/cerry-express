const Item = require("../routes/backend/Item.js");
const Parcel = require("../routes/backend/Parcel.js");
const ParcelManager = require("../routes/backend/ParcelManager.js");

// This is just for organisation and reporting
describe("Cerry Express tests", function() {
  describe("Test Item.getName()", function() {
    const apple = new Item("Apple", 0.5);

    before(function() {
      console.log("Created Item with name Apple weigh 0.5 .");
    });

    it("Item name should be apple.", function() {
      if (apple.getName() !== "Apple") {
        throw new Error("Item is not apple");
      }
    });

    it("Weight should be 0.5 .", function() {
      if (apple.getWeight() != 0.5) {
        throw new Error("Item did not weigh 0.5 .");
      }
    });
  });

  describe("Test ParcelManager:", function() {
    const pm1 = new ParcelManager();
    const pm2 = new ParcelManager();
    const pm3 = new ParcelManager();

    before(function() {
      console.log("Created 3 ParcelManager objects.");
    });

    it("ParcelManger should have one instance.", function() {
      if (pm1 != pm2) {
        throw new Error("ParcelManager is not unique.");
      }
    });

    it("ParcelManger should have one instance.", function() {
      if (pm2 != pm3) {
        throw new Error("ParcelManager is not unique.");
      }
    });
  });

  describe("Test Parcel:", function() {

    before(function() {
        console.log("Created 2 Parcel objects.");
    });

    const parcelBuilder1 = new Parcel.Builder()
      .withItems([new Item("testObj1", 250), new Item("testObj2", 250)])
      .withWeight()
      .withPrice()
      .withReceiverName("Bank")
      .withReceiverAddress("bkk")
      .withDate("tonight")
      .withStation("Bangkok");

    const parcelBuilder2 = new Parcel.Builder();
    const parcel1 = new Parcel(parcelBuilder1);
    const parcel2 = new Parcel(parcelBuilder2);

    it("Parcel Transaction ID.",function(){
        if(parcel1.getTransactionID() != 1){
            throw new Error("Fail to get transaction id.");
        }
    });
    it("Parcel items amount.",function(){
        if(parcel1.getItems().length != 2){
            throw new Error("Fail to get parcel items.");
        }
    });
    it("Parcel weight.",function(){
        if(parcel1.getWeight() != 500){
            throw new Error("Fail to get parcel weight.");
        }
    });
    it("Parcel price.",function(){
        if(parcel1.getPrice() != 50){
            throw new Error("Fail to get parcel price.");
        }
    });
    it("Parcel receiver.",function(){
        if(parcel1.getReceiverName() !== "Bank"){
            throw new Error("Wrong receiver.");
        }
    });
    it("Parcel address.",function(){
        if(parcel1.getReceiverAddress() !== "bkk"){
            throw new Error("Wrong address.");
        }
    });
    it("Parcel sent date.",function(){
        if(parcel1.getSentDate() !== "tonight"){
            throw new Error("Wrong date.");
        }
    });
    it("Parcel sent station.",function(){
        if(parcel1.getStation() !== "Bangkok"){
            throw new Error("Wrong station.");
        }
    });
    it("Parcel2 transaction id should be 2",function(){
        if(parcel2.getTransactionID() != 2){
            throw new Error("Transaction id did not increase.")
        }
    });
  });
});
