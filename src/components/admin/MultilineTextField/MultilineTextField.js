import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "1rem",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textField: {
        width: '40rem',
        fontWeight: 'bold',
        // margin: '1rem'
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
    },
    size: {
        width: '38rem',
    }
});

class MultilineTextField extends Component {
    state = {
        name: this.props.value
    }

    render() {
        const { classes,handleText } = this.props;

        return (
          <form className={classes.container} noValidate autoComplete="off">
            {/* <label>제목</label> */}
            <TextField multiline id="outlined-multiline-static" rows="1"
                       placeholder="제목을 입력하세요."
                       margin="normal" variant="outlined"
                       className={classes.textField}
                    //    InputProps={{ classes: { input: classes.size } }}
                       />
            
            {/* <label>내용</label> */}
            <TextField multiline id="outlined-multiline-static" rows="10"
                       placeholder="내용을 입력하세요."
                       margin="normal" variant="outlined"
                    //    className={classes.textField}
                       InputProps={{ classes: { input: classes.size } }}
                       />
          </form>
        );
    }
}

MultilineTextField.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MultilineTextField);
