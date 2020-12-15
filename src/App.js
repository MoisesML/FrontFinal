import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";

import BarNaveg from "./components/BarNaveg/BarNaveg";
import Foot from "./components/Footer/Foot";

export default function App() {
  return (
    <Router>
      <BarNaveg/>
      <Switch>
        <Routes />
      </Switch>
      <Foot />
    </Router>
  );
}
