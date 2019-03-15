
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { columns_ACTION, fetchMessagesAction } from '../../redux/actions';
import {columnsSelector, eventsSelector } from '../../redux/selectors';
import MTable from '../../components/mTable';
import Log from  '../../../../constants/log';

import './index.scss';
 
import data from '../../data';

const columns = [
    {
        property: 'id',
        text: 'ID',
    },
    {
        property: 'postId',
        text: 'POST ID',
    },
    {
        property: 'name',
        text: 'NAME',
    } ,
    {
        property: 'email',
        text: 'EMAIL',
    }  
];


class Main extends Component {
    
    constructor(props)
    {
        super(props);   
        this.log = Log('messages:main'); 
        this.log.info('constructor',props);  
        this.getMessages = this.getMessages.bind(this);     
        if(props.columns == null)
            props.getColumns();
    }

    getMessages(){
        this.props.fetchMessages({quickFilterId: 1, maxId: 0});;
    }
 /*   static getDerivedStateFromProps(props, state)
    {
        
    }*/
    render(){
        this.log.info('render',this.props);   
        return (
            <div className='message-grid'>
                <div>
                    <button onClick={this.getMessages} >ddd</button>
                </div>
                <div>row2
                </div>
                <div>row3
                </div>
                <div className='row-content'>                
                    <MTable 
                        data={data}
                        columns={columns}/>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    columns: columnsSelector(state),
    events: eventsSelector(state),
  })
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getColumns: columns_ACTION,
        fetchMessages: fetchMessagesAction,
    }, dispatch)
  )
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
