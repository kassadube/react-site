import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { delay, mapTo, map, catchError, mergeMap, pluck,tap,exhaustMap } from 'rxjs/operators';
import * as types from './actionTypes';
import config from '../../../config';
import SignRequest from '../../../constants/SignRequest';
import translate from '../../../constants/translate';


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
  
  const getUserAuthEpics = action$ => action$.pipe(    
    ofType(types.AUTH_USER),    
    mergeMap(({payload}) => ajax.post(config.URL.SIGNIN, payload,  { 'Content-Type': 'application/json' }).pipe(      
        pluck('response'),                
        map(data => {return {type: types.AUTH_USER_SUCCESS, payload:data}})     
      )
    ),  
      catchError((err) => {
        return of(authError(err.response));
      }) 
    );

    const getUserAuthEpicss = action$ => action$.pipe(    
      ofType(types.AUTH_USER),    
      mergeMap(({payload}) => ajax.post(config.URL.SIGNIN, payload,  { 'Content-Type': 'application/json' }).pipe(      
          pluck('response'),
          concat(data => of([1,2]).pipe(               
          map(data => {return {type: types.AUTH_USER_SUCCESS, payload:data}})
          ))     
        )
      ),  
        catchError((err) => {
          return of(authError(err.response));
        }) 
      );
    
    const getUserAuthEpic = action$ => action$.pipe(    
      ofType(types.AUTH_USER),    
      mergeMap(({payload}) => 
      concat(ajax.post(config.URL.SIGNIN, payload,  { 'Content-Type': 'application/json' }).pipe(      
          pluck('response'),        
          exhaustMap(data => {
            return of({type: types.AUTH_USER_SUCCESS, payload:data}).pipe(map(x=> x))}),  
            catchError((err) => {
              return of(authError(err.response));
            }) ,
            tap(x=> console.log("TFTGHYUJ",x))    
        ),
        of(1).pipe(         
          mapTo({ type: types.AUTH_USER_DEFINITION_REQUEST})
        )
      )
      ));

    export const authError = (error) => {      
      if (error.code === -3007) {
          error.message = translate('lblPasswordIsWrong');
      } else if (error.code === -400 || error.code === -500) {
          error.message = translate('lblAccountLocked');
      } else if (error.code === -3059) {
          error.message = translate('lblAccountDisabled');
      } else if (error.code === -300) {
          error.message = translate('lblPasswordExpired');
      } else {
          error.message = translate('lblPasswordIsWrong');
      }
      return ({
          type: types.AUTH_USER_ERROR,
          payload: error
      });
    };

  export default [authEpic, getUserDefinitionEpic, getUserAuthEpic];