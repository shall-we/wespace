import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

import Selects from "components/common/Selects";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: theme.spacing.unit / 2,
        margin: theme.spacing.unit / 4,
    },
    chip: {
        margin: theme.spacing.unit / 2,
        padding: theme.spacing.unit / 5,
    },
    role: {
        padding: theme.spacing.unit / 2,
        margin: theme.spacing.unit / 4,
        backgroundColor: "primary"
    },
    grid: {
        alignContent: 'center',
        alignItems: 'center'
    }
});

class ChipsArray extends React.Component {
    state = {
        chipData: [
            { key: 222, label: "장사원" },
            { key: 1, label: "김대리" },
            { key: 2, label: "천과장" },
            { key: 3, label: "오차장" },
            { key: 4, label: "김부장" }
        ],
        bgColor: "primary",
        role: "MEMEBER"
    };

    handleDelete = data => () => {
        this.setState(state => {
            const chipData = [...state.chipData];
            const chipToDelete = chipData.indexOf(data);
            chipData.splice(chipToDelete, 1);
            return { chipData };
        });
    };

    handleClick = (data) => {
        console.log(data, ' is clicked');
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                {this.state.chipData.map(data => {
                    return (
                        <Grid container spacing={16} alignContent="center" className={classes.grid}>
                            <Grid item xs={10} sm={4} className={classes.grid}>
                                <Chip key={data.key} label={data.label} onDelete={this.handleDelete(data)} className={classes.chip}
                                color="#1C90FB" />
                            </Grid>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* xs is minimum 6 */}
                            <Grid item xs={6} className={classes.grid}>
                                <Selects />
                            </Grid>
                        </Grid>
                    );
                })}
            </Paper>
        );
    }
}

ChipsArray.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChipsArray);
