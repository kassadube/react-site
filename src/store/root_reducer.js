import { combineReducers } from 'redux-immutable';

import counter from '../containers/counter';
import auth from '../containers/auth';

export default combineReducers({
    counter: counter.reducer,
    auth:auth.reducer
});


