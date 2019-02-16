import React from 'react';
import { map } from 'rsvp';

const RowHeader = ({columns}) => {
    console.log(columns);
    return (
        <div className="grid-row">
            {
                columns.map(x=> <div>{x.text}</div> )
            }
        </div>
    );
}
export default RowHeader;