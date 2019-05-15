import React from "react";
import styles from "./EditFolderModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import OutlinedTextField from "../../material/OutlinedTextField";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Create } from '@material-ui/icons';

library.add(faUserFriends);

const cx = classNames.bind(styles);

class EditFolderModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            folder_name: ''
        }
    }
    handleTextChange = (event) => {
        this.setState({ folder_name: event.target.value });
    };

    render(){
        const {visible, onConfirm, onCancel, folder_id}=this.props;
        const {handleTextChange}=this;
        return (
        <ModalWrapper visible={visible}>
        <div className={cx("question")}>
            <div className={cx("title")}>
                <Create icon="user-friends" size="2x" color="#1C90FB" />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>폴더 이름 변경</strong>
            </div>
            <br />
            <div className={cx("description")}>
                변경하실 폴더명을 입력해주세요.
            </div>
            <br />
            <h3>폴더명</h3>
            <OutlinedTextField  handleText={handleTextChange} value={this.props.folder_name}/>
            <br />
            <br />
        </div>

        <div className={cx("options")}>
            <Button theme='outline' onClick={onCancel}>
                취소
            </Button>
            <Button theme='outline' onClick={()=>{
                onConfirm(folder_id,this.state.folder_name);
                onCancel();
            }}>수정</Button>
        </div>
    </ModalWrapper>)
    }
        }

export default EditFolderModal;