
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';

class AppLayout extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {};
        this.history = props.history;        
    }
    static getDerivedStateFromProps(props, state)
    {
        let {history} = props;
        
        if(history.location.pathname == '/pingpong')
        {    
             history.push("/login");
             
        }
        return state;
    }
    render()
    {
        
        

        return ( 
            <Routes pathname={this.history.location.pathname}  />
            );
    }
}

const mapStateToProps = state => ({
    
  })
  
  const mapDispatchToProps = dispatch => ({}
    
  )
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
