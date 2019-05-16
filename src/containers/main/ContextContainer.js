import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as directoryActions from 'store/modules/directory';
import Context from 'components/main/Context';
import Editor from 'components/main/Editor';


class ContextContainer extends Component {



    render() {
      const { note,name} = this.props;
      if(note){
      return (
          <Editor  key={note} note={note} name={name} />
    );
      }else{
        return(
             <Context/>
        )
      }
  }
}
   
export default connect(
  (state) => ({
    note: state.directory.get("note"),
    name: state.user.get("name")
  }),
  (dispatch) => ({
    DirectoryActions: bindActionCreators(directoryActions, dispatch)
  })
)(ContextContainer);