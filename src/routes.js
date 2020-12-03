import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
