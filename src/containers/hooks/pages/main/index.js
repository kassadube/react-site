import React from 'react';
import Header from '../../components/header';
import Counter from '../../components/counter';

class Main extends React.Component {
    
    
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