import React from 'react';
import {  interval, from } from "rxjs"
import { map,  startWith, distinctUntilChanged, switchMap} from 'rxjs/operators';
//import config from "recompose/rxjsObservableConfig"
import {  
  componentFromStreamWithConfig
} from "recompose"

//const componentFromStream = componentFromStreamWithConfig(config);
const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});;

const Ex001 = componentFromStream(props$ => {
  
  const intervalTime$ = props$.pipe(
    map(props=> props.intervalTime),
    distinctUntilChanged()    
  )
  
  const timstamp$ = intervalTime$.pipe(
    switchMap(intervalTime => interval(intervalTime),
    startWith(null),    
    ),
    map(() => new Date())
  )
  
  return timstamp$.pipe(
   startWith(null),
    map(i => (
    <TimeShow time={new Date()}/>
  )))
})

const TimeShow = (props) => {
    return (<div>{props.time.toLocaleTimeString()}</div>)
}
export default Ex001;