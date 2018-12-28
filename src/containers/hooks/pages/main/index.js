import React from 'react';
import Header from '../../components/header';
import Counter from '../../components/counter';

class Main extends React.Component {
    constructor (props) {
        super(props);
        
        
        
    }
    componentDidMount() {        
    }
    componentWillUnmount() {        
    }
    
    render(){
        
        return (
            <div className="app-container">
                <Header headerName="Main"/> 
                <Counter />               
            </div>
        );
    }
}
export default Main;