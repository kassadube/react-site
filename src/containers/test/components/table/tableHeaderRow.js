import React from 'react';

const TableHeaderRow =(props) =>{
    const {name, updateSortColumn, sort} = props;
    //let sortSpan ='';
    let sortDirectionClass = '';//sort.direction === 1 ? 'headerSortDown' : 'headerSortUp';    
    if(sort.key === name)
    sortDirectionClass=sort.direction === 1 ? 'headerSortDown' : 'headerSortUp'; 
        //sortSpan = <span className={sortDirectionClass}></span>;
    return(
        <th onClick={()=>updateSortColumn({key: name, direction:sort.direction === 0 ? 1: 0, type: sort.type})} className={sortDirectionClass}>
            <span>{name}</span>                                       
        </th>
    );
}
export default TableHeaderRow;