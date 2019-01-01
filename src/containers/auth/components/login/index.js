import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { authUser_ACTION } from '../../redux/actions';
import { authSelector, errorSelector,isAuthenticateSelector} from '../../redux/selectors';
//import config from '../../../../config';
// eslint-disable-next-line no-unused-vars
import SigninUI from '../../../../components/SigninUI';
import * as imagesBank from '../../../../images/constants';

import './index.css';

class Login extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            username: "",
            password: ""
          };

    }
    
    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.authUser(this.state);
      }

    render(){
      console.log("LOGIN RENDER", this.props);
      return(
        <div  className="login-section">        
           <div className="row ">
            <div  className="login-section-form four columns offset-by-one">           
                <div className="row">
                  <img alt="Pointer Logo" src={imagesBank.POINTER_LOGO} />
                  </div>
                  <h5>Pointer Connect</h5>
                  <hr/>
                  <form onSubmit={this.handleSubmit}>
                    <div className="login-input-text">
                        <p> user name</p>
                        <input type="text" className="login-input" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="login-input-text">
                        <p>password</p>
                        <input type="password" className="login-input" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                    <div className="five columns offset-by-seven">
                        <button className="login-button">Login</button>
                    </div>
                    </div>
                    <div>{this.props.error}</div>
                </form>
                <Link to="/">Home</Link>
            </div>          
          </div>
       </div>);
  }

}

const mapStateToProps = state => ({
    loged: authSelector(state),
    error: errorSelector(state),
    isAuthenticate: isAuthenticateSelector(state)
  })
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
    authUser: authUser_ACTION
    }, dispatch)
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
