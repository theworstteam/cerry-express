import Item from "./Item.js";

/**
 * An object which is use by Sender. Consist of items, receiver address, etc. .
 */
class Parcel {

    constructor(build){
        this.transactionID = build.transactionID;
        this.items = build.items;
        this.weight = build.weight;
        this.price = build.price;
        this.receiverName = build.receiverName;
        this.receiverAddress = build.receiverAddress;
        this.sentDate = build.sentDate;
        this.station = build.station;
    }

    static get Builder(){

        class Builder{

            constructor(){
                this.transactionID = 001; //get transID from ParcelCal
            }
            withItems(items){
                this.items = items;
                return this;
            }
            withWeight(weight){
                this.weight = weight;
                return this;
            }
            withPrice(){
                this.price = 10; // get price from ParcelCal
                return this;
            }
            withReceiverName(name){
                this.receiverName = name;
                return this;
            }
            withReceiverAddress(address){
                this.receiverAddress = address;
                return this;
            }
            withDate(date){
                this.sentDate = date;
                return this;
            }
            withStation(station){
                this.station = station;4
                return this;
            }
            build(){
                return new Parcel(this);
            }
        }
        return Builder;
    }
    /**
     * Return the parcel transaction id.
     */
    getTransactionID(){
        return this.transactionID;
    }

    /**
     * Return list of items in the parcel.
     */
    getItems(){
        return this.items;
    }

    /**
     * Return the parcel weight.
     */
    getWeight(){
        return this.weight;
    }

    /**
     * Return the parcel price.
     */
    getPrice(){
        return this.price;
    }

    /**
     * Return the parcel receiver name.
     */
    getReceiverName(){
        return this.receiverName;
    }

    /**
     * Return the parcel address.
     */
    getReceiverAddress(){
        return this.receiverAddress
    }

    /**
     * Return the parcel sent date.
     */
    getSentDate(){
        return this.sentDate;
    }

    /**
     * Return the station that the parcel was sent.
     */
    getSentStation(){
        return this.station;
    }
}