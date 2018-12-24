
import React from 'react'
import { Link } from 'react-router-dom';
import RangeSlider from './RangeSlider';
import RxSlider from './RxSlider';

const Slider = () => {
  
  return (
    <div className="PD10">
      <div>
      <Link to="/hook">Hook</Link>
      </div>
       <RangeSlider />
       <br/>
       <RxSlider />
    </div>
  );
}

  export default Slider;