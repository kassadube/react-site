
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router/immutable';
import { createEpicMiddleware } from 'redux-observable';
// eslint-disable-next-line no-unused-vars
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import epics from './root_epics';
import reducer from './root_reducer';
import auth from '../containers/auth';


export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();
const initialState = Immutable.Map();
const authMiddleware = [auth.middlewares.customMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = composeEnhancers(
  //applyMiddleware(createLogger()),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  applyMiddleware(...authMiddleware),
  applyMiddleware(epicMiddleware),
);

const store = createStore(
  reducer(history),
  initialState,
  middlewares,
)
epicMiddleware.run(epics);
export default store;