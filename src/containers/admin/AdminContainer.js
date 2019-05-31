import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "store/modules/user";
import Administration from "components/admin/Administration";
import { withRouter } from "react-router-dom";
import Context from "components/main/Context";
import NoticeForm from "components/admin/NoticeForm";
import ManageEmployees from "components/admin/ManageEmployees";

class AdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoticeOpened: false,
      isNoticeWritable: false,
      isManageEmployees: false,
    };
  }

  handleContextOpen = (isNoticeOpened) => {
    this.setState({
      isNoticeOpened: isNoticeOpened,
      isNoticeWritable: false,
      isManageEmployees: false,
    });
  }
  
  handleWriteNotice = (isNoticeWritable) => {
    this.setState({
      isNoticeOpened: false,
      isNoticeWritable: isNoticeWritable,
      isManageEmployees: false,
    });
  }

  handleManageEmployees = (isManageEmployees) => {
    console.log('[AdminContainer] ', isManageEmployees);
    this.setState({
      isNoticeOpened: false,
      isNoticeWritable: false,
      isManageEmployees: isManageEmployees,
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Administration noticeOpen={this.handleContextOpen} visible={this.handleManageEmployees} />
        {this.state.isNoticeOpened ?
         (<Context openWriteNotice={this.handleWriteNotice} onCancel={(e) => this.handleContextOpen(true)} />) : null}
        {this.state.isNoticeWritable ? (<NoticeForm onCancel={this.handleContextOpen} />) : null}
        {this.state.isManageEmployees ? (<ManageEmployees />) : null}
      </div>
    );
  }
}

export default connect(
  state => ({
    sharedList: state.directory.get("sharedList"),
    privateList: state.directory.get("privateList"),
    noteList: state.directory.get("noteList"),
    folder: state.directory.get("folder"),
    id: state.user.get("id")
  }),
  dispatch => ({
    // DirectoryActions: bindActionCreators(directoryActions, dispatch),
    UserActions: bindActionCreators(UserActions, dispatch)
  })
)(withRouter(AdminContainer));
