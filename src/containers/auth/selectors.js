//import { createSelector } from 'reselect'

export const authSelector = state =>{ return (
    { 
        loged: state.getIn(['auth','loged']),
        username: state.getIn(['auth','username']),
        password: state.getIn(['auth','password'])
    })
}

export const tokenSelector = state =>{ return { 'token' : localStorage.getItem('token'), 
    expire : localStorage.getItem('token-expiration')}};
export const isAuthenticateSelector = state =>{ 
    let res=state.getIn(['auth','isAuthenticate']);
    return res === true? true : false;
}
export const errorSelector = state =>{
     return state.getIn(['auth','error']);
    
}
