import React, { Component } from 'react';
import { render } from "react-dom"
import {  interval, from } from "rxjs"
import { map, tap } from 'rxjs/operators';
//import config from "recompose/rxjsObservableConfig"
import {  
  componentFromStreamWithConfig
} from "recompose"

//const componentFromStream = componentFromStreamWithConfig(config);
const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});;

const Ex0 = componentFromStream(props$ => {
  const timstamp$ = interval(1000);
  
  return timstamp$.pipe(
    tap(i=> console.log(i)),
    map(i => (
    <TimeShow />
  )))
})

const TimeShow = () => {
    return <div>{new Date().toLocaleTimeString()}</div>
}
export default Ex0;