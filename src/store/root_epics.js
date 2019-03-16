import { combineEpics } from 'redux-observable';
import counterEpics from '../containers/counter/epics';
import authEpics from '../containers/auth/redux/epics';
import fleetEpics from '../containers/fleet/redux/epics';
import messagesEpics from '../containers/messages/redux/epics';


export default combineEpics(...counterEpics, ...authEpics, ...fleetEpics, ...messagesEpics);