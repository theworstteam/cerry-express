import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home"
import Parcels from "./pages/Parcels"
import Error from "./pages/Error"


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/parcels/" component={Parcels}/>
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
