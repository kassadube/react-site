import axios from 'axios';
import * as types from './actionTypes';
import config from '../../config';
import translate from '../../constants/translate';

export const authUser = (login) => ({
    type: types.AUTH_USER,
    payload: login
  });


  export const authUser_ACTION = (login) => (dispatch) => { 
    const { username, password } = login;
    const language = 1;
    dispatch(authUser(login));
    /*axios.post(config.URL.SIGNIN, { username, password, langId: language })
      .then((response )=> {
        dispatch({ type: types.AUTH_USER_SUCCESS, payload: { data: response.data } });
      })
      .catch((error) => {        
        dispatch(authError(error.response.data));
    });*/
}

export const unAuthUser_ACTION = (login) => (dispatch) => { 
   
    dispatch({type: types.UN_AUTH_USER});
}

export const authError = (error) => {
  if (error.code === -3007) {
      error.message = translate('lblPasswordIsWrong');
  } else if (error.code === -400 || error.code === -500) {
      error.message = translate('lblAccountLocked');
  } else if (error.code === -3059) {
      error.message = translate('lblAccountDisabled');
  } else if (error.code === -300) {
      error.message = translate('lblPasswordExpired');
  } else {
      error.message = translate('lblPasswordIsWrong');
  }
  return ({
      type: types.AUTH_USER_ERROR,
      payload: error
  });
};
  
 
  