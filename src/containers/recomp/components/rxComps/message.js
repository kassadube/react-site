import React, { Component } from 'react';
import { render } from "react-dom"
import {  interval, from , zip} from "rxjs"
import { map, tap ,distinctUntilChanged, startWith, scan, switchMap, takeWhile} from 'rxjs/operators';
import {  
  componentFromStreamWithConfig
} from "recompose"

//const componentFromStream = componentFromStreamWithConfig(config);
const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});;



const createTypewriter = (message, speed, pause) =>

  zip(
    from(message),
    interval(speed),
    letter => {
      console.log(letter);
      return letter;
    }
  ).pipe(
    scan((acc, curr) => acc + curr),
    takeWhile(() => !pause)
    )

const StreamingApp = componentFromStream(props$ =>
  props$.pipe(
    tap(props=> console.log("StreamingApp ",props)),
    switchMap(props =>
      createTypewriter(props.message, props.speed, props.pause)
    ),    
    map(message => ({ message })),
    tap(m=>console.log(m)),
    map(ShowMessage)
  )
)


const ShowMessage = props => (
  <div>
    <h1>{props.message}</h1>
  </div>
)
const Message = StreamingApp;


export default Message;