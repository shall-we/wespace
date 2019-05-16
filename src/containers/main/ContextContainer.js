import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as directoryActions from 'store/modules/directory';
import Context from 'components/main/Context';
import Editor from 'components/directory/Editor';


class ContextContainer extends Component {
    render() {
      return (
          <Editor />
    );
  }
}
   
export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    DirectoryActions: bindActionCreators(directoryActions, dispatch)
  })
)(ContextContainer);