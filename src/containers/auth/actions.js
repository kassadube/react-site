import axios from 'axios';
import * as types from './actionTypes';
import config from '../../config';

export const authUser = (login) => ({
    type: types.AUTH_USER,
    payload: login
  });


  export const authUser_ACTION = (login) => (dispatch) => { 
    const { username, password } = login;
    const language = 1;

    axios.post(config.URL.SIGNIN, { username, password, langId: language })
      .then((response )=> {
        dispatch({ type: types.AUTH_USER_SUCCESS, payload: { data: response.data } });
      })
      .catch((error) => {
        dispatch({
            type: types.AUTH_USER_ERROR,
            payload: error
        });
    });
}
  
 
  