import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
    intervalIsSet: false
  };

  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1500);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }

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

  // componentWillUnmount() {
  //   if (this.state.intervalIsSet) {
  //     clearInterval(this.state.intervalIsSet);
  //     this.setState({ intervalIsSet: null });
  //   }
  // }
  // getDataFromDb = () => {
  //   fetch("http://localhost:5000/api/delivery/parcels")
  //     .then(data => data.json())
  //     .then(res => this.setState({ data: res.data }));
  //   console.log(this.state.data);
  // };

  render() {
    return <div><button onClick = {this.getData}></button></div>;
  }
}

export default App;
