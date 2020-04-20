import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StoreListPage from "./StoreListPage";
import GeoListPage from "./GeoListPage";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={StoreListPage} />
      <Route path="/geo" exact component={GeoListPage} />
    </Switch>
  </Router>
);