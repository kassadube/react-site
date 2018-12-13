import React from 'react';
import { compose, setDisplayName }  from 'recompose';
import { connect } from 'react-redux';
import { increment, decrement } from '../../../counter/actions';
import Header from '../../components/header';


const mapStateToProps = state => ({
  count: state.getIn(['counter','val']),
})


const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

const _ConnectedApp = (props) =>
    <div className="PD10">        
        <div className="app-container">
            <Header headerName="Plain"/>
            <div>
                <button title="sddd" >text --{props.count}--</button>
            </div>
        </div>
    </div>;

const enhace = compose(
  setDisplayName('counter'),
  connect(mapStateToProps)
);
const ConnectedApp = enhace(_ConnectedApp);
  export default ConnectedApp;