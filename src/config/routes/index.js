import React from 'react';
import { Redirect } from 'react-router-dom';
import { SetInfo } from '../../pages/dashboard';

const rootUrl = '/bundles/test/dashboard'

export const DashboardRoutes = [
  {
    path: `${rootUrl}/index.html/`,
    exact: true,
    component: () => (<Redirect to={`${rootUrl}/names/`} />),
  },
  {
    path: `${rootUrl}/names/`,
    component: SetInfo,
  },
]

export const GraphicRoutes = [

]
