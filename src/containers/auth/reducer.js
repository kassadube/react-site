import Immutable from 'immutable';
import * as types from './actionTypes';


const initialState = Immutable.Map({ loged :1, username: '', password: ''});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
        return state.set('loged', state.get('loged') + 1)
                  .set('username', action.payload.username)
                  .set('password', action.payload.password);
    case types.AUTH_USER_SUCCESS:
        return state.set('loged', state.get('loged') + 1)
                  .set('token', action.payload.token);
    case types.AUTH_USER_ERROR:
      debugger;
        return state.set('loged', state.get('loged') + 1)
                  .set('username', action.payload.username)
                  .set('password', action.payload.password);
    default:
      return state
  }
}

export default reducer