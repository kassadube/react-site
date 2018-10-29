
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import counterReducer from './counter';
import epics from './epics';

const rootReducer = combineReducers({
  count: counterReducer,
})
export const cb = combineEpics(...epics);
export default rootReducer
