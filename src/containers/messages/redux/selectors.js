//import { createSelector } from 'reselect'
import { NAME} from './constants';


export const columnsSelector = state => state.getIn([NAME,'columns']);