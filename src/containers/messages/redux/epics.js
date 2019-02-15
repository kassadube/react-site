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

 // export default [columnsEpic];