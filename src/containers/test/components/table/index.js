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
        const {data, updateSortColumn} = this.props;
        
        return (
            <div className={data.length > 10 ? 'scroll' : '' }>            
            <table cellPadding="0">
                <thead>
                    <tr>
                        <th onClick={()=>updateSortColumn({key:'id', direction:1, type: 'int'})} >
                        <span>id</span>                        
                    </th>
                        <th onClick={()=>updateSortColumn({key:'postId', direction:1, type: 'int'})}>
                            <span>postId</span>
                        </th>
                    <TableHeaderRow name={'name'} />                        
                    <TableHeaderRow name={'email'} />                            
                       
                    </tr>
                </thead>
                <tbody>
            {data.map((item, key) =>{
                return (
                    <tr key={key}>                    
                        <td>{item.id}</td>
                        <td>{item.postId}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>                   
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
