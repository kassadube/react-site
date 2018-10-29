import { combineReducers } from 'redux-immutable';

import counter from '../containers/counter';

export default combineReducers({
    counter: counter.reducer
});


