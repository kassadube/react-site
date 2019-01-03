import React from 'react';

const TableHeaderRow =(props) =>{
    const {name} = props;
    return(
        <th>
            <span>{name}</span>                            
        </th>
    );
}
export default TableHeaderRow;