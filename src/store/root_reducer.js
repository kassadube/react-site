import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import counter from '../containers/counter';
import auth from '../containers/auth';

export default (history) =>combineReducers({
    router: connectRouter(history),
    counter: counter.reducer,
    auth:auth.reducer
});


