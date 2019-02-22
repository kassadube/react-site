
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { columns_ACTION } from '../../redux/actions';
import {columnsSelector } from '../../redux/selectors';
import MTable from '../../components/mTable';
 
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
        if(props.columns == null)
            props.getColumns();
    }

 /*   static getDerivedStateFromProps(props, state)
    {
        
    }*/
    render(){
        return (
            <div >
                <MTable 
                    data={data}
                    columns={columns}
                />
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
