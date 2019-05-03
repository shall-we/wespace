import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as directoryActions from "store/modules/directory";
import Directory from "components/main/Directory";
import Context from "components/main/Context";

class DirectoryContainer extends Component {
    // initialize = async (id) => {
    //   const List = await Promise.all([
    //     directoryActions.getSharedList(id),
    //     // directoryActions.getPrivateList(id)
    //   ]);
    //   console.log(List);
    // }

    constructor(props) {
        super(props);
        this.state = {
            folderList: [
            ]
        };
    }

    getSharedList = id => {
        const { DirectoryActions } = this.props;
        DirectoryActions.getSharedList(id);
    };

    componentDidMount() {
       // this.initialize();
       console.log('세션 스토리지',sessionStorage.id);
       this.setState({folderList: this.getSharedList(sessionStorage.id)});
    }

    render() {
        const { folderList } = this.state;
        const { sharedList } = this.props;

        return (
            <div style={{ display: "flex" }}>
                {console.log('sharedList:::::::::', sharedList)}
                <Directory list={sharedList} />
                <Context />
            </div>
        );
    }
}

export default connect(
    (state) => ({
        sharedList: state.directory.get("sharedList"),
        privateList: state.directory.get("privateList"),
        userId: state.user.get("id")
    }),
    (dispatch) => ({
        DirectoryActions: bindActionCreators(directoryActions, dispatch)
    })
)(DirectoryContainer);
