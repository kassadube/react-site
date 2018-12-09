
import React, {useState } from 'react'
import PropTypes from 'prop-types'

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
     
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

  export default Main;