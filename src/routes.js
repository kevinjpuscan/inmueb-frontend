import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/landing";
import Explorer from "./pages/explorer";
import Nav from "./components/nav";
import Sales from "./pages/sales";
import Favs from "./pages/favs";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route exact path="/home" component={Landing}></Route>
        <Route path="/explorer" component={Explorer}></Route>
        <Route path="/explorer/:code" component={Explorer}></Route>
        <Route path="/favs" component={Favs}></Route>
        <Route path="/sales" component={Sales}></Route>
        <Route path="/profile" component={Explorer}></Route>
      </Switch>
      <Nav isLogin />
    </BrowserRouter>
  );
}

export default Routes;
