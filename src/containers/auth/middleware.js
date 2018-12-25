import axios from 'axios';
import * as types from './actionTypes';
import config from '../../config';
import translate from '../../constants/translate';

export const customMiddleware = store => next => action => {
    console.log("Middleware triggered:", action);
    if(action.type === types.AUTH_USER)
    {
      const { username, password, } = action.payload;
      const language = 1;
      axios.post(config.URL.SIGNIN, { username, password, langId: language })
        .then((response )=> {
          store.dispatch({ type: types.AUTH_USER_SUCCESS, payload: { data: response.data } });
        })
        .catch((error) => {        
          store.dispatch(authError(error.response.data));
      });
    }
    return next(action);
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

