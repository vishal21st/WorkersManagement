import React from 'react';
import {connect} from 'react-redux';

import adminActions from '../../actions/adminActions';
import workersAction from '../../actions/workersAction';
import InputField from '../presentators/form_components/InputField'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { emailError: null, email: "", password: "", loginError: null };
  }

  validate() {
    const { email, password } = this.state
    let emailError = null
    let passError = null
    const isEmailValid = this.validateEmail(email)
    
    if (!isEmailValid || password == "") {
      emailError = isEmailValid ? null : "Please provide valid email address"
      passError = password == "" ? "Please provide valid password" : null
      this.setState({emailError: emailError, passError: passError})
      return false
    } else {
      this.setState({emailError: null, passError: null})
      return true
    }
  }
 
  validateEmail(email) {
    const ex =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return ex.test(email.toLowerCase())
  }

  validateAndLogin(e) {
    e.preventDefault()
    const { email,  password } = this.state
    let self = this
    if (this.validate()) {
      this.props.login({email, password})
      .then((response) => {
        self.props.initializeWorkers(response.admin)
        self.props.history.push("/dashboard/workers")
      })
      .catch((err) => {
        this.setState({loginError: err.error})
      })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="login col-md-12">
          <div className="row vertical-align">
            <form id="Login" className="login-form col-md-4 offset-md-4">
              <h2 className="company-logo">
                <img src="https://static1.squarespace.com/static/59ed9589e45a7c27e9400b3c/t/5a241aa5e2c483bcf3cf4287/1541907203250/?format=1500w" alt="WakeCap Technologies"/>
              </h2>
              <p className="login-message">{this.state.loginError}</p>
              <InputField error={this.state.emailError} 
                          inputType="email"
                          name="email"
                          placeholder="Email" 
                          inputRef="email"
                          onChange={(e) => {this.setState({email: e.target.value})}}/>
              <InputField error={this.state.passError} 
                          inputType="password" 
                          placeholder="Password" 
                          inputRef="password"
                          name="password"
                          onChange={(e) => {this.setState({password: e.target.value})}}/>
              <button type="submit" 
                      className="btn btn-primary btn-block" 
                      onClick={this.validateAndLogin.bind(this)}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...adminActions(dispatch), 
    ...workersAction(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
