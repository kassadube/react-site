import React, { useState } from 'react'

import Log from  '../../constants/log';

const TabTest1 = () => {
  const [count, setCount] = useState(0);
  const log = Log('tabs:TabTest1'); 
        log.info('constructor');  
  return (
    <div className="PD10">      
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

  export default TabTest1;