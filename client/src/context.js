import React, { Component } from 'react'
import axios from "axios";

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        monthly_data: [],
        loading: true,
    }
    componentDidMount(){
        this.getData()
    }

    getData = () => {
    fetch('http://localhost:5000/api/delivery/average/send-type/March')
      .then((data) => data.json())
      .then((res) => this.setState({ monthly_data: res, loading:false}));
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
