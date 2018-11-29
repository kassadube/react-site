
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';

class AppLayout extends React.Component {

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <Routes />
        );
    }
}

const mapStateToProps = state => ({
    
  })
  
  const mapDispatchToProps = dispatch => ({}
    
  )
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));
