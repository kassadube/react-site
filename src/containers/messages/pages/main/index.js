
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { columns_ACTION } from '../../redux/actions';
import {columnsSelector } from '../../redux/selectors';
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
        if(props.columns == null)
            props.getColumns();
    }

 /*   static getDerivedStateFromProps(props, state)
    {
        
    }*/
    render(){
        this.log.info('render',this.props);   
        return (
            <div className='message-grid'>
                <div>row1
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
    columns: columnsSelector(state)
  })
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getColumns: columns_ACTION
    }, dispatch)
  )
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);
