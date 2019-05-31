import React, { Component } from 'react'

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        monthly_parcel: [],
        monthly_weight: [],
        month: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        loading: true,
    }
    componentDidMount(){
        let {month} = this.state
        for (let index = 0; index < month.length; index++) {
            this.getMonthlyParcel(month[index])

        }
        console.log(this.state.monthly_weight)
        this.setState({
            loading:false
        })
        
    }

    getMonthlyParcel = (month) => {
        fetch('http://localhost:5000/api/delivery/average/send-type/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_parcel.push(res));
    }
    getMonthyWeight = (month) => {
        fetch('http://localhost:5000/api/delivery/average/weight/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_weight.push(res));
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
