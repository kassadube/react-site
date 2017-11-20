import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

function configureStore(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
      // Add other middleware on this line...
  
      // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
     
  
      // thunk middleware can also accept an extra argument to be passed to each thunk action
      // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
      thunk,
      reactRouterMiddleware,
    ];
  
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
      applyMiddleware(...middlewares)
      )
    );
  
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextReducer = require('./reducers').default; // eslint-disable-line global-require
        store.replaceReducer(nextReducer);
      });
    }
  
    return store;
  }
  
  export default configureStore;