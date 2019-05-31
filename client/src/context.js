import React, { Component } from 'react'
import axios from "axios";

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        monthly_data: [],
        month: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        loading: true,
    }
    componentDidMount(){
        let {month} = this.state
        for (let index = 0; index < month.length; index++) {
            this.getMonthlyData(month[index])
        }
        this.setState({loading:false})
        
    }

    getMonthlyData = (month) => {
        fetch('http://localhost:5000/api/delivery/average/send-type/'+month)
        .then((data) => data.json())
        .then((res) => this.state.monthly_data.push(res));
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
