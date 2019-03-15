import React from 'react';
import { map } from 'rsvp';

const RowHeader = ({columns}) => {
    return (
        <div className="grid-row">
            {
                columns.map((x, i)=> <div key={'H' + i}>{x.text}</div> )
            }
        </div>
    );
}
export default RowHeader;