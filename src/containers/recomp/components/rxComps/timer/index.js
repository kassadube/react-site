/* eslint-disable no-unused-vars */
import React from 'react';
import { Subject, timer, from } from "rxjs";
import {
  retry,
  switchMap,
  map,
  tap,
  takeUntil,
  withLatestFrom
} from "rxjs/operators";

import Log from '../../../../../constants/log';

export const restart$ = new Subject();
export const orders$ = new Subject();
export const store$ = new Subject({count: 0});

restart$
  .pipe(
    tap((x) => console.log("DFDFDF",x)), 
    switchMap(interval =>
      timer(0, interval).pipe(  
        withLatestFrom(store$),
        tap(([x,y]) => console.log("DFDFDF",x,y)), 
        tap(([x]) => store$.next({count: x}))
      ))
  ).subscribe(0);
window.restart$ = restart$;
window.store$ = store$;
const  stream = store$;
class Timer extends React.Component {
  _subscription = null;
  constructor(props)
  {
      super(props); 
      this.state = {
        store: {count:0}
      };
      this.log = Log('Rxjsmove:Timer');  
      this.log.info('constructor',props);      
  }
 
 

  componentDidMount(){
    this.log.info('componentDidMount');
    this._subscription = stream.subscribe(this.handleUpdate);
    restart$.next(10000);
    store$.next({count: 1});
  }

  componentWillUnmount(){

    this.log.info('componentWillUnmount');
    
    this._subscription &&
        this._subscription.unsubscribe &&
        this._subscription.unsubscribe();
  }

  handleUpdate = store => {  
    this.log.info('handleUpdate', store); 
    this.setState(() => ({
      store
    }));
  };

  render ()
  {
    const {count} = this.state.store;
    this.log.info('render');
      return (
        <div>TIMER -- {count}--</div>
      )
  }
}


  export default Timer;