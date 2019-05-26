import React, { Component } from 'react';
import SubmitButton from '../common/submitButton';
import Text from '../common/text';
import PasswordText from '../common/passwordText';
import {withRouter} from 'react-router-dom';
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
}


   changeValue = (event) => {
    const objName = event.target.id;
    if(objName === 'email')
        this.setState({email: event.target.value});
    else if(objName === 'password')
        this.setState({password: event.target.value});
}

 ClickHandler = () => {
  this.props.action(this.state.email,this.state.password);
  this.props.history.push('/note');
}


  render() {
    return (
      <div className="page">
        <label className="title" htmlFor="login">Login</label>
        <Text text="Email" id='email' onChange={event => this.changeValue(event)}/>
        <PasswordText text="Password" id='password' value={this.state.password} onChange={event => this.changeValue(event)}/>
        <SubmitButton text = "Sign In" onClick={this.ClickHandler} />
      </div>
    );
  }
}

export default withRouter(Login);
