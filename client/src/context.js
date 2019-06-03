import React, { Component } from 'react'

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        average_parcel: [],
        average_weight: [],
        average_service: [],
        average_location: [],
        average_wl: [],
        branch_car: [],
        branch_staff: [],
        month: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        loading: true,
    }
    componentDidMount(){
        this.initData()
        let {month} = this.state
        for (let index = 0; index < month.length; index++) {
            this.queryAverageSendType(month[index])
            this.queryAverageWeight(month[index])
            this.queryAverageService(month[index])
            this.queryAverageLocation(month[index])
            this.queryAverageWeightLocation(month[index])
        }
        this.queryBranchCar()
        this.queryBranchStaff()
        this.setState({
            loading:false
        })
        
    }
    initData = () => {
        fetch('http://localhost:5000/api/delivery/data')
    }
    queryAverageSendType = (month) => {
        fetch('http://localhost:5000/api/delivery/average/send-type/'+month)
        .then((data) => data.json())
        .then((res) => this.state.average_parcel.push(res));
    }
    queryAverageWeight = (month) => {
        fetch('http://localhost:5000/api/delivery/average/weight/'+month)
        .then((data) => data.json())
        .then((res) => this.state.average_weight.push(res));
    }
    queryAverageService = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/service/'+month)
        .then((data) => data.json())
        .then((res) => this.state.average_service.push(res));
    }
    queryAverageLocation = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/location/'+month)
        .then((data) => data.json())
        .then((res) => this.state.average_location.push(res));
    }
    queryAverageWeightLocation = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/weight-location/'+month)
        .then((data) => data.json())
        .then((res) => this.state.average_wl.push(res));
    }
    queryBranchCar = () =>{
        fetch('http://localhost:5000/api/delivery/branch/car')
        .then((data) => data.json())
        .then((res) => this.state.branch_car.push(res));
    }
    queryBranchStaff = () =>{
        fetch('http://localhost:5000/api/delivery/branch/staff')
        .then((data) => data.json())
        .then((res) => this.state.branch_staff.push(res));
    }
  
    
    render() {
        return (
        <ParcelContext.Provider value={this.state}>
            {this.props.children}
        </ParcelContext.Provider>
        )
    }
    }

const ParcelConsumer = ParcelContext.Consumer;

export {ParcelContext, ParcelConsumer , ParcelProvider}
