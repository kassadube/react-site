import Immutable from 'immutable';
import * as types from './actionTypes';




const initialState = Immutable.Map({ loged :1, username: '', password: '', isAuthenticate: false});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UN_AUTH_USER:
      localStorage.removeItem('token');
      localStorage.removeItem('token-expiration');
      return initialState;
    case types.AUTH_USER:
        console.log("Auth Reducer ", action);
        return state.set('loged', state.get('loged') + 1)
                  .set('error', null)
                  .set('username', action.payload.username)
                  .set('password', action.payload.password);
    case types.AUTH_USER_SUCCESS:
          localStorage.setItem('token', action.payload.data.token);
          localStorage.setItem('token-expiration', action.payload.data.expire);
          return state.set('loged', state.get('loged') + 1)
                  .set('token', action.payload.data.token)
                  .set('isAuthenticate', true);
    case types.AUTH_USER_ERROR:
          return state.set('error', action.payload.name);
    default:
      return state
  }
}



export default reducer