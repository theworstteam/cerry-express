import React, { Component } from 'react'

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        monthly_parcel: [],
        monthly_weight: [],
        monthly_service: [],
        monthly_location: [],
        monthly_wl: [],
        month: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        loading: true,
    }
    componentDidMount(){
        this.initData()
        let {month} = this.state
        for (let index = 0; index < month.length; index++) {
            this.queryMonthlyParcel(month[index])
            this.queryMonthlyWeight(month[index])
            this.queryMonthlyService(month[index])
            this.queryMonthlyLocation(month[index])
            this.queryMonthlyWL(month[index])
        }
        this.setState({
            loading:false
        })
        
    }
    initData = () => {
        fetch('http://localhost:5000/api/delivery/data')
    }
    queryMonthlyParcel = (month) => {
        fetch('http://localhost:5000/api/delivery/average/send-type/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_parcel.push(res));
    }
    queryMonthlyWeight = (month) => {
        fetch('http://localhost:5000/api/delivery/average/weight/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_weight.push(res));
    }
    queryMonthlyService = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/service/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_service.push(res));
    }
    queryMonthlyLocation = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/location/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_location.push(res));
    }
    queryMonthlyWL = (month) =>{
        fetch('http://localhost:5000/api/delivery/average/weight-location/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_wl.push(res));
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
