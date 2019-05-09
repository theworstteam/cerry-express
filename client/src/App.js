import React, { Component } from "react";
import axios from "axios";
import NavbarRR from './components/navbar'
import Month from './components/month'

class App extends Component {
  state = {
    data: [],
  };

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
                console.log(this.data)
            }catch(err){
                reject(err);
            }
        });
    }
  render() {
    return (
      <React.Fragment>
        <NavbarRR />
        <Month />
      </React.Fragment>
    );
  }
}

export default App;
