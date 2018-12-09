
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

class RangeSlider extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isDragging: false,
      x: 0.5
    };
    this.computeX = this.computeX.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }
  computeX(clientX) {
    const {
      left,
      width
    } = this.bar.getBoundingClientRect();

    const newX = (clientX - left) / width;

    return Math.min(1, Math.max(0, newX))
  }
  onMouseDown() {
    this.setState({ isDragging: true });
  }

  onMouseMove({ clientX }) {
    if (this.state.isDragging) {
      const x = this.computeX(clientX);
      this.setState({ x });
    }
  }

  onMouseUp() {
    this.setState({ isDragging: false });
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  }


  render() {
    const { x } = this.state;
    return (
        <div>
            <span>{x*100}</span>
    <Bar ref={e => {
      this.bar = findDOMNode(e)  //can be replaced with e ( element)
    }}>
      <Knob
       onMouseDown={this.onMouseDown}
       style={{
         left: (x * 100) + '%'
       }}
      />
      </Bar>
      </div>
    );
  }
}

  export default RangeSlider;