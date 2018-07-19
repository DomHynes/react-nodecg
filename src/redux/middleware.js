import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import history from './history';

const developmentMiddleware = [
  routerMiddleware( history ),
  logger,
];

const productionMiddleware = [
  routerMiddleware( history ),
];

export default applyMiddleware(
  ...( process.env.NODE_ENV === 'production' )
    ? productionMiddleware
    : developmentMiddleware
);
