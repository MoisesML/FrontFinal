import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import SessionContextProvider from './context/SessionContext';
import BarNaveg from "./components/BarNaveg";
import Foot from "./components/Foot";

export default function App() {
  return (
    <Router>
      <SessionContextProvider>
        <BarNaveg />
        <Switch>
          <Routes />
        </Switch>
        <Foot />
      </SessionContextProvider>
    </Router>
  );
}
