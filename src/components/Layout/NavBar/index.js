import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const NavBar = () => (
  <div>    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/hook">Hook</Link></li>
        <li><Link to="/recomp">Recomp</Link></li>
        <li><Link to="/pingpong">pingpong</Link></li>
        <li><Link to="/fleet">fleet</Link></li>
        <li><Link to="/signout">signout</Link></li>
      </ul>
  </div>
)

export default NavBar
