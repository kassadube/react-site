import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({items}) => (      
      <ul>  
          {
              items.map(x=> <li><Link to={x[0]} >{x[1]}</Link></li>)
          }      
        
      </ul>  
);

export default SideMenu;