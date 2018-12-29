import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import translate from '../../../constants/translate';

import './index.css';
const Header = (props) => {
    const {appLogo, accountLogo} = props;
    return (
        <header className="app-header">           
            <div className="left-logos"> 
                <img className='left-logo' src={accountLogo} />
                <div className="appTitle">Pointer Connect</div>
            </div>
            <div className='right-logos'>
                <div className="userInfo">
                    <div className="userInfo-sep" ></div>                    
                    <div className="userInfo-dropdown">
                    <Link to='/signout' className="menu-item">{translate('lblSignOut')}</Link>
                    </div>
                </div>
                <img className='right-logo' src={appLogo} />
            </div>
           {/* <NavBar />*/}
        </header>
    )
}
export default Header;