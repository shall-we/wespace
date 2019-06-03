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

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    width: 'auto',
    // margin: '2rem',
    // padding: '2rem',
    // marginTop: theme.spacing(3),
    height: 'auto',
    overflowX: "hidden",
    overflowY: "auto",
  },
  table: {
    minWidth: 700
  },
  profile: {
    width: '2rem'
  }
});

class CustomizedTables extends React.Component {
  render() {
    const { classes, userList, getNoteFromEachUser } = this.props;

    console.log('[CustomizedTables ', userList );
    console.log('[CustomizedTables ', getNoteFromEachUser );

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
            {userList.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="center"><img className={classes.profile} src={user.profile} alt="profile" /></StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.email}
                </StyledTableCell>
                <StyledTableCell align="right">{user.name}</StyledTableCell>
                <StyledTableCell align="right">{user.folder_count}</StyledTableCell>
                {getNoteFromEachUser.map((user) => (
                  <StyledTableCell align="right">{user.note_count}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(CustomizedTables);
