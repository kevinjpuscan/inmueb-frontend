import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Explorer from "./pages/explorer";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/explorer" component={Explorer}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
