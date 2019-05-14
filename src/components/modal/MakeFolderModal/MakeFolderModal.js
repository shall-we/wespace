import React from "react";
import styles from "./MakeFolderModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import OutlinedTextField from "../../material/OutlinedTextField";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUserFriends);

const cx = classNames.bind(styles);

class MakeFolderModal extends React.Component{
    state = {
        folder_name: '',
    };
    handleTextChange = (event) => {
        this.setState({ folder_name: event.target.value });
    };

    render(){
        const {visible, onConfirm, onCancel,user_id}=this.props;
        const {handleTextChange}=this;
        return (
        <ModalWrapper visible={visible}>
        <div className={cx("question")}>
            <div className={cx("title")}>
                <FontAwesomeIcon icon="user-friends" size="2x" color="#1C90FB" />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>공유 폴더 생성</strong>
            </div>
            <br />
            <div className={cx("description")}>
                공유할 폴더명을 입력해주세요.
            </div>
            <br />
            <h3>폴더명</h3>
            <OutlinedTextField  handleText={handleTextChange}/>
            <br />
            <br />
        </div>

        <div className={cx("options")}>
            <Button theme='outline' onClick={onCancel}>
                취소
            </Button>
            <Button theme='outline' onClick={()=>{
                onConfirm(this.state.folder_name,user_id);
                onCancel();
            }}>생성</Button>
        </div>
    </ModalWrapper>)
    }
        }

export default MakeFolderModal;