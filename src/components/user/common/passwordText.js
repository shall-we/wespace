import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import styles from './text.style'
import TextField from '@material-ui/core/TextField';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

class PasswordText extends React.Component {

  state = {
    password: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  componentWillMount(){
        const {classes} = this.props;
        this.className=classes.dom;
        
      this.InputLabelProps = {
        classes : {  
          root: classes.cssLabel,
          focused: classes.cssFocused,
      }
      };
        
      this.InputProps={
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
          },
        endAdornment : (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
      };
  }

  render (){
    return  (
      <TextField
      className={this.className}
      type={this.state.showPassword ? "text" : "password"}
      value={this.state.password}
      InputProps={this.InputProps}
      InputLabelProps={this.InputLabelProps}
      label={this.props.text} 
      variant="outlined" margin="dense" {...this.props}
    />
      );
  }
}

PasswordText.propTypes={
  classes : PropTypes.object.isRequired,
  showPassword :PropTypes.bool.isRequired,
  password : PropTypes.string.isRequired,
}

export default withStyles(styles) (PasswordText);