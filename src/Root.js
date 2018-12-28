
//import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import store, {history} from './store/store';


class Root  extends React.Component {
  render(){
      return(        
          <Provider store={store}>
            <App history={history} />
          </Provider>
      );
  }

}
window.store = store;
//store.dispatch({type: 'home/ping'});
export default Root;
