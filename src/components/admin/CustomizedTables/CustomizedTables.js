import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#00AAF0',
    color: theme.palette.common.white,
    fontSize: '1rem'
  },
  body: {
    fontSize: '1rem'
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("frozenyoghurt@hanmail.net", 159, 6.0, 24, 4.0),
  createData("Ice-cream-sandwich@hanmail.net", 237, 9.0, 37, 4.3),
  createData("Eclair@hanmail.net", 262, 16.0, 24, 6.0),
  createData("Cupcake@hanmail.net", 305, 3.7, 67, 4.3),
  createData("Gingerbread@hanmail.net", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt@hanmail.net", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich@hanmail.net", 237, 9.0, 37, 4.3),
  createData("Eclair@hanmail.net", 262, 16.0, 24, 6.0),
  createData("Cupcake@hanmail.net", 305, 3.7, 67, 4.3),
  createData("Gingerbread@hanmail.net", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt@hanmail.net", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich@hanmail.net", 237, 9.0, 37, 4.3),
  createData("Eclair@hanmail.net", 262, 16.0, 24, 6.0),
  createData("Cupcake@hanmail.net", 305, 3.7, 67, 4.3),
  createData("Gingerbread@hanmail.net", 356, 16.0, 49, 3.9),
];

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    width: 'auto',
    // margin: '2rem',
    // padding: '2rem',
    // marginTop: theme.spacing(3),
    height: 'calc(100vh - 8rem)',
    overflowX: "hidden",
    overflowY: "auto",
  },
  table: {
    minWidth: 700
  },
});

class CustomizedTables extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <FontAwesomeIcon icon="user-circle" size="2x" color="#fff" />
              </StyledTableCell>
              <StyledTableCell className={classes.test} align="left">이메일</StyledTableCell>
              <StyledTableCell align="right">직원 이름</StyledTableCell>
              <StyledTableCell align="right">공유 폴더 수</StyledTableCell>
              <StyledTableCell align="right">노트 보유 수</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(CustomizedTables);
