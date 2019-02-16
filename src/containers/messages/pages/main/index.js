
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { columns_ACTION } from '../../redux/actions';
import {columnsSelector } from '../../redux/selectors';
import Table from '../../components/table/Table';

const columns = [
    {
      text: 'aaaa',
    },
    {
        text: 'bbbb',
    },
    {
        text: 'cccc',
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
            <div>messages

                <Table columns={columns}/>
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
