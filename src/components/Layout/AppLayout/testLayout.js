
import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginLayout from '../LoginLayout';
import {tokenSelector, isAuthenticateSelector} from '../../../containers/auth/redux/selectors';
import * as types from '../../../containers/auth/redux/actionTypes';

class TestLayout extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {pathname:props.history.location.pathname};
        this.history = props.history;    
            
    }
    
    render()
    {  
        return(
        <LoginLayout />
        );
    }
}

const mapStateToProps = state => ({
    token : tokenSelector(),
    isAuthenticate: isAuthenticateSelector(state)
  })
  
  const mapDispatchToProps = dispatch => ({
      authUser : ()=>{ 
          dispatch({type: types.AUTH_USER_SUCCESS, payload: { data: tokenSelector() } })
          dispatch({type: types.AUTH_USER_DEFINITION_REQUEST, payload:  tokenSelector()  })
        }
  }
    
  )
  
  const   AppLayout = TestLayout;
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
