import React from "react";
import styles from "./NoticeForm.scss";
import classNames from "classnames/bind";
import Button from "../../common/Button";
import MultilineTextField from "../MultilineTextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faFeatherAlt);

const cx = classNames.bind(styles);

class NoticeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNoticeWritable: true
    };
  }

  render() {
    const { onCancel } = this.props;

    return (
      <div className={cx("nf-wrapper")}>
        <div className={cx("title")}>
          <FontAwesomeIcon icon="feather-alt" size="1x" color="#1C90FB" />
          &nbsp;&nbsp;공지사항 입력
          <p>공지하고자 하는 제목과 내용을 기입 후 하단의 작성 버튼을 클릭하세요.</p>
        </div>

        <div className={cx("left")}>
          <MultilineTextField />
        </div>
        <div className={cx("btn")}>
          <Button key="admin" theme="outline" to="/admin" onClick={onCancel}>
            취소
          </Button>
          <Button key="admin" theme="outline" to="/admin" onClick={(e) => this.handleWriteNotice}>
            작성
          </Button>
        </div>
      </div>
    );
  }
}

export default NoticeForm;
