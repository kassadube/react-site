
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import routes from '../routes';

class AppLayout extends React.Component {

    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <routes />
        );
    }
}

const mapStateToProps = state => ({
    
  })
  
  const mapDispatchToProps = dispatch => ({}
    
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
