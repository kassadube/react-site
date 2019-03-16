
import * as ActionTypes from './actionTypes';
  
export const columns_ACTION = () => ({
      type: ActionTypes.FLEET_COLUMNS_REQUEST
     
});
  
export const fetchMessagesAction = (payload) => ({
      type: ActionTypes.FETCH_MESSAGES_REQUEST,
      payload,
  });