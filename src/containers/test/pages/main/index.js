
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Table from '../../components/table';
import data from '../../data';

import './index.css'
import { debug } from 'util';

class Main extends Component {
    constructor(props){
        super(props);
        this.pageLength = 10;
        const sort = {key:'name', direction:1, type: 'string'};
        this.state = {
             dataLength : data.length,
             pageCount: Math.ceil(data.length/this.pageLength),
             currentPage: 1,
             sort: sort
            };
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('main update props', state);
        return state;
    }

    handleChange = event => {
        const currentPage = parseInt(event.target.value);
        this.setState({...this.state,
          currentPage: currentPage
        });
    }

    handleClick= index => {       
        const currentPage = this.state.currentPage + index;
        this.setState({...this.state,
            currentPage: currentPage
          });
    }

    calcData (sData){
        const currentPage = this.state.currentPage;
        let start = (currentPage -1) * this.pageLength;
        let end = start + this.pageLength;
        return sData.slice(start, end);
    }

    sort(){
        
        const key = this.state.sort.key;
        const direction = this.state.sort.direction;
        const type = this.state.sort.type;
        if(type === 'string'){
            if(direction === 1)
                return data.sort((a,b) => {return   a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1});
            else
                return data.sort((a,b) => {return   a[key].toLowerCase() < b[key].toLowerCase() ? 1 : -1});
        }
        else{  
            if(direction === 1)  
                return data.sort((a,b) => {return   a[key] > b[key] ? 1 : -1});
            else
                return data.sort((a,b) => {return   a[key] < b[key] ? 1 : -1});
        }
    }
    

    render(){
        const sortedData = this.sort();        
        const tbData = this.calcData(sortedData);
        const selected = this.state.currentPage;        
        return (
            <div className='main-test'>
                <header>test -- --</header>
                <div className='table-holder'>
                    <Table data={tbData} sort={this.state.sort}/>
                </div>
                <div className="paging-holder">
                    <span onClick={()=>this.handleClick(-1)}>{'<'}</span>
                    <select onChange={this.handleChange}  value={selected}>
                    {Array(this.state.pageCount).fill().map((_,i)=> <option key={i}>{i+1}</option> )}
                    </select>
                    <span onClick={()=>this.handleClick(1)}>{'>'}</span>
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
