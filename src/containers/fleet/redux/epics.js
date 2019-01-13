/* eslint-disable no-unused-vars */

import 'rxjs';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { delay, mapTo, map, mergeMap, tap, catchError } from 'rxjs/operators';

import { NAME } from './constants';
import * as types from './actionTypes';
import SignRequest from '../../../constants/SignRequest';
import config from '../../../config';

const arr = [{ type: types.FLEET_COLUMNS_TEST }, { type: types.FLEET_COLUMNS_TEST2 }];
const columnsEpic = action$ => action$.pipe(
    
    ofType(types.FLEET_COLUMNS_REQUEST),
    map(SignRequest),      
    mergeMap( ({headers}) => 
        concat( 
            ajax.get(config.URL.GENERAL.ACCOUNT_COLUMNS, headers).pipe(
                map(res => res.response),
                //tap((data) =>console.log("RRRR = ", data)),
                map(data => {return {type: types.FLEET_COLUMNS_SUCCESS, payload:data}}), 
                catchError(error => of({
                    type: types.FLEET_COLUMNS_ERROR,
                    payload: error,
                    error: true
                  })),
            ),
           
        of(1).pipe(
            tap(x=> console.log(headers,x)),
            mapTo(arr[0])
        ) ,
        of(2).pipe(
            tap(x=> console.log(x)),
            mapTo(arr[1])
        ) )
    )
     
  );
  /*
 of(arr),
    tap(x=> console.log(x)),
    mapTo(x=> {debugger; return x;})
  */
  //mapTo({ type: types.FLEET_COLUMNS_TEST }),
 //mapTo({ type: types.FLEET_COLUMNS_TEST2 }),x

  export default [columnsEpic];