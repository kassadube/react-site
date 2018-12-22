/*
TITLE:
Write a Higher-Order Component from Scratch

DESCRIPTION:
Learn the proper way to write a higher-order component from scratch.
*/
import React from 'react';
import Header from '../../components/header';
import Counter from '../../components/counter';



const Rxjspg = () =>
  <div className="PD10">
    <div className="app-container">
        <Header headerName="RXJS"/>
        <Counter counter={4}/>
    </div>
  </div>;


  export default Rxjspg;