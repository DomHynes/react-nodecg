import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { DashboardRoutes } from '../../config/routes';
import { Sidebar } from './sidebar';

import { Layout } from 'antd';

import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

const Dashboard = () => (
  <Router>
    <Fragment>
      <Sider>
        <Sidebar />
      </Sider>
      <Content>
        {renderRoutes( DashboardRoutes )}
      </Content>
    </Fragment>
  </Router>
)

export default Dashboard;
