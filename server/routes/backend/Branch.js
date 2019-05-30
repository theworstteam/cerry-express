class Branch{
    constructor(id,branch){
        this.id = id;
        this.name = branch;
    }

    getBranchID(){
        return this.id;
    }

    getBranchName(){
        return this.name;
    }
}
module.exports = Branch;