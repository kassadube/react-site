import React, {Component} from 'react';


class Table extends Component {

    /*
    constructor(props)
    {
        super(props);
               
            
    }
    */

    render () {
        const {data, sort} = this.props;
        
        return (
            <div>            
            <table cellPadding="0">
                <thead>
                    <tr>
                        <th>
                        id
                        </th>
                        <th>
                            postId
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            email
                        </th>
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
