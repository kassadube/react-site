/*
TITLE:
Write a Higher-Order Component from Scratch

DESCRIPTION:
Learn the proper way to write a higher-order component from scratch.
*/
import React, {useState, useMemo} from 'react';
import Header from '../../components/header';
import Ex0 from '../../components/rxComps/ex0';
import Ex001 from '../../components/rxComps/ex001';
import Message from '../../components/rxComps/message';



const Rxjspg = () =>{
  const [interval, setInterval] = useState(1000);
  const[pause, setPause] = useState(false);
  const msg = useMemo(() => <Message  message={"abcdefghij"}  speed={500} pause={pause}/>, [pause]);
  console.log("render main");
  return (
  <div className="PD10">
    <div className="app-container">
        <Header headerName="RXJS"/>
       
        <Ex0 />
        <button onClick={()=>setInterval(interval+1000)} />  
        <Ex001 intervalTime={interval} />
        <hr/>
        <button onClick={()=>setPause(!pause)} >pause</button>
        {msg}
    </div>
  </div>)
}


  export default Rxjspg;