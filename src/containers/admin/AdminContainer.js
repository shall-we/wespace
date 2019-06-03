import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import Administration from "components/admin/Administration";
import Context from "components/main/Context";
import NoticeForm from "components/admin/NoticeForm";
import ManageEmployees from "components/admin/ManageEmployees";
import * as adminActions from "store/modules/admin";
import * as userActions from "store/modules/user";

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoticeOpened: false,
      isNoticeWritable: false,
      isManageEmployees: false,

      noticeList: [],
      userList: [],
      onModify: false
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
      return {
        noticeList: nextProps.noticeList,
        userList: nextProps.userList
      };
    }
    return null;
  }

  handleContextOpen = (isNoticeOpened) => {
    this.setState({
      isNoticeOpened: isNoticeOpened,
      isNoticeWritable: false,
      isManageEmployees: false,
      onModify: false
    });
  }
  
  handleWriteNotice = (isNoticeWritable) => {
    this.setState({
      isNoticeOpened: false,
      isNoticeWritable: isNoticeWritable,
      isManageEmployees: false,
      title: '',
      content: ''
    });
  }

  handleModifyNotice = (id, title, content) => {
    console.log('[AdminContainer] handleModifyNotice: ', id, ':', title, ':', content);
    this.props.AdminActions.getNotice(id);
    this.setState({
      onModify: true,
      isNoticeOpened: false,
      isNoticeWritable: true,
      isManageEmployees: false,
      id: id,
      title: title,
      content: content,
    });
  //   if (id) {
  //       console.log('[handleUpdate] ', id);
  // this.handleUpdate();
  //   }
  }

  handleUpdate = (id, title, content) => {
    console.log('[handleUpdate] ', id, ':', title, ':', content);
    this.props.AdminActions.updateNotice(id, title, content);
    this.props.AdminActions.getNoticeList();
    this.handleContextOpen(true);
  }

  handleDeleteNotice = (id) => {
    this.props.AdminActions.deleteNotice(id);
    this.props.AdminActions.getNoticeList();
    this.handleContextOpen(true);
  }

  handleManageEmployees = (isManageEmployees) => {
    console.log('[AdminContainer] ', isManageEmployees);
    console.log(this.props.UserActions.getAllUserList());
    this.setState({
      isNoticeOpened: false,
      isNoticeWritable: false,
      isManageEmployees: isManageEmployees,
    });
  }

  handleCreateNotice = (title, content) => {
    console.log(title, ':', content);
    this.props.AdminActions.createNotice(title, content);
    this.props.AdminActions.getNoticeList();
    this.handleContextOpen(true);
  }

  handleChangeTitle = (e) => { 
    this.setState({ title: e.target.value })
  }

  handleChangeContent = (e) => { 
    this.setState({ content: e.target.value })
  }

  render() {
    const { title, content } = this.state;

    console.log('[container] ', this.state.userList);

    return (
      <div style={{ display: "flex" }}>
        <Administration noticeOpen={this.handleContextOpen} visible={this.handleManageEmployees} />

        {this.state.isNoticeOpened ?
         (<Context noticeList={this.state.noticeList} onWrite={this.handleWriteNotice} onModify={this.handleModifyNotice} onDelete={this.handleDeleteNotice} />) : null}
        
        {this.state.isNoticeWritable ?
          (<NoticeForm title={title} content={content} onConfirm={this.handleCreateNotice} onCancel={this.handleContextOpen} changeTitle={this.handleChangeTitle} changeContext={this.handleChangeContent} onModify={this.state.onModify} id={this.state.id} onUpdate={this.handleUpdate} />) : null
        }
        
        {this.state.isManageEmployees ?
         (<ManageEmployees userList={this.state.userList} />) : null}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    noticeList: state.admin.get("notice_list"),
    userList: state.user.get("all_user_list"),
    // getNoteFromEachUser: state.note.get("get_note_count")
  }),
  (dispatch) => ({
    AdminActions: bindActionCreators(adminActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(withRouter(AdminContainer));
