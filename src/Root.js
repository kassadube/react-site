
import * as serviceWorker from './serviceWorker';

//import { AppContainer } from 'react-hot-loader'
import {  connectRouter } from 'connected-react-router/immutable'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {history} from './store/store';


class Root  extends React.Component {
  render(){
      return(
        <div>
        <Provider store={store}>
          <App history={history} />
        </Provider>
       </div>);
  }

}
window.store = store;
//store.dispatch({type: 'home/ping'});
export default Root;
