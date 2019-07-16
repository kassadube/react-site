import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({items, className }) => (      
      <ul className={className}>  
          {
              items.map((x, i) => <li key={i}><Link to={x[0]} >{x[1]}</Link></li>)
          }      
        
      </ul>  
);

export default SideMenu;