import React, {useState } from 'react'
import PropTypes from 'prop-types'
import './index.css';

const SignInUI = () => {
  const [count, setCount] = useState(0);
  return (
    <div class='container'>    
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
            
    </div>
  );
}

  export default SignInUI;