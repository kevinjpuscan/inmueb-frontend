import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Landing from "./pages/landing";
import Explorer from "./pages/explorer";
import Nav from "./components/Nav";
import Sales from "./pages/sales";
import Favs from "./pages/favs";
import Login from "./pages/login";
import Register from "./pages/register";
import Property from "./pages/property";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Redirect exact from="/profile" to="/login"></Redirect>
        <Route exact path="/home" component={Landing}></Route>
        <Route path="/explorer" component={Explorer}></Route>
        <Route path="/explorer/:code" component={Explorer}></Route>
        <Route path="/favs" component={Favs}></Route>
        <Route path="/sales" component={Sales}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/property/:code" component={Property}></Route>
      </Switch>
      <Nav isLogin />
    </BrowserRouter>
  );
}

export default Routes;
