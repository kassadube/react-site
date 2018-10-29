import { combineEpics } from 'redux-observable';
import epics from '../containers/counter/epics';


export default combineEpics(...epics);