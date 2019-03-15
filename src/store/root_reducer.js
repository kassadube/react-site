import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import counter from '../containers/counter';
import auth from '../containers/auth';
import fleet from '../containers/fleet';
import messages from '../containers/messages';

export default (history) =>combineReducers({
    router: connectRouter(history),
    counter: counter.reducer,
    auth: auth.reducer,
    fleet: fleet.reducer,
    messages: messages.reducer,
});


