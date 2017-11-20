import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../store/action/helloWorld';

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                sdfsdf
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      fuelSavings: state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  