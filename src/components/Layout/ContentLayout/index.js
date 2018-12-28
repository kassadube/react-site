import React from 'react'
import Header from '../Header';
import Routes from '../Routes';

import  './index.css';
const ContentLayout = (props) =>{

    return (
        <div className="app-layout container-fluid">
            <Header /> 
            <Routes />            
        </div>
    )

}

export default ContentLayout