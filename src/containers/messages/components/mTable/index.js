import React from 'react';
import Table from '../../../../components/table/Table';

//import './index.css';

const MTable = ({columns, data}) => {

    return (
        <div>
            <Table 
                    data={data}
                    columns={columns}
                />
        </div>
    )
}
export default MTable;