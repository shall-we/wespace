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
import OneInputModal from "../modal/OneInputModal";
import AskShareModal from '../modal/AskShareModal';
import NoticeModal from '../modal/NoticeModal';
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
            noticeModalVisible: false,
            folder_id : 0,
            folder_name : '',
            modifyFolderVisible: false,
            modal_icon: '',
            modal_title: '',
            modal_content: '',
            deleteFolderVisible: false,
            updateNoteVisible: false,
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

    /** [main navigation] handling folder modal */
    handleOpenMakeFolderModal = () => {
      this.setState({
          visible: true,
          modal_icon: 'user-friends',
          modal_title: '공유 폴더 생성',
          modal_content: '공유할 폴더명을 입력해주세요.',
          btn_name: '생성'
      });
    };

    handleCloseMakeFolderModal = () => {
        this.setState({ visible: false });
    };

    handleOpenNoticeModal = (folder_id) => {
      this.setState({
          noticeModalVisible: true,
          modal_icon: 'trash-alt',
          modal_title: '공유 폴더 삭제',
          modal_content: '공유 폴더를 정말 삭제하시겠습니까?',
          btn_name: '삭제',
          folder_id: folder_id
      });
    };

    handleCloseNoticeModal = () => {
        this.setState({ noticeModalVisible: false });
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

    /** [sub navigation] handling note modal */
    handleCreateFile = () => {
        this.setState({
          visible: true,
          modal_icon: 'file-alt',
          modal_title: '공유 노트 생성',
          modal_content: '공유할 노트명을 입력해주세요.',
          btn_name: '생성'
        });
    }

    handleModifyFileName = () => {
        this.setState({
          visible: true,
          modal_icon: 'file-signature',
          modal_title: '노트 이름 수정',
          modal_content: '수정할 노트명을 새로 입력해주세요.',
          btn_name: '수정'
        })
    }

    handleNoteExportPdf = () => {
        this.setState({
          noticeModalVisible: true,
          modal_icon: 'file-pdf',
          modal_title: '노트 내보내기',
          modal_content: '해당 내용을 PDF 파일로 내보내겠습니까?',
          btn_name: '확인'
      });
    }

    handleAccessToFile = () => {
        this.setState({
          noticeModalVisible: true,
          modal_icon: 'key',
          modal_title: '접근권한 설정',
          modal_content: '해당 노트에 대한 접근권한을 변경합니다.',
          btn_name: '확인'
      });
    }

    handleNoteList = (folder_id, name) => {
        this.setState({ folder_name: name, folder_id: folder_id });
        this.props.getNoteList(folder_id);
    };
  
    render() {
        const { classes, theme, sharedList = [], privateList = [], noteList = [],
                user_id = 0, createFolder, sharedFolder, deleteFolder, updateFolder, updateNote, folder_id = 0,
                modal_icon, modal_title, modal_content, btn_name } = this.props;
        
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
                              <OneInputModal visible={this.state.visible}
                                             onCancel={this.handleCloseMakeFolderModal}
                                             onConfirm={createFolder}
                                             modal_icon={this.state.modal_icon}
                                             modal_title={this.state.modal_title}
                                             modal_content={this.state.modal_content}
                                             btn_name={this.state.btn_name} />

                              <AskShareModal visible={this.state.share} onConfirm={sharedFolder} onCancel={this.handleCloseAskShareModal} folder_id={'d'} />

                              <NoticeModal visible={this.state.noticeModalVisible}
                                           onCancel={this.handleCloseNoticeModal}
                                           onConfirm={deleteFolder}
                                           folder_id={this.state.folder_id}
                                           modal_icon={this.state.modal_icon}
                                           modal_title={this.state.modal_title}
                                           modal_content={this.state.modal_content}
                                           btn_name={this.state.btn_name} />

                              <EditFolderModal  visible={this.state.modifyFolderVisible} onCancel={this.handleCloseModifyFolderModal} onConfirm={updateFolder} folder_id={this.state.folder_id} folder_name={this.state.folder_name} />
                              
                              {/* <NoticeModal visible={this.stanoticete.noticeModalVisible} onCancel={this.handleCloseNoticeModal} onConfirm={deleteFolder} folder_id={this.state.folder_id} /> */}

                            <IconButton>
                                <CreateNewFolder color="primary" onClick={this.handleOpenMakeFolderModal}/>
                            </IconButton>

                                <IconButton>   
                                    <GroupAdd color="primary" onClick={this.handleOpenAskShareModal} />
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
                                            <Delete onClick={(e) => this.handleOpenNoticeModal(item.folder_id)}/>
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
                                            <Delete onClick={(e) => this.handleOpenNoticeModal(item.folder_id)} />
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
                                <NoteAdd color="primary" onClick={this.handleCreateFile} />
                            </IconButton>

                            <IconButton>   
                                <Create color="primary" onClick={this.handleModifyFileName} />
                            </IconButton>
                            
                            <IconButton>
                                <Share color="primary" onClick={this.handleNoteExportPdf} />
                            </IconButton>

                            <IconButton>   
                                <Lock color="primary" onClick={this.handleAccessToFile} />
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
