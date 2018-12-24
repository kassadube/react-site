
import React from 'react';
import { withState , compose } from 'recompose';

const Counter = ({ counter, setCounter }) =>{
    
    return(
  <div>
    Count: {counter}
    <button onClick={() => setCounter(n => n + 1)}>Increment</button>
    <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
  </div>);
}
const enhance = compose(
    withState('counter', 'setCounter', 0)
);
export default enhance(Counter);
