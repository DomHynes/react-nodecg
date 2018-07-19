import { compose, createStore } from 'redux';
import { connectRouter } from 'connected-react-router';
import middleware from './middleware';
import reducers from './reducers';
import history from './history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter( history )( reducers ),
  {},
  composeEnhancers( middleware ),
);

export default store;
