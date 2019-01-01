import React from 'react'
import { connect } from 'react-redux';
import Header from '../Header';
import Routes from '../Routes';
import { getAppLogoSelector, getAccountLogoSelector, getAccountLoginName } from "../../../containers/auth/redux/selectors";

import  './index.css';
const ContentLayout = (props) =>{
    console.log('ContentLayout', props);
    const {appLogo, accountLogo, loginName} = props;
    return (        
        <div className="app-layout container-fluid">
            <Header appLogo={appLogo} accountLogo={accountLogo} loginName={loginName}/> 
            <Routes />            
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
