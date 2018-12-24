import React from 'react';
import {  interval, from , zip} from "rxjs"
import { map, tap , scan, switchMap, takeWhile} from 'rxjs/operators';
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