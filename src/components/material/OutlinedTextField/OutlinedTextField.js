import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "-16px"
    },
    textField: {
        width: '100%',
        fontWeight: 'bold',
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit
        // '&$cssFocused': {
        //     color: "#1C90FB"
        // },
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    },
    notchedOutline: {
        borderColor: "#1C90FB !important"
    },
    placeholderText: {
        fontWeight: "bold"
    }
});

class OutlinedTextFields extends Component {
  

    render() {
        const { classes,handleText } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    placeholderStyle={classes.placeholderText}
                    placeholder="사원명 입력"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                    onChange={(event)=>{
                        handleText(event);
                    }}
                />
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
