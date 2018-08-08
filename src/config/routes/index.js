import React from 'react';
import { Redirect } from 'react-router-dom';
import { SetInfo } from '../../pages/dashboard';
import { SetScores } from '../../pages/graphics';

const rootUrl = '/bundles/test/dashboard'

export const DashboardRoutes = [
  {
    path: `${rootUrl}/index.html/`,
    exact: true,
    component: ({location}) => (<Redirect to={{
      pathname: `${rootUrl}/setinfo/`,
      search: location.search
      }}/>),
  },
  {
    path: `${rootUrl}/setinfo/`,
    component: SetInfo,
  },
  {
    path: `${rootUrl}/text/`,
    component: () => <p> yeet </p>,
  },
]

export const GraphicRoutes = [
  {
    route: 'setinfo',
    component: () => <SetScores />
  }
]
