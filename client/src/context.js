import React, { Component } from 'react'
import axios from "axios";

const ParcelContext = React.createContext();

class Context extends Component {
    state={
        data: [],
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
        <Context.Provider value=''>
            {this.props.children}
        </Context.Provider>
        )
    }
    }

const ParcelConsumer = ParcelContext.Consumer;

export {ParcelContext, ParcelConsumer , Context}
