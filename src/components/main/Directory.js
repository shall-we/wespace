import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 250;

const styles = theme => ({
    root: {
        display:'flex',
    },
  nested: {
    paddingLeft: theme.spacing.unit * 7,
  },
  menuButton: {
    marginRight: 3.5,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    height: 'calc(100% - 96px - 6rem)',
    top: 96,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    height: 'calc(100% - 96px - 6rem)',
    top: 96,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 5 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7 + 1,
    },
  },
  SubDrawerOpen: {
    height: 'calc(100% - 96px - 6rem)',
    top: 96,
    marginLeft: drawerWidth,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  SubDrawerClose: {
    height: 'calc(100% - 96px - 6rem)',
    top: 96,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 5 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Directory extends React.Component {
  state = {
    open: false,
    SubOpen: false,
    public_navigationOpen : false,
    private_navigationOpen : false,
  };

  handlePublicClick = () => {
    this.setState(state => ({ public_navigationOpen: !state.public_navigationOpen }));
  };

  handlePrivateClick = () => {
    this.setState(state => ({ private_navigationOpen: !state.private_navigationOpen }));
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
    this.setState({ SubOpen: false });
    this.setState({ private_navigationOpen: false});
    this.setState({ public_navigationOpen: false});
  };

  handleSubDrawerOpen = () => {
    this.setState({ SubOpen: true });
  };

  handleSubDrawerClose = () => {
    this.setState({ SubOpen: false });
  };

  render() {
    const { classes, theme } = this.props;
 
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.SubDrawerClose]: !this.state.SubOpen,
          })}
          classes={{
            docked: classes.paper,
            paper: classNames({
              [classes.SubDrawerOpen]: this.state.SubOpen,
              [classes.SubDrawerClose]: !this.state.SubOpen,
            }),
          }}
          open={this.state.SubOpen}
        >
         <div className={classes.toolbar}>
            <div>
            <Fab size="small" color="primary" aria-label="Add">
                  <AddIcon />
            </Fab>
            <IconButton onClick={this.handleSubDrawerClose} className={classNames(classes.menuButton)}>
              {theme.direction
                 === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </div>
          </div>
          <Divider />
          <List>
            {['임', '채', '형', '테', '스', '트'].map((text) => (
                <ListItem button text={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
          </List>
        </Drawer>
        <CssBaseline />
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          
          classes={{
            docked: classes.paper,
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
          
          {
            this.state.open ?
            <div>
            <Fab size="small" color="primary" aria-label="Add">
                  <AddIcon />
            </Fab>
            <IconButton onClick={this.handleDrawerClose} className={classNames(classes.menuButton)}>
               <ChevronLeftIcon />
            </IconButton>
            </div>
            :
            <IconButton onClick={this.handleDrawerOpen} className={classNames(classes.menuButton)}>
               <MenuIcon />
            </IconButton>
          }
          </div>
          <Divider />
          <List>
              <ListItem button onClick={event => {
                this.handleDrawerOpen();
                this.handlePublicClick();
              }}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="public" />
                {this.state.public_navigationOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            {['더존', '테스트'].map((text, index) => (
              <Collapse in={this.state.public_navigationOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={this.handleSubDrawerOpen}>
                <ListItemIcon>
                    <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary={text} /> 
                </ListItem>
                </List>
                </Collapse>
            ))}
        </List>
          <Divider />
          <List>
          <ListItem button onClick={event => {
                this.handleDrawerOpen();
                this.handlePrivateClick();
              }}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary="private" />
                {this.state.private_navigationOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {['임채형', '정처기'].map((text, index) => (
              <Collapse in={this.state.private_navigationOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={this.handleSubDrawerOpen}>
                <ListItemIcon>
                <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary={text} />
                </ListItem>
                </List>
                </Collapse>      
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

Directory.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Directory);