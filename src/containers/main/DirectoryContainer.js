import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as directoryActions from 'store/modules/directory';
import Directory from 'components/main/Directory';
import Context from 'components/main/Context';

class DirectoryContainer extends Component {
   
    getPublicList=(id)=>{
      const {DirectoryActions}=this.props;
      DirectoryActions.getPublicList(id);
    }
    getPrivateList=(id)=>{
      const {DirectoryActions}=this.props;
      DirectoryActions.getPrivateList(id);
    }        

    render() {
      const {getPrivateList, getPublicList} = this.props;
      return (
        <div style={{display:'flex'}}>
          <Directory action={{getPrivateList, getPublicList}}/>
          <Context/>
        </div>
      );
    }
  }
   
  export default connect(
    (state) => ({
    }),
    (dispatch) => ({
      DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
  )(DirectoryContainer);