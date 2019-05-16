import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as directoryActions from "store/modules/directory";
import Directory from "components/main/Directory";
import {withRouter} from 'react-router-dom';

class DirectoryContainer extends Component {

    componentWillMount(){
       
        setTimeout(()=>{
            const {DirectoryActions,id}=this.props;
            if(id){
                console.log('DirectoryContainer::::',id);
                 DirectoryActions.getPrivateList(id);
                 DirectoryActions.getSharedList(id);
                }else{
                    this.props.history.push('/');
                }
                
        }, 1000);
       
    }



    getNoteList = async(folder_id) => {
      const {DirectoryActions} = this.props;
      await DirectoryActions.getNoteList(folder_id);
    }

    createFolder=async(user_id,folder_name)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.createFolder(user_id, folder_name);
        DirectoryActions.getPrivateList(user_id);
        DirectoryActions.getSharedList(user_id);
    }
    sharedFolder=async(user_id,folder_id,permission)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.sharedFolder(user_id,folder_id,permission);
        DirectoryActions.getPrivateList(user_id);
        DirectoryActions.getSharedList(user_id);
    }

    deleteFolder=async(folder_id) => {
        const {DirectoryActions, id} = this.props;
        await DirectoryActions.deleteFolder(folder_id);
        await DirectoryActions.getNoteList(0);
        DirectoryActions.getPrivateList(id);
        DirectoryActions.getSharedList(id);
        

    }

    updateFolder=async(folder_id, folder_name) => {
        const {DirectoryActions, id} = this.props;
        await DirectoryActions.updateFolder(folder_id, folder_name);
        DirectoryActions.getPrivateList(id);
        DirectoryActions.getSharedList(id);
    }

    createNote=async(folder_id,note_name)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.createNote(folder_id,note_name);
        await DirectoryActions.getNoteList(folder_id);
    }

    updateNote=async(ids, note_name) => {
        const {DirectoryActions} = this.props;
        await DirectoryActions.updateNote(ids.note_id, note_name);
        await DirectoryActions.getNoteList(ids.folder_id);
    }

    deleteNote=async(ids) => {
        const {DirectoryActions} = this.props;
        await DirectoryActions.deleteNote(ids.note_id);
        await DirectoryActions.getNoteList(ids.folder_id);
        DirectoryActions.getNote(null);
    }

    getNote=(uuid)=>{
        const {DirectoryActions} = this.props;
        DirectoryActions.getNote(uuid);
    }


    render() {
        const { sharedList,privateList, id, noteList} = this.props;
        const { createFolder, getNoteList,sharedFolder,deleteFolder, updateFolder, updateNote, createNote, deleteNote,getNote} = this;
        return (
            <div style={{ display: "flex" }}>
                <Directory sharedList={sharedList} privateList={privateList} getNoteList={getNoteList} deleteNote={deleteNote} getNote={getNote}
                noteList={noteList} createFolder={createFolder} sharedFolder={sharedFolder} createNote={createNote}
                deleteFolder={deleteFolder} updateFolder={updateFolder} updateNote={updateNote} user_id={id}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        sharedList: state.directory.get("sharedList"),
        privateList: state.directory.get("privateList"),
        noteList: state.directory.get("noteList"),
        id: state.user.get("id"),
    }),
    (dispatch) => ({
        DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
)(withRouter(DirectoryContainer));
