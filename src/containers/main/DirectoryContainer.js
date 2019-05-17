import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as directoryActions from "store/modules/directory";
import Directory from "components/main/Directory";
import {withRouter} from 'react-router-dom';

import socketio from 'socket.io-client';
const socket=socketio.connect('http://192.168.0.70:4000');


class DirectoryContainer extends Component {

    updateFolderList=()=>{
        const {DirectoryActions,id}=this.props;
        if(id){
        DirectoryActions.getPrivateList(id);
        DirectoryActions.getSharedList(id);
        }
    }

    createFolder=async(user_id,folder_name)=>{
        await this.props.DirectoryActions.createFolder(user_id, folder_name);
        socket.emit('updateFolderList',{ msg:'createFolder'});

    }
    sharedFolder=async(user_id,folder_id,permission)=>{
        await this.props.DirectoryActions.sharedFolder(user_id,folder_id,permission);
        socket.emit('updateFolderList',{ msg:'sharedFolder'});
    }

    deleteFolder=async(folder_id) => {
        await this.props.DirectoryActions.deleteFolder(folder_id);
        await this.props.DirectoryActions.getNoteList(0);
        socket.emit('updateFolderList',{ msg:'deleteFolder'});
    }

    updateFolder=async(folder_id, folder_name) => {
        await this.props.DirectoryActions.updateFolder(folder_id, folder_name);
        socket.emit('updateFolderList',{ msg:'updateFolder'});
    }
///////////////////////////////---------------------NOTE----------------------//////////////////////////////



    updateNoteList=()=>{
        const {DirectoryActions,folder}=this.props;
        console.log('updateNoteList::',folder);
        if(folder)
        DirectoryActions.getNoteList(folder);
    }

    createNote=async(folder_id,note_name)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.createNote(folder_id,note_name);
        socket.emit('updateFolderList',{ msg:'createNote'});
        socket.emit('updateNoteList',{ msg:'createNote'});
       
    }

    updateNote=async(ids, note_name) => {
        const {DirectoryActions} = this.props;
        await DirectoryActions.updateNote(ids.note_id, note_name);
        socket.emit('updateNoteList',{ msg:'updateNote'});

    }

    deleteNote=async(ids) => {
        const {DirectoryActions} = this.props;
        await DirectoryActions.deleteNote(ids.note_id);
        socket.emit('updateFolderList',{ msg:'deleteNote'});
        socket.emit('updateNoteList',{ msg:'deleteNote'});

        DirectoryActions.setNote(null);
    }


    setNote=(uuid)=>{
        const {DirectoryActions} = this.props;
        DirectoryActions.setNote(uuid);
    }
    setFolder=(folder_id)=>{
        const {DirectoryActions} = this.props;
       
        DirectoryActions.setFolder(folder_id);
        DirectoryActions.getNoteList(folder_id);
        
    }



    componentWillMount(){
        setTimeout(()=>{
            if(this.props.id){
                this.updateFolderList();
                }else{
                    this.props.history.push('/');
                }
        }, 1000);
       
    }
    componentDidMount(){
        socket.on('updateFolderList',(obj)=>{
            this.updateFolderList();
        })
        socket.on('updateNoteList',(obj)=>{
            this.updateNoteList();
        })
    }

    render() {
        const { sharedList,privateList, noteList, id} = this.props;
        const { createFolder,sharedFolder, deleteFolder, updateFolder, updateNote, createNote, deleteNote, setNote,setFolder} = this;
        return (
            <div style={{ display: "flex" }}>
                <Directory 
                sharedList={sharedList} privateList={privateList}  noteList={noteList} user_id={id}
                createFolder={createFolder} updateFolder={updateFolder} deleteFolder={deleteFolder} sharedFolder={sharedFolder} 
                createNote={createNote} updateNote={updateNote}  deleteNote={deleteNote} 
                setNote={setNote} setFolder={setFolder}
                />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        sharedList: state.directory.get("sharedList"),
        privateList: state.directory.get("privateList"),
        noteList: state.directory.get("noteList"),
        folder: state.directory.get("folder"),
        id: state.user.get("id"),
    }),
    (dispatch) => ({
        DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
)(withRouter(DirectoryContainer));
