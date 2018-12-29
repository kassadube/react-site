import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { delay, mapTo, map, catchError, mergeMap, tap } from 'rxjs/operators';
import * as types from './actionTypes';
import config from '../../../config';
import SignRequest from '../../../constants/SignRequest';


const authEpic = action$ => action$.pipe(    
    ofType( "PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
     mapTo({ type: "PONG" })
  );

const getUserDefinitionEpic = action$ => action$.pipe(    
  ofType(types.AUTH_USER_DEFINITION_REQUEST),
  map(SignRequest),
  mergeMap(({payload,headers}) => ajax.get(config.URL.GENERAL.ACCOUNT, headers).pipe(
      map(res => res.response),
      //tap((data) =>console.log("RRRR = ", data)),
      map(data => {return {type: types.AUTH_USER_DEFINITION_SUCCESS, payload:data}}),     
    )
  ),  
    catchError((err) => {
      return of({type: types.AUTH_USER_DEFINITION_ERROR, payload:err.message});
    }) 
  );
  

  export default [authEpic, getUserDefinitionEpic];