import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement, ping } from '../../actions';
import { pingSelector, countSelector } from '../../selectors';

const Pingpong = (props) => (
  <div>
    Counter: {props.count}
    isPinging : {props.isPinging}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
    <button onClick={props.ping}>PING</button>
  </div>
)

Pingpong.propTypes = {
  count: PropTypes.number,
  isPinging: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  count: countSelector(state),
  isPinging: pingSelector(state),
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
   ping: () => dispatch(ping()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pingpong)
