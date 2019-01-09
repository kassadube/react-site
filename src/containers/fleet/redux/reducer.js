import Immutable from 'immutable';
//import { NAME } from './constants';
import * as types from './actionTypes';

const initialState = Immutable.Map({ val: 0, isPinging: 0, 'columns_request': 0, 'columns_request_test': 0, 'columns_request_test2': 0});

const reducer = (state = initialState, action) => {
    
  switch (action.type) {    
    case types.FLEET_COLUMNS_REQUEST:
        return state.set('columns_request', 1);
    case types.FLEET_COLUMNS_TEST:
        return state.set('columns_request_test', 1);
    case types.FLEET_COLUMNS_TEST2:
        return state.set('columns_request_test2', 1);
    default:
      return state
  }
}

export default reducer