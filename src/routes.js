import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";
import Explorer from "./pages/explorer";
import Nav from "./components/nav";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/explorer/:code" component={Explorer}></Route>
        <Route path="/favs" component={Explorer}></Route>
        <Route path="/profile" component={Explorer}></Route>
      </Switch>
      <Nav isLogin />
    </BrowserRouter>
  );
}

export default Routes;
