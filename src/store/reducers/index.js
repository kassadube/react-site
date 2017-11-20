import { combineReducers } from 'redux';
import {helloWorld} from './helloWorld';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    helloWorld,
    routing: routerReducer
});

export default rootReducer;