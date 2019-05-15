import React from "react";
import styles from "./UpdateNoteModal.scss";
import classNames from "classnames/bind";
import ModalWrapper from "../ModalWrapper";
import Button from "../../common/Button";
import OutlinedTextField from "../../material/OutlinedTextField";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Create } from '@material-ui/icons';

library.add(faUserFriends);

const cx = classNames.bind(styles);

class UpdateNoteModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            note_name: ''
        }
    }
    handleTextChange = (event) => {
        this.setState({ note_name: event.target.value });
    };

    render(){
        const {visible, onConfirm, onCancel, note_id}=this.props;
        const {handleTextChange}=this;
        return (
        <ModalWrapper visible={visible}>
        <div className={cx("question")}>
            <div className={cx("title")}>
                <Create icon="user-friends" size="2x" color="#1C90FB" />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>파일 이름 변경</strong>
            </div>
            <br />
            <div className={cx("description")}>
                변경하실 파일명을 입력해주세요.
            </div>
            <br />
            <h3>파일명</h3>
            <OutlinedTextField  handleText={handleTextChange} value={this.props.folder_name}/>
            <br />
            <br />
        </div>

        <div className={cx("options")}>
            <Button theme='outline' onClick={onCancel}>
                취소
            </Button>
            <Button theme='outline' onClick={()=>{
                onConfirm(note_id,this.state.note_name);
                onCancel();
            }}>수정</Button>
        </div>
    </ModalWrapper>)
    }
        }

export default UpdateNoteModal;