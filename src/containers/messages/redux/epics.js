/* eslint-disable no-unused-vars */

import 'rxjs';
import { of, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { delay, mapTo, map, mergeMap, tap, catchError,switchMap } from 'rxjs/operators';

import { NAME } from './constants';
import * as ActionTypes from './actionTypes';
import SignRequest from '../../../constants/SignRequest';
import SignPostJsonRequest from '../../../constants/SignPostJsonRequest';
import config from '../../../config';

export const readMessageEpic = (action$,  store) => 
    action$.pipe(
        ofType(ActionTypes.FETCH_MESSAGES_REQUEST),
        map(SignRequest),
        switchMap(({ headers, payload }) => 
        ajax.get(`${config.URL.MESSAGES.EVENTS}?dateFilterId=${payload.quickFilterId}&MaxId=${payload.maxId}`, headers).pipe(
            map((res) => res.response),
            map((data) => ({
                type: ActionTypes.FETCH_MESSAGES_SUCCESS,
                payload: { data: data.data, maxId: payload.maxId },
            }))))
        )
            

export default [readMessageEpic];

