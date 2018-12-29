import { Map, fromJS, List } from 'immutable';
import * as types from './actionTypes';
import axios from 'axios';
import InitialState from './state';



//const initialState = Immutable.Map({ loged :1, username: '', password: '', isAuthenticate: false});
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.UN_AUTH_USER:
        localStorage.removeItem('token');
        localStorage.removeItem('token-expiration');
        axios.defaults.headers.common.Authorization = '';
        return InitialState;

    case types.AUTH_USER:
        console.log("Auth Reducer ", action);
        return state.set('loged', state.get('loged') + 1)
                  .set('error', null)
                  .set('username', action.payload.username)
                  .set('password', action.payload.password);

    case types.AUTH_USER_SUCCESS:
        axios.defaults.headers.common.Authorization = `Bearer ${action.payload.data.token}`;
        localStorage.setItem('token', action.payload.data.token);
        localStorage.setItem('token-expiration', action.payload.data.expire);
        return state.set('loged', state.get('loged') + 1)
                .set('token', action.payload.data.token)
                .set('isAuthenticate', true);

    case types.AUTH_USER_ERROR:
        return state.set('error', action.payload.name);

    case types.AUTH_USER_DEFINITION_SUCCESS:
        const site = Map(action.payload.data.site);
        const measurement = fromJS(action.payload.data.measurement);
        const account = Map(action.payload.data.account);
        return state.mergeDeepIn(['accountInfo'], site)
            .mergeDeepIn(['measurement'], measurement)
            .mergeDeepIn(['account'], account);
        
    case types.AUTH_USER_DEFINITION_ERROR:    
        return state;
    default:
        return state
  }
}



export default reducer