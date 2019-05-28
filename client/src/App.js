import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
    intervalIsSet: false
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
    return <div><button onClick = {this.getData}></button></div>;
  }
}

export default App;
