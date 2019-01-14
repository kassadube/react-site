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
export const store$ = new Subject({count: []});

restart$
  .pipe(
    tap((x) => console.log("DFDFDF",x)),   
    tap(() => store$.next({count: 1}))
  ).subscribe();
window.restart$ = restart$;
window.store$ = store$;
const  stream = restart$;
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
 /* static getDerivedStateFromProps(props, state)
  {
    Log('Rxjsmove:Timer').info('getDerivedStateFromProps');  
    return null;
    
  }

  shouldComponentUpdate(nextProps, nextState)
  {
    this.log.info('shouldComponentUpdate');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    this.log.info('shouldComponentUpdate');
    return null;
  }
*/
  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    this.log.info('componentDidUpdate');
  }

  componentDidMount(){
    this.log.info('componentDidMount');
    this._subscription = stream.subscribe(this.handleUpdate);
    stream.next(2);
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