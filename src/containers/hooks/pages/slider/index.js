import React from 'react';
import Header from '../../components/header';
import RangeSlider from '../../components/slider';

class Slider extends React.Component {
    
    componentDidMount() {        
    }
    componentWillUnmount() {        
    }
    
    render(){
        
        return (
            <div className="app-container">
                <Header headerName="slider"/> 
                <div className="PD10">
                  <br/>33
                  <RangeSlider.RangeSlider />33
                  <br/>
                </div>               
            </div>
        );
    }
}
export default Slider;