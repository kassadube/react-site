import { createSelector } from 'reselect'
import {NAME} from './constants';

export const authSelector = state =>{ return (
    { 
        loged: state.getIn(['auth','loged']),
        username: state.getIn(['auth','username']),
        password: state.getIn(['auth','password'])
    })
}

export const tokenSelector = state =>{ 
    return { 'token' : localStorage.getItem('token'), 
            'expire' : localStorage.getItem('token-expiration')}
}

export const isAuthenticateSelector = state =>{ 
    let res=state.getIn([NAME,'isAuthenticate']);
    return res === true? true : false;
}
export const errorSelector = state =>{
     return state.getIn([NAME,'error']);    
}

export const getAccountInfoSelector = state => {
    return state.getIn([NAME, 'accountInfo']);
}
export const getAppLogoSelector = createSelector(
    getAccountInfoSelector,
    account => account.getIn(['appLogo'])
);
export const getAccountLogoSelector = createSelector(
    getAccountInfoSelector,
    account => account.getIn(['accountLogo'])
);


