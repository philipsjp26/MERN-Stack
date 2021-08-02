import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
