// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as userActions from "../../store/modules/user";
// import Intro from "../../components/user/intro";

// class IntroContainer extends Component {
//     login = (email, password, autoLogin) => {
//         const {UserActions} = this.props;
//         UserActions.login(email, password, autoLogin);
//     };

//     render() {
//         const { login } = this;
//         return <Intro action={login} />
//     }
// }

// export default connect(
//     null,
//     dispatch => ({
//         UserActions: bindActionCreators(userActions, dispatch)
//     })
// )(IntroContainer);
