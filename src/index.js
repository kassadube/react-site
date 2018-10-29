
import * as serviceWorker from './serviceWorker';

//import { AppContainer } from 'react-hot-loader'
import {  connectRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import store, {history} from './store';

import './skeleton.css';
const render = () => {
  ReactDOM.render(
    <div>
      <Provider store={store}>
        <App history={history} />
      </Provider>
     </div>
   ,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}

window.store = store;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
