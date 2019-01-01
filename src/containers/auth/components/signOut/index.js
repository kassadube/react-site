import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unAuthUser_ACTION } from '../../redux/actions';
import { authSelector, errorSelector} from '../../redux/selectors';
//import config from '../../../../config';
//import SigninUI from '../../../../components/SigninUI';
//import * as imagesBank from '../../../../images/constants';



class SignOut extends React.Component {
    
    componentDidMount() {
      this.props.unAuthUser();
    }

    render(){
      console.log("SIGNOUT RENDER", this.props);
      return(
        <div  className="login-section">
       </div>);
  }

}

const mapStateToProps = state => ({
    loged: authSelector(state),
    error: errorSelector(state),
  })
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
    unAuthUser: unAuthUser_ACTION
    }, dispatch)
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
