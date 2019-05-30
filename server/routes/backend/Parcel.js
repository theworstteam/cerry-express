class Parcel{
    constructor(id,weight,first,last,send){
        this.id = id;
        this.weight = weight;
        this.firstName = first;
        this.lastName = last;
        this.sendType = send;
    }

    getParcelID(){
        return this.id;
    }

    getParcelWeight(){
        return this.weight;
    }

    getName(){
        return this.firstName + this.lastName;
    }

    getSendType(){
        return this.sendType;
    }
}

module.exports = Parcel;