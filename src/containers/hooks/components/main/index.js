
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types'

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="PD10">
      <div>
      <Link to="/hook/slider">Slider</Link>
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

  export default Main;