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

    createFolder=async(name,id)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.createFolder(name,id);
        DirectoryActions.getPrivateList(id);
        DirectoryActions.getSharedList(id);
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

    render() {
        const { sharedList,privateList,id, noteList} = this.props;
        const { createFolder, getNoteList,sharedFolder,deleteFolder, updateFolder} = this;
        return (
            <div style={{ display: "flex" }}>
                <Directory sharedList={sharedList} privateList={privateList} getNoteList={getNoteList} noteList={noteList} createFolder={createFolder} sharedFolder={sharedFolder} deleteFolder={deleteFolder} updateFolder={updateFolder} user_id={id}/>
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
