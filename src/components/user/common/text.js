import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './text.style'


class Text extends React.Component {

  componentWillMount(){

    const {classes} = this.props;

      this.className=classes.dom;
      this.label=this.props.text;

      this.InputProps = {
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        }
      };

      this.InputLabelProps = {
        classes : {  
          root: classes.cssLabel,
          focused: classes.cssFocused,
      }
      };
     
  }

  render (){
    return  (
      <TextField
      className={this.className}
      InputLabelProps={this.InputLabelProps}
      InputProps={this.InputProps}
      label={this.label} 
      variant="outlined" margin="dense" {...this.props}
    />
    );
  }
}

Text.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Text);