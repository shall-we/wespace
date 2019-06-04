import React from "react";
import styles from './ManageEmployees.scss';
import classNames from 'classnames/bind';
import logo from 'image/employees.png';
import CustomizedTables from 'components/admin/CustomizedTables';

const cx = classNames.bind(styles);

class ManageEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewClicked: true,
    }
  }

  handleCreate = (data) => {
    const { notification } = this.state;
    this.setState({
      notification: notification.concat({ id: this.id++, ...data })
    });
  }

  handleClick = () => {
    console.log('accordionPosition: ');
  }

  render() {
    const { userList = [], noteCount = [], onDelete } = this.props;

    return (
      <div className={cx('cx-wrapper')}>
        <div className={cx('cx-title')}>
          <img className={cx('logo')} src={logo} alt='logo'/><br />
          <p>현재 WESPACE에 가입되어 있는 직원 목록입니다.&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div>
          <CustomizedTables onDelete={onDelete} userList={userList} noteCount={noteCount} />
        </div>
      </div>
    );
  }
}

export default ManageEmployees;
