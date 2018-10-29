
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import rootReducer , {cb}from './reducers'

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();
const initialState = Immutable.Map();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = composeEnhancers(
  applyMiddleware(createLogger()),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(epicMiddleware),
);

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  middlewares,
)
epicMiddleware.run(cb);
export default store;