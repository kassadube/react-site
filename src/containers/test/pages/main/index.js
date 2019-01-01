
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Table from '../../components/table';
import data from '../../data';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {dataLength : data.length, data: data.slice(10,20)};
    }
    
    render(){
        return (
            <div>
                <header>test -- {this.state.data.length}--</header>
                <div>
                    <Table data={this.state.data}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    
  });
  
  const mapDispatchToProps = dispatch => ({
      
  });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
