import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { Menu, ExpandMore, ExpandLess, CreateNewFolder, FolderShared, Delete, Folder, Share, Lock, Settings, Create, 
    GroupAdd, ChevronLeft, ChevronRight, NoteAdd} from "@material-ui/icons";
import MakeFolderModal from "../modal/MakeFolderModal/MakeFolderModal";
import AskShareModal from '../modal/AskShareModal';
import DeleteFolderModal from '../modal/DeleteFolderModal';
import EditFolderModal from "../modal/EditFolderModal";
import UpdateNoteModal from "../modal/UpdateNoteModal";

const drawerWidth = 250;

const styles = theme => ({
    root: {
        display:'flex',
    },
    menuButton: {
        marginRight: 3.5
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerOpen: {
        height: 'calc(100vh - 6rem)', 
        position:'unset',
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    drawerClose: {
        height: 'calc(100vh - 6rem)', 
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing.unit * 5 + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing.unit * 7 + 1
        }
    },
    SubDrawerOpen: {
        height: 'calc(100vh - 6rem)', 
        position:'unset',
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    SubDrawerClose: {
        display: 'none'
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
    },
    paper: {
        position : "unset",
    },
    drawerOverflow: {
        overflowX: "hidden",
    },
    list : {
        overflowX: "hidden",
        overflowY: "auto",
    },
    
});

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            SubOpen: false,
            public_navigationOpen: false,
            private_navigationOpen: false,
            visible: false,
            share:false,
            modifyFolderVisible: false,
            deleteFolderVisible: false,
            updateNoteVisible: false,
            folder_id : 0,
            folder_name : '',
            note_id : 0,
            note_name: '',
        };
    }

    
    handlePublicClick = () => {
        this.setState(state => ({
            public_navigationOpen: !state.public_navigationOpen
        }));
    };

    handlePrivateClick = () => {
        this.setState(state => ({
            private_navigationOpen: !state.private_navigationOpen
        }));
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
        this.setState({ SubOpen: false });
        this.setState({ private_navigationOpen: false });
        this.setState({ public_navigationOpen: false });
    };

    handleSubDrawerOpen = () => {
        this.setState({ SubOpen: true });
    };

    handleSubDrawerClose = () => {
        this.setState({ SubOpen: false });
    };

    handleOpenMakeFolderModal = () => {
      this.setState({ visible: true });
    };

    handleCloseMakeFolderModal = () => {
        this.setState({ visible: false });
    };

    handleOpenDeleteFolderModal = (folder_id) => {
      this.setState({ deleteFolderVisible: true, folder_id: folder_id});
    };

    handleCloseDeleteFolderModal = () => {
        this.setState({ deleteFolderVisible: false });
    };

    handleOpenModifyFolderModal = () => {
       this.setState({ modifyFolderVisible: true});
    };
  
    handleCloseModifyFolderModal = () => {
         this.setState({ modifyFolderVisible: false });
    };

    handleOpenUpdateNoteModal = (note_id, note_name) => {
        this.setState({ updateNoteVisible: true, note_id:note_id, note_name: note_name});
     };
   
     handleCloseUpdateNoteModal = () => {
          this.setState({ updateNoteVisible: false });
     };

    handleOpenAskShareModal = () => {
        this.setState({ share: true });
      };
  
    handleCloseAskShareModal = () => {
         this.setState({ share: false });
    };

    handleNoteList = (folder_id, name) => {
        this.setState({ folder_name: name, folder_id: folder_id });
        this.props.getNoteList(folder_id);
    };
  
    render() {
        const { classes, theme, sharedList=[],privateList=[],noteList=[],user_id=0 } = this.props;
        const { createFolder, sharedFolder , deleteFolder, updateFolder, updateNote } = this.props;
        return (
            <div className={classes.root}>
                <Drawer 
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open
                    })}
                    classes={{
                        paper: classNames(classes.paper, {
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        })
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        {this.state.open ? (
                            <div>
                                <MakeFolderModal visible={this.state.visible} onCancel={this.handleCloseMakeFolderModal} onConfirm={createFolder} user_id={user_id}/>
                                <AskShareModal visible={this.state.share} onConfirm={sharedFolder} onCancel={this.handleCloseAskShareModal} folder_id={'d'}/>
                                <EditFolderModal  visible={this.state.modifyFolderVisible} onCancel={this.handleCloseModifyFolderModal} onConfirm={updateFolder} folder_id={this.state.folder_id} folder_name={this.state.folder_name}/>
                                <DeleteFolderModal visible={this.state.deleteFolderVisible} onCancel={this.handleCloseDeleteFolderModal} onConfirm={deleteFolder} folder_id={this.state.folder_id}/>
                                <UpdateNoteModal  visible={this.state.updateNoteVisible} onCancel={this.handleCloseUpdateNoteModal} onConfirm={updateNote} note_id={this.state.note_id} note_name={this.state.note_name}/>


                                <IconButton>
                                    <CreateNewFolder color="primary" onClick={this.handleOpenMakeFolderModal}/>
                                </IconButton>

                                <IconButton>   
                                    <GroupAdd color="primary"  onClick={this.handleOpenAskShareModal}/>
                                </IconButton>

                                <IconButton
                                    onClick={this.handleDrawerClose}
                                    className={classNames(classes.menuButton)}
                                >
                                
                                <ChevronLeft />
                                </IconButton>
                            </div>
                        ) : (
                            <IconButton
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton)}
                            >
                                <Menu />
                            </IconButton>
                        )}
                    </div>
                    <Divider />
                    <List className={classes.list}>
                        <ListItem 
                            button
                            onClick={event => {
                                this.handleDrawerOpen();
                                this.handlePublicClick();
                            }}
                        >
                            <ListItemIcon>
                                <FolderShared />
                            </ListItemIcon>
                            <ListItemText primary="public" />
                            {this.state.public_navigationOpen ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItem>
                        {sharedList.map((item,id) => (
                            <Collapse
                                in={this.state.public_navigationOpen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItem
                                        button
                                        onClick={event => {
                                            this.handleSubDrawerOpen();
                                            this.handleNoteList(item.folder_id, item.name);
                                        }}
                                        onDoubleClick={this.handleOpenModifyFolderModal}
                                    >
                                    {item.permission === 'OWNER' ?
                                        <ListItemIcon>
                                            <Delete onClick={(e) => this.handleOpenDeleteFolderModal(item.folder_id)}/>
                                        </ListItemIcon> 
                                        : null
                                    }
                                    
                                        <ListItemText inset primary={item.name} />
                                        
                                    </ListItem> 
                                </List>
                            </Collapse>
                        ))}
                    </List>
                    <Divider />



                    <List className={classes.list}>
                        <ListItem
                            button
                            onClick={event => {
                                this.handleDrawerOpen();
                                this.handlePrivateClick();
                            }}
                        >
                            <ListItemIcon>
                                <Folder />
                            </ListItemIcon>
                            <ListItemText primary="private" />
                            {this.state.private_navigationOpen ? (
                                <ExpandLess />
                            ) : (
                                <ExpandMore />
                            )}
                        </ListItem>
                        {privateList.map((item, index) => (
                            <Collapse
                                in={this.state.private_navigationOpen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItem
                                        button
                                        onClick={event => {
                                            this.handleSubDrawerOpen();
                                            this.handleNoteList(item.folder_id, item.name);
                                        }}
                                        onDoubleClick={this.handleOpenModifyFolderModal}
                                    >
                                     {item.permission === 'OWNER' ?
                                        <ListItemIcon>
                                            <Delete onClick={(e) => this.handleOpenDeleteFolderModal(item.folder_id)}/>
                                        </ListItemIcon> 
                                        : null
                                    }
                                        <ListItemText inset primary={item.name} />
                                    </ListItem>
                                </List>
                            </Collapse>
                        ))}
                    </List>
                </Drawer>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.SubDrawerClose]: !this.state.SubOpen
                    })}
                    classes={{
                        paper: classNames( {
                            [classes.SubDrawerOpen]: this.state.SubOpen,
                            [classes.SubDrawerClose]: !this.state.SubOpen
                        }),
                    }}
                    open={this.state.SubOpen}
                >
                    <div className={classes.toolbar}>
                        <div>                                                            
                            <IconButton>   
                                <NoteAdd color="primary"/>
                            </IconButton>

                            <IconButton>   
                                <Create color="primary"/>
                            </IconButton>
                            
                            <IconButton>
                                <Share color="primary"/>
                            </IconButton>

                            <IconButton>   
                                <Lock color="primary"/>
                            </IconButton>

                            <IconButton
                                onClick={this.handleSubDrawerClose}
                                className={classNames(classes.menuButton)}
                            >
                                {theme.direction === "rtl" ? (
                                    <ChevronRight />
                                ) : (
                                    <ChevronLeft />
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <div className={classes.drawerOverflow}>
                    <List>
                        {noteList.map(item => (
                            <ListItem button>
                                <ListItemText primary={item.name} 
                                onDoubleClick={(e) => this.handleOpenUpdateNoteModal(item.id, item.name)}/>
                            </ListItem>
                        ))}
                    </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

Directory.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Directory);