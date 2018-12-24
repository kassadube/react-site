
import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContentLayout from '../ContentLayout';
import LoginLayout from '../LoginLayout';

class AppLayout extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {pathname:props.history.location.pathname};
        this.history = props.history;        
    }
    static getDerivedStateFromProps(props, state)
    {
        let {history} = props;
        
        if(history.location.pathname === '/pingpong')
        {    
             history.push("/login");
             
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
    
  })
  
  const mapDispatchToProps = dispatch => ({}
    
  )
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
