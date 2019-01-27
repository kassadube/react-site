import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header';
import Routes from '../Routes';
import { getAppLogoSelector, getAccountLogoSelector, getAccountLoginName } from "../../../containers/auth/redux/selectors";
import SideBar from '../SideBar';

import  './index.css';
const ContentLayout = (props) =>{
    //console.log('ContentLayout', props);
    const {appLogo, accountLogo, loginName} = props;
    return (        
        <div className="app-layout container-fluid">
            <Header appLogo={appLogo} accountLogo={accountLogo} loginName={loginName}/> 
            <div className='middle-section'>
                <div className='sidebar-bg'>
                    <SideBar />
                </div>
                <main className='main-panel'>
                    <Routes /> 
                </main>                  
            </div>         
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        appLogo: getAppLogoSelector(state),
        accountLogo: getAccountLogoSelector(state),
        loginName: getAccountLoginName(state),
    }
}


export default connect(mapStateToProps, {})(ContentLayout)
