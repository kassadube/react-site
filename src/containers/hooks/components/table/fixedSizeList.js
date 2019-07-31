

import React, { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const FixedSizeList = () => {
    return (
        <List
            height={150}
            itemCount={1000}
            itemSize={35}
            width={300}
        >
            {Row}
        </List>
  );
}
 
const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
  );
   

  export default FixedSizeList;