import React from 'react';
import Row from './Row';
import RowHeader from './RowHeader';

import './index.css';

const Table = ({columns}) => {

    return (<div className="grid-container">
            <RowHeader columns={columns} />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    );
}
export default Table;