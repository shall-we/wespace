import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as directoryActions from "store/modules/directory";
import Directory from "components/main/Directory";
import Context from "components/main/Context";
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

     createFolder=async(name,id)=>{
        const {DirectoryActions}=this.props;
        await DirectoryActions.createFolder(name,id);
        DirectoryActions.getPrivateList(id);
        DirectoryActions.getSharedList(id);
    }

    render() {
        const { sharedList,privateList,id} = this.props;
        const { createFolder} = this;
        console.log('sharedList::',sharedList,'-----privateList::',privateList,'KKKKKK------id',id);
        return (
            <div style={{ display: "flex" }}>
                <Directory sharedList={sharedList} privateList={privateList} createFolder={createFolder} user_id={id}/>
                <Context />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        sharedList: state.directory.get("sharedList"),
        privateList: state.directory.get("privateList"),
        id: state.user.get("id"),
    }),
    (dispatch) => ({
        DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
)(withRouter(DirectoryContainer));
