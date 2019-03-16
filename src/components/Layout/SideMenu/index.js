import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => (      
      <ul>        
        <li><Link to="/fleet">F</Link></li>
        <li><Link to="/messages">M</Link></li>
      </ul>  
);

export default SideMenu;
