//import { createSelector } from 'reselect'

export const authSelector = state =>{ return (
    { 
        loged: state.getIn(['auth','loged']),
        username: state.getIn(['auth','username']),
        password: state.getIn(['auth','password'])
    })
}

export const tokenSelector = state =>{ return localStorage.get('token');}
