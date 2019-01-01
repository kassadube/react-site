import React, {Component} from 'react';


class Table extends Component {

    constructor(props)
    {
        super(props);
               
            
    }
    

    render () {
        const {data} = this.props;
        return (
            <table cellPadding="0">
            <tbody>
            {data.map((item, key) =>{
                return (
                    <tr key={key}>                    
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>                   
                    </tr>
              );
            })}
            </tbody>
            </table>
        )
    }
}

export default Table;
