
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import epics from './root_epics';
import reducer from './root_reducer';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();
const initialState = Immutable.Map();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = composeEnhancers(
 // applyMiddleware(createLogger()),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(epicMiddleware),
);

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  middlewares,
)
epicMiddleware.run(epics);
export default store;