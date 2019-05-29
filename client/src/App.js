import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home"
import Parcels from "./pages/Parcels"
import Branches from "./pages/Branches"
import Location from "./pages/Location"
import Profits from "./pages/Profits"
import Error from "./pages/Error"
import Piechart from "./components/Piechart"


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/parcels/" component={Parcels}/>
          <Route exact path="/branches/" component={Branches}/>
          <Route exact path="/location/" component={Location}/>
          <Route exact path="/profits/" component={Profits}/>
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
