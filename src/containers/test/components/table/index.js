import React, {Component} from 'react';

import TableHeaderRow from './tableHeaderRow';

class Table extends Component {
    constructor(props)
    {
        super(props);
        this.name = 'TABLE';
    }

    /*
    constructor(props)
    {
        super(props);
               
            
    }
    */

    render () {
        const {data, updateSortColumn, sort} = this.props;
        
        return (
            <div className={data.length > 10 ? 'scroll' : '' }>            
            <table cellPadding="0">
                <thead>
                    <tr>
                    <TableHeaderRow name={'id'} updateSortColumn={updateSortColumn} sort={sort}/>
                    <TableHeaderRow name={'postId'} updateSortColumn={updateSortColumn} sort={sort}/>
                    <TableHeaderRow name={'name'} updateSortColumn={updateSortColumn} sort={sort}/>                        
                    <TableHeaderRow name={'email'} updateSortColumn={updateSortColumn} sort={sort}/>                            
                       
                    </tr>
                </thead>
                <tbody>
            {data.map((item, key) =>{
                return (
                    <tr key={key}>                    
                        <td width='10%'>{item.id}</td>
                        <td width='10%'>{item.postId}</td>
                        <td width='50%'>{item.name}</td>
                        <td width='30%'>{item.email}</td>                   
                    </tr>
              );
            })}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Table;
