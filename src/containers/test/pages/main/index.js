
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Table from '../../components/table';
import data from '../../data';

import './index.css'

class Main extends Component {
    constructor(props){
        super(props);
        this.name ='MAIN';
        this.pageLength = 10;
        const sort = {key:'id', direction:1, type: 'int'};
        this.state = {
             pageLength: 10,
             dataLength : data.length,
             pageCount: Math.ceil(data.length/this.pageLength),
             currentPage: 1,
             sort: sort
            };
            this.updateSortColumn = this.updateSortColumn.bind(this);
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
    handleBTClick = count =>{
        this.setState({...this.state,
            currentPage: 1,
            pageLength: count,
            pageCount: Math.ceil(data.length/count),
          });
       // this.pageLength = count;
    }
    calcData (sData){
        const currentPage = this.state.currentPage;
        let start = (currentPage -1) * this.state.pageLength;
        let end = start + this.state.pageLength;
        return sData.slice(start, end);
    }
    
    updateSortColumn(sort)
    {
        this.setState({...this.state, sort: sort});
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
        console.log("state",this.state);
        const sortedData = this.sort();        
        const tbData = this.calcData(sortedData);
        const selected = this.state.currentPage; 
        const  {pageLength} = this.state
        return (
            <div className='main-test'>               
                <div className="button-holder">
                    <button onClick={()=>this.handleBTClick(10)} className={pageLength === 10 ? 'button-primary' : '' }>10</button>
                    <button onClick={()=>this.handleBTClick(20)} className={pageLength === 20 ? 'button-primary' : '' }>20</button>
                    <button onClick={()=>this.handleBTClick(50)} className={pageLength === 50 ? 'button-primary' : '' }>50</button>
                    <button onClick={()=>this.handleBTClick(100)} className={pageLength === 100 ? 'button-primary' : '' }>100</button>
                </div>
                <div className='table-holder'>
                    <Table data={tbData} sort={this.state.sort} updateSortColumn={this.updateSortColumn}/>
                </div>
                <div className="paging-holder">
                {   this.state.currentPage > 1 ? <span onClick={()=>this.handleClick(-1)}>{'<'}</span> : ''}
                    
                    <select onChange={this.handleChange}  value={selected}>
                    {Array(this.state.pageCount).fill().map((_,i)=> <option key={i}>{i+1}</option> )}
                    </select>
                    {   this.state.currentPage * this.state.pageLength  < data.length ? <span onClick={()=>this.handleClick(1)}>{'>'}</span> : ''}
                   
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
