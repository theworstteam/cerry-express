import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home"
import Parcels from "./pages/Parcels"
import Service from "./pages/Service"
import Location from "./pages/Location"
import Resource from './pages/Resource'
import AddParcel from './pages/AddParcel'
import Error from "./pages/Error"


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/parcel/" component={Parcels}/>
          <Route exact path="/service/" component={Service}/>
          <Route exact path="/location/" component={Location}/>
          <Route exact path="/resource/" component={Resource}/>
          <Route exact path="/addParcel/" component={AddParcel}/>
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
