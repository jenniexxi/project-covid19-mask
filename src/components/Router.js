import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StoreListPage from "./StoreListPage";
import GeoListPage from "./GeoListPage";
import Header from "./Header";
import TopBar from "./TopBar";
import About from "./About";

export default () => (
  <Router>
    <Header/>
    <TopBar />
    <Switch>
      <Route path="/" exact component={GeoListPage} />
      {/* <Route path="/geo" exact component={GeoListPage} /> */}
      <Route path="/list" exact component={StoreListPage} />
      <Route path="/about" exact component={About} />
    </Switch>
  </Router>
);