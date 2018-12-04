import { combineEpics } from 'redux-observable';
import counterEpics from '../containers/counter/epics';
import authEpics from '../containers/auth/epics';


export default combineEpics(...counterEpics,...authEpics);