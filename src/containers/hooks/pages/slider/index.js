import React from 'react';
import MiniHeader from '../../../../components/miniHeader';
import RangeSlider from '../../components/slider';

import {menuItems} from'../../constants';

class Slider extends React.Component {
    
    componentDidMount() {        
    }
    componentWillUnmount() {        
    }
    
    render(){
        
        return (
            <div className="app-container">
                <MiniHeader headerName="Slider" items={menuItems}/>
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