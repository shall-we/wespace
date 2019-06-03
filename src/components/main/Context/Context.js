import React from "react";
import styles from './Context.scss';
import classNames from 'classnames/bind';
import logo from 'image/welcome.png';
import Collapsible from './component/Collapsible';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

class Context extends React.Component {
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

  handleModify = (title, content, index) => {
    // const { title, content } = this.props;
    console.log(title, content, index);
    // this.props.onModify(notice, notice);
  }

  handleClick = (index) => {
    console.log('accordionPosition: ', index);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.noticeList !== prevState.noticeList) {
      console.log('[Context.js] getDerivedStateFromProps');
      return { noticeList: nextProps.noticeList };
    }
    return null;
  }

  render() {
    const { noticeList = [], onModify, onDelete } = this.props;

    return (
      <div className={cx('cx-wrapper')}>
        <div className={cx('cx-title')}>
          <img className={cx('logo')} src={logo} alt='logo'/><br />
          <p>현재 등재된 공지사항 목록입니다.&nbsp;&nbsp;&nbsp;
            <Button key='btn-add-notice' theme='outline' onCreate="true" onClick={this.props.onWrite}>
              공지사항 추가하기
            </Button>
          </p>
        </div>

        <div>
          <ul>
            {noticeList.map((item, index) => {
              return (
                <Collapsible transitionTime="200" trigger={item.title} triggerWhenOpen={this.handleClick(item.id)} onOpen={(e) => console.log(index)}>
                <div className={cx('right')}>
                  <Button key='btn-update' theme='outline' onClick={() => onModify(item.id, item.title, item.content)}>수정</Button>
                  <Button key='btn-delete' theme='outline' onClick={() => onDelete(item.id)}>삭제</Button>
                </div>
                <p>{item.content.split('\n').map(line => { return (<span>{line}<br /></span>) })}</p>
                </Collapsible>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Context;
