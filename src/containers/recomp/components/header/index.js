import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

const Header = ({headerName}) => {
    return (
        <div>
            <div className="header-container container">
                <h1>{headerName}</h1>
                <ul>
                    <li>
                        <Link to="/recomp">Breeds</Link> 
                    </li>
                    <li>
                        <Link to="/recomp/plain">Plain</Link> 
                    </li>
                    <li>
                    <Link to="/recomp/resite">Resite</Link> 
                </li>
                </ul>
            </div>
        </div>
    )
};
export default Header;