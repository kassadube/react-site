import React from 'react';
import { Link } from 'react-router-dom';
import SideMiniMenu from '../../side-menu';
const sMenu = [
  ['/fleet','F'],
  ['/messages','M'],
  ['/hook','H'],
  ['/recomp','R'],
  ['/hook/tableTest','T'],
]
const SideMenu = () => ( 
  <SideMiniMenu items={sMenu} />
);

export default SideMenu;
