//import { createSelector } from 'reselect'
import { NAME} from './constants';


export const columnsSelector = state => state.getIn([NAME,'columns']);

export const eventsSelector = state => { 
 
     return state.getIn(['messages','eventsTableRecords']);
    };