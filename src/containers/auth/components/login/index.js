import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authUser,authUser_ACTION } from '../../actions';
import { authSelector } from '../../selectors';
import config from '../../../../config';
import SigninUI from '../../../../components/SigninUI';
import * as imagesBank from '../../../../images/constants';



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
      return(
        <div  className="login-section">  
           
           <div className="row ">
            
            <div  className="login-section-form four columns offset-by-one">
           
                <div class="row">
                  <img alt="Pointer Logo" src={imagesBank.POINTER_LOGO} />
                  </div>
                  <h5>Pointer Connect</h5>
                  <hr/>
               
          <form onSubmit={this.handleSubmit}>
              <div>
                  <span> user name</span>
                  <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
              </div>
              <div>
                  <span>password</span>
                  <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div>
                  <button> send </button>
              </div>
          </form>
          --{config.URL.SIGNIN}--
          </div>
          </div>
          
         <SigninUI />
       </div>);
  }

}

const mapStateToProps = state => ({
    loged: authSelector(state),
  })
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
    authUser: authUser_ACTION
    }, dispatch)
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
