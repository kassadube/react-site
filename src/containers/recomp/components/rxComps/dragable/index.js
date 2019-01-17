/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Subject, timer, from, Observable,fromEvent, of  } from "rxjs";
import {
  retry,
  switchMap,
  flatMap,
  map,
  tap,
  takeUntil,
  withLatestFrom,
  mergeMap
} from "rxjs/operators";

import Log from '../../../../../constants/log';

 const restart$ = new Subject();
 const orders$ = new Subject();
 const store$ = new Subject({count: []});

class Dragable extends React.Component {

  constructor(props)
  {
      super(props); 
      this.log = Log('Rxjsmove:dragable');  
      this.log.info('constructor',props);      
  }
 
  componentDidMount(){

    let dragable  = ReactDOM.findDOMNode(this.refs.dragable);
    this.log.info('componentDidMount btn',dragable);
    //this.mouseUp = fromEvent(dragable, 'mouseup');//.subscribe(x=> console.log('dragable mouseUp', x));
    
    this.mouseDown = fromEvent(dragable, 'mousedown').pipe(
        
      mergeMap(x => {  
         let offsetY = x.offsetY;
         let offsetX = x.offsetX;
         x.preventDefault();
       return fromEvent(document, 'mousemove').pipe(         
          map(x =>{return {clientY: x.clientY - (offsetY+35),clientX: x.clientX-offsetX}}),
          takeUntil(fromEvent(document, 'mouseup')) 
        ) } 
           
      )           
    ).subscribe(x=> {
     
      dragable.style.top = (x.clientY) +'px';
      dragable.style.left = (x.clientX ) +'px';
      //console.log('sub',dragable.style);
    });
    
    //this.move = fromEvent(document, 'mousemove').subscribe(x=> console.log('move', x));

  }
  handleUpdate = store => {    
    this.setState(() => ({
      store
    }));
  };
  componentWillUnmount(){
    this.log.info('componentWillUnmount');
    this.mouseDown.complete();
    //this.mouseUp.complete();
   // this.move.complete();
  }

  render ()
  {
    this.log.info('render');
      return (
        <div id='dragable' ref='dragable'></div>
      )
  }
}


  export default Dragable;