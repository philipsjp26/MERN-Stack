import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "../../components/molecules";
import Header from "../../components/molecules/header";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";

import "./mainapp.scss";
const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/create-blog">
              <CreateBlog />
            </Route>
            <Route path="/detail-blog">
              <DetailBlog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

      <Footer />
    </div>
  );
};

export default MainApp;
