import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoreListPage from "./StoreListPage";
export default () => (
  <Router>
    <Route path="/address" component={StoreListPage} />
    <Route path="/geo" component={GeoListPage} />
  </Router>
)