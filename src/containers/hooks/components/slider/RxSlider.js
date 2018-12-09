import React, {useState, Component, ReactDom } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, keyframes } from 'styled-components';

//const { Component, ReactDOM } = React;
const {  findDOMNode } = ReactDOM;

const Bar = styled.div`
	display: block;
	position: relative;
	height: 8px;
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	width: 100rem;
	margin: 5rem auto;
`;

const Knob = styled.div`
	position: absolute;
	margin-left: -10px;
	top: -6px;
	height: 20px;
	width: 20px;
	background-color: palevioletred;
	border-radius: 50%;
	cursor: pointer;
`;

class RxSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isDragging: false,
      x: 0.5
    };
}
render()
{
    return (
        <div>RxSlider</div>
    )
}
}

export default RxSlider;