import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from '@material-ui/core/CssBaseline';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpenText, faUserEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelopeOpenText);
library.add(faUserEdit);

const drawerWidth = 250;

const styles = theme => createMuiTheme({
    root: {
        display: 'flex',
        color: 'white',
        background: 'black'
    },
    drawer: {
        width: drawerWidth,
        height: 'calc(100vh - 4rem)',
        flexShrink: 0,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
    },
    paper: {
        position : "unset",
        background: "#000000"
    },
    drawerOverflow: {
        overflowX: "hidden",
    },
    nav: {
        padding: '1rem',
        borderBottom: '3px groove white',
        // background: 'yellow'
    },
    list: {
        overflowX: "hidden",
        overflowY: "auto",
        borderBottom: '1px solid white',
    },
    lit: {
        fontSize: '1.2rem',
        textAlign: 'center'
    }
});

class Administration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            manageEmployeesOpen: true,


            open: false,
            SubOpen: false,
            ChatOpen: false,

            toggle: false,

            folder_id : 0,
            folder_name : '',
            note_id : 0,
            note_name: '',
            permission:'',
            oneInputModal: false,
            noticeModal: false,
            selectModal: false,

            modal_action:null,
            modal_text:'',
            modal_id:0,
            modal_icon: '',
            modal_title: '',
            modal_content: '',
            btn_name: '',
        };
    }

    handleNoticeClick = () => {
      this.setState({ visible: true });
      this.props.noticeOpen(this.state.visible);
    };

    handleManageEmployeesClick = () => {
        this.setState({ visible: true });
        console.log('[Administration] ', this.state.visible);
        this.props.visible(this.state.visible);
    };

    render() {
      const { classes } = this.props;
        
      return (
        <div className={classes.root}>
          <CssBaseline />
          <Drawer open={this.state.open} variant="permanent"
                  className={classNames(classes.drawer)}
                  classes={{paper: classNames(classes.paper)}}>
            <List className={classes.nav}>
              <div>
                <h2><center>관리자 카테고리</center></h2>
              </div>
            </List>
            {/* notice tab clicked */}
            <List className={classes.list}>
              <ListItem button onClick={(e) => this.handleNoticeClick()}>
                <ListItemIcon>
                  <FontAwesomeIcon icon="envelope-open-text" size="2x" color="#fff" />
                </ListItemIcon>
                <ListItemText className={classes.lit} disableTypography primary="공지사항 관리" onClick={(e) => console.log('hi')} />
              </ListItem>
            </List>
            
            <List className={classes.list}>
              <ListItem className={classes.item} button onClick={(e) => this.handleManageEmployeesClick()}>
                <ListItemIcon>
                  <FontAwesomeIcon icon="user-edit" size="2x" color="#fff" />
                </ListItemIcon>
                <ListItemText className={classes.lit} disableTypography primary="직원 현황 관리" onClick={(e) => console.log('hi')} />
              </ListItem>
            </List>
          </Drawer>
            </div>
        );
    }
}

Administration.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Administration);
