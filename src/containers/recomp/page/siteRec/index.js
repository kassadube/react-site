import React from 'react';
import WithPropsExample from './withPropExampale';
import WithPropsExample2 from './withPropExampale2';
import UserSpinner from './userSpinner';
import UserMessage from './userMessage';

import './index.css';
import '../cardShow/index.css';
const SiteRec = () =>
    <div className="PD10">        
        <div className="app-container">
            <div className="body-container">
                <WithPropsExample />
                <WithPropsExample2 />
                <UserSpinner />
                <UserMessage />
            </div>
        </div>
    </div>;


  export default SiteRec;