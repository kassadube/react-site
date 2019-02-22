import React from 'react';
import Row from './Row';
import RowHeader from './RowHeader';

import './index.css';

const Table = ({columns, data}) => {

    return (<div className="grid-containera">
            <RowHeader columns={columns} />
            <div style={{height:'500px', overflowY:'scroll'}}>
                {
                    data.map((x,i) => <Row key={i} columns={columns} data={x}/>)
                }
            </div>
        </div>
    );
}
export default Table;