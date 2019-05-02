import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as directoryActions from 'store/modules/directory';
import Directory from 'components/main/Directory';
import Context from 'components/main/Context';

class DirectoryContainer extends Component {
   
    initialize = async (id) => {

      const List = await Promise.all([
        directoryActions.getPublicList(id),
        directoryActions.getPrivateList(id)
      ]);
      
      console.log(List);
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      const {DirectoryContainer} = this.props;
      return (
        <div style={{display:'flex'}}>
          <Directory action={DirectoryContainer}/>
          <Context/>
        </div>
      );
    }
  }
   
  export default connect(
    (state) => ({
      //publicList: state.list.get('publicList'),
      //privateList: state.list.get('privateList'),
    }),
    (dispatch) => ({
      DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
  )(DirectoryContainer);