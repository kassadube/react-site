import React from 'react';
import { IoMdMore } from 'react-icons/io';
const Row = ({columns, data}) => {

    return (
        <div className="grid-row">
            {
                columns.map((x, i) => {
                    return (<div key={'R' +i}>{data[x.property]}</div>)
                })
            }
            <div><IoMdMore style={{height:'2em',transform: 'scale(1.3)'}} /></div>
        </div>
    );
}
export default Row;