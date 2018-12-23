import React, { Component } from 'react';
import { render } from "react-dom"
import { Observable, interval } from "rxjs"
import { map } from 'rxjs/operators';
import config from "recompose/rxjsObservableConfig"
import {
  setObservableConfig,
  componentFromStream
} from "recompose"


setObservableConfig(config)

const Ex01 = componentFromStream(props$ => {
  return interval(2000).pipe(map(i => (
    <TimeShow />
  )))
})

const TimeShow = () => {
    return <div>{new Date().toISOString()}</div>
}
export default Ex01;