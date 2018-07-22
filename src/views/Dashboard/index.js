import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { DashboardRoutes } from '../../config/routes';

const Dashboard = () => (
  <Router>
    <Fragment>
      {renderRoutes( DashboardRoutes )}
    </Fragment>
  </Router>
)

export default Dashboard;
