
import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContentLayout from '../ContentLayout';
import LoginLayout from '../LoginLayout';
import {tokenSelector, isAuthenticateSelector} from '../../../containers/auth/redux/selectors';
import * as types from '../../../containers/auth/redux/actionTypes';

class AppLayout extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {pathname:props.history.location.pathname};
        this.history = props.history;    
            
    }
    static getDerivedStateFromProps(props, state)
    {
       
        let {history, isAuthenticate, token} = props;
        if(!isAuthenticate && token.token != null )
            props.authUser();
        else{
            if(!isAuthenticate && history.location.pathname !== '/login' ){    
                history.push("/login");                
            }
            else if(isAuthenticate && history.location.pathname === '/login')
                history.push("/fleet");
        }
        return state;
    }
    render()
    {
        let {history} = this.props;
        if(history.location.pathname ==='/login')
        {    
             return(
                <LoginLayout />
             );
             
        }
        else
        return (
            <ContentLayout />
        );

      //  return ( 
       //     <Routes pathname={this.history.location.pathname}  />
      //      );
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));