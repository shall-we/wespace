import React, { Component } from 'react';
import SubmitButton from '../common/submitButton';
import Text from '../common/text';
import PasswordText from '../common/passwordText';

class Login extends Component {

  render() {
    return (
      <div className="page">
      <label className="title" htmlFor="login">Login</label>
        <Text text="Email"/>
        <PasswordText text="Password" />
         <SubmitButton text = "Sign In"/>
      </div>
    );
  }
}

export default Login;
