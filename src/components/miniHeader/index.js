/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './index.scss';
import SideMenu from '../side-menu';

const MiniHeader = ({headerName, items = [], showMenu = true}) => {
    
    return (
        <div>
            <div className="header-container container">
                <h1>{headerName}</h1>                
                <SideMenu 
                items={items} className="ul-horz" />
            </div>            
        </div>
    )
};
export default MiniHeader;