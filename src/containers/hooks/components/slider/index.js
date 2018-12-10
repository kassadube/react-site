
import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RangeSlider from './RangeSlider';
import RxSlider from './RxSlider';

const Slider = () => {
  const [count, setCount] = useState(0);
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