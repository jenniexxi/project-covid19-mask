import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StoreListPage from "./StoreListPage";
import GeoListPage from "./GeoListPage";
import Header from "./Header";

export default () => (
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={GeoListPage} />
      {/* <Route path="/geo" exact component={GeoListPage} /> */}
      <Route path="/list" exact component={StoreListPage} />
    </Switch>
  </Router>
);