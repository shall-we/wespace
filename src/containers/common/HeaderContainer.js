import React, { Component } from 'react';
import Header from '../../components/common/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../store/modules/user';
import {withRouter} from 'react-router-dom';

class HeaderContainer extends Component {

  logout = () => {
    const { UserActions } = this.props;
    UserActions.logout();
    //this.props.history.push('/');
  }
  render() {
    const { name,profile } = this.props;
    const { logout } = this;
    return (
      <Header
        name={name}
        profile={profile}
        logout={logout}
      />
    );
  }
}

  export default connect(
    (state) => ({
      name: state.user.get('name'),
      profile: state.user.get('profile')
    }),
    (dispatch) => ({
      UserActions: bindActionCreators(userActions, dispatch)
    })
  )(withRouter(HeaderContainer));