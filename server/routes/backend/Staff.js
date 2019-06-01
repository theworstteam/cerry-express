class Staff{
    constructor(id,branch,first,last){
        this.id = id;
        this.staff_branch_id= branch;
        this.first_name = first;
        this.last_name = last;
    }

    getStaffID(){
        return this.id;
    }

    getStaffBranchID(){
        return this.staff_branch_id;
    }

    getStaffName(){
        return this.first_name + this.last_name;
    }
}

module.exports = Staff;