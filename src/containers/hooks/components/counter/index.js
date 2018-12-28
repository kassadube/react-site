
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="PD10">      
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

  export default Counter;