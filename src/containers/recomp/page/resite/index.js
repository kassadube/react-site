/*
TITLE:
Write a Higher-Order Component from Scratch

DESCRIPTION:
Learn the proper way to write a higher-order component from scratch.
*/
import React from 'react';
import Header from '../../components/header';
import Counter from '../../components/counter';



const Resite = () =>
  <div className="PD10">
    <div className="app-container">
        <Header headerName="Plain"/>
        <Counter counter={4}/>
    </div>
  </div>;


  export default Resite;