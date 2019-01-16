/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Subject, timer, from, Observable,fromEvent, of  } from "rxjs";
import {
  retry,
  switchMap,
  map,
  tap,
  takeUntil,
  withLatestFrom
} from "rxjs/operators";

import Log from '../../../../../constants/log';

 const restart$ = new Subject();
 const orders$ = new Subject();
 const store$ = new Subject({count: []});

class Button extends React.Component {

  constructor(props)
  {
      super(props); 
      this.log = Log('Rxjsmove:button');  
      this.log.info('constructor',props);      
  }
 /* static getDerivedStateFromProps(props, state)
  {
    Log('Rxjsmove:button').info('getDerivedStateFromProps');  
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    this.log.info('componentDidUpdate');
  }
*/
  componentDidMount(){

    let btn  = ReactDOM.findDOMNode(this.refs.btn);
    this.log.info('componentDidMount btn',btn);
    this.obs = fromEvent(btn, 'click').subscribe(x=> console.log('FFGFGEEV', x));
    this.move = fromEvent(document, 'mousemove').subscribe(x=> console.log('move', x));

  }
  handleUpdate = store => {    
    this.setState(() => ({
      store
    }));
  };
  componentWillUnmount(){
    this.log.info('componentWillUnmount');
    this.obs.complete();
    this.move.complete();
  }

  render ()
  {
    this.log.info('render');
      return (
        <button ref='btn'>button</button>
      )
  }
}


  export default Button;