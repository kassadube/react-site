import React, {useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './index.css';

const SignInUI = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>    
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <Link to="/">Home</Link> 
            </div>
            
    </div>
  );
}

  export default SignInUI;