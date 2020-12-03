import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import BoardEdit from "./views/BoardEdit";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/board-edit" component={BoardEdit} />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
