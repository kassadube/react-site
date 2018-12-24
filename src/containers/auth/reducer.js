import Immutable from 'immutable';
import * as types from './actionTypes';




const initialState = Immutable.Map({ loged :1, username: '', password: ''});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
        return state.set('loged', state.get('loged') + 1)
                  .set('error', null)
                  .set('username', action.payload.username)
                  .set('password', action.payload.password);
    case types.AUTH_USER_SUCCESS:
          localStorage.setItem('token', action.payload.data.token);
          localStorage.setItem('token-expiration', action.payload.data.expire);
          return state.set('loged', state.get('loged') + 1)
                  .set('token', action.payload.data.token);
    case types.AUTH_USER_ERROR:
          return state.set('error', action.payload.name);
    default:
      return state
  }
}



export default reducer