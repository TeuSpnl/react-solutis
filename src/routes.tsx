import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";
import asylumMap from './pages/asylummap'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={asylumMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;