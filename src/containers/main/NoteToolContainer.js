import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as directoryActions from 'store/modules/directory';

import NoteToolTemplate from 'components/common/NoteToolTemplate'
import NoteToolBox from 'components/toolbox/NoteToolBox'
import CommentTool from 'components/tool/CommentTool'
const commentsData = [
  {id: 123, author: 'John', text: 'Hey there!'},
  {id: 124, author: 'Alice', text: 'Hi, how are you?'},
]
class NoteToolContainer extends Component {
 
    render() {
      const { note} = this.props;
      if(note){
      return (
          <NoteToolTemplate >
             <NoteToolBox items={ ['댓글', '첨부', '히스토리'] } >
                <CommentTool data={commentsData}/>
                <div>첨부</div>
                <div>히스토리</div>
             </NoteToolBox>

          </NoteToolTemplate>
                
    );
      }else{
        return(
             <null/>
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
)(NoteToolContainer);