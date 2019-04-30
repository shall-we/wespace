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
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    }
});

class OutlinedTextFields extends Component {
    state = {
        name: "홍길동"
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="on">
                <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    placeholder="직원명 입력"
                    margin="normal"
                    variant="outlined"
                />
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedTextFields);
