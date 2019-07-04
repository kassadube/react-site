
import React, { Component } from 'react';
import TabHeader from './TabHeader';
import Log from  '../../constants/log';

import './index.scss';

class Tabs extends Component {
    
    constructor(props)
    {
        super(props);   
        this.log = Log('Tabs:tabs'); 
        this.log.info('constructor',props);        

        this.state = {
        activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    renderTabHeader () {
      const headers = this.props.children.filter(x => typeof(x.type) === "function");
     /* <ol className="tab-list">
          {headers.map((child) => {
            const { label } = child.props;
            console.log(typeof(child.type));
            return child;
          })}
        </ol>*/
    }

    render (){
        const {
            onClickTabItem,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;
        return (
            <div className="tabs">
        {renderTabHeader ()}
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child;
          })}
        </div>
      </div>
        )
    }
}

export default Tabs;