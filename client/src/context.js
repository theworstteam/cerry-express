import React, { Component } from 'react'
import axios from "axios";

const ParcelContext = React.createContext();

class ParcelProvider extends Component {
    state={
        data: [],
        ems: [],
        loading: true,
    }

    componentDidMount(){
        
    }

    getData = () => {
    return new Promise(async (resolve,reject) => {
        try{
            const res = await axios.get("http://localhost:5000/api/delivery/parcels");
            this.data = res.data
            resolve(
                this.data.map(element => ({
                    ...element,
                }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    render() {
        return (
        <ParcelProvider.Provider value={{...this.state,getData:this.getData}}>
            {this.props.children}
        </ParcelProvider.Provider>
        )
    }
    }

const ParcelConsumer = ParcelContext.Consumer;

export {ParcelContext, ParcelConsumer , ParcelProvider}
