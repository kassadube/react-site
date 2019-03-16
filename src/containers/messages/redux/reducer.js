import Immutable, { Map, fromJS, List } from 'immutable';

import * as types from './actionTypes';

const initialState = Immutable.Map({
    val: 0, 
    isPinging: 0,
    'columns_request': 0, 
    'columns_request_test': 0, 
    'columns_request_test2': 0,
    // events
    isFetching: false,
    eventsTableRecords: List([]),
    eventsTableSelectedRowItem: null,
    eventsMaxEventId: 0,
    });

const reducer = (state = initialState, action) => {
    
  switch (action.type) {    
    case types.FLEET_COLUMNS_REQUEST:
        return state.set('columns_request', 1);
    case types.FLEET_COLUMNS_TEST:
        return state.set('columns_request_test', 1);
    case types.FLEET_COLUMNS_TEST2:
        return state.set('columns_request_test2', 1);
    case types.FETCH_MESSAGES_REQUEST: 
            return state.set('isFetching', true);
    case types.FETCH_MESSAGES_SUCCESS: 
        let newEventsListToAdd = fromJS(action.payload.data.events);
        //let newEventsMaxIdToAdd;
        const newMessageMaxId = findMaxId(action.payload.data);
        const eventsIdsToRemove = action.payload.data.removed;
        return state.set('isFetching', false).set('eventsTableRecords', newEventsListToAdd)
                .set('eventsMaxEventId', newMessageMaxId);
    default:
      return state
  }
}

const findMaxId = (data) => data.maxId;

export default reducer