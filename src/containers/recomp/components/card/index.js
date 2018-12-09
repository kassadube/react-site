import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import './index.css';


const Card = ({opened, handleClick, name, picture, description, rdr}) => {
  return (
    <div className={opened ? "card open" : "card closed"}>
      <div className="header" onClick={ handleClick }>{name}</div>
      <div className="body">
        <img src={picture} alt={name} />
        <p>{rdr}--{description}</p>
      </div>
    </div>
  );
}
const  enhance = compose(
  withState('opened', 'toggleOpened', true),
  withState('rdr', 'setRdr', 'gtg'),
  withHandlers({
    handleClick: props => event => {
      props.toggleOpened(!props.opened)
    }
})
);
export default enhance(Card);