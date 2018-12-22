import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './index.css';
import Page from '../../page';

const Header = ({headerName, showMenu = true}) => {
    
    return (
        <div>
            {showMenu}
            <div className="header-container container">
                <h1>{headerName}</h1>
                {
                    
                     showMenu ?(<ul>
                        <li>
                            <Link to="/recomp">Breeds</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/plain">Plain</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/resite">Resite</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/toggle">Toggle</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/reducer">reducer</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/siteRec">Site Rec</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/ConnectedApp">Connected App</Link> 
                        </li>
                        <li>
                            <Link to="/recomp/Rxjspg">Rxjs App</Link> 
                        </li>
                    </ul>):(<div></div>)
                }
            </div>
            
               
            
        </div>
    )
};
export default Header;